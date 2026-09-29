const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.webmanifest': 'application/manifest+json'
};

// Load .env if present
try {
  if (typeof process.loadEnvFile === 'function') {
    process.loadEnvFile();
  }
} catch (e) {}

const { handleApiRequest } = require('./server/editor-api');
const scheduler = require('./server/editor/scheduler');

const server = http.createServer((req, res) => {
  // CORS & Security headers for ngrok and multi-device access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-requested-with');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  let reqUrl = decodeURI(req.url.split('?')[0]);

  // Route API requests to AI Editor API router
  if (reqUrl.startsWith('/api/')) {
    return handleApiRequest(req, res);
  }

  // Static files & editor panel route
  if (reqUrl === '/') reqUrl = '/index.html';
  if (reqUrl === '/editor') reqUrl = '/editor.html';

  const filePath = path.join(PUBLIC_DIR, reqUrl);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const localIp = getLocalIp();
  scheduler.start();
  console.log(`==================================================`);
  console.log(`  🏛️ MAISON — DAHA ÖZENLİ BİR HAYAT`);
  console.log(`  💻 App:         http://localhost:${PORT}`);
  console.log(`  ✍️ AI Editor:   http://localhost:${PORT}/editor`);
  console.log(`  📶 Wi-Fi Adresi: http://${localIp}:${PORT}`);
  console.log(`==================================================`);
});
