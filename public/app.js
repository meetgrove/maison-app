// MAISON — Digital Cultural House Application Engine
// Strictly implementing the 57 Core Principles

document.addEventListener('DOMContentLoaded', () => {
  // Centralized Translation System (TR / EN)
  const TRANSLATIONS = {
    tr: {
      brand_title: "MAISON",
      brand_tagline: "DAHA ÖZENLİ BİR HAYAT",
      brand_subtag: "DİJİTAL KÜLTÜR EVİ",
      nav_home: "Ana Sayfa",
      nav_explore: "Keşfet",
      nav_salon: "Salon",
      nav_profile: "Profil",
      greeting_evening: "İyi akşamlar",
      greeting_morning: "Günaydın",
      greeting_day: "İyi günler",
      quote_home: "“Güzel insanlar,<br>güzel fikirlerle daha<br>güzel bir dünyaya.”",
      quote_home_author: "— MAISON",
      hero_badge: "BUGÜNÜN İLHAMI",
      hero_title: "Daha Yavaş,<br>Daha Derin,<br>Daha Sen.",
      hero_btn: "Günün Yazısını Oku →",
      cat_articles: "Yazılar",
      cat_salon: "Salon",
      cat_collections: "Koleksiyonlar",
      cat_people: "People",
      cat_studio: "Studio",
      editor_pick_title: "Editörün Seçkisi",
      view_all: "Tümünü Gör →",
      studio_sec_title: "Bugün birkaç dakikanızı kendinize ayırın.",
      settings_title: "AYARLAR",
      settings_app: "UYGULAMA",
      settings_lang: "Dil",
      settings_appearance: "Görünüm",
      settings_light: "Açık",
      settings_dark: "Koyu",
      settings_system: "Sistem",
      settings_notif: "Bildirimler",
      settings_notif_desc: "Önemli editoryal güncellemeler ve davetler.",
      settings_pref: "TERCİHLER",
      settings_interests: "İlgi Alanlarım",
      settings_interests_desc: "Kişiselleştirilmiş akış için seçili başlıklar.",
      settings_edit: "Düzenle",
      settings_evening: "Akşam Bülteni",
      settings_evening_desc: "Günün sakinleşme özeti ve akşam seçkisi her gün 20:30'da sunulur.",
      settings_evening_preview: "Bu Akşam MAISON'da Önizle →",
      settings_quiet: "Sessiz Okuma Modu",
      settings_quiet_desc: "Okuma ekranında dikkat dağıtıcı unsurları kaldırır, daha yalın ve sakin bir tipografi sunar.",
      onboarding_title: "MAISON'ı sizin için biraz daha kişisel hale getirelim.",
      onboarding_question: "Neler ilginizi çekiyor?",
      onboarding_desc: "Seçtiğiniz ilgi alanları editoryal akışınızı ve keşiflerinizi zenginleştirecek.",
      onboarding_btn: "MAISON'ı keşfetmeye başla →",
      evening_title: "Bu Akşam MAISON'da",
      evening_sub: "Günün sakinleşme ve ilham seçkisi.",
      bulletin_reading: "Bir Okuma",
      bulletin_idea: "Bir Fikir",
      bulletin_studio: "Bir Studio Videosu",
      bulletin_discovery: "Bir Keşif",
      bulletin_music: "Bir Müzik Önerisi",
      cat_maison_ai: "MAISON AI",
      ai_title: "MAISON AI",
      ai_subtitle: "Bugün neyi keşfetmek istersin?",
      ai_desc: "Kişisel kültür küratörünüz. Zevklerinizden, okumalarınızdan ve çevrelerinizden ilham alarak MAISON dünyasını birbirine bağlar.",
      ai_placeholder: "Aklındaki şeyi yaz...",
      ai_starter_show_me: "Bana Bir Şey Göster",
      ai_starter_show_me_desc: "Bugün henüz keşfetmediğim bir şey bul.",
      ai_starter_surprise: "Beni Şaşırt",
      ai_starter_surprise_desc: "Zevklerimin biraz dışına çıkar.",
      ai_starter_day: "Bir Gün Tasarla",
      ai_starter_day_desc: "Bana kişisel bir MAISON günü oluştur.",
      ai_starter_taste: "Zevkimi Keşfet",
      ai_starter_taste_desc: "MAISON'daki seçimlerimden ortak noktaları bul.",
      ai_starter_people: "Bana Yakın Birini Bul",
      ai_starter_people_desc: "Benzer kültürel ilgileri olan insanları keşfet.",
      ai_why_recommended: "Neden bunu önerdin?",
      profile_passport: "Kültür Pasaportu",
      profile_tab_passport: "Pasaport"
    },
    en: {
      brand_title: "MAISON",
      brand_tagline: "A MORE MINDFUL LIFE",
      brand_subtag: "DIGITAL HOUSE OF CULTURE",
      nav_home: "Home",
      nav_explore: "Explore",
      nav_salon: "Salon",
      nav_profile: "Profile",
      greeting_evening: "Good evening",
      greeting_morning: "Good morning",
      greeting_day: "Good day",
      quote_home: "“Fine minds,<br>fine ideas, shaping<br>a finer world.”",
      quote_home_author: "— MAISON",
      hero_badge: "DAILY INSPIRATION",
      hero_title: "Slower,<br>Deeper,<br>More You.",
      hero_btn: "Read Today's Story →",
      cat_articles: "Stories",
      cat_salon: "Salon",
      cat_collections: "Collections",
      cat_people: "People",
      cat_studio: "Studio",
      editor_pick_title: "Curator's Selection",
      view_all: "View All →",
      studio_sec_title: "Take a few minutes for yourself today.",
      settings_title: "SETTINGS",
      settings_app: "APPLICATION",
      settings_lang: "Language",
      settings_appearance: "Appearance",
      settings_light: "Light",
      settings_dark: "Dark",
      settings_system: "System",
      settings_notif: "Notifications",
      settings_notif_desc: "Essential editorial dispatches and salon invitations.",
      settings_pref: "PREFERENCES",
      settings_interests: "My Interests",
      settings_interests_desc: "Topics chosen to curate your personal feed.",
      settings_edit: "Edit",
      settings_evening: "Evening Dispatch",
      settings_evening_desc: "Daily wind-down digest and evening curation at 20:30.",
      settings_evening_preview: "Preview Evening Dispatch →",
      settings_quiet: "Quiet Reading Mode",
      settings_quiet_desc: "Removes distractions during reading, offering serene typography.",
      onboarding_title: "Let's make MAISON a bit more personal for you.",
      onboarding_question: "What inspires you?",
      onboarding_desc: "Your selections will enrich your editorial feed and discoveries.",
      onboarding_btn: "Start exploring MAISON →",
      evening_title: "This Evening at MAISON",
      evening_sub: "Your daily wind-down and inspiration curation.",
      bulletin_reading: "A Reading",
      bulletin_idea: "An Idea",
      bulletin_studio: "A Studio Video",
      bulletin_discovery: "A Discovery",
      bulletin_music: "A Musical Selection",
      cat_maison_ai: "MAISON AI",
      ai_title: "MAISON AI",
      ai_subtitle: "What would you like to discover today?",
      ai_desc: "Your personal cultural curator. Connecting the MAISON world inspired by your tastes, readings, and circles.",
      ai_placeholder: "Write what's on your mind...",
      ai_starter_show_me: "Show Me Something",
      ai_starter_show_me_desc: "Find something I haven't discovered today.",
      ai_starter_surprise: "Surprise Me",
      ai_starter_surprise_desc: "Step slightly outside of my usual tastes.",
      ai_starter_day: "Design a Day",
      ai_starter_day_desc: "Create a personalized MAISON day for me.",
      ai_starter_taste: "Discover My Taste",
      ai_starter_taste_desc: "Find common threads across my MAISON choices.",
      ai_starter_people: "Find Someone Like Me",
      ai_starter_people_desc: "Discover people with similar cultural affinities.",
      ai_why_recommended: "Why was this recommended?",
      profile_passport: "Cultural Passport",
      profile_tab_passport: "Passport"
    }
  };

  // ==========================================================
  // CROSS-SYSTEM SYNERGY & REACTIVE EVENT BUS (Article 57)
  // ==========================================================
  const MaisonBus = {
    events: {},
    on(eventName, callback) {
      if (!this.events[eventName]) this.events[eventName] = [];
      this.events[eventName].push(callback);
    },
    off(eventName, callback) {
      if (!this.events[eventName]) return;
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    },
    emit(eventName, data) {
      if (!this.events[eventName]) return;
      this.events[eventName].forEach(cb => {
        try { cb(data); } catch (err) { console.error(`[MaisonBus] Error in ${eventName}:`, err); }
      });
    }
  };
  window.MaisonBus = MaisonBus;

  // Native Haptic Feedback (Taptic Engine / Capacitor / Web Vibration)
  function triggerHaptic(type = 'light') {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) {
      try {
        const Haptics = window.Capacitor.Plugins.Haptics;
        if (type === 'medium') Haptics.impact({ style: 'MEDIUM' });
        else if (type === 'heavy') Haptics.impact({ style: 'HEAVY' });
        else if (type === 'success') Haptics.notification({ type: 'SUCCESS' });
        else if (type === 'warning') Haptics.notification({ type: 'WARNING' });
        else Haptics.impact({ style: 'LIGHT' });
        return;
      } catch (e) {}
    }
    if (navigator && typeof navigator.vibrate === 'function') {
      try {
        if (type === 'medium') navigator.vibrate(25);
        else if (type === 'heavy') navigator.vibrate(40);
        else if (type === 'success') navigator.vibrate([20, 60, 20]);
        else if (type === 'warning') navigator.vibrate([40, 100, 40]);
        else navigator.vibrate(12);
      } catch (e) {}
    }
  }
  window.triggerHaptic = triggerHaptic;

  // MediaSession API Integration for Lockscreen Audio Controls
  function updateMediaSession(trackMeta = {}) {
    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: trackMeta.title || 'Daha Yavaş, Daha Derin',
          artist: trackMeta.artist || 'MAISON Audio Curator',
          album: 'MAISON Dijital Kültür Evi',
          artwork: [
            { src: trackMeta.img || '/images/editorial/slow_living_coffee_terrace.jpg', sizes: '512x512', type: 'image/jpeg' }
          ]
        });
        navigator.mediaSession.setActionHandler('play', () => {
          if (!state.isPlayingAudio) startAmbientAudio();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          if (state.isPlayingAudio) stopAmbientAudio();
        });
        navigator.mediaSession.setActionHandler('seekbackward', () => {
          state.audioProgress = Math.max(0, state.audioProgress - 15);
        });
        navigator.mediaSession.setActionHandler('seekforward', () => {
          state.audioProgress = Math.min(252, state.audioProgress + 15);
        });
      } catch (e) {}
    }
  }
  window.updateMediaSession = updateMediaSession;

  const ALL_INTERESTS = [
    { id: 'art', tr: 'Sanat', en: 'Art', icon: '🎨' },
    { id: 'architecture', tr: 'Mimari', en: 'Architecture', icon: '🏛️' },
    { id: 'design', tr: 'Tasarım', en: 'Design', icon: '📐' },
    { id: 'books', tr: 'Kitaplar', en: 'Books', icon: '📚' },
    { id: 'gastronomy', tr: 'Gastronomi', en: 'Gastronomy', icon: '☕' },
    { id: 'travel', tr: 'Seyahat', en: 'Travel', icon: '✈️' },
    { id: 'fashion', tr: 'Moda', en: 'Fashion', icon: '🧥' },
    { id: 'watches', tr: 'Saatler', en: 'Watches', icon: '⏱️' },
    { id: 'classic_cars', tr: 'Klasik otomobiller', en: 'Classic Cars', icon: '🏎️' },
    { id: 'photography', tr: 'Fotoğraf', en: 'Photography', icon: '📷' },
    { id: 'music', tr: 'Müzik', en: 'Music', icon: '🎵' },
    { id: 'yoga_movement', tr: 'Yoga & Hareket', en: 'Yoga & Movement', icon: '🧘' },
    { id: 'wellness', tr: 'İyi yaşam', en: 'Wellness', icon: '🌿' },
    { id: 'philosophy', tr: 'Felsefe & Düşünce', en: 'Philosophy & Thought', icon: '💡' },
    { id: 'home_living', tr: 'Ev & Yaşam', en: 'Home & Living', icon: '🕯️' },
    { id: 'cinema', tr: 'Sinema', en: 'Cinema', icon: '🎬' },
    { id: 'nature', tr: 'Doğa', en: 'Nature', icon: '🍃' },
    { id: 'crafts', tr: 'El sanatları', en: 'Crafts', icon: '🏺' }
  ];

  const EDITORIAL_CULTURAL_POOL = [
    {
      id: 'art_amalfi',
      title_tr: "Akdeniz'de Zamansızlık",
      title_en: "Timelessness in the Mediterranean",
      sub_tr: "Bir yaşam biçimi üzerine.",
      sub_en: "Reflections on a mindful way of living.",
      tags: ['travel', 'wellness', 'philosophy'],
      badge_tr: "YAZI",
      badge_en: "ESSAY",
      author: "Deniz Kaya",
      time_tr: "7 dk okuma",
      time_en: "7 min read",
      img: "/images/editorial/amalfi_coast.jpg",
      avatar: "/images/editorial/author_deniz.jpg",
      actionKey: 'amalfi'
    },
    {
      id: 'craft_ceramic',
      title_tr: "Toprağın Zarafeti: El Yapımı Seramik Sanatı",
      title_en: "Elegance of Earth: Handcrafted Ceramic Traditions",
      sub_tr: "Geleneksel atölyelerden modern formlara zanaat yolculuğu.",
      sub_en: "A craft journey from heritage ateliers to modern forms.",
      tags: ['crafts', 'design', 'art'],
      badge_tr: "ZANAAT",
      badge_en: "CRAFT",
      author: "Maison Atölye",
      time_tr: "5 görsel • Keşif",
      time_en: "5 visuals • Discovery",
      img: "/images/editorial/ceramic_bowl.jpg",
      avatar: "/images/editorial/author_deniz.jpg",
      actionKey: 'slow_living'
    },
    {
      id: 'salon_club',
      title_tr: "Kitap Kulübü: Zamanın İzinde",
      title_en: "Book Club: In Search of Lost Time",
      sub_tr: "Bu ay Marcel Proust ve edebiyatın duyusal hafızası.",
      sub_en: "This month: Marcel Proust and the sensory memory of literature.",
      tags: ['books', 'philosophy'],
      badge_tr: "SOHBET",
      badge_en: "GATHERING",
      author: "Deniz Kaya & Selin",
      time_tr: "1.2K üye",
      time_en: "1.2K members",
      img: "/images/editorial/salon_gathering.jpg",
      avatar: "/images/editorial/author_deniz.jpg",
      actionKey: 'salon'
    },
    {
      id: 'art_florence',
      title_tr: "Floransa: Rönesans'ın İzinde Bir Sanat Rotası",
      title_en: "Florence: An Art Journey Through the Renaissance",
      sub_tr: "Uffizi'den Arno kıyılarına mimari ve kültürel duraklar.",
      sub_en: "Architectural and cultural stops from Uffizi to the banks of Arno.",
      tags: ['art', 'travel', 'architecture'],
      badge_tr: "ROTA",
      badge_en: "ROUTE",
      author: "Elif Demir",
      time_tr: "15 görsel",
      time_en: "15 visuals",
      img: "/images/editorial/florence_duomo.jpg",
      avatar: "/images/editorial/architect_selin.jpg",
      actionKey: 'mekanlar'
    },
    {
      id: 'arch_modern',
      title_tr: "Bauhaus ve Dingin Mekân Felsefesi",
      title_en: "Bauhaus and the Philosophy of Serene Spaces",
      sub_tr: "Işık, ahşap ve işlevin zamansız harmonisi.",
      sub_en: "The timeless harmony of light, wood, and function.",
      tags: ['architecture', 'design', 'home_living'],
      badge_tr: "MİMARİ",
      badge_en: "ARCHITECTURE",
      author: "Selin Yılmaz",
      time_tr: "6 dk okuma",
      time_en: "6 min read",
      img: "/images/editorial/minimal_living_room.jpg",
      avatar: "/images/editorial/architect_selin.jpg",
      actionKey: 'slow_living'
    },
    {
      id: 'wellness_breath',
      title_tr: "Sessiz Sabah: 2 Dakikalık Nefes Pratiği",
      title_en: "Quiet Morning: 2-Minute Breath Practice",
      sub_tr: "Güne dingin ve odaklı başlamak için ritüel.",
      sub_en: "A grounding ritual to begin your day with clarity.",
      tags: ['wellness', 'yoga_movement'],
      badge_tr: "STUDIO",
      badge_en: "STUDIO",
      author: "Maison Studio",
      time_tr: "2:40 video",
      time_en: "2:40 video",
      img: "/images/editorial/studio_yoga_morning.jpg",
      avatar: "/images/editorial/chef_kerem.jpg",
      actionKey: 'vid_yoga_sabah'
    },
    {
      id: 'music_valse',
      title_tr: "Valse d'Amélie ve Melankolik Piyano",
      title_en: "Valse d'Amélie & Melancholic Piano",
      sub_tr: "Yann Tiersen'in akordeon ve piyano tınıları.",
      sub_en: "The enchanting notes of accordion and piano by Yann Tiersen.",
      tags: ['music', 'cinema'],
      badge_tr: "MÜZİK",
      badge_en: "MUSIC",
      author: "Maison Salon",
      time_tr: "3:10 dinleme",
      time_en: "3:10 listen",
      img: "/images/editorial/music_valse_amelie.jpg",
      avatar: "/images/editorial/author_deniz.jpg",
      actionKey: 'muzikler'
    }
  ];

  function t(key, fallback = '') {
    const lang = (state && state.language) ? state.language : (localStorage.getItem('maison_language') || 'tr');
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.tr;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.tr[key] !== undefined ? TRANSLATIONS.tr[key] : fallback || key);
  }

  const state = {
    currentView: 'home',
    viewHistory: [],
    activeTab: 'home',
    mode: 'dynamic',
    soundEnabled: true,
    language: localStorage.getItem('maison_language') || 'tr',
    theme: localStorage.getItem('maison_theme') || 'light',
    notificationsEnabled: localStorage.getItem('maison_notifications') !== 'false',
    userInterests: (() => {
      try {
        const stored = localStorage.getItem('maison_interests');
        return stored ? JSON.parse(stored) : ['art', 'architecture', 'books', 'travel'];
      } catch (e) {
        return ['art', 'architecture', 'books', 'travel'];
      }
    })(),
    onboardingCompleted: localStorage.getItem('maison_onboarding_completed') === 'true',
    eveningBulletin: localStorage.getItem('maison_evening_bulletin') !== 'false',
    quietReadingMode: localStorage.getItem('maison_quiet_reading') === 'true',
    biometricLockEnabled: localStorage.getItem('maison_biometric_lock') === 'true',
    recentReadings: (() => {
      try { return JSON.parse(localStorage.getItem('maison_recent_readings') || '[]'); } catch(e) { return []; }
    })(),
    capturedQuote: null,
    isPlayingAudio: false,
    audioProgress: 0,
    audioInterval: null,
    activeTrackId: 'track_valse_amelie',
    activeArticleId: 'slow_living',
    activeRoomId: 'sanat_yasam',
    activeProductId: 'ceramic_bowl',
    tourActive: false,
    tourStep: 0,
    savedFilms: [
      'Perfect Days (Wim Wenders, 2023)',
      'Drive My Car (Ryusuke Hamaguchi, 2021)',
      'Nostalghia (Andrei Tarkovsky, 1983)'
    ],
    watchedFilms: [
      'Perfect Days (Wim Wenders, 2023)'
    ],
    savedBooks: [
      'Günün Kalanları — Kazuo Ishiguro',
      'Gölgeye Övgü — Cuniçiro Tanizaki',
      'Varlık ve Zaman — Martin Heidegger'
    ],
    savedPlaces: [
      'Alancha Fine Dining • Alaçatı',
      'Amanruya Taş Evler • Bodrum',
      'Zuma Bosphorus • Yeniköy'
    ],
    savedCities: [
      'Floransa & Toskana',
      'Kaş & Kalkan',
      'Bologna'
    ],
    savedArticles: [
      'slow_living',
      'amalfi',
      'istanbul_avlular'
    ],
    joinedCircles: (() => {
      try {
        const stored = localStorage.getItem('maison_joined_circles');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return ['c_mimari', 'c_sanat', 'c_italya', 'c_okurlar'];
    })(),
    favoriteCircles: ['c_mimari'],
    savedStudioVideos: ['vid_yoga_sabah'],
    aiChatHistory: (() => {
      try {
        const stored = localStorage.getItem('maison_ai_history');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return [];
    })(),
    userCollections: [
      { id: 'col_sabah', title: 'Sabah Rutinim', count: 4 },
      { id: 'col_zaman', title: 'Kendime Ayırdığım Zaman', count: 6 },
      { id: 'col_zanaat', title: 'Zanaat & İlham', count: 3 }
    ],
    studioPlaybackState: {
      isPlaying: false,
      currentTime: 0,
      duration: 192,
      timer: null
    },
    collabCollections: (() => {
      try {
        const stored = localStorage.getItem('maison_collab_collections');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return [
        {
          id: 'collab_istanbul_haftasonu',
          title: "İstanbul'da Bir Hafta Sonu",
          subtitle: 'Sen + 3 kişi (Defne, Mert, Selin)',
          count: 12,
          cover: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80',
          desc: 'Gizli avlular, sahil kahveleri ve tarihi pastaneler seçkisi.',
          participants: ['Sen', 'Defne', 'Mert', 'Selin'],
          items: [
            { id: 'item_ist_1', title: 'Karaköy Nordstern Han', note: 'Sabah ışığında cephe detayları ve avludaki kahveci.', by: 'Mert', img: '/images/editorial/art_exhibition.jpg' },
            { id: 'item_ist_2', title: 'Yeniköy Sahil Yolu', note: 'Boğaz kıyısında sessiz bir yürüyüş ve bank molası.', by: 'Sen', img: '/images/editorial/bosphorus_sunset.jpg' },
            { id: 'item_ist_3', title: 'Moda Çınaraltı Çay Bahçesi', note: 'Eski İstanbul ritüeli, rüzgar ve kitap.', by: 'Defne', img: '/images/editorial/slow_living_tuscany.jpg' },
            { id: 'item_ist_4', title: 'Pera Palas Patisserie', note: 'Klasik Fransız pastacılığı ve nostaljik ambiyans.', by: 'Selin', img: '/images/editorial/library_books.jpg' }
          ]
        },
        {
          id: 'collab_bogaz',
          title: 'Boğaz Kıyıları',
          subtitle: 'Sen + Mert Kaya',
          count: 3,
          cover: '/images/editorial/bosphorus_sunset.jpg',
          desc: 'Boğaz kıyısında yürüyüş, mimari ve mola rotaları.',
          participants: ['Sen', 'Mert Kaya'],
          items: [
            { id: 'item_1', title: 'Bebek Kahvesi', note: 'Sabah kahvesi ve gazete okumak için.', by: 'Mert Kaya', img: '/images/editorial/bosphorus_sunset.jpg' },
            { id: 'item_2', title: 'Yeniköy Sahil Yürüyüşü', note: 'Gün batımı yürüyüşü ve dinginlik rotası.', by: 'Sen', img: '/images/editorial/amalfi_coast.jpg' },
            { id: 'item_3', title: 'Sadberk Hanım Müzesi', note: 'Boğaz kıyısında Osmanlı zanaat seçkisi.', by: 'Mert Kaya', img: '/images/editorial/art_sculpture.jpg' }
          ]
        }
      ];
    })(),
    myRooms: (() => {
      try {
        const stored = localStorage.getItem('maison_my_rooms');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return [
        {
          id: "room_mimari_modernizm",
          title: "Modernizm Üzerine",
          circleName: "İstanbul Mimari",
          members: 14,
          activeUsers: 8,
          topic: "Cumhuriyet dönemi kamu yapıları ve rasyonel estetik.",
          status: "accepted"
        },
        {
          id: "room_roma_haftasonu",
          title: "Roma'da Bir Hafta Sonu",
          circleName: "İtalya",
          members: 5,
          activeUsers: 4,
          topic: "Piazza Navona sabahları ve Trastevere akşam rotaları.",
          status: "invited"
        },
        {
          id: "room_mimari_yuruyus",
          title: "İstanbul'da Mimari Yürüyüş",
          circleName: "İstanbul Mimari",
          members: 8,
          activeUsers: 5,
          topic: "Pera'dan Karaköy'e modernist cephe rotası.",
          status: "accepted"
        },
        {
          id: "room_okurlar_pazar",
          title: "Pazar Sabahı Kitap Sohbeti",
          circleName: "Pazar Sabahı Okurları",
          members: 12,
          activeUsers: 7,
          topic: "Görünmez Kentler ve şehir hafızası.",
          status: "accepted"
        },
        {
          id: "sanat_yasam",
          title: "Sanat & Yaşam",
          circleName: "Sanat & Yaşam",
          members: 28,
          activeUsers: 14,
          topic: "Sanat, Gündelik Hayatı Nasıl Değiştirir?",
          status: "accepted"
        }
      ];
    })(),
    myConnections: (() => {
      try {
        const stored = localStorage.getItem('maison_my_connections');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return [
        {
          id: "conn_ayse",
          name: "Ayşe",
          role: "Sanat Eleştirmeni & Yazar",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
          city: "İstanbul",
          interests: ["Sanat", "Mimari", "İstanbul", "Kitap"],
          mutualCount: 4,
          mutualCircles: ["İstanbul Mimari", "Modern Sanat Üzerine"],
          mutualCollections: ["İstanbul'da Bir Hafta Sonu"],
          quote: "Çağdaş sanatın mekanla kurduğu sessiz diyalog üzerine çalışıyor."
        },
        {
          id: "conn_mert",
          name: "Mert",
          role: "Mimar & Kent Araştırmacısı",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
          city: "Karaköy, İstanbul",
          interests: ["Mimari", "Fotoğraf", "İstanbul", "Seyahat"],
          mutualCount: 4,
          mutualCircles: ["İstanbul Mimari", "Fotoğraf Üzerine"],
          mutualCollections: ["Boğaz Kıyıları", "İstanbul'da Bir Hafta Sonu"],
          quote: "İyi mimarinin insanı yavaşlattığına inanıyorum."
        },
        {
          id: "conn_defne",
          name: "Defne",
          role: "Sanat Tarihçisi & Küratör",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
          city: "Kadıköy & Venedik",
          interests: ["Sanat", "Tarih", "İtalya", "Seramik"],
          mutualCount: 3,
          mutualCircles: ["Modern Sanat Üzerine", "İtalya'yı Sevenler"],
          mutualCollections: ["İstanbul'da Bir Hafta Sonu"],
          quote: "Venedik Bienali ve Akdeniz mimarisi üzerine yazıyor."
        }
      ];
    })(),
    circleDiscussions: (() => {
      try {
        const stored = localStorage.getItem('maison_circle_discussions');
        if (stored) return JSON.parse(stored);
      } catch (e) {}
      return {
        c_mimari: {
          id: "c_mimari",
          name: "İstanbul Mimari",
          category: "MİMARİ",
          members: 28,
          ideasCount: 143,
          topic: "İstanbul'da modernist mimarinin en iyi örneği sizce hangisi?",
          description: "Karaköy'den Moda'ya 20. yüzyıl mimari mirası, Sedad Hakkı Eldem ve kentsel bellek sohbetleri.",
          icon: "🏛️",
          subRooms: [
            { id: "room_mimari_modernizm", title: "Modernizm Üzerine", members: 14, activeUsers: 8, topic: "Cumhuriyet dönemi kamu yapıları ve rasyonel estetik." },
            { id: "room_mimari_pazar", title: "Pazar Sabahı Sohbeti", members: 22, activeUsers: 12, topic: "Karaköy'ün saklı hanları ve merdiven boşlukları." },
            { id: "room_mimari_rotalar", title: "İstanbul'da Görülmesi Gereken Yapılar", members: 19, activeUsers: 6, topic: "Sedad Hakkı Eldem ve Bruno Taut'un Boğaz izleri." }
          ],
          discussions: [
            {
              id: "disc_m1",
              author: "Mert",
              role: "Mimar & Araştırmacı",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
              time: "12 dk önce",
              text: "Bence Karaköy'deki bazı yapılar hâlâ yeterince konuşulmuyor. Örneğin Nordstern Han'ın cephe detayları inanılmaz bir zarafete sahip.",
              agrees: 7,
              userAgreed: false,
              replies: [
                { author: "Defne", role: "Sanat Tarihçisi", time: "8 dk önce", text: "Kesinlikle katılıyorum Mert. Giriş kapısındaki bronz rölyefler başlı başına bir inceleme konusu." }
              ]
            },
            {
              id: "disc_m2",
              author: "Selin",
              role: "Tasarımcı",
              avatar: "/images/editorial/architect_selin.jpg",
              time: "24 dk önce",
              text: "Ben özellikle 60'lar apartmanlarını çok ilginç buluyorum. Mozaik kaplı kolonlar, ahşap trabzanlar ve geniş balkon oranları bugün artık üretilmiyor.",
              agrees: 12,
              userAgreed: false,
              replies: []
            },
            {
              id: "disc_m3",
              author: "Can",
              role: "Fotoğrafçı",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
              time: "1 saat önce",
              text: "Moda Caddesi boyunca yürürken binaların pencere oranlarına dikkat edin; hepsi Boğaz rüzgarını içeri alacak şekilde tasarlanmış.",
              agrees: 9,
              userAgreed: false,
              replies: []
            }
          ]
        },
        c_okurlar: {
          id: "c_okurlar",
          name: "Pazar Sabahı Okurları",
          category: "EDEBİYAT",
          members: 28,
          ideasCount: 86,
          topic: "Bu hafta: Italo Calvino — Görünmez Kentler ve Şehir İmgeleri",
          description: "Hafıza, yavaşlık, felsefe ve edebiyat üzerine pazar günleri derin okuma sohbetleri.",
          icon: "📖",
          subRooms: [
            { id: "room_okurlar_pazar", title: "Pazar Sabahı Kitap Sohbeti", members: 12, activeUsers: 7, topic: "Görünmez Kentler ve şehir hafızası." },
            { id: "room_okurlar_calvino", title: "Görünmez Kentler Odası", members: 18, activeUsers: 9, topic: "Hangi hayali şehir seni daha çok anlatıyor?" }
          ],
          discussions: [
            {
              id: "disc_o1",
              author: "Ahmet",
              role: "Yazar",
              avatar: "/images/editorial/author_deniz.jpg",
              time: "18 dk önce",
              text: "Calvino'nun kitabında şehirler sadece fiziksel mekanlar değil, arzuların ve korkuların şekil almış halleri. 'İnşa ettiğin kent aslında kendi zihnindir.'",
              agrees: 14,
              userAgreed: false,
              replies: []
            },
            {
              id: "disc_o2",
              author: "Elif",
              role: "Küratör",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
              time: "42 dk önce",
              text: "Özellikle Zaira ve Maurilia bölümlerini tekrar okudum. Hatıralarla dolu bir sokaktan geçerken geçmişin ağırlığını hisseden var mı?",
              agrees: 8,
              userAgreed: false,
              replies: []
            }
          ]
        },
        c_italya: {
          id: "c_italya",
          name: "İtalya",
          category: "SEYAHAT",
          members: 17,
          ideasCount: 64,
          topic: "Floransa ve Bologna'nın saklı avluları ve trattoria ritüelleri",
          description: "Toskana vadilerinden Venedik kanallarına İtalyan estetiği, mimarisi ve yaşam sanatı.",
          icon: "🇮🇹",
          subRooms: [
            { id: "room_roma_haftasonu", title: "Roma'da Bir Hafta Sonu", members: 5, activeUsers: 4, topic: "Piazza Navona sabahları ve Trastevere akşam rotaları." },
            { id: "room_italya_scarpa", title: "Carlo Scarpa Mimarisi", members: 11, activeUsers: 6, topic: "Venedik Querini Stampalia ve detay zanaatı." }
          ],
          discussions: [
            {
              id: "disc_i1",
              author: "Leyla",
              role: "Tasarım Editörü",
              avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
              time: "30 dk önce",
              text: "Bologna'da Via dell'Inferno'daki küçük şaraphanede oturup sadece insanların geçişini izlemek... İtalya'nın en güzel tarafı bu telaşsızlık.",
              agrees: 11,
              userAgreed: false,
              replies: []
            }
          ]
        },
        c_sanat: {
          id: "c_sanat",
          name: "Sanat & Yaşam",
          category: "SANAT",
          members: 34,
          ideasCount: 112,
          topic: "Sanat sadece müzelerde mi vardır, yoksa evin bir köşesinde mi?",
          description: "Gündelik yaşamda sanatın yeri, sergiler, sanatçıların görme biçimleri ve evde sanatla yaşamak.",
          icon: "🎨",
          subRooms: [
            { id: "sanat_yasam", title: "Sanat & Yaşam", members: 28, activeUsers: 14, topic: "Sanat, Gündelik Hayatı Nasıl Değiştirir?" },
            { id: "room_sanat_arter", title: "Arter / Yeni Katmanlar", members: 16, activeUsers: 8, topic: "Çağdaş heykel ve mekan ilişkisi." }
          ],
          discussions: [
            {
              id: "disc_s1",
              author: "Zeynep Oğuz",
              role: "Küratör",
              avatar: "/images/editorial/architect_selin.jpg",
              time: "15 dk önce",
              text: "Sanat eseri bize sadece bakmayı değil, beklemeyi hatırlatıyor. Sabah kahvenizi içerken duvardaki bir gölgenin düşüşüne 2 dakika odaklanın.",
              agrees: 16,
              userAgreed: false,
              replies: []
            }
          ]
        }
      };
    })(),
    notifications: (typeof MAISON_DATA !== 'undefined' && MAISON_DATA.notifications)
      ? JSON.parse(JSON.stringify(MAISON_DATA.notifications))
      : [
          { id: 'notif_1', type: 'cultural', title: 'Yeni Küratörlü Yazı', message: 'Deniz Kaya: "Akdeniz\'de Zamansızlık" yayına girdi.', time: '10 dk önce', read: false, icon: '📖' },
          { id: 'notif_2', type: 'invitation', title: 'Mert Kaya seni davet etti', message: '"Boğaz Kıyıları" ortak koleksiyonuna katıl.', time: '1 saat önce', read: false, icon: '✉️' },
          { id: 'notif_3', type: 'interaction', title: 'Yorumuna yanıt geldi', message: 'Elif Demir: "Yavaş Yaşam" notunu beğendi.', time: '3 saat önce', read: false, icon: '💬' }
        ],
    profileSavedCat: 'all',
    likedArticles: [],
    articleLikesCount: {
      slow_living: 142,
      amalfi: 98,
      istanbul_avlular: 87
    },
    articleComments: {
      slow_living: [
        { id: 'c1', author: 'Elif Demir', avatar: '/images/editorial/architect_selin.jpg', text: 'Sabah saatlerinde yavaşlamanın zihne bu kadar iyi geldiğini fark etmek ilham verici.', time: '2 saat önce' },
        { id: 'c2', author: 'Kerem Aydın', avatar: '/images/editorial/chef_kerem.jpg', text: '“Yavaş yaşamak bir lüks değil, bir farkındalık tercihi.” Kesinlikle katılıyorum.', time: '5 saat önce' },
        { id: 'c3', author: 'Deniz Kaya', avatar: '/images/editorial/author_deniz.jpg', text: 'Özellikle mimari detayların ve sessizliğin vurgulandığı kısımlar çok kıymetli.', time: '1 gün önce' }
      ]
    },
    userNotes: (typeof MAISON_DATA !== 'undefined' && MAISON_DATA.journalEntries) ? [...MAISON_DATA.journalEntries] : [],
    userCollections: (typeof MAISON_DATA !== 'undefined' && MAISON_DATA.collections) ? [...MAISON_DATA.collections] : [],
    cartItems: [{ name: "Good Days Doğal Mum", price: 890, qty: 1 }]
  };

  const statusBar = document.getElementById('statusBar');
  const maisonBottomNav = document.getElementById('maisonBottomNav');
  const appScreenBody = document.getElementById('appScreenBody');
  const referenceContainer = document.getElementById('referenceScreensContainer');
  const screenBadge = document.getElementById('screenBadge');
  const btnToggleMode = document.getElementById('btnToggleMode');
  const modeText = document.getElementById('modeText');
  const btnTour = document.getElementById('btnTour');
  const btnSound = document.getElementById('btnSound');
  const btnReset = document.getElementById('btnReset');
  const statusClock = document.getElementById('statusClock');
  const homeIndicator = document.getElementById('homeIndicator');
  const dynamicIsland = document.getElementById('dynamicIsland');
  const audioPlayerBar = document.getElementById('audioPlayerBar');
  const btnMiniPlay = document.getElementById('btnMiniPlay');
  const btnMiniClose = document.getElementById('btnMiniClose');
  const playerTime = document.getElementById('playerTime');
  const miniPlayIcon = document.getElementById('miniPlayIcon');
  const iosToast = document.getElementById('iosToast');
  const toastMessage = document.getElementById('toastMessage');

  const navMButton = document.getElementById('navMButton');
  const mHubModal = document.getElementById('mHubModal');
  const btnCloseMHub = document.getElementById('btnCloseMHub');
  const searchModal = document.getElementById('searchModal');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const btnCloseSearch = document.getElementById('btnCloseSearch');
  const searchResultsArea = document.getElementById('searchResultsArea');

  // New Modals DOM references
  const notificationCenterModal = document.getElementById('notificationCenterModal');
  const btnCloseNotificationCenter = document.getElementById('btnCloseNotificationCenter');
  const btnTriggerInstantNotif = document.getElementById('btnTriggerInstantNotif');
  const notifBadgeCount = document.getElementById('notifBadgeCount');
  const notifFilterTabs = document.getElementById('notifFilterTabs');
  const notifItemsList = document.getElementById('notifItemsList');

  const travelPlanModal = document.getElementById('travelPlanModal');
  const btnCloseTravelPlan = document.getElementById('btnCloseTravelPlan');
  const travelPlanTitle = document.getElementById('travelPlanTitle');
  const travelPlanSubtitle = document.getElementById('travelPlanSubtitle');
  const travelPlanContent = document.getElementById('travelPlanContent');
  const btnSaveTravelPlan = document.getElementById('btnSaveTravelPlan');
  const btnShareTravelPlan = document.getElementById('btnShareTravelPlan');

  const maisonCirclesModal = document.getElementById('maisonCirclesModal');
  const btnCloseMaisonCircles = document.getElementById('btnCloseMaisonCircles');
  const joinedCirclesList = document.getElementById('joinedCirclesList');

  const collabCollectionModal = document.getElementById('collabCollectionModal');
  const btnCloseCollabCollection = document.getElementById('btnCloseCollabCollection');
  const collabTitle = document.getElementById('collabTitle');
  const collabSubtitle = document.getElementById('collabSubtitle');
  const collabItemsList = document.getElementById('collabItemsList');
  const btnAddCollabItem = document.getElementById('btnAddCollabItem');

  const articleCommentsModal = document.getElementById('articleCommentsModal');
  const btnCloseArticleComments = document.getElementById('btnCloseArticleComments');
  const articleCommentsList = document.getElementById('articleCommentsList');
  const newCommentInput = document.getElementById('newCommentInput');
  const btnSendComment = document.getElementById('btnSendComment');

  const storyboardDrawer = document.getElementById('storyboardDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const drawerContent = document.getElementById('drawerContent');

  const tourBanner = document.getElementById('tourBanner');
  const tourStep = document.getElementById('tourStep');
  const tourTitle = document.getElementById('tourTitle');
  const btnTourPrev = document.getElementById('btnTourPrev');
  const btnTourNext = document.getElementById('btnTourNext');
  const btnTourExit = document.getElementById('btnTourExit');

  const navItems = {
    home: document.getElementById('navHome'),
    explore: document.getElementById('navExplore'),
    salon: document.getElementById('navSalon'),
    profile: document.getElementById('navProfile')
  };

  // App Store & Cross-System Modals DOM references
  const maisonAuthModal = document.getElementById('maisonAuthModal');
  const btnCloseAuthModal = document.getElementById('btnCloseAuthModal');
  const btnAppleSignIn = document.getElementById('btnAppleSignIn');
  const btnGoogleSignIn = document.getElementById('btnGoogleSignIn');
  const btnEmailSignIn = document.getElementById('btnEmailSignIn');
  const authEmailInput = document.getElementById('authEmailInput');
  const linkAuthTerms = document.getElementById('linkAuthTerms');
  const linkAuthPrivacy = document.getElementById('linkAuthPrivacy');

  const maisonDeleteAccountModal = document.getElementById('maisonDeleteAccountModal');
  const btnConfirmDeleteAccount = document.getElementById('btnConfirmDeleteAccount');
  const btnCancelDeleteAccount = document.getElementById('btnCancelDeleteAccount');

  const quoteActionSheet = document.getElementById('quoteActionSheet');
  const btnCloseQuoteSheet = document.getElementById('btnCloseQuoteSheet');
  const quoteSheetText = document.getElementById('quoteSheetText');
  const quoteSheetSource = document.getElementById('quoteSheetSource');
  const actSaveToJournal = document.getElementById('actSaveToJournal');
  const actSaveToCollection = document.getElementById('actSaveToCollection');
  const actDiscussInSalon = document.getElementById('actDiscussInSalon');

  const maisonLegalModal = document.getElementById('maisonLegalModal');
  const btnCloseLegalModal = document.getElementById('btnCloseLegalModal');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalBody = document.getElementById('legalModalBody');
  const globalPlayerTitle = document.getElementById('globalPlayerTitle');

  function openAuthModal() {
    triggerHaptic('light');
    if (maisonAuthModal) maisonAuthModal.classList.add('open');
  }
  function closeAuthModal() {
    if (maisonAuthModal) maisonAuthModal.classList.remove('open');
  }

  function openDeleteAccountModal() {
    triggerHaptic('warning');
    if (maisonDeleteAccountModal) maisonDeleteAccountModal.classList.add('open');
  }
  function closeDeleteAccountModal() {
    if (maisonDeleteAccountModal) maisonDeleteAccountModal.classList.remove('open');
  }

  function openQuoteActionSheet(text, source) {
    triggerHaptic('medium');
    state.capturedQuote = { text, source };
    if (quoteSheetText) quoteSheetText.textContent = `“${text}”`;
    if (quoteSheetSource) quoteSheetSource.textContent = source ? `— ${source}` : '— MAISON';
    if (quoteActionSheet) quoteActionSheet.classList.add('open');
  }
  function closeQuoteActionSheet() {
    if (quoteActionSheet) quoteActionSheet.classList.remove('open');
  }

  function openLegalModal(type = 'privacy') {
    triggerHaptic('light');
    if (legalModalTitle) {
      legalModalTitle.textContent = type === 'privacy' ? 'Gizlilik Politikası (Privacy Policy)' : 'Kullanım Koşulları (Terms of Service)';
    }
    if (maisonLegalModal) maisonLegalModal.classList.add('open');
  }
  function closeLegalModal() {
    if (maisonLegalModal) maisonLegalModal.classList.remove('open');
  }

  // Cross-System Event Bus Subscriptions
  MaisonBus.on('article:read', (data) => {
    if (MAISON_DATA && MAISON_DATA.currentUser) {
      MAISON_DATA.currentUser.stats.readCount += 1;
      const tp = MAISON_DATA.currentUser.tasteProfile;
      if (data.category === 'MİMARİ' && tp['Mimari & Mekân'] < 100) {
        tp['Mimari & Mekân'] = Math.min(100, tp['Mimari & Mekân'] + 2);
      } else if (data.category === 'YAŞAM & FELSEFE' && tp['Kültür & Felsefe'] < 100) {
        tp['Kültür & Felsefe'] = Math.min(100, tp['Kültür & Felsefe'] + 2);
      } else if (data.category === 'SEYAHAT' && tp['Yavaş Seyahat'] < 100) {
        tp['Yavaş Seyahat'] = Math.min(100, tp['Yavaş Seyahat'] + 2);
      } else if (data.category === 'SANAT' && tp['Sanat & Estetik'] < 100) {
        tp['Sanat & Estetik'] = Math.min(100, tp['Sanat & Estetik'] + 2);
      }

      if (data.category === 'MİMARİ') {
        const archStamp = (MAISON_DATA.currentUser.passportStamps || []).find(s => s.id === 'stamp_arch');
        if (archStamp && !archStamp.unlocked) {
          archStamp.unlocked = true;
          archStamp.date = 'Bugün';
          triggerHaptic('success');
          showToast(`🏛️ Kültür Pasaportu: "${archStamp.title}" mührü kazanıldı!`);
        }
      }

      state.recentReadings = [{ id: data.articleId, title: data.title, category: data.category, date: 'Bugün' }, ...(state.recentReadings || [])].slice(0, 8);
      try { localStorage.setItem('maison_recent_readings', JSON.stringify(state.recentReadings)); } catch (e) {}
    }
  });

  MaisonBus.on('studio:completed', () => {
    const morningStamp = (MAISON_DATA.currentUser.passportStamps || []).find(s => s.id === 'stamp_morning');
    if (morningStamp && !morningStamp.unlocked) {
      morningStamp.unlocked = true;
      morningStamp.date = 'Bugün';
      triggerHaptic('success');
      showToast(`🧘 Kültür Pasaportu: "${morningStamp.title}" mührü kazanıldı!`);
    }
    setTimeout(() => {
      showToast(`✨ Ritüel tamamlandı. Zihnindeki hissi Journal'a aktarmak ister misin?`);
    }, 1200);
  });

  MaisonBus.on('salon:joined', () => {
    if (MAISON_DATA && MAISON_DATA.currentUser) {
      MAISON_DATA.currentUser.stats.salonRoomsCount += 1;
      const salonStamp = (MAISON_DATA.currentUser.passportStamps || []).find(s => s.id === 'stamp_salon');
      if (salonStamp && !salonStamp.unlocked) {
        salonStamp.unlocked = true;
        salonStamp.date = 'Bugün';
        triggerHaptic('success');
        showToast(`💬 Kültür Pasaportu: "${salonStamp.title}" mührü kazanıldı!`);
      }
    }
  });

  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    return audioCtx;
  }

  function playGentleClick() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {}
  }

  function playHarmonicChime() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.03, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.32);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.35);
      });
    } catch (e) {}
  }

  let ambientOsc1 = null, ambientOsc2 = null, ambientGain = null;
  function startAmbientAudio() {
    if (state.isPlayingAudio) return;
    state.isPlayingAudio = true;
    updateAudioUI();

    try {
      const ctx = getAudioContext();
      ambientGain = ctx.createGain();
      ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
      ambientGain.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + 1.5);

      ambientOsc1 = ctx.createOscillator();
      ambientOsc2 = ctx.createOscillator();
      ambientOsc1.type = 'sine';
      ambientOsc1.frequency.setValueAtTime(220, ctx.currentTime);
      ambientOsc2.type = 'triangle';
      ambientOsc2.frequency.setValueAtTime(329.63, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(550, ctx.currentTime);

      ambientOsc1.connect(filter);
      ambientOsc2.connect(filter);
      filter.connect(ambientGain);
      ambientGain.connect(ctx.destination);

      ambientOsc1.start();
      ambientOsc2.start();
    } catch (e) {}

    state.audioInterval = setInterval(() => {
      state.audioProgress += 1;
      const mins = Math.floor(state.audioProgress / 60);
      const secs = (state.audioProgress % 60).toString().padStart(2, '0');
      playerTime.textContent = `${mins}:${secs} / 4:12`;
      if (state.audioProgress >= 252) stopAmbientAudio();
    }, 1000);
  }

  function stopAmbientAudio() {
    state.isPlayingAudio = false;
    updateAudioUI();
    if (ambientGain && audioCtx) {
      try {
        ambientGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
          if (ambientOsc1) ambientOsc1.stop();
          if (ambientOsc2) ambientOsc2.stop();
        }, 500);
      } catch (e) {}
    }
    if (state.audioInterval) {
      clearInterval(state.audioInterval);
      state.audioInterval = null;
    }
  }

  function updateAudioUI() {
    if (state.isPlayingAudio) {
      audioPlayerBar.classList.add('active');
      dynamicIsland.classList.add('expanded');
      miniPlayIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    } else {
      audioPlayerBar.classList.remove('active');
      dynamicIsland.classList.remove('expanded');
      miniPlayIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    playHarmonicChime();
    if (!iosToast || !toastMessage) return;
    toastMessage.textContent = msg;
    iosToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => iosToast.classList.remove('show'), 2600);
  }

  function triggerSavePop(btn) {
    if (!btn) return;
    btn.classList.remove('save-pop');
    void btn.offsetWidth;
    btn.classList.add('save-pop');
    setTimeout(() => {
      btn.classList.remove('save-pop');
    }, 600);
  }

  let isHomePressActive = false;
  function triggerHomePress(element, callback, options = {}) {
    if (!element) {
      if (callback) callback();
      return;
    }
    if (isHomePressActive) return;
    isHomePressActive = true;

    const pressDuration = options.pressDuration || 140;
    const releaseDuration = options.releaseDuration || 110;

    playGentleClick();
    element.classList.add('is-pressed');

    setTimeout(() => {
      element.classList.remove('is-pressed');
      setTimeout(() => {
        isHomePressActive = false;
        if (callback) callback();
      }, releaseDuration);
    }, pressDuration);
  }

  function updateStatusClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const mins = now.getMinutes().toString().padStart(2, '0');
    if (statusClock) statusClock.textContent = `${hours}:${mins}`;
  }
  updateStatusClock();
  setInterval(updateStatusClock, 10000);

  function setView(viewName, params = {}, options = {}) {
    if (state.currentView !== viewName) {
      state.viewHistory.push({ view: state.currentView, params: { ...params } });
    }
    state.currentView = viewName;
    renderDynamicView(viewName, params);
    updateBottomNav(viewName);
    if (!options.skipSound) playGentleClick();
    if (appScreenBody) appScreenBody.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBottomNavTap(tabName, navElement) {
    if (!navElement) return;
    if (state.currentView === tabName) {
      playGentleClick();
      navElement.classList.remove('is-pressed');
      void navElement.offsetWidth;
      navElement.classList.add('is-pressed');
      setTimeout(() => navElement.classList.remove('is-pressed'), 160);
      if (appScreenBody) appScreenBody.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    playGentleClick();
    navElement.classList.remove('is-pressed');
    void navElement.offsetWidth;
    navElement.classList.add('is-pressed');
    setTimeout(() => {
      navElement.classList.remove('is-pressed');
      setView(tabName, {}, { skipSound: true });
    }, 130);
  }

  function goBack() {
    if (state.viewHistory.length > 0) {
      const prev = state.viewHistory.pop();
      state.currentView = prev.view;
      renderDynamicView(prev.view, prev.params);
      updateBottomNav(prev.view);
      playGentleClick();
      if (appScreenBody) appScreenBody.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
    }
  }

  function updateBottomNav(viewName) {
    if (!maisonBottomNav) return;
    const items = maisonBottomNav.querySelectorAll('.nav-item');
    items.forEach(item => {
      const v = item.dataset.tab || item.dataset.view;
      if (v === viewName || 
         (v === 'home' && viewName === 'maison_ai') ||
         (v === 'explore' && (viewName === 'explore_dim' || viewName === 'search')) ||
         (v === 'oku' && (viewName === 'article' || viewName === 'author')) ||
         (v === 'shop' && viewName === 'product') ||
         (v === 'salon' && (viewName === 'salon' || viewName === 'room' || viewName === 'circle_detail')) ||
         (v === 'profile' && (viewName === 'settings' || viewName === 'collections' || viewName === 'collection_detail' || viewName === 'people' || viewName === 'person_detail'))) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function setTheme(themeName) {
    state.theme = themeName;
    localStorage.setItem('maison_theme', themeName);
    const isDark = themeName === 'dark' || (themeName === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const screen = document.getElementById('screenViewport') || document.querySelector('.iphone-screen');
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (screen) screen.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (screen) screen.removeAttribute('data-theme');
    }
  }

  function setLanguage(lang) {
    state.language = lang;
    localStorage.setItem('maison_language', lang);
    updateStaticTranslations();
    renderDynamicView(state.currentView, state.currentParams || {});
  }

  function updateStaticTranslations() {
    const navHome = document.getElementById('navHome');
    const navExplore = document.getElementById('navExplore');
    const navSalon = document.getElementById('navSalon');
    const navProfile = document.getElementById('navProfile');
    if (navHome) {
      const l = navHome.querySelector('.nav-label');
      if (l) l.textContent = t('nav_home');
    }
    if (navExplore) {
      const l = navExplore.querySelector('.nav-label');
      if (l) l.textContent = t('nav_explore');
    }
    if (navSalon) {
      const l = navSalon.querySelector('.nav-label');
      if (l) l.textContent = t('nav_salon');
    }
    if (navProfile) {
      const l = navProfile.querySelector('.nav-label');
      if (l) l.textContent = t('nav_profile');
    }
    
    const onboardingTitle = document.getElementById('onboardingTitle');
    const onboardingQuestion = document.getElementById('onboardingQuestion');
    const onboardingDesc = document.getElementById('onboardingDesc');
    const btnCompleteOnboarding = document.getElementById('btnCompleteOnboarding');
    if (onboardingTitle) onboardingTitle.textContent = t('onboarding_title');
    if (onboardingQuestion) onboardingQuestion.textContent = t('onboarding_question');
    if (onboardingDesc) onboardingDesc.textContent = t('onboarding_desc');
    if (btnCompleteOnboarding) btnCompleteOnboarding.textContent = t('onboarding_btn');
    
    const eveningModalTitle = document.getElementById('eveningModalTitle');
    const eveningModalSub = document.getElementById('eveningModalSub');
    if (eveningModalTitle) eveningModalTitle.textContent = t('evening_title');
    if (eveningModalSub) eveningModalSub.textContent = t('evening_sub');
  }

  function showOnboardingModal(isEditing = false) {
    const modal = document.getElementById('maisonOnboardingModal');
    const grid = document.getElementById('onboardingChipsGrid');
    const btn = document.getElementById('btnCompleteOnboarding');
    if (!modal || !grid) return;
    
    const lang = state.language || 'tr';
    grid.innerHTML = ALL_INTERESTS.map(item => {
      const isSelected = state.userInterests.includes(item.id);
      const label = lang === 'en' ? item.en : item.tr;
      return `<button type="button" class="onboarding-chip ${isSelected ? 'is-selected' : ''}" data-interest="${item.id}">
        <span>${item.icon}</span>
        <span>${label}</span>
      </button>`;
    }).join('');
    
    grid.querySelectorAll('.onboarding-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const id = chip.dataset.interest;
        if (state.userInterests.includes(id)) {
          state.userInterests = state.userInterests.filter(x => x !== id);
          chip.classList.remove('is-selected');
        } else {
          state.userInterests.push(id);
          chip.classList.add('is-selected');
        }
        playGentleClick();
      });
    });
    
    if (btn) {
      btn.onclick = () => {
        state.onboardingCompleted = true;
        localStorage.setItem('maison_onboarding_completed', 'true');
        localStorage.setItem('maison_interests', JSON.stringify(state.userInterests));
        modal.style.opacity = '0';
        setTimeout(() => {
          modal.style.display = 'none';
          modal.style.opacity = '1';
        }, 350);
        playGentleClick();
        if (state.currentView === 'home') {
          renderHomeView();
        } else if (state.currentView === 'settings') {
          renderSettingsView();
        }
        showToast(lang === 'en' ? 'Preferences saved' : 'İlgi alanlarınız kaydedildi');
      };
    }
    
    modal.style.display = 'flex';
    modal.style.opacity = '1';
  }

  function openEveningModal() {
    const modal = document.getElementById('maisonEveningModal');
    const list = document.getElementById('eveningContentList');
    const btnClose = document.getElementById('btnCloseEveningModal');
    if (!modal || !list) return;

    const lang = state.language || 'tr';
    const eveningItems = [
      {
        badge: t('bulletin_reading', 'Bir Okuma'),
        title: lang === 'en' ? "Timelessness in the Mediterranean" : "Akdeniz'de Zamansızlık",
        desc: lang === 'en' ? "7 min read • Deniz Kaya" : "7 dk okuma • Deniz Kaya",
        action: () => { modal.style.display = 'none'; setView('article', { id: 'amalfi' }); }
      },
      {
        badge: t('bulletin_idea', 'Bir Fikir'),
        title: lang === 'en' ? "The Architecture of Silence" : "Sessizliğin Mimarisi",
        desc: lang === 'en' ? "Living in spaces that breathe and soothe the mind." : "Zihni sakinleştiren, nefes alan yaşam alanları.",
        action: () => { modal.style.display = 'none'; setView('article', { id: 'slow_living' }); }
      },
      {
        badge: t('bulletin_studio', 'Bir Studio Videosu'),
        title: lang === 'en' ? "Quiet Morning: 2-Minute Breath Practice" : "Sessiz Sabah: 2 Dakikalık Nefes Pratiği",
        desc: lang === 'en' ? "2:40 video • Mindful living" : "2:40 video • İyi yaşam",
        action: () => { modal.style.display = 'none'; setView('studio_detail', { id: 'vid_yoga_sabah' }); }
      },
      {
        badge: t('bulletin_discovery', 'Bir Keşif'),
        title: lang === 'en' ? "Elegance of Earth: Handcrafted Ceramic" : "Toprağın Zarafeti: El Yapımı Seramik",
        desc: lang === 'en' ? "Curated craftsmanship from heritage ateliers." : "Geleneksel atölyelerden el işi seramik sanatı.",
        action: () => { modal.style.display = 'none'; setView('article', { id: 'slow_living' }); }
      },
      {
        badge: t('bulletin_music', 'Bir Müzik Önerisi'),
        title: "Valse d'Amélie • Yann Tiersen",
        desc: lang === 'en' ? "Melancholic piano and accordion." : "Akordeon ve piyano tınıları.",
        action: () => { modal.style.display = 'none'; setView('explore_dim', { dim: 'muzikler' }); }
      }
    ];

    list.innerHTML = eveningItems.map((item, idx) => `
      <div class="evening-item" data-idx="${idx}">
        <div style="flex: 1;">
          <div class="evening-item-badge">${item.badge}</div>
          <div class="evening-item-title">${item.title}</div>
          <div class="evening-item-desc">${item.desc}</div>
        </div>
        <div class="evening-item-arrow">→</div>
      </div>
    `).join('');

    list.querySelectorAll('.evening-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx, 10);
        eveningItems[idx]?.action();
      });
    });

    if (btnClose) {
      btnClose.onclick = () => {
        modal.style.display = 'none';
      };
    }

    modal.style.display = 'flex';
  }

  function renderSettingsView() {
    const lang = state.language || 'tr';
    const interestsCount = state.userInterests.length;
    
    appScreenBody.innerHTML = `
      <div class="settings-wrap">
        <!-- Header -->
        <div class="settings-header">
          <button class="settings-back-btn" id="btnBackFromSettings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>${t('nav_profile', 'Profil')}</span>
          </button>
          <h2 class="settings-title">${t('settings_title', 'AYARLAR')}</h2>
          <div style="width: 50px;"></div>
        </div>

        <!-- 1. UYGULAMA BÖLÜMÜ -->
        <div class="settings-section">
          <div class="settings-section-title">${t('settings_app', 'UYGULAMA')}</div>
          <div class="settings-card">
            <!-- Dil -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_lang', 'Dil')}</div>
                <div class="settings-row-desc">Türkçe / English</div>
              </div>
              <div class="settings-segmented" id="segLanguage">
                <button class="settings-seg-btn ${lang === 'tr' ? 'active' : ''}" data-lang="tr">Türkçe</button>
                <button class="settings-seg-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">English</button>
              </div>
            </div>

            <!-- Görünüm (Açık / Koyu / Sistem) -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_appearance', 'Görünüm')}</div>
                <div class="settings-row-desc">${t('settings_light', 'Açık')} • ${t('settings_dark', 'Koyu')} • ${t('settings_system', 'Sistem')}</div>
              </div>
              <div class="settings-segmented" id="segTheme">
                <button class="settings-seg-btn ${state.theme === 'light' ? 'active' : ''}" data-theme="light">${t('settings_light', 'Açık')}</button>
                <button class="settings-seg-btn ${state.theme === 'dark' ? 'active' : ''}" data-theme="dark">${t('settings_dark', 'Koyu')}</button>
                <button class="settings-seg-btn ${state.theme === 'system' ? 'active' : ''}" data-theme="system">${t('settings_system', 'Sistem')}</button>
              </div>
            </div>

            <!-- Bildirimler -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_notif', 'Bildirimler')}</div>
                <div class="settings-row-desc">${t('settings_notif_desc', 'Önemli editoryal güncellemeler ve davetler.')}</div>
              </div>
              <label class="switch-toggle">
                <input type="checkbox" id="toggleSettingsNotif" ${state.notificationsEnabled ? 'checked' : ''}>
                <span class="switch-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <!-- 2. TERCİHLER BÖLÜMÜ -->
        <div class="settings-section">
          <div class="settings-section-title">${t('settings_pref', 'TERCİHLER')}</div>
          <div class="settings-card">
            <!-- İlgi Alanlarım -->
            <div class="settings-row" id="rowEditInterests" style="cursor: pointer;">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_interests', 'İlgi Alanlarım')}</div>
                <div class="settings-row-desc">${interestsCount} / 18 ${lang === 'en' ? 'interests selected' : 'ilgi alanı seçili'}</div>
              </div>
              <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600; display: flex; align-items: center; gap: 4px;">
                <span>${t('settings_edit', 'Düzenle')}</span>
                <span>→</span>
              </div>
            </div>

            <!-- Akşam Bülteni -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_evening', 'Akşam Bülteni')}</div>
                <div class="settings-row-desc">${t('settings_evening_desc', 'Günün sakinleşme özeti ve akşam seçkisi her gün 20:30\'da sunulur.')}</div>
                <div style="margin-top: 6px;">
                  <button type="button" id="btnPreviewEvening" style="background: none; border: none; font-size: 11px; color: var(--maison-gold); font-weight: 600; padding: 0; cursor: pointer;">
                    ${t('settings_evening_preview', 'Bu Akşam MAISON\'da Önizle →')}
                  </button>
                </div>
              </div>
              <label class="switch-toggle">
                <input type="checkbox" id="toggleEveningBulletin" ${state.eveningBulletin ? 'checked' : ''}>
                <span class="switch-slider"></span>
              </label>
            </div>

            <!-- Sessiz Okuma Modu -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">${t('settings_quiet', 'Sessiz Okuma Modu')}</div>
                <div class="settings-row-desc">${t('settings_quiet_desc', 'Okuma ekranında dikkat dağıtıcı unsurları kaldırır, daha yalın ve sakin bir tipografi sunar.')}</div>
              </div>
              <label class="switch-toggle">
                <input type="checkbox" id="toggleQuietReading" ${state.quietReadingMode ? 'checked' : ''}>
                <span class="switch-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <!-- 3. KÜRATÖR & EDİTORYAL -->
        <div class="settings-section">
          <div class="settings-section-title">KÜRATÖR & EDİTORYAL</div>
          <div class="settings-card">
            <a href="/editor" target="_blank" class="settings-row" style="text-decoration: none; color: inherit; cursor: pointer;">
              <div class="settings-row-info">
                <div class="settings-row-title">AI Editor Masası</div>
                <div class="settings-row-desc">Kültürel keşif, editoryal seçim ve yayın onay paneli</div>
              </div>
              <div style="font-size: 13px; color: var(--accent-terracotta, #B5734C); font-weight: 600;">Paneli Aç ↗</div>
            </a>
          </div>
        </div>

        <!-- 4. HESAP & GÜVENLİK (Apple Guideline 5.1.1 & 4.8) -->
        <div class="settings-section">
          <div class="settings-section-title">HESAP & GÜVENLİK</div>
          <div class="settings-card">
            <!-- Profil Bağlantısı -->
            <div class="settings-row" id="rowOpenAuthModal" style="cursor: pointer;">
              <div class="settings-row-info">
                <div class="settings-row-title">Küratör Hesabı</div>
                <div class="settings-row-desc">Berke Saygılı • @berkesaygili (Apple ID ile Bağlı)</div>
              </div>
              <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600;">Yönet →</div>
            </div>

            <!-- Biyometrik Kilit (FaceID / TouchID) -->
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">FaceID & Biyometrik Kilit</div>
                <div class="settings-row-desc">Journal notlarınızı ve zevk arşivinizi biyometrik kilitle koruyun.</div>
              </div>
              <label class="switch-toggle">
                <input type="checkbox" id="toggleBiometricLock" ${state.biometricLockEnabled ? 'checked' : ''}>
                <span class="switch-slider"></span>
              </label>
            </div>

            <!-- Apple Guideline 5.1.1: Hesabımı Sil -->
            <div style="padding: 14px 16px 12px 16px; border-top: 1px solid var(--maison-border);">
              <button class="btn-delete-account-trigger" id="btnTriggerDeleteAccount">
                Hesabımı ve Tüm Verilerimi Kalıcı Olarak Sil
              </button>
              <div style="font-size: 10.5px; color: var(--maison-taupe); text-align: center; margin-top: 6px;">
                Apple App Store & KVKK / GDPR Madde 17 veri silme garantisi
              </div>
            </div>
          </div>
        </div>

        <!-- 5. HUKUKİ & MAĞAZA UYUMLULUĞU -->
        <div class="settings-section">
          <div class="settings-section-title">HUKUKİ & GİZLİLİK</div>
          <div class="settings-card">
            <div class="settings-row" id="rowOpenPrivacy" style="cursor: pointer;">
              <div class="settings-row-info">
                <div class="settings-row-title">Gizlilik Politikası (Privacy Policy)</div>
                <div class="settings-row-desc">KVKK, GDPR & Apple / Google Data Safety uyumluluğu</div>
              </div>
              <div style="font-size: 12px; color: var(--maison-taupe);">Oku →</div>
            </div>
            <div class="settings-row" id="rowOpenTerms" style="cursor: pointer;">
              <div class="settings-row-info">
                <div class="settings-row-title">Kullanım Koşulları (Terms of Service)</div>
                <div class="settings-row-desc">Dijital Kültür Evi ilkeleri ve telif hakları</div>
              </div>
              <div style="font-size: 12px; color: var(--maison-taupe);">Oku →</div>
            </div>
            <div class="settings-row">
              <div class="settings-row-info">
                <div class="settings-row-title">MAISON Mobil Sürümü</div>
                <div class="settings-row-desc">Production Store Release • Capacitor Native Shell</div>
              </div>
              <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600;">v1.0.0 (Build 100)</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind events
    document.getElementById('btnBackFromSettings')?.addEventListener('click', () => setView('profile'));

    // Language seg buttons
    document.querySelectorAll('#segLanguage .settings-seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const l = btn.dataset.lang;
        setLanguage(l);
      });
    });

    // Theme seg buttons
    document.querySelectorAll('#segTheme .settings-seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const th = btn.dataset.theme;
        setTheme(th);
        renderSettingsView();
      });
    });

    // Notification toggle
    document.getElementById('toggleSettingsNotif')?.addEventListener('change', (e) => {
      state.notificationsEnabled = e.target.checked;
      localStorage.setItem('maison_notifications', state.notificationsEnabled);
      showToast(state.notificationsEnabled ? (lang === 'en' ? 'Notifications enabled' : 'Bildirimler açıldı') : (lang === 'en' ? 'Notifications disabled' : 'Bildirimler kapatıldı'));
    });

    // Edit interests
    document.getElementById('rowEditInterests')?.addEventListener('click', () => {
      showOnboardingModal(true);
    });

    // Evening bulletin toggle
    document.getElementById('toggleEveningBulletin')?.addEventListener('change', (e) => {
      state.eveningBulletin = e.target.checked;
      localStorage.setItem('maison_evening_bulletin', state.eveningBulletin);
      showToast(state.eveningBulletin ? (lang === 'en' ? 'Evening dispatch enabled' : 'Akşam Bülteni açıldı') : (lang === 'en' ? 'Evening dispatch disabled' : 'Akşam Bülteni kapatıldı'));
    });

    // Preview evening
    document.getElementById('btnPreviewEvening')?.addEventListener('click', () => {
      openEveningModal();
    });

    // Quiet reading mode toggle
    document.getElementById('toggleQuietReading')?.addEventListener('change', (e) => {
      state.quietReadingMode = e.target.checked;
      localStorage.setItem('maison_quiet_reading', state.quietReadingMode);
      document.body.classList.toggle('quiet-reading-mode', state.quietReadingMode);
      showToast(state.quietReadingMode ? (lang === 'en' ? 'Quiet reading mode enabled' : 'Sessiz Okuma Modu açıldı') : (lang === 'en' ? 'Quiet reading mode disabled' : 'Sessiz Okuma Modu kapatıldı'));
    });

    // Account & Security Event Bindings
    document.getElementById('rowOpenAuthModal')?.addEventListener('click', openAuthModal);
    document.getElementById('toggleBiometricLock')?.addEventListener('change', (e) => {
      state.biometricLockEnabled = e.target.checked;
      localStorage.setItem('maison_biometric_lock', state.biometricLockEnabled);
      triggerHaptic('success');
      showToast(state.biometricLockEnabled ? 'FaceID / Biyometrik Kilit aktif edildi ✓' : 'Biyometrik kilit kapatıldı.');
    });
    document.getElementById('btnTriggerDeleteAccount')?.addEventListener('click', openDeleteAccountModal);
    document.getElementById('rowOpenPrivacy')?.addEventListener('click', () => openLegalModal('privacy'));
    document.getElementById('rowOpenTerms')?.addEventListener('click', () => openLegalModal('terms'));
  }

  function renderDynamicView(viewName, params = {}) {
    state.currentParams = params;
    if (appScreenBody) {
      appScreenBody.classList.remove('view-fade-enter');
      void appScreenBody.offsetWidth;
      appScreenBody.classList.add('view-fade-enter');
    }

    if (viewName === 'home' || viewName === 'article') {
      if (appScreenBody) appScreenBody.classList.add('has-hero-header');
      if (statusBar) statusBar.classList.add('light-theme');
    } else {
      if (appScreenBody) appScreenBody.classList.remove('has-hero-header');
      if (statusBar) statusBar.classList.remove('light-theme');
    }

    switch (viewName) {
      case 'home':
        renderHomeView();
        screenBadge.textContent = t('badge_digital_salon', 'Dijital Salon');
        break;
      case 'maison_ai':
        renderMaisonAIView(params);
        screenBadge.textContent = "MAISON AI";
        break;
      case 'settings':
        renderSettingsView();
        screenBadge.textContent = t('settings_title', 'AYARLAR');
        break;
      case 'explore':
        renderExploreView(params.tab || 'all');
        screenBadge.textContent = "Kültürel Keşif";
        break;
      case 'explore_dim':
        renderExploreDimensionView(params.dim || 'mekanlar', params.subFilter || 'all');
        screenBadge.textContent = getExploreDimBadge(params.dim);
        break;
      case 'oku':
        renderOkuView(params.filter || 'all');
        screenBadge.textContent = "OKU • Yazılar";
        break;
      case 'shop':
        renderShopView(params.filter || 'all');
        screenBadge.textContent = "Seçkin Ürünler";
        break;
      case 'salon':
        renderSalonView(params.tab || 'all');
        screenBadge.textContent = "Maison Salon";
        break;
      case 'circle_detail':
        renderCircleDetailView(params.id || 'c_mimari');
        screenBadge.textContent = "Salon Çevresi";
        break;
      case 'room':
        renderRoomDiscussionView(params.id || state.activeRoomId);
        screenBadge.textContent = "Salon Odası";
        break;
      case 'collections':
        renderCollectionsView();
        screenBadge.textContent = "Koleksiyonlar";
        break;
      case 'collection_detail':
        renderCollectionDetailView(params.id || 'benim_istanbulum');
        screenBadge.textContent = "Koleksiyon Detayı";
        break;
      case 'people':
        renderPeopleView(params.role || 'all', params);
        screenBadge.textContent = "Maison Cercle";
        break;
      case 'person_detail':
        renderPersonDetailView(params.id || 'selin_arslan', params);
        screenBadge.textContent = "Küratör Profili";
        break;
      case 'profile':
        renderProfileView(params.subTab || 'koleksiyonlar');
        screenBadge.textContent = "Berke Saygılı";
        break;
      case 'article':
        renderArticleView(params.id || state.activeArticleId);
        screenBadge.textContent = "Editoryal Oku";
        break;
      case 'moment':
        renderMomentView();
        screenBadge.textContent = "Günün 5 Dakikası";
        break;
      case 'product':
        renderProductView(params.id || state.activeProductId);
        screenBadge.textContent = "Seçkin Nesne";
        break;
      case 'journal_new':
        renderJournalEditorView();
        screenBadge.textContent = "Yeni Not";
        break;
      case 'studio':
        renderStudioView(params.category || 'all');
        screenBadge.textContent = "MAISON Studio";
        break;
      case 'studio_detail':
        renderStudioDetailView(params.id || 'vid_yoga_sabah');
        screenBadge.textContent = "Studio Pratiği";
        break;
      default:
        renderHomeView();
        screenBadge.textContent = t('badge_digital_salon', 'Dijital Salon');
    }
  }

  function renderHomeView() {
    const d = MAISON_DATA;
    const lang = state.language || 'tr';
    const nowHour = new Date().getHours();
    const greetingKey = nowHour < 12 ? 'greeting_morning' : (nowHour < 18 ? 'greeting_day' : 'greeting_evening');
    const greetingText = t(greetingKey, 'İyi akşamlar');

    // Personalization logic: score cultural cards against userInterests
    const scoredPool = EDITORIAL_CULTURAL_POOL.map(card => {
      let score = 0;
      if (card.tags && Array.isArray(card.tags)) {
        card.tags.forEach(tg => {
          if (state.userInterests.includes(tg)) score += 2;
        });
      }
      return { ...card, score };
    });
    scoredPool.sort((a, b) => b.score - a.score);
    const topMatches = scoredPool.slice(0, 3);
    const remaining = scoredPool.slice(3);
    const serendipity = remaining.length > 0 ? remaining[Math.floor(Math.random() * remaining.length)] : scoredPool[0];
    const cardsToRender = [...topMatches, serendipity];

    const cardsHtml = cardsToRender.map((c, idx) => {
      const title = lang === 'en' ? c.title_en : c.title_tr;
      const subtitle = lang === 'en' ? c.sub_en : c.sub_tr;
      const badge = lang === 'en' ? c.badge_en : c.badge_tr;
      const time = lang === 'en' ? c.time_en : c.time_tr;
      return `
        <div class="editorial-card" id="homeEdCard_${idx}" data-action="${c.actionKey}">
          <div class="card-img-wrap">
            <img src="${c.img}" alt="${title}">
            <span class="card-badge">${badge}</span>
          </div>
          <div class="card-body">
            <div class="card-title">${title}</div>
            <div class="card-subtitle">${subtitle}</div>
            <div class="card-meta">
              <span class="card-author-pill">
                <img src="${c.avatar}" class="card-author-avatar">
                <span>${c.author} • ${time}</span>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="14" height="14">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      `;
    }).join('');

    appScreenBody.innerHTML = `
      <!-- 1. Full-Bleed Hero Section exactly matching MAISON ANA EKRAN.png -->
      <div class="home-hero-container" id="heroCard">
        <img src="/images/editorial/bosphorus_sunset.jpg" alt="Daha Yavaş, Daha Derin, Daha Sen" class="home-hero-bg">
        <div class="home-hero-gradient"></div>

        <!-- Top Header Overlay -->
        <div class="home-hero-top-overlay">
          <div class="top-greeting">${greetingText}<br>${d.currentUser.name.split(' ')[0]},</div>
          <div class="top-brand">
            <div class="brand-title">${t('brand_title', 'MAISON')}</div>
            <div class="brand-subtitle">${t('brand_tagline', 'DAHA ÖZENLİ BİR HAYAT')}</div>
          </div>
          <div class="top-right-section">
            <div class="top-icons">
              <button class="icon-btn" id="btnOpenSearch" title="Ara">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button class="icon-btn" id="btnNotifications" title="Bildirimler">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span class="notif-dot"></span>
              </button>
            </div>
            <div class="top-quote">
              <div class="quote-text">${t('quote_home', '“Güzel insanlar,<br>güzel fikirlerle daha<br>güzel bir dünyaya.”')}</div>
              <div class="quote-author">${t('quote_home_author', '— MAISON')}</div>
            </div>
          </div>
        </div>

        <!-- Hero Card Bottom Content -->
        <div class="home-hero-bottom-content">
          <div class="home-hero-badge">${t('hero_badge', 'BUGÜNÜN İLHAMI')}</div>
          <h1 class="home-hero-title">${t('hero_title', 'Daha Yavaş,<br>Daha Derin,<br>Daha Sen.')}</h1>
          <button class="home-hero-btn" id="btnHeroRead">${t('hero_btn', 'Günün Yazısını Oku →')}</button>
        </div>
      </div>

      <!-- 2. Sheet Content Sliding Below Hero -->
      <div class="home-sheet-content">
        <!-- Category Rail (Yazılar, Salon, Koleksiyonlar, Studio, People) -->
        <div class="category-rail">
          <div class="category-pill" id="pillArticles">
            <div class="pill-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <span class="pill-label">${t('cat_articles', 'Yazılar')}</span>
          </div>

          <div class="category-pill maison-ai-pill" id="pillMaisonAI">
            <div class="pill-icon-circle maison-ai-icon-circle">
              <span class="maison-ai-monogram">M·AI</span>
            </div>
            <span class="pill-label ai-pill-label">MAISON AI</span>
          </div>

          <div class="category-pill" id="pillCollections">
            <div class="pill-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span class="pill-label">${t('cat_collections', 'Koleksiyonlar')}</span>
          </div>

          <div class="category-pill" id="pillStudio">
            <div class="pill-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <span class="pill-label">${t('cat_studio', 'Studio')}</span>
          </div>

          <div class="category-pill" id="pillPeople">
            <div class="pill-icon-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="22" height="22">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              </svg>
            </div>
            <span class="pill-label">${t('cat_people', 'People')}</span>
          </div>
        </div>

        <!-- 4. Editörün Seçkisi (4 Cards — Cultural & Lifestyle, No Price Tags) -->
        <div class="section-header">
          <h3 class="section-title">${t('editor_pick_title', 'Editörün Seçkisi')}</h3>
          <span class="section-more-link" id="linkMoreArticles">${t('view_all', 'Tümünü Gör →')}</span>
        </div>

        <div class="cards-rail">
          ${cardsHtml}
        </div>

        <!-- MAISON STUDIO Editorial Showcase Card on Home -->
        <div class="home-studio-section" id="homeStudioSection">
          <div class="home-studio-header">
            <div class="home-studio-badge">MAISON STUDIO</div>
            <h3 class="home-studio-subhead">${t('studio_sec_title', 'Bugün birkaç dakikanızı kendinize ayırın.')}</h3>
          </div>

          <div class="home-studio-card" id="homeStudioFeaturedCard">
            <div class="home-studio-media">
              <img src="/images/editorial/studio_yoga_morning.jpg" alt="3 Basit Yoga Hareketi">
              <div class="home-studio-play-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span class="home-studio-duration">03:12</span>
              <span class="home-studio-cat-tag">HAREKET</span>
            </div>
            <div class="home-studio-info">
              <h4 class="home-studio-title">3 Basit Yoga Hareketi</h4>
              <p class="home-studio-desc">Sabahınıza iyi bir başlangıç için omurgayı nazikçe uyandıran 3 akıcı hareket.</p>
              <div class="home-studio-action-row">
                <button class="home-studio-watch-btn" id="btnHomeStudioWatch">İzle →</button>
                <span class="home-studio-explore-link" id="linkHomeStudioExplore">Tüm Studio'yu keşfet</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Senin İçin Önerilenler (5 Square Cards) -->
        <div class="section-header">
          <h3 class="section-title">Senin İçin Önerilenler</h3>
          <span class="section-more-link" id="linkMoreSuggested">${t('view_all', 'Tümünü Gör →')}</span>
        </div>

        <div class="suggested-rail">
          <div class="suggested-card" id="suggSeyahat">
            <img src="/images/editorial/amalfi_coast.jpg" alt="Seyahat Rotalar">
            <div class="suggested-overlay">
              <div class="suggested-title">Seyahat</div>
              <div class="suggested-sub">Rotalar</div>
            </div>
          </div>

          <div class="suggested-card" id="suggSanat">
            <img src="/images/editorial/art_sculpture.jpg" alt="Sanat Sergiler">
            <div class="suggested-overlay">
              <div class="suggested-title">Sanat</div>
              <div class="suggested-sub">Sergiler</div>
            </div>
          </div>

          <div class="suggested-card" id="suggGastronomi">
            <img src="/images/editorial/gastronomy_pasta.jpg" alt="Gastronomi Lezzetler">
            <div class="suggested-overlay">
              <div class="suggested-title">Gastronomi</div>
              <div class="suggested-sub">Lezzetler</div>
            </div>
          </div>

          <div class="suggested-card" id="suggMimari">
            <img src="/images/editorial/architecture_arched.jpg" alt="Mimari İlham">
            <div class="suggested-overlay">
              <div class="suggested-title">Mimari</div>
              <div class="suggested-sub">İlham</div>
            </div>
          </div>

          <div class="suggested-card" id="suggYasam">
            <img src="/images/editorial/life_rituals.jpg" alt="Yaşam Ritüeller">
            <div class="suggested-overlay">
              <div class="suggested-title">Yaşam</div>
              <div class="suggested-sub">Ritüeller</div>
            </div>
          </div>
        </div>

        <!-- 6. MAISON MOMENT Banner -->
        <div class="moment-banner" id="bannerMoment">
          <div class="moment-tag">MAISON MOMENT</div>
          <div class="moment-divider"></div>
          <div class="moment-body">
            <div class="moment-headline">Bugünün 5 Dakikası</div>
            <div class="moment-sub">Senin için seçtik: bir yazı, bir fotoğraf, bir müzik, bir fikir, bir yer.</div>
          </div>
          <div class="moment-arrow-circle">→</div>
        </div>
      </div><!-- /home-sheet-content -->
    `;

    document.getElementById('btnHeroRead')?.addEventListener('click', (e) => {
      e.stopPropagation();
      triggerHomePress(e.currentTarget, () => setView('article', { id: 'slow_living' }));
    });
    document.getElementById('heroCard')?.addEventListener('click', (e) => {
      if (e.target.closest('#btnOpenSearch') || e.target.closest('#btnNotifications') || e.target.closest('#btnHeroRead')) return;
      triggerHomePress(document.getElementById('btnHeroRead'), () => setView('article', { id: 'slow_living' }));
    });

    // Wire dynamic curated cultural cards
    cardsToRender.forEach((c, idx) => {
      const cardEl = document.getElementById(`homeEdCard_${idx}`);
      if (cardEl) {
        cardEl.addEventListener('click', (e) => {
          triggerHomePress(e.currentTarget, () => {
            if (c.actionKey === 'amalfi') setView('article', { id: 'amalfi' });
            else if (c.actionKey === 'slow_living') setView('article', { id: 'slow_living' });
            else if (c.actionKey === 'salon') setView('salon');
            else if (c.actionKey === 'mekanlar') setView('explore_dim', { dim: 'mekanlar' });
            else if (c.actionKey === 'vid_yoga_sabah') setView('studio_detail', { id: 'vid_yoga_sabah' });
            else if (c.actionKey === 'muzikler') setView('explore_dim', { dim: 'muzikler' });
            else setView('article', { id: c.actionKey || 'slow_living' });
          });
        });
      }
    });

    document.getElementById('suggSeyahat')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('article', { id: 'amalfi' }));
    });
    document.getElementById('suggSanat')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('room', { id: 'sanat_yasam' }));
    });
    document.getElementById('suggGastronomi')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => showToast("Gastronomi & Ege Mutfak Kültürü rotası açıldı."));
    });
    document.getElementById('suggMimari')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('article', { id: 'istanbul_avlular' }));
    });
    document.getElementById('suggYasam')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('moment'));
    });
    document.getElementById('bannerMoment')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('moment'));
    });

    const homeStudioFeaturedCard = document.getElementById('homeStudioFeaturedCard');
    const btnHomeStudioWatch = document.getElementById('btnHomeStudioWatch');
    const linkHomeStudioExplore = document.getElementById('linkHomeStudioExplore');

    if (homeStudioFeaturedCard) {
      homeStudioFeaturedCard.addEventListener('click', (e) => {
        if (e.target.id === 'linkHomeStudioExplore') {
          triggerHomePress(e.target, () => setView('studio'));
        } else if (e.target.id === 'btnHomeStudioWatch') {
          triggerHomePress(e.target, () => setView('studio_detail', { id: 'vid_yoga_sabah' }));
        } else {
          triggerHomePress(homeStudioFeaturedCard, () => setView('studio_detail', { id: 'vid_yoga_sabah' }));
        }
      });
    }
    if (btnHomeStudioWatch) {
      btnHomeStudioWatch.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerHomePress(e.currentTarget, () => setView('studio_detail', { id: 'vid_yoga_sabah' }));
      });
    }
    if (linkHomeStudioExplore) {
      linkHomeStudioExplore.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerHomePress(e.currentTarget, () => setView('studio'));
      });
    }

    document.getElementById('pillArticles')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('oku'));
    });
    document.getElementById('pillMaisonAI')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('maison_ai'));
    });
    document.getElementById('pillCollections')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('collections'));
    });
    document.getElementById('pillStudio')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('studio'));
    });
    document.getElementById('pillPeople')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('people'));
    });

    document.getElementById('linkMoreArticles')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('oku'));
    });
    document.getElementById('linkMoreSuggested')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => setView('explore'));
    });

    document.getElementById('btnOpenSearch')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, openSearchModal, { pressDuration: 100, releaseDuration: 80 });
    });
    document.getElementById('btnNotifications')?.addEventListener('click', (e) => {
      triggerHomePress(e.currentTarget, () => openNotificationCenter('all'), { pressDuration: 100, releaseDuration: 80 });
    });
  }

  // 1. OKU (Yazılar, Denemeler, Röportajlar, Kültür & Sanat, Mimari, Moda, Gastronomi, Seyahat, “Bugün 7 dakikanı ayır”)
  function renderOkuView(filterCat = 'all') {
    const d = MAISON_DATA;
    const filterTabs = [
      { id: 'all', label: 'Tümü' },
      { id: 'Uzun-form Yazı', label: 'Uzun-form Yazılar' },
      { id: 'Denemeler', label: 'Denemeler' },
      { id: 'Röportajlar', label: 'Röportajlar' },
      { id: 'KÜLTÜR & SANAT', label: 'Kültür & Sanat' },
      { id: 'MİMARİ', label: 'Mimari' },
      { id: 'MODA', label: 'Moda' },
      { id: 'GASTRONOMİ', label: 'Gastronomi' },
      { id: 'SEYAHAT', label: 'Seyahat' },
      { id: '7dk', label: '“Bugün 7 Dakikanı Ayır”' }
    ];

    let filtered = d.articles;
    if (filterCat === '7dk') {
      filtered = d.articles.filter(a => a.curationTag === "Bugün 7 dakikanı ayır");
    } else if (filterCat !== 'all') {
      filtered = d.articles.filter(a => 
        a.type === filterCat || 
        a.category === filterCat || 
        a.subCategory === filterCat
      );
    }

    appScreenBody.innerHTML = `
      <div style="padding: 18px 20px 10px 20px;">
        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">OKU • EDİTORYAL DERİNLİK</div>
        <h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--maison-charcoal); margin-top: 2px;">Daha yavaş okuduğumuzda, kelimeler yerini bulur.</h2>
        <p style="font-size: 12px; color: var(--maison-taupe); margin-top: 4px; line-height: 1.4;">Zamanın ötesinde denemeler, uzun form yazılar ve özenli söyleşiler.</p>
      </div>

      <!-- Filter Rails -->
      <div class="filter-pills-rail">
        ${filterTabs.map(t => `
          <div class="filter-pill ${filterCat === t.id ? 'active' : ''}" data-okutab="${t.id}">${t.label}</div>
        `).join('')}
      </div>

      <div class="section-header" style="padding-top: 6px;">
        <h3 class="section-title">${filterCat === 'all' ? 'Tüm Yazılar' : filterTabs.find(t => t.id === filterCat)?.label} (${filtered.length})</h3>
      </div>

      <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 30px 20px;">
        ${filtered.map(art => `
          <div class="editorial-card" style="width: 100%;" data-art="${art.id}">
            <div class="card-img-wrap" style="height: 165px;">
              <img src="${art.heroImage}" alt="${art.title}">
              <span class="card-badge">${art.category}</span>
              ${art.curationTag ? `<span style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.68); color: #dfcaa2; font-size: 9px; font-weight: 600; padding: 3px 8px; border-radius: 4px;">✦ ${art.curationTag}</span>` : ''}
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">${art.title}</div>
              <div class="card-subtitle" style="font-size: 12px;">${art.subtitle}</div>
              <div style="font-size: 11px; color: var(--maison-muted-brown); margin-bottom: 8px; font-style: italic;">“${art.whyItMatters}”</div>
              <div class="card-meta">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <img src="${art.authorAvatar}" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover;">
                  <span>${art.authorName}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 6px;">
                  ${art.hasAudio ? `<span style="font-size: 10px; background: var(--maison-cream); color: var(--maison-muted-brown); padding: 2px 6px; border-radius: 4px;">🎧 Sesli</span>` : ''}
                  <span>${art.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll('[data-okutab]').forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.okutab;
        renderOkuView(id);
      });
    });

    document.querySelectorAll('[data-art]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.art;
        setView('article', { id });
      });
    });
  }

  // 2. KEŞFET (Tümü, Yazılar, Sanat & Sergiler, Mimari & Mekân, Kitaplar, Seyahat, Dergiler, Gastronomi, Moda & 9 Dimensions)
  function renderExploreView(initialTab = 'all') {
    const d = MAISON_DATA;
    const cats = d.exploreData.categories;
    const dims = d.exploreData.dimensions;

    appScreenBody.innerHTML = `
      <div style="padding: 18px 20px 10px 20px;">
        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">KÜLTÜREL KEŞİF ALANI</div>
        <h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--maison-charcoal); margin-top: 2px;">Keşfetmek, zihnin en taze hâlidir.</h2>
      </div>

      <!-- Search Trigger -->
      <div style="padding: 0 20px 14px 20px;">
        <div id="exploreSearchTrigger" style="display: flex; align-items: center; gap: 10px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 12px; padding: 12px 16px; cursor: pointer;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" color="#8C8073">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span style="font-size: 13px; color: var(--maison-taupe);">İlham almak istediğin bir şey ara (yazı, mekan, kitap)...</span>
        </div>
      </div>

      <!-- Clickable Sub-category Filter Rail -->
      <div class="filter-pills-rail" id="exploreTabsRail">
        ${cats.map(c => `
          <div class="filter-pill ${initialTab === c.id ? 'active' : ''}" data-cat="${c.id}">${c.label}</div>
        `).join('')}
      </div>

      <!-- Dynamic Content Area Based on Active Tab -->
      <div id="exploreContentArea">
        ${getExploreTabContent(initialTab)}
      </div>
    `;

    document.getElementById('exploreSearchTrigger').addEventListener('click', openSearchModal);

    // Sub-tab Click Handler
    document.querySelectorAll('#exploreTabsRail [data-cat]').forEach(tab => {
      tab.addEventListener('click', () => {
        const catId = tab.dataset.cat;
        document.querySelectorAll('#exploreTabsRail [data-cat]').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('exploreContentArea').innerHTML = getExploreTabContent(catId);
        bindExploreEvents();
      });
    });

    bindExploreEvents();
  }

  function getExploreTabContent(tabId) {
    const d = MAISON_DATA;

    if (tabId === 'all') {
      return `
        <!-- 9 Dimensions Grid -->
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Keşif Boyutları</h3>
        </div>
        <div class="dimensions-grid">
          ${d.exploreData.dimensions.map(dim => `
            <div class="dimension-card" data-dim="${dim.id}" role="button" tabindex="0">
              <img class="dimension-card-bg" src="${dim.image}" alt="${dim.label}" loading="lazy">
              <div class="dimension-card-overlay"></div>
              <div class="dimension-card-content">
                <div class="dimension-card-tag">KEŞİF BOYUTU</div>
                <div class="dimension-card-title">${dim.label}</div>
                <div class="dimension-card-count">${dim.count} Kürasyon</div>
              </div>
              <div class="dimension-card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Curated Highlights -->
        <div class="section-header">
          <h3 class="section-title">Editörün Seçkileri</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 20px 24px 20px;">
          ${d.exploreData.curatedItems.map(item => `
            <div class="editorial-card" style="width: 100%;" data-expitem="${item.id}">
              <div class="card-img-wrap" style="height: 140px;">
                <img src="${item.image}" alt="${item.title}">
                <span class="card-badge">${item.badge}</span>
              </div>
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <div class="card-title" style="font-size: 16px;">${item.title}</div>
                  <span style="font-size: 10px; color: var(--maison-gold); font-weight: 600;">${item.meta}</span>
                </div>
                <div class="card-subtitle" style="font-size: 12px; margin-bottom: 4px;">${item.subtitle}</div>
                <p style="font-size: 11.5px; color: var(--maison-muted-brown); line-height: 1.4; margin: 0;">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (tabId === 'yazilar') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Yazılar & Denemeler (${d.articles.length})</h3>
          <span class="section-more-link" id="btnGoToOku">Tüm OKU Arşivi →</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          ${d.articles.map(art => `
            <div class="editorial-card" style="width: 100%;" data-art="${art.id}">
              <div class="card-img-wrap" style="height: 150px;">
                <img src="${art.heroImage}" alt="${art.title}">
                <span class="card-badge">${art.category}</span>
              </div>
              <div class="card-body">
                <div class="card-title" style="font-size: 17px;">${art.title}</div>
                <div class="card-subtitle" style="font-size: 12px;">${art.subtitle}</div>
                <div class="card-meta">
                  <span>${art.authorName}</span>
                  <span>${art.readTime}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (tabId === 'sanat_sergiler') {
      const artItem = d.exploreData.curatedItems.find(i => i.category === 'sanat_sergiler') || d.exploreData.curatedItems[0];
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Sanat & Sergiler</h3>
        </div>
        <div style="padding: 0 20px 24px 20px; display: flex; flex-direction: column; gap: 14px;">
          <div style="background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 16px; overflow: hidden; cursor: pointer;" id="cardExhibitionDetail">
            <img src="${artItem.image}" alt="${artItem.title}" style="width: 100%; height: 160px; object-fit: cover; display: block;">
            <div style="padding: 16px;">
              <span class="card-badge" style="position: static; display: inline-block; margin-bottom: 8px;">İSTANBUL MODERN • SERGİ</span>
              <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--maison-charcoal);">${artItem.title}</div>
              <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600; margin: 4px 0 8px 0;">${artItem.subtitle}</div>
              <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45;">${artItem.desc}</p>
            </div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 16px; padding: 16px; cursor: pointer;" data-person="elif_demir">
            <div style="display: flex; gap: 12px; align-items: center;">
              <img src="/images/editorial/architect_selin.jpg" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
              <div>
                <div style="font-size: 10px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase;">ÖNE ÇIKAN SANATÇI</div>
                <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal);">Elif Demir</div>
                <div style="font-size: 11px; color: var(--maison-taupe);">Çağdaş Görsel Sanatçı • Berlin & İstanbul</div>
              </div>
            </div>
            <p style="font-size: 12px; color: var(--maison-muted-brown); font-style: italic; margin-top: 10px;">“Tuval üzerine doğal mineral pigmentlerle katmanlı hafıza manzaraları.”</p>
          </div>
        </div>
      `;
    }

    if (tabId === 'mimari_mekan') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Mimari & Mekân Hafızası</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div class="editorial-card" style="width: 100%;" data-art="istanbul_avlular">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/istanbul_courtyard.jpg" alt="Büyük Valide Han">
              <span class="card-badge">TARİHİ YARIMADA</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">İstanbul'un Sessiz Avluları ve Taşın Hafızası</div>
              <div class="card-subtitle" style="font-size: 12px;">Selin Arslan • 6 dk okuma</div>
              <p style="font-size: 12px; color: var(--maison-muted-brown); margin: 0;">Tarihi han avlularında sabah güneşinin vurduğu saatlerde zaman başka türlü akar.</p>
            </div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; cursor: pointer;" data-room="mimari">
            <div style="font-size: 10px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase;">SALON ODASI</div>
            <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal); margin: 2px 0;">Mekânlar ve İnsanlar</div>
            <div style="font-size: 12px; color: var(--maison-taupe);">"Bir evin karakterini mimari mi belirler, yaşayanlar mı?"</div>
          </div>
        </div>
      `;
    }

    if (tabId === 'kitaplar') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Kitaplar & Nadir Ciltler</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 16px; padding: 16px; display: flex; gap: 14px; align-items: center; cursor: pointer;" data-prod="rare_book_calvino">
            <img src="/images/editorial/book_reading.jpg" style="width: 70px; height: 100px; object-fit: cover; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <div>
              <span class="card-badge" style="position: static; font-size: 8px;">NADİR KİTAP • 1974</span>
              <div style="font-family: var(--font-serif); font-size: 17px; font-weight: 600; color: var(--maison-charcoal); margin-top: 4px;">Görünmez Kentler</div>
              <div style="font-size: 12px; color: var(--maison-taupe);">Italo Calvino • Torino Orijinal Baskı</div>
              <div style="font-size: 13px; font-weight: 700; color: var(--maison-charcoal); margin-top: 6px;">₺4.200</div>
            </div>
          </div>

          <div style="background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 14px; padding: 14px; cursor: pointer;" data-room="kitap_kulubu">
            <div style="font-size: 10px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase;">SALON KİTAP KULÜBÜ</div>
            <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal); margin: 2px 0;">Bu Ay Ne Okuyoruz? Zamanın İzinde</div>
            <div style="font-size: 12px; color: var(--maison-taupe);">Ahmet Ümit ve Selin Arslan ile Proust & Calvino okumaları.</div>
          </div>
        </div>
      `;
    }

    if (tabId === 'seyahat') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Yavaş Seyahat Rotaları</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div class="editorial-card" style="width: 100%;" data-art="amalfi">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/amalfi_coast.jpg" alt="Amalfi">
              <span class="card-badge">GÜNEY İTALYA</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">Amalfi'de Yavaş Zamanlar</div>
              <div class="card-subtitle" style="font-size: 12px;">Deniz Kaya • 5 dk okuma</div>
              <p style="font-size: 12px; color: var(--maison-muted-brown); margin: 0;">Coğrafya sadece bir manzara değil; orada yaşayan insanların sabrıdır.</p>
            </div>
          </div>

          <div class="editorial-card" style="width: 100%;" data-art="slow_living">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/florence_duomo.jpg" alt="Floransa">
              <span class="card-badge">TOSKANA</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">Floransa'nın Taş Sokakları ve Zanaat Atölyeleri</div>
              <div class="card-subtitle" style="font-size: 12px;">Rönesans'ın gölgesinde sakin bir yürüyüş.</div>
            </div>
          </div>
        </div>
      `;
    }

    if (tabId === 'dergiler') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Dergiler & Monografiler</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div class="editorial-card" style="width: 100%;">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/library_books.jpg" alt="Dergiler">
              <span class="card-badge">EDİTORYAL MONOGRAFİ</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">The Gentlewoman & Cereal Tasarım Dili</div>
              <div class="card-subtitle" style="font-size: 12px;">Beyaz boşluğun gücü, serif tipografi ve zamansız mizanpaj.</div>
              <p style="font-size: 12px; color: var(--maison-muted-brown); margin-top: 4px;">Bir derginin sadece okunacak değil, masada durduğunda bile bir estetik nesne olma hali.</p>
            </div>
          </div>
        </div>
      `;
    }

    if (tabId === 'gastronomi') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Gastronomi Kültürü</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div class="editorial-card" style="width: 100%;" data-art="ege_gastronomi">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/slow_living_tuscany.jpg" alt="Ege Gastronomi">
              <span class="card-badge">EGE & AKDENİZ</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">Ege'nin Kadim Zeytin Ağaçları ve Sofra Ritüeli</div>
              <div class="card-subtitle" style="font-size: 12px;">Kerem Demir • 5 dk okuma</div>
              <p style="font-size: 12px; color: var(--maison-muted-brown); margin: 0;">Sofra, insanı yavaşlatan ve birbirine bağlayan en kadim mabettir.</p>
            </div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; cursor: pointer;" data-room="sarap_gastronomi">
            <div style="font-size: 10px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase;">SALON ODASI</div>
            <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal); margin: 2px 0;">Şarap & Gastronomi: Toprağın Hafızası</div>
            <div style="font-size: 12px; color: var(--maison-taupe);">Kerem Demir ile yerel tohumlar ve yavaş sofra felsefesi.</div>
          </div>
        </div>
      `;
    }

    if (tabId === 'moda') {
      return `
        <div class="section-header" style="padding-top: 4px;">
          <h3 class="section-title">Moda & Zamansız Stil</h3>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px 24px 20px;">
          <div class="editorial-card" style="width: 100%;" data-art="zamansiz_terzilik">
            <div class="card-img-wrap" style="height: 160px;">
              <img src="/images/editorial/architecture_arched.jpg" alt="Moda">
              <span class="card-badge">ZANAAT & STİL</span>
            </div>
            <div class="card-body">
              <div class="card-title" style="font-size: 18px;">Zamana Direnen Terzilik: Sade Bir Zarafet Arayışı</div>
              <div class="card-subtitle" style="font-size: 12px;">Aylin Tezel • 6 dk okuma</div>
              <p style="font-size: 12px; color: var(--maison-muted-brown); margin: 0;">Gerçek şıklık dikkat çekmek değil, unutulmamaktır.</p>
            </div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; cursor: pointer;" data-prod="gold_seal_ring">
            <div style="font-size: 10px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase;">SEÇKİN MÜCEVHER</div>
            <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal); margin: 2px 0;">Dövme Mat Altın Mühür Yüzük</div>
            <div style="font-size: 12px; color: var(--maison-taupe);">Kapalıçarşı Usta Aram • 18K Altın • ₺16.800</div>
          </div>
        </div>
      `;
    }

    return '';
  }

  function bindExploreEvents() {
    // Article cards
    document.querySelectorAll('[data-art]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.art;
        setView('article', { id });
      });
    });

    // Product cards
    document.querySelectorAll('[data-prod]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.prod;
        setView('product', { id });
      });
    });

    // Room cards
    document.querySelectorAll('[data-room]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.room;
        setView('room', { id });
      });
    });

    // Person cards
    document.querySelectorAll('[data-person]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.person;
        setView('person_detail', { id });
      });
    });

    // Dimension cards
    document.querySelectorAll('[data-dim]').forEach(c => {
      c.addEventListener('click', () => {
        const dimId = c.dataset.dim;
        if (dimId === 'insanlar') {
          setView('people');
        } else {
          setView('explore_dim', { dim: dimId });
        }
      });
    });

    // Curated items in explore view
    document.querySelectorAll('[data-expitem]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.expitem;
        if (id === 'exp_1') setView('explore_dim', { dim: 'sergiler' });
        else if (id === 'exp_2') setView('explore_dim', { dim: 'mekanlar' });
        else if (id === 'exp_3') setView('explore_dim', { dim: 'kitaplar' });
        else if (id === 'exp_4') setView('explore_dim', { dim: 'sehirler' });
        else if (id === 'exp_5') setView('explore_dim', { dim: 'tasarim' });
        else if (id === 'exp_6') setView('explore_dim', { dim: 'muzikler' });
        else if (id === 'exp_7') setView('explore_dim', { dim: 'filmler' });
      });
    });

    const btnGoToOku = document.getElementById('btnGoToOku');
    if (btnGoToOku) btnGoToOku.addEventListener('click', () => setView('oku'));

    const cardExh = document.getElementById('cardExhibitionDetail');
    if (cardExh) cardExh.addEventListener('click', () => {
      setView('explore_dim', { dim: 'sergiler' });
    });
  }

  // Helper: Dimension View Badges
  function getExploreDimBadge(dim) {
    switch (dim) {
      case 'mekanlar': return "Mekânlar & Fine Dining";
      case 'sehirler': return "Şehirler & Rotalar";
      case 'sergiler': return "Sergiler & Müzeler";
      case 'kitaplar': return "Seçkin Kitaplar";
      case 'filmler': return "Günün Sineması";
      case 'muzikler': return "Günün Müziği & Ses";
      case 'tasarim': return "Tasarım & Mimari";
      case 'nesneler': return "Seçkin Nesneler";
      case 'insanlar': return "Maison People";
      default: return "Kültürel Keşif";
    }
  }

  // 2. KEŞİF BOYUTLARI DEDICATED CONTROLLER & RENDERER
  function renderExploreDimensionView(dimKey = 'mekanlar', subFilter = 'all') {
    const d = MAISON_DATA;
    if (dimKey === 'insanlar') {
      renderPeopleView('all');
      return;
    }

    let title = "", subtitle = "", countLabel = "";
    let subFilterTabs = [];
    let contentHtml = "";

    // 1. MEKÂNLAR (Fine Dining, Luxury Resorts, Cultural Escapes)
    if (dimKey === 'mekanlar') {
      title = "Mekânlar & Fine Dining";
      subtitle = "Michelin yıldızlı mutfaklar, lüks sayfiye ve seçkin kültür mekanları.";
      countLabel = `${d.exploreData.places.length} Seçkin Mekân`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'Fine Dining', label: 'Fine Dining' },
        { id: 'Lüks Sayfiye & Resort', label: 'Lüks Sayfiye & Resort' },
        { id: 'Tarihi & Kültürel Mekânlar', label: 'Tarihi & Kültürel' }
      ];

      let places = d.exploreData.places;
      if (subFilter !== 'all') {
        places = places.filter(p => p.tags.includes(subFilter) || p.type === subFilter);
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${places.map(place => `
            <div class="dim-card" data-placeid="${place.id}">
              <div class="dim-card-img-wrap">
                <img src="${place.image}" alt="${place.name}">
                <span class="card-badge">${place.badge}</span>
              </div>
              <div class="dim-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <h3 style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--maison-charcoal); margin: 0;">${place.name}</h3>
                  <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">${place.city}</span>
                </div>
                <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 6px;">${place.location} • Şef / Ekip: <strong>${place.chef}</strong></div>
                <div style="font-size: 11.5px; color: var(--maison-gold); font-weight: 600; margin-bottom: 6px;">✨ ${place.highlight}</div>
                <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 10px 0;">${place.description}</p>
                
                <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-gold); border-radius: 0 10px 10px 0; padding: 8px 12px; margin-bottom: 12px; font-size: 11.5px; color: var(--maison-charcoal); font-style: italic;">
                  “${place.atmosphere}”
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--maison-border); padding-top: 12px; margin-top: 4px;">
                  <div style="font-size: 11px; color: var(--maison-taupe);">
                    Öne Çıkan: <strong style="color: var(--maison-charcoal);">${place.mustTry}</strong>
                  </div>
                  <button class="dim-action-btn secondary btn-inspect-place" data-placeid="${place.id}">
                    <span>Mekânı İncele</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 2. ŞEHİRLER (Aegean, Islands, Med & Italy, Portugal, Montenegro)
    else if (dimKey === 'sehirler') {
      title = "Şehirler & Kültür Rotaları";
      subtitle = "Ege ve Akdeniz kıyılarından İtalya, Portekiz ve Karadağ'ın zamansız rotalarına nüanslar.";
      countLabel = `${d.exploreData.cities.length} Şehir & Rota`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'Ege & Akdeniz Kıyıları', label: 'Ege & Akdeniz' },
        { id: 'Adalar', label: 'Adalar' },
        { id: 'İtalya', label: 'İtalya' },
        { id: 'Portekiz', label: 'Portekiz' },
        { id: 'Karadağ', label: 'Karadağ' }
      ];

      let cities = d.exploreData.cities;
      if (subFilter !== 'all') {
        cities = cities.filter(c => c.badge === subFilter || c.country === subFilter || (subFilter === 'Ege & Akdeniz Kıyıları' && (c.badge === 'EGE KIYILARI' || c.badge === 'AKDENİZ KIYILARI')));
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${cities.map(city => `
            <div class="dim-card" data-cityid="${city.id}">
              <div class="dim-card-img-wrap">
                <img src="${city.image}" alt="${city.name}">
                <span class="card-badge">${city.badge} • ${city.country}</span>
              </div>
              <div class="dim-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <h3 style="font-family: var(--font-serif); font-size: 21px; font-weight: 600; color: var(--maison-charcoal); margin: 0;">${city.name}</h3>
                  <span style="font-size: 11px; color: var(--maison-taupe);">${city.region}</span>
                </div>
                <div style="font-family: var(--font-serif); font-style: italic; font-size: 13px; color: var(--maison-gold); margin-bottom: 10px;">${city.tagline}</div>
                
                <div style="margin-bottom: 12px;">
                  <div style="font-size: 10.5px; text-transform: uppercase; letter-spacing: 1px; color: var(--maison-taupe); font-weight: 600; margin-bottom: 6px;">ŞEHİR NÜANSLARI & ANLAR:</div>
                  <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: var(--maison-muted-brown); line-height: 1.5;">
                    ${city.nuances.map(n => `<li style="margin-bottom: 3px;">${n}</li>`).join('')}
                  </ul>
                </div>

                <div style="background: #faf7f2; border: 1px dashed var(--maison-border-stone); border-radius: 12px; padding: 10px 14px; margin-bottom: 14px;">
                  <div style="font-size: 10px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px;">🧭 YAVAŞ YAŞAM İPUCU</div>
                  <div style="font-size: 11.5px; color: var(--maison-charcoal); line-height: 1.4;">${city.slowTravelTip}</div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--maison-border); padding-top: 12px;">
                  <span style="font-size: 11px; color: var(--maison-taupe); font-style: italic;">Atmosfer: ${city.vibe}</span>
                  <button class="dim-action-btn btn-save-city" data-cityname="${city.name}">
                    <span>Rotayı Kaydet</span>
                    <span>📍</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 3. SERGİLER (Exhibitions with Venues, Dates, and Curatorial Essay Reader)
    else if (dimKey === 'sergiler') {
      title = "Sergiler & Müze Seçkisi";
      subtitle = "Görsel hafızayı besleyen güncel sergiler, tarihler ve okunabilir küratöryel metinler.";
      countLabel = `${d.exploreData.exhibitions.length} Sergi`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'GÜNCEL SERGİ', label: 'Güncel' },
        { id: 'YENİ AÇILDI', label: 'Yeni Açılanlar' },
        { id: 'ULUSLARARASI BİENAL', label: 'Bienal & Uluslararası' }
      ];

      let exhibitions = d.exploreData.exhibitions;
      if (subFilter !== 'all') {
        exhibitions = exhibitions.filter(e => e.badge === subFilter || e.badge.includes(subFilter));
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${exhibitions.map(exh => `
            <div class="dim-card" data-exhid="${exh.id}">
              <div class="dim-card-img-wrap">
                <img src="${exh.image}" alt="${exh.title}">
                <span class="card-badge">${exh.badge}</span>
              </div>
              <div class="dim-card-body">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="font-size: 11px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1px;">${exh.venue}</span>
                  <span style="font-size: 11px; color: var(--maison-taupe);">• ${exh.city}</span>
                </div>
                <h3 style="font-family: var(--font-serif); font-size: 21px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 6px 0;">${exh.title}</h3>
                
                <div style="display: inline-flex; align-items: center; gap: 6px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 8px; padding: 4px 10px; font-size: 11px; color: var(--maison-charcoal); font-weight: 600; margin-bottom: 10px;">
                  <span>📅</span>
                  <span>${exh.dates}</span>
                </div>

                <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 6px;">Küratör: <strong style="color: var(--maison-charcoal);">${exh.curator}</strong></div>
                <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 12px 0;">${exh.synopsis}</p>

                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
                  ${exh.featuredArtists.map(a => `<span style="font-size: 10.5px; background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 6px; padding: 2px 8px; color: var(--maison-muted-brown);">${a}</span>`).join('')}
                </div>

                <div style="border-top: 1px solid var(--maison-border); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 11px; color: var(--maison-taupe);">Saatler: ${exh.visitingHours}</span>
                  <button class="dim-action-btn btn-read-curatorial" data-exhid="${exh.id}">
                    <span>Küratöryel Metni Oku</span>
                    <span>📖</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 4. KİTAPLAR (World Classics, Spiritual, Philosophical Masterpieces - Not Just Shopping)
    else if (dimKey === 'kitaplar') {
      title = "Seçkin Kitaplar & Düşünce";
      subtitle = "Dünya klasikleri, spiritüel derinlik ve felsefi başucu eserleri. İnceleyin, alıntıları keşfedin ve kütüphanenize kaydedin.";
      countLabel = `${d.exploreData.curatedBooks.length} Seçkin Eser`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'Dünya Klasikleri', label: 'Dünya Klasikleri' },
        { id: 'Felsefe & Düşünce', label: 'Felsefe & Düşünce' },
        { id: 'Spiritüel & İçsel Arayış', label: 'Spiritüel' },
        { id: 'Mimarlık & Poetik', label: 'Mimarlık & Poetik' }
      ];

      let books = d.exploreData.curatedBooks;
      if (subFilter !== 'all') {
        books = books.filter(b => b.category === subFilter);
      }

      contentHtml = `
        <div style="margin: 0 20px 14px 20px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 12px; padding: 12px 16px; font-size: 12px; color: var(--maison-muted-brown); line-height: 1.45;">
          📖 <strong>Edebi Mabed:</strong> Burada sıradan bir alışveriş listesi değil; her kitabın düşünsel evrenini, küratör incelemesini ve felsefi alıntılarını bulacaksınız. Dilediğiniz kitabı tek tıkla Berke Saygılı kütüphanesine kaydedebilirsiniz.
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${books.map(book => `
            <div class="dim-card" data-bookid="${book.id}">
              <div style="display: flex; gap: 14px; padding: 18px 18px 10px 18px; align-items: flex-start;">
                <img src="${book.cover}" alt="${book.title}" style="width: 84px; height: 120px; object-fit: cover; border-radius: 8px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <div style="flex: 1;">
                  <span class="card-badge" style="position: static; font-size: 8.5px; margin-bottom: 4px;">${book.badge} • ${book.category}</span>
                  <h3 style="font-family: var(--font-serif); font-size: 19px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 2px 0;">${book.title}</h3>
                  <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600;">${book.author}</div>
                  <div style="font-size: 11px; color: var(--maison-taupe); margin-top: 2px;">${book.publisher} • Çev: ${book.translator}</div>
                  <div style="font-size: 11px; color: var(--maison-taupe);">${book.pages} Sayfa • ${book.genre}</div>
                </div>
              </div>

              <div class="dim-card-body" style="padding-top: 0;">
                <div class="dim-quote-box">
                  “${book.quote}”
                </div>

                <div style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.5; margin-bottom: 10px;">
                  <strong style="color: var(--maison-charcoal);">Küratör İncelemesi:</strong> ${book.curatorReview}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
                  ${book.keyThemes.map(t => `<span style="font-size: 10px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 6px; padding: 3px 8px; color: var(--maison-charcoal); font-weight: 500;">#${t}</span>`).join('')}
                </div>

                <div style="border-top: 1px solid var(--maison-border); padding-top: 12px; display: flex; gap: 10px;">
                  <button class="dim-action-btn secondary btn-inspect-book" data-bookid="${book.id}" style="flex: 1;">
                    <span>İncele & Oku</span>
                    <span>📖</span>
                  </button>
                  <button class="dim-action-btn btn-save-book" data-booktitle="${book.title}" style="flex: 1;">
                    <span>Kütüphaneme Kaydet</span>
                    <span>📚</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 5. FİLMLER (Curated Cinema for Distinguished Visitors - Save to Profile)
    else if (dimKey === 'filmler') {
      title = "Günün Sineması & Kültür Filmleri";
      subtitle = "MAISON ziyaretinizde gününüzü zenginleştirecek sinema başyapıtları. İnceleyin ve akşam izlemek için profilinize kaydedin.";
      countLabel = `${d.exploreData.films.length} Film Kürasyonu`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'GÜNÜN FİLMİ', label: 'Günün Filmi' },
        { id: 'MODERN KLASİK', label: 'Modern Klasikler' },
        { id: 'ŞİİRSEL SİNEMA', label: 'Şiirsel & Meditatif' },
        { id: 'KÜLT BAŞYAPIT', label: 'Kült Başyapıtlar' }
      ];

      let films = d.exploreData.films;
      if (subFilter !== 'all') {
        films = films.filter(f => f.badge === subFilter || f.badge.includes(subFilter));
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${films.map(film => `
            <div class="dim-card" data-filmid="${film.id}">
              <div class="dim-card-img-wrap" style="height: 180px;">
                <img src="${film.poster}" alt="${film.title}">
                <span class="card-badge">${film.badge}</span>
                <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.75); color: #fff; font-size: 10px; font-weight: 600; padding: 4px 8px; border-radius: 6px; backdrop-filter: blur(4px);">⏱️ ${film.duration}</span>
              </div>
              <div class="dim-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <h3 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--maison-charcoal); margin: 0;">${film.title} (${film.year})</h3>
                  <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">${film.country}</span>
                </div>
                <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 4px;">Yönetmen: <strong style="color: var(--maison-charcoal);">${film.director}</strong></div>
                <div style="font-size: 11.5px; color: var(--maison-taupe); margin-bottom: 8px;">Oyuncular: ${film.cast}</div>
                
                <div style="font-size: 11px; color: var(--maison-gold); font-weight: 600; margin-bottom: 8px;">🏆 ${film.awards}</div>

                <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 10px 0;">
                  <em>“${film.curatorNote}”</em>
                </p>

                <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-gold); border-radius: 0 10px 10px 0; padding: 10px 14px; margin-bottom: 12px;">
                  <div style="font-size: 10px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px;">🎬 NEDEN BUGÜN İZLEMELİSİNİZ?</div>
                  <div style="font-size: 11.5px; color: var(--maison-charcoal); line-height: 1.4;">${film.whyWatchToday}</div>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
                  ${film.themes.map(t => `<span style="font-size: 10px; background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 6px; padding: 3px 8px; color: var(--maison-muted-brown);">#${t}</span>`).join('')}
                </div>

                <div style="border-top: 1px solid var(--maison-border); padding-top: 12px; display: flex; gap: 10px;">
                  <button class="dim-action-btn secondary btn-inspect-film" data-filmid="${film.id}" style="flex: 1;">
                    <span>Sinematografi</span>
                    <span>🎞️</span>
                  </button>
                  <button class="dim-action-btn btn-save-film" data-filmtitle="${film.title}" style="flex: 1;">
                    <span>İzleme Listeme Ekle</span>
                    <span>⭐</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 6. MÜZİKLER (5 Playable Masterpieces & Atmospheric Audio Player)
    else if (dimKey === 'muzikler') {
      title = "Günün Müziği & Ses Manzarası";
      subtitle = "Seçkin neoklasik ve ambient bestecilerden 5 başyapıt. Tamamı çalınabilir ve dinlenebilir formatta.";
      countLabel = `${d.exploreData.musicTracks.length} Eser`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'vals', label: 'Günün Valsi' },
        { id: 'piyano', label: 'Piyano & Ambient' },
        { id: 'neoklasik', label: 'Neoklasik' }
      ];

      const currentTrack = d.exploreData.musicTracks.find(t => t.id === state.activeTrackId) || d.exploreData.musicTracks[0];

      contentHtml = `
        <div style="padding: 0 20px 30px 20px; display: flex; flex-direction: column; gap: 18px;">
          <!-- Featured Interactive Player for Active Track -->
          <div style="background: linear-gradient(145deg, #24201d, #171513); border-radius: 22px; padding: 24px 20px; color: #fff; box-shadow: 0 12px 32px rgba(0,0,0,0.3); border: 1px solid #3d3732;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="card-badge" style="position: static; background: var(--maison-gold); color: #000; font-weight: 700; letter-spacing: 1.5px;">GÜNÜN SEÇKİSİ</span>
              <span style="font-size: 11px; color: #dfcaa2; letter-spacing: 1px; text-transform: uppercase;" id="featuredGenreBadge">${currentTrack.genre.toUpperCase()}</span>
            </div>

            <!-- Spinning Vinyl Turntable Visualizer -->
            <div class="vinyl-disc-wrap">
              <div class="vinyl-disc ${state.isPlayingAudio ? 'playing' : ''}" id="mainVinylDisc">
                <div class="vinyl-label">
                  <div class="vinyl-center-hole"></div>
                  <div style="font-size: 6px; font-weight: 700; color: var(--maison-charcoal); margin-top: 4px; text-transform: uppercase;">MAISON</div>
                  <div style="font-size: 5px; color: var(--maison-gold);" id="vinylLabelArtist">${currentTrack.artist.split(' ')[0].toUpperCase()}</div>
                </div>
              </div>
            </div>

            <!-- Track Info -->
            <div style="text-align: center; margin-top: 18px;">
              <h2 style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: #ffffff; margin: 0 0 4px 0;" id="featuredTrackTitle">${currentTrack.title}</h2>
              <div style="font-size: 13px; color: #dfcaa2; font-weight: 500;" id="featuredTrackArtist">${currentTrack.artist}</div>
              <div style="font-size: 11px; color: #a89f91; margin-top: 2px;" id="featuredTrackAlbum">${currentTrack.album} (${currentTrack.year})</div>
            </div>

            <!-- Interactive Scrubber & Time -->
            <div style="margin-top: 18px;">
              <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; cursor: pointer;" id="interactiveScrubber">
                <div style="width: ${state.isPlayingAudio ? '45%' : '0%'}; height: 100%; background: var(--maison-gold); transition: width 0.3s ease;" id="interactiveProgress"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: #a89f91; margin-top: 6px;">
                <span id="interactiveTimeCurrent">${state.isPlayingAudio ? '1:12' : '0:00'}</span>
                <span id="interactiveDuration">${currentTrack.duration}</span>
              </div>
            </div>

            <!-- Controls Row -->
            <div style="display: flex; align-items: center; justify-content: center; gap: 24px; margin-top: 14px;">
              <button style="background: none; border: none; color: #dfcaa2; cursor: pointer; font-size: 22px; padding: 6px;" id="btnPrevTrack" title="Önceki Şarkı">⏮</button>
              
              <button id="btnPlayDailyMusic" style="width: 56px; height: 56px; border-radius: 50%; background: var(--maison-gold); border: none; display: flex; align-items: center; justify-content: center; color: #171513; font-size: 24px; cursor: pointer; box-shadow: 0 4px 16px rgba(223, 202, 162, 0.4); transition: transform 0.2s ease;">
                <span id="playDailyMusicIcon">${state.isPlayingAudio ? '⏸' : '▶'}</span>
              </button>

              <button style="background: none; border: none; color: #dfcaa2; cursor: pointer; font-size: 22px; padding: 6px;" id="btnNextTrack" title="Sonraki Şarkı">⏭</button>
            </div>

            <!-- Curator's Music Note -->
            <div style="background: rgba(255,255,255,0.06); border-radius: 12px; padding: 12px 14px; margin-top: 18px; border: 1px solid rgba(255,255,255,0.08);">
              <div style="font-size: 10px; font-weight: 700; color: #dfcaa2; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px;">KÜRATÖRÜN DİNLEME NOTU:</div>
              <p style="font-size: 11.5px; color: #e0d8cd; line-height: 1.45; margin: 0;" id="featuredCuratorNote">${currentTrack.curatorNote}</p>
            </div>
          </div>

          <!-- Curated Atmosphere Playlist (5 Tracks) -->
          <div class="section-header" style="padding-left: 0; padding-right: 0; padding-top: 6px;">
            <h3 class="section-title">Küratörün Ses Manzarası Çalma Listesi (5 Eser)</h3>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;" id="playlistContainer">
            ${d.exploreData.musicTracks.map((tr, idx) => {
              const isActive = (tr.id === state.activeTrackId);
              const isPlaying = isActive && state.isPlayingAudio;
              return `
                <div class="music-track-item ${isActive ? 'active-track' : ''}" style="background: ${isActive ? '#FAF2E6' : 'var(--maison-white)'}; border: 1px solid ${isActive ? 'var(--maison-gold)' : 'var(--maison-border)'}; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.2s ease;" data-trackid="${tr.id}">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 12px; font-weight: 700; color: ${isActive ? 'var(--maison-gold)' : 'var(--maison-taupe)'}; width: 16px; text-align: center;">${isPlaying ? '🔊' : idx + 1}</span>
                    <img src="${tr.cover}" style="width: 44px; height: 44px; border-radius: 8px; object-fit: cover; border: 1px solid var(--maison-border-stone);">
                    <div>
                      <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${tr.title}</div>
                      <div style="font-size: 11px; color: var(--maison-taupe);">${tr.artist} • ${tr.genre}</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 11px; color: var(--maison-taupe);">${tr.duration}</span>
                    <button style="width: 32px; height: 32px; border-radius: 50%; background: ${isPlaying ? 'var(--maison-gold)' : 'var(--maison-cream)'}; border: 1px solid var(--maison-border-stone); display: flex; align-items: center; justify-content: center; color: ${isPlaying ? '#1A1816' : 'var(--maison-charcoal)'}; cursor: pointer; font-size: 12px;" class="btn-play-item" data-trackid="${tr.id}">${isPlaying ? '⏸' : '▶'}</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 7. TASARIM (Interior, Lighting, Craft/Ceramics, Furniture, Typography)
    else if (dimKey === 'tasarim') {
      title = "Tasarım & Mimari";
      subtitle = "İç mimari, aydınlatma, zanaat, mobilya ve tipografi alanlarında seçkin örnekler.";
      countLabel = `${d.exploreData.designs.length} Tasarım`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'İç Mimari', label: 'İç Mimari' },
        { id: 'Aydınlatma', label: 'Aydınlatma' },
        { id: 'Zanaat & Seramik', label: 'Zanaat & Seramik' },
        { id: 'Mobilya', label: 'Mobilya' },
        { id: 'Tipografi', label: 'Tipografi' }
      ];

      let designs = d.exploreData.designs;
      if (subFilter !== 'all') {
        designs = designs.filter(des => des.discipline === subFilter);
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${designs.map(des => `
            <div class="dim-card" data-desid="${des.id}">
              <div class="dim-card-img-wrap">
                <img src="${des.image}" alt="${des.title}">
                <span class="card-badge">${des.badge}</span>
              </div>
              <div class="dim-card-body">
                <div style="font-size: 10.5px; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-gold); font-weight: 700; margin-bottom: 2px;">${des.discipline} • ${des.location}</div>
                <h3 style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 4px 0;">${des.title}</h3>
                <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 8px;">Tasarımcı / Atölye: <strong style="color: var(--maison-charcoal);">${des.designer}</strong></div>
                
                <div style="background: var(--maison-cream); border-radius: 8px; padding: 6px 12px; font-size: 11px; color: var(--maison-charcoal); margin-bottom: 10px;">
                  <strong>Malzemeler:</strong> ${des.materials}
                </div>

                <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 10px 0;">${des.philosophy}</p>

                <ul style="margin: 0 0 14px 0; padding-left: 18px; font-size: 11.5px; color: var(--maison-muted-brown); line-height: 1.45;">
                  ${des.features.map(f => `<li>${f}</li>`).join('')}
                </ul>

                <div style="border-top: 1px solid var(--maison-border); padding-top: 12px; display: flex; justify-content: flex-end;">
                  <button class="dim-action-btn secondary btn-inspect-design" data-desid="${des.id}">
                    <span>Tasarım Detayını Gör</span>
                    <span>📐</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 8. NESNELER (Rich Curated Objects Catalog with Provenance, Maker, and Stories)
    else if (dimKey === 'nesneler') {
      title = "Seçkin Nesneler Kataloğu";
      subtitle = "Klasik e-ticaretin ötesinde; arkasında hikaye, üretici, malzeme ve kültürel bağlam olan seçkin parçalar.";
      countLabel = `${d.exploreData.curatedObjects.length} Seçkin Nesne`;
      subFilterTabs = [
        { id: 'all', label: 'Tümü' },
        { id: 'El Yapımı Seramik', label: 'Seramik' },
        { id: 'Nadir Kitap', label: 'Nadir Kitap' },
        { id: 'Tasarım Objesi', label: 'Tasarım Objesi' },
        { id: 'Parfüm', label: 'Parfüm' },
        { id: 'Tekstil', label: 'Tekstil' },
        { id: 'Yazı Gereçleri', label: 'Yazı Gereçleri' }
      ];

      let objects = d.exploreData.curatedObjects;
      if (subFilter !== 'all') {
        objects = objects.filter(o => o.category === subFilter);
      }

      contentHtml = `
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 0 20px 30px 20px;">
          ${objects.map(obj => `
            <div class="dim-card" data-objid="${obj.id}">
              <div class="dim-card-img-wrap">
                <img src="${obj.image}" alt="${obj.name}">
                <span class="card-badge">${obj.category}</span>
              </div>
              <div class="dim-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <h3 style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--maison-charcoal); margin: 0;">${obj.name}</h3>
                  <span style="font-size: 15px; font-weight: 700; color: var(--maison-charcoal);">${obj.price}</span>
                </div>
                <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 6px;">Üretici: <strong>${obj.maker}</strong> • ${obj.origin}</div>
                
                <div style="background: var(--maison-cream); border-radius: 8px; padding: 6px 12px; font-size: 11px; color: var(--maison-charcoal); margin-bottom: 10px;">
                  <strong>Malzeme & İşçilik:</strong> ${obj.material}
                </div>

                <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 10px 0;">${obj.story}</p>

                <div style="font-size: 11.5px; color: var(--maison-gold); margin-bottom: 14px; font-style: italic;">
                  ✨ Neden Seçtik: ${obj.whyWeChoseIt}
                </div>

                <div style="border-top: 1px solid var(--maison-border); padding-top: 12px; display: flex; gap: 10px;">
                  <button class="dim-action-btn secondary btn-inspect-object" data-objid="${obj.id}" style="flex: 1;">
                    <span>Hikayesini Oku</span>
                    <span>🏺</span>
                  </button>
                  <button class="dim-action-btn btn-save-object" data-objname="${obj.name}" style="flex: 1;">
                    <span>Koleksiyona Ekle</span>
                    <span>+</span>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Assemble Full Dimension Page
    appScreenBody.innerHTML = `
      <!-- Dimension Top Bar -->
      <div style="padding: 16px 20px 10px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--maison-border); background: var(--maison-white);">
        <button id="btnDimBack" style="background: none; border: none; font-size: 13px; color: var(--maison-charcoal); display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 500; padding: 0;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Keşfet'e Dön</span>
        </button>
        <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-gold); font-weight: 600;">${countLabel}</span>
      </div>

      <!-- Dimension Header -->
      <div style="padding: 18px 20px 12px 20px;">
        <h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 4px 0;">${title}</h2>
        <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0;">${subtitle}</p>
      </div>

      <!-- Sub Filter Rail -->
      <div class="filter-pills-rail" id="dimSubFilterRail">
        ${subFilterTabs.map(tab => `
          <div class="filter-pill ${subFilter === tab.id ? 'active' : ''}" data-dimfilter="${tab.id}">${tab.label}</div>
        `).join('')}
      </div>

      <!-- Dimension Dynamic Content -->
      <div id="dimContentContainer">
        ${contentHtml}
      </div>

      <!-- Global Curatorial Reader Modal Container -->
      <div class="curatorial-reader-modal" id="dimReaderModal">
        <div class="curatorial-reader-sheet" id="dimReaderSheet">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid var(--maison-border); padding-bottom: 10px;">
            <span style="font-size: 10.5px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1.5px;" id="readerModalType">EDİTORYAL OKUMA</span>
            <button id="btnCloseReaderModal" style="background: none; border: none; font-size: 20px; color: var(--maison-charcoal); cursor: pointer; padding: 0 4px;">✕</button>
          </div>
          <div id="dimReaderBody"></div>
        </div>
      </div>
    `;

    // Event Listeners for Dimension Screen
    const btnBack = document.getElementById('btnDimBack');
    if (btnBack) btnBack.addEventListener('click', () => setView('explore'));

    // Subfilter Clicks
    document.querySelectorAll('#dimSubFilterRail [data-dimfilter]').forEach(tab => {
      tab.addEventListener('click', () => {
        const filterVal = tab.dataset.dimfilter;
        renderExploreDimensionView(dimKey, filterVal);
      });
    });

    // Curatorial Reader Modal Close
    const modal = document.getElementById('dimReaderModal');
    const btnClose = document.getElementById('btnCloseReaderModal');
    if (btnClose && modal) {
      btnClose.addEventListener('click', () => modal.classList.remove('active'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }

    bindDimensionInteractions(dimKey);
  }

  // Bind Dimension Card Actions (Saving, Inspecting, Audio Playing)
  function bindDimensionInteractions(dimKey) {
    const d = MAISON_DATA;
    const modal = document.getElementById('dimReaderModal');
    const readerBody = document.getElementById('dimReaderBody');
    const readerType = document.getElementById('readerModalType');

    // 1. Sergiler: Küratöryel Metni Oku Modal
    document.querySelectorAll('.btn-read-curatorial').forEach(btn => {
      btn.addEventListener('click', () => {
        const exhId = btn.dataset.exhid;
        const exh = d.exploreData.exhibitions.find(e => e.id === exhId);
        if (!exh || !modal || !readerBody) return;

        readerType.textContent = "KÜRATÖRYEL METİN • SERGİ";
        readerBody.innerHTML = `
          <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${exh.venue} • ${exh.city}</div>
          <h2 style="font-family: var(--font-serif); font-size: 24px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 10px 0;">${exh.title}</h2>
          <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 14px;">Tarihler: <strong>${exh.dates}</strong> • Küratör: <strong>${exh.curator}</strong></div>
          
          <div style="border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
            <img src="${exh.image}" style="width: 100%; height: 180px; object-fit: cover;">
          </div>

          <div style="font-size: 13.5px; color: var(--maison-charcoal); line-height: 1.6; font-family: var(--font-sans);">
            ${exh.curatorialEssay}
          </div>

          <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--maison-border);">
            <div style="font-size: 11px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; margin-bottom: 6px;">KATILIMCI SANATÇILAR</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${exh.featuredArtists.map(a => `<span style="font-size: 11px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 6px; padding: 4px 10px; color: var(--maison-charcoal); font-weight: 500;">${a}</span>`).join('')}
            </div>
          </div>

          <div style="margin-top: 16px; font-size: 11.5px; color: var(--maison-taupe);">
            Ziyaret Saatleri: ${exh.visitingHours}
          </div>

          <div style="margin-top: 20px; display: flex; gap: 10px;">
            <button class="dim-action-btn" style="flex: 1;" id="btnSaveExhToCal">
              <span>Ziyaret Takvimime Ekle</span>
              <span>📅</span>
            </button>
          </div>
        `;
        modal.classList.add('active');
        document.getElementById('btnSaveExhToCal').addEventListener('click', () => {
          showToast(`📅 '${exh.title}' sergisi ziyaret ajandanıza eklendi.`);
          modal.classList.remove('active');
        });
      });
    });

    // 2. Kitaplar: İncele & Kütüphaneme Kaydet
    document.querySelectorAll('.btn-inspect-book').forEach(btn => {
      btn.addEventListener('click', () => {
        const bookId = btn.dataset.bookid;
        const book = d.exploreData.curatedBooks.find(b => b.id === bookId);
        if (!book || !modal || !readerBody) return;

        readerType.textContent = "KİTAP İNCELEMESİ & ALINTILAR";
        readerBody.innerHTML = `
          <div style="display: flex; gap: 14px; margin-bottom: 16px;">
            <img src="${book.cover}" style="width: 80px; height: 115px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <div>
              <span class="card-badge" style="position: static; font-size: 8.5px;">${book.badge}</span>
              <h2 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 2px 0;">${book.title}</h2>
              <div style="font-size: 13px; color: var(--maison-gold); font-weight: 600;">${book.author}</div>
              <div style="font-size: 11.5px; color: var(--maison-taupe); margin-top: 3px;">Orijinal: <em>${book.originalTitle}</em></div>
              <div style="font-size: 11.5px; color: var(--maison-taupe);">${book.publisher} • Çeviri: ${book.translator}</div>
            </div>
          </div>

          <div class="dim-quote-box" style="font-size: 14.5px;">
            “${book.quote}”
          </div>

          <div style="margin-bottom: 14px;">
            <h4 style="font-size: 12px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px 0;">KÜRATÖRÜN DEĞERLENDİRMESİ</h4>
            <p style="font-size: 13px; color: var(--maison-charcoal); line-height: 1.55; margin: 0;">${book.curatorReview}</p>
          </div>

          <div style="background: #faf7f2; border: 1px solid var(--maison-border-stone); border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
            <div style="font-size: 10.5px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px;">NEDEN OKUMALISINIZ?</div>
            <div style="font-size: 12.5px; color: var(--maison-charcoal); line-height: 1.45;">${book.whyRead}</div>
          </div>

          <button class="dim-action-btn" style="width: 100%;" id="btnModalSaveBook">
            <span>Berke Saygılı Kütüphanesine Kaydet</span>
            <span>📚</span>
          </button>
        `;
        modal.classList.add('active');
        document.getElementById('btnModalSaveBook').addEventListener('click', (e) => {
          triggerSavePop(e.currentTarget);
          if (!state.savedBooks.includes(book.title)) state.savedBooks.push(book.title);
          showToast(`📚 '${book.title}' Berke Saygılı kütüphanesine kaydedildi.`);
          modal.classList.remove('active');
        });
      });
    });

    document.querySelectorAll('.btn-save-book').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSavePop(btn);
        const title = btn.dataset.booktitle;
        if (!state.savedBooks.includes(title)) state.savedBooks.push(title);
        showToast(`📚 '${title}' Berke Saygılı kütüphanesine kaydedildi.`);
        btn.innerHTML = `<span>Kütüphanede ✓</span>`;
        btn.style.background = `var(--maison-gold)`;
      });
    });

    // 3. Filmler: Sinematografi & İzleme Listeme Kaydet
    document.querySelectorAll('.btn-inspect-film').forEach(btn => {
      btn.addEventListener('click', () => {
        const filmId = btn.dataset.filmid;
        const film = d.exploreData.films.find(f => f.id === filmId);
        if (!film || !modal || !readerBody) return;

        readerType.textContent = "SİNEMATOGRAFİ & YÖNETMEN NOTLARI";
        readerBody.innerHTML = `
          <div style="border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
            <img src="${film.poster}" style="width: 100%; height: 180px; object-fit: cover;">
          </div>
          <span class="card-badge" style="position: static; font-size: 8.5px;">${film.badge}</span>
          <h2 style="font-family: var(--font-serif); font-size: 24px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 2px 0;">${film.title} (${film.year})</h2>
          <div style="font-size: 13px; color: var(--maison-gold); font-weight: 600;">Yönetmen: ${film.director} • ${film.country}</div>
          <div style="font-size: 12px; color: var(--maison-taupe); margin-top: 2px;">Süre: ${film.duration} • Tür: ${film.genre}</div>

          <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-gold); padding: 12px 14px; margin: 14px 0; border-radius: 0 10px 10px 0;">
            <div style="font-size: 10.5px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase;">NEDEN BUGÜN İZLEMELİSİNİZ?</div>
            <p style="font-size: 12.5px; color: var(--maison-charcoal); line-height: 1.5; margin: 4px 0 0 0;">${film.whyWatchToday}</p>
          </div>

          <div style="font-size: 13px; color: var(--maison-charcoal); line-height: 1.55; margin-bottom: 14px;">
            <strong>Küratörün Sinematografi Analizi:</strong> ${film.curatorNote} Filmde kullanılan doğal ışık, ses tasarımı ve ritmik montaj izleyiciyi gündelik telaştan kopararak derin bir tefekkür haline taşır.
          </div>

          <button class="dim-action-btn" style="width: 100%;" id="btnModalSaveFilm">
            <span>İzleme Listeme Ekle</span>
            <span>⭐</span>
          </button>
        `;
        modal.classList.add('active');
        document.getElementById('btnModalSaveFilm').addEventListener('click', (e) => {
          triggerSavePop(e.currentTarget);
          if (!state.savedFilms.includes(film.title)) state.savedFilms.push(film.title);
          showToast(`🎞️ '${film.title}' izleme listenize kaydedildi.`);
          modal.classList.remove('active');
        });
      });
    });

    document.querySelectorAll('.btn-save-film').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSavePop(btn);
        const title = btn.dataset.filmtitle;
        if (!state.savedFilms.includes(title)) state.savedFilms.push(title);
        showToast(`🎞️ '${title}' izleme listenize kaydedildi.`);
        btn.innerHTML = `<span>Listede ✓</span>`;
        btn.style.background = `var(--maison-gold)`;
      });
    });

    // 4. Şehirler: Rotayı Kaydet
    document.querySelectorAll('.btn-save-city').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSavePop(btn);
        const name = btn.dataset.cityname;
        if (!state.savedCities.includes(name)) state.savedCities.push(name);
        showToast(`📍 '${name}' seyahat rotalarınıza kaydedildi.`);
        btn.innerHTML = `<span>Rotada ✓</span>`;
        btn.style.background = `var(--maison-gold)`;
      });
    });

    // 5. Mekânlar: İncele Modal
    document.querySelectorAll('.btn-inspect-place').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.dataset.placeid;
        const place = d.exploreData.places.find(p => p.id === pId);
        if (!place || !modal || !readerBody) return;

        readerType.textContent = "MEKÂN & GASTRONOMİ DETAYI";
        readerBody.innerHTML = `
          <div style="border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
            <img src="${place.image}" style="width: 100%; height: 180px; object-fit: cover;">
          </div>
          <span class="card-badge" style="position: static; font-size: 8.5px;">${place.badge}</span>
          <h2 style="font-family: var(--font-serif); font-size: 24px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 2px 0;">${place.name}</h2>
          <div style="font-size: 13px; color: var(--maison-gold); font-weight: 600;">${place.city} • ${place.location}</div>
          <div style="font-size: 12px; color: var(--maison-taupe); margin-top: 2px;">Şef / Ekip: <strong>${place.chef}</strong> • ${place.rating}</div>

          <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-gold); padding: 12px 14px; margin: 14px 0; border-radius: 0 10px 10px 0;">
            <div style="font-size: 10.5px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase;">ATMOSFER & AMBİYANS</div>
            <p style="font-size: 12.5px; color: var(--maison-charcoal); line-height: 1.5; margin: 4px 0 0 0;">${place.atmosphere}</p>
          </div>

          <p style="font-size: 13px; color: var(--maison-muted-brown); line-height: 1.55; margin-bottom: 12px;">${place.description}</p>
          
          <div style="background: #faf7f2; border: 1px solid var(--maison-border-stone); border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; font-size: 12px; color: var(--maison-charcoal);">
            🍽️ <strong>Öne Çıkan Lezzet:</strong> ${place.mustTry}
          </div>

          <button class="dim-action-btn" style="width: 100%;" id="btnModalSavePlace">
            <span>Favori Mekânlarıma Ekle</span>
            <span>⭐</span>
          </button>
        `;
        modal.classList.add('active');
        document.getElementById('btnModalSavePlace').addEventListener('click', () => {
          if (!state.savedPlaces.includes(place.name)) state.savedPlaces.push(place.name);
          showToast(`🏛️ '${place.name}' favori mekanlarınıza eklendi.`);
          modal.classList.remove('active');
        });
      });
    });

    // 6. Tasarım: İncele Modal
    document.querySelectorAll('.btn-inspect-design').forEach(btn => {
      btn.addEventListener('click', () => {
        const desId = btn.dataset.desid;
        const des = d.exploreData.designs.find(i => i.id === desId);
        if (!des || !modal || !readerBody) return;

        readerType.textContent = "TASARIM & MİMARİ FELSEFESİ";
        readerBody.innerHTML = `
          <div style="border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
            <img src="${des.image}" style="width: 100%; height: 180px; object-fit: cover;">
          </div>
          <span class="card-badge" style="position: static; font-size: 8.5px;">${des.badge} • ${des.discipline}</span>
          <h2 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0 2px 0;">${des.title}</h2>
          <div style="font-size: 13px; color: var(--maison-gold); font-weight: 600;">Tasarımcı: ${des.designer} • ${des.location}</div>

          <div style="background: var(--maison-cream); border-radius: 8px; padding: 8px 12px; font-size: 11.5px; color: var(--maison-charcoal); margin: 12px 0;">
            <strong>Malzemeler:</strong> ${des.materials}
          </div>

          <p style="font-size: 13px; color: var(--maison-charcoal); line-height: 1.55; margin-bottom: 14px;">${des.philosophy}</p>

          <div style="font-size: 11px; font-weight: 700; color: var(--maison-gold); text-transform: uppercase; margin-bottom: 6px;">ÖNE ÇIKAN DETAYLAR</div>
          <ul style="margin: 0 0 16px 0; padding-left: 18px; font-size: 12px; color: var(--maison-muted-brown); line-height: 1.5;">
            ${des.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          <button class="dim-action-btn" style="width: 100%;" onclick="document.getElementById('dimReaderModal').classList.remove('active'); showToast('Tasarım ilham panonuza kaydedildi.');">
            <span>İlham Panoma Ekle</span>
            <span>📐</span>
          </button>
        `;
        modal.classList.add('active');
      });
    });

    // 7. Nesneler: Hikayesini Oku Modal & Koleksiyona Ekle
    document.querySelectorAll('.btn-inspect-object').forEach(btn => {
      btn.addEventListener('click', () => {
        const objId = btn.dataset.objid;
        const obj = d.exploreData.curatedObjects.find(o => o.id === objId);
        if (!obj || !modal || !readerBody) return;

        readerType.textContent = "NESNENİN HİKAYESİ & MENŞEİ";
        readerBody.innerHTML = `
          <div style="border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
            <img src="${obj.image}" style="width: 100%; height: 180px; object-fit: cover;">
          </div>
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h2 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--maison-charcoal); margin: 0;">${obj.name}</h2>
            <span style="font-size: 16px; font-weight: 700; color: var(--maison-charcoal);">${obj.price}</span>
          </div>
          <div style="font-size: 12.5px; color: var(--maison-gold); font-weight: 600; margin-top: 2px;">${obj.maker} • ${obj.origin}</div>

          <div style="background: var(--maison-cream); border-radius: 8px; padding: 8px 12px; font-size: 11.5px; color: var(--maison-charcoal); margin: 12px 0;">
            <strong>Malzeme & İşçilik:</strong> ${obj.material}
          </div>

          <p style="font-size: 13px; color: var(--maison-charcoal); line-height: 1.55; margin-bottom: 12px;">${obj.story}</p>
          
          <div style="font-size: 12px; color: var(--maison-gold); font-style: italic; margin-bottom: 16px;">
            ✨ Neden Seçtik: ${obj.whyWeChoseIt}
          </div>

          <button class="dim-action-btn" style="width: 100%;" id="btnModalAddObj">
            <span>Koleksiyonuma Ekle</span>
            <span>🏺</span>
          </button>
        `;
        modal.classList.add('active');
        document.getElementById('btnModalAddObj').addEventListener('click', () => {
          showToast(`🏺 '${obj.name}' koleksiyonunuza eklendi.`);
          modal.classList.remove('active');
        });
      });
    });

    document.querySelectorAll('.btn-save-object').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerSavePop(btn);
        const name = btn.dataset.objname;
        showToast(`🏺 '${name}' koleksiyonunuza eklendi.`);
        btn.innerHTML = `<span>Eklendi ✓</span>`;
        btn.style.background = `var(--maison-gold)`;
      });
    });

    // 8. Müzikler: Interactive Web Audio Synthesizer for 5 Masterpieces
    const btnPlayDaily = document.getElementById('btnPlayDailyMusic');
    if (btnPlayDaily) {
      btnPlayDaily.addEventListener('click', () => {
        playMusicTrack(state.activeTrackId || 'track_valse_amelie');
      });
    }

    const btnPrev = document.getElementById('btnPrevTrack');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        switchMusicTrack(-1);
      });
    }

    const btnNext = document.getElementById('btnNextTrack');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        switchMusicTrack(1);
      });
    }

    document.querySelectorAll('.music-track-item, .btn-play-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const trId = btn.dataset.trackid || btn.closest('.music-track-item')?.dataset.trackid;
        if (trId) {
          playMusicTrack(trId);
        }
      });
    });
  }

  // -------------------------------------------------------------
  // 5-TRACK WEB AUDIO SYNTHESIS & PLAYBACK ENGINE
  // -------------------------------------------------------------
  let trackSynthInterval = null;

  function playMusicTrack(trackId) {
    const tracks = MAISON_DATA.exploreData.musicTracks;
    const track = tracks.find(t => t.id === trackId) || tracks[0];

    // If already playing the same track, toggle pause
    if (state.isPlayingAudio && state.activeTrackId === trackId) {
      stopMusicTrack();
      return;
    }

    // If playing another track, stop previous first
    if (state.isPlayingAudio) {
      stopMusicTrack(false);
    }

    state.isPlayingAudio = true;
    state.activeTrackId = track.id;
    updateAudioUI();
    updateMusicPlayerUI(track, true);

    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      // Distinct musical chords and synthesis for each of the 5 tracks
      let patterns = [];
      let tempo = 1100; // ms per measure

      if (track.id === 'track_valse_amelie') {
        // Yann Tiersen: 3/4 Waltz in D minor
        tempo = 1050;
        patterns = [
          { bass: 146.83, chord: [174.61, 220.00], melody: [293.66, 349.23, 440.00], type: 'sawtooth' },
          { bass: 146.83, chord: [174.61, 220.00], melody: [587.33, 554.37, 587.33], type: 'sawtooth' },
          { bass: 116.54, chord: [146.83, 174.61], melody: [659.25, 698.46, 659.25], type: 'sawtooth' },
          { bass: 110.00, chord: [138.59, 164.81], melody: [587.33, 554.37, 440.00], type: 'sawtooth' }
        ];
      } else if (track.id === 'track_nils_frahm_ambre') {
        // Nils Frahm: Warm felt piano ambient in Am / C
        tempo = 1400;
        patterns = [
          { bass: 110.00, chord: [164.81, 196.00], melody: [261.63, 329.63, 493.88], type: 'sine' },
          { bass: 130.81, chord: [196.00, 246.94], melody: [329.63, 392.00, 523.25], type: 'sine' },
          { bass: 87.31, chord: [130.81, 174.61], melody: [261.63, 349.23, 440.00], type: 'sine' },
          { bass: 98.00, chord: [146.83, 196.00], melody: [293.66, 392.00, 493.88], type: 'sine' }
        ];
      } else if (track.id === 'track_max_richter_daylight') {
        // Max Richter: Deep cinematic slow string progression
        tempo = 1800;
        patterns = [
          { bass: 58.27, chord: [116.54, 146.83, 174.61], melody: [233.08, 293.66], type: 'triangle' },
          { bass: 49.00, chord: [98.00, 116.54, 146.83], melody: [196.00, 246.94], type: 'triangle' },
          { bass: 77.78, chord: [116.54, 155.56, 174.61], melody: [233.08, 311.13], type: 'triangle' },
          { bass: 87.31, chord: [130.81, 174.61, 220.00], melody: [261.63, 349.23], type: 'triangle' }
        ];
      } else if (track.id === 'track_einaudi_nuvole') {
        // Ludovico Einaudi: Flowing neo-classical piano (Fm - Db - Ab - Eb)
        tempo = 1200;
        patterns = [
          { bass: 87.31, chord: [130.81, 174.61], melody: [261.63, 349.23, 415.30], type: 'sine' },
          { bass: 69.30, chord: [103.83, 138.59], melody: [207.65, 277.18, 349.23], type: 'sine' },
          { bass: 103.83, chord: [155.56, 207.65], melody: [311.13, 415.30, 523.25], type: 'sine' },
          { bass: 77.78, chord: [116.54, 155.56], melody: [233.08, 311.13, 392.00], type: 'sine' }
        ];
      } else if (track.id === 'track_satie_gymnopedie') {
        // Erik Satie: Gymnopédie No. 1 (Gmaj7 - D)
        tempo = 1600;
        patterns = [
          { bass: 98.00, chord: [146.83, 185.00, 220.00], melody: [293.66, 369.99, 440.00], type: 'sine' },
          { bass: 73.42, chord: [110.00, 146.83, 185.00], melody: [246.94, 293.66, 369.99], type: 'sine' },
          { bass: 98.00, chord: [146.83, 185.00, 220.00], melody: [329.63, 369.99, 440.00], type: 'sine' },
          { bass: 73.42, chord: [110.00, 146.83, 185.00], melody: [220.00, 293.66, 369.99], type: 'sine' }
        ];
      }

      let step = 0;
      function playTrackMeasure() {
        if (!state.isPlayingAudio) return;
        const now = ctx.currentTime;
        const pat = patterns[step % patterns.length];

        // Bass Note
        const bOsc = ctx.createOscillator();
        const bGain = ctx.createGain();
        bOsc.type = pat.type === 'sawtooth' ? 'triangle' : pat.type;
        bOsc.frequency.setValueAtTime(pat.bass, now);
        bGain.gain.setValueAtTime(0.18, now);
        bGain.gain.exponentialRampToValueAtTime(0.001, now + (tempo / 1000) * 0.9);
        bOsc.connect(bGain);
        bGain.connect(ctx.destination);
        bOsc.start(now);
        bOsc.stop(now + (tempo / 1000) * 0.95);

        // Chords
        const chordInterval = (tempo / 1000) / 3;
        [chordInterval, chordInterval * 2].forEach(offset => {
          pat.chord.forEach(freq => {
            const cOsc = ctx.createOscillator();
            const cGain = ctx.createGain();
            cOsc.type = pat.type;
            cOsc.frequency.setValueAtTime(freq, now + offset);
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(750, now + offset);
            cGain.gain.setValueAtTime(0.07, now + offset);
            cGain.gain.exponentialRampToValueAtTime(0.001, now + offset + chordInterval * 0.9);
            cOsc.connect(filter);
            filter.connect(cGain);
            cGain.connect(ctx.destination);
            cOsc.start(now + offset);
            cOsc.stop(now + offset + chordInterval * 0.95);
          });
        });

        // Melody Notes
        pat.melody.forEach((freq, idx) => {
          const mOsc = ctx.createOscillator();
          const mGain = ctx.createGain();
          mOsc.type = 'sine';
          const melOffset = idx * (chordInterval * 0.9);
          mOsc.frequency.setValueAtTime(freq, now + melOffset);
          mGain.gain.setValueAtTime(0.15, now + melOffset);
          mGain.gain.exponentialRampToValueAtTime(0.001, now + melOffset + chordInterval * 0.9);
          mOsc.connect(mGain);
          mGain.connect(ctx.destination);
          mOsc.start(now + melOffset);
          mOsc.stop(now + melOffset + chordInterval * 0.95);
        });

        step++;
      }

      playTrackMeasure();
      trackSynthInterval = setInterval(playTrackMeasure, tempo);
    } catch (e) {}

    showToast(`🎵 ${track.title} • ${track.artist} çalıyor.`);
  }

  function stopMusicTrack(showNotification = true) {
    state.isPlayingAudio = false;
    updateAudioUI();
    const tracks = MAISON_DATA.exploreData.musicTracks;
    const track = tracks.find(t => t.id === state.activeTrackId) || tracks[0];
    updateMusicPlayerUI(track, false);

    if (trackSynthInterval) {
      clearInterval(trackSynthInterval);
      trackSynthInterval = null;
    }
    if (showNotification) {
      showToast("Müzik duraklatıldı.");
    }
  }

  function switchMusicTrack(direction) {
    const tracks = MAISON_DATA.exploreData.musicTracks;
    let idx = tracks.findIndex(t => t.id === state.activeTrackId);
    if (idx === -1) idx = 0;
    const nextIdx = (idx + direction + tracks.length) % tracks.length;
    playMusicTrack(tracks[nextIdx].id);
  }

  function updateMusicPlayerUI(track, isPlaying) {
    const titleElem = document.getElementById('featuredTrackTitle');
    const artistElem = document.getElementById('featuredTrackArtist');
    const albumElem = document.getElementById('featuredTrackAlbum');
    const genreElem = document.getElementById('featuredGenreBadge');
    const vinylArtist = document.getElementById('vinylLabelArtist');
    const curatorNote = document.getElementById('featuredCuratorNote');
    const durationElem = document.getElementById('interactiveDuration');
    const disc = document.getElementById('mainVinylDisc');
    const playIcon = document.getElementById('playDailyMusicIcon');
    const prog = document.getElementById('interactiveProgress');

    if (titleElem) titleElem.textContent = track.title;
    if (artistElem) artistElem.textContent = track.artist;
    if (albumElem) albumElem.textContent = `${track.album} (${track.year})`;
    if (genreElem) genreElem.textContent = track.genre.toUpperCase();
    if (vinylArtist) vinylArtist.textContent = track.artist.split(' ')[0].toUpperCase();
    if (curatorNote) curatorNote.textContent = track.curatorNote;
    if (durationElem) durationElem.textContent = track.duration;

    if (disc) {
      if (isPlaying) disc.classList.add('playing');
      else disc.classList.remove('playing');
    }
    if (playIcon) playIcon.textContent = isPlaying ? '⏸' : '▶';
    if (prog) prog.style.width = isPlaying ? '55%' : '0%';

    // Update playlist items
    document.querySelectorAll('.music-track-item').forEach(item => {
      const isThisTrack = item.dataset.trackid === track.id;
      const btn = item.querySelector('.btn-play-item');
      const idxSpan = item.querySelector('span:first-child');
      if (isThisTrack) {
        item.style.background = '#FAF2E6';
        item.style.borderColor = 'var(--maison-gold)';
        if (btn) {
          btn.style.background = isPlaying ? 'var(--maison-gold)' : 'var(--maison-cream)';
          btn.style.color = isPlaying ? '#1A1816' : 'var(--maison-charcoal)';
          btn.textContent = isPlaying ? '⏸' : '▶';
        }
        if (idxSpan) {
          idxSpan.style.color = 'var(--maison-gold)';
          idxSpan.textContent = isPlaying ? '🔊' : (idxSpan.dataset.origIdx || idxSpan.textContent);
        }
      } else {
        item.style.background = 'var(--maison-white)';
        item.style.borderColor = 'var(--maison-border)';
        if (btn) {
          btn.style.background = 'var(--maison-cream)';
          btn.style.color = 'var(--maison-charcoal)';
          btn.textContent = '▶';
        }
        if (idxSpan) {
          idxSpan.style.color = 'var(--maison-taupe)';
          if (idxSpan.textContent === '🔊') {
            idxSpan.textContent = idxSpan.dataset.origIdx || '1';
          }
        }
      }
    });
  }

  // 3. MAISON SHOP / SEÇKİN ÜRÜNLER (11 Curated Objects with Cultural Context, Maker, Material, Story)
  function renderShopView(filterTag = 'all') {
    const d = MAISON_DATA;
    const filterTags = [
      { id: 'all', label: 'Tümü' },
      { id: 'El Yapımı Seramik', label: 'Seramik' },
      { id: 'Nadir Kitap', label: 'Nadir Kitap' },
      { id: 'Tasarım Objesi', label: 'Tasarım Objesi' },
      { id: 'Parfüm', label: 'Parfüm' },
      { id: 'Tekstil', label: 'Tekstil' },
      { id: 'Saat', label: 'Saat' },
      { id: 'Mücevher', label: 'Mücevher' },
      { id: 'Sanat Baskısı', label: 'Sanat Baskısı' },
      { id: 'Vintage Obje', label: 'Vintage Obje' },
      { id: 'Yazı Gereçleri', label: 'Yazı Gereçleri' },
      { id: 'Ev İçin Seçkin Parçalar', label: 'Ev Parçaları' }
    ];

    let filtered = d.products;
    if (filterTag !== 'all') {
      filtered = d.products.filter(p => p.categoryTag === filterTag);
    }

    appScreenBody.innerHTML = `
      <div style="padding: 18px 20px 10px 20px;">
        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">MAISON SHOP • SEÇKİN ÜRÜNLER</div>
        <h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--maison-charcoal); margin-top: 2px;">Zamana direnen nesneler.</h2>
        <p style="font-size: 12px; color: var(--maison-taupe); margin-top: 4px; line-height: 1.4;">Klasik e-ticaret değil; arkasında hikâye, üretici, malzeme ve kültürel bağlam barındıran seçkin parçalar.</p>
      </div>

      <!-- Filter Rail -->
      <div class="filter-pills-rail">
        ${filterTags.map(t => `
          <div class="filter-pill ${filterTag === t.id ? 'active' : ''}" data-shoptag="${t.id}">${t.label}</div>
        `).join('')}
      </div>

      <div class="section-header" style="padding-top: 6px;">
        <h3 class="section-title">Küratör Seçkisi (${filtered.length} Parça)</h3>
      </div>

      <div class="shop-grid">
        ${filtered.map(p => `
          <div class="shop-card" data-prod="${p.id}">
            <div class="shop-card-img-wrap">
              <img src="${p.image}" alt="${p.name}">
              <span class="shop-card-tag">${p.categoryTag}</span>
            </div>
            <div class="shop-card-body">
              <div class="shop-card-maker">${p.maker}</div>
              <div class="shop-card-name">${p.name}</div>
              <div class="shop-card-footer">
                <span class="shop-card-price">${p.price}</span>
                <span style="font-size: 11px; color: var(--maison-muted-brown); font-weight: 600;">İncele →</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll('[data-shoptag]').forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.shoptag;
        renderShopView(id);
      });
    });

    document.querySelectorAll('[data-prod]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.prod;
        setView('product', { id });
      });
    });
  }

  // 4. SALON (10 Digital Dialogue Rooms)
  // 4. SALON — İNTERAKTİF VE YAŞAYAN SOSYAL ALAN
  function renderSalonView(tab = 'all') {
    const circles = state.joinedCircles.map(cid => state.circleDiscussions[cid]).filter(Boolean);
    const rooms = state.myRooms || [];
    const collabs = state.collabCollections || [];
    const connections = state.myConnections || [];

    // Filter rail tabs
    const tabs = [
      { id: 'all', label: 'Tümü' },
      { id: 'my_salon', label: 'Benim Salonum' },
      { id: 'circles', label: `Çevrelerim (${circles.length})` },
      { id: 'rooms', label: `Odalar (${rooms.length})` },
      { id: 'collabs', label: `Ortak Koleksiyonlar (${collabs.length})` },
      { id: 'connections', label: `Bağlantılar (${connections.length})` }
    ];

    // Live Pulse items (4 curated items)
    const livePulseItems = [
      {
        id: 'pulse_1',
        text: '12 kişi İstanbul mimarisi üzerine konuşuyor',
        action: 'c_mimari',
        type: 'circle'
      },
      {
        id: 'pulse_2',
        text: '8 kişi Roma seyahati hakkında fikir paylaşıyor',
        action: 'room_roma_haftasonu',
        type: 'room'
      },
      {
        id: 'pulse_3',
        text: '5 kişi yeni bir kitap üzerine konuşuyor',
        action: 'c_okurlar',
        type: 'circle'
      },
      {
        id: 'pulse_4',
        text: '3 kişi ortak koleksiyon oluşturuyor: "İstanbul\'da Bir Hafta Sonu"',
        action: 'collab_istanbul_haftasonu',
        type: 'collab'
      }
    ];

    // Discovery / Senin İçin circles matching user interests
    const allCircleKeys = Object.keys(state.circleDiscussions);
    const unjoinedCircleKeys = allCircleKeys.filter(k => !state.joinedCircles.includes(k));
    const discoveryCircles = unjoinedCircleKeys.map(k => state.circleDiscussions[k]).concat([
      {
        id: 'c_minimal',
        name: 'Minimalist Yaşam',
        category: 'FELSEFE',
        members: 41,
        ideasCount: 95,
        topic: 'Mekanda ve zihinde azaltma pratikleri',
        icon: '🌿'
      },
      {
        id: 'c_sofra',
        name: 'İyi Sofra Kültürü',
        category: 'GASTRONOMİ',
        members: 19,
        ideasCount: 48,
        topic: 'Doğal şaraplar ve yavaş sofra felsefesi',
        icon: '🍷'
      }
    ]).slice(0, 2);

    appScreenBody.innerHTML = `
      <!-- Header -->
      <div class="salon-header-wrap">
        <div class="salon-eyebrow">DİJİTAL KÜLTÜR SALONU</div>
        <h1 class="salon-hero-title">SALON</h1>
        <div class="salon-tagline">“Kendine yakın fikirlerin arasında.”</div>
        <p class="salon-desc">Bağlantıların yaşadığı, odaların ve ortak koleksiyonların buluştuğu yaşayan kültürel salon.</p>
      </div>

      <!-- Filter Rail -->
      <div class="salon-filter-rail">
        ${tabs.map(t => `
          <button class="salon-filter-pill ${tab === t.id ? 'active' : ''}" data-salontab="${t.id}">
            ${t.label}
          </button>
        `).join('')}
      </div>

      <!-- 1. ÇEVRELERİM (Visible in all, my_salon, circles) -->
      ${(tab === 'all' || tab === 'my_salon' || tab === 'circles') ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-section-title">Çevrelerim</span>
              <span class="salon-section-badge">${circles.length}</span>
            </div>
            <span class="salon-section-link" id="btnExploreMoreCircles">Tümünü Keşfet →</span>
          </div>

          <div class="salon-circles-scroll">
            ${circles.map(c => `
              <div class="salon-circle-card-v2" data-circle-id="${c.id}">
                <div>
                  <div class="salon-circle-top">
                    <div class="salon-circle-icon-box">${c.icon || '🏛️'}</div>
                    <span class="salon-circle-meta-pill">${c.members} kişi · ${c.ideasCount} fikir</span>
                  </div>
                  <div class="salon-circle-name">${c.name}</div>
                  <div class="salon-circle-topic">“${c.topic}”</div>
                </div>
                <div class="salon-circle-footer">
                  <div style="display: flex; align-items: center; gap: -4px;">
                    <span style="font-size: 10.5px; color: var(--maison-taupe);">${c.subRooms ? c.subRooms.length : 3} aktif oda</span>
                  </div>
                  <span class="salon-circle-enter-btn">Giriş Yap →</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 2. ŞU ANDA SALON'DA (Canlı Nabız - Visible in all) -->
      ${(tab === 'all') ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-pulse-dot"></span>
              <span class="salon-section-title">Şu Anda Salon'da</span>
            </div>
            <span class="salon-section-badge">Canlı Nabız</span>
          </div>

          <div class="salon-live-pulse-container">
            ${livePulseItems.map(p => `
              <div class="salon-live-pulse-card" data-pulse-type="${p.type}" data-pulse-action="${p.action}">
                <div class="salon-live-left">
                  <span class="salon-pulse-dot"></span>
                  <span class="salon-live-text">${p.text}</span>
                </div>
                <span class="salon-live-action">Katıl &rarr;</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. ODALARIN & KATILDIĞIN ODALAR (Visible in all, my_salon, rooms) -->
      ${(tab === 'all' || tab === 'my_salon' || tab === 'rooms') ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-section-title">Odaların</span>
              <span class="salon-section-badge">${rooms.length}</span>
            </div>
            <span class="salon-section-link" id="btnBrowseAllRooms">Tüm Odalar →</span>
          </div>

          <div class="salon-rooms-grid-v2">
            ${rooms.map(r => `
              <div class="salon-room-card-v2" data-room-id="${r.id}">
                <div class="salon-room-header-row">
                  <span class="salon-room-circle-tag">${r.circleName || 'KÜLTÜR ODASI'}</span>
                  <span class="salon-room-status-badge ${r.status === 'invited' ? 'invited' : 'accepted'}">
                    ${r.status === 'invited' ? 'Davet Edildin' : 'Katıldın ✓'}
                  </span>
                </div>
                <div class="salon-room-v2-title">${r.title}</div>
                <div class="salon-room-v2-topic">“${r.topic}”</div>
                <div class="salon-room-v2-footer">
                  <span>● ${r.activeUsers || 6} kişi şu an odada</span>
                  <span style="color: var(--maison-gold); font-weight: 600;">Odaya Gir →</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. ORTAK KOLEKSİYONLAR (Visible in all, my_salon, collabs) -->
      ${(tab === 'all' || tab === 'my_salon' || tab === 'collabs') ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-section-title">Ortak Koleksiyonlar</span>
              <span class="salon-section-badge">${collabs.length}</span>
            </div>
            <span class="salon-section-link" id="btnNewCollab">+ Yeni Oluştur</span>
          </div>

          <div class="salon-collabs-grid-v2">
            ${collabs.map(c => `
              <div class="salon-collab-card-v2" data-collab-id="${c.id}">
                <img src="${c.cover}" alt="${c.title}" class="salon-collab-img-v2">
                <div class="salon-collab-body-v2">
                  <div class="salon-collab-title-v2">${c.title}</div>
                  <div class="salon-collab-participants-v2">${c.subtitle || c.participants.join(' + ')}</div>
                  <div class="salon-collab-desc-v2">${c.desc || (c.items.length + ' kayıt • Katkılar devam ediyor.')}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 5. BAĞLANTILARIN (Visible in all, my_salon, connections) -->
      ${(tab === 'all' || tab === 'my_salon' || tab === 'connections') ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-section-title">Bağlantıların</span>
              <span class="salon-section-badge">${connections.length}</span>
            </div>
            <span class="salon-section-link" id="btnExplorePeople">İnsanları Keşfet →</span>
          </div>

          <div class="salon-connections-grid-v2">
            ${connections.map(p => `
              <div class="salon-connection-card-v2" data-conn-id="${p.id}">
                <div class="salon-conn-header">
                  <img src="${p.avatar}" alt="${p.name}" class="salon-conn-avatar">
                  <div class="salon-conn-info">
                    <div class="salon-conn-name">${p.name}</div>
                    <div class="salon-conn-role">${p.role}</div>
                  </div>
                </div>
                <div class="salon-conn-affinity-row">
                  <span class="salon-affinity-pill">${p.mutualCount || 4} ortak ilgi alanı</span>
                  <span class="salon-affinity-pill">${(p.mutualCircles || []).length} ortak çevre</span>
                  <span class="salon-affinity-pill">${(p.mutualCollections || []).length} ortak koleksiyon</span>
                </div>
                <button class="salon-conn-btn" data-conn-btn="${p.id}">Profili & Ortak Alanları Gör →</button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 6. SENİN İÇİN KEŞİF (Visible in all) -->
      ${(tab === 'all' && discoveryCircles.length > 0) ? `
        <div class="salon-section">
          <div class="salon-section-header">
            <div class="salon-section-title-wrap">
              <span class="salon-section-title">Senin İçin Keşif</span>
            </div>
            <span class="salon-section-badge">İlgi Alanlarına Göre</span>
          </div>

          <div class="salon-rooms-grid-v2">
            ${discoveryCircles.map(dc => `
              <div class="salon-room-card-v2" data-discover-circle="${dc.id}">
                <div class="salon-room-header-row">
                  <span class="salon-room-circle-tag">${dc.category}</span>
                  <span style="font-size: 10px; color: var(--maison-taupe);">${dc.members} üye</span>
                </div>
                <div class="salon-room-v2-title">${dc.icon || '✦'} ${dc.name}</div>
                <div class="salon-room-v2-topic">“${dc.topic}”</div>
                <button class="modal-primary-btn btn-join-discovery-circle" data-join-cid="${dc.id}" style="width: 100%; justify-content: center; padding: 10px; margin-top: 6px; font-size: 12px;">
                  Çevreye Katıl +
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;

    // Filter rail tabs
    appScreenBody.querySelectorAll('[data-salontab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.salontab;
        playGentleClick();
        renderSalonView(t);
      });
    });

    // Circles click
    appScreenBody.querySelectorAll('[data-circle-id]').forEach(card => {
      card.addEventListener('click', () => {
        const cid = card.dataset.circleId;
        playGentleClick();
        setView('circle_detail', { id: cid });
      });
    });

    // Live pulse click
    appScreenBody.querySelectorAll('[data-pulse-type]').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.dataset.pulseType;
        const action = card.dataset.pulseAction;
        playGentleClick();
        if (type === 'circle') setView('circle_detail', { id: action });
        else if (type === 'room') setView('room', { id: action });
        else if (type === 'collab') openCollabCollectionModal(action);
      });
    });

    // Rooms click
    appScreenBody.querySelectorAll('[data-room-id]').forEach(card => {
      card.addEventListener('click', () => {
        const rid = card.dataset.roomId;
        playGentleClick();
        setView('room', { id: rid });
      });
    });

    // Collabs click
    appScreenBody.querySelectorAll('[data-collab-id]').forEach(card => {
      card.addEventListener('click', () => {
        const colId = card.dataset.collabId;
        playGentleClick();
        openCollabCollectionModal(colId);
      });
    });

    // Connections click
    appScreenBody.querySelectorAll('[data-conn-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.dataset.connBtn;
        openConnectionDetailModal(cid);
      });
    });

    // Join discovery circle
    appScreenBody.querySelectorAll('.btn-join-discovery-circle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.dataset.joinCid;
        if (!state.joinedCircles.includes(cid)) {
          state.joinedCircles.push(cid);
          localStorage.setItem('maison_joined_circles', JSON.stringify(state.joinedCircles));
          playHarmonicChime();
          showToast(`Çevreye katıldınız. Çevrelerim alanına eklendi ✓`);
          renderSalonView(tab);
        }
      });
    });

    // Top action links
    const btnExploreMore = document.getElementById('btnExploreMoreCircles');
    if (btnExploreMore) {
      btnExploreMore.addEventListener('click', () => {
        openMWorldPortal();
      });
    }

    const btnBrowseAllRooms = document.getElementById('btnBrowseAllRooms');
    if (btnBrowseAllRooms) {
      btnBrowseAllRooms.addEventListener('click', () => {
        renderSalonView('rooms');
      });
    }

    const btnNewCollab = document.getElementById('btnNewCollab');
    if (btnNewCollab) {
      btnNewCollab.addEventListener('click', () => {
        openCollabCollectionModal('collab_istanbul_haftasonu');
      });
    }

    const btnExplorePeople = document.getElementById('btnExplorePeople');
    if (btnExplorePeople) {
      btnExplorePeople.addEventListener('click', () => {
        setView('people');
      });
    }
  }

  // 4b. ÇEVRE DETAYI (Living Circle Detail View)
  function renderCircleDetailView(circleId = 'c_mimari') {
    const circle = state.circleDiscussions[circleId] || {
      id: circleId,
      name: "İstanbul Mimari",
      category: "MİMARİ",
      members: 28,
      ideasCount: 143,
      topic: "İstanbul'da modernist mimarinin en iyi örneği sizce hangisi?",
      description: "Karaköy'den Moda'ya 20. yüzyıl mimari mirası ve kentsel bellek sohbetleri.",
      icon: "🏛️",
      subRooms: [
        { id: "room_mimari_modernizm", title: "Modernizm Üzerine", members: 14, activeUsers: 8, topic: "Cumhuriyet dönemi kamu yapıları ve rasyonel estetik." },
        { id: "room_mimari_pazar", title: "Pazar Sabahı Sohbeti", members: 22, activeUsers: 12, topic: "Karaköy'ün saklı hanları ve merdiven boşlukları." }
      ],
      discussions: [
        {
          id: "disc_m1",
          author: "Mert",
          role: "Mimar & Araştırmacı",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
          time: "12 dk önce",
          text: "Bence Karaköy'deki bazı yapılar hâlâ yeterince konuşulmuyor. Örneğin Nordstern Han'ın cephe detayları inanılmaz bir zarafete sahip.",
          agrees: 7,
          userAgreed: false,
          replies: []
        },
        {
          id: "disc_m2",
          author: "Selin",
          role: "Tasarımcı",
          avatar: "/images/editorial/architect_selin.jpg",
          time: "24 dk önce",
          text: "Ben özellikle 60'lar apartmanlarını çok ilginç buluyorum. Mozaik kaplı kolonlar, ahşap trabzanlar ve geniş balkon oranları bugün artık üretilmiyor.",
          agrees: 12,
          userAgreed: false,
          replies: []
        }
      ]
    };

    appScreenBody.innerHTML = `
      <div class="circle-detail-container">
        <!-- Top Nav Row -->
        <div class="circle-top-nav-row">
          <button class="circle-back-btn" id="btnCircleBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Salona Dön</span>
          </button>
          <div class="circle-live-pill">
            <span class="salon-pulse-dot"></span>
            <span>${circle.members} kişi • ${circle.subRooms ? circle.subRooms.reduce((acc, r) => acc + (r.activeUsers || 0), 0) : 14} aktif</span>
          </div>
        </div>

        <!-- Hero Card -->
        <div class="circle-hero-card">
          <div class="circle-hero-badge-row">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 24px;">${circle.icon || '🏛️'}</span>
              <span class="card-badge" style="position: static; font-size: 9px;">${circle.category || 'KÜLTÜR ÇEVRESİ'}</span>
            </div>
            <span class="circle-hero-stats">${circle.members} kişi · ${circle.ideasCount} fikir</span>
          </div>
          <h1 class="circle-hero-title">${circle.name}</h1>
          <p class="circle-hero-desc">${circle.description}</p>
        </div>

        <!-- Topic Box: Şu Anda Konuşulanlar -->
        <div class="circle-topic-box">
          <div class="circle-topic-label">ŞU ANDA KONUŞULANLAR</div>
          <div class="circle-topic-question">“${circle.topic}”</div>
        </div>

        <!-- Discussions Stream -->
        <div class="section-header" style="padding-left: 0; padding-right: 0; padding-top: 0;">
          <h3 class="section-title">Çevrede Paylaşılan Fikirler (${circle.discussions.length})</h3>
        </div>

        <div class="circle-discussions-list" id="circleDiscussionsList">
          ${circle.discussions.map(d => `
            <div class="circle-discussion-item" id="discCard_${d.id}">
              <div class="circle-disc-header">
                <div class="circle-disc-author-wrap">
                  <img src="${d.avatar || '/images/editorial/author_deniz.jpg'}" alt="${d.author}" class="circle-disc-avatar">
                  <div>
                    <div class="circle-disc-author-name">${d.author}</div>
                    <div class="circle-disc-role">${d.role || 'Maison Üyesi'}</div>
                  </div>
                </div>
                <div class="circle-disc-time">${d.time}</div>
              </div>

              <div class="circle-disc-text">“${d.text}”</div>

              <div class="circle-disc-actions-row">
                <button class="circle-agree-btn ${d.userAgreed ? 'is-agreed' : ''}" data-agree-disc="${d.id}">
                  ${d.userAgreed ? '✓ Katıldın' : 'Fikrine katılıyorum'} (${d.agrees || 0})
                </button>
                <button class="circle-reply-btn" data-reply-disc="${d.id}">Yanıtla</button>
              </div>

              ${(d.replies && d.replies.length > 0) ? `
                <div class="circle-replies-list">
                  ${d.replies.map(rep => `
                    <div class="circle-reply-item">
                      <div class="circle-reply-author">${rep.author} <span style="font-size: 10px; color: var(--maison-taupe); font-weight: 400;">(${rep.time})</span></div>
                      <div class="circle-reply-text">${rep.text}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Inline Reply Input (Hidden by default) -->
              <div class="circle-inline-reply-wrap" id="replyWrap_${d.id}" style="display: none;">
                <input type="text" class="circle-inline-reply-input" id="replyInput_${d.id}" placeholder="${d.author} kişisinin fikrine yanıt yazın...">
                <button class="circle-inline-reply-send" data-send-reply="${d.id}">Gönder</button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- "Benim Fikrim" / Fikir Paylaş Section -->
        <div class="circle-my-thought-card">
          <div class="circle-my-thought-title">BENİM FİKRİM</div>
          <div class="circle-my-thought-heading">“Ben bu konuda ne düşünüyorum?”</div>
          <p class="circle-my-thought-desc">Düşüncenizi çevreyle paylaşın; fikirlerin derinleşmesine katkı verin.</p>
          
          <textarea class="circle-thought-textarea" id="circleMyThoughtInput" placeholder="${circle.name} çevresinde konuya dair kendi fikrinizi yazın..."></textarea>
          
          <button class="modal-primary-btn" id="btnSubmitCircleThought" style="width: 100%; justify-content: center; padding: 12px; font-size: 13px;">
            Fikri Paylaş (Berke Saygılı Olarak)
          </button>
        </div>

        <!-- Çevre Odaları -->
        ${(circle.subRooms && circle.subRooms.length > 0) ? `
          <div class="section-header" style="padding-left: 0; padding-right: 0;">
            <h3 class="section-title">Çevre Odaları (${circle.subRooms.length})</h3>
          </div>
          <div class="salon-rooms-grid-v2" style="padding: 0; margin-bottom: 24px;">
            ${circle.subRooms.map(r => `
              <div class="salon-room-card-v2" data-room-id="${r.id}">
                <div class="salon-room-header-row">
                  <span class="salon-room-circle-tag">${circle.name}</span>
                  <span style="font-size: 10.5px; color: #2e7d32; font-weight: 600;">● ${r.activeUsers || 6} aktif</span>
                </div>
                <div class="salon-room-v2-title">${r.title}</div>
                <div class="salon-room-v2-topic">“${r.topic}”</div>
                <div style="text-align: right; font-size: 11px; color: var(--maison-gold); font-weight: 600;">Odaya Katıl →</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    // Event handlers for Circle Detail:
    document.getElementById('btnCircleBack').addEventListener('click', () => {
      playGentleClick();
      setView('salon');
    });

    // Agree button
    appScreenBody.querySelectorAll('[data-agree-disc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const did = btn.dataset.agreeDisc;
        const disc = circle.discussions.find(x => x.id === did);
        if (disc) {
          disc.userAgreed = !disc.userAgreed;
          disc.agrees = (disc.agrees || 0) + (disc.userAgreed ? 1 : -1);
          localStorage.setItem('maison_circle_discussions', JSON.stringify(state.circleDiscussions));
          playHarmonicChime();
          renderCircleDetailView(circleId);
          showToast(disc.userAgreed ? "Fikre katıldınız ✓" : "Geri alındı");
        }
      });
    });

    // Toggle reply input
    appScreenBody.querySelectorAll('[data-reply-disc]').forEach(btn => {
      btn.addEventListener('click', () => {
        const did = btn.dataset.replyDisc;
        const wrap = document.getElementById(`replyWrap_${did}`);
        if (wrap) {
          wrap.style.display = wrap.style.display === 'none' ? 'flex' : 'none';
          if (wrap.style.display === 'flex') {
            const inp = document.getElementById(`replyInput_${did}`);
            if (inp) setTimeout(() => inp.focus(), 150);
          }
        }
      });
    });

    // Send reply
    appScreenBody.querySelectorAll('[data-send-reply]').forEach(btn => {
      btn.addEventListener('click', () => {
        const did = btn.dataset.sendReply;
        const inp = document.getElementById(`replyInput_${did}`);
        if (inp && inp.value.trim()) {
          const disc = circle.discussions.find(x => x.id === did);
          if (disc) {
            if (!disc.replies) disc.replies = [];
            disc.replies.push({
              author: "Berke Saygılı",
              role: "Küratör",
              time: "Az önce",
              text: inp.value.trim()
            });
            circle.ideasCount = (circle.ideasCount || 0) + 1;
            localStorage.setItem('maison_circle_discussions', JSON.stringify(state.circleDiscussions));
            playHarmonicChime();
            renderCircleDetailView(circleId);
            showToast("Yanıtınız paylaşıldı ✓");
          }
        }
      });
    });

    // Submit new thought
    const btnSubmit = document.getElementById('btnSubmitCircleThought');
    const thoughtInput = document.getElementById('circleMyThoughtInput');
    if (btnSubmit && thoughtInput) {
      btnSubmit.addEventListener('click', () => {
        const val = thoughtInput.value.trim();
        if (!val) {
          showToast("Lütfen bir fikir yazın.");
          return;
        }

        circle.discussions.unshift({
          id: 'disc_' + Date.now(),
          author: "Berke Saygılı",
          role: "Küratör",
          avatar: "/images/editorial/berke_saygili.jpg",
          time: "Az önce",
          text: val,
          agrees: 1,
          userAgreed: true,
          replies: []
        });

        circle.ideasCount = (circle.ideasCount || 0) + 1;
        localStorage.setItem('maison_circle_discussions', JSON.stringify(state.circleDiscussions));
        playHarmonicChime();
        renderCircleDetailView(circleId);
        showToast("Fikriniz çevreyle paylaşıldı ✓");
      });
    }

    // Subroom click
    appScreenBody.querySelectorAll('[data-room-id]').forEach(card => {
      card.addEventListener('click', () => {
        const rid = card.dataset.roomId;
        playGentleClick();
        setView('room', { id: rid });
      });
    });
  }

  // 5. KOLEKSİYONLAR (The 7 Curated Collections)
  function renderCollectionsView() {
    const d = MAISON_DATA;

    appScreenBody.innerHTML = `
      <div style="padding: 18px 20px 10px 20px;">
        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">DİJİTAL ZEVK ARŞİVİ • KOLEKSİYONLAR</div>
        <h2 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--maison-charcoal); margin-top: 2px;">Hayatında yer açtığın dünyalar.</h2>
        <p style="font-size: 12px; color: var(--maison-taupe); margin-top: 4px; line-height: 1.4;">Sakladığınız yazılar, nesneler, şehirler ve yaşam ritüellerinin tematik seçkileri.</p>
      </div>

      <div class="collections-grid">
        ${d.collections.map(col => `
          <div class="collection-card" data-col="${col.id}">
            <div class="collection-cover-wrap">
              <img src="${col.cover}" alt="${col.title}">
              <span class="collection-count-badge">${col.count} Parça</span>
            </div>
            <div class="collection-body">
              <div class="collection-title">${col.title}</div>
              <div class="collection-desc">${col.description}</div>
              <div style="font-size: 10px; color: var(--maison-taupe); margin-top: 6px; border-top: 1px solid var(--maison-border); padding-top: 4px;">
                Küratör: ${col.curator}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    document.querySelectorAll('[data-col]').forEach(c => {
      c.addEventListener('click', () => {
        const id = c.dataset.col;
        setView('collection_detail', { id });
      });
    });
  }

  function renderCollectionDetailView(colId) {
    const col = MAISON_DATA.collections.find(c => c.id === colId) || MAISON_DATA.collections[0];

    appScreenBody.innerHTML = `
      <div style="padding: 16px 20px 40px 20px;">
        <div class="reading-back-row">
          <button class="reading-back-btn" id="btnColBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Koleksiyonlara Dön</span>
          </button>
          <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-gold); font-weight: 600;">${col.count} PARÇA</span>
        </div>

        <div style="border-radius: 18px; overflow: hidden; margin-bottom: 14px; position: relative;">
          <img src="${col.cover}" alt="${col.title}" style="width: 100%; height: 180px; object-fit: cover; display: block;">
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: #fff;">
            <div style="font-family: var(--font-serif); font-size: 22px; font-weight: 600;">${col.title}</div>
            <div style="font-size: 12px; color: #dfcaa2;">Küratör: ${col.curator}</div>
          </div>
        </div>

        <p style="font-size: 13px; color: var(--maison-muted-brown); line-height: 1.5; margin-bottom: 20px;">${col.description}</p>

        <div class="section-header" style="padding-left: 0; padding-right: 0; padding-top: 0;">
          <h3 class="section-title">Koleksiyon İçeriği</h3>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${col.items.map(item => `
            <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;" data-colitem="${item.name}">
              <div>
                <span class="card-badge" style="position: static; display: inline-block; margin-bottom: 4px; font-size: 8px;">${item.badge || item.type}</span>
                <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${item.name}</div>
                <div style="font-size: 11px; color: var(--maison-taupe);">${item.author || item.type}</div>
              </div>
              <span style="color: var(--maison-muted-brown); font-weight: 600; font-size: 13px;">→</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('btnColBack').addEventListener('click', goBack);
    document.querySelectorAll('[data-colitem]').forEach(item => {
      item.addEventListener('click', () => {
        const name = item.dataset.colitem;
        if (name.includes('Yavaş Yaşamak') || name.includes('Boğaz')) setView('article', { id: 'slow_living' });
        else if (name.includes('Amalfi')) setView('article', { id: 'amalfi' });
        else if (name.includes('Seramik')) setView('product', { id: 'ceramic_bowl' });
        else if (name.includes('Traverten')) setView('product', { id: 'travertine_lamp' });
        else setView('explore');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. MAISON CERCLE — INSTAGRAM-GRADE CURATED NETWORK & PROFILES
  // --------------------------------------------------------------------------

  let storyTimerInterval = null;
  let activeStoryCuratorIndex = 0;

  function renderPeopleView(filterRole = 'all', params = {}) {
    const d = MAISON_DATA;
    if (params.mode) state.cercleMode = params.mode;
    if (!state.cercleMode) state.cercleMode = 'feed';

    const roleTabs = [
      { id: 'all', label: 'Tümü' },
      { id: 'Mimarlar', label: 'Mimarlar' },
      { id: 'Yazarlar', label: 'Yazarlar' },
      { id: 'Şefler', label: 'Şefler' },
      { id: 'Sanatçılar', label: 'Sanatçılar' },
      { id: 'Koleksiyonerler', label: 'Koleksiyonerler' },
      { id: 'Tasarımcılar', label: 'Tasarımcılar' },
      { id: 'Fotoğrafçılar', label: 'Fotoğrafçılar' },
      { id: 'Stil Sahipleri', label: 'Stil Sahipleri' }
    ];

    let filtered = d.people;
    if (filterRole !== 'all') {
      filtered = d.people.filter(p => p.type === filterRole);
    }

    // Collect all posts for the feed view
    const allPosts = [];
    filtered.forEach(person => {
      (person.posts || []).forEach(post => {
        allPosts.push({ ...post, personId: person.id, author: person });
      });
    });

    appScreenBody.innerHTML = `
      <!-- Cercle Header & Mode Switcher -->
      <div class="cercle-header">
        <div class="cercle-badge-row">
          <span class="cercle-badge-label">MAISON CERCLE • SEÇKİN ÇEVRE</span>
          <span class="cercle-active-curators-count">9 Küratör Aktif</span>
        </div>
        <h2 class="cercle-title">Seçkin zevkler, ortak dünyalar.</h2>
        <p class="cercle-desc">Mimarlar, yazarlar, şefler ve düşünürlerin görsel hafızası ve anlık kültürel akışı.</p>
        
        <div class="cercle-mode-switcher">
          <button class="cercle-mode-btn ${state.cercleMode === 'feed' ? 'active' : ''}" id="btnCercleModeFeed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>Kültürel Akış</span>
          </button>
          <button class="cercle-mode-btn ${state.cercleMode === 'profiles' ? 'active' : ''}" id="btnCercleModeProfiles">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Seçkin Profiller</span>
          </button>
        </div>
      </div>

      <!-- Instagram-Style Stories Rail -->
      <div class="cercle-stories-rail" id="cercleStoriesRail">
        <!-- Self Story -->
        <div class="cercle-story-item" id="storyItemSelf">
          <div class="story-avatar-wrap" style="background: var(--maison-border);">
            <img src="${d.currentUser.avatar}" alt="Sen" class="story-avatar-img">
            <div class="story-add-badge">+</div>
          </div>
          <span class="story-curator-name">Hikayen</span>
        </div>

        <!-- Curators Stories -->
        ${d.people.map(p => `
          <div class="cercle-story-item" data-curator-story="${p.id}">
            <div class="story-avatar-wrap ${p.story && p.story.seen ? 'seen' : ''}">
              <img src="${p.avatar}" alt="${p.name}" class="story-avatar-img">
            </div>
            <span class="story-curator-name">${p.name.split(' ')[0]}</span>
          </div>
        `).join('')}
      </div>

      <!-- Category Filter Rail -->
      <div class="cercle-filter-rail">
        ${roleTabs.map(t => `
          <div class="cercle-filter-pill ${filterRole === t.id ? 'active' : ''}" data-peopletab="${t.id}">${t.label}</div>
        `).join('')}
      </div>

      <!-- Main Container: Feed or Profiles -->
      ${state.cercleMode === 'feed' ? `
        <!-- FEED MODE (Instagram-Style Vertical Feed) -->
        <div class="cercle-feed-container">
          ${allPosts.map(post => {
            const isConn = state.myConnections.some(c => c.name === post.author.name);
            return `
              <div class="cercle-feed-card" data-post-id="${post.id}">
                <!-- Header -->
                <div class="feed-card-header">
                  <div class="feed-card-author-left" data-view-curator="${post.author.id}">
                    <img src="${post.author.avatar}" alt="${post.author.name}" class="feed-card-avatar">
                    <div>
                      <div class="feed-author-name">
                        <span>${post.author.name}</span>
                        <span style="font-size: 11px; color: var(--maison-gold);">✦</span>
                      </div>
                      <div class="feed-author-meta">${post.location} • ${post.time}</div>
                    </div>
                  </div>
                  <button class="feed-header-connect-btn ${isConn ? 'connected' : ''}" data-connect-curator="${post.author.id}">
                    ${isConn ? 'Bağlantıda ✓' : '🤝 Tanış'}
                  </button>
                </div>

                <!-- Media (Double-Tap to Like) -->
                <div class="feed-media-wrap" data-post-img="${post.id}">
                  <img src="${post.image}" alt="Post Visual" loading="lazy">
                  <div class="feed-floating-heart" id="heart_${post.id}">❤️</div>
                </div>

                <!-- Actions -->
                <div class="feed-card-actions">
                  <div class="feed-actions-left">
                    <button class="feed-action-icon-btn ${post.liked ? 'liked' : ''}" data-like-post="${post.id}" data-curator-id="${post.author.id}">
                      <svg viewBox="0 0 24 24" fill="${post.liked ? '#C53030' : 'none'}" stroke="currentColor" stroke-width="2" width="22" height="22">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <button class="feed-action-icon-btn" data-comment-post="${post.id}" data-curator-id="${post.author.id}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>
                    <button class="feed-action-icon-btn" data-share-post="${post.id}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="21" height="21">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>
                  <button class="feed-action-icon-btn" data-bookmark-post="${post.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="21" height="21">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                </div>

                <!-- Likes Count -->
                <div class="feed-card-likes" id="likes_count_${post.id}">${post.likes} Küratör beğendi</div>

                <!-- Caption -->
                <div class="feed-card-caption-box">
                  <span class="feed-caption-author" data-view-curator="${post.author.id}">${post.author.name}</span>
                  <span>${post.caption}</span>
                </div>

                <!-- Comments Toggle / Modal trigger -->
                <div class="feed-card-comments-toggle" data-open-comments="${post.id}" data-curator-id="${post.author.id}">
                  ${post.comments && post.comments.length > 0 ? `${post.comments.length} kültürel düşünceyi gör...` : 'Düşünce ekle...'}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <!-- PROFILES MODE (Curators Directory with 3-Photo Collages) -->
        <div class="cercle-profiles-grid">
          ${filtered.map(p => {
            const isConn = state.myConnections.some(c => c.name === p.name);
            const previewPhotos = (p.posts || []).slice(0, 3).map(pt => pt.image);
            while (previewPhotos.length < 3) previewPhotos.push(p.avatar);
            return `
              <div class="cercle-curator-card" data-curator-card="${p.id}">
                <!-- Card Cover -->
                <div class="curator-card-cover-wrap">
                  <img src="${p.cover || p.avatar}" alt="Cover" class="curator-card-cover-img">
                  <div class="curator-card-affinity-badge">%${p.affinityPercent || 94} ZEVK UYUMU</div>
                </div>

                <!-- Body -->
                <div class="curator-card-body">
                  <div class="curator-avatar-top-row">
                    <img src="${p.avatar}" alt="${p.name}" class="curator-card-avatar">
                    <button class="curator-quick-connect-btn ${isConn ? 'connected' : ''}" data-connect-curator="${p.id}">
                      ${isConn ? 'Bağlantıdasınız ✓' : '🤝 Tanış'}
                    </button>
                  </div>

                  <div class="curator-card-name-title">
                    <h4>${p.name}</h4>
                    <div class="curator-card-badge">${p.badge || p.role} • ${p.location}</div>
                  </div>

                  <div class="curator-card-quote">“${p.quote}”</div>
                  <div class="curator-card-mutual">🤝 ${p.mutualNote}</div>

                  <!-- 3-Photo Aesthetic Preview Collage (Instagram Style) -->
                  <div class="curator-preview-collage" data-view-curator="${p.id}">
                    ${previewPhotos.map(img => `<img src="${img}" alt="Preview" loading="lazy">`).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;

    // Mode Switcher Listeners
    document.getElementById('btnCercleModeFeed')?.addEventListener('click', () => {
      playGentleClick();
      state.cercleMode = 'feed';
      renderPeopleView(filterRole);
    });
    document.getElementById('btnCercleModeProfiles')?.addEventListener('click', () => {
      playGentleClick();
      state.cercleMode = 'profiles';
      renderPeopleView(filterRole);
    });

    // Stories Rail Listeners
    document.querySelectorAll('[data-curator-story]').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.curatorStory;
        openStoryViewer(id);
      });
    });
    document.getElementById('storyItemSelf')?.addEventListener('click', () => {
      showToast('Kendi kültürel anınızı ve hikayenizi paylaşma özelliği çok yakında.');
    });

    // Filter Rail Listeners
    document.querySelectorAll('[data-peopletab]').forEach(tab => {
      tab.addEventListener('click', () => {
        playGentleClick();
        const id = tab.dataset.peopletab;
        renderPeopleView(id);
      });
    });

    // Connect Button Listeners
    document.querySelectorAll('[data-connect-curator]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const curId = btn.dataset.connectCurator;
        openConnectModal(curId);
      });
    });

    // Curator Detail Profile Navigation
    document.querySelectorAll('[data-view-curator]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const curId = el.dataset.viewCurator;
        setView('person_detail', { id: curId });
      });
    });

    // Feed Like & Double-Tap Listeners
    document.querySelectorAll('[data-like-post]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.dataset.likePost;
        const curId = btn.dataset.curatorId;
        togglePostLike(curId, pid);
      });
    });

    // Double-tap on feed photo
    document.querySelectorAll('.feed-media-wrap').forEach(wrap => {
      let lastTap = 0;
      wrap.addEventListener('click', (e) => {
        const now = Date.now();
        const pid = wrap.dataset.postImg;
        if (now - lastTap < 300) {
          // Double-tap triggered!
          const card = wrap.closest('.cercle-feed-card');
          const likeBtn = card ? card.querySelector('[data-like-post]') : null;
          const curId = likeBtn ? likeBtn.dataset.curatorId : null;
          const heartAnim = document.getElementById(`heart_${pid}`);
          if (heartAnim) {
            heartAnim.classList.add('animate');
            setTimeout(() => heartAnim.classList.remove('animate'), 700);
          }
          if (curId && pid) togglePostLike(curId, pid, true);
        }
        lastTap = now;
      });
    });

    // Comments Modal Triggers
    document.querySelectorAll('[data-comment-post], [data-open-comments]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = el.dataset.commentPost || el.dataset.openComments;
        const curId = el.dataset.curatorId;
        openPostDetailModal(curId, pid);
      });
    });

    // Share & Bookmark Toasts
    document.querySelectorAll('[data-share-post]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast('Bağlantı kopyalandı. Seçkin dostlarınızla paylaşabilirsiniz.');
      });
    });
    document.querySelectorAll('[data-bookmark-post]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.querySelector('svg').style.fill = 'var(--maison-gold)';
        btn.querySelector('svg').style.stroke = 'var(--maison-gold)';
        showToast('Bu kültürel an kişisel arşivinize kaydedildi.');
      });
    });

    // Auto-open connect modal if directed from external view
    if (params.action === 'connect' && params.focusPersonId) {
      setTimeout(() => openConnectModal(params.focusPersonId), 350);
    }
  }

  // --------------------------------------------------------------------------
  // 6b. INSTAGRAM PROFILE VIEW (Comprehensive Curator Portfolio)
  // --------------------------------------------------------------------------
  function renderPersonDetailView(personId, params = {}) {
    const p = MAISON_DATA.people.find(person => person.id === personId) || MAISON_DATA.people[0];
    const isConn = state.myConnections.some(c => c.name === p.name);
    let activeSubTab = params.subTab || 'photos';

    appScreenBody.innerHTML = `
      <div class="ig-profile-wrapper">
        <!-- Top Navigation Bar -->
        <div class="ig-profile-nav">
          <button class="ig-nav-back-btn" id="btnIgProfileBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Geri</span>
          </button>
          <div class="ig-nav-handle">${p.handle || '@' + p.id}</div>
          <button style="background:transparent; border:none; cursor:pointer;" id="btnCuratorShare">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" color="var(--maison-charcoal)">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>

        <!-- Instagram Profile Header -->
        <div class="ig-header-sec">
          <div class="ig-header-top-row">
            <div class="ig-avatar-ring" id="btnProfileStoryTrigger">
              <img src="${p.avatar}" alt="${p.name}" class="ig-avatar-img">
            </div>
            <div class="ig-stats-grid">
              <div class="ig-stat-col">
                <div>${(p.posts || []).length || 36}</div>
                <div>Paylaşım</div>
              </div>
              <div class="ig-stat-col">
                <div>${(p.stats && p.stats.followers) || '24.5K'}</div>
                <div>Takipçi</div>
              </div>
              <div class="ig-stat-col" id="btnTasteAffinityInfo" style="cursor: pointer;">
                <div style="color: var(--maison-gold);">%${p.affinityPercent || 94}</div>
                <div style="color: var(--maison-gold); font-weight: 600;">Zevk Uyumu</div>
              </div>
            </div>
          </div>

          <!-- Bio & Details -->
          <div class="ig-bio-name">${p.name} <span style="font-size: 13px; color: var(--maison-gold);">✦</span></div>
          <div class="ig-bio-role-badge">${p.badge || p.role} • 📍 ${p.location}</div>
          <div class="ig-bio-quote">“${p.quote}”</div>
          <div class="ig-bio-text">${p.bio}</div>
          <div class="ig-bio-mutual">🤝 ${p.mutualNote}</div>

          <!-- Action Buttons (Instagram Style) -->
          <div class="ig-action-buttons-row">
            <button class="ig-action-btn-primary" id="btnProfileMainConnect">
              <span>${isConn ? 'Bağlantıdasınız ✓ • Mesaj At' : '🤝 Tanış / Bağlantı İsteği'}</span>
            </button>
            <button class="ig-action-btn-secondary" id="btnProfileSalonChat">
              <span>Salonda Buluş</span>
            </button>
            <button class="ig-action-btn-secondary" id="btnFollowToggle" style="flex: 0.8;">
              <span id="followText">Takip Et</span>
            </button>
          </div>
        </div>

        <!-- Story Highlights Row -->
        <div class="ig-highlights-sec">
          ${(p.highlights || []).map(h => `
            <div class="ig-highlight-item" data-highlight-id="${h.id}">
              <div class="ig-highlight-cover">
                <img src="${h.img}" alt="${h.title}">
              </div>
              <span class="ig-highlight-label">${h.icon} ${h.title}</span>
            </div>
          `).join('')}
        </div>

        <!-- Profile Tabs Nav (Instagram Style) -->
        <div class="ig-tabs-nav">
          <button class="ig-tab-btn ${activeSubTab === 'photos' ? 'active' : ''}" data-ptab="photos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align: -2px; margin-right: 4px;">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Fotoğraflar
          </button>
          <button class="ig-tab-btn ${activeSubTab === 'essays' ? 'active' : ''}" data-ptab="essays">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align: -2px; margin-right: 4px;">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Yazıları
          </button>
          <button class="ig-tab-btn ${activeSubTab === 'tastes' ? 'active' : ''}" data-ptab="tastes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align: -2px; margin-right: 4px;">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Zevkleri
          </button>
          <button class="ig-tab-btn ${activeSubTab === 'mutual' ? 'active' : ''}" data-ptab="mutual">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align: -2px; margin-right: 4px;">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            Ortak Alan
          </button>
        </div>

        <!-- Tab Contents -->
        <div id="igTabContent">
          ${renderCuratorTabContent(p, activeSubTab)}
        </div>
      </div>
    `;

    // Navigation and Action Handlers
    document.getElementById('btnIgProfileBack').addEventListener('click', goBack);

    document.getElementById('btnCuratorShare').addEventListener('click', () => {
      showToast(`${p.name} profil bağlantısı panoya kopyalandı.`);
    });

    document.getElementById('btnProfileStoryTrigger').addEventListener('click', () => {
      openStoryViewer(p.id);
    });

    document.getElementById('btnTasteAffinityInfo').addEventListener('click', () => {
      showToast(`${p.name} ile %${p.affinityPercent || 94} Zevk Uyumunuz var. Ortak mimari, felsefe ve seyahat tutkularını paylaşıyorsunuz.`);
    });

    document.getElementById('btnProfileMainConnect').addEventListener('click', () => {
      if (isConn) {
        setView('salon', { tab: 'connections' });
      } else {
        openConnectModal(p.id);
      }
    });

    document.getElementById('btnProfileSalonChat').addEventListener('click', () => {
      setView('salon', { tab: 'connections' });
      showToast(`${p.name} ile özel diyalog odası açılıyor.`);
    });

    const btnFollow = document.getElementById('btnFollowToggle');
    const followText = document.getElementById('followText');
    if (btnFollow) {
      btnFollow.addEventListener('click', () => {
        if (followText.textContent === 'Takip Et') {
          followText.textContent = 'Takip Ediliyor ✓';
          btnFollow.style.background = 'var(--maison-border-stone)';
          showToast(`${p.name} takip edilenler listenize eklendi.`);
        } else {
          followText.textContent = 'Takip Et';
          btnFollow.style.background = 'var(--maison-cream)';
        }
      });
    }

    // Highlights Listeners
    document.querySelectorAll('[data-highlight-id]').forEach(h => {
      h.addEventListener('click', () => {
        openStoryViewer(p.id);
      });
    });

    // Profile Subtabs
    document.querySelectorAll('[data-ptab]').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        playGentleClick();
        const tab = tabBtn.dataset.ptab;
        document.querySelectorAll('[data-ptab]').forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');
        const container = document.getElementById('igTabContent');
        if (container) {
          container.innerHTML = renderCuratorTabContent(p, tab);
          attachCuratorTabListeners(p);
        }
      });
    });

    attachCuratorTabListeners(p);

    if (params.action === 'connect') {
      setTimeout(() => openConnectModal(p.id), 350);
    }
  }

  function renderCuratorTabContent(curator, tabName) {
    if (tabName === 'photos') {
      const posts = curator.posts || [];
      return `
        <div class="ig-photo-grid">
          ${posts.map(pt => `
            <div class="ig-grid-thumb" data-open-post="${pt.id}">
              <img src="${pt.image}" alt="Post Thumb" loading="lazy">
              <div class="ig-grid-likes-overlay">
                <span>❤️ ${pt.likes}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabName === 'essays') {
      return `
        <div style="padding: 16px 20px; display: flex; flex-direction: column; gap: 12px;">
          ${(curator.maisonArticles || []).map(title => `
            <div style="background: #FFFFFF; border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; cursor: pointer;" class="curator-essay-card">
              <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal);">${title}</div>
              <div style="font-size: 11.5px; color: var(--maison-taupe); margin-top: 4px;">MAISON Editoryal Seçki • 6 dk okuma</div>
              <div style="font-size: 11px; color: var(--maison-gold); font-weight: 600; margin-top: 8px;">Yazıyı Oku →</div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabName === 'tastes') {
      return `
        <div style="padding: 16px 20px; display: flex; flex-direction: column; gap: 14px;">
          <div>
            <div style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); margin-bottom: 8px;">KİŞİSEL RİTÜELLERİ</div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${(curator.personalTastes || []).map(t => `
                <div style="display: flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--maison-charcoal); background: #FFFFFF; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--maison-border);">
                  <span style="color: var(--maison-gold);">✦</span>
                  <span>${t}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); margin-bottom: 8px;">TAVSİYE ETTİĞİ KİTAP & MEKANLAR</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${(curator.recommendations || []).map(r => `
                <div style="background: #FFFFFF; border: 1px solid var(--maison-border); border-radius: 12px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-family: var(--font-serif); font-size: 14.5px; font-weight: 600; color: var(--maison-charcoal);">${r.title}</div>
                    <div style="font-size: 11px; color: var(--maison-taupe);">${r.type} • ${r.author}</div>
                  </div>
                  <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">İncele →</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'mutual') {
      return `
        <div style="padding: 16px 20px;">
          <div style="background: #FFFFFF; border: 1px solid var(--maison-border); border-radius: 16px; padding: 16px; margin-bottom: 14px;">
            <div style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-gold); margin-bottom: 4px;">KÜLTÜREL YAKINLIK RAPORU</div>
            <h4 style="font-family: var(--font-serif); font-size: 18px; margin: 0 0 6px 0; color: var(--maison-charcoal);">Sen + ${curator.name}</h4>
            <p style="font-size: 12px; line-height: 1.5; color: var(--maison-taupe);">MAISON Zevk Radarı verilerinize göre, ikiniz de dinginlik, doğal malzeme dürüstlüğü ve derin okuma alanlarında %${curator.affinityPercent || 94} örtüşüyorsunuz.</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="background: var(--maison-cream); padding: 12px 14px; border-radius: 12px; border: 1px solid var(--maison-border-stone); font-size: 12px; color: var(--maison-charcoal);">
              <strong>Ortak İlgi Alanları:</strong> Mimari, Yavaş Yaşam, Klasik Edebiyat, Analog Fotoğraf
            </div>
            <div style="background: var(--maison-cream); padding: 12px 14px; border-radius: 12px; border: 1px solid var(--maison-border-stone); font-size: 12px; color: var(--maison-charcoal);">
              <strong>Ortak Salon Çevreleri:</strong> İstanbul'da Mimari Meraklıları, Edebiyat & Şiir
            </div>
          </div>
        </div>
      `;
    }
    return '';
  }

  function attachCuratorTabListeners(curator) {
    document.querySelectorAll('[data-open-post]').forEach(item => {
      item.addEventListener('click', () => {
        const pid = item.dataset.openPost;
        openPostDetailModal(curator.id, pid);
      });
    });
    document.querySelectorAll('.curator-essay-card').forEach(card => {
      card.addEventListener('click', () => {
        setView('article', { id: 'slow_living' });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6c. KÜLTÜREL TANIŞMA MODALI (Connection Request with Curated Note)
  // --------------------------------------------------------------------------
  function openConnectModal(personId) {
    const p = MAISON_DATA.people.find(person => person.id === personId) || MAISON_DATA.people[0];
    const modal = document.getElementById('maisonConnectModal');
    const title = document.getElementById('connectModalTitle');
    const body = document.getElementById('connectModalBody');
    if (!modal || !body) return;

    if (title) title.textContent = `${p.name} ile Tanış`;

    const defaultNote = `Merhaba ${p.name}, MAISON'daki yaklaşımınızı ve paylaşımlarınızı ilgiyle takip ediyorum. Zevk radarlarımız %${p.affinityPercent || 94} oranında kesişiyor; kültürel çevremde sizinle temas etmek ve fikirlerinizi dinlemek isterim.`;

    body.innerHTML = `
      <div class="connect-curator-preview">
        <img src="${p.avatar}" alt="${p.name}" class="connect-curator-avatar">
        <div style="flex: 1;">
          <div class="connect-curator-name">${p.name} <span style="font-size: 11px; color: var(--maison-gold);">✦</span></div>
          <div class="connect-curator-role">${p.badge || p.role} • ${p.location}</div>
          <div class="connect-affinity-bar">
            <span>Zevk Uyumu</span>
            <strong style="color: var(--maison-gold);">%${p.affinityPercent || 94}</strong>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 12px; font-size: 11.5px; color: var(--maison-taupe); line-height: 1.4;">
        🤝 <strong>Ortak Noktanız:</strong> ${p.mutualNote}
      </div>

      <div class="connect-note-label">Kişisel Tanışma Notunuz</div>
      <textarea class="connect-note-editor" id="connectCustomNoteText">${defaultNote}</textarea>

      <!-- Icebreaker Quick Chips -->
      <div style="font-size: 10px; color: var(--maison-taupe); font-weight: 700; margin-bottom: 6px;">HIZLI AÇILIŞ CÜMLELERİ</div>
      <div class="connect-icebreakers-row">
        <button class="connect-icebreaker-chip" data-chip="mimari">🏛️ Mimari & mekan üzerine</button>
        <button class="connect-icebreaker-chip" data-chip="kitap">📚 Calvino & edebiyat notları</button>
        <button class="connect-icebreaker-chip" data-chip="rituel">☕ Sabah ritüeli ve dinginlik</button>
        <button class="connect-icebreaker-chip" data-chip="koleksiyon">🔖 Ortak koleksiyon daveti</button>
      </div>

      <div class="connect-actions-row">
        <button class="connect-btn-send" id="btnSubmitConnection">Bağlantı İsteğini İlet</button>
        <button class="connect-btn-cancel" id="btnCancelConnection">Vazgeç</button>
      </div>
    `;

    // Chip triggers
    body.querySelectorAll('.connect-icebreaker-chip').forEach(ch => {
      ch.addEventListener('click', () => {
        const type = ch.dataset.chip;
        const textarea = document.getElementById('connectCustomNoteText');
        if (!textarea) return;
        if (type === 'mimari') {
          textarea.value = `Merhaba ${p.name}, mekanın ruhu ve Akdeniz taş mimarisi üzerine yaklaşımınız beni çok etkiledi. MAISON'da sizinle temas kurmak isterim.`;
        } else if (type === 'kitap') {
          textarea.value = `Merhaba ${p.name}, Görünmez Kentler ve Calvino üzerine benzer bir edebi duyarlılığı paylaşıyoruz. Salon'da düşüncelerinizi dinlemek harika olurdu.`;
        } else if (type === 'rituel') {
          textarea.value = `Merhaba ${p.name}, güne sakin ve telaşsız başlama ritüellerinizi ilgiyle okudum. Zevk radarlarımız çok yakın; tanışmak isterim.`;
        } else if (type === 'koleksiyon') {
          textarea.value = `Merhaba ${p.name}, 'Boğaz ve Sükunet' ortak koleksiyonumuz için bir araya gelmek ve seçkilerinizi dinlemekten mutluluk duyarım.`;
        }
      });
    });

    // Submit Connection
    document.getElementById('btnSubmitConnection')?.addEventListener('click', () => {
      playHarmonicChime();
      triggerHaptic('success');

      if (!state.myConnections.some(c => c.name === p.name)) {
        state.myConnections.unshift({
          id: 'conn_' + p.id,
          name: p.name,
          role: p.role,
          avatar: p.avatar,
          city: p.location,
          interests: p.personalTastes || ["Mimari", "Kültür"],
          mutualCount: p.mutualCount || 4,
          mutualCircles: ["Küratör Çemberi"],
          mutualCollections: ["İstanbul Seçkisi"],
          quote: p.quote || "Kültürel derinleşme."
        });
        localStorage.setItem('maison_my_connections', JSON.stringify(state.myConnections));
      }

      closeConnectModal();
      showToast(`${p.name} ile kültürel bağlantı kuruldu. Salon'a eklendi ✓`);

      // Refresh button states if on current page
      if (state.currentView === 'people') renderPeopleView();
      else if (state.currentView === 'person_detail') renderPersonDetailView(p.id);
    });

    document.getElementById('btnCancelConnection')?.addEventListener('click', closeConnectModal);
    document.getElementById('btnCloseConnectModal')?.addEventListener('click', closeConnectModal);
    document.getElementById('overlayConnectModal')?.addEventListener('click', closeConnectModal);

    modal.classList.add('open');
  }

  function closeConnectModal() {
    const modal = document.getElementById('maisonConnectModal');
    if (modal) modal.classList.remove('open');
  }

  // --------------------------------------------------------------------------
  // 6d. INSTAGRAM STORY VIEWER MODAL (Full Screen with Progress Bar)
  // --------------------------------------------------------------------------
  function openStoryViewer(personId) {
    const p = MAISON_DATA.people.find(person => person.id === personId) || MAISON_DATA.people[0];
    const story = p.story || {
      title: "Günün Kültürel Anı",
      image: p.cover || p.avatar,
      caption: p.quote,
      time: "2 saat önce"
    };

    story.seen = true;
    const modal = document.getElementById('maisonStoryModal');
    const fill = document.getElementById('storyProgressFill');
    const avatar = document.getElementById('storyAvatar');
    const name = document.getElementById('storyName');
    const time = document.getElementById('storyTime');
    const image = document.getElementById('storyImage');
    const caption = document.getElementById('storyCaption');
    if (!modal) return;

    if (avatar) avatar.src = p.avatar;
    if (name) name.textContent = p.name;
    if (time) time.textContent = story.time || "Bugün";
    if (image) image.src = story.image;
    if (caption) caption.textContent = story.caption || p.quote;

    // Connect button in story
    const quickBtn = document.getElementById('btnStoryQuickConnect');
    if (quickBtn) {
      const isConn = state.myConnections.some(c => c.name === p.name);
      quickBtn.textContent = isConn ? 'Bağlantıda ✓' : 'Tanış';
      quickBtn.onclick = () => {
        closeStoryViewer();
        openConnectModal(p.id);
      };
    }

    // Story like
    const likeBtn = document.getElementById('btnStoryLike');
    if (likeBtn) {
      likeBtn.onclick = () => {
        triggerHaptic('selection');
        likeBtn.querySelector('svg').style.fill = '#B89758';
        likeBtn.querySelector('svg').style.stroke = '#B89758';
        showToast(`${p.name}'in anını beğendiniz.`);
      };
    }

    // Close button
    document.getElementById('btnCloseStoryModal').onclick = closeStoryViewer;

    // Progress bar animation reset
    if (fill) {
      fill.classList.remove('active');
      void fill.offsetWidth; // reflow
      fill.classList.add('active');
    }

    // Auto advance after 6s
    if (storyTimerInterval) clearTimeout(storyTimerInterval);
    storyTimerInterval = setTimeout(() => {
      // Advance to next curator
      const currentIdx = MAISON_DATA.people.findIndex(x => x.id === p.id);
      const nextIdx = (currentIdx + 1) % MAISON_DATA.people.length;
      openStoryViewer(MAISON_DATA.people[nextIdx].id);
    }, 6000);

    // Touch zones for navigation
    document.getElementById('storyTouchLeft').onclick = () => {
      const currentIdx = MAISON_DATA.people.findIndex(x => x.id === p.id);
      const prevIdx = (currentIdx - 1 + MAISON_DATA.people.length) % MAISON_DATA.people.length;
      openStoryViewer(MAISON_DATA.people[prevIdx].id);
    };
    document.getElementById('storyTouchRight').onclick = () => {
      const currentIdx = MAISON_DATA.people.findIndex(x => x.id === p.id);
      const nextIdx = (currentIdx + 1) % MAISON_DATA.people.length;
      openStoryViewer(MAISON_DATA.people[nextIdx].id);
    };

    modal.classList.add('open');
  }

  function closeStoryViewer() {
    const modal = document.getElementById('maisonStoryModal');
    if (modal) modal.classList.remove('open');
    if (storyTimerInterval) clearTimeout(storyTimerInterval);
  }

  // --------------------------------------------------------------------------
  // 6e. INSTAGRAM POST DETAIL MODAL (Comments & Reflections)
  // --------------------------------------------------------------------------
  function openPostDetailModal(curatorId, postId) {
    const curator = MAISON_DATA.people.find(p => p.id === curatorId) || MAISON_DATA.people[0];
    const post = (curator.posts || []).find(pt => pt.id === postId) || (curator.posts && curator.posts[0]) || {
      id: postId,
      image: curator.cover || curator.avatar,
      caption: curator.quote,
      location: curator.location,
      likes: 120,
      liked: false,
      comments: []
    };

    const modal = document.getElementById('maisonPostModal');
    const header = document.getElementById('postModalHeader');
    const image = document.getElementById('postModalImage');
    const content = document.getElementById('postModalContent');
    if (!modal) return;

    if (image) image.src = post.image;

    if (header) {
      header.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--maison-border);">
          <div style="display: flex; align-items: center; gap: 10px; cursor: pointer;" id="btnPostHeaderCurator">
            <img src="${curator.avatar}" alt="${curator.name}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--maison-gold);">
            <div>
              <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${curator.name}</div>
              <div style="font-size: 11px; color: var(--maison-taupe);">${post.location || curator.location}</div>
            </div>
          </div>
          <button class="evening-close-btn" id="btnClosePostModal">&times;</button>
        </div>
      `;
      document.getElementById('btnPostHeaderCurator')?.addEventListener('click', () => {
        closePostDetailModal();
        setView('person_detail', { id: curator.id });
      });
      document.getElementById('btnClosePostModal')?.addEventListener('click', closePostDetailModal);
    }

    if (content) {
      content.innerHTML = `
        <div style="padding: 12px 16px;">
          <!-- Caption -->
          <div style="font-size: 13px; line-height: 1.5; color: var(--maison-charcoal); margin-bottom: 12px;">
            <strong style="font-family: var(--font-serif); font-size: 14.5px;">${curator.name}</strong> ${post.caption}
          </div>

          <!-- Comments List -->
          <div style="font-size: 10.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-taupe); margin-bottom: 8px;">KÜLTÜREL DÜŞÜNCELER & YORUMLAR</div>
          <div style="display: flex; flex-direction: column; gap: 8px; max-height: 140px; overflow-y: auto; margin-bottom: 14px;" id="postCommentsList">
            ${(post.comments || []).length > 0 ? post.comments.map(c => `
              <div style="display: flex; gap: 8px; font-size: 12px; color: var(--maison-charcoal); background: var(--maison-cream); padding: 8px 10px; border-radius: 8px;">
                <strong style="font-family: var(--font-serif); white-space: nowrap;">${c.author}:</strong>
                <span>${c.text}</span>
              </div>
            `).join('') : '<div style="font-size: 11.5px; color: var(--maison-taupe); font-style: italic;">Henüz yorum eklenmemiş. İlk düşünceyi siz bırakın.</div>'}
          </div>

          <!-- Add Comment Input -->
          <div style="display: flex; gap: 8px;">
            <input type="text" id="postNewCommentInput" placeholder="Kültürel düşünceni ekle..." style="flex: 1; padding: 8px 12px; border: 1px solid var(--maison-border); border-radius: 12px; font-size: 12px; outline: none;">
            <button id="btnSubmitPostComment" style="background: var(--maison-charcoal); color: #FFFFFF; border: none; padding: 8px 14px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer;">Paylaş</button>
          </div>
        </div>
      `;

      document.getElementById('btnSubmitPostComment')?.addEventListener('click', () => {
        const inp = document.getElementById('postNewCommentInput');
        if (inp && inp.value.trim()) {
          const text = inp.value.trim();
          if (!post.comments) post.comments = [];
          post.comments.push({ author: "Berke Saygılı", text });
          inp.value = '';
          openPostDetailModal(curatorId, postId); // re-render comments
          showToast('Düşünceniz kültürel akışa eklendi.');
        }
      });
    }

    document.getElementById('overlayPostModal')?.addEventListener('click', closePostDetailModal);
    modal.classList.add('open');
  }

  function closePostDetailModal() {
    const modal = document.getElementById('maisonPostModal');
    if (modal) modal.classList.remove('open');
  }

  function togglePostLike(curatorId, postId, forceLike = false) {
    const curator = MAISON_DATA.people.find(p => p.id === curatorId);
    if (!curator) return;
    const post = (curator.posts || []).find(pt => pt.id === postId);
    if (!post) return;

    if (forceLike) {
      if (!post.liked) {
        post.liked = true;
        post.likes = (post.likes || 0) + 1;
        triggerHaptic('light');
        playGentleClick();
      }
    } else {
      post.liked = !post.liked;
      post.likes = post.liked ? (post.likes || 0) + 1 : Math.max(0, (post.likes || 1) - 1);
      triggerHaptic('light');
      playGentleClick();
    }

    // Update UI elements
    const likeBtn = document.querySelector(`[data-like-post="${postId}"]`);
    if (likeBtn) {
      likeBtn.classList.toggle('liked', post.liked);
      const svg = likeBtn.querySelector('svg');
      if (svg) svg.setAttribute('fill', post.liked ? '#C53030' : 'none');
    }

    const likesCount = document.getElementById(`likes_count_${postId}`);
    if (likesCount) {
      likesCount.textContent = `${post.likes} Küratör beğendi`;
    }
  }

  window.openConnectModal = openConnectModal;
  window.openStoryViewer = openStoryViewer;
  window.openPostDetailModal = openPostDetailModal;


  // 7. PROFİL (Berke Saygılı's Comprehensive Digital Taste Archive)
  function renderProfileView(activeSubTab = 'koleksiyonlar') {
    const d = MAISON_DATA;

    appScreenBody.innerHTML = `
      <!-- Profile Header -->
      <div style="padding: 20px 20px 14px 20px; border-bottom: 1px solid var(--maison-border); background: var(--maison-white);">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <img src="${d.currentUser.avatar}" alt="${d.currentUser.name}" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2.5px solid var(--maison-gold); box-shadow: 0 4px 16px rgba(0,0,0,0.12);">
            <div>
              <h2 style="font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 2px 0;">${d.currentUser.name}</h2>
              <div style="font-size: 12px; color: var(--maison-gold); font-weight: 600;">${d.currentUser.title}</div>
              <div style="font-size: 11px; color: var(--maison-taupe);">${d.currentUser.handle}</div>
            </div>
          </div>
          <!-- Settings Icon on top right -->
          <button class="profile-settings-btn" id="btnProfileOpenSettings" title="${t('settings_title', 'Ayarlar')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
        <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.45; margin: 0 0 14px 0;">“${d.currentUser.bio}”</p>
        
        <!-- Stats Row -->
        <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--maison-border); padding-top: 10px; font-size: 11px; color: var(--maison-taupe); text-align: center;">
          <div><strong style="color: var(--maison-charcoal); font-size: 13px;">${d.currentUser.stats.readCount}</strong><br>${t('profile_stat_read', 'Okunan')}</div>
          <div><strong style="color: var(--maison-charcoal); font-size: 13px;">${d.currentUser.stats.savedCount}</strong><br>${t('profile_stat_saved', 'Kaydedilen')}</div>
          <div><strong style="color: var(--maison-charcoal); font-size: 13px;">${state.userCollections.length}</strong><br>${t('profile_stat_collections', 'Koleksiyon')}</div>
          <div><strong style="color: var(--maison-charcoal); font-size: 13px;">${state.userNotes.length}</strong><br>${t('profile_stat_journal', 'Journal')}</div>
          <div><strong style="color: var(--maison-charcoal); font-size: 13px;">${d.currentUser.stats.salonRoomsCount}</strong><br>${t('profile_stat_salon', 'Salon Odası')}</div>
        </div>
      </div>

      <!-- Sub-nav Tabs -->
      <div class="profile-nav-tabs" style="margin-top: 8px;">
        <button class="profile-tab-btn ${activeSubTab === 'koleksiyonlar' ? 'active' : ''}" data-ptab="koleksiyonlar">${t('profile_collections', 'Koleksiyonlar')} (${state.userCollections.length})</button>
        <button class="profile-tab-btn ${activeSubTab === 'zevk_radari' ? 'active' : ''}" data-ptab="zevk_radari">${t('profile_radar', 'Zevk Radarı')}</button>
        <button class="profile-tab-btn ${activeSubTab === 'pasaport' ? 'active' : ''}" data-ptab="pasaport">${t('profile_tab_passport', 'Pasaport')}</button>
        <button class="profile-tab-btn ${activeSubTab === 'notlar' ? 'active' : ''}" data-ptab="notlar">${t('profile_journal', 'Journal')} (${state.userNotes.length})</button>
        <button class="profile-tab-btn ${activeSubTab === 'istatistikler' ? 'active' : ''}" data-ptab="istatistikler">${t('profile_stats', 'İstatistikler')}</button>
        <button class="profile-tab-btn ${activeSubTab === 'ayarlar' ? 'active' : ''}" data-ptab="ayarlar">${t('profile_settings', 'Ayarlar')}</button>
      </div>

      <!-- Sub-tab Contents -->
      <div id="profileSubContent">
        ${getProfileSubContent(activeSubTab)}
      </div>
    `;

    document.getElementById('btnProfileOpenSettings')?.addEventListener('click', () => {
      setView('settings');
    });

    document.querySelectorAll('.profile-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabKey = btn.dataset.ptab;
        if (tabKey === 'ayarlar') {
          setView('settings');
        } else {
          renderProfileView(tabKey);
        }
      });
    });

    bindProfileEvents(activeSubTab);
  }

  function getProfileSubContent(tabKey) {
    const d = MAISON_DATA;

    if (tabKey === 'koleksiyonlar') {
      const cat = state.profileSavedCat || 'all';

      const pillsHtml = `
        <div class="profile-cat-pills" style="padding: 12px 20px 8px 20px;">
          <button class="profile-cat-pill ${cat === 'all' ? 'active' : ''}" data-pcat="all">Tümü</button>
          <button class="profile-cat-pill ${cat === 'filmler' ? 'active' : ''}" data-pcat="filmler">Filmler (${state.savedFilms.length})</button>
          <button class="profile-cat-pill ${cat === 'kitaplar' ? 'active' : ''}" data-pcat="kitaplar">Kitaplar (${state.savedBooks.length})</button>
          <button class="profile-cat-pill ${cat === 'mekanlar' ? 'active' : ''}" data-pcat="mekanlar">Mekânlar (${state.savedPlaces.length})</button>
          <button class="profile-cat-pill ${cat === 'rotalar' ? 'active' : ''}" data-pcat="rotalar">Seyahat Rotalarım (${state.savedCities.length})</button>
          <button class="profile-cat-pill ${cat === 'yazilar' ? 'active' : ''}" data-pcat="yazilar">Yazılar (${state.savedArticles.length})</button>
        </div>
      `;

      let bodyHtml = '';

      // 1. Koleksiyonlar & Ortak Koleksiyonlar (shown when 'all')
      if (cat === 'all') {
        bodyHtml += `
          <div class="section-header">
            <h3 class="section-title">Dijital Zevk Arşivi & Koleksiyonlar</h3>
            <span class="section-more-link" id="btnNewCollection">+ Yeni Seçki</span>
          </div>
          <div class="collections-grid">
            ${state.collabCollections.map(col => `
              <div class="collection-card collab-col-card" data-collab-id="${col.id}" style="border: 1px solid var(--maison-gold); background: #FAF5ED;">
                <div class="collection-cover-wrap">
                  <img src="${col.cover}" alt="${col.title}">
                  <span class="collection-count-badge" style="background: var(--maison-gold); color: #121110; font-weight: 700;">ORTAK • ${col.subtitle}</span>
                </div>
                <div class="collection-body">
                  <div class="collection-title">🤝 ${col.title}</div>
                  <div class="collection-desc">${col.subtitle} ile ortak kürasyon • ${col.items.length} kayıt</div>
                </div>
              </div>
            `).join('')}
            ${state.userCollections.map(col => `
              <div class="collection-card" data-col="${col.id}">
                <div class="collection-cover-wrap">
                  <img src="${col.cover}" alt="${col.title}">
                  <span class="collection-count-badge">${col.count} Parça</span>
                </div>
                <div class="collection-body">
                  <div class="collection-title">${col.title}</div>
                  <div class="collection-desc">${col.description || col.desc || 'Kişisel editoryal seçki.'}</div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      // 2. Filmler (shown when 'all' or 'filmler')
      if (cat === 'all' || cat === 'filmler') {
        bodyHtml += `
          <div class="section-header" style="margin-top: 18px;">
            <h3 class="section-title">İzleme Listemdeki Filmler (${state.savedFilms.length})</h3>
            <span style="font-size: 11px; color: var(--maison-taupe);">${state.watchedFilms.length} İzlendi</span>
          </div>
          <div style="padding: 0 20px 10px 20px; display: flex; flex-direction: column; gap: 8px;">
            ${state.savedFilms.length > 0 ? state.savedFilms.map(f => {
              const isWatched = state.watchedFilms.includes(f);
              return `
                <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                    <span style="font-size: 16px;">🎞️</span>
                    <div style="min-width: 0;">
                      <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${f}</div>
                      <div style="font-size: 10.5px; color: ${isWatched ? '#2E7D32' : 'var(--maison-taupe)'};">${isWatched ? '✓ İzlendi olarak işaretlendi' : 'İzleme listesinde'}</div>
                    </div>
                  </div>
                  <button class="film-watched-btn ${isWatched ? 'watched' : ''}" data-film-title="${f}">
                    <span>${isWatched ? '✓ İzledim' : '○ Filmi İzledim'}</span>
                  </button>
                </div>
              `;
            }).join('') : '<div style="font-size: 12px; color: var(--maison-taupe); padding: 10px 0;">Henüz kaydedilmiş film yok.</div>'}
          </div>
        `;
      }

      // 3. Kitaplar (shown when 'all' or 'kitaplar')
      if (cat === 'all' || cat === 'kitaplar') {
        bodyHtml += `
          <div class="section-header" style="margin-top: 18px;">
            <h3 class="section-title">Kütüphanemdeki Başucu Kitapları (${state.savedBooks.length})</h3>
          </div>
          <div style="padding: 0 20px 10px 20px; display: flex; flex-direction: column; gap: 8px;">
            ${state.savedBooks.length > 0 ? state.savedBooks.map(b => `
              <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 16px;">📚</span>
                  <span style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${b}</span>
                </div>
                <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">Kütüphanede ✓</span>
              </div>
            `).join('') : '<div style="font-size: 12px; color: var(--maison-taupe); padding: 10px 0;">Henüz kaydedilmiş kitap yok.</div>'}
          </div>
        `;
      }

      // 4. Mekânlar (shown when 'all' or 'mekanlar')
      if (cat === 'all' || cat === 'mekanlar') {
        bodyHtml += `
          <div class="section-header" style="margin-top: 18px;">
            <h3 class="section-title">Favori Mekânlarım (${state.savedPlaces.length})</h3>
          </div>
          <div style="padding: 0 20px 10px 20px; display: flex; flex-direction: column; gap: 8px;">
            ${state.savedPlaces.length > 0 ? state.savedPlaces.map(p => `
              <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 16px;">🏛️</span>
                  <span style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${p}</span>
                </div>
                <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">Kaydedildi ✓</span>
              </div>
            `).join('') : '<div style="font-size: 12px; color: var(--maison-taupe); padding: 10px 0;">Henüz kaydedilmiş mekân yok.</div>'}
          </div>
        `;
      }

      // 5. Seyahat Rotalarım (shown when 'all' or 'rotalar')
      if (cat === 'all' || cat === 'rotalar') {
        bodyHtml += `
          <div class="section-header" style="margin-top: 18px;">
            <h3 class="section-title">Seyahat Rotalarım (${state.savedCities.length})</h3>
            <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">Taslak Planları İncele</span>
          </div>
          <div style="padding: 0 20px 10px 20px; display: flex; flex-direction: column; gap: 10px;">
            ${state.savedCities.length > 0 ? state.savedCities.map(c => `
              <div class="travel-route-card" data-city-name="${c}" style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 38px; height: 38px; border-radius: 10px; background: #FAF5ED; display: flex; align-items: center; justify-content: center; font-size: 18px;">📍</div>
                  <div>
                    <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal);">${c}</div>
                    <div style="font-size: 11px; color: var(--maison-taupe); margin-top: 2px;">MAISON Küratörlü Taslak Seyahat Planı</div>
                  </div>
                </div>
                <button class="btn-view-travel-plan" data-city-name="${c}" style="background: #23201D; color: #FAF8F5; border: none; border-radius: 10px; padding: 6px 12px; font-size: 11px; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  Taslak Planı Gör →
                </button>
              </div>
            `).join('') : '<div style="font-size: 12px; color: var(--maison-taupe); padding: 10px 0;">Henüz kaydedilmiş rota yok.</div>'}
          </div>
        `;
      }

      // 6. Yazılar (shown when 'all' or 'yazilar')
      if (cat === 'all' || cat === 'yazilar') {
        const arts = d.articles.filter(a => state.savedArticles.includes(a.id));
        bodyHtml += `
          <div class="section-header" style="margin-top: 18px;">
            <h3 class="section-title">Kaydedilen Yazılar (${arts.length})</h3>
          </div>
          <div style="padding: 0 20px 24px 20px; display: flex; flex-direction: column; gap: 8px;">
            ${arts.map(a => `
              <div class="saved-art-card" data-art-id="${a.id}" style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 12px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 16px;">📖</span>
                  <div>
                    <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">${a.title}</div>
                    <div style="font-size: 11px; color: var(--maison-taupe);">${a.authorName} • ${a.readTime}</div>
                  </div>
                </div>
                <span style="font-size: 11px; color: var(--maison-gold); font-weight: 600;">Oku →</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      return pillsHtml + bodyHtml;
    }

    if (tabKey === 'zevk_radari') {
      return `
        <div style="margin: 16px 20px; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 16px; padding: 18px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px;">
            <span style="font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-muted-brown);">KİŞİSEL ZEVK RADARI</span>
            <span style="font-size: 11px; color: var(--maison-taupe);">Editoryal İlgi Analizi</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${Object.entries(d.currentUser.tasteProfile).map(([key, val]) => `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--maison-charcoal); margin-bottom: 3px;">
                  <span>${key}</span>
                  <span style="font-weight: 600;">%${val}</span>
                </div>
                <div style="width: 100%; height: 6px; background: var(--maison-stone); border-radius: 10px; overflow: hidden;">
                  <div style="width: ${val}%; height: 100%; background: var(--maison-charcoal); border-radius: 10px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--maison-border); font-size: 12px; color: var(--maison-muted-brown); line-height: 1.45;">
            <strong>Küratör Analizi:</strong> Berke Saygılı'nın profili yüksek edebi ve felsefi merak (%96), mimari duyarlılık (%92) ve zamansız estetik odaklı zanaatkar nesnelere yoğun ilgi sergilemektedir.
          </div>
        </div>
      `;
    }

    if (tabKey === 'notlar') {
      return `
        <div class="section-header">
          <h3 class="section-title">Journal / Kişisel Notlar</h3>
          <span class="section-more-link" id="btnWriteJournal">+ Yeni Not Yaz</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 20px 24px 20px;">
          ${state.userNotes.map(n => `
            <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--maison-taupe); margin-bottom: 4px;">
                <span>${n.date}</span>
                <span style="color: var(--maison-gold); font-weight: 600;">Özel</span>
              </div>
              <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal); margin-bottom: 4px;">${n.title}</div>
              <p style="font-size: 12.5px; color: var(--maison-muted-brown); line-height: 1.5; margin: 0 0 8px 0;">${n.content}</p>
              <div style="display: flex; gap: 6px;">
                ${(n.tags || []).map(t => `<span class="person-mini-tag">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (tabKey === 'istatistikler') {
      return `
        <div style="padding: 16px 20px 24px 20px; display: flex; flex-direction: column; gap: 14px;">
          <div style="background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 16px; padding: 16px;">
            <div style="font-size: 11px; font-weight: 700; color: var(--maison-muted-brown); text-transform: uppercase;">BU HAFTAKİ DİNGİNLİK SÜRESİ</div>
            <div style="font-family: var(--font-serif); font-size: 32px; font-weight: 600; color: var(--maison-charcoal); margin: 6px 0 2px 0;">142 dk</div>
            <div style="font-size: 12px; color: var(--maison-taupe);">Geçen haftaya göre +24 dk daha fazla yavaş okuma ve dinleme yapıldı.</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
            <div style="background: #fff; border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px;">
              <div style="font-size: 10px; color: var(--maison-taupe); text-transform: uppercase;">OKUNAN MAKALE</div>
              <div style="font-family: var(--font-serif); font-size: 24px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0;">42</div>
              <div style="font-size: 11px; color: var(--maison-muted-brown);">Felsefe, mimari & seyahat</div>
            </div>
            <div style="background: #fff; border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px;">
              <div style="font-size: 10px; color: var(--maison-taupe); text-transform: uppercase;">SESLİ DİNLENEN</div>
              <div style="font-family: var(--font-serif); font-size: 24px; font-weight: 600; color: var(--maison-charcoal); margin: 4px 0;">18 Saat</div>
              <div style="font-size: 11px; color: var(--maison-muted-brown);">Maison Moment & Ambiyans</div>
            </div>
          </div>
        </div>
      `;
    }

    if (tabKey === 'ayarlar') {
      return `
        <div style="padding: 10px 20px 24px 20px;">
          <div class="switch-row">
            <div>
              <div class="switch-label-title">Akşam Bülteni</div>
              <div class="switch-label-desc">Günün sakinleşme özeti her akşam 20:30'da hazır olsun.</div>
            </div>
            <label class="switch-toggle">
              <input type="checkbox" checked id="prefEvening">
              <span class="switch-slider"></span>
            </label>
          </div>

          <div class="switch-row">
            <div>
              <div class="switch-label-title">Sessiz Okuma Modu</div>
              <div class="switch-label-desc">Makale okunurken tüm dış bildirimleri sessize al.</div>
            </div>
            <label class="switch-toggle">
              <input type="checkbox" checked id="prefQuiet">
              <span class="switch-slider"></span>
            </label>
          </div>

          <div class="switch-row">
            <div>
              <div class="switch-label-title">Ambiyans Ses Efektleri</div>
              <div class="switch-label-desc">Salon ve Moment odalarında doğal ses manzaralarını başlat.</div>
            </div>
            <label class="switch-toggle">
              <input type="checkbox" checked id="prefAmbient">
              <span class="switch-slider"></span>
            </label>
          </div>

          <div class="switch-row">
            <div>
              <div class="switch-label-title">Haftalık Küratör Mektubu</div>
              <div class="switch-label-desc">Pazar sabahları özel seçilmiş editoryal mektup.</div>
            </div>
            <label class="switch-toggle">
              <input type="checkbox" checked id="prefLetter">
              <span class="switch-slider"></span>
            </label>
          </div>
        </div>
      `;
    }

    if (tabKey === 'pasaport') {
      const stamps = (d.currentUser && d.currentUser.passportStamps) || [];
      const unlockedCount = stamps.filter(s => s.unlocked).length;
      return `
        <!-- Kültür Pasaportu Kartı -->
        <div class="passport-card">
          <div class="passport-header-row">
            <div>
              <div class="passport-badge-title">DİJİTAL KÜLTÜR PASAPORTU</div>
              <h2 class="passport-holder-name">${d.currentUser.name}</h2>
              <div style="font-size: 11px; color: var(--maison-gold); margin-top: 2px;">${d.currentUser.title}</div>
            </div>
            <div style="font-size: 32px; opacity: 0.85;">🏛️</div>
          </div>
          <div class="passport-meta-grid">
            <div class="passport-meta-item">
              <label>Pasaport No</label>
              <div>${d.currentUser.passportNumber || 'MSN-2024-0824-IST'}</div>
            </div>
            <div class="passport-meta-item">
              <label>Kazanılan Mühür</label>
              <div>${unlockedCount} / ${stamps.length} Kültürel Mühür</div>
            </div>
            <div class="passport-meta-item">
              <label>Düzenlenme</label>
              <div>Ağustos 2024 • İstanbul</div>
            </div>
            <div class="passport-meta-item">
              <label>Kültür Seviyesi</label>
              <div>Rafine Küratör</div>
            </div>
          </div>
        </div>

        <!-- Mühürler Galerisi -->
        <div class="passport-stamps-sec">
          <div class="section-header" style="padding-left: 0; padding-right: 0;">
            <h3 class="section-title">Kültürel Mühürler & Keşifler</h3>
            <span style="font-size: 11px; color: var(--maison-taupe);">${unlockedCount} Aktif Mühür</span>
          </div>
          <div class="passport-stamps-grid">
            ${stamps.map(s => `
              <div class="passport-stamp-item ${s.unlocked ? '' : 'locked'}">
                <div class="stamp-seal-circle">${s.icon}</div>
                <div class="passport-stamp-title">${s.title}</div>
                <div class="passport-stamp-date">${s.unlocked ? s.date : 'Kilitli'}</div>
                <p style="font-size: 11px; color: var(--maison-muted-brown); line-height: 1.35; margin: 4px 0 0 0;">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return '';
  }

  function bindProfileEvents(tabKey) {
    if (tabKey === 'koleksiyonlar') {
      const btnNew = document.getElementById('btnNewCollection');
      if (btnNew) {
        btnNew.addEventListener('click', () => {
          const name = prompt("Yeni Koleksiyon Başlığı (örn: Roma Notları, Yaz Akşamları):");
          if (name) {
            state.userCollections.push({
              id: `col_${Date.now()}`,
              title: name,
              description: "Kişisel editoryal seçki.",
              curator: "Berke Saygılı",
              count: 1,
              cover: "/images/editorial/modern_interior.jpg",
              items: []
            });
            showToast(`'${name}' koleksiyonu oluşturuldu.`);
            renderProfileView('koleksiyonlar');
          }
        });
      }

      document.querySelectorAll('[data-col]').forEach(c => {
        c.addEventListener('click', () => {
          const id = c.dataset.col;
          setView('collection_detail', { id });
        });
      });

      // Category filter pills
      document.querySelectorAll('.profile-cat-pills .profile-cat-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          state.profileSavedCat = pill.dataset.pcat;
          renderProfileView('koleksiyonlar');
        });
      });

      // Watched film toggle
      document.querySelectorAll('.film-watched-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const film = btn.dataset.filmTitle;
          const idx = state.watchedFilms.indexOf(film);
          if (idx > -1) {
            state.watchedFilms.splice(idx, 1);
            showToast(`'${film}' tekrar izleme listesine alındı.`);
          } else {
            state.watchedFilms.push(film);
            playHarmonicChime();
            showToast(`'${film}' izlendi olarak işaretlendi ✓`);
          }
          renderProfileView('koleksiyonlar');
        });
      });

      // Travel route draft plan modal trigger
      document.querySelectorAll('.travel-route-card, .btn-view-travel-plan').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const city = btn.dataset.cityName || btn.closest('.travel-route-card')?.dataset.cityName;
          openTravelItinerary(city);
        });
      });

      // Collaborative collection modal trigger
      document.querySelectorAll('.collab-col-card').forEach(card => {
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const collabId = card.dataset.collabId;
          openCollabCollectionModal(collabId);
        });
      });

      // Saved articles click
      document.querySelectorAll('.saved-art-card').forEach(card => {
        card.addEventListener('click', () => {
          const artId = card.dataset.artId;
          setView('article', { id: artId });
        });
      });
    }

    if (tabKey === 'notlar') {
      const btnWrite = document.getElementById('btnWriteJournal');
      if (btnWrite) btnWrite.addEventListener('click', () => setView('journal_new'));
    }

    if (tabKey === 'ayarlar') {
      ['prefEvening', 'prefQuiet', 'prefAmbient', 'prefLetter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('change', (e) => {
            showToast(`Tercih güncellendi: ${e.target.checked ? 'Açık' : 'Kapalı'}`);
          });
        }
      });
    }
  }

  function renderArticleView(articleId) {
    const art = MAISON_DATA.articles.find(a => a.id === articleId) || MAISON_DATA.articles[0];

    appScreenBody.innerHTML = `
      <!-- Full-Bleed Article Hero matching article_slow_living.png -->
      <div class="article-hero-wrap">
        <img src="${art.heroImage}" alt="${art.title}" class="article-hero-img">
        <div class="article-hero-overlay"></div>
        
        <!-- Top Navigation Overlay -->
        <div class="article-top-nav">
          <button class="glass-icon-btn" id="btnReadingBack" title="Geri Dön">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="18" height="18">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="article-top-brand">
            <div class="brand-title">MAISON</div>
            <div class="brand-subtitle">DAHA ÖZENLİ BİR HAYAT</div>
          </div>
          <div class="article-top-actions">
            <button class="glass-icon-btn" id="btnSaveArticle" title="Kaydet">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button class="glass-icon-btn" id="btnShareArticle" title="Paylaş">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Quote Callout on Hero (verbatim as in article_slow_living.png) -->
        <div class="article-hero-quote-badge">
          “${art.quote || 'Daha yavaş yaşadığımızda, daha fazlasını hissederiz.'}”
          <div style="font-size: 8px; letter-spacing: 1.5px; opacity: 0.85; margin-top: 3px;">— MAISON</div>
        </div>
      </div>

      <div class="reading-sheet">
        <div class="reading-category">${art.category}</div>
        <h1 class="reading-title">${art.title}</h1>
        <p class="reading-subtitle" style="font-size: 15px; color: var(--maison-muted-brown); line-height: 1.45; margin-bottom: 16px;">${art.subtitle}</p>

        <div class="reading-meta-row">
          <div class="reading-author-wrap" id="authorLink">
            <img src="${art.authorAvatar || '/images/editorial/author_deniz.jpg'}" class="reading-author-avatar">
            <div>
              <div class="reading-author-name">${art.authorName}</div>
              <div class="reading-author-role">${art.authorRole} • ${art.date}</div>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="reading-listen-btn" id="btnListenArticle">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Dinle (${art.readTime})</span>
            </button>
            <button class="reading-listen-btn" id="btnCaptureQuote" style="background: rgba(0,0,0,0.05); color: var(--maison-charcoal); border: 1px solid var(--maison-border);">
              <span>✍️ Alıntı Yap</span>
            </button>
          </div>
        </div>

        <div class="reading-body-text">
          ${Array.isArray(art.body) ? art.body.map(p => `<p>${p}</p>`).join('') : `<p>${art.body}</p>`}
        </div>

        ${art.maisonPerspective ? `
          <div style="background: var(--maison-cream); border-left: 3px solid var(--accent-terracotta, #B5734C); padding: 18px 20px; border-radius: 0 10px 10px 0; margin: 24px 0;">
            <div style="font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: var(--maison-taupe); text-transform: uppercase; margin-bottom: 8px;">MAISON PERSPEKTİFİ</div>
            <p style="font-family: var(--font-serif); font-size: 18px; font-style: italic; color: var(--maison-charcoal); line-height: 1.55; margin: 0;">${art.maisonPerspective}</p>
          </div>
        ` : ''}

        ${art.sourceName ? `
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.03); border: 1px solid var(--maison-border); padding: 12px 16px; border-radius: 8px; margin: 20px 0; font-size: 12px;">
            <span style="color: var(--maison-taupe);">Orijinal Kaynak & Kurum: <strong style="color: var(--maison-charcoal);">${art.sourceName}</strong></span>
            ${art.sourceUrl ? `<a href="${art.sourceUrl}" target="_blank" rel="noopener noreferrer" style="color: #B5734C; font-weight: 600; text-decoration: none;">Orijinal İçerik ↗</a>` : ''}
          </div>
        ` : ''}

        <!-- Article to Salon Discussion Bridge Card (Cross-System Synergy) -->
        <div class="article-salon-bridge-card">
          <div class="bridge-tag">SALON TOPLULUĞU İLE BAĞLANTI</div>
          <h3 class="bridge-title">Bu Makaleyi Salonda Tartış</h3>
          <p class="bridge-desc">Selin Arslan, Deniz Kaya ve 28 kültür dostu bu yazının mimari ve felsefi yankılarını tartışıyor.</p>
          <div class="bridge-action-row">
            <div class="bridge-avatars">
              <img src="/images/editorial/architect_selin.jpg" class="bridge-avatar" alt="Selin">
              <img src="/images/editorial/author_deniz.jpg" class="bridge-avatar" alt="Deniz">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" class="bridge-avatar" alt="Mert">
              <div style="font-size: 11px; color: var(--maison-taupe); margin-left: 10px;">+14 aktif düşünce</div>
            </div>
            <button class="bridge-btn" id="btnDiscussInSalon">Salonda Tartışmaya Katıl →</button>
          </div>
        </div>

        <!-- Action bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--maison-border); border-bottom: 1px solid var(--maison-border); padding: 14px 0; margin: 24px 0; font-size: 13px; color: var(--maison-taupe);">
          <div style="display: flex; align-items: center; gap: 14px;">
            <button class="article-like-btn ${state.likedArticles.includes(art.id) ? 'liked' : ''}" id="btnArticleLike" style="cursor: pointer;">
              <span>${state.likedArticles.includes(art.id) ? '❤️' : '🤍'}</span>
              <span id="articleLikesCount">${state.articleLikesCount[art.id] || 142}</span>
            </button>
            <button class="article-like-btn" id="btnOpenArticleCommentsBar" style="cursor: pointer; background: transparent; border: 1px solid var(--maison-border-stone); color: var(--maison-charcoal);">
              <span>💬</span>
              <span>${(state.articleComments[art.id] || []).length}</span>
            </button>
          </div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <span style="cursor: pointer;" id="btnSaveBottom">🔖 Kaydet</span>
            <span style="cursor: pointer;" id="btnAddList">📋 Listeye Ekle</span>
          </div>
        </div>

        <!-- Sana Özel Önerilen Yazılar (Appears / Highlights when liked) -->
        <div class="recommended-for-you-card" id="recommendedSection" style="${state.likedArticles.includes(art.id) ? '' : 'display: none;'}">
          <div class="rec-badge">SANA ÖZEL KÜRATÖRYEL SEÇKİ</div>
          <div class="rec-title">Bu Yazıyı Beğendiğin İçin Senin İçin Seçtiklerimiz</div>
          <div class="rec-grid">
            <div class="rec-item" data-rec-art="amalfi">
              <div class="rec-item-title">Akdeniz'de Zamansızlık</div>
              <div class="rec-item-sub">Deniz Kaya • 7 dk okuma</div>
            </div>
            <div class="rec-item" data-rec-art="istanbul_avlular">
              <div class="rec-item-title">İstanbul'un Saklı Avluları</div>
              <div class="rec-item-sub">Selin Arslan • 6 dk okuma</div>
            </div>
          </div>
        </div>

        <!-- Comments Trigger Button -->
        <div style="margin: 20px 0 28px 0;">
          <button class="modal-primary-btn" id="btnOpenArticleComments" style="background: #23201D; color: #FAF8F5; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <span>💬</span>
            <span>Düşünceler & Yorumlar (${(state.articleComments[art.id] || []).length})</span>
          </button>
        </div>

        <!-- Bunlar da İlginizi Çekebilir -->
        <div class="section-header" style="padding-left: 0; padding-right: 0;">
          <h3 class="section-title">Bunlar da İlginizi Çekebilir</h3>
          <span class="section-more-link" id="linkMoreArticles">Tüm Yazılar →</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <div style="display: flex; gap: 12px; background: #fff; border: 1px solid var(--maison-border); border-radius: 12px; padding: 10px; cursor: pointer;" id="relAmalfi">
            <img src="/images/editorial/amalfi_coast.jpg" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover; flex-shrink: 0;">
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <span style="font-size: 10px; letter-spacing: 1px; color: var(--maison-taupe); text-transform: uppercase;">SEYAHAT</span>
              <span style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">Akdeniz'de Zamansızlık</span>
              <span style="font-size: 11px; color: var(--maison-taupe); margin-top: 2px;">Deniz Kaya • 7 dk</span>
            </div>
          </div>

          <div style="display: flex; gap: 12px; background: #fff; border: 1px solid var(--maison-border); border-radius: 12px; padding: 10px; cursor: pointer;" id="relEvler">
            <img src="/images/editorial/architecture_arched.jpg" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover; flex-shrink: 0;">
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <span style="font-size: 10px; letter-spacing: 1px; color: var(--maison-taupe); text-transform: uppercase;">MİMARİ</span>
              <span style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">Daha Anlamlı Evler</span>
              <span style="font-size: 11px; color: var(--maison-taupe); margin-top: 2px;">Selin Arslan • 6 dk</span>
            </div>
          </div>

          <div style="display: flex; gap: 12px; background: #fff; border: 1px solid var(--maison-border); border-radius: 12px; padding: 10px; cursor: pointer;" id="relKitaplar">
            <img src="/images/editorial/book_reading.jpg" style="width: 70px; height: 70px; border-radius: 8px; object-fit: cover; flex-shrink: 0;">
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <span style="font-size: 10px; letter-spacing: 1px; color: var(--maison-taupe); text-transform: uppercase;">KİTAP</span>
              <span style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: var(--maison-charcoal);">Ruhunu Besleyen Kitaplar</span>
              <span style="font-size: 11px; color: var(--maison-taupe); margin-top: 2px;">Kerem Aydın • 8 dk</span>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btnReadingBack').addEventListener('click', goBack);
    
    // Cross-system reading event
    MaisonBus.emit('article:read', { articleId: art.id, category: art.category, title: art.title });

    document.getElementById('btnListenArticle').addEventListener('click', () => {
      startAmbientAudio();
      updateMediaSession({ title: art.title, artist: art.authorName, img: art.heroImage });
      triggerHaptic('medium');
      showToast("Sesli makale anlatımı başladı. Kilit ekranı denetimleri aktif.");
    });

    // Capture Quote & Synergy
    document.getElementById('btnCaptureQuote')?.addEventListener('click', () => {
      openQuoteActionSheet(art.quote || art.excerpt, `${art.title} • ${art.authorName}`);
    });

    // Discuss In Salon Bridge
    document.getElementById('btnDiscussInSalon')?.addEventListener('click', () => {
      triggerHaptic('medium');
      MaisonBus.emit('salon:joined', { circleId: 'c_mimari' });
      setView('circle_detail', { circleId: 'c_mimari' });
      showToast("Salonda mimari tartışmasına katıldınız ✓");
    });

    document.getElementById('btnSaveArticle').addEventListener('click', (e) => {
      triggerSavePop(e.currentTarget);
      triggerHaptic('light');
      showToast("Yazı 'Okumak İstediklerim' koleksiyonuna kaydedildi.");
    });
    const btnSaveBottom = document.getElementById('btnSaveBottom');
    if (btnSaveBottom) {
      btnSaveBottom.addEventListener('click', (e) => {
        triggerSavePop(e.currentTarget);
        triggerHaptic('light');
        showToast("Yazı 'Okumak İstediklerim' koleksiyonuna kaydedildi.");
      });
    }
    document.getElementById('authorLink').addEventListener('click', () => {
      showToast(`${art.authorName} yazar profili açıldı.`);
    });
    document.getElementById('relAmalfi').addEventListener('click', () => setView('article', { id: 'amalfi' }));
    document.getElementById('relEvler').addEventListener('click', () => setView('article', { id: 'istanbul_avlular' }));
    document.getElementById('relKitaplar').addEventListener('click', () => setView('moment'));

    // Like button handler
    const btnLike = document.getElementById('btnArticleLike');
    if (btnLike) {
      btnLike.addEventListener('click', () => {
        const isLiked = state.likedArticles.includes(art.id);
        if (isLiked) {
          state.likedArticles = state.likedArticles.filter(id => id !== art.id);
          state.articleLikesCount[art.id] = Math.max(0, (state.articleLikesCount[art.id] || 1) - 1);
          showToast("Beğeni kaldırıldı.");
        } else {
          state.likedArticles.push(art.id);
          state.articleLikesCount[art.id] = (state.articleLikesCount[art.id] || 0) + 1;
          playHarmonicChime();
          showToast("❤️ Yazı beğenildi. Sana özel öneriler aşağıda listelendi!");
        }
        renderArticleView(art.id);
      });
    }

    // Recommended article items click
    document.querySelectorAll('[data-rec-art]').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.recArt;
        setView('article', { id });
      });
    });

    // Comments buttons handlers
    const btnComments = document.getElementById('btnOpenArticleComments');
    const btnCommentsBar = document.getElementById('btnOpenArticleCommentsBar');
    if (btnComments) btnComments.addEventListener('click', () => openArticleCommentsModal(art.id));
    if (btnCommentsBar) btnCommentsBar.addEventListener('click', () => openArticleCommentsModal(art.id));
  }

  function renderMomentView() {
    const m = MAISON_DATA.moment;

    appScreenBody.innerHTML = `
      <div style="padding: 16px 20px 40px 20px;">
        <div class="reading-back-row">
          <button class="reading-back-btn" id="btnMomentBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Geri Dön</span>
          </button>
          <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-gold); font-weight: 600;">GÜNLÜK RİTÜEL</span>
        </div>

        <div style="text-align: center; margin: 10px 0 24px 0;">
          <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe);">MAISON MOMENT</div>
          <h1 style="font-family: var(--font-serif); font-size: 32px; font-weight: 500; color: var(--maison-charcoal);">${m.title}</h1>
          <p style="font-size: 13px; color: var(--maison-muted-brown); font-style: italic; margin-top: 4px;">“${m.tagline}”</p>
        </div>

        <div style="background: #362e26; color: #fff; border-radius: 20px; padding: 20px; margin-bottom: 22px; text-align: center;">
          <div style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #d6b885; margin-bottom: 6px;">SESLİ DİNGİNLİK</div>
          <div style="font-family: var(--font-serif); font-size: 20px; font-weight: 500; margin-bottom: 2px;">${m.music.title}</div>
          <div style="font-size: 12px; color: #a8a29e; margin-bottom: 16px;">${m.music.artist} • ${m.music.type}</div>

          <button id="btnPlayMomentAudio" style="background: var(--maison-gold); color: #121110; border: none; width: 56px; height: 56px; border-radius: 50%; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 6px 18px rgba(0,0,0,0.4); margin-bottom: 12px;">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <div style="font-size: 11px; color: #bfb6ad;">Dinlemek için dokun (5 dakika)</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-gold); padding: 14px; border-radius: 0 12px 12px 0;">
            <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-muted-brown); font-weight: 700; margin-bottom: 4px;">1. GÜNÜN FİKRİ</div>
            <div style="font-family: var(--font-serif); font-size: 18px; font-weight: 600; color: var(--maison-charcoal);">“${m.idea}”</div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); padding: 14px; border-radius: 14px;">
            <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 700; margin-bottom: 4px;">2. KISA DENEME</div>
            <p style="font-size: 13px; line-height: 1.6; color: var(--maison-charcoal);">${m.essay}</p>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); padding: 14px; border-radius: 14px;">
            <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 700; margin-bottom: 8px;">3. GÜNÜN FOTOĞRAFI & DOKUSU</div>
            <img src="${m.photo}" alt="Günün Anı" style="width: 100%; height: 180px; object-fit: cover; border-radius: 10px; margin-bottom: 8px; display: block;">
            <div style="font-size: 12px; color: var(--maison-muted-brown); font-style: italic;">“${m.photoPrompt}”</div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); padding: 14px; border-radius: 14px;">
            <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 700; margin-bottom: 4px;">4. GÜNÜN MEKÂNI</div>
            <div style="font-size: 14px; font-weight: 600; color: var(--maison-charcoal);">${m.place}</div>
          </div>

          <div style="background: var(--maison-white); border: 1px solid var(--maison-border); padding: 14px; border-radius: 14px; display: flex; gap: 14px; align-items: center;">
            <img src="${m.bookCover}" alt="${m.book}" style="width: 55px; height: 80px; object-fit: cover; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <div>
              <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 700; margin-bottom: 2px;">5. GÜNÜN KİTABI</div>
              <div style="font-family: var(--font-serif); font-size: 16px; font-weight: 600; color: var(--maison-charcoal);">${m.book}</div>
              <div style="font-size: 12px; color: var(--maison-muted-brown); margin-top: 4px;">Maison Okuma Seçkisi</div>
            </div>
          </div>

          <div style="background: var(--maison-cream); padding: 16px; border-radius: 14px; text-align: center;">
            <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 700; margin-bottom: 4px;">6. GÜNÜN SORUSU</div>
            <div style="font-family: var(--font-serif); font-size: 18px; font-style: italic; color: var(--maison-muted-brown);">“${m.question}”</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btnMomentBack').addEventListener('click', goBack);
    document.getElementById('btnPlayMomentAudio').addEventListener('click', () => {
      if (state.isPlayingAudio) {
        stopAmbientAudio();
        showToast("Ses duraklatıldı.");
      } else {
        startAmbientAudio();
        showToast("Maison Moment ambient ses manzarası başladı.");
      }
    });
  }

  // ==========================================
  // MAISON STUDIO — Editorial Videos & Practices
  // ==========================================
  const studioCollectionModal = document.getElementById('studioCollectionModal');
  const btnCloseStudioCollection = document.getElementById('btnCloseStudioCollection');
  const studioCollectionsOptions = document.getElementById('studioCollectionsOptions');
  const studioModalVideoTitle = document.getElementById('studioModalVideoTitle');
  const newStudioCollectionInput = document.getElementById('newStudioCollectionInput');
  const btnCreateAndAddToCollection = document.getElementById('btnCreateAndAddToCollection');

  let activeStudioCollabVideo = null;

  function renderStudioView(activeCat = 'all') {
    const d = window.MAISON_DATA || {};
    const categories = d.studioCategories || [];
    const allVideos = d.studioVideos || [];

    const filteredVideos = activeCat === 'all' 
      ? allVideos 
      : allVideos.filter(v => v.category === activeCat);

    const featuredVideo = filteredVideos[0] || allVideos[0];
    const gridVideos = filteredVideos.length > 1 ? filteredVideos.slice(1) : filteredVideos;

    // Curated recommendations based on saved items
    const recommendedVideos = allVideos.filter(v => v.id !== (featuredVideo ? featuredVideo.id : '')).slice(0, 3);

    appScreenBody.innerHTML = `
      <div class="studio-main-container">
        <!-- Top Bar -->
        <div class="studio-top-bar">
          <button class="studio-back-btn" id="btnStudioBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Ana Sayfa</span>
          </button>
          <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.18em; color: var(--maison-gold); text-transform: uppercase;">YAYIN ALANI</span>
        </div>

        <!-- Hero Header -->
        <div class="studio-hero-header">
          <div class="studio-brand-badge">MAISON STUDIO</div>
          <h2 class="studio-main-title">Kısa Filmler & Küçük Pratikler</h2>
          <p class="studio-main-subtitle">Günün koşturmacasından birkaç dakika uzaklaşmak, zihni dinlendirmek ve yeni bir şey öğrenmek için özel olarak hazırlandı.</p>
        </div>

        <!-- Category Rail -->
        <div class="studio-cat-rail" id="studioCatRail">
          ${categories.map(cat => `
            <button class="studio-cat-pill ${cat.id === activeCat ? 'active' : ''}" data-cat="${cat.id}">
              <span>${cat.icon}</span>
              <span>${cat.name}</span>
            </button>
          `).join('')}
        </div>

        <!-- Featured Video Hero -->
        ${featuredVideo ? `
          <div class="studio-featured-hero" id="featuredStudioVideo" data-video-id="${featuredVideo.id}">
            <img src="${featuredVideo.cover}" alt="${featuredVideo.title}">
            <div class="studio-featured-gradient"></div>
            <div class="studio-featured-content">
              <div class="studio-featured-top">
                <span class="studio-featured-tag">${featuredVideo.categoryLabel}</span>
                <span class="studio-featured-duration">${featuredVideo.duration}</span>
              </div>
              <div class="studio-featured-center-play">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <div class="studio-featured-bottom">
                <h3 class="studio-featured-title">${featuredVideo.title}</h3>
                <p class="studio-featured-sub">${featuredVideo.subtitle}</p>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Video Stream Section -->
        <div class="studio-grid-section-title">
          ${activeCat === 'all' ? 'Tüm Studio Pratikleri' : `${categories.find(c => c.id === activeCat)?.name || ''} Pratikleri`}
        </div>

        <div class="studio-videos-grid" id="studioVideosGrid">
          ${gridVideos.map(vid => `
            <div class="studio-video-card" data-video-id="${vid.id}">
              <div class="studio-card-media">
                <img src="${vid.cover}" alt="${vid.title}">
                <div class="studio-card-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span class="studio-card-cat">${vid.categoryLabel}</span>
                <span class="studio-card-duration">${vid.duration}</span>
              </div>
              <div class="studio-card-content">
                <h4 class="studio-card-title">${vid.title}</h4>
                <p class="studio-card-desc">${vid.subtitle}</p>
                <div class="studio-card-curator">Küratör: ${vid.curator} • ${vid.level}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Personalization: Senin İçin Seçtiklerimiz -->
        <div style="margin-top: 36px;">
          <div class="section-header" style="padding: 0 0 10px 0;">
            <h3 class="section-title">Senin İlgi Alanlarına Göre</h3>
            <span class="section-sub-label">Özel Seçki</span>
          </div>
          <div class="cards-rail" style="padding-left: 0;">
            ${recommendedVideos.map(rec => `
              <div class="editorial-card" data-video-id="${rec.id}" style="min-width: 220px; width: 220px; cursor: pointer;">
                <div class="card-img-wrap" style="height: 130px;">
                  <img src="${rec.cover}" alt="${rec.title}">
                  <span class="card-badge">${rec.categoryLabel}</span>
                  <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; font-size: 10px; font-weight: 600; padding: 2px 6px; border-radius: 4px;">${rec.duration}</span>
                </div>
                <div class="card-body" style="padding: 10px;">
                  <div class="card-title" style="font-size: 14px;">${rec.title}</div>
                  <div class="card-subtitle" style="font-size: 11px;">${rec.subtitle}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Event Listeners
    const btnStudioBack = document.getElementById('btnStudioBack');
    if (btnStudioBack) {
      btnStudioBack.addEventListener('click', () => goBack());
    }

    // Category pills
    const rail = document.getElementById('studioCatRail');
    if (rail) {
      rail.querySelectorAll('.studio-cat-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const cat = pill.dataset.cat;
          renderStudioView(cat);
        });
      });
    }

    // Video clicks
    appScreenBody.querySelectorAll('[data-video-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.videoId;
        setView('studio_detail', { id });
      });
    });
  }

  function renderStudioDetailView(videoId) {
    const d = window.MAISON_DATA || {};
    const videos = d.studioVideos || [];
    const vid = videos.find(v => v.id === videoId) || videos[0];

    const isSaved = state.savedStudioVideos.includes(vid.id);
    const related = videos.filter(v => v.id !== vid.id && (v.category === vid.category || Math.random() > 0.4)).slice(0, 3);

    // Reset playback state
    if (state.studioPlaybackState.timer) {
      clearInterval(state.studioPlaybackState.timer);
    }
    state.studioPlaybackState = {
      isPlaying: false,
      currentTime: 0,
      duration: vid.durationSeconds || 192,
      timer: null
    };

    appScreenBody.innerHTML = `
      <div class="studio-detail-container">
        <!-- Top Nav -->
        <div class="studio-detail-top-nav">
          <button class="studio-detail-back" id="btnDetailBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>MAISON Studio</span>
          </button>
          <span style="font-size: 11px; font-weight: 600; color: var(--maison-taupe);">${vid.categoryLabel}</span>
        </div>

        <!-- Focused Video Player Box -->
        <div class="studio-player-box" id="studioPlayerBox">
          <img src="${vid.cover}" alt="${vid.title}" class="studio-player-media" id="studioPlayerCover">
          <div class="studio-player-overlay" id="studioPlayerOverlay">
            <button class="studio-player-play-btn" id="btnBigPlay">
              <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
          
          <div class="studio-player-controls" id="studioPlayerControls">
            <div class="studio-scrubber-track" id="studioScrubberTrack">
              <div class="studio-scrubber-fill" id="studioScrubberFill" style="width: 0%;"></div>
            </div>
            <div class="studio-controls-bar">
              <button class="studio-ctrl-btn" id="btnMiniPlayPause">
                <svg id="ctrlPlayIcon" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span id="studioTimeDisplay">00:00 / ${vid.duration}</span>
              <button class="studio-ctrl-btn" id="btnSoundToggle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Video Detail Info -->
        <div class="studio-detail-header">
          <div class="studio-detail-cat-row">
            <span class="studio-detail-badge">${vid.categoryLabel}</span>
            <span class="studio-detail-duration">• ${vid.duration}</span>
            <span class="studio-detail-duration">• ${vid.level}</span>
          </div>
          <h2 class="studio-detail-title">${vid.title}</h2>
          <p class="studio-detail-desc">${vid.description}</p>
        </div>

        <!-- Metadata Grid -->
        <div class="studio-meta-grid">
          <div class="studio-meta-item">
            <span class="studio-meta-label">Süre</span>
            <span class="studio-meta-val">${vid.duration}</span>
          </div>
          <div class="studio-meta-item">
            <span class="studio-meta-label">Konu</span>
            <span class="studio-meta-val">${vid.topic}</span>
          </div>
          <div class="studio-meta-item">
            <span class="studio-meta-label">Seviye</span>
            <span class="studio-meta-val">${vid.level}</span>
          </div>
          <div class="studio-meta-item">
            <span class="studio-meta-label">Küratör</span>
            <span class="studio-meta-val">${vid.curator}</span>
          </div>
        </div>

        <!-- Key Takeaways -->
        ${vid.keyTakeaways && vid.keyTakeaways.length ? `
          <div class="studio-takeaways-card">
            <div class="studio-takeaways-title">Bu Pratikten Neler Öğreneceksiniz?</div>
            <ul class="studio-takeaways-list">
              ${vid.keyTakeaways.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Action Buttons -->
        <div class="studio-action-buttons">
          <button class="studio-btn-save ${isSaved ? 'saved' : ''}" id="btnSaveStudioVideo">
            <svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span id="saveStudioVideoText">${isSaved ? 'Kayıtlı ✓' : 'Kaydet'}</span>
          </button>

          <button class="studio-btn-add-collab" id="btnOpenStudioCollabModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            <span>Koleksiyona Ekle</span>
          </button>
        </div>

        <!-- Related Videos -->
        <div style="margin-top: 14px;">
          <div class="section-header" style="padding: 0 0 10px 0;">
            <h3 class="section-title">Benzer Pratikler</h3>
            <span class="section-sub-label">Studio Seçkisi</span>
          </div>
          <div class="cards-rail" style="padding-left: 0;">
            ${related.map(rel => `
              <div class="editorial-card" data-video-id="${rel.id}" style="min-width: 210px; width: 210px; cursor: pointer;">
                <div class="card-img-wrap" style="height: 125px;">
                  <img src="${rel.cover}" alt="${rel.title}">
                  <span class="card-badge">${rel.categoryLabel}</span>
                  <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.7); color: #fff; font-size: 10px; font-weight: 600; padding: 2px 6px; border-radius: 4px;">${rel.duration}</span>
                </div>
                <div class="card-body" style="padding: 10px;">
                  <div class="card-title" style="font-size: 14px;">${rel.title}</div>
                  <div class="card-subtitle" style="font-size: 11px;">${rel.subtitle}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Back button
    document.getElementById('btnDetailBack').addEventListener('click', () => goBack());

    // Save button
    const btnSave = document.getElementById('btnSaveStudioVideo');
    btnSave.addEventListener('click', () => {
      toggleSaveStudioVideo(vid.id);
    });

    // Add to collection button
    document.getElementById('btnOpenStudioCollabModal').addEventListener('click', () => {
      openStudioCollectionModal(vid);
    });

    // Video Player Interactions
    setupStudioVideoPlayer(vid);

    // Related cards click
    appScreenBody.querySelectorAll('[data-video-id]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.videoId;
        setView('studio_detail', { id });
      });
    });
  }

  function setupStudioVideoPlayer(vid) {
    const btnBigPlay = document.getElementById('btnBigPlay');
    const btnMiniPlayPause = document.getElementById('btnMiniPlayPause');
    const studioPlayerOverlay = document.getElementById('studioPlayerOverlay');
    const studioScrubberFill = document.getElementById('studioScrubberFill');
    const studioTimeDisplay = document.getElementById('studioTimeDisplay');
    const ctrlPlayIcon = document.getElementById('ctrlPlayIcon');
    const studioScrubberTrack = document.getElementById('studioScrubberTrack');

    function formatTime(secs) {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function togglePlayback() {
      state.studioPlaybackState.isPlaying = !state.studioPlaybackState.isPlaying;

      if (state.studioPlaybackState.isPlaying) {
        studioPlayerOverlay.style.display = 'none';
        ctrlPlayIcon.innerHTML = `
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        `;
        playStudioAmbientSound();

        state.studioPlaybackState.timer = setInterval(() => {
          state.studioPlaybackState.currentTime += 1;
          if (state.studioPlaybackState.currentTime >= state.studioPlaybackState.duration) {
            state.studioPlaybackState.currentTime = 0;
            togglePlayback();
            MaisonBus.emit('studio:completed', { videoId: vid.id, title: vid.title });
          }
          const pct = (state.studioPlaybackState.currentTime / state.studioPlaybackState.duration) * 100;
          studioScrubberFill.style.width = `${pct}%`;
          studioTimeDisplay.textContent = `${formatTime(state.studioPlaybackState.currentTime)} / ${vid.duration}`;
        }, 1000);
      } else {
        studioPlayerOverlay.style.display = 'flex';
        ctrlPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
        if (state.studioPlaybackState.timer) clearInterval(state.studioPlaybackState.timer);
      }
    }

    if (btnBigPlay) btnBigPlay.addEventListener('click', togglePlayback);
    if (btnMiniPlayPause) btnMiniPlayPause.addEventListener('click', togglePlayback);

    if (studioScrubberTrack) {
      studioScrubberTrack.addEventListener('click', (e) => {
        const rect = studioScrubberTrack.getBoundingClientRect();
        const clickPos = (e.clientX - rect.left) / rect.width;
        state.studioPlaybackState.currentTime = clickPos * state.studioPlaybackState.duration;
        studioScrubberFill.style.width = `${clickPos * 100}%`;
        studioTimeDisplay.textContent = `${formatTime(state.studioPlaybackState.currentTime)} / ${vid.duration}`;
      });
    }
  }

  function playStudioAmbientSound() {
    if (!state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(329.63, ctx.currentTime);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.6);
    } catch(e) {}
  }

  function openStudioCollectionModal(vid) {
    activeStudioCollabVideo = vid;
    if (studioModalVideoTitle) {
      studioModalVideoTitle.textContent = `"${vid.title}" Pratiğini Ekle`;
    }
    renderStudioCollectionOptions();
    if (studioCollectionModal) {
      studioCollectionModal.classList.add('open');
    }
  }

  function closeStudioCollectionModal() {
    if (studioCollectionModal) {
      studioCollectionModal.classList.remove('open');
    }
    activeStudioCollabVideo = null;
  }

  function renderStudioCollectionOptions() {
    if (!studioCollectionsOptions) return;
    const defaultCols = state.userCollections || [
      { id: 'col_sabah', title: 'Sabah Rutinim', count: 4 },
      { id: 'col_zaman', title: 'Kendime Ayırdığım Zaman', count: 6 },
      { id: 'col_zanaat', title: 'Zanaat & İlham', count: 3 }
    ];

    studioCollectionsOptions.innerHTML = defaultCols.map(col => `
      <div class="studio-collab-opt-card" data-col-id="${col.id}">
        <div>
          <div class="studio-opt-title">${col.title}</div>
          <div class="studio-opt-sub">${col.count} içerik</div>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" color="var(--maison-gold)">
          <path d="M12 5v14M5 12h14"></path>
        </svg>
      </div>
    `).join('');

    studioCollectionsOptions.querySelectorAll('.studio-collab-opt-card').forEach(card => {
      card.addEventListener('click', () => {
        const colId = card.dataset.colId;
        const col = defaultCols.find(c => c.id === colId);
        if (col) {
          col.count += 1;
          showToast(`"${activeStudioCollabVideo?.title}" pratiği "${col.title}" koleksiyonuna eklendi ✓`);
          closeStudioCollectionModal();
        }
      });
    });
  }

  if (btnCloseStudioCollection) {
    btnCloseStudioCollection.addEventListener('click', closeStudioCollectionModal);
  }
  if (studioCollectionModal) {
    studioCollectionModal.addEventListener('click', (e) => {
      if (e.target === studioCollectionModal) closeStudioCollectionModal();
    });
  }

  if (btnCreateAndAddToCollection) {
    btnCreateAndAddToCollection.addEventListener('click', () => {
      const name = newStudioCollectionInput.value.trim();
      if (!name) return;
      state.userCollections.push({
        id: `col_${Date.now()}`,
        title: name,
        count: 1
      });
      newStudioCollectionInput.value = '';
      showToast(`Yeni koleksiyon oluşturuldu: "${name}" ✓`);
      closeStudioCollectionModal();
    });
  }

  function toggleSaveStudioVideo(videoId) {
    const idx = state.savedStudioVideos.indexOf(videoId);
    const btnSave = document.getElementById('btnSaveStudioVideo');
    const saveText = document.getElementById('saveStudioVideoText');

    if (idx > -1) {
      state.savedStudioVideos.splice(idx, 1);
      if (btnSave) {
        btnSave.classList.remove('saved');
        btnSave.querySelector('svg').setAttribute('fill', 'none');
      }
      if (saveText) saveText.textContent = 'Kaydet';
      showToast("Pratik kaydedilenlerden çıkarıldı.");
    } else {
      state.savedStudioVideos.push(videoId);
      if (btnSave) {
        triggerSavePop(btnSave);
        btnSave.classList.add('saved');
        btnSave.querySelector('svg').setAttribute('fill', 'currentColor');
      }
      if (saveText) saveText.textContent = 'Kayıtlı ✓';
      showToast("Pratik profilinize kaydedildi ✓");
    }
  }

  function renderRoomDiscussionView(roomId) {
    const room = MAISON_DATA.salonRooms.find(r => r.id === roomId) || MAISON_DATA.salonRooms[0];

    appScreenBody.innerHTML = `
      <div style="padding: 16px 20px 40px 20px;">
        <!-- Top Back Bar -->
        <div class="reading-back-row">
          <button class="reading-back-btn" id="btnRoomBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Salona Dön</span>
          </button>
          <span style="font-size: 11px; color: #3b7a57; font-weight: 600; background: #edf7ed; padding: 3px 9px; border-radius: 12px;">● ${room.activeUsers} kişi odada</span>
        </div>

        <!-- Room Header Image -->
        <div style="margin-bottom: 14px; border-radius: 16px; overflow: hidden; position: relative;">
          <img src="${room.image}" alt="${room.title}" style="width: 100%; height: 160px; object-fit: cover; display: block;">
          <span class="card-badge" style="top: 12px; left: 12px;">${room.category} ODASI</span>
        </div>

        <div style="margin-bottom: 16px;">
          <h1 style="font-family: var(--font-serif); font-size: 26px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 4px 0;">${room.title}</h1>
          <p style="font-size: 12px; color: var(--maison-taupe); line-height: 1.4; margin: 0;">${room.description}</p>
        </div>

        <!-- 1. Bugünün Sorusu / Konusu -->
        <div style="background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 14px; padding: 14px 16px; margin-bottom: 14px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-gold); font-weight: 700; margin-bottom: 4px;">1. BUGÜNÜN SORUSU & KONUSU</div>
          <div style="font-family: var(--font-serif); font-size: 17px; font-weight: 600; color: var(--maison-charcoal); line-height: 1.35;">“${room.topic}”</div>
        </div>

        <!-- 2. Küratörün / Odanın Ev Sahibinin Açılış Notu -->
        <div class="room-host-card">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <img src="${room.hostAvatar}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--maison-gold);">
            <div>
              <div style="font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-muted-brown); font-weight: 700;">2. EV SAHİBİNİN AÇILIŞ NOTU</div>
              <div style="font-size: 13px; font-weight: 600; color: var(--maison-charcoal);">${room.hostName} <span style="font-size: 11px; font-weight: 400; color: var(--maison-taupe);">(${room.hostRole})</span></div>
            </div>
          </div>
          <p style="font-size: 12.5px; color: var(--maison-charcoal); line-height: 1.5; margin: 0; font-style: italic;">“${room.openingNote}”</p>
        </div>

        <!-- 3. Odaya Özel Müzik / Ambiyans -->
        <div class="room-ambience-widget">
          <div class="room-ambience-left">
            <button class="room-ambience-icon" id="btnToggleRoomAudio" title="Oda Müziğini Dinle">
              <svg id="roomAudioIcon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <div>
              <div style="font-size: 9.5px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-gold);">3. ODAYA ÖZEL AMBİYANS</div>
              <div style="font-family: var(--font-serif); font-size: 15px; font-weight: 600; color: #fff;">${room.ambienceMusic.title}</div>
              <div style="font-size: 11px; color: #a8a29e;">${room.ambienceMusic.artist} • ${room.ambienceMusic.type} (${room.ambienceMusic.duration})</div>
            </div>
          </div>
        </div>

        <!-- 4. Seçkin Üyelerin Düşünceleri -->
        <div class="section-header" style="padding-left: 0; padding-right: 0; padding-top: 4px;">
          <h3 class="section-title">4. Seçkin Üyelerin Düşünceleri (${room.discussions.length})</h3>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px;" id="roomDiscussionList">
          ${room.discussions.map(disc => `
            <div style="background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 14px; padding: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: var(--maison-taupe); margin-bottom: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <img src="${disc.avatar || '/images/editorial/author_deniz.jpg'}" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;">
                  <span><strong>${disc.author}</strong> <span style="font-size: 10px; color: var(--maison-gold);">(${disc.role})</span></span>
                </div>
                <span>${disc.time}</span>
              </div>
              <p style="font-size: 13px; line-height: 1.55; color: var(--maison-charcoal); margin: 0;">“${disc.text}”</p>
            </div>
          `).join('')}
        </div>

        <!-- 5. “Ben bu konuda ne düşünüyorum?” Alanı -->
        <div style="background: var(--maison-white); border: 1.5px solid var(--maison-border-stone); border-radius: 16px; padding: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
          <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-gold); font-weight: 700; margin-bottom: 4px;">5. DÜŞÜNCENİ PAYLAŞ</div>
          <div style="font-family: var(--font-serif); font-size: 17px; font-weight: 600; color: var(--maison-charcoal); margin-bottom: 4px;">“Ben bu konuda ne düşünüyorum?”</div>
          <p style="font-size: 11.5px; color: var(--maison-taupe); line-height: 1.4; margin-bottom: 10px;">Düşüncelerinizi paylaşın; seçkin kültür topluluğunun derinleşmesine katkı verin.</p>
          
          <textarea id="roomCommentInput" placeholder="${room.title} odasında konuya dair düşüncenizi yazın..." style="width: 100%; height: 85px; border: 1px solid var(--maison-border-stone); border-radius: 12px; padding: 12px; font-family: inherit; font-size: 13px; line-height: 1.5; background: var(--maison-cream); outline: none; resize: none; margin-bottom: 12px; color: var(--maison-charcoal);"></textarea>
          
          <button id="btnSendComment" class="modal-primary-btn" style="padding: 12px; font-size: 13px; margin: 0; width: 100%; justify-content: center;">
            Odaya Gönder (Berke Saygılı Olarak)
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnRoomBack').addEventListener('click', () => {
      playGentleClick();
      setView('salon', { tab: 'rooms' });
    });

    // Audio Ambience Play/Pause
    const btnToggle = document.getElementById('btnToggleRoomAudio');
    const audioIcon = document.getElementById('roomAudioIcon');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        if (state.isPlayingAudio) {
          stopAmbientAudio();
          audioIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
          showToast("Oda ambiyansı duraklatıldı.");
        } else {
          startAmbientAudio();
          audioIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
          showToast(`Oda ambiyansı çalıyor: ${room.ambienceMusic.title} (${room.ambienceMusic.artist})`);
        }
      });
    }

    // Submit Comment
    document.getElementById('btnSendComment').addEventListener('click', () => {
      const txt = document.getElementById('roomCommentInput').value.trim();
      if (txt) {
        room.discussions.push({
          author: MAISON_DATA.currentUser.name,
          role: "Kurucu & Küratör",
          avatar: MAISON_DATA.currentUser.avatar,
          time: "Şimdi",
          text: txt
        });
        showToast("Düşünceniz Salon odasında paylaşıldı.");
        renderRoomDiscussionView(roomId);
      } else {
        showToast("Lütfen düşüncenizi yazın.");
      }
    });
  }

  function renderProductView(productId) {
    const prod = MAISON_DATA.products.find(p => p.id === productId) || MAISON_DATA.products[0];

    appScreenBody.innerHTML = `
      <div style="padding: 16px 20px 40px 20px;">
        <div class="reading-back-row">
          <button class="reading-back-btn" id="btnProdBack">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span>Geri Dön</span>
          </button>
          <button class="header-action-btn" id="btnSaveProd">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        <div style="border-radius: 18px; overflow: hidden; margin-bottom: 12px; background: var(--maison-cream);">
          <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 260px; object-fit: cover; display: block;">
        </div>

        <!-- Thumbnails Rail -->
        <div style="display: flex; gap: 8px; margin-bottom: 16px; overflow-x: auto;">
          <div style="width: 54px; height: 54px; border-radius: 10px; overflow: hidden; border: 2px solid var(--maison-charcoal); flex-shrink: 0; cursor: pointer;">
            <img src="${prod.image}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="width: 54px; height: 54px; border-radius: 10px; overflow: hidden; border: 1px solid var(--maison-border-stone); flex-shrink: 0; cursor: pointer;">
            <img src="${prod.image}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95);">
          </div>
          <div style="width: 54px; height: 54px; border-radius: 10px; overflow: hidden; border: 1px solid var(--maison-border-stone); flex-shrink: 0; cursor: pointer;">
            <img src="/images/editorial/moment_morning.jpg" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="width: 54px; height: 54px; border-radius: 10px; overflow: hidden; border: 1px solid var(--maison-border-stone); flex-shrink: 0; cursor: pointer;">
            <img src="/images/editorial/travertine_lamp.jpg" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        </div>

        <!-- Tabs -->
        <div style="display: flex; border-bottom: 1px solid var(--maison-border); margin-bottom: 16px; font-size: 13px; font-weight: 500;">
          <span style="padding: 8px 12px; border-bottom: 2px solid var(--maison-charcoal); color: var(--maison-charcoal); cursor: pointer;">Hikâyesi</span>
          <span style="padding: 8px 12px; color: var(--maison-taupe); cursor: pointer;">Detaylar</span>
          <span style="padding: 8px 12px; color: var(--maison-taupe); cursor: pointer;">Atölye</span>
          <span style="padding: 8px 12px; color: var(--maison-taupe); cursor: pointer;">Bakım</span>
        </div>

        <div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">${prod.maker}</div>
        <h1 style="font-family: var(--font-serif); font-size: 26px; font-weight: 500; color: var(--maison-charcoal); margin: 2px 0 6px 0;">${prod.name}</h1>
        <div style="font-size: 18px; font-weight: 600; color: var(--maison-charcoal); margin-bottom: 16px;">${prod.price}</div>

        <div style="background: var(--maison-cream); border-left: 3px solid var(--maison-muted-brown); padding: 14px; border-radius: 0 12px 12px 0; margin-bottom: 18px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--maison-muted-brown); font-weight: 700; margin-bottom: 4px;">NEDEN BUNU SEÇTİK?</div>
          <p style="font-size: 13px; line-height: 1.5; color: var(--maison-charcoal);">${prod.whyWeChoseIt}</p>
        </div>

        <div style="font-family: var(--font-serif); font-size: 15px; font-style: italic; color: var(--maison-muted-brown); margin-bottom: 18px; line-height: 1.4;">
          “${prod.story}”
        </div>

        <!-- Feature Badges -->
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; background: #fff; padding: 14px; border-radius: 14px; border: 1px solid var(--maison-border);">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--maison-charcoal);">
            <span>🌿</span> <span>${prod.details.material}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--maison-charcoal);">
            <span>✋</span> <span>${prod.details.craft}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--maison-charcoal);">
            <span>📍</span> <span>${prod.details.origin}</span>
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 14px; margin-bottom: 28px;">
          <button id="btnAddToCollection" style="flex: 1; background: var(--maison-cream); border: 1px solid var(--maison-border-stone); border-radius: 14px; padding: 14px; font-size: 13px; font-weight: 600; color: var(--maison-charcoal); cursor: pointer;">
            Koleksiyonuma Ekle
          </button>
          <button id="btnAddToCart" class="modal-primary-btn" style="flex: 1; margin-bottom: 0;">
            Sepete Ekle (${prod.price})
          </button>
        </div>

        <!-- Bunlar da İlginizi Çekebilir -->
        <div class="section-header" style="padding-left: 0; padding-right: 0;">
          <h3 class="section-title">Bunlar da İlginizi Çekebilir</h3>
          <span class="section-more-link">Tümünü Gör →</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <div style="background: #fff; border: 1px solid var(--maison-border); border-radius: 14px; overflow: hidden; cursor: pointer;">
            <img src="/images/editorial/soy_candle.jpg" style="width: 100%; height: 110px; object-fit: cover;">
            <div style="padding: 10px;">
              <div style="font-size: 12px; font-weight: 600; color: var(--maison-charcoal);">Doğal Soya Mumu</div>
              <div style="font-size: 11px; color: var(--maison-taupe);">₺890</div>
            </div>
          </div>
          <div style="background: #fff; border: 1px solid var(--maison-border); border-radius: 14px; overflow: hidden; cursor: pointer;">
            <img src="/images/editorial/travertine_lamp.jpg" style="width: 100%; height: 110px; object-fit: cover;">
            <div style="padding: 10px;">
              <div style="font-size: 12px; font-weight: 600; color: var(--maison-charcoal);">Traverten Abajur</div>
              <div style="font-size: 11px; color: var(--maison-taupe);">₺4.600</div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btnProdBack').addEventListener('click', goBack);
    document.getElementById('btnSaveProd').addEventListener('click', (e) => {
      triggerSavePop(e.currentTarget);
      showToast(`${prod.name} 'Evime Alacaklarım' koleksiyonuna eklendi.`);
    });
    document.getElementById('btnAddToCollection').addEventListener('click', (e) => {
      triggerSavePop(e.currentTarget);
      showToast(`${prod.name} 'Evime Alacaklarım' koleksiyonuna eklendi.`);
    });
    document.getElementById('btnAddToCart').addEventListener('click', () => {
      state.cartItems.push({ name: prod.name, price: prod.price, qty: 1 });
      showToast(`${prod.name} sepete eklendi.`);
    });
  }

  function renderJournalEditorView() {
    appScreenBody.innerHTML = `
      <div style="padding: 16px 20px 40px 20px;">
        <div class="reading-back-row">
          <button class="reading-back-btn" id="btnCancelJournal">
            <span>İptal</span>
          </button>
          <span style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--maison-taupe); font-weight: 600;">KİŞİSEL GÜNLÜK</span>
          <button id="btnSaveNewNote" style="background: var(--maison-muted-brown); color: #fff; border: none; padding: 6px 14px; border-radius: 16px; font-size: 12px; font-weight: 600; cursor: pointer;">
            Kaydet
          </button>
        </div>

        <div style="margin-top: 10px;">
          <input type="text" id="newNoteTitle" placeholder="Başlık (örn: Yağmurlu Bir Pazar Düşüncesi)" style="width: 100%; border: none; border-bottom: 1px solid var(--maison-border); background: transparent; font-family: var(--font-serif); font-size: 22px; padding: 8px 0; outline: none; margin-bottom: 16px; color: var(--maison-charcoal);">
          <textarea id="newNoteBody" placeholder="Düşüncelerini, gördüğün bir detayı veya günün ilhamını buraya yaz..." style="width: 100%; height: 260px; border: none; background: transparent; font-family: inherit; font-size: 14px; line-height: 1.7; outline: none; resize: none; color: var(--maison-charcoal);"></textarea>
        </div>
      </div>
    `;

    document.getElementById('btnCancelJournal').addEventListener('click', goBack);
    document.getElementById('btnSaveNewNote').addEventListener('click', () => {
      const title = document.getElementById('newNoteTitle').value.trim();
      const body = document.getElementById('newNoteBody').value.trim();
      if (title) {
        state.userNotes.unshift({
          id: `note_${Date.now()}`,
          title: title,
          date: "Bugün",
          content: body,
          tags: ["Kişisel"]
        });
        showToast("Journal notunuz kaydedildi.");
        setView('profile');
      } else {
        showToast("Lütfen bir başlık yazın.");
      }
    });
  }

  function openSearchModal() {
    searchModal.classList.add('open');
    globalSearchInput.value = '';
    globalSearchInput.focus();
    renderSearchResults('');
  }

  function closeSearchModal() {
    searchModal.classList.remove('open');
  }

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    searchResultsArea.innerHTML = '';

    if (!q) {
      searchResultsArea.innerHTML = `
        <div style="font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-taupe); margin-bottom: 10px;">ÖNERİLEN KÜLTÜREL ARAMALAR</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="taste-tag quick-search" data-q="İstanbul">İstanbul</span>
          <span class="taste-tag quick-search" data-q="Yavaş">Yavaş Yaşamak</span>
          <span class="taste-tag quick-search" data-q="Sanat">Sanat & Sergiler</span>
          <span class="taste-tag quick-search" data-q="Mimari">Mimari Avlular</span>
        </div>
      `;
      document.querySelectorAll('.quick-search').forEach(s => {
        s.addEventListener('click', () => {
          globalSearchInput.value = s.dataset.q;
          renderSearchResults(s.dataset.q);
        });
      });
      return;
    }

    const d = MAISON_DATA;
    const foundArticles = d.articles.filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
    const foundPeople = d.people.filter(p => p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.quote.toLowerCase().includes(q));
    const foundProducts = d.products.filter(pr => pr.name.toLowerCase().includes(q) || pr.maker.toLowerCase().includes(q) || pr.whyWeChoseIt.toLowerCase().includes(q));
    const foundRooms = d.salonRooms.filter(r => r.title.toLowerCase().includes(q) || r.topic.toLowerCase().includes(q));

    let html = '';

    if (foundArticles.length > 0) {
      html += `<div class="search-group-title">Yazılar & Denemeler (${foundArticles.length})</div>`;
      foundArticles.forEach(a => {
        html += `
          <div class="search-result-item" data-action="article" data-id="${a.id}">
            <div class="result-icon">📖</div>
            <div class="result-info">
              <span class="result-title">${a.title}</span>
              <span class="result-type">${a.authorName} • ${a.category}</span>
            </div>
          </div>
        `;
      });
    }

    if (foundPeople.length > 0) {
      html += `<div class="search-group-title">İlham Veren İnsanlar (${foundPeople.length})</div>`;
      foundPeople.forEach(p => {
        html += `
          <div class="search-result-item" data-action="people" data-id="${p.id}">
            <div class="result-icon">👤</div>
            <div class="result-info">
              <span class="result-title">${p.name}</span>
              <span class="result-type">${p.role} • “${p.quote}”</span>
            </div>
          </div>
        `;
      });
    }

    if (foundProducts.length > 0) {
      html += `<div class="search-group-title">Seçkin Objeler (${foundProducts.length})</div>`;
      foundProducts.forEach(pr => {
        html += `
          <div class="search-result-item" data-action="product" data-id="${pr.id}">
            <div class="result-icon">🏺</div>
            <div class="result-info">
              <span class="result-title">${pr.name} (${pr.price})</span>
              <span class="result-type">${pr.maker}</span>
            </div>
          </div>
        `;
      });
    }

    if (foundRooms.length > 0) {
      html += `<div class="search-group-title">Salon Odaları (${foundRooms.length})</div>`;
      foundRooms.forEach(r => {
        html += `
          <div class="search-result-item" data-action="room" data-id="${r.id}">
            <div class="result-icon">💬</div>
            <div class="result-info">
              <span class="result-title">${r.title}</span>
              <span class="result-type">${r.topic}</span>
            </div>
          </div>
        `;
      });
    }

    if (!html) {
      html = `<div style="padding: 20px 0; color: var(--maison-taupe); font-size: 13px;">“${query}” için bir sonuç bulunamadı.</div>`;
    }

    searchResultsArea.innerHTML = html;

    searchResultsArea.querySelectorAll('[data-action]').forEach(item => {
      item.addEventListener('click', () => {
        const action = item.dataset.action;
        const id = item.dataset.id;
        closeSearchModal();
        if (action === 'article') setView('article', { id });
        else if (action === 'product') setView('product', { id });
        else if (action === 'room') setView('room', { id });
        else if (action === 'people') setView('article', { id: 'slow_living' });
      });
    });
  }

  globalSearchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
  btnCloseSearch.addEventListener('click', closeSearchModal);

  // -------------------------------------------------------------
  // 1. NOTIFICATION CENTER & INSTANT SIMULATOR
  // -------------------------------------------------------------
  let currentNotifFilter = 'all';

  function openNotificationCenter(filter = 'all') {
    currentNotifFilter = filter;
    renderNotificationItems(filter);
    if (notificationCenterModal) notificationCenterModal.classList.add('open');
    playGentleClick();
  }

  function closeNotificationCenter() {
    if (notificationCenterModal) notificationCenterModal.classList.remove('open');
    playGentleClick();
  }

  function renderNotificationItems(filter = 'all') {
    if (!notifItemsList) return;
    let items = state.notifications || [];
    if (filter !== 'all') {
      items = items.filter(n => n.type === filter);
    }

    const unreadCount = (state.notifications || []).filter(n => !n.read).length;
    if (notifBadgeCount) {
      notifBadgeCount.textContent = unreadCount > 0 ? `${unreadCount} Yeni` : 'Tümü Okundu';
    }

    if (items.length === 0) {
      notifItemsList.innerHTML = `<div style="padding: 30px 0; text-align: center; color: var(--maison-taupe); font-size: 13px;">Bu kategoride bildiriminiz bulunmuyor.</div>`;
      return;
    }

    notifItemsList.innerHTML = items.map(n => `
      <div class="notif-card ${n.read ? '' : 'unread'}" data-notif-id="${n.id}">
        <div class="notif-card-icon">${n.icon || '🔔'}</div>
        <div class="notif-card-body">
          <div class="notif-card-title">${n.title}</div>
          <div class="notif-card-desc">${n.message}</div>
          <div class="notif-card-time">${n.time}</div>
        </div>
        ${!n.read ? '<div class="notif-unread-dot"></div>' : ''}
      </div>
    `).join('');

    notifItemsList.querySelectorAll('.notif-card').forEach(card => {
      card.addEventListener('click', () => {
        const nid = card.dataset.notifId;
        const notif = state.notifications.find(x => x.id === nid);
        if (notif) {
          notif.read = true;
          renderNotificationItems(currentNotifFilter);
          if (notif.actionView === 'article') {
            closeNotificationCenter();
            setView('article', { id: notif.actionId || 'slow_living' });
          } else if (notif.type === 'invitation') {
            closeNotificationCenter();
            openCollabCollectionModal('collab_bogaz');
          }
        }
      });
    });
  }

  function triggerInstantNotification() {
    const instantTemplates = [
      {
        title: 'Yeni Kürasyon Hazır',
        message: 'Küratörler senin için "Boğazın Saklı Köşkleri & Avluları" yazısını yayına aldı.',
        icon: '🏛️',
        type: 'cultural',
        actionView: 'article',
        actionId: 'istanbul_avlular'
      },
      {
        title: 'Mert Kaya seni davet etti',
        message: '"Boğaz Kıyıları" ortak koleksiyonunda yeni bir not paylaştı.',
        icon: '✉️',
        type: 'invitation',
        actionView: 'collab',
        actionId: 'collab_bogaz'
      },
      {
        title: 'Akdeniz Sohbeti Başladı',
        message: 'Salon: "Zamansız Mimari & Işık" odasında 8 kişi sohbete katıldı.',
        icon: '💬',
        type: 'interaction',
        actionView: 'salon',
        actionId: 'room_mimari'
      }
    ];

    const randomTpl = instantTemplates[Math.floor(Math.random() * instantTemplates.length)];
    const newNotif = {
      id: 'notif_' + Date.now(),
      title: randomTpl.title,
      message: randomTpl.message,
      icon: randomTpl.icon,
      type: randomTpl.type,
      time: 'Şimdi',
      read: false,
      actionView: randomTpl.actionView,
      actionId: randomTpl.actionId
    };

    state.notifications.unshift(newNotif);
    renderNotificationItems(currentNotifFilter);
    showToast(`⚡ ${newNotif.title}: ${newNotif.message}`);
  }

  if (btnCloseNotificationCenter) btnCloseNotificationCenter.addEventListener('click', closeNotificationCenter);
  if (btnTriggerInstantNotif) btnTriggerInstantNotif.addEventListener('click', triggerInstantNotification);

  if (notifFilterTabs) {
    notifFilterTabs.querySelectorAll('.notif-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        notifFilterTabs.querySelectorAll('.notif-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.notifFilter;
        currentNotifFilter = filter;
        renderNotificationItems(filter);
      });
    });
  }

  // -------------------------------------------------------------
  // 2. TASLAK SEYAHAT PLANI MODAL
  // -------------------------------------------------------------
  function openTravelItinerary(routeQuery) {
    const itineraries = (typeof MAISON_DATA !== 'undefined' && MAISON_DATA.travelItineraries) ? MAISON_DATA.travelItineraries : {};
    let itinerary = null;

    // Search by key or title query
    const q = (routeQuery || '').toLowerCase();
    if (q.includes('floransa') || q.includes('toskana')) itinerary = itineraries.floransa_toskana;
    else if (q.includes('bologna')) itinerary = itineraries.bologna_sanat;
    else if (q.includes('kaş') || q.includes('kalkan')) itinerary = itineraries.kas_kalkan;
    else if (q.includes('kyoto')) itinerary = itineraries.kyoto_zen;
    else itinerary = itineraries[routeQuery] || itineraries.floransa_toskana;

    if (!itinerary) return;

    if (travelPlanTitle) travelPlanTitle.textContent = itinerary.title;
    if (travelPlanSubtitle) travelPlanSubtitle.textContent = itinerary.subtitle;

    if (travelPlanContent) {
      travelPlanContent.innerHTML = itinerary.days.map(d => `
        <div class="travel-day-card">
          <div class="travel-day-title">
            <span>${d.day}. Gün — ${d.title}</span>
            <span class="travel-day-badge">${d.day}. Gün</span>
          </div>
          <div class="travel-time-slot">
            <div class="slot-time">Sabah</div>
            <div class="slot-desc">${d.morning}</div>
          </div>
          <div class="travel-time-slot">
            <div class="slot-time">Öğleden Sonra</div>
            <div class="slot-desc">${d.afternoon}</div>
          </div>
          <div class="travel-time-slot">
            <div class="slot-time">Akşam</div>
            <div class="slot-desc">${d.evening}</div>
          </div>
          ${d.stay ? `
            <div class="travel-time-slot" style="border-left-color: var(--maison-charcoal);">
              <div class="slot-time">Konaklama & Maison Önerisi</div>
              <div class="slot-desc">${d.stay}</div>
            </div>
          ` : ''}
        </div>
      `).join('');
    }

    if (travelPlanModal) travelPlanModal.classList.add('open');
    playGentleClick();
  }

  function closeTravelPlanModal() {
    if (travelPlanModal) travelPlanModal.classList.remove('open');
    playGentleClick();
  }

  if (btnCloseTravelPlan) btnCloseTravelPlan.addEventListener('click', closeTravelPlanModal);
  if (btnSaveTravelPlan) {
    btnSaveTravelPlan.addEventListener('click', () => {
      showToast("Taslak seyahat planı kişisel ajandanıza kaydedildi ✓");
      closeTravelPlanModal();
    });
  }
  if (btnShareTravelPlan) {
    btnShareTravelPlan.addEventListener('click', () => {
      showToast("Seyahat planı paylaşım bağlantısı panoya kopyalandı 🔗");
    });
  }

  // -------------------------------------------------------------
  // 3. MAISON ÇEVREM MODAL
  // -------------------------------------------------------------
  function openMaisonCirclesModal() {
    renderJoinedCirclesList();
    if (maisonCirclesModal) maisonCirclesModal.classList.add('open');
    playGentleClick();
  }

  function closeMaisonCirclesModal() {
    if (maisonCirclesModal) maisonCirclesModal.classList.remove('open');
    playGentleClick();
  }

  function renderJoinedCirclesList() {
    if (!joinedCirclesList) return;
    const allCircles = (window.MAISON_DATA && window.MAISON_DATA.mWorld && window.MAISON_DATA.mWorld.circles) || [];
    const joined = allCircles.filter(c => state.joinedCircles.includes(c.id));

    if (joined.length === 0) {
      joinedCirclesList.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: var(--maison-taupe);">
          <div style="font-size: 32px; margin-bottom: 8px;">🏛️</div>
          <div style="font-family: var(--font-serif); font-size: 16px; color: var(--maison-charcoal); margin-bottom: 4px;">Henüz bir çevreye katılmadınız</div>
          <div style="font-size: 12px; line-height: 1.4;">M Butonu üzerinden ilginizi çeken kültürel çevrelere tek dokunuşla katılabilirsiniz.</div>
        </div>
      `;
      return;
    }

    joinedCirclesList.innerHTML = joined.map(c => {
      const isFav = state.favoriteCircles.includes(c.id);
      return `
        <div class="joined-circle-card" data-circle-id="${c.id}">
          <div class="circle-top-row">
            <div class="circle-meta-left">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: #FAF5ED; display: flex; align-items: center; justify-content: center; font-size: 18px;">${c.icon || '✦'}</div>
              <div>
                <div class="circle-name">${c.name}</div>
                <div class="circle-members">${c.members} üye • ${c.activeTopic}</div>
              </div>
            </div>
            ${isFav ? '<span style="font-size: 11px; color: #996B00; background: #FFF8E7; padding: 2px 8px; border-radius: 6px; font-weight: 600;">⭐ Favori</span>' : ''}
          </div>
          <div class="circle-actions-row">
            <button class="circle-fav-btn ${isFav ? 'is-fav' : ''}" data-circle-id="${c.id}">
              ${isFav ? '★ Favorim' : '☆ Favori Yap'}
            </button>
            <button class="circle-leave-btn" data-circle-id="${c.id}">Çevreden Ayrıl</button>
          </div>
        </div>
      `;
    }).join('');

    // Toggle favorite circle
    joinedCirclesList.querySelectorAll('.circle-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.dataset.circleId;
        const isFav = state.favoriteCircles.includes(cid);
        if (isFav) {
          state.favoriteCircles = state.favoriteCircles.filter(id => id !== cid);
          showToast("Favori çevrelerden çıkarıldı.");
        } else {
          state.favoriteCircles.push(cid);
          playHarmonicChime();
          showToast("⭐ Favori çevreniz olarak kaydedildi.");
        }
        renderJoinedCirclesList();
      });
    });

    // Leave circle
    joinedCirclesList.querySelectorAll('.circle-leave-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.dataset.circleId;
        const circle = allCircles.find(x => x.id === cid);
        state.joinedCircles = state.joinedCircles.filter(id => id !== cid);
        state.favoriteCircles = state.favoriteCircles.filter(id => id !== cid);
        if (circle) circle.joined = false;
        showToast(`'${circle ? circle.name : 'Çevre'}' çevresinden ayrıldınız.`);
        renderJoinedCirclesList();
      });
    });
  }

  if (btnCloseMaisonCircles) btnCloseMaisonCircles.addEventListener('click', closeMaisonCirclesModal);

  // -------------------------------------------------------------
  // 4. ORTAK KOLEKSİYON MODAL
  // -------------------------------------------------------------
  let currentActiveCollabId = 'collab_istanbul_haftasonu';

  function openCollabCollectionModal(collabId = 'collab_istanbul_haftasonu') {
    currentActiveCollabId = collabId;
    const collab = state.collabCollections.find(c => c.id === collabId) || state.collabCollections[0];
    if (!collab) return;

    if (collabTitle) collabTitle.textContent = collab.title;
    if (collabSubtitle) collabSubtitle.textContent = `${collab.subtitle || collab.participants.join(' + ')} • ${collab.items.length} Kayıt`;

    renderCollabItemsList(collab);
    if (collabCollectionModal) collabCollectionModal.classList.add('open');
    playGentleClick();
  }

  function closeCollabCollectionModal() {
    if (collabCollectionModal) collabCollectionModal.classList.remove('open');
    playGentleClick();
  }

  function renderCollabItemsList(collab) {
    if (!collabItemsList) return;
    collabItemsList.innerHTML = collab.items.map(it => `
      <div class="collab-item-card">
        <img src="${it.img || '/images/editorial/bosphorus_sunset.jpg'}" class="collab-item-img">
        <div class="collab-item-info">
          <div class="collab-item-title">${it.title}</div>
          <div style="font-size: 11.5px; color: var(--maison-muted-brown); margin: 2px 0;">${it.note}</div>
          <div class="collab-item-by">Ekleyen: <strong>${it.by}</strong></div>
        </div>
      </div>
    `).join('');
  }

  const addCollabItemModal = document.getElementById('addCollabItemModal');
  const btnCloseAddCollabItem = document.getElementById('btnCloseAddCollabItem');
  const btnSubmitCollabItem = document.getElementById('btnSubmitCollabItem');
  const collabItemTitleInput = document.getElementById('collabItemTitleInput');
  const collabItemNoteInput = document.getElementById('collabItemNoteInput');

  function openAddCollabItemModal() {
    if (addCollabItemModal) {
      addCollabItemModal.style.display = 'flex';
      if (collabItemTitleInput) {
        collabItemTitleInput.value = '';
        setTimeout(() => collabItemTitleInput.focus(), 150);
      }
      if (collabItemNoteInput) collabItemNoteInput.value = '';
      playGentleClick();
    }
  }

  function closeAddCollabItemModal() {
    if (addCollabItemModal) {
      addCollabItemModal.style.display = 'none';
      playGentleClick();
    }
  }

  if (btnCloseAddCollabItem) btnCloseAddCollabItem.addEventListener('click', closeAddCollabItemModal);

  if (btnSubmitCollabItem) {
    btnSubmitCollabItem.addEventListener('click', () => {
      const title = (collabItemTitleInput && collabItemTitleInput.value.trim()) || '';
      const note = (collabItemNoteInput && collabItemNoteInput.value.trim()) || '';
      if (!title) {
        showToast("Lütfen bir başlık veya mekan girin.");
        return;
      }

      const collab = state.collabCollections.find(c => c.id === currentActiveCollabId) || state.collabCollections[0];
      if (collab) {
        collab.items.unshift({
          id: 'item_' + Date.now(),
          title: title,
          note: note || 'Kişisel zevk ve dinginlik kaydı.',
          by: 'Sen',
          img: '/images/editorial/bosphorus_sunset.jpg'
        });
        collab.count = collab.items.length;
        localStorage.setItem('maison_collab_collections', JSON.stringify(state.collabCollections));
        renderCollabItemsList(collab);
        if (collabSubtitle) collabSubtitle.textContent = `${collab.subtitle || collab.participants.join(' + ')} • ${collab.items.length} Kayıt`;
        closeAddCollabItemModal();
        playHarmonicChime();
        showToast("Ortak koleksiyona yeni kayıt eklendi ✓");
      }
    });
  }

  if (btnCloseCollabCollection) btnCloseCollabCollection.addEventListener('click', closeCollabCollectionModal);
  if (btnAddCollabItem) btnAddCollabItem.addEventListener('click', openAddCollabItemModal);

  // -------------------------------------------------------------
  // 4c. KÜLTÜREL BAĞLANTI & PROFİL MODAL
  // -------------------------------------------------------------
  function openConnectionDetailModal(connId) {
    const conn = state.myConnections.find(c => c.id === connId) || state.myConnections[0];
    if (!conn) return;

    const modal = document.getElementById('maisonConnectionModal');
    const body = document.getElementById('connectionModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
        <img src="${conn.avatar}" alt="${conn.name}" style="width: 58px; height: 58px; border-radius: 50%; object-fit: cover; border: 2px solid var(--maison-gold);">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 20px; font-weight: 600; color: var(--maison-charcoal); margin: 0 0 2px 0;">${conn.name}</h3>
          <div style="font-size: 12px; color: var(--maison-taupe); margin-bottom: 4px;">${conn.role} • ${conn.city || 'İstanbul'}</div>
          <span style="font-size: 10.5px; background: var(--maison-cream); color: var(--maison-gold); font-weight: 700; padding: 2px 8px; border-radius: 8px;">%94 Kültürel Uyum</span>
        </div>
      </div>

      <div style="background: var(--maison-cream); border-radius: 12px; padding: 12px 14px; margin-bottom: 16px;">
        <div style="font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-muted-brown); font-weight: 700; margin-bottom: 4px;">KÜRATÖR NOTU</div>
        <div style="font-size: 12.5px; color: var(--maison-charcoal); font-style: italic; line-height: 1.4;">“${conn.quote}”</div>
      </div>

      <div style="margin-bottom: 18px;">
        <div style="font-size: 10.5px; letter-spacing: 1px; text-transform: uppercase; color: var(--maison-muted-brown); font-weight: 700; margin-bottom: 8px;">ORTAK ALANLARINIZ</div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; padding: 8px 12px; background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 10px;">
            <span style="color: var(--maison-taupe);">Ortak İlgi Alanları</span>
            <span style="font-weight: 600; color: var(--maison-charcoal);">${conn.interests.join(' • ')}</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; padding: 8px 12px; background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 10px;">
            <span style="color: var(--maison-taupe);">Ortak Çevreler</span>
            <span style="font-weight: 600; color: var(--maison-charcoal);">${conn.mutualCircles.join(' • ')}</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; padding: 8px 12px; background: var(--maison-white); border: 1px solid var(--maison-border); border-radius: 10px;">
            <span style="color: var(--maison-taupe);">Ortak Koleksiyonlar</span>
            <span style="font-weight: 600; color: var(--maison-charcoal);">${conn.mutualCollections.join(' • ')}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="modal-primary-btn" id="btnConnInviteRoom" style="width: 100%; justify-content: center; padding: 12px;">
          Ortak Odaya Davet Et
        </button>
        <button class="modal-secondary-btn" id="btnConnCollab" style="width: 100%; justify-content: center; padding: 12px; background: var(--maison-cream); border: 1px solid var(--maison-border); border-radius: 12px; font-weight: 600; color: var(--maison-charcoal); cursor: pointer;">
          Birlikte Koleksiyon Oluştur
        </button>
      </div>
    `;

    modal.style.display = 'flex';
    playGentleClick();

    document.getElementById('btnCloseConnectionModal').onclick = () => {
      modal.style.display = 'none';
      playGentleClick();
    };

    const btnInvite = document.getElementById('btnConnInviteRoom');
    if (btnInvite) {
      btnInvite.onclick = () => {
        btnInvite.textContent = 'Davet Gönderildi ✓';
        btnInvite.style.background = '#2e7d32';
        playHarmonicChime();
        showToast(`${conn.name} ortak mimari sohbet odasına davet edildi.`);
      };
    }

    const btnCollab = document.getElementById('btnConnCollab');
    if (btnCollab) {
      btnCollab.onclick = () => {
        modal.style.display = 'none';
        openCollabCollectionModal('collab_istanbul_haftasonu');
      };
    }
  }

  // -------------------------------------------------------------
  // 4d. APP STORE & CROSS-SYSTEM SYNERGY HANDLERS
  // -------------------------------------------------------------
  if (btnCloseAuthModal) btnCloseAuthModal.addEventListener('click', closeAuthModal);
  if (btnAppleSignIn) {
    btnAppleSignIn.addEventListener('click', () => {
      triggerHaptic('success');
      showToast(" Apple ile başarıyla bağlandı.");
      closeAuthModal();
    });
  }
  if (btnGoogleSignIn) {
    btnGoogleSignIn.addEventListener('click', () => {
      triggerHaptic('success');
      showToast("Google hesabı ile senkronize edildi.");
      closeAuthModal();
    });
  }
  if (btnEmailSignIn) {
    btnEmailSignIn.addEventListener('click', () => {
      const email = authEmailInput ? authEmailInput.value.trim() : '';
      if (!email || !email.includes('@')) {
        showToast("Lütfen geçerli bir e-posta adresi girin.");
        return;
      }
      triggerHaptic('success');
      showToast(`Giriş bağlantısı ${email} adresine iletildi.`);
      closeAuthModal();
    });
  }
  if (linkAuthTerms) linkAuthTerms.addEventListener('click', () => { closeAuthModal(); openLegalModal('terms'); });
  if (linkAuthPrivacy) linkAuthPrivacy.addEventListener('click', () => { closeAuthModal(); openLegalModal('privacy'); });

  // Account Deletion (Apple Guideline 5.1.1)
  if (btnCancelDeleteAccount) btnCancelDeleteAccount.addEventListener('click', closeDeleteAccountModal);
  if (btnConfirmDeleteAccount) {
    btnConfirmDeleteAccount.addEventListener('click', async () => {
      triggerHaptic('heavy');
      try {
        await fetch('/api/user/delete-account', { method: 'POST' });
      } catch (e) {}
      localStorage.removeItem('maison_interests');
      localStorage.removeItem('maison_ai_history');
      localStorage.removeItem('maison_recent_readings');
      localStorage.removeItem('maison_biometric_lock');
      closeDeleteAccountModal();
      showToast("Hesabınız ve tüm kişisel verileriniz kalıcı olarak silindi.");
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    });
  }

  // Quote Synergy Action Sheet
  if (btnCloseQuoteSheet) btnCloseQuoteSheet.addEventListener('click', closeQuoteActionSheet);
  if (actSaveToJournal) {
    actSaveToJournal.addEventListener('click', () => {
      if (state.capturedQuote) {
        const newNote = {
          id: 'note_' + Date.now(),
          text: `“${state.capturedQuote.text}” — ${state.capturedQuote.source}`,
          date: 'Bugün',
          category: 'Alıntı & Düşünce'
        };
        state.userNotes.unshift(newNote);
        if (MAISON_DATA && MAISON_DATA.currentUser) MAISON_DATA.currentUser.stats.journalCount += 1;
        triggerHaptic('success');
        showToast("Alıntı kişisel Journal'ınıza kaydedildi ✓");
      }
      closeQuoteActionSheet();
    });
  }
  if (actSaveToCollection) {
    actSaveToCollection.addEventListener('click', () => {
      triggerHaptic('medium');
      showToast("Alıntı 'İlham Verenler' seçkinize iliştirildi ✓");
      closeQuoteActionSheet();
    });
  }
  if (actDiscussInSalon) {
    actDiscussInSalon.addEventListener('click', () => {
      triggerHaptic('medium');
      closeQuoteActionSheet();
      setView('salon');
      showToast("Fikir Salona taşındı, tartışma açıldı.");
    });
  }

  // Legal Modal
  if (btnCloseLegalModal) btnCloseLegalModal.addEventListener('click', closeLegalModal);

  // Android Hardware Back Button & Popstate Traversal
  window.addEventListener('popstate', () => {
    handleAppBack();
  });

  function handleAppBack() {
    triggerHaptic('light');
    const modals = [
      { el: maisonAuthModal, close: closeAuthModal },
      { el: maisonDeleteAccountModal, close: closeDeleteAccountModal },
      { el: quoteActionSheet, close: closeQuoteActionSheet },
      { el: maisonLegalModal, close: closeLegalModal },
      { el: searchModal, close: closeSearchModal },
      { el: notificationCenterModal, close: closeNotificationCenter },
      { el: travelPlanModal, close: closeTravelPlanModal },
      { el: maisonCirclesModal, close: closeMaisonCirclesModal },
      { el: collabCollectionModal, close: closeCollabCollectionModal },
      { el: articleCommentsModal, close: closeArticleCommentsModal },
      { el: mHubModal, close: closeMHubModal }
    ];

    for (const m of modals) {
      if (m.el && (m.el.classList.contains('open') || m.el.classList.contains('active') || m.el.style.display === 'flex' || m.el.style.display === 'block')) {
        if (m.close) m.close();
        return true;
      }
    }

    if (state.currentView !== 'home') {
      goBack();
      return true;
    }

    showToast("Uygulamadan çıkmak için tekrar dokunun.");
    return false;
  }

  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
    window.Capacitor.Plugins.App.addListener('backButton', () => {
      handleAppBack();
    });
  }

  // -------------------------------------------------------------
  // 5. MAKALE YORUMLAR MODAL
  // -------------------------------------------------------------
  let currentArticleCommentId = 'slow_living';

  function openArticleCommentsModal(articleId = 'slow_living') {
    currentArticleCommentId = articleId;
    renderArticleCommentsList(articleId);
    if (articleCommentsModal) articleCommentsModal.classList.add('open');
    if (newCommentInput) {
      newCommentInput.value = '';
      setTimeout(() => newCommentInput.focus(), 200);
    }
    playGentleClick();
  }

  function closeArticleCommentsModal() {
    if (articleCommentsModal) articleCommentsModal.classList.remove('open');
    playGentleClick();
  }

  function renderArticleCommentsList(articleId) {
    if (!articleCommentsList) return;
    const comments = state.articleComments[articleId] || [];

    if (comments.length === 0) {
      articleCommentsList.innerHTML = `<div style="padding: 30px 0; text-align: center; color: var(--maison-taupe); font-size: 13px;">Bu yazıya henüz yorum yapılmamış. İlk düşünceyi siz paylaşın.</div>`;
      return;
    }

    articleCommentsList.innerHTML = comments.map(c => `
      <div class="comment-item">
        <img src="${c.avatar || '/images/editorial/author_deniz.jpg'}" class="comment-avatar">
        <div class="comment-bubble">
          <div class="comment-author-name">${c.author}</div>
          <div class="comment-text">${c.text}</div>
          <div class="comment-time">${c.time}</div>
        </div>
      </div>
    `).join('');
  }

  function submitArticleComment(articleId) {
    if (!newCommentInput) return;
    const text = newCommentInput.value.trim();
    if (!text) return;

    if (!state.articleComments[articleId]) {
      state.articleComments[articleId] = [];
    }

    const newC = {
      id: 'c_' + Date.now(),
      author: MAISON_DATA.currentUser.name,
      avatar: MAISON_DATA.currentUser.avatar,
      text: text,
      time: 'Şimdi'
    };

    state.articleComments[articleId].unshift(newC);
    newCommentInput.value = '';
    renderArticleCommentsList(articleId);
    playHarmonicChime();
    showToast("Düşünceniz paylaşıldı ✓");

    // Update comments button on article page if visible
    const btnC = document.getElementById('btnOpenArticleComments');
    const btnCBar = document.getElementById('btnOpenArticleCommentsBar');
    const count = state.articleComments[articleId].length;
    if (btnC) btnC.innerHTML = `<span>💬</span><span>Düşünceler & Yorumlar (${count})</span>`;
    if (btnCBar) btnCBar.innerHTML = `<span>💬</span><span>${count}</span>`;
  }

  if (btnCloseArticleComments) btnCloseArticleComments.addEventListener('click', closeArticleCommentsModal);
  if (btnSendComment) btnSendComment.addEventListener('click', () => submitArticleComment(currentArticleCommentId));
  if (newCommentInput) {
    newCommentInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitArticleComment(currentArticleCommentId);
    });
  }

  // Backdrop overlay click closures for all modals
  [notificationCenterModal, travelPlanModal, maisonCirclesModal, collabCollectionModal, articleCommentsModal, maisonAuthModal, maisonDeleteAccountModal, quoteActionSheet, maisonLegalModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          playGentleClick();
        }
      });
    }
  });

  // =============================================================
  // MAISON AI — PERSONAL CULTURAL INTELLIGENCE & CURATOR SERVICE
  // =============================================================
  const MaisonAIService = {
    provider: 'mock', // 'mock' or 'api' for future external LLM integration

    async query({ prompt, type = 'custom', context = {} }) {
      const lang = state.language || 'tr';
      const interests = state.userInterests || [];
      const connections = state.myConnections || [];
      const rooms = state.myRooms || [];
      const collabs = state.collabCollections || [];

      // Normalize prompt
      const p = (prompt || '').trim().toLowerCase();

      // 1. STARTER: BANA BİR ŞEY GÖSTER (starter_show_me)
      if (type === 'starter_show_me' || p.includes('bir şey göster') || p.includes('show me')) {
        return {
          userQuery: lang === 'en' ? 'Show me something' : 'Bana bir şey göster',
          editorialText: lang === 'en'
            ? "Today, I want to present you with a quiet discovery around Japanese ceramics and Wabi-Sabi. Lately, your affinity for architecture, tactile materials, and unhurried living points toward the serene, imperfect beauty of craft."
            : "Bugün sana seramik ve el işçiliği üzerine dingin bir keşif sunmak istiyorum. Son dönemde mimari, doğal malzemeler ve sakin yaşam pratikleri üzerine gösterdiğin ilgi, seramik dünyasının yalın estetiğiyle çok güçlü bir rezonans kuruyor.",
          rationale: lang === 'en'
            ? "Based on your recent selections: You have active interests in 'Architecture' and 'Design'. Your readings on tactile surfaces and craftsmanship suggest an affinity for raw, honest aesthetics."
            : "Son seçimlerinden dolayı: İlgi alanlarında 'Mimari' ve 'Tasarım' yer alıyor. Ayrıca doğal dokular ve zanaat odaklı okumaların bu yalın estetiğe yakın olduğunu gösteriyor.",
          linkedContent: {
            type: 'article',
            id: 'slow_living',
            badge: lang === 'en' ? 'CULTURE & CRAFT' : 'KÜLTÜR & ZANAAT',
            title: lang === 'en' ? 'Japanese Ceramic Tradition & Wabi-Sabi' : 'Japon Seramik Geleneği & Wabi-Sabi',
            subtitle: lang === 'en' ? 'Finding lasting elegance in imperfection and the soul of objects.' : 'Kusurlu olanın içindeki kalıcı güzellik ve nesnelerin ruhu.',
            image: '/images/editorial/craft_ceramic.jpg',
            curator: lang === 'en' ? 'Deniz Kaya • 6 min read' : 'Deniz Kaya • 6 dk okuma',
            actionLabel: lang === 'en' ? 'Read Story →' : 'Yazıyı Oku →'
          },
          followUps: [
            lang === 'en' ? 'Is there a Salon circle discussing this?' : 'Bu konu hakkında konuşan bir Salon çevresi var mı?',
            lang === 'en' ? 'Surprise me' : 'Beni şaşırt',
            lang === 'en' ? 'Suggest a 5-minute practice' : '5 dakikada yapabileceğim bir şey öner'
          ]
        };
      }

      // 2. STARTER: BENİ ŞAŞIRT (starter_surprise)
      if (type === 'starter_surprise' || p.includes('şaşırt') || p.includes('surprise')) {
        return {
          userQuery: lang === 'en' ? 'Surprise me' : 'Beni şaşırt',
          editorialText: lang === 'en'
            ? "Today, I won't recommend architecture or visual design. In your recent selections, I noticed an underlying search for stillness, rhythm, and breath. That is why I want to lead you into the realm of acoustic minimalism: like architecture, sound shapes empty space."
            : "Bugün sana alışkın olduğun mimari ve tasarım odaklı içerikleri önermeyeceğim. Seçimlerinde gözlemlediğim sadelik, ritim ve nefes arayışından yola çıkarak seni ses ve müzik dünyasına götürmek istiyorum. Tıpkı mimari gibi, müzik de boşluğu ve zamanı şekillendirir.",
          rationale: lang === 'en'
            ? "Guided by the principle: 'Know the user, but never trap them in a bubble.' We connected your appreciation for spatial balance to a non-visual medium—Nordic acoustic soundscapes."
            : "Kullanıcıyı tanı ama onun içine hapsolmasına izin verme ilkesi gereği: Yapısal formlara ve mekan duygusuna duyduğun ilgiyi, formu olmayan ama aynı huzuru veren bir alana (Nordik akustik manzaralar) bağladık.",
          linkedContent: {
            type: 'explore_dim',
            dim: 'muzikler',
            badge: lang === 'en' ? 'MUSIC & ACOUSTICS' : 'MÜZİK & AKUSTİK',
            title: lang === 'en' ? 'Nordic Jazz & The Acoustics of Silence' : 'Nordik Caz & Sessizliğin Akustiği',
            subtitle: lang === 'en' ? 'Minimalist Northern soundscapes in conversation with room architecture.' : 'Kuzey Avrupa\'nın minimalist ses manzaraları ve mekanla kurduğu diyalog.',
            image: '/images/editorial/culture_kyoto.jpg',
            curator: lang === 'en' ? 'Arda Sezgin • Album Review' : 'Arda Sezgin • Albüm İncelemesi',
            actionLabel: lang === 'en' ? 'Explore Music →' : 'Müzikleri Keşfet →'
          },
          followUps: [
            lang === 'en' ? 'Discover my taste' : 'Zevkimi keşfet',
            lang === 'en' ? 'Find someone like me' : 'Bana yakın birini bul',
            lang === 'en' ? 'Design a day' : 'Bir gün tasarla'
          ]
        };
      }

      // 3. STARTER: BİR GÜN TASARLA (starter_day)
      if (type === 'starter_day' || p.includes('gün tasarla') || p.includes('design a day') || p.includes('günlük plan')) {
        return {
          userQuery: lang === 'en' ? 'Design a day for me' : 'Bir gün tasarla',
          editorialText: lang === 'en'
            ? "Here is a bespoke, unhurried day woven from craftsmanship, architecture, and quiet moments:\n\n• 08:30 — Gentle awakening in Studio with 3 simple movements (5 min)\n• 11:00 — A slow espresso in a hidden courtyard of Sedad Hakkı Eldem's modernist legacy\n• 16:30 — Dropping into 'İstanbul Mimari' circle to see today's lively thoughts\n• 21:00 — Evening Dispatch wind-down & saving notes to your journal."
            : "Senin için telaşsız, zanaat ve mimariyle dokunmuş kişisel bir MAISON günü kurguladım:\n\n• 08:30 — Studio'da 3 basit yoga hareketiyle güne uyanış (5 dk)\n• 11:00 — Sedad Hakkı Eldem mimarisiyle çevrili avluda sakin bir kahve molası\n• 16:30 — 'İstanbul Mimari' çevresindeki güncel düşünce akışına göz atış\n• 21:00 — Akşam Bülteni ile sakinleşme ve günün rotasını kaydetme.",
          rationale: lang === 'en'
            ? "Curated by analyzing your selected interests and the natural cadence of your reading hours, designed strictly around slow living philosophy."
            : "Seçtiğin ilgi alanları ve MAISON'da en çok vakit geçirdiğin saatlerin ritmi incelenerek, yavaş yaşam (slow living) felsefesine uygun bir günlük akış oluşturuldu.",
          linkedContent: {
            type: 'collab',
            id: 'collab_istanbul_haftasonu',
            badge: lang === 'en' ? 'SHARED ROUTE' : 'ORTAK ROTA',
            title: lang === 'en' ? 'A Weekend in Istanbul' : 'İstanbul\'da Bir Hafta Sonu',
            subtitle: lang === 'en' ? 'You + 3 curators: Co-created hidden courtyards, seaside walks and cafe notes.' : 'Sen + 3 küratör: Gizli avlular, sahil yürüyüşleri ve tarihi pastaneler seçkisi.',
            image: '/images/editorial/arch_bauhaus.jpg',
            curator: lang === 'en' ? 'You + Mert, Defne, Selin' : 'Sen + Mert, Defne, Selin',
            actionLabel: lang === 'en' ? 'View Shared Route →' : 'Ortak Rotayı İncele →'
          },
          followUps: [
            lang === 'en' ? 'Start 5-minute Studio practice' : '5 dakikada yapabileceğim bir şey öner',
            lang === 'en' ? 'Find someone like me' : 'Bana yakın birini bul',
            lang === 'en' ? 'What can I add to this collection?' : 'Bu koleksiyona ne ekleyebilirim?'
          ]
        };
      }

      // 4. STARTER: ZEVKİMİ KEŞFET (starter_taste)
      if (type === 'starter_taste' || p.includes('zevkimi keşfet') || p.includes('taste') || p.includes('profilim')) {
        return {
          userQuery: lang === 'en' ? 'Discover my taste' : 'Zevkimi keşfet',
          editorialText: lang === 'en'
            ? "The common thread across your saved writings, circles, and interests is 'Rational Elegance'. You gravitate toward materials in their authentic state (raw ceramic, fair-faced concrete, oiled wood) and spaces that gently slow you down. Your aesthetic compass rests at the intersection of Scandinavian minimalism and Japanese philosophy."
            : "MAISON'daki kaydettiğin yazılar, çevrelerin ve ilgi alanlarının ortak paydası: 'Rasyonel Zarafet'. Gösterişten uzak, malzemeyi olduğu gibi kabullenen (ham seramik, brüt beton, doğal ahşap) ve insanı yavaşlatan mekanlara derin bir çekim hissediyorsun. Estetik pusulan İskandinav sadeliği ile Japon Wabi-Sabi felsefesinin kesişiminde duruyor.",
          rationale: lang === 'en'
            ? "Synthesized through semantic matching across your saved 'Slow Living Manifesto', membership in 'İstanbul Mimari', and selected tags in Design & Craft."
            : "Kaydettiğin 'Yavaş Yaşam Manifestosu', üye olduğun 'İstanbul Mimari' çevresi ve seçtiğin 'Tasarım / Zanaat' etiketlerinin semantik analizi sonucunda elde edildi.",
          linkedContent: {
            type: 'collections',
            badge: lang === 'en' ? 'TASTE SYNTHESIS' : 'ZEVK ANALİZİ',
            title: lang === 'en' ? 'Wabi-Sabi & Modernist Equilibrium' : 'Wabi-Sabi ve Modernizm Dengesi',
            subtitle: lang === 'en' ? 'Curated collections matching your aesthetic signature.' : 'Kişisel estetik imzanıza göre eşleşen kayıt ve koleksiyonlar.',
            image: '/images/editorial/author_deniz.jpg',
            curator: 'MAISON Intelligence',
            actionLabel: lang === 'en' ? 'Go to Collections →' : 'Koleksiyonlarıma Git →'
          },
          followUps: [
            lang === 'en' ? 'Find someone who shares this taste' : 'Bana yakın birini bul',
            lang === 'en' ? 'Surprise me' : 'Beni şaşırt',
            lang === 'en' ? 'What can I add to my collection?' : 'Bu koleksiyona ne ekleyebilirim?'
          ]
        };
      }

      // 5. STARTER: BANA YAKIN BİRİNİ BUL / PEOPLE (starter_people)
      if (type === 'starter_people' || p.includes('yakın birini bul') || p.includes('benzer insan') || p.includes('people') || p.includes('someone like me')) {
        const conn = connections.find(c => c.id === 'conn_mert') || connections[0] || {
          id: 'conn_mert',
          name: 'Mert',
          role: 'Mimar & Kent Araştırmacısı',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
          quote: 'İyi mimarinin insanı yavaşlattığına inanıyorum.'
        };

        return {
          userQuery: lang === 'en' ? 'Find someone with similar interests' : 'Bana yakın birini bul',
          editorialText: lang === 'en'
            ? "I found someone who shares your dedication to architectural heritage, urban research, and analogue details: Mert.\nMert actively exchanges ideas in the 'İstanbul Mimari' circle and co-creates the 'Boğaz Kıyıları' collection with you. No follower counts or vanity metrics—purely cultural alignment."
            : "Senin gibi mimari miras, kent araştırması ve analog detaylara tutkulu birini buldum: Mert.\nMert de senin gibi 'İstanbul Mimari' çevresinde aktif fikir paylaşıyor ve birlikte oluşturduğunuz 'Boğaz Kıyıları' koleksiyonuna katkı veriyor. Takipçi sayısı veya gürültü olmadan, sadece kültürel bir yakınlık.",
          rationale: lang === 'en'
            ? "Cultural Affinity: 96%. Mutual Interests: Architecture, Photography, Istanbul. Mutual Circles: İstanbul Mimari. Mutual Collections: Boğaz Kıyıları."
            : "Kültürel Uyum Skoru: %96. Ortak İlgi Alanları: Mimari, Fotoğraf, İstanbul. Ortak Çevreler: İstanbul Mimari. Ortak Koleksiyonlar: Boğaz Kıyıları.",
          linkedContent: {
            type: 'person_modal',
            id: conn.id,
            badge: lang === 'en' ? 'CULTURAL AFFINITY • 96%' : 'KÜLTÜREL BAĞLANTI • %96 UYUM',
            title: conn.name,
            subtitle: `${conn.role || 'Mimar & Araştırmacı'} • Karaköy, İstanbul`,
            image: conn.avatar,
            curator: `“${conn.quote || 'İyi mimarinin insanı yavaşlattığına inanıyorum.'}”`,
            actionLabel: lang === 'en' ? 'View Cultural Profile →' : 'Kültürel Profili Gör →'
          },
          followUps: [
            lang === 'en' ? 'Invite to shared room' : 'Ortak odaya davet et',
            lang === 'en' ? 'Is there a Salon circle discussing this?' : 'Bu konu hakkında konuşan bir Salon çevresi var mı?',
            lang === 'en' ? 'Show me something' : 'Bana bir şey göster'
          ]
        };
      }

      // 6. INTENT: KOLEKSİYONA NE EKLEYEBİLİRİM?
      if (p.includes('koleksiyon') || p.includes('ekleyebilirim') || p.includes('collection')) {
        return {
          userQuery: prompt,
          editorialText: lang === 'en'
            ? "Your 'A Weekend in Istanbul' collection has established wonderful morning coffee spots and historic seaside paths. However, it currently lacks a quiet contemporary art nook or open-air sculpture stop.\nI suggest adding 'Karaköy Nordstern Han Courtyard' or the quiet sculpture walk in Maçka Park."
            : "Mevcut 'İstanbul'da Bir Hafta Sonu' koleksiyonunda mekanlar ve sahil kahvesi durakları çok dengeli. Ancak henüz çağdaş bir galeri veya açık hava heykel durağı eksik.\nKoleksiyonuna Karaköy'deki 'Nordstern Han Avlusu'nu eklemeni öneririm. Sabah erken saatlerde cephe detayları ve avludaki sessiz kahve molası harika bir denge sunacaktır.",
          rationale: lang === 'en'
            ? "Based on analysis of 4 existing items in your shared collection: The route is heavily focused on the Bosphorus shoreline. Adding an urban architectural courtyard in Karaköy creates harmonic depth."
            : "Koleksiyonun mevcut 4 kaydı incelendiğinde rota yoğunlukla boğaz hattında. Karaköy aksına doğru küçük bir kültürel derinleşme zenginlik katacaktır.",
          linkedContent: {
            type: 'collab_add',
            title: 'Karaköy Nordstern Han Notları',
            badge: lang === 'en' ? 'COLLECTION SUGGESTION' : 'KOLEKSİYON ÖNERİSİ',
            subtitle: lang === 'en' ? 'Morning light facade details and quiet courtyard espresso.' : 'Sabah ışığında cephe detayları ve avludaki sessiz kahve molası.',
            image: '/images/editorial/art_exhibition.jpg',
            curator: lang === 'en' ? 'Curator Note' : 'Küratör Önerisi',
            actionLabel: lang === 'en' ? '+ Add to Shared Collection' : '+ Ortak Koleksiyona Ekle'
          },
          followUps: [
            lang === 'en' ? 'View shared collection' : 'Ortak koleksiyonu incele',
            lang === 'en' ? 'Design a day' : 'Bir gün tasarla',
            lang === 'en' ? 'Surprise me' : 'Beni şaşırt'
          ]
        };
      }

      // 7. INTENT: SALON / ÇEVRE / KONUŞAN VAR MI?
      if (p.includes('çevre') || p.includes('salon') || p.includes('konuşan') || p.includes('circle') || p.includes('discuss')) {
        return {
          userQuery: prompt,
          editorialText: lang === 'en'
            ? "Yes! There is a living circle in Salon with 28 members actively in discussion: 'İstanbul Mimari'. Right now, Mert and Selin are exchanging thoughts on Sedad Hakkı Eldem's modernist public structures and residential rationalism."
            : "Evet! Şu anda 28 kişinin bulunduğu 'İstanbul Mimari' çevresinde bu konu canlı olarak konuşuluyor. Mert, Selin ve Defne, Sedad Hakkı Eldem'in Taşlık Kahvesi ve Cumhuriyet dönemi kamu yapılarındaki rasyonel estetik üzerine düşüncelerini paylaşıyor.",
          rationale: lang === 'en'
            ? "Real-time Salon Pulse: 12 members are currently active in this circle, with 144 cultural thoughts recorded."
            : "Salon Canlı Nabız verisi: Şu anda 12 kişi bu çevrede aktif olarak fikir paylaşıyor ve 144 düşünce kaydı bulunuyor.",
          linkedContent: {
            type: 'circle',
            id: 'c_mimari',
            badge: lang === 'en' ? 'LIVING SALON • 28 MEMBERS' : 'CANLI SALON • 28 KİŞİ',
            title: lang === 'en' ? 'İstanbul Architecture Circle' : 'İstanbul Mimari Çevresi',
            subtitle: lang === 'en' ? '“Which is the finest example of modernist architecture in Istanbul?”' : '“İstanbul\'da modernist mimarinin en iyi örneği sizce hangisi?”',
            image: '/images/editorial/arch_bauhaus.jpg',
            curator: lang === 'en' ? 'Mert, Selin & Defne are discussing' : 'Mert, Selin ve Defne konuşuyor',
            actionLabel: lang === 'en' ? 'Go to Circle →' : 'Salona / Çevreye Git →'
          },
          followUps: [
            lang === 'en' ? 'Find someone in this circle' : 'Bu çevreden birini bul',
            lang === 'en' ? 'Show me something else' : 'Bana bir şey göster',
            lang === 'en' ? 'Suggest a 5-minute practice' : '5 dakikada yapabileceğim bir şey öner'
          ]
        };
      }

      // 8. INTENT: 5 DAKİKA / STUDIO / HIZLI PRATİK
      if (p.includes('5 dakika') || p.includes('hızlı') || p.includes('studio') || p.includes('yoga') || p.includes('nefes') || p.includes('minute')) {
        return {
          userQuery: prompt,
          editorialText: lang === 'en'
            ? "To pause the day's rush for just a moment, I suggest a 3-minute physical practice in Studio: 3 Simple Yoga Movements. No special equipment or space required; you can step away from your desk right now."
            : "Günün yoğunluğunu bir anlığına durdurmak için Studio'da 3 dakikalık bir beden pratiği öneriyorum: 3 Basit Yoga Hareketi. Hiçbir ekipmana ihtiyaç duymadan, çalışma masandan kalkıp uygulayabilirsin.",
          rationale: lang === 'en'
            ? "Tailored to your recent Studio interests in mindful movement and the natural need for a midday reset."
            : "Son Studio izleme alışkanlıkların ve günün bu saatindeki dinginleşme ihtiyacın dikkate alındı.",
          linkedContent: {
            type: 'studio',
            id: 'vid_yoga_sabah',
            badge: lang === 'en' ? 'STUDIO • 03:12' : 'STUDIO • 03:12',
            title: lang === 'en' ? '3 Simple Yoga Movements' : '3 Basit Yoga Hareketi',
            subtitle: lang === 'en' ? 'Gentle awakening to start the day or reset your focus.' : 'Sabaha daha sakin başlamak veya gün ortasında nefes almak için.',
            image: '/images/editorial/studio_yoga_morning.jpg',
            curator: 'Zeynep Oral • Yoga & Beden',
            actionLabel: lang === 'en' ? 'Watch in Studio →' : 'Studio\'da İzle →'
          },
          followUps: [
            lang === 'en' ? 'Design a day' : 'Bir gün tasarla',
            lang === 'en' ? 'Show me something' : 'Bana bir şey göster',
            lang === 'en' ? 'Surprise me' : 'Beni şaşırt'
          ]
        };
      }

      // 9. GENERAL / CONVERSATIONAL CULTURAL QUERY MATCH
      let matchedArticle = null;
      if (p.includes('italya') || p.includes('amalfi') || p.includes('roma')) {
        matchedArticle = {
          title: 'Amalfi Kıyılarında Zaman',
          sub: 'İtalya\'nın güneyinde limon bahçeleri ve seramik atölyeleri.',
          img: '/images/editorial/slow_living_tuscany.jpg',
          badge: 'SEYAHAT & İTALYA',
          author: 'Canan Demir',
          id: 'amalfi'
        };
      } else if (p.includes('mimari') || p.includes('istanbul') || p.includes('avlu')) {
        matchedArticle = {
          title: 'İstanbul\'un Gizli Avluları',
          sub: 'Tarihi yarımadada sessizliğin korunduğu mekanlar.',
          img: '/images/editorial/art_exhibition.jpg',
          badge: 'MİMARİ & KENT',
          author: 'Murat Vural',
          id: 'istanbul_avlular'
        };
      } else {
        matchedArticle = {
          title: 'Yavaş Yaşam Manifestosu',
          sub: 'Zamanı yavaşlatmanın ve sadeleşmenin incelikleri.',
          img: '/images/editorial/slow_living_tuscany.jpg',
          badge: 'YAŞAM & FELSEFE',
          author: 'Deniz Kaya',
          id: 'slow_living'
        };
      }

      return {
        userQuery: prompt,
        editorialText: lang === 'en'
          ? `Regarding "${prompt}": In the MAISON ecosystem, this touches upon craftsmanship, stillness, and human scale. Here is a curated piece that explores this question with depth.`
          : `"${prompt}" üzerine: MAISON dünyasında bu konu, zanaat, dinginlik ve insani ölçek ekseninde karşılık buluyor. Bu düşünceyi derinleştiren özel bir editoryal içeriği senin için seçtim.`,
        rationale: lang === 'en'
          ? `Selected because this aligns directly with your recorded interests in ${interests.slice(0, 3).join(', ') || 'Culture & Living'}.`
          : `İlgi alanların (${interests.slice(0, 3).join(', ') || 'Kültür & Yaşam'}) ve MAISON editoryal arşivi arasındaki tematik uyum gözetilerek seçildi.`,
        linkedContent: {
          type: 'article',
          id: matchedArticle.id,
          badge: matchedArticle.badge,
          title: matchedArticle.title,
          subtitle: matchedArticle.sub,
          image: matchedArticle.img,
          curator: `${matchedArticle.author} • MAISON Oku`,
          actionLabel: lang === 'en' ? 'Read Story →' : 'Yazıyı Oku →'
        },
        followUps: [
          lang === 'en' ? 'Is there a Salon circle discussing this?' : 'Bu konu hakkında konuşan bir Salon çevresi var mı?',
          lang === 'en' ? 'Surprise me' : 'Beni şaşırt',
          lang === 'en' ? 'Find someone like me' : 'Bana yakın birini bul'
        ]
      };
    }
  };

  // =============================================================
  // MAISON AI — PERSONAL CULTURAL INTELLIGENCE & CURATOR VIEW
  // =============================================================
  function renderMaisonAIView(params = {}) {
    if (!appScreenBody) return;
    const lang = state.language || 'tr';

    const history = state.aiChatHistory || [];
    const hasHistory = history.length > 0;

    let historyHtml = '';
    if (hasHistory) {
      historyHtml = `
        <div class="ai-feed-container" id="aiFeedContainer">
          ${history.map((msg, idx) => `
            <div class="ai-message-item" id="aiMsg_${idx}">
              ${msg.userQuery ? `
                <div class="ai-user-query-pill">
                  <span>${msg.userQuery}</span>
                </div>
              ` : ''}

              <div class="ai-response-card">
                <div class="ai-curator-header">
                  <div class="ai-curator-brand">
                    <span class="ai-curator-dot"></span>
                    <span>MAISON KÜRATÖRÜ</span>
                  </div>
                  ${msg.time ? `<span style="font-size: 10px; color: var(--maison-taupe);">${msg.time}</span>` : ''}
                </div>

                <div class="ai-editorial-text">${(msg.editorialText || '').replace(/\n/g, '<br>')}</div>

                ${msg.rationale ? `
                  <div class="ai-why-accordion">
                    <button class="ai-why-btn" data-toggle-why="${idx}">
                      <span>${t('ai_why_recommended', 'Neden bunu önerdin?')}</span>
                      <span>▾</span>
                    </button>
                    <div class="ai-why-content" id="aiWhyContent_${idx}">
                      ${msg.rationale}
                    </div>
                  </div>
                ` : ''}

                ${msg.linkedContent ? `
                  <div class="ai-linked-card" data-linked-type="${msg.linkedContent.type}" data-linked-id="${msg.linkedContent.id || ''}" data-linked-dim="${msg.linkedContent.dim || ''}">
                    <img src="${msg.linkedContent.image || '/images/editorial/craft_ceramic.jpg'}" class="ai-linked-thumb" alt="${msg.linkedContent.title}">
                    <div class="ai-linked-info">
                      <div class="ai-linked-badge">${msg.linkedContent.badge || 'KEŞİF'}</div>
                      <div class="ai-linked-title">${msg.linkedContent.title}</div>
                      <div class="ai-linked-sub">${msg.linkedContent.subtitle}</div>
                      <button class="ai-linked-action-btn" data-action-btn="${idx}">
                        ${msg.linkedContent.actionLabel || 'Keşfet →'}
                      </button>
                    </div>
                  </div>
                ` : ''}

                ${msg.followUps && msg.followUps.length > 0 ? `
                  <div class="ai-followups-wrap">
                    ${msg.followUps.map(fu => `
                      <button class="ai-followup-pill" data-followup-text="${fu}">${fu}</button>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: center; margin-top: 18px; margin-bottom: 8px;">
          <button id="btnResetAIChat" style="background: none; border: none; font-size: 11.5px; color: var(--maison-taupe); text-decoration: underline; cursor: pointer; padding: 6px 12px;">
            ${lang === 'en' ? 'Reset Conversation' : 'Sohbeti Temizle'}
          </button>
        </div>
      `;
    }

    const startersHtml = `
      <div class="ai-starters-section" id="aiStartersSection" style="${hasHistory ? 'margin-top: 20px;' : ''}">
        <span class="ai-section-label">${lang === 'en' ? 'STARTING POINTS' : 'BAŞLANGIÇ NOKTALARI'}</span>
        <div class="ai-starters-grid">
          <div class="ai-starter-card" data-starter-type="starter_show_me">
            <div class="ai-starter-text-wrap">
              <div class="ai-starter-title">${t('ai_starter_show_me', 'Bana Bir Şey Göster')}</div>
              <div class="ai-starter-sub">${t('ai_starter_show_me_desc', 'Bugün henüz keşfetmediğim bir şey bul.')}</div>
            </div>
            <span class="ai-starter-arrow">→</span>
          </div>

          <div class="ai-starter-card" data-starter-type="starter_surprise">
            <div class="ai-starter-text-wrap">
              <div class="ai-starter-title">${t('ai_starter_surprise', 'Beni Şaşırt')}</div>
              <div class="ai-starter-sub">${t('ai_starter_surprise_desc', 'Zevklerimin biraz dışına çıkar.')}</div>
            </div>
            <span class="ai-starter-arrow">→</span>
          </div>

          <div class="ai-starter-card" data-starter-type="starter_day">
            <div class="ai-starter-text-wrap">
              <div class="ai-starter-title">${t('ai_starter_day', 'Bir Gün Tasarla')}</div>
              <div class="ai-starter-sub">${t('ai_starter_day_desc', 'Bana kişisel bir MAISON günü oluştur.')}</div>
            </div>
            <span class="ai-starter-arrow">→</span>
          </div>

          <div class="ai-starter-card" data-starter-type="starter_taste">
            <div class="ai-starter-text-wrap">
              <div class="ai-starter-title">${t('ai_starter_taste', 'Zevkimi Keşfet')}</div>
              <div class="ai-starter-sub">${t('ai_starter_taste_desc', 'MAISON\'daki seçimlerimden ortak noktaları bul.')}</div>
            </div>
            <span class="ai-starter-arrow">→</span>
          </div>

          <div class="ai-starter-card" data-starter-type="starter_people">
            <div class="ai-starter-text-wrap">
              <div class="ai-starter-title">${t('ai_starter_people', 'Bana Yakın Birini Bul')}</div>
              <div class="ai-starter-sub">${t('ai_starter_people_desc', 'Benzer kültürel ilgileri olan insanları keşfet.')}</div>
            </div>
            <span class="ai-starter-arrow">→</span>
          </div>
        </div>
      </div>
    `;

    appScreenBody.innerHTML = `
      <div class="maison-ai-view-container">
        <!-- 1. Header -->
        <div class="ai-header-wrap">
          <button class="ai-back-btn" id="btnBackFromAI">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>${lang === 'en' ? 'Home' : 'Ana Sayfa'}</span>
          </button>

          <div class="ai-badge-row">
            <span class="ai-badge">${t('ai_title', 'MAISON AI')}</span>
          </div>
          <h1 class="ai-title">${t('ai_title', 'MAISON AI')}</h1>
          <div class="ai-subtitle">${t('ai_subtitle', 'Bugün neyi keşfetmek istersin?')}</div>
          <p class="ai-desc">${t('ai_desc', 'Kişisel kültür küratörünüz. Zevklerinizden, okumalarınızdan ve çevrelerinizden ilham alarak MAISON dünyasını birbirine bağlar.')}</p>
        </div>

        <!-- 2. Input Box -->
        <div class="ai-input-wrap">
          <div class="ai-input-box">
            <input type="text" id="aiInputField" class="ai-input-field" placeholder="${t('ai_placeholder', 'Aklındaki şeyi yaz...')}" autocomplete="off">
            <button class="ai-send-btn" id="btnSendAIQuery" aria-label="Sor">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        <!-- 3. Starters (If no history, shown first) -->
        ${!hasHistory ? startersHtml : ''}

        <!-- 4. Messages Feed -->
        ${historyHtml}

        <!-- 5. Starters below history (if history exists) -->
        ${hasHistory ? startersHtml : ''}
      </div>
    `;

    // Wire events
    document.getElementById('btnBackFromAI')?.addEventListener('click', () => {
      playGentleClick();
      goBack();
    });

    const inputField = document.getElementById('aiInputField');
    const sendBtn = document.getElementById('btnSendAIQuery');

    const handleQuerySubmit = async (queryText, type = 'custom') => {
      const text = (queryText || '').trim();
      if (!text && type === 'custom') return;

      playGentleClick();
      if (inputField) inputField.value = '';

      // Call MaisonAIService
      const res = await MaisonAIService.query({ prompt: text, type });
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      state.aiChatHistory.push({
        ...res,
        time: timeStr
      });
      localStorage.setItem('maison_ai_history', JSON.stringify(state.aiChatHistory));

      playHarmonicChime();
      renderMaisonAIView();

      // Scroll to bottom of the new response smoothly
      setTimeout(() => {
        const lastMsg = document.querySelector('.ai-message-item:last-of-type');
        if (lastMsg) lastMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    };

    sendBtn?.addEventListener('click', () => {
      if (inputField) handleQuerySubmit(inputField.value, 'custom');
    });

    inputField?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleQuerySubmit(inputField.value, 'custom');
      }
    });

    // Wire starter cards
    document.querySelectorAll('[data-starter-type]').forEach(card => {
      card.addEventListener('click', () => {
        const starterType = card.dataset.starterType;
        handleQuerySubmit('', starterType);
      });
    });

    // Wire follow-up pills
    document.querySelectorAll('[data-followup-text]').forEach(pill => {
      pill.addEventListener('click', () => {
        const fu = pill.dataset.followupText;
        handleQuerySubmit(fu, 'custom');
      });
    });

    // Wire "Neden bunu önerdin?" toggles
    document.querySelectorAll('[data-toggle-why]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.dataset.toggleWhy;
        const content = document.getElementById(`aiWhyContent_${idx}`);
        if (content) {
          content.classList.toggle('is-open');
          btn.classList.toggle('is-open');
          playGentleClick();
        }
      });
    });

    // Wire linked card action buttons
    document.querySelectorAll('[data-action-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = btn.dataset.actionBtn;
        const msg = state.aiChatHistory[idx];
        if (!msg || !msg.linkedContent) return;

        playGentleClick();
        const lc = msg.linkedContent;
        if (lc.type === 'article') {
          setView('article', { id: lc.id || 'slow_living' });
        } else if (lc.type === 'studio') {
          setView('studio_detail', { id: lc.id || 'vid_yoga_sabah' });
        } else if (lc.type === 'circle') {
          setView('circle_detail', { id: lc.id || 'c_mimari' });
        } else if (lc.type === 'person_modal') {
          openConnectionDetailModal(lc.id || 'conn_mert');
        } else if (lc.type === 'collab') {
          openCollabCollectionModal(lc.id || 'collab_istanbul_haftasonu');
        } else if (lc.type === 'collab_add') {
          openCollabCollectionModal('collab_istanbul_haftasonu');
          const addModal = document.getElementById('addCollabItemModal');
          if (addModal) {
            addModal.style.display = 'flex';
            const titleInp = document.getElementById('collabItemTitleInput');
            const noteInp = document.getElementById('collabItemNoteInput');
            if (titleInp) titleInp.value = lc.title || '';
            if (noteInp) noteInp.value = lc.subtitle || '';
          }
        } else if (lc.type === 'explore_dim') {
          setView('explore_dim', { dim: lc.dim || 'muzikler' });
        } else if (lc.type === 'collections') {
          setView('collections');
        }
      });
    });

    // Wire Reset Chat button
    document.getElementById('btnResetAIChat')?.addEventListener('click', () => {
      playGentleClick();
      state.aiChatHistory = [];
      localStorage.removeItem('maison_ai_history');
      renderMaisonAIView();
    });
  }

  // -------------------------------------------------------------
  // MAISON — M BUTONU / ÖZEL MAISON DÜNYASI (Article 10 Overhaul)
  // -------------------------------------------------------------
  const mPortalTitle = document.getElementById('mPortalTitle');
  const mPortalSubtitle = document.getElementById('mPortalSubtitle');
  const mLiveScroll = document.getElementById('mLiveScroll');
  const mFeaturedDuo = document.getElementById('mFeaturedDuo');
  const mPeopleList = document.getElementById('mPeopleList');
  const mCirclesGrid = document.getElementById('mCirclesGrid');
  const mSurpriseContainer = document.getElementById('mSurpriseContainer');
  const mCollabList = document.getElementById('mCollabList');
  const mInvitationsList = document.getElementById('mInvitationsList');
  const mInvitesCount = document.getElementById('mInvitesCount');
  const mIntentionsBar = document.getElementById('mIntentionsBar');
  const mUniverseGrid = document.getElementById('mUniverseGrid');
  const mSheetHandle = document.getElementById('mSheetHandle');

  let currentSurpriseIndex = 0;

  function openMWorldPortal() {
    playGentleClick();
    renderMWorldPortal();
    mHubModal.classList.add('open');
    document.body.classList.add('m-hub-active');
  }

  function closeMWorldPortal() {
    mHubModal.classList.remove('open');
    document.body.classList.remove('m-hub-active');
    playGentleClick();
  }

  function renderMWorldPortal() {
    const mw = (window.MAISON_DATA && window.MAISON_DATA.mWorld) || {};

    // 0. Header Subtitle
    if (mPortalSubtitle && mw.welcomeQuotes) {
      const randomQuote = mw.welcomeQuotes[Math.floor(Math.random() * mw.welcomeQuotes.length)];
      mPortalSubtitle.textContent = randomQuote;
    }

    // 0b. MAISON AI Quick Entry
    const btnMHubAI = document.getElementById('btnMHubToAI');
    if (btnMHubAI) {
      btnMHubAI.onclick = () => {
        closeMWorldPortal();
        setView('maison_ai');
      };
    }

    // 1. Şu An MAISON'da (Canlı Nabız)
    if (mLiveScroll && mw.liveDiscussions) {
      mLiveScroll.innerHTML = mw.liveDiscussions.map(item => `
        <div class="m-live-card" data-room-id="${item.roomId}">
          <div class="m-live-meta">
            <span class="m-live-badge"><span class="m-pulse-dot" style="width:6px; height:6px;"></span> ${item.time}</span>
            <span class="m-live-people">${item.activeCount} kişi</span>
          </div>
          <div class="m-live-text">${item.desc}</div>
          <div class="m-live-cta">Odaya Katıl &rarr;</div>
        </div>
      `).join('');

      mLiveScroll.querySelectorAll('.m-live-card').forEach(card => {
        card.addEventListener('click', () => {
          const roomId = card.dataset.roomId;
          closeMWorldPortal();
          setView('room', { id: roomId });
        });
      });
    }

    // 2. Birini Tanı & MAISON Match (Duo)
    if (mFeaturedDuo) {
      const dm = mw.dailyMatch || {};
      const mm = mw.maisonMatch || {};

      mFeaturedDuo.innerHTML = `
        <!-- Birini Tanı (Günün Eşleşmesi) -->
        <div class="m-match-card">
          <span class="m-card-badge-top">Günün Eşleşmesi • %${dm.matchScore || 94} Uyum</span>
          <div class="m-person-header">
            <img src="${dm.avatar}" alt="${dm.name}" class="m-person-avatar">
            <div class="m-person-info">
              <h4>${dm.name}</h4>
              <p>${dm.title}</p>
            </div>
          </div>
          <div class="m-quote-box">"${dm.quote}"</div>
          <div class="m-tags-row">
            ${(dm.mutualTags || []).map(t => `<span class="m-mini-tag">${t}</span>`).join('')}
          </div>
          <div class="m-card-actions">
            <button class="m-btn-primary" id="btnDailyMatchConnect">Tanış</button>
            <button class="m-btn-secondary" id="btnDailyMatchProfile">Profili Gör</button>
          </div>
        </div>

        <!-- MAISON Match (Entelektüel Yakınlık) -->
        <div class="m-match-card golden-tint">
          <span class="m-card-badge-top" style="background:#C5A059; color:#1A1816;">%${mm.affinityPercent || 89} Zevk Uyumu</span>
          <div class="m-person-header">
            <img src="${mm.avatar}" alt="${mm.targetName}" class="m-person-avatar">
            <div class="m-person-info">
              <h4>Sen + ${mm.targetName}</h4>
              <p>${mm.targetRole}</p>
            </div>
          </div>
          <div style="font-size: 12px; font-weight:600; color:var(--maison-charcoal); margin-bottom: 4px;">${mm.sharedSummary}</div>
          <div style="font-size: 11.5px; color:#6B6155; line-height: 1.4; margin-bottom: 12px;">"${mm.detailedNote}"</div>
          <div class="m-tags-row">
            ${(mm.sharedItems || []).map(it => `<span class="m-mini-tag" style="background:#EBE3D5;">${it}</span>`).join('')}
          </div>
          <div class="m-card-actions">
            <button class="m-btn-primary" id="btnMaisonMatchChat" style="background:#8C7A6B;">Sohbet Başlat</button>
            <button class="m-btn-secondary" id="btnMaisonMatchRoom">Ortak Odaya Git</button>
          </div>
        </div>
      `;

      const btnConnect = document.getElementById('btnDailyMatchConnect');
      if (btnConnect) {
        btnConnect.addEventListener('click', () => {
          closeMWorldPortal();
          setView('person_detail', { id: dm.id || 'selin_arslan', action: 'connect' });
        });
      }

      const btnProfile = document.getElementById('btnDailyMatchProfile');
      if (btnProfile) {
        btnProfile.addEventListener('click', () => {
          closeMWorldPortal();
          setView('person_detail', { id: dm.id || 'selin_arslan' });
        });
      }

      const btnChat = document.getElementById('btnMaisonMatchChat');
      if (btnChat) {
        btnChat.addEventListener('click', () => {
          closeMWorldPortal();
          setView('salon');
          showToast(`${mm.targetName} ile özel kültürel diyalog salonu açıldı.`);
        });
      }

      const btnRoom = document.getElementById('btnMaisonMatchRoom');
      if (btnRoom) {
        btnRoom.addEventListener('click', () => {
          closeMWorldPortal();
          setView('room', { id: 'room_sanat' });
        });
      }
    }

    // 3. İnsanları Keşfet (People List)
    if (mPeopleList && mw.suggestedPeople) {
      mPeopleList.innerHTML = mw.suggestedPeople.map(p => `
        <div class="m-people-item" data-person-id="${p.id}" style="cursor: pointer;">
          <div class="m-people-left">
            <img src="${p.avatar}" alt="${p.name}" class="m-people-thumb">
            <div class="m-people-details">
              <div class="m-people-name-row">
                <span class="m-people-name">${p.name}</span>
                <span style="font-size:10px; color:#C5A059;">•</span>
                <span class="m-people-role">${p.title}</span>
              </div>
              <div class="m-people-note">${p.mutualNote}</div>
            </div>
          </div>
          <button class="m-people-action-btn" data-person-id="${p.id}" data-person-name="${p.name}">Tanış</button>
        </div>
      `).join('');

      mPeopleList.querySelectorAll('.m-people-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = btn.dataset.personId || 'selin_arslan';
          closeMWorldPortal();
          setView('person_detail', { id: pId, action: 'connect' });
        });
      });

      mPeopleList.querySelectorAll('.m-people-item').forEach(item => {
        item.addEventListener('click', () => {
          const pId = item.dataset.personId || 'selin_arslan';
          closeMWorldPortal();
          setView('person_detail', { id: pId });
        });
      });
    }

    // 4. MAISON Çevreleri (Circles)
    if (mCirclesGrid && mw.circles) {
      mCirclesGrid.innerHTML = mw.circles.map(c => `
        <div class="m-circle-card" data-circle-id="${c.id}">
          <div class="m-circle-top">
            <span class="m-circle-icon">${c.icon}</span>
            <span class="m-circle-members">${c.members} üye</span>
          </div>
          <div>
            <div class="m-circle-name">${c.name}</div>
            <div class="m-circle-topic">${c.activeTopic}</div>
          </div>
          <button class="m-circle-btn ${state.joinedCircles.includes(c.id) ? 'joined' : ''}" data-circle-id="${c.id}">
            ${state.joinedCircles.includes(c.id) ? 'Katıldın ✓' : 'Çevreye Katıl'}
          </button>
        </div>
      `).join('');

      mCirclesGrid.querySelectorAll('.m-circle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const cid = btn.dataset.circleId;
          const circle = mw.circles.find(x => x.id === cid);
          if (circle) {
            if (!state.joinedCircles.includes(cid)) {
              state.joinedCircles.push(cid);
              localStorage.setItem('maison_joined_circles', JSON.stringify(state.joinedCircles));
              circle.joined = true;
              circle.members += 1;
              btn.classList.add('joined');
              btn.textContent = 'Katıldın ✓';
              playHarmonicChime();
              showToast(`'${circle.name}' çevresine katıldınız. Salon'a eklendi ✓`);
            }
            closeMWorldPortal();
            setView('circle_detail', { id: cid });
          }
        });
      });

      mCirclesGrid.querySelectorAll('.m-circle-card').forEach(card => {
        card.addEventListener('click', () => {
          const cid = card.dataset.circleId;
          closeMWorldPortal();
          setView('circle_detail', { id: cid });
        });
      });
    }

    // 5. Beni Şaşırt (Serendipity Generator)
    renderSurpriseCard();

    // 6. Ortak Koleksiyonlar
    if (mCollabList && mw.collaborativeCollections) {
      mCollabList.innerHTML = mw.collaborativeCollections.map(col => `
        <div class="m-collab-card" data-collab-id="${col.id}">
          <img src="${col.cover}" alt="${col.title}" class="m-collab-img">
          <div class="m-collab-body">
            <div class="m-collab-title">${col.title}</div>
            <div class="m-collab-members">${col.participants.join(' + ')}</div>
            <span class="m-collab-badge">${col.itemCount} kayıt</span>
          </div>
        </div>
      `).join('');

      mCollabList.querySelectorAll('.m-collab-card').forEach(card => {
        card.addEventListener('click', () => {
          closeMWorldPortal();
          openCollabCollectionModal('collab_bogaz');
        });
      });
    }

    // 7. Sana Gelen Davetler
    if (mInvitationsList && mw.invitations) {
      mInvitationsList.innerHTML = mw.invitations.map(inv => `
        <div class="m-invitation-card" id="card_${inv.id}">
          <div class="m-inv-left">
            <img src="${inv.avatar}" alt="${inv.sender}" class="m-inv-avatar">
            <div>
              <div class="m-inv-text">${inv.note}</div>
              <div class="m-inv-time">${inv.time}</div>
            </div>
          </div>
          <div class="m-inv-actions">
            <button class="m-inv-btn-accept" data-inv-id="${inv.id}">Kabul Et</button>
            <button class="m-inv-btn-decline" data-inv-id="${inv.id}">Reddet</button>
          </div>
        </div>
      `).join('');

      mInvitationsList.querySelectorAll('.m-inv-btn-accept').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.invId;
          const inv = mw.invitations.find(x => x.id === id);
          const card = document.getElementById(`card_${id}`);
          if (card) card.remove();
          if (mInvitesCount) {
            const rem = mInvitationsList.children.length;
            mInvitesCount.textContent = rem > 0 ? `${rem} Yeni Davet` : 'Bekleyen davet yok';
          }

          if (inv) {
            if (inv.type === 'salon' || inv.roomId) {
              const rId = inv.roomId || 'room_roma_haftasonu';
              const room = state.myRooms.find(r => r.id === rId);
              if (room) {
                room.status = 'accepted';
              } else {
                state.myRooms.unshift({
                  id: rId,
                  title: inv.title || "Roma'da Bir Hafta Sonu",
                  circleName: "İtalya",
                  members: 6,
                  activeUsers: 5,
                  topic: "Roma'da mimari ve hafta sonu rotaları.",
                  status: "accepted"
                });
              }
              localStorage.setItem('maison_my_rooms', JSON.stringify(state.myRooms));
              playHarmonicChime();
              closeMWorldPortal();
              setView('salon', { tab: 'rooms' });
              showToast(`'${inv.title}' odasına katıldınız. Salon'da görüntülenebilir ✓`);
            } else if (inv.type === 'collection') {
              let collab = state.collabCollections.find(c => c.id === 'collab_bogaz');
              if (!collab) {
                collab = {
                  id: 'collab_bogaz',
                  title: 'Boğaz Kıyıları',
                  subtitle: 'Sen + ' + (inv ? inv.sender : 'Mert Kaya'),
                  count: 3,
                  cover: '/images/editorial/bosphorus_sunset.jpg',
                  items: [
                    { id: 'item_1', title: 'Bebek Kahvesi', note: 'Sabah kahvesi ve gazete okumak için.', by: inv ? inv.sender : 'Mert Kaya', img: '/images/editorial/bosphorus_sunset.jpg' },
                    { id: 'item_2', title: 'Yeniköy Sahil Yürüyüşü', note: 'Gün batımı yürüyüşü ve dinginlik rotası.', by: 'Sen', img: '/images/editorial/amalfi_coast.jpg' },
                    { id: 'item_3', title: 'Sadberk Hanım Müzesi', note: 'Boğaz kıyısında Osmanlı zanaat seçkisi.', by: inv ? inv.sender : 'Mert Kaya', img: '/images/editorial/art_sculpture.jpg' }
                  ]
                };
                state.collabCollections.push(collab);
              }
              localStorage.setItem('maison_collab_collections', JSON.stringify(state.collabCollections));
              playHarmonicChime();
              closeMWorldPortal();
              setView('salon', { tab: 'collabs' });
              showToast(`'${inv.title}' ortak koleksiyonuna katıldınız ✓`);
            } else if (inv.type === 'connection') {
              const connExists = state.myConnections.find(c => c.name.toLowerCase() === inv.sender.toLowerCase());
              if (!connExists) {
                state.myConnections.unshift({
                  id: 'conn_' + Date.now(),
                  name: inv.sender,
                  role: "Küratör & Sanat Tarihçisi",
                  avatar: inv.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
                  city: "Kadıköy & Venedik",
                  interests: ["Sanat", "Mimari", "İstanbul", "Seramik"],
                  mutualCount: 4,
                  mutualCircles: ["İstanbul Mimari", "Modern Sanat Üzerine"],
                  mutualCollections: ["İstanbul'da Bir Hafta Sonu"],
                  quote: "Kültürel derinleşme ve paylaşılan güzellikler üzerine."
                });
                localStorage.setItem('maison_my_connections', JSON.stringify(state.myConnections));
              }
              playHarmonicChime();
              closeMWorldPortal();
              setView('salon', { tab: 'connections' });
              showToast(`${inv.sender} ile bağlantı kuruldu. Salon'da görüntülenebilir ✓`);
            }
          }
        });
      });

      mInvitationsList.querySelectorAll('.m-inv-btn-decline').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.invId;
          const card = document.getElementById(`card_${id}`);
          if (card) card.remove();
          if (mInvitesCount) {
            const rem = mInvitationsList.children.length;
            mInvitesCount.textContent = rem > 0 ? `${rem} Yeni Davet` : 'Bekleyen davet yok';
          }
          showToast(`Davet nazikçe reddedildi.`);
        });
      });
    }

    // 8. Senin Dünyan Shortcuts
    if (mUniverseGrid) {
      mUniverseGrid.querySelectorAll('.m-universe-item').forEach(item => {
        item.addEventListener('click', () => {
          const act = item.dataset.action;
          closeMWorldPortal();
          if (act === 'collections') setView('collections');
          else if (act === 'saved') setView('profile', { subTab: 'kaydedilenler' });
          else if (act === 'reads') setView('oku');
          else if (act === 'journal') setView('journal_new');
          else if (act === 'salons') setView('salon');
          else if (act === 'taste') setView('profile', { subTab: 'zevkler' });
        });
      });
    }

    // Intention Chips
    if (mIntentionsBar) {
      mIntentionsBar.querySelectorAll('.m-intention-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const act = chip.dataset.action;
          if (act === 'studio') {
            closeMWorldPortal();
            setView('studio');
          } else if (act === 'moment') {
            closeMWorldPortal();
            setView('moment');
          } else if (act === 'oku') {
            closeMWorldPortal();
            setView('oku');
          } else if (act === 'tanis') {
            closeMWorldPortal();
            setView('people', { mode: 'profiles' });
          } else if (act === 'kesfet') {
            closeMWorldPortal();
            setView('explore');
          } else if (act === 'salon') {
            closeMWorldPortal();
            setView('salon');
          } else if (act === 'koleksiyon') {
            closeMWorldPortal();
            setView('collections');
          } else if (act === 'journal') {
            closeMWorldPortal();
            setView('journal_new');
          } else if (act === 'surpriz') {
            const el = document.getElementById('mSectionSurprise');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            currentSurpriseIndex = (currentSurpriseIndex + 1) % (mw.surpriseDiscoveries ? mw.surpriseDiscoveries.length : 1);
            renderSurpriseCard();
          }
        });
      });
    }

    const mStudioBanner = document.getElementById('mStudioBanner');
    if (mStudioBanner) {
      mStudioBanner.addEventListener('click', () => {
        closeMWorldPortal();
        setView('studio');
      });
    }
  }

  function renderSurpriseCard() {
    if (!mSurpriseContainer) return;
    const surprises = (window.MAISON_DATA && window.MAISON_DATA.mWorld && window.MAISON_DATA.mWorld.surpriseDiscoveries) || [];
    if (surprises.length === 0) return;
    const cur = surprises[currentSurpriseIndex % surprises.length];

    mSurpriseContainer.innerHTML = `
      <div class="m-surprise-card">
        <div class="m-surprise-header">
          <span class="m-surprise-tag">${cur.tag}</span>
          <span class="m-surprise-match">${cur.badge}</span>
        </div>
        <div class="m-surprise-title">${cur.title}</div>
        <div class="m-surprise-desc">${cur.desc}</div>
        <div class="m-surprise-meta">${cur.meta}</div>
        <div class="m-surprise-actions">
          <button class="m-btn-surprise-action" id="btnSurpriseAction">${cur.actionText}</button>
          <button class="m-btn-surprise-next" id="btnSurpriseNext">Başka Bir Şey Göster ↻</button>
        </div>
      </div>
    `;

    const btnNext = document.getElementById('btnSurpriseNext');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        playGentleClick();
        currentSurpriseIndex = (currentSurpriseIndex + 1) % surprises.length;
        renderSurpriseCard();
      });
    }

    const btnAction = document.getElementById('btnSurpriseAction');
    if (btnAction) {
      btnAction.addEventListener('click', () => {
        if (cur.actionType === 'music') {
          closeMWorldPortal();
          setView('explore_dim', { dim: 'muzikler' });
          showToast(`🎵 ${cur.title} dinleniyor.`);
        } else if (cur.actionType === 'article') {
          closeMWorldPortal();
          setView('oku');
          showToast(`🏛️ ${cur.title} editoryal incelemesi açıldı.`);
        } else if (cur.actionType === 'quote') {
          showToast(`📜 "${cur.desc}" — Borges kütüphane notu kaydedildi.`);
        } else if (cur.actionType === 'place') {
          closeMWorldPortal();
          setView('explore_dim', { dim: 'mekanlar' });
          showToast(`🌿 ${cur.title} rotası açıldı.`);
        }
      });
    }
  }

  navMButton.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerHomePress(navMButton, openMWorldPortal, { pressDuration: 130, releaseDuration: 90 });
  });
  if (btnCloseMHub) btnCloseMHub.addEventListener('click', closeMWorldPortal);
  if (mSheetHandle) mSheetHandle.addEventListener('click', closeMWorldPortal);
  mHubModal.addEventListener('click', (e) => {
    if (e.target === mHubModal) closeMWorldPortal();
  });

  function renderReferenceScreen(screenId) {
    const s = SCREENS_DATA[screenId] || SCREENS_DATA['home'];
    referenceContainer.innerHTML = '';

    const slide = document.createElement('div');
    slide.className = 'screen-slide active';

    const img = document.createElement('img');
    img.src = s.image;
    img.className = 'screen-img';
    slide.appendChild(img);

    const layer = document.createElement('div');
    layer.className = 'hotspots-layer show-hotspots';

    if (s.hotspots) {
      s.hotspots.forEach(h => {
        const spot = document.createElement('div');
        spot.className = 'hotspot';
        spot.style.left = `${h.x}%`;
        spot.style.top = `${h.y}%`;
        spot.style.width = `${h.w}%`;
        spot.style.height = `${h.h}%`;
        spot.dataset.label = h.label || '';

        spot.addEventListener('click', (e) => {
          e.stopPropagation();
          playHapticTap();
          if (h.target) {
            renderReferenceScreen(h.target);
            screenBadge.textContent = SCREENS_DATA[h.target].title;
          } else {
            showToast(h.label || "İşlem yapıldı");
          }
        });

        layer.appendChild(spot);
      });
    }

    slide.appendChild(layer);
    referenceContainer.appendChild(slide);
    screenBadge.textContent = s.title;
  }

  function toggleMode() {
    if (state.mode === 'dynamic') {
      state.mode = 'reference';
      appScreenBody.style.display = 'none';
      referenceContainer.style.display = 'block';
      modeText.textContent = "Canlı Editoryal Deneyim";
      btnToggleMode.classList.add('active');
      renderReferenceScreen('home');
      showToast("33 Referans Ekran Görsel Moduna Geçildi.");
    } else {
      state.mode = 'dynamic';
      appScreenBody.style.display = 'block';
      referenceContainer.style.display = 'none';
      modeText.textContent = "Referans Görseller (33)";
      btnToggleMode.classList.remove('active');
      renderDynamicView(state.currentView);
      showToast("Canlı Editoryal Deneyim Moduna Geçildi.");
    }
  }

  btnToggleMode.addEventListener('click', toggleMode);

  function buildStoryboardDrawer() {
    drawerContent.innerHTML = '';
    SCREEN_GROUPS.forEach(g => {
      const groupDiv = document.createElement('div');
      groupDiv.style.marginBottom = '16px';
      groupDiv.innerHTML = `<div style="font-size: 11px; font-weight: 700; letter-spacing: 1px; color: var(--maison-gold); text-transform: uppercase; margin-bottom: 8px;">${g.name} (${g.screens.length})</div>`;

      const grid = document.createElement('div');
      grid.className = 'screens-grid';

      g.screens.forEach(sId => {
        const sc = SCREENS_DATA[sId];
        if (!sc) return;
        const card = document.createElement('div');
        card.className = 'screen-card';
        card.innerHTML = `
          <div class="card-thumbnail">
            <img src="${sc.image}" alt="${sc.title}" loading="lazy">
          </div>
          <div class="card-info">
            <div class="card-name">${sc.title}</div>
            <div class="card-category">${sc.category}</div>
          </div>
        `;
        card.addEventListener('click', () => {
          if (state.mode !== 'reference') toggleMode();
          renderReferenceScreen(sId);
          closeDrawer();
        });
        grid.appendChild(card);
      });

      groupDiv.appendChild(grid);
      drawerContent.appendChild(groupDiv);
    });
  }

  function openDrawer() {
    storyboardDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    buildStoryboardDrawer();
  }

  function closeDrawer() {
    storyboardDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  }

  btnCloseDrawer.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  const CULTURAL_TOUR_STEPS = [
    { view: 'home', title: "1. Dijital Salon (Ana Sayfa)", desc: "Özenle seçilmiş editoryal içerikler, günün ilhamı ve sakin ritüeller." },
    { view: 'article', id: 'slow_living', title: "2. Günün Yazısı: Yavaş Yaşamak", desc: "Deniz Kaya'nın derinleşme ve telaşsızlık üzerine manifestosu." },
    { view: 'moment', title: "3. Maison Moment (Günün 5 Dakikası)", desc: "Zamanı durduramazsın ama derinleştirebilirsin. Sakin ses manzarası ve 7 mindful element." },
    { view: 'explore', title: "4. Büyük Kültürel Keşif Alanı", desc: "Mimari, sanat, gastronomi ve düşünce yazıları." },
    { view: 'salon', title: "5. Maison Salon (Kültür Odaları)", desc: "Sanat, felsefe ve kitap kulübü diyalogları." },
    { view: 'room', id: 'sanat_yasam', title: "6. Salon Odası: Sanat & Yaşam", desc: "'Sanat, Hayatı Nasıl Değiştirir?' tartışması ve topluluk fikirleri." },
    { view: 'product', id: 'ceramic_bowl', title: "7. Seçkin Nesne (Neden Bunu Seçtik?)", desc: "Atelier Lune el yapımı seramik kase ve zanaat hikayesi." },
    { view: 'profile', title: "8. Digital Taste Archive (Profil)", desc: "Kişisel zevk grafiği, editoryal koleksiyonlar ve Journal notları." }
  ];

  function startTour() {
    state.tourActive = true;
    state.tourStep = 0;
    tourBanner.style.display = 'flex';
    updateTour();
  }

  function updateTour() {
    const step = CULTURAL_TOUR_STEPS[state.tourStep];
    tourStep.textContent = `Adım ${state.tourStep + 1} / ${CULTURAL_TOUR_STEPS.length}`;
    tourTitle.textContent = step.title;
    setView(step.view, { id: step.id });
    btnTourPrev.disabled = state.tourStep === 0;
    btnTourNext.textContent = state.tourStep === CULTURAL_TOUR_STEPS.length - 1 ? 'Tamamla' : 'Sonraki';
  }

  btnTour.addEventListener('click', () => {
    if (state.tourActive) {
      state.tourActive = false;
      tourBanner.style.display = 'none';
    } else {
      startTour();
    }
  });

  btnTourNext.addEventListener('click', () => {
    if (state.tourStep < CULTURAL_TOUR_STEPS.length - 1) {
      state.tourStep++;
      updateTour();
    } else {
      state.tourActive = false;
      tourBanner.style.display = 'none';
      showToast("Kültürel Akış Turu tamamlandı.");
    }
  });

  btnTourPrev.addEventListener('click', () => {
    if (state.tourStep > 0) {
      state.tourStep--;
      updateTour();
    }
  });

  btnTourExit.addEventListener('click', () => {
    state.tourActive = false;
    tourBanner.style.display = 'none';
  });

  navItems.home.addEventListener('click', () => handleBottomNavTap('home', navItems.home));
  navItems.explore.addEventListener('click', () => handleBottomNavTap('explore', navItems.explore));
  navItems.salon.addEventListener('click', () => handleBottomNavTap('salon', navItems.salon));
  navItems.profile.addEventListener('click', () => handleBottomNavTap('profile', navItems.profile));

  // ==========================================
  // iOS Home Screen Interactivity (SpringBoard)
  // ==========================================
  const iosHomeScreen = document.getElementById('iosHomeScreen');
  const btnToggleIosHome = document.getElementById('btnToggleIosHome');
  const iosHomeBtnText = document.getElementById('iosHomeBtnText');
  const appIconMaison = document.getElementById('appIconMaison');
  const iosMaisonWidget = document.getElementById('iosMaisonWidget');
  const iosClockLabel = document.getElementById('iosClockLabel');
  const iosDateLabel = document.getElementById('iosDateLabel');

  state.isIosHomeScreenActive = false;

  function updateIosClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    if (iosClockLabel) iosClockLabel.textContent = `${hours}:${minutes}`;
    if (statusClock) statusClock.textContent = `${hours}:${minutes}`;

    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    if (iosDateLabel) {
      iosDateLabel.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
    }
  }
  updateIosClock();
  setInterval(updateIosClock, 10000);

  function showIosHomeScreen() {
    state.isIosHomeScreenActive = true;
    closeSearchModal();
    mHubModal.classList.remove('open');
    closeDrawer();

    iosHomeScreen.style.display = 'flex';
    iosHomeScreen.classList.remove('launching');
    iosHomeScreen.classList.add('closing');

    appScreenBody.style.display = 'none';
    maisonBottomNav.style.display = 'none';
    if (audioPlayerBar) audioPlayerBar.style.display = 'none';

    if (btnToggleIosHome) {
      btnToggleIosHome.classList.add('active');
      iosHomeBtnText.textContent = "🏛️ MAISON Uygulaması";
    }
    screenBadge.textContent = "iPhone Ana Ekran";
    showToast("iPhone Ana Ekranı açıldı. MAISON ikonuna tıklayarak uygulamaya girebilirsiniz.");
  }

  // ==========================================
  // Animated Opening / Splash Screen (2.0 - 2.5s)
  // ==========================================
  const maisonSplashScreen = document.getElementById('maisonSplashScreen');
  const splashProgressBar = document.getElementById('splashProgressBar');
  const splashQuote = document.getElementById('splashQuote');
  const btnReplaySplash = document.getElementById('btnReplaySplash');

  const splashQuotes = [
    "“Güzellik, ayrıntılarda saklıdır.”",
    "“Daha yavaş, daha derin, daha sen.”",
    "“Sessizlikte yankılanan zarafet.”",
    "“Nesnelerin ruhu, anların hafızası.”",
    "“Yaşam bir sanat eserine dönüşürken.”"
  ];

  let splashTimeout = null;
  let splashDismissTimeout = null;
  let splashStartTime = 0;

  function playMaisonOpeningChime() {
    if (!state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      // Warm harmonic chords (A3, C#4, E4, G#4, B4)
      const freqs = [220, 277.18, 329.63, 415.3, 493.88];
      const startT = ctx.currentTime + 0.05;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startT + idx * 0.06);

        gain.gain.setValueAtTime(0, startT + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.022, startT + idx * 0.06 + 0.18);
        gain.gain.exponentialRampToValueAtTime(0.0001, startT + idx * 0.06 + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startT + idx * 0.06);
        osc.stop(startT + idx * 0.06 + 1.85);
      });
    } catch (err) {
      // Audio context may require user gesture on some browsers; fail silently
    }
  }

  function playSplashScreen(onComplete) {
    if (!maisonSplashScreen) {
      if (onComplete) onComplete();
      return;
    }

    if (splashTimeout) clearTimeout(splashTimeout);
    if (splashDismissTimeout) clearTimeout(splashDismissTimeout);
    splashStartTime = Date.now();

    // Reset styles
    maisonSplashScreen.style.display = 'flex';
    maisonSplashScreen.classList.remove('splash-closing');

    // Force reflow
    void maisonSplashScreen.offsetWidth;

    // Play chime if sound enabled
    playMaisonOpeningChime();

    // Hold for 3.0s (3000ms), then initiate elegant reveal animation
    splashTimeout = setTimeout(() => {
      dismissSplashScreen(onComplete);
    }, 3000);
  }

  function dismissSplashScreen(onComplete) {
    if (!maisonSplashScreen) return;
    if (splashTimeout) clearTimeout(splashTimeout);
    if (splashDismissTimeout) clearTimeout(splashDismissTimeout);

    maisonSplashScreen.classList.add('splash-closing');

    // Trigger app reveal animation on main body
    if (appScreenBody) {
      appScreenBody.classList.remove('app-revealing');
      void appScreenBody.offsetWidth;
      appScreenBody.classList.add('app-revealing');
    }

    splashDismissTimeout = setTimeout(() => {
      maisonSplashScreen.style.display = 'none';
      maisonSplashScreen.classList.remove('splash-closing');
      if (appScreenBody) {
        appScreenBody.classList.remove('app-revealing');
      }
      if (onComplete) onComplete();

      // If first-time user hasn't completed onboarding, show onboarding modal!
      if (!state.onboardingCompleted) {
        showOnboardingModal();
      }
    }, 650);
  }

  window.playSplashScreen = playSplashScreen;
  window.dismissSplashScreen = dismissSplashScreen;

  // Tap to skip after 1000ms
  if (maisonSplashScreen) {
    maisonSplashScreen.addEventListener('click', () => {
      if (Date.now() - splashStartTime > 1000) {
        dismissSplashScreen();
      }
    });
  }

  if (btnReplaySplash) {
    btnReplaySplash.addEventListener('click', () => {
      playSplashScreen();
      showToast("Açılış animasyonu başlatıldı (3 sn).");
    });
  }

  function launchMaisonApp(targetView = 'home', params = {}) {
    state.isIosHomeScreenActive = false;
    iosHomeScreen.classList.add('launching');

    setTimeout(() => {
      iosHomeScreen.style.display = 'none';
      iosHomeScreen.classList.remove('launching', 'closing');
      appScreenBody.style.display = 'block';
      maisonBottomNav.style.display = 'flex';
      if (audioPlayerBar && state.isPlayingAudio) audioPlayerBar.style.display = 'flex';

      if (btnToggleIosHome) {
        btnToggleIosHome.classList.remove('active');
        iosHomeBtnText.textContent = "📱 Telefon Ana Ekranı";
      }

      setView(targetView, params);
      playSplashScreen(() => {
        showToast("MAISON açıldı.");
      });
    }, 180);
  }

  function toggleIosHome() {
    if (state.isIosHomeScreenActive) {
      launchMaisonApp('home');
    } else {
      showIosHomeScreen();
    }
  }

  if (btnToggleIosHome) {
    btnToggleIosHome.addEventListener('click', toggleIosHome);
  }
  if (appIconMaison) {
    appIconMaison.addEventListener('click', () => launchMaisonApp('home'));
  }
  if (iosMaisonWidget) {
    iosMaisonWidget.addEventListener('click', () => launchMaisonApp('article', { id: 'slow_living' }));
  }

  // Other iOS Home app icons and dock items
  const dummyApps = [
    { id: 'appIconSafari', name: 'Safari' },
    { id: 'appIconBooks', name: 'Apple Kitaplar' },
    { id: 'appIconPhotos', name: 'Fotoğraflar' },
    { id: 'appIconNotes', name: 'Notlar' },
    { id: 'appIconPodcasts', name: 'Podcasts' },
    { id: 'appIconCamera', name: 'Kamera' },
    { id: 'appIconSettings', name: 'Ayarlar' },
    { id: 'dockPhone', name: 'Telefon' },
    { id: 'dockMessages', name: 'Mesajlar' },
    { id: 'dockSafari', name: 'Safari' },
    { id: 'dockMusic', name: 'Apple Music' }
  ];
  dummyApps.forEach(app => {
    const el = document.getElementById(app.id);
    if (el) {
      el.addEventListener('click', () => {
        showToast(`${app.name} simülasyonu. MAISON uygulamasını açmak için 'M' ikonuna dokunun.`);
      });
    }
  });

  homeIndicator.addEventListener('click', () => {
    if (state.isIosHomeScreenActive) {
      launchMaisonApp('home');
    } else {
      showIosHomeScreen();
    }
  });

  btnMiniPlay.addEventListener('click', () => {
    if (state.isPlayingAudio) stopAmbientAudio();
    else startAmbientAudio();
  });
  btnMiniClose.addEventListener('click', () => {
    stopAmbientAudio();
    audioPlayerBar.classList.remove('active');
  });

  btnSound.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    btnSound.classList.toggle('active', state.soundEnabled);
    btnSound.querySelector('span').textContent = state.soundEnabled ? "Ses Açık" : "Ses Kapalı";
    showToast(state.soundEnabled ? "Ses efektleri açık" : "Ses efektleri kapalı");
  });

  btnReset.addEventListener('click', () => {
    state.viewHistory = [];
    if (state.isIosHomeScreenActive) {
      launchMaisonApp('home');
    } else {
      setView('home');
    }
    showToast("Ana sayfaya dönüldü.");
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.isIosHomeScreenActive) {
        launchMaisonApp('home');
      } else {
        closeSearchModal();
        mHubModal.classList.remove('open');
        closeDrawer();
      }
    } else if (e.key.toLowerCase() === 'h') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        toggleIosHome();
      }
    } else if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
      if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        goBack();
      }
    }
  });

  window.setView = setView;
  window.dismissSplashScreen = dismissSplashScreen;
  window.playSplashScreen = playSplashScreen;
  window.openStudioCollectionModal = openStudioCollectionModal;
  window.toggleSaveStudioVideo = toggleSaveStudioVideo;
  window.showOnboardingModal = showOnboardingModal;
  window.openEveningModal = openEveningModal;
  window.setLanguage = setLanguage;
  window.setTheme = setTheme;
  window.openConnectionDetailModal = openConnectionDetailModal;
  window.openCollabCollectionModal = openCollabCollectionModal;
  window.openMWorldPortal = openMWorldPortal;
  window.closeMWorldPortal = closeMWorldPortal;
  window.MaisonAIService = MaisonAIService;
  window.renderMaisonAIView = renderMaisonAIView;

  // Seamlessly sync approved & published AI Editorial articles from AI Editor Engine
  async function syncPublishedAiArticles() {
    try {
      const res = await fetch('/api/content/published');
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.success && Array.isArray(data.articles)) {
        data.articles.forEach(art => {
          const exists = MAISON_DATA.articles.some(a => a.id === art.id);
          if (!exists) {
            MAISON_DATA.articles.unshift(art);
            // Also inject into EDITORIAL_CULTURAL_POOL so Home Screen features it
            EDITORIAL_CULTURAL_POOL.unshift({
              id: 'ed_' + art.id,
              title_tr: art.title,
              title_en: art.title,
              sub_tr: art.subtitle,
              sub_en: art.subtitle,
              tags: art.tags || ['art', 'culture'],
              badge_tr: art.category,
              badge_en: art.category,
              author: art.authorName,
              time_tr: art.readTime,
              time_en: art.readTime,
              img: art.heroImage,
              avatar: art.authorAvatar,
              actionKey: art.id
            });
          }
        });
      }
    } catch (e) {
      // Offline fallback: silent
    }
  }
  window.syncPublishedAiArticles = syncPublishedAiArticles;

  setTheme(state.theme);
  updateStaticTranslations();
  if (state.quietReadingMode) {
    document.body.classList.add('quiet-reading-mode');
  }

  // Pre-sync AI published articles then launch
  syncPublishedAiArticles().then(() => {
    setView('home');
  }).catch(() => {
    setView('home');
  });
  playSplashScreen();
});
