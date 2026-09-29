// MAISON — Service Worker (Offline-First Cultural Architecture)
// Compliant with Apple App Store (Guideline 4.2) and Google Play Store Offline requirements

const CACHE_NAME = 'maison-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/maison-data.js',
  '/screens-data.js',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/images/maison_app_logo.jpg',
  '/images/editorial/berke_saygili.jpg',
  '/images/editorial/slow_living_coffee_terrace.jpg',
  '/images/editorial/amalfi_coast.jpg',
  '/images/editorial/author_deniz.jpg',
  '/images/editorial/architect_selin.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[MAISON SW] Pre-caching core cultural shell...');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[MAISON SW] Non-critical asset cache failure:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Skip API calls from cache-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(req).catch(() => {
        return new Response(JSON.stringify({ offline: true, error: 'İnternet bağlantısı yok' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Cache-first, then network strategy for assets
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(req).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests
        if (req.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
