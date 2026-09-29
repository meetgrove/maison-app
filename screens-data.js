// MAISON Reference Screens and Hotspots Graph
const SCREENS_DATA = {
  "home": {
    id: "home",
    title: "Ana Sayfa",
    subtitle: "Daha Özenli Bir Hayat",
    category: "Ana Sayfa",
    badge: "Başlangıç",
    image: "/images/home.png",
    hotspots: [
      { x: 74, y: 4.8, w: 7, h: 4, target: "explore_search", label: "Ara" },
      { x: 82, y: 4.8, w: 7, h: 4, action: "toggleNotifications", label: "Bildirimler" },
      { x: 12, y: 14, w: 76, h: 22, target: "article_slow_living", label: "Günün İlhamı: Daha Yavaş, Daha Derin, Daha Sen" },
      { x: 13, y: 37, w: 13, h: 8, target: "article_slow_living", label: "Yazılar" },
      { x: 28, y: 37, w: 15, h: 8, target: "shop_catalog", label: "Seçkin Ürünler" },
      { x: 44, y: 37, w: 13, h: 8, target: "salon_hub", label: "Salon Topluluk" },
      { x: 58, y: 37, w: 15, h: 8, target: "collection_detail", label: "Koleksiyonlar" },
      { x: 74, y: 37, w: 13, h: 8, target: "people_creators", label: "İnsanlar & Fikirleri" },
      { x: 74, y: 46.5, w: 15, h: 3, target: "shop_catalog", label: "Editörün Seçkisi (Tümü)" },
      { x: 12, y: 49, w: 23, h: 22, target: "article_amalfi", label: "Akdeniz'de Zamansızlık" },
      { x: 36, y: 49, w: 23, h: 22, target: "product_ceramic_bowl", label: "El Yapımı Seramik Kase (₺2.850)" },
      { x: 60, y: 49, w: 23, h: 22, target: "salon_room", label: "Kitap Kulübü: Zamanın İzinde" },
      { x: 83, y: 49, w: 6, h: 22, target: "art_hub", label: "Floransa Sanat" },
      { x: 12, y: 74.5, w: 15, h: 9, target: "article_amalfi", label: "Seyahat / Rotalar" },
      { x: 28, y: 74.5, w: 15, h: 9, target: "art_hub", label: "Sanat / Sergiler" },
      { x: 44, y: 74.5, w: 15, h: 9, target: "explore_hub", label: "Gastronomi / Lezzetler" },
      { x: 60, y: 74.5, w: 15, h: 9, target: "explore_search", label: "Mimari / İlham" },
      { x: 76, y: 74.5, w: 13, h: 9, target: "journal_list", label: "Yaşam / Ritüeller" },
      { x: 12, y: 84.5, w: 76, h: 6.5, target: "moment_intro", label: "MAISON MOMENT (Bugünün 5 Dakikası)" }
    ],
    hasBottomNav: true
  },
  "article_slow_living": {
    id: "article_slow_living",
    title: "Yavaş Yaşamak",
    subtitle: "Daha Fazlasını Hissetmek • Deniz Kaya",
    category: "Yazılar",
    image: "/images/article_slow_living.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 52, w: 32, h: 6, target: "author_deniz_kaya", label: "Yazar: Deniz Kaya" },
      { x: 72, y: 52, w: 16, h: 5, target: "moment_player", label: "Sesli Dinle (7 dk)" }
    ],
    hasBottomNav: false
  },
  "author_deniz_kaya": {
    id: "author_deniz_kaya",
    title: "Deniz Kaya",
    subtitle: "Yazar & Küratör • 28K Takipçi",
    category: "Yazarlar",
    image: "/images/author_deniz_kaya.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "article_slow_living", label: "Geri Dön", action: "back" },
      { x: 12, y: 35, w: 18, h: 6, target: "article_slow_living", label: "Yazıları" },
      { x: 32, y: 35, w: 20, h: 6, target: "collection_detail", label: "Koleksiyonları" }
    ],
    hasBottomNav: false
  },
  "author_deniz_quote": {
    id: "author_deniz_quote",
    title: "Deniz Kaya İlham",
    subtitle: "Mekanlar insanların sessiz hikayeleridir",
    category: "Yazarlar",
    image: "/images/author_deniz_quote.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "author_deniz_kaya", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "people_creators": {
    id: "people_creators",
    title: "İnsanlar & Fikirleri",
    subtitle: "MAISON Topluluğu",
    category: "Yazarlar",
    image: "/images/people_creators.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 38, w: 76, h: 14, target: "author_deniz_kaya", label: "Deniz Kaya" }
    ],
    hasBottomNav: true
  },
  "shop_catalog": {
    id: "shop_catalog",
    title: "Seçkin Ürünler",
    subtitle: "Hayatına Değer Katan Parçalar",
    category: "Mağaza",
    image: "/images/shop_catalog.png",
    hotspots: [
      { x: 12, y: 43.5, w: 25, h: 18, target: "product_ceramic_bowl", label: "El Yapımı Seramik Kase" },
      { x: 48, y: 75, w: 22, h: 4, target: "modal_add_to_collection", label: "Koleksiyona Ekle" }
    ],
    hasBottomNav: true
  },
  "shop_home": {
    id: "shop_home",
    title: "Maison Shop",
    subtitle: "Güzel Şeyler, Daha Güzel Anlar",
    category: "Mağaza",
    image: "/images/shop_home.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 45, w: 37, h: 22, target: "product_good_days_candle", label: "Good Days Mum" },
      { x: 51, y: 45, w: 37, h: 22, target: "product_ceramic_bowl", label: "Seramik Kase" }
    ],
    hasBottomNav: true
  },
  "product_ceramic_bowl": {
    id: "product_ceramic_bowl",
    title: "El Yapımı Seramik Kase",
    subtitle: "Atelier Lune • ₺2.850",
    category: "Mağaza",
    image: "/images/product_ceramic_bowl.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "shop_catalog", label: "Geri Dön", action: "back" },
      { x: 43, y: 74, w: 24, h: 4.5, target: "modal_add_to_collection", label: "Koleksiyona Ekle" }
    ],
    hasBottomNav: true
  },
  "modal_add_to_collection": {
    id: "modal_add_to_collection",
    title: "Koleksiyonuna Ekle",
    subtitle: "El Yapımı Seramik Kase",
    category: "Mağaza",
    image: "/images/modal_add_to_collection.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "product_ceramic_bowl", label: "Kapat", action: "back" },
      { x: 12, y: 64, w: 76, h: 8, target: "collection_detail", label: "Evime Alacaklarım" }
    ],
    hasBottomNav: false
  },
  "collection_detail": {
    id: "collection_detail",
    title: "Evime Alacaklarım",
    subtitle: "12 Parça • Deniz Kaya",
    category: "Mağaza",
    image: "/images/collection_detail.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "shop_catalog", label: "Geri Dön", action: "back" },
      { x: 12, y: 48, w: 76, h: 12, target: "product_ceramic_bowl", label: "Seramik Kase" }
    ],
    hasBottomNav: false
  },
  "collection_fall_promo": {
    id: "collection_fall_promo",
    title: "Sonbaharın Sıcak Dokunuşları",
    subtitle: "Özel Seçki",
    category: "Mağaza",
    image: "/images/collection_fall_promo.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "shop_catalog", label: "Geri Dön", action: "back" },
      { x: 12, y: 60, w: 76, h: 6, target: "collection_fall_items", label: "Koleksiyonu Keşfet" }
    ],
    hasBottomNav: false
  },
  "collection_fall_items": {
    id: "collection_fall_items",
    title: "Sonbahar Koleksiyonu",
    subtitle: "Doğanın Renkleri Evinizde",
    category: "Mağaza",
    image: "/images/collection_fall_items.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "collection_fall_promo", label: "Geri Dön", action: "back" },
      { x: 12, y: 50, w: 37, h: 22, target: "product_good_days_candle", label: "Good Days Mum" }
    ],
    hasBottomNav: false
  },
  "product_good_days_candle": {
    id: "product_good_days_candle",
    title: "Good Days Mum",
    subtitle: "890 TL",
    category: "Mağaza",
    image: "/images/product_good_days_candle.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "collection_fall_items", label: "Geri Dön", action: "back" },
      { x: 12, y: 82, w: 76, h: 6, target: "cart", label: "Sepete Ekle" }
    ],
    hasBottomNav: false
  },
  "cart": {
    id: "cart",
    title: "Sepetim",
    subtitle: "3 Parça • ₺3.510",
    category: "Mağaza",
    image: "/images/cart.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "shop_catalog", label: "Geri Dön", action: "back" },
      { x: 12, y: 84, w: 76, h: 6, target: "checkout", label: "Siparişi Tamamla" }
    ],
    hasBottomNav: false
  },
  "checkout": {
    id: "checkout",
    title: "Güvenli Ödeme",
    subtitle: "Özenle Tamamlayın",
    category: "Mağaza",
    image: "/images/checkout.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "cart", label: "Geri Dön", action: "back" },
      { x: 12, y: 84, w: 76, h: 6, target: "order_success", label: "Siparişi Onayla" }
    ],
    hasBottomNav: false
  },
  "order_success": {
    id: "order_success",
    title: "Siparişiniz Alındı",
    subtitle: "Teşekkürler",
    category: "Mağaza",
    image: "/images/order_success.png",
    hotspots: [
      { x: 12, y: 75, w: 76, h: 7, target: "home", label: "Ana Sayfaya Dön" }
    ],
    hasBottomNav: false
  },
  "salon_hub": {
    id: "salon_hub",
    title: "Maison Salon",
    subtitle: "Aynı İlhamda Buluşan İnsanlar",
    category: "Salon",
    image: "/images/salon_hub.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 32, w: 37, h: 12, target: "salon_room", label: "Sanat & Yaşam" },
      { x: 51, y: 32, w: 37, h: 12, target: "salon_room", label: "Kitap Kulübü" },
      { x: 51, y: 45, w: 37, h: 12, target: "salon_room", label: "Gidilen Yerler" }
    ],
    hasBottomNav: true
  },
  "salon_room": {
    id: "salon_room",
    title: "Gidilen Yerler, Hikâyeler",
    subtitle: "27.4K Üye",
    category: "Salon",
    image: "/images/salon_room.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "salon_hub", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "moment_intro": {
    id: "moment_intro",
    title: "Maison Moment",
    subtitle: "Günün 5 Dakikası",
    category: "Moment",
    image: "/images/moment_intro.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 75, w: 76, h: 7, target: "moment_player", label: "Günün Moment'ı ->" }
    ],
    hasBottomNav: false
  },
  "moment_player": {
    id: "moment_player",
    title: "Daha Sakin Bir Sabah",
    subtitle: "Ses Deneyimi",
    category: "Moment",
    image: "/images/moment_player.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "moment_intro", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "explore_hub": {
    id: "explore_hub",
    title: "Keşfet",
    subtitle: "Kültür, Sanat & Yaşam",
    category: "Keşfet",
    image: "/images/explore_hub.png",
    hotspots: [
      { x: 12, y: 25, w: 76, h: 5, target: "explore_search", label: "Ara..." },
      { x: 12, y: 35, w: 76, h: 25, target: "article_amalfi", label: "Amalfi" }
    ],
    hasBottomNav: true
  },
  "explore_search": {
    id: "explore_search",
    title: "Arama & İlham",
    subtitle: "Keşfetmek Her Zaman İyi Hissettirir",
    category: "Keşfet",
    image: "/images/explore_search.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "explore_hub", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "article_amalfi": {
    id: "article_amalfi",
    title: "Amalfi'de Yavaş Zamanlar",
    subtitle: "Deniz Kaya",
    category: "Keşfet",
    image: "/images/article_amalfi.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "explore_hub", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "journal_list": {
    id: "journal_list",
    title: "Journal",
    subtitle: "Kişisel Notlar",
    category: "Journal",
    image: "/images/journal_list.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 35, w: 76, h: 12, target: "journal_detail", label: "Yavaş Bir Sabah" },
      { x: 80, y: 5, w: 8, h: 5, target: "journal_new", label: "Yeni Not" }
    ],
    hasBottomNav: true
  },
  "journal_detail": {
    id: "journal_detail",
    title: "Yavaş Bir Sabah",
    subtitle: "Journal Notu",
    category: "Journal",
    image: "/images/journal_detail.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "journal_list", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "journal_new": {
    id: "journal_new",
    title: "Yeni Journal Notu",
    subtitle: "Kendi Hikayeni Yaz",
    category: "Journal",
    image: "/images/journal_new.png",
    hotspots: [
      { x: 11, y: 5, w: 12, h: 5, target: "journal_list", label: "İptal", action: "back" }
    ],
    hasBottomNav: false
  },
  "art_hub": {
    id: "art_hub",
    title: "Sanat & Kültür",
    subtitle: "Sergiler & Eserler",
    category: "Sanat",
    image: "/images/art_hub.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "explore_hub", label: "Geri Dön", action: "back" },
      { x: 12, y: 35, w: 76, h: 22, target: "art_exhibition", label: "Zamansız İzler" }
    ],
    hasBottomNav: true
  },
  "art_exhibition": {
    id: "art_exhibition",
    title: "Zamansız İzler Sergisi",
    subtitle: "İstanbul Modern",
    category: "Sanat",
    image: "/images/art_exhibition.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "art_hub", label: "Geri Dön", action: "back" },
      { x: 12, y: 73, w: 76, h: 15, target: "art_piece", label: "Sessiz Diyalog" }
    ],
    hasBottomNav: false
  },
  "art_piece": {
    id: "art_piece",
    title: "Sessiz Diyalog",
    subtitle: "Elif Demir",
    category: "Sanat",
    image: "/images/art_piece.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "art_exhibition", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "books_hub": {
    id: "books_hub",
    title: "Kitaplar",
    subtitle: "Daha Derin Bir Yaşam İçin",
    category: "Kitaplar",
    image: "/images/books_hub.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "explore_hub", label: "Geri Dön", action: "back" },
      { x: 12, y: 35, w: 76, h: 18, target: "book_detail", label: "Düşün, Yavaşla" }
    ],
    hasBottomNav: true
  },
  "book_detail": {
    id: "book_detail",
    title: "Düşün, Yavaşla",
    subtitle: "Daniel Kahneman",
    category: "Kitaplar",
    image: "/images/book_detail.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "books_hub", label: "Geri Dön", action: "back" },
      { x: 12, y: 75, w: 37, h: 6, target: "reader_view", label: "Oku" }
    ],
    hasBottomNav: false
  },
  "reader_view": {
    id: "reader_view",
    title: "Maison Reader",
    subtitle: "Okuma Modu",
    category: "Kitaplar",
    image: "/images/reader_view.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "book_detail", label: "Geri Dön", action: "back" }
    ],
    hasBottomNav: false
  },
  "profile": {
    id: "profile",
    title: "Profilim",
    subtitle: "Defne Kara / Selin",
    category: "Profil",
    image: "/images/profile.png",
    hotspots: [
      { x: 11, y: 5, w: 10, h: 5, target: "home", label: "Geri Dön", action: "back" },
      { x: 12, y: 48, w: 76, h: 10, target: "collection_detail", label: "Evime Alacaklarım" },
      { x: 12, y: 60, w: 76, h: 10, target: "journal_list", label: "Journal Notlarım" }
    ],
    hasBottomNav: true
  }
};

const SCREEN_GROUPS = [
  { name: "Ana Akış", screens: ["home", "article_slow_living", "author_deniz_kaya", "author_deniz_quote", "people_creators"] },
  { name: "Seçkin Ürünler & Alışveriş", screens: ["shop_catalog", "shop_home", "product_ceramic_bowl", "modal_add_to_collection", "collection_detail", "collection_fall_promo", "collection_fall_items", "product_good_days_candle", "cart", "checkout", "order_success"] },
  { name: "Maison Salon & Topluluk", screens: ["salon_hub", "salon_room"] },
  { name: "Maison Moment", screens: ["moment_intro", "moment_player"] },
  { name: "Keşfet & Seyahat", screens: ["explore_hub", "explore_search", "article_amalfi"] },
  { name: "Sanat & Kültür", screens: ["art_hub", "art_exhibition", "art_piece"] },
  { name: "Kitaplar & Reader", screens: ["books_hub", "book_detail", "reader_view"] },
  { name: "Journal & Kişisel Notlar", screens: ["journal_list", "journal_detail", "journal_new"] },
  { name: "Kullanıcı Profili", screens: ["profile"] }
];
