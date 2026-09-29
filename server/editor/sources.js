// MAISON AI EDITOR V1 — Content Sources Registry
// Articles 5, 6, 7, 8: Modular Source Architecture across 14 Cultural Categories

const DEFAULT_SOURCES = [
  {
    id: "src_istanbul_modern",
    name: "İstanbul Modern Sanat Müzesi",
    url: "https://www.istanbulmodern.org",
    feedUrl: "https://www.istanbulmodern.org/tr/bulten",
    type: "official_institution",
    category: "SANAT",
    language: "tr",
    country: "TR",
    active: true,
    trust_level: "official",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Türkiye'nin ilk modern ve çağdaş sanat müzesi küratöryel sergileri ve koleksiyon bültenleri.",
    seed_items: [
      {
        title: "Yüzen Formlar ve Işığın Hafızası: Akdeniz Çağdaş Heykel Sergisi",
        summary: "İstanbul Modern, Akdeniz kıyılarının doğal taş, mermer ve ışık ilişkisini odağına alan yeni retrospektif sergisini ziyarete açtı. Doğanın zamansız geometrisiyle çağdaş formların kesişimi.",
        url: "https://www.istanbulmodern.org/sergiler/yuzen-formlar-isigin-hafizasi",
        published_at: "2026-09-21T10:00:00Z",
        category: "SANAT",
        cover_image: "/images/editorial/art_sculpture.jpg",
        entities: ["İstanbul Modern", "Akdeniz Heykeli", "Renzo Piano", "Karaköy"]
      }
    ]
  },
  {
    id: "src_salt_online",
    name: "Salt Online & Araştırma",
    url: "https://saltonline.org",
    feedUrl: "https://saltonline.org/tr/program",
    type: "official_institution",
    category: "KÜLTÜR",
    language: "tr",
    country: "TR",
    active: true,
    trust_level: "official",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Görsel pratikler, mimarlık ve kentsel araştırmalar üzerine bağımsız kültür kurumu.",
    seed_items: [
      {
        title: "Modernizmin Sessiz Mirası: Türkiye'de 1950'ler Kamu Yapıları ve Zanaat",
        summary: "Salt Galata'da açılan yeni arşiv sergisi, erken cumhuriyet döneminin taş, ahşap ve demir işçiliğiyle üretilmiş modernist yapılarını ve detay mimarisini belgeliyor.",
        url: "https://saltonline.org/tr/program/modernizmin-sessiz-mirasi-kamu-yapilari",
        published_at: "2026-09-22T08:30:00Z",
        category: "MİMARİ",
        cover_image: "/images/editorial/architecture_arched.jpg",
        entities: ["Salt Galata", "Modernizm", "Karaköy", "Arşiv"]
      }
    ]
  },
  {
    id: "src_arkitekt",
    name: "Arkitekt & Mimarlık Dergisi",
    url: "https://www.arkitekt.com.tr",
    feedUrl: "https://www.arkitekt.com.tr/feed",
    type: "curated_feed",
    category: "MİMARİ",
    language: "tr",
    country: "TR",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Sürdürülebilir, dingin ve yerel malzemelerle tasarlanmış çağdaş mimari projeler.",
    seed_items: [
      {
        title: "Urla'da Taş ve Zeytin Ağaçları Arasında Monolitik Bir Atölye Evi",
        summary: "Mimar Caner Bilgin tarafından tasarlanan tek katlı taş konut, Ege rüzgarlarına göre kurgulanan iç avlusu ve ham kireç sıvasıyla doğayla bütünleşen sakin bir sığınak sunuyor.",
        url: "https://www.arkitekt.com.tr/projeler/urla-tas-atolye-evi",
        published_at: "2026-09-22T14:15:00Z",
        category: "MİMARİ",
        cover_image: "/images/editorial/architecture_arched.jpg",
        entities: ["Urla", "Ege Mimarisi", "Doğal Taş", "İç Avlu"]
      }
    ]
  },
  {
    id: "src_kinfolk",
    name: "Kinfolk Magazine",
    url: "https://kinfolk.com",
    feedUrl: "https://kinfolk.com/feed",
    type: "curated_feed",
    category: "WELLNESS / YAŞAM",
    language: "en",
    country: "GLOBAL",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Slow living, deliberate spaces, craft, and thoughtful daily rituals.",
    seed_items: [
      {
        title: "The Art of Slow Mornings: Crafting Rituals in Quiet Domestic Spaces",
        summary: "Exploring how deliberate morning light, hand-dripped coffee, and analog reading hours establish an unhurried cadence for creative professionals in Copenhagen and Kyoto.",
        url: "https://kinfolk.com/the-art-of-slow-mornings-crafting-rituals",
        published_at: "2026-09-22T06:00:00Z",
        category: "WELLNESS / YAŞAM",
        cover_image: "/images/editorial/slow_living_coffee_terrace.jpg",
        entities: ["Kinfolk", "Slow Living", "Copenhagen", "Rituals"]
      }
    ]
  },
  {
    id: "src_cereal",
    name: "Cereal Magazine",
    url: "https://readcereal.com",
    feedUrl: "https://readcereal.com/feed",
    type: "curated_feed",
    category: "SEYAHAT",
    language: "en",
    country: "UK",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Travel & style publication focusing on minimalist architecture, design, and poetic voyages.",
    seed_items: [
      {
        title: "Kyoto's Hidden Machiya: Timber, Shadows, and Century-Old Tea Houses",
        summary: "A contemplative journey through the quiet alleys of Higashiyama, where restored wooden machiya townhouses preserve tactile wabi-sabi philosophy amidst modern Japan.",
        url: "https://readcereal.com/kyotos-hidden-machiya-timber-and-shadows",
        published_at: "2026-09-21T18:40:00Z",
        category: "SEYAHAT",
        cover_image: "/images/editorial/slow_living_mediterranean_1.jpg",
        entities: ["Kyoto", "Higashiyama", "Machiya", "Wabi-Sabi"]
      }
    ]
  },
  {
    id: "src_k24",
    name: "K24 Kitap & Kültür Eleştirisi",
    url: "https://t24.com.tr/k24",
    feedUrl: "https://t24.com.tr/rss/k24",
    type: "curated_feed",
    category: "KİTAPLAR",
    language: "tr",
    country: "TR",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Edebi eleştiriler, felsefi denemeler ve dünya klasikleri üzerine derin okumalar.",
    seed_items: [
      {
        title: "Sessizliğin Dili: Tanpınar'ın Saatleri ve Zamanın Estetik Algısı",
        summary: "Ahmet Hamdi Tanpınar'ın metinlerinde zamanın mekanik bir akıştan çıkıp içsel bir müzikaliteye dönüşmesi üzerine derin bir inceleme ve edebi şerh.",
        url: "https://t24.com.tr/k24/yazi/tanpinar-saatler-zaman-algisi",
        published_at: "2026-09-22T11:00:00Z",
        category: "KİTAPLAR",
        cover_image: "/images/editorial/antique_library_books.jpg",
        entities: ["Ahmet Hamdi Tanpınar", "Edebiyat", "Zaman Felsefesi", "Saatleri Ayarlama Enstitüsü"]
      }
    ]
  },
  {
    id: "src_the_marginalian",
    name: "The Marginalian (Maria Popova)",
    url: "https://www.themarginalian.org",
    feedUrl: "https://www.themarginalian.org/feed/",
    type: "curated_feed",
    category: "FİKİR / FELSEFE",
    language: "en",
    country: "US",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Meaning, creative spirit, philosophy, and timeless intellectual inquiries.",
    seed_items: [
      {
        title: "Solitude as an Act of Love: Rilke on Space, Independence, and Intimacy",
        summary: "Reflecting on Rainer Maria Rilke's timeless letters about how two solitude-guarding souls create the deepest form of human communion.",
        url: "https://www.themarginalian.org/rilke-letters-solitude-love",
        published_at: "2026-09-20T15:20:00Z",
        category: "FİKİR / FELSEFE",
        cover_image: "/images/editorial/dim_kitaplar.jpg",
        entities: ["Rainer Maria Rilke", "Maria Popova", "Solitude", "Philosophy"]
      }
    ]
  },
  {
    id: "src_aperture",
    name: "Aperture Foundation",
    url: "https://aperture.org",
    feedUrl: "https://aperture.org/feed",
    type: "official_institution",
    category: "FOTOĞRAF",
    language: "en",
    country: "US",
    active: true,
    trust_level: "official",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Non-profit visual foundation dedicated to the craft and narrative of fine art photography.",
    seed_items: [
      {
        title: "Analog Shadows: The Resurgence of Medium Format Monochrome Prints",
        summary: "A curated look into contemporary darkroom artisans who reject instant digital feeds in favor of silver gelatin chemistry and meditative patience.",
        url: "https://aperture.org/editorial/analog-shadows-medium-format",
        published_at: "2026-09-21T12:00:00Z",
        category: "FOTOĞRAF",
        cover_image: "/images/editorial/darkroom_monochrome.jpg",
        entities: ["Aperture", "Medium Format", "Analog Photography", "Monochrome"]
      }
    ]
  },
  {
    id: "src_dezeen_design",
    name: "Dezeen & Design Craft",
    url: "https://www.dezeen.com",
    feedUrl: "https://www.dezeen.com/feed",
    type: "curated_feed",
    category: "TASARIM",
    language: "en",
    country: "GLOBAL",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Leading international architecture, interiors and thoughtful industrial design magazine.",
    seed_items: [
      {
        title: "Cast Bronze and Raw Linen: Minimalist Lighting Objects from Milan Atelier",
        summary: "Italian design studio Forma crafts limited-edition floor luminaires that celebrate the weight of sand-cast bronze paired with tactile hand-spun Florentine linen.",
        url: "https://www.dezeen.com/design/cast-bronze-raw-linen-milan-atelier",
        published_at: "2026-09-22T09:45:00Z",
        category: "TASARIM",
        cover_image: "/images/editorial/ceramic_vase_minimal.jpg",
        entities: ["Milan Design", "Cast Bronze", "Linen Lighting", "Artisan"]
      }
    ]
  },
  {
    id: "src_the_gourmand",
    name: "The Gourmand & Culinary Heritage",
    url: "https://thegourmand.co.uk",
    feedUrl: "https://thegourmand.co.uk/feed",
    type: "curated_feed",
    category: "GASTRONOMİ",
    language: "en",
    country: "UK",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Award-winning food and culture journal bridging gastronomy, art, and heritage.",
    seed_items: [
      {
        title: "Heirloom Olive Groves of the Aegean: Slow Harvesting and Cold Extraction",
        summary: "Documenting generational smallholders along the Ayvalık coastline who press centuries-old Memecik olives within hours of hand-picking to capture grassy, peppery polyphenols.",
        url: "https://thegourmand.co.uk/heirloom-olive-groves-aegean",
        published_at: "2026-09-22T13:30:00Z",
        category: "GASTRONOMİ",
        cover_image: "/images/editorial/gastronomy_pasta.jpg",
        entities: ["Ayvalık", "Zeytinyağı", "Ege Gastronomisi", "Hasat"]
      }
    ]
  },
  {
    id: "src_crafts_council",
    name: "Crafts Council & Studio Archives",
    url: "https://www.craftscouncil.org.uk",
    feedUrl: "https://www.craftscouncil.org.uk/feed",
    type: "official_institution",
    category: "STUDIO",
    language: "en",
    country: "UK",
    active: true,
    trust_level: "official",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "National charity for craft promoting contemporary makers, master workshops and heritage skills.",
    seed_items: [
      {
        title: "Mastering the Wheel: Wood-Fired Ceramic Kilns and Japanese Bizen Techniques",
        summary: "An inside look into an artist collective firing an anagama kiln continuously for seven days, allowing natural ash glazes and kiln smoke to paint unrepeatable organic patterns.",
        url: "https://www.craftscouncil.org.uk/stories/mastering-the-wheel-wood-fired-ceramics",
        published_at: "2026-09-21T16:00:00Z",
        category: "STUDIO",
        cover_image: "/images/editorial/dim_nesneler.jpg",
        entities: ["Seramik", "Anagama Fırını", "Bizen", "Zanaat"]
      }
    ]
  },
  {
    id: "src_songlines",
    name: "Songlines & Acoustic Landscapes",
    url: "https://www.songlines.co.uk",
    feedUrl: "https://www.songlines.co.uk/feed",
    type: "curated_feed",
    category: "MÜZİK",
    language: "en",
    country: "GLOBAL",
    active: true,
    trust_level: "high",
    health_status: "active",
    consecutive_errors: 0,
    last_checked_at: null,
    description: "Global acoustic roots, meditative instrumental masters, and soundscapes.",
    seed_items: [
      {
        title: "Strings Across the Silk Road: The Meditative Power of Ney and Kamancheh",
        summary: "Exploring how modal improvisation and acoustic resonance invite stillness in contemporary concert halls from Istanbul to Lyon.",
        url: "https://www.songlines.co.uk/features/strings-across-the-silk-road",
        published_at: "2026-09-20T20:00:00Z",
        category: "MÜZİK",
        cover_image: "/images/editorial/dim_muzikler.jpg",
        entities: ["Ney", "Kamancheh", "Makam", "Doğu-Batı Rezonansı"]
      }
    ]
  }
];

module.exports = {
  DEFAULT_SOURCES
};
