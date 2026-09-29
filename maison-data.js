// MAISON — Data-Driven Cultural House Architecture
// Reflecting Articles 34, 35, 36: Entity Models & Cultural Graph
// Filled with authentic, copyright-free photography matching the brand philosophy

const MAISON_DATA = {
  // Current User Context (Article 35: Digital Taste Archive)
  currentUser: {
    name: "Berke Saygılı",
    handle: "@berkesaygili",
    title: "Kurucu & Küratör",
    bio: "Sakin mekanlar, zamansız nesneler ve rafine yaşam ritüelleri peşinde. MAISON ile daha özenli bir hayatın dijital kültür evini paylaşıyor.",
    avatar: "/images/editorial/berke_saygili.jpg",
    tasteProfile: {
      "Kültür & Felsefe": 96,
      "Sanat & Estetik": 94,
      "Mimari & Mekân": 92,
      "Kitap & Edebiyat": 95,
      "Yavaş Seyahat": 88,
      "Gastronomi Kültürü": 85,
      "Moda & Stil": 82,
      "Müzik & Ambiyans": 90
    },
    stats: {
      readCount: 42,
      savedCount: 28,
      collectionsCount: 7,
      journalCount: 19,
      salonRoomsCount: 10
    },
    preferences: {
      eveningDigest: true,
      quietReadingMode: true,
      ambientSounds: true,
      weeklyCuratorLetter: true
    },
    passportNumber: "MSN-2024-0824-IST",
    passportStamps: [
      { id: 'stamp_arch', title: 'Ege & Akdeniz Mimarisi Mührü', icon: '🏛️', date: '14 Ağustos 2024', desc: 'Urla ve Bodrum sakin mimari keşifleri.', unlocked: true },
      { id: 'stamp_lit', title: 'Pazar Sabahı Edebiyat Mührü', icon: '📖', date: '02 Eylül 2024', desc: 'Calvino ve Görünmez Kentler derin okuması.', unlocked: true },
      { id: 'stamp_morning', title: 'Sessiz Sabahlar Mührü', icon: '🧘', date: '18 Eylül 2024', desc: '2 dakikalık nefes pratiği ve sabah ritüeli.', unlocked: true },
      { id: 'stamp_craft', title: 'Zanaat & Dokunma Mührü', icon: '🏺', date: '21 Eylül 2024', desc: 'Çömlek çarkı ve doğal sır felsefesi.', unlocked: true },
      { id: 'stamp_salon', title: 'Salon Düşünürü Mührü', icon: '💬', date: '25 Eylül 2024', desc: 'Salon topluluğunda mimari ve estetik diyaloğu.', unlocked: true },
      { id: 'stamp_gastro', title: 'Gastronomi & Mutfak Mirası', icon: '🫒', date: 'Kilitli', desc: 'Ayvalık zeytinlikleri ve yavaş lezzetler.', unlocked: false }
    ]
  },

  // 1. OKU (Yazılar & Kürasyonlar)
  articles: [
    {
      id: "slow_living",
      title: "Yavaş Yaşamak: Daha Fazlasını Hissetmek",
      subtitle: "Modern dünyanın telaşı içinde yavaşlamak artık bir lüks değil, bir seçim.",
      pillar: "OKU",
      type: "Uzun-form Yazı",
      curationTag: "Bugün 7 dakikanı ayır",
      authorId: "deniz_kaya",
      authorName: "Deniz Kaya",
      authorRole: "Yazar & Küratör",
      authorAvatar: "/images/editorial/author_deniz.jpg",
      date: "12 Ekim 2024",
      readTime: "7 dk okuma",
      hasAudio: true,
      audioDuration: "5:00",
      category: "YAŞAM & FELSEFE",
      subCategory: "Denemeler",
      whyItMatters: "Hızın kutsandığı bir çağda, derinlik ancak yavaşlayarak inşa edilebilir. Bu yazı, yaşam alanlarında ve gündelik ritüellerde zamana alan açmanın felsefesini inceliyor.",
      heroImage: "/images/editorial/slow_living_coffee_terrace.jpg",
      quote: "Daha yavaş yaşadığımızda, yaşadığımızın daha fazlasını hissederiz.",
      excerpt: "Hayat, çoğu zaman yetişmemiz gereken bir şeyler listesine dönüşüyor. Daha fazla iş, daha fazla deneyim, daha fazla yer, daha fazla insan... Oysa belki de asıl soru, 'daha fazlası' değil, 'daha derini'.",
      body: [
        "Hayat, çoğu zaman yetişmemiz gereken bir şeyler listesine dönüşüyor. Daha fazla iş, daha fazla deneyim, daha fazla yer, daha fazla insan... Oysa belki de asıl soru, 'daha fazlası' değil, 'daha derini'.",
        "Yavaş yaşamak, zamanı durdurmak değil; ona alan açmak. Gündelik rutinin içinde küçük ama anlamlı anlara yer açmak. Bir kahvenin tadını gerçekten almak, bir kitabın sayfalarında kaybolmak, bir şehri gezmek yerine hissetmek.",
        "İtalya'nın küçük kasabalarında, sabah pazarı hâlâ bir buluşma yeri. İnsanlar sadece sebze meyve almıyor; birbirlerinin gözlerinin içine bakıyor, havadan sudan konuşuyor, günün ilk ışıklarını birlikte karşılıyor. Bu bir geri kalmışlık değil; tam tersine, insan olmanın en kadim biçimini koruma çabası.",
        "Modern mimari de artık bunu fark ediyor. Gereksiz bölmelerden arınmış, doğal ışığı içeri alan, ahşabın ve taşın dokusunu hissettiren mekanlar tasarlanıyor. Çünkü insan, dokunabildiği ve nefes alabildiği alanlarda kendini evinde hissediyor."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "amalfi",
      title: "Amalfi'de Yavaş Zamanlar: Coğrafyanın Sabrı",
      subtitle: "Bazı yerler sadece gidilmez, hissedilir ve nefes alınır.",
      pillar: "OKU",
      type: "Seyahat & Kültür",
      curationTag: "Seyahat Denemesi",
      authorId: "deniz_kaya",
      authorName: "Deniz Kaya",
      authorRole: "Yazar & Küratör",
      authorAvatar: "/images/editorial/author_deniz.jpg",
      date: "12 Eylül 2024",
      readTime: "5 dk okuma",
      hasAudio: true,
      audioDuration: "4:15",
      category: "SEYAHAT",
      subCategory: "Seyahat",
      whyItMatters: "Bir şehri turistik bir tüketim nesnesi değil, bir yaşam ritmi ve coğrafi hafıza olarak anlamak.",
      heroImage: "/images/editorial/amalfi_coast.jpg",
      quote: "Coğrafya sadece bir manzara değildir; orada yaşayan insanların sabrıdır.",
      excerpt: "İtalya'nın güneyinde, hayatın daha yavaş aktığı bir sahil. Limon bahçelerinin kokusu, denizin fısıltısı ve taş sokaklarda yankılanan adımlar.",
      body: [
        "Amalfi kıyılarında sabah erken saatlerde yürümek, dünyanın telaşından uzaklaşmanın en zarif yoludur. Taş evlerin pastel tonları, sabah güneşinin vurduğu denizin koyu mavisiyle tezat oluşturur.",
        "Burada zaman saatlerle değil, dalgaların kıyıya vuruşuyla ve limon hasadının döngüsüyle ölçülür. Bir restorana oturduğunuzda garson size acele ettirmez; tam aksine masada uzun oturmanız bir saygı göstergesidir.",
        "Denizin tuzuyla taşın serinliği birbirine karıştığında, insan zamanın çizgisellikten çıkıp dairesel bir sükunete dönüştüğünü fark eder."
      ],
      relatedScreen: "article_amalfi"
    },
    {
      id: "istanbul_avlular",
      title: "İstanbul'un Sessiz Avluları ve Taşın Hafızası",
      subtitle: "Tarihin fısıltısını dinlemek ve şehrin gizli sığınaklarında nefes almak.",
      pillar: "OKU",
      type: "Mimari & Mekân",
      curationTag: "Bugün 7 dakikanı ayır",
      authorId: "selin_arslan",
      authorName: "Selin Arslan",
      authorRole: "Mimar & Koruma Uzmanı",
      authorAvatar: "/images/editorial/architect_selin.jpg",
      date: "18 Ekim 2024",
      readTime: "6 dk okuma",
      hasAudio: true,
      audioDuration: "4:30",
      category: "MİMARİ",
      subCategory: "Mimari",
      whyItMatters: "Şehrin gürültüsünden kaçış değil; tarihin ve malzemenin içinde dinginleşme sanatı.",
      heroImage: "/images/editorial/istanbul_courtyard.jpg",
      quote: "Bir avluya girdiğinde adımların yavaşlar, çünkü taşlar yüzyılların sessizliğini taşır.",
      excerpt: "İstanbul'un han avlularında, sabah güneşinin taş zeminlere vurduğu saatlerde zaman başka türlü akar. Taşın serinliği, suyun şırıltısı ve zamana meydan okuyan sütunlar...",
      body: [
        "Tarihi yarımadanın labirent sokaklarında kaybolurken ansızın açılan bir han kapısı, insanı bir başka yüzyıla taşır. Burada gürültü kesilir, sadece güvercin kanatlarının sesi ve çay bardaklarının şıkırtısı kalır.",
        "Taş malzeme zamanı depolar. Yüzyıllar boyunca üzerinden geçen adımlar taşa bir kavis, bir cila verir. Sentetik olan her şey eskir ve çirkinleşir; oysa doğal taş, ahşap ve demir yaş aldıkça asilleşir.",
        "Bir mekanın ruhu, içine koyduğunuz eşyaların bolluğunda değil; nefes almasına izin verdiğiniz boşluklardadır."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "vintage_saatler",
      title: "Bir Nesnenin Hatırası: Vintage Saatlerin Zaman Felsefesi",
      subtitle: "Mekanik çarkların ritminde kaybolan ve yeniden bulunan dakikalar.",
      pillar: "OKU",
      type: "Denemeler",
      curationTag: "Kültür & Nesne",
      authorId: "murat_can",
      authorName: "Murat Can",
      authorRole: "Koleksiyoner & Yazar",
      authorAvatar: "/images/editorial/author_deniz.jpg",
      date: "24 Ekim 2024",
      readTime: "5 dk okuma",
      hasAudio: false,
      category: "KÜLTÜR & SANAT",
      subCategory: "Denemeler",
      whyItMatters: "Dijital ekranların pikselleri karşısında, mekanik bir saatin yay ve zemberekle kurduğu elle tutulur gerçeklik.",
      heroImage: "/images/editorial/life_rituals.jpg",
      quote: "Zamanı bir ekrandan okumak ile bir çarkın dönüşünde hissetmek arasında koca bir felsefe yatar.",
      excerpt: "Mekanik saatler pil ile değil, sahibinin hareketiyle veya her sabah özenle kurulan bir taç vidasıyla yaşar...",
      body: [
        "Mekanik saatler pil ile değil, sahibinin hareketiyle veya her sabah özenle kurulan bir taç vidasıyla yaşar. Bu, insan ile nesne arasında kurulan en mahrem ritüellerden biridir.",
        "Bir saatin kadranındaki patine, sadece geçen yılları değil, o saati takan ellerin heyecanlarını, bekleyişlerini ve sakin anlarını fısıldar.",
        "Bugün her şeyin anlık ve geçici olduğu bir dünyada, 60 yıl önce üretilmiş bir mekanizmanın aynı titizlikle çalışması, zamansız kalitenin en somut kanıtıdır."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "zamansiz_terzilik",
      title: "Zamana Direnen Terzilik: Sade Bir Zarafet Arayışı",
      subtitle: "Hızlı modanın gürültüsünden uzak, dikişin ve kumaşın sessiz haysiyeti.",
      pillar: "OKU",
      type: "Moda & Zanaat",
      curationTag: "Moda",
      authorId: "aylin_tezel",
      authorName: "Aylin Tezel",
      authorRole: "Stil Danışmanı & Küratör",
      authorAvatar: "/images/editorial/architect_selin.jpg",
      date: "28 Ekim 2024",
      readTime: "6 dk okuma",
      hasAudio: false,
      category: "MODA",
      subCategory: "Moda",
      whyItMatters: "Modayı trendlerin peşinde koşmak değil, bedene ve zamana saygı duyan bir yaşam duruşu olarak ele almak.",
      heroImage: "/images/editorial/architecture_arched.jpg",
      quote: "Gerçek şıklık dikkat çekmek değil, unutulmamaktır.",
      excerpt: "Keten, yün ve ipek... Sentetik elyafların nefes aldırmayan dünyasında, doğal kumaşların tenle kurduğu dürüst diyalog...",
      body: [
        "Gardırobunuzu yüzlerce kıyafetle doldurmak yerine, her biri bir hikaye taşıyan, özenle dikilmiş on parçaya sahip olmak bir lüks değil, bir zihinsel ferahlıktır.",
        "İyi bir kumaş zamanla eskir ama yıpranmaz; tıpkı iyi bir kitap gibi her okunuşta, her giyilişte sahibine daha çok uyum sağlar.",
        "Bir ceketin omuz yapısındaki el dikişi, bir zanaatkarın sabırla harcadığı saatlerin sessiz imzasıdır."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "ege_gastronomi",
      title: "Ege'nin Kadim Zeytin Ağaçları ve Sofra Ritüeli",
      subtitle: "Bin yıllık ağaçların gölgesinde paylaşılan ekmek, zeytinyağı ve sohbet.",
      pillar: "OKU",
      type: "Gastronomi",
      curationTag: "Gastronomi",
      authorId: "kerem_demir",
      authorName: "Kerem Demir",
      authorRole: "Şef & Gastronomi Tarihçisi",
      authorAvatar: "/images/editorial/chef_kerem.jpg",
      date: "30 Ekim 2024",
      readTime: "5 dk okuma",
      hasAudio: true,
      audioDuration: "4:40",
      category: "GASTRONOMİ",
      subCategory: "Gastronomi",
      whyItMatters: "Yemek yemek sadece doymak değil, doğanın ritmine ve sofradaki insanların ruhuna ortak olmaktır.",
      heroImage: "/images/editorial/slow_living_tuscany.jpg",
      quote: "Sofra, insanı yavaşlatan ve birbirine bağlayan en kadim mabettir.",
      excerpt: "Zeytinyağının berrak yeşili bir kaseye döküldüğünde, sadece bir lezzet değil, toprağın güneşe verdiği söz yankılanır...",
      body: [
        "Ege köylerinde zeytin hasadı bir bayram havasında geçer. Ağaçlar sopalarla dövülmez; nazikçe taranır, çünkü her meyve gelecek yılın vaadidir.",
        "Bir sofraya oturduğunuzda aceleyle yemek yemek sofraya hakarettir. Masada kalma süresi uzadıkça sohbet derinleşir, kahkahalar çoğalır, dertler hafifler.",
        "Yerel tohumların, yabani otların ve taş baskı zeytinyağının sunduğu sadelik, dünyanın en karmaşık gurme tabaklarından daha derin bir tat bırakır damakta."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "orhan_pamuk_roportaj",
      title: "Kelimelerin ve Mekânların Peşinde: Edebiyatın Mekânı",
      subtitle: "Masumiyet Müzesi'nden Boğaz'ın hüznüne, eşyaların hafızası üzerine özel bir söyleşi.",
      pillar: "OKU",
      type: "Röportajlar",
      curationTag: "Röportaj",
      authorId: "deniz_kaya",
      authorName: "Deniz Kaya",
      authorRole: "Yazar & Küratör",
      authorAvatar: "/images/editorial/author_deniz.jpg",
      date: "2 Kasım 2024",
      readTime: "8 dk okuma",
      hasAudio: false,
      category: "KÜLTÜR & SANAT",
      subCategory: "Röportajlar",
      whyItMatters: "Büyük yazarların nesnelerle, mekanlarla ve zamanla kurdukları derin bağı bizzat kendi ağızlarından dinlemek.",
      heroImage: "/images/editorial/library_books.jpg",
      quote: "Eşyalar konuşmaz ama içlerinde biriktirdikleri sessizlik insanı ağlatabilir.",
      excerpt: "Bir romanı sadece kelimelerle değil, kahramanların dokunduğu bilet koçanları, kahve fincanları ve küllüklerle somutlaştırmak...",
      body: [
        "Deniz Kaya: 'Mekânlar hafızayı nasıl saklar?' — Soruya verilen yanıt basitti: İnsanlar gider, hikayeler dağılır ama bir masanın üzerindeki çizik ya da bir kapı kolunun aşınmışlığı o anın tanıklığını sonsuza dek sürdürür.",
        "Edebiyat ile mimarlık arasındaki kardeşlik de tam burada başlar. İkisi de insan için bir sığınak inşa etme gayretidir; biri kelimelerle, diğeri taşla.",
        "İstanbul'u anlamak, onun hüzünlü ve asil Boğaz akşamlarını bir müze dinginliğinde izlemekten geçer."
      ],
      relatedScreen: "article_slow_living"
    },
    {
      id: "sabah_rituelleri",
      title: "Sabah Ritüelleri: Zihni Güne Hazırlamanın İncelikleri",
      subtitle: "Günün ilk bir saatini korumak, tüm günün kalitesini belirler.",
      pillar: "OKU",
      type: "Kürasyon",
      curationTag: "Bugün 7 dakikanı ayır",
      authorId: "berke_saygili",
      authorName: "Berke Saygılı",
      authorRole: "Kurucu & Küratör",
      authorAvatar: "/images/editorial/berke_saygili.jpg",
      date: "5 Kasım 2024",
      readTime: "7 dk okuma",
      hasAudio: true,
      audioDuration: "5:30",
      category: "YAŞAM & FELSEFE",
      subCategory: "Kürasyonlar",
      whyItMatters: "Güne telaşla değil, dingin bir farkındalıkla başlamanın pratik ve felsefi adımları.",
      heroImage: "/images/editorial/moment_morning.jpg",
      quote: "Sabahı nasıl karşılarsanız, hayat da sizi öyle ağırlar.",
      excerpt: "Ekrana dokunmadan geçirilen ilk 30 dakika, zihne armağan edilmiş en değerli sığınaktır...",
      body: [
        "Uyanır uyanmaz bildirimlerin ve dünyanın telaşının zihninize dolmasına izin vermeyin. Bırakın dünya biraz beklesin.",
        "Sıcak bir su veya demlenmiş bir kahve, pencereden dışarı bakılan sessiz birkaç dakika ve deftere yazılan tek bir dürüst cümle.",
        "Bu küçük ritüel, gün boyu karşınıza çıkacak dalgalara karşı sağlam bir demir atmanızı sağlar."
      ],
      relatedScreen: "article_slow_living"
    }
  ],

  // 2. KEŞFET (Dimensions: İnsanlar, Mekânlar, Şehirler, Sergiler, Kitaplar, Filmler, Müzikler, Tasarım, Nesneler)
  exploreData: {
    categories: [
      { id: "all", label: "Tümü" },
      { id: "yazilar", label: "Yazılar" },
      { id: "sanat_sergiler", label: "Sanat & Sergiler" },
      { id: "mimari_mekan", label: "Mimari & Mekân" },
      { id: "kitaplar", label: "Kitaplar" },
      { id: "seyahat", label: "Seyahat" },
      { id: "dergiler", label: "Dergiler" },
      { id: "gastronomi", label: "Gastronomi" },
      { id: "moda", label: "Moda" }
    ],
    dimensions: [
      { id: "insanlar", label: "İnsanlar", image: "/images/editorial/dim_insanlar.jpg", count: 9, desc: "Fikirleriyle ilham veren küratörler, mimarlar ve düşünürler" },
      { id: "mekanlar", label: "Mekânlar", image: "/images/editorial/dim_mekanlar.jpg", count: 9, desc: "Fine dining restoranlar, lüks sayfiye ve seçkin kültür mekanları" },
      { id: "sehirler", label: "Şehirler", image: "/images/editorial/dim_sehirler.jpg", count: 9, desc: "Ege, Akdeniz, İtalya, Portekiz ve Karadağ rotaları" },
      { id: "sergiler", label: "Sergiler", image: "/images/editorial/dim_sergiler.jpg", count: 5, desc: "Müze ve bienallerden tarihler ve küratöryel metinler" },
      { id: "kitaplar", label: "Kitaplar", image: "/images/editorial/dim_kitaplar.jpg", count: 8, desc: "Dünya klasikleri, spiritüel ve felsefi başucu eserleri" },
      { id: "filmler", label: "Filmler", image: "/images/editorial/dim_filmler.jpg", count: 7, desc: "Günün seçkin sinema kürasyonu ve izleme listesi" },
      { id: "muzikler", label: "Müzikler", image: "/images/editorial/dim_muzikler.jpg", count: 6, desc: "Günün müziği La Valse d'Amélie ve ses manzaraları" },
      { id: "tasarim", label: "Tasarım", image: "/images/editorial/dim_tasarim.jpg", count: 8, desc: "İç mimari, aydınlatma, seramik, mobilya ve tipografi" },
      { id: "nesneler", label: "Nesneler", image: "/images/editorial/dim_nesneler.jpg", count: 11, desc: "Malzeme ve menşe hikayesi olan seçkin nesneler" }
    ],
    // 2.1 MEKÂNLAR (Fine Dining, Luxury Resorts, Cultured Escapes)
    places: [
      {
        id: "mikla",
        name: "Mikla",
        type: "Fine Dining",
        city: "İstanbul, Türkiye",
        location: "The Marmara Pera Çatı Katı, Beyoğlu",
        chef: "Mehmet Gürs",
        badge: "MICHELIN YILDIZI",
        rating: "Michelin Guide & Gault & Millau",
        image: "/images/editorial/gastronomy_pasta.jpg",
        highlight: "Yeni Anadolu Mutfağı & Boğaziçi Silueti",
        description: "Tarihi Yarımada ve Haliç manzarasına hakim çatısında, Anadolu'nun unutulmaya yüz tutmuş yerel ürünlerini çağdaş İskandinav disiplini ve Akdeniz sıcaklığıyla harmanlayan Türkiye'nin öncü fine dining mabedi.",
        atmosphere: "Zarif, minimalist ve akşam ışığında altın rengine bürünen tarihi siluet.",
        mustTry: "Trakya kıvırcık kuzu, isli yoğurt ve yabani otlar.",
        tags: ["Fine Dining", "İstanbul", "Michelin"]
      },
      {
        id: "sunset_grill",
        name: "Sunset Grill & Bar",
        type: "Fine Dining",
        city: "İstanbul, Türkiye",
        location: "Ulus Parkı İçi, Ulus",
        chef: "Fabrice Canelle & Hiroki Takemura",
        badge: "İKONİK RESTORAN",
        rating: "30 Yıllık Kültür",
        image: "/images/editorial/bosphorus_view_1.jpg",
        highlight: "Panoramik Boğaz & Çağdaş Akdeniz-Sushi",
        description: "Otuz yıldır İstanbul cemiyet hayatının ve seçkin gezginlerin buluşma noktası. Boğaz Köprüsü'nü kuşbakışı gören terasında Akdeniz lezzetleri ve usta ellerden çıkan rafine sushi seçkisi.",
        atmosphere: "Görkemli Boğaziçi panoraması, kusursuz servis ve zamansız kulüp şıklığı.",
        mustTry: "Trüflü ızgara deniz tarağı ve özel mahzen şarap eşleşmeleri.",
        tags: ["Fine Dining", "İstanbul", "Boğaz Manzarası"]
      },
      {
        id: "casa_dell_arte",
        name: "Casa Dell'Arte",
        type: "Lüks Kültür Mekânı",
        city: "Bodrum, Türkiye",
        location: "Torba Koyu, Muğla",
        chef: "Özel Sanat Mutfağı",
        badge: "SANAT & GASTRONOMİ",
        rating: "Türkiye'nin İlk Sanat Oteli",
        image: "/images/editorial/slow_living_mediterranean_1.jpg",
        highlight: "200+ Orijinal Sanat Eseri İçinde Konaklama & Akdeniz Sofrası",
        description: "Büyükkuşoğlu Ailesi'nin Fikret Mualla, Abidin Dino, Bedri Rahmi gibi ustalardan oluşan özel koleksiyonunun içinde uyanmak. Denize sıfır heykelli bahçesinde taze Ege otları ve deniz mahsulleri.",
        atmosphere: "Sanat galerisi ile dingin bir Akdeniz villasının kusursuz kesişimi.",
        mustTry: "Ege otlu ızgara ahtapot ve taze incirli keçi peyniri.",
        tags: ["Lüks Sayfiye & Resort", "Bodrum", "Sanat"]
      },
      {
        id: "amanruya",
        name: "Amanruya",
        type: "Lüks Sayfiye & Resort",
        city: "Bodrum, Türkiye",
        location: "Demirbükü Koyu, Göltürkbükü",
        chef: "Executive Chef Ege Seçkisi",
        badge: "MÜNZEVİ LÜKS",
        rating: "Aman Resorts Zarafeti",
        image: "/images/editorial/slow_living_terrace_view.jpg",
        highlight: "Zeytinlikler Arasında Taş Avlular & Münzevi Koy",
        description: "Klasik Osmanlı ve Akdeniz taş mimarisinden esinlenen bağımsız taş köşkler, özel yüzme havuzları ve asırlık zeytin ağaçları. Dış dünyadan tamamen izole, saf dinginlik ve rafine lezzet.",
        atmosphere: "Sükunet, mermer avlular, çam kokusu ve turkuaz bir deniz.",
        mustTry: "Bodrum mandalinası ile marine edilmiş lagos balığı.",
        tags: ["Lüks Sayfiye & Resort", "Bodrum", "İzole Yaşam"]
      },
      {
        id: "d_maris_bay",
        name: "D-Maris Bay",
        type: "Lüks Sayfiye & Resort",
        city: "Marmaris & Datça, Türkiye",
        location: "Datça Yarımadası Kanyonu",
        chef: "Zuma, La Guérite, Nusr-Et",
        badge: "DOĞA & LÜKS",
        rating: "Doğu Akdeniz'in Zirvesi",
        image: "/images/editorial/slow_living_mediterranean_2.jpg",
        highlight: "5 Özel Beyaz Kum Koyu & Kanyon Manzarası",
        description: "Ege ve Akdeniz'in buluştuğu Datça Yarımadası'nda, volkanik dağ yamaçlarından turkuaz koylara inen bir vaha. Zuma'nın modern Japon tatlarından La Guérite'in Fransız Rivierası ruhuna dünya gastronomisi.",
        atmosphere: "Kanyon yamaçlarında sonsuzluk, helikopter transferleri ve saf zarafet.",
        mustTry: "Zuma siyah morina balığı ve La Guérite Akdeniz langustini.",
        tags: ["Lüks Sayfiye & Resort", "Ege & Akdeniz", "Dünya Mutfağı"]
      },
      {
        id: "villa_deste",
        name: "Villa d'Este",
        type: "Tarihi Lüks Mekân",
        city: "Como Gölü, İtalya",
        location: "Cernobbio, Lombardiya",
        chef: "Michele Zambanini",
        badge: "TARİHİ MİRAS",
        rating: "150 Yıllık Lüks Geleneği",
        image: "/images/editorial/florence_duomo.jpg",
        highlight: "16. Yüzyıl Rönesans Sarayı & Veranda Restoranı",
        description: "Kardinal Tolomeo Gallio için inşa edilmiş, 25 dönümlük Rönesans parkına sahip efsanevi saray. Como Gölü'nün sakin suları kıyısındaki cam kaplı Veranda Restoranı'nda klasik İtalyan aristokrasisi.",
        atmosphere: "Mermer sütunlar, asırlık heykeller ve göl sularına vuran ay ışığı.",
        mustTry: "Como Gölü levreği risottosu ve Piemonte trüflü el yapımı tagliolini.",
        tags: ["Tarihi & Kültürel Mekânlar", "İtalya", "Göl Kıyısı"]
      },
      {
        id: "belmond_caruso",
        name: "Belmond Hotel Caruso",
        type: "Lüks Sayfiye & Gastronomi",
        city: "Ravello, Amalfi, İtalya",
        location: "Piazza San Giovanni del Toro",
        chef: "Armando Aristarco",
        badge: "AMALFI MANZARASI",
        rating: "11. Yüzyıl Sarayı",
        image: "/images/editorial/amalfi_coast.jpg",
        highlight: "Uçurum Kenarında Sonsuzluk Havuzu & Belvedere",
        description: "Deniz seviyesinden 350 metre yükseklikte, bulutların üzerinde bir balkon. 11. yüzyıldan kalma freskli tavanlar, limon bahçeleri ve Akdeniz'in sonsuz maviliğine bakan Ristorante Belvedere.",
        atmosphere: "Gül ve limon kokulu esintiler, opera tınıları ve gökyüzü manzarası.",
        mustTry: "Amalfi limonu ve fesleğen kremalı deniz mahsullü linguine.",
        tags: ["Lüks Sayfiye & Resort", "İtalya", "Amalfi"]
      },
      {
        id: "da_vittorio",
        name: "Da Vittorio",
        type: "Fine Dining",
        city: "Brusaporto, Bergamo, İtalya",
        location: "Via Cantalupa, Lombardiya",
        chef: "Chicco & Bobo Cerea",
        badge: "3 MICHELIN YILDIZI",
        rating: "3 Michelin Yıldızı",
        image: "/images/editorial/slow_living_tuscany.jpg",
        highlight: "Cerea Ailesi Mükemmeliyeti & Efsanevi Paccheri",
        description: "Lombardiya tepelerindeki bir malikanede yarım asırdır süren bir gastronomi hanedanı. Deniz ürünlerinin mutlak tazeliği, sıcacık aile misafirperverliği ve masada taze parmesanla tamamlanan efsanevi makarna.",
        atmosphere: "Sıcak kır malikanesi lüksü, usta sommelier rehberliği ve saf lezzet.",
        mustTry: "I Paccheri alla Vittorio (Üç farklı domates soslu imza makarna).",
        tags: ["Fine Dining", "İtalya", "3 Michelin"]
      },
      {
        id: "neolokal",
        name: "Neolokal",
        type: "Fine Dining",
        city: "İstanbul, Türkiye",
        location: "SALT Galata, Karaköy",
        chef: "Maksut Aşkar",
        badge: "SÜRDÜRÜLEBİLİR FINE DINING",
        rating: "Michelin Yıldızı & Yeşil Yıldız",
        image: "/images/editorial/istanbul_courtyard.jpg",
        highlight: "SALT Galata Tarihi Binası & Anadolu Hafıza Mutfağı",
        description: "Geleneksel Anadolu reçetelerini yok olmaktan kurtarıp çağdaş gastronomi sanatıyla geleceğe taşıyan bir hafıza merkezi. Eski Osmanlı Bankası kasasında, Tarihi Yarımada ışıklarına karşı derin bir sofra.",
        atmosphere: "Kültürel derinlik, taş tonozlar ve bilinçli mutfak felsefesi.",
        mustTry: "Kadınbudu köfte dekonstrüksiyonu ve Siyez bulguru risotto.",
        tags: ["Fine Dining", "İstanbul", "Sürdürülebilirlik"]
      }
    ],

    // 2.2 ŞEHİRLER (Aegean, Islands, Med & Italy, Portugal, Montenegro)
    cities: [
      {
        id: "bodrum_gumusluk",
        name: "Bodrum & Gümüşlük",
        region: "Muğla, Ege Kıyıları",
        country: "Türkiye",
        badge: "EGE KIYILARI",
        image: "/images/editorial/slow_living_mediterranean_1.jpg",
        tagline: "Antik Myndos kalıntıları, taş sokaklar ve deniz kenarı akşamları",
        nuances: [
          "Gümüşlük koyunda suyun içindeki masalarda gün batımını beklemek",
          "Karakaya Köyü'nün terkedilmiş taş evlerinde rüzgarı dinlemek",
          "Mandalina bahçeleri arasında gizlenmiş sanatçı atölyeleri",
          "Geceleri begonvillerin arasından süzülen hafif tuzlu meltem"
        ],
        slowTravelTip: "Gümüşlük Limanı'nda sabah saat 07:30'da balıkçı tekneleri dönerken sessiz bir Türk kahvesi için.",
        vibe: "Bohem, antik ve rafine Ege sadeliği."
      },
      {
        id: "urla_alacati",
        name: "Urla & Alaçatı",
        region: "İzmir, Ege",
        country: "Türkiye",
        badge: "EGE KIYILARI",
        image: "/images/editorial/slow_living_coffee_morning.jpg",
        tagline: "Taş bağ evleri, Urla gastronomi sahnesi ve enginar vadileri",
        nuances: [
          "Urla Bağ Yolu'nda butik şarap üreticileriyle mahzen sohbetleri",
          "Sanat Sokağı'ndaki antikacılar ve el yapımı seramik atölyeleri",
          "Alaçatı'nın erken sabahında rüzgarın taş cumbalara çarptığı sessizlik",
          "Kuşçular köyünde zeytin ağaçları gölgesinde uzun öğle yemekleri"
        ],
        slowTravelTip: "Cumartesi sabahı Urla İskele'de yerel üretici pazarından taze yabani otlar ve zeytinyağı alın.",
        vibe: "Gastronomik, entelektüel ve toprağa bağlı."
      },
      {
        id: "kas_kalkan",
        name: "Kaş & Kalkan",
        region: "Antalya, Akdeniz Kıyıları",
        country: "Türkiye",
        badge: "AKDENİZ KIYILARI",
        image: "/images/editorial/slow_living_mediterranean_3.jpg",
        tagline: "Likya Yolu patikaları, antik amfitiyatro ve turkuaz koylar",
        nuances: [
          "Antiphellos Antik Tiyatrosu'nda Meis Adası'na karşı güneşin batışı",
          "Kaputaş Kanyonu'ndan süzülen saf turkuaz sular",
          "Kalkan'ın dik yamaçlarındaki begonvilli çatı terasları",
          "Kekova batık şehri üzerinde kano ile sessizce kürek çekmek"
        ],
        slowTravelTip: "Kaş amfitiyatrosuna yanınıza bir kitap ve defter alarak saat 18:00 gibi gidin; basamaklarda gün batımını not edin.",
        vibe: "Maceracı, derin ve antik Akdeniz büyüsü."
      },
      {
        id: "bozcaada",
        name: "Bozcaada (Tenedos)",
        region: "Çanakkale, Kuzey Ege",
        country: "Türkiye",
        badge: "ADALAR",
        image: "/images/editorial/slow_living_coffee_terrace.jpg",
        tagline: "Polente rüzgar gülleri, çavuş üzümü bağları ve ada dinginliği",
        nuances: [
          "Polente Feneri'nde günün son ışıklarını yerel ada şarabıyla karşılamak",
          "Rum Mahallesi'nin taş sokaklarında fırından yeni çıkmış damla sakızlı kurabiye kokusu",
          "Ayazma Koyu'nun kristal gibi soğuk ve berrak suları",
          "Eylül bağ bozumu döneminde adayı saran tatlı şıra aroması"
        ],
        slowTravelTip: "Adada araba yerine bisiklet kiralayın; bağ yollarında rüzgarı yüzünüzde hissederek kaybolun.",
        vibe: "Nostaljik, pastoral ve zamandan muaf."
      },
      {
        id: "florence_tuscany",
        name: "Floransa & Toskana",
        region: "Toskana",
        country: "İtalya",
        badge: "İTALYA",
        image: "/images/editorial/florence_duomo.jpg",
        tagline: "Arno Nehri, Rönesans atölyeleri ve selvi ağaçlı tepeler",
        nuances: [
          "Oltrarno mahallesindeki usta deri ve ebru kağıdı zanaatkarları",
          "Ponte Vecchio'dan sabah sisi henüz dağılmamışken geçmek",
          "Chianti vadisindeki taştan şatolar ve yüz yıllık zeytinlikler",
          "San Miniato al Monte merdivenlerinden Floransa'nın kırmızı kiremitlerine bakmak"
        ],
        slowTravelTip: "Uffizi'ye gitmek yerine Oltrarno'daki küçük marangoz ve cilt atölyelerinde zanaatkarları iş başında izleyin.",
        vibe: "Sanatsal, soylu ve derin estetik."
      },
      {
        id: "ravello_positano",
        name: "Ravello & Positano",
        region: "Campania, Amalfi Kıyısı",
        country: "İtalya",
        badge: "İTALYA",
        image: "/images/editorial/slow_living_positano.jpg",
        tagline: "Uçurumlara asılmış limon bahçeleri ve sonsuz Akdeniz mavisi",
        nuances: [
          "Villa Cimbrone'nin 'Sonsuzluk Terası'ndan gökyüzüne bakmak",
          "Positano'nun dik basamaklarında pastel renkli evlerin arasından denize inmek",
          "Amalfi katedralinin Arap-Norman çizgili sütunları",
          "Limon kokulu serin akşam rüzgarında bir kadeh limoncello"
        ],
        slowTravelTip: "Ravello'dan Minori'ye inen 'Limon Patikası'nda (Sentiero dei Limoni) sabah erkenden yürüyün.",
        vibe: "Romantik, dramatik ve lirik Akdeniz."
      },
      {
        id: "porto_douro",
        name: "Porto & Douro Vadisi",
        region: "Kuzey Portekiz",
        country: "Portekiz",
        badge: "PORTEKİZ",
        image: "/images/editorial/slow_living_amalfi_terrace.jpg",
        tagline: "Ribeira rıhtımı, azulejo seramikleri ve nehir boyu teras bağları",
        nuances: [
          "São Bento Tren Garı'ndaki 20.000 mavi-beyaz azulejo çinisi",
          "Douro Nehri'nde ahşap rabelo teknelerinin sakin salınımı",
          "Vila Nova de Gaia'daki asırlık şarap mahzenlerinin meşe kokusu",
          "Livraria Lello'nun kırmızı ahşap merdivenlerinde edebiyat arayışı"
        ],
        slowTravelTip: "Akşamüstü Miradouro da Vitória'ya çıkıp güneşin Douro Nehri üzerinde altın gibi erimesini izleyin.",
        vibe: "Melankolik (saudade), nostaljik ve samimi."
      },
      {
        id: "lisbon_sintra",
        name: "Lizbon & Sintra",
        region: "Estremadura",
        country: "Portekiz",
        badge: "PORTEKİZ",
        image: "/images/editorial/architecture_arched.jpg",
        tagline: "Yedi tepe, sarı tramvaylar, miradourolar ve sisli saraylar",
        nuances: [
          "Alfama'nın dik sokaklarındaki pencerelerden taşan hüzünlü fado sesleri",
          "28 numaralı nostaljik tramvayın dar taş virajlardaki tıkırtısı",
          "Sintra'nın sisli okaliptüs ormanlarında gizlenen Quinta da Regaleira",
          "Belém'de fırından yeni çıkmış sıcak pastel de nata ve tarçın kokusu"
        ],
        slowTravelTip: "Miradouro de Santa Luzia terasında asma çardakların altında bir deftere notlar alın.",
        vibe: "Şiirsel, ışıklı ve Atlantik serinliği."
      },
      {
        id: "kotor_perast",
        name: "Kotor & Perast",
        region: "Boka Kotorska (Boka Körfezi)",
        country: "Karadağ",
        badge: "KARADAĞ",
        image: "/images/editorial/slow_living_terrace_5.jpg",
        tagline: "Fiyort benzeri körfez suları, Venedik taş sarayları ve adacıklar",
        nuances: [
          "Perast açıklarındaki yapay 'Our Lady of the Rocks' kilise adası",
          "Kotor Kalesi surlarına tırmanırken körfezin ayna gibi parlayan suyu",
          "Ortaçağ taş sokaklarında yankılanan kedi patileri ve çan sesleri",
          "Körfez kıyısındaki taş konakların önünde yerel zeytin ve incir ikramı"
        ],
        slowTravelTip: "Sabah erkenden Perast sahilinde ahşap bir iskelede oturup körfezin sakin sularında yüzün.",
        vibe: "Mistik, korunaklı ve Venedik mirası."
      }
    ],

    // 2.3 SERGİLER (Exhibitions with Dates, Venues, and Full Readable Curatorial Content)
    exhibitions: [
      {
        id: "exh_zamansiz_izler",
        title: "Zamansız İzler: Form, Malzeme ve Boşluk",
        venue: "İstanbul Modern",
        city: "Karaköy, İstanbul",
        dates: "12 Ekim 2026 – 15 Ocak 2027",
        curator: "Zeynep Oğuz",
        badge: "GÜNCEL SERGİ",
        image: "/images/editorial/art_exhibition.jpg",
        synopsis: "Akdeniz ve Anadolu formlarının çağdaş heykel ve yerleştirmelerle buluştuğu monolitik bir tefekkür alanı.",
        curatorialEssay: `
          <h3>Küratöryel Çerçeve: Maddenin Hafızası ve Zamansızlık</h3>
          <p>Hızlı görsel tüketimin ve geçici dijital uyaranların dünyasında, 'Zamansız İzler' sergisi ziyaretçiyi yavaşlamaya ve maddenin kendi iç sesini dinlemeye çağırıyor. Küratör Zeynep Oğuz'un bir araya getirdiği 14 çağdaş heykeltıraş ve yerleştirme sanatçısı; ham taş, dövme bronz, yanmış ahşap ve el dokuması pamuklu keten gibi arkaik malzemelerle çalışıyor.</p>
          <p>Sergi mekanında eserler, aralarındaki negatif boşluklar gözetilerek yerleştirildi. Her heykel, yalnızca kendi varlığıyla değil, etrafında yarattığı sessizlik halkasıyla mevcuttur. Mimar Renzo Piano'nun tasarladığı İstanbul Modern binasının Boğaz ışığıyla yıkanan zemininde, güneşin açısına göre gün boyu değişen gölgeler serginin ayrılmaz bir parçası haline geliyor.</p>
          <blockquote>"Maddeye şekil vermek, ona yeni bir şey eklemek değil; içindeki kadim formu sabırla açığa çıkarmaktır." — Sergi Manifestosu</blockquote>
          <p>Öne çıkan eserler arasında Deniz Kaya'nın 'Monolit N°4' isimli traverten yerleştirmesi ve Leyla Vidinli'nin doğal kök boyalı devasa keten sarkaçları yer alıyor. Sergi, izleyiciye bir sanat nesnesine bakmanın ötesinde, onun ağırlığını ve nefesini hissetme imkânı tanıyor.</p>
        `,
        featuredArtists: ["Deniz Kaya", "Leyla Vidinli", "Can Altay", "Cevdet Erek", "Nermin Kura"],
        visitingHours: "Salı – Pazar: 10:00 – 18:00 (Perşembe günleri 20:00'ye kadar açık)"
      },
      {
        id: "exh_mekanin_hafizasi",
        title: "Mekânın Hafızası ve Sessizlik",
        venue: "Arter",
        city: "Dolapdere, İstanbul",
        dates: "05 Kasım 2026 – 28 Şubat 2027",
        curator: "Emre Baykal",
        badge: "YENİ AÇILDI",
        image: "/images/editorial/modern_interior.jpg",
        synopsis: "Ses enstalasyonları, monokrom tuvaller ve mimari boşluklar üzerinden kentsel hafızanın dinlenmesi.",
        curatorialEssay: `
          <h3>Küratöryel Çerçeve: Kentsel Gürültünün Ardındaki Fısıltı</h3>
          <p>Arter'in galeri mekanlarını birer yankı odasına dönüştüren 'Mekânın Hafızası ve Sessizlik', mimarinin görünmeyen katmanlarını ses ve monokrom yüzeyler üzerinden görünür kılmayı hedefliyor. Emre Baykal küratörlüğünde hazırlanan sergi, ziyaretçileri göz odaklı algıdan kulak ve beden odaklı bir algı eşiğine taşıyor.</p>
          <p>İstanbul'un tarihi hanlarından, terkedilmiş atölyelerinden ve sahil şeridinden toplanan saha ses kayıtları (field recordings), çok kanallı ses yerleştirmeleriyle galeriye aktarılıyor. Bu seslere eşlik eden monokrom grafit paneller ve ham alçı heykeller, zamanın mekân üzerindeki aşındırıcı ve iyileştirici etkisini somutlaştırıyor.</p>
          <blockquote>"Sessizlik bir yokluk değil; dikkat kesildiğimizde başlayan en gürültülü varoluştur."</blockquote>
          <p>Ziyaretçilerin ayakkabılarını çıkararak girdiği özel keçe kaplı 'Meditasyon Odası', serginin doruk noktasını oluşturuyor. Burada her 20 dakikada bir çalan düşük frekanslı çan sesleri, bedenin kalp atış ritmiyle senkronize oluyor.</p>
        `,
        featuredArtists: ["Sarkis", "Nevin Aladağ", "Erkan Özgen", "Banu Cennetoğlu"],
        visitingHours: "Salı – Pazar: 11:00 – 19:00"
      },
      {
        id: "exh_venedik_bienali",
        title: "60. Venedik Sanat Bienali: Yabancılar Her Yerde",
        venue: "Giardini & Arsenale",
        city: "Venedik, İtalya",
        dates: "20 Nisan – 24 Kasım 2026",
        curator: "Adriano Pedrosa",
        badge: "ULUSLARARASI BİENAL",
        image: "/images/editorial/art_sculpture.jpg",
        synopsis: "Dünyanın en prestijli sanat buluşmasında yerli halkların zanaat hafızası ve sınır ötesi pratikler.",
        curatorialEssay: `
          <h3>Küratöryel Çerçeve: Stranieri Ovunque</h3>
          <p>Adriano Pedrosa'nın küratörlüğünü üstlendiği 60. Venedik Bienali, 'Yabancılar Her Yerde' (Stranieri Ovunque) başlığı altında küresel güneyin, yerli toplulukların ve sürgündeki sanatçıların seslerini Venedik'in tarihi tuğlaları arasına taşıyor. Sergi, Batı merkezli sanat kanonunun dışına çıkarak zanaat, tekstil, seramik ve kolektif hafıza pratiklerini ana sahneye yerleştiriyor.</p>
          <p>Arsenale'nin yüzlerce yıllık tersane salonlarında asılı duran devasa el dokuması goblenler, göç hikayelerini ve atalardan kalma mitolojileri anlatıyor. İtalyan pavyonunda ise suyun ve lagünün kırılgan ekolojisi üzerine kurulan ses ve ışık enstalasyonları, Venedik'in hem bir rüya hem de iklim krizinin ön cephesi olduğunu hatırlatıyor.</p>
          <p>MAISON editoryal ekibi olarak bu bienali, 'zanaat ile çağdaş sanatın ayrılmazlığı' tezimizin küresel ölçekteki en görkemli teyidi olarak görüyoruz.</p>
        `,
        featuredArtists: ["Gülsün Karamustafa (Türkiye Pavyonu)", "Anna Bella Geiger", "Yinka Shonibare", "Bouchra Khalili"],
        visitingHours: "Salı – Pazar: 10:00 – 18:00 (Pazartesi kapalı)"
      },
      {
        id: "exh_sabanci_isik",
        title: "Işığın Peşinde: Boğaziçi ve Akdeniz Karşılaşmaları",
        venue: "Sakıp Sabancı Müzesi",
        city: "Emirgan, İstanbul",
        dates: "18 Eylül – 20 Aralık 2026",
        curator: "Dr. Nazan Ölçer",
        badge: "RETROSPEKTİF",
        image: "/images/editorial/bosphorus_bebek.jpg",
        synopsis: "Atlı Köşk'ün bahçesinde 19. yüzyıldan günümüze su üzerindeki parıltıların ve gölgelerin görsel tarihi.",
        curatorialEssay: `
          <h3>Küratöryel Çerçeve: Suyun ve Işığın Simyası</h3>
          <p>Sakıp Sabancı Müzesi'nin Boğaz'a nazır yemyeşil korusunda gerçekleşen 'Işığın Peşinde', Akdeniz ve Boğaziçi ışığının ressamlar, edebiyatçılar ve fotoğrafçılar üzerindeki büyüleyici etkisini belgeliyor. 19. yüzyıl oryantalist ustalarından Türk izlenimcilerine (1914 Kuşağı) kadar uzanan zengin seçki, su yüzeyinde kırılan ışığın melankoli ve neşeyle nasıl buluştuğunu gösteriyor.</p>
          <p>İbrahim Çallı, Hikmet Onat, Hoca Ali Rıza ve Fausto Zonaro'nun fırçasından çıkan sabah suları, Bebek koyları ve yalı pencereleri; günümüz çağdaş fotoğrafçılarının analog kareleriyle yan yana sergileniyor. Sergi, Ahmet Hamdi Tanpınar'ın 'Huzur' romanındaki Boğaziçi tasvirleriyle zenginleştirilmiş editoryal bir rota sunuyor.</p>
        `,
        featuredArtists: ["Hikmet Onat", "Fausto Zonaro", "Hoca Ali Rıza", "Ara Güler", "Cem Talu"],
        visitingHours: "Salı – Pazar: 10:00 – 18:00"
      },
      {
        id: "exh_mesher_toprak",
        title: "Toprağın Dili: Kadim Zanaattan Çağdaş Heykele",
        venue: "Meşher",
        city: "İstiklal Caddesi, Beyoğlu",
        dates: "01 Ekim 2026 – 15 Şubat 2027",
        curator: "Nilüfer Şahin",
        badge: "ZANAAT & HEYKEL",
        image: "/images/editorial/ceramic_bowl.jpg",
        synopsis: "Anadolu'nun 4000 yıllık pişmiş toprak geleneğinden çağdaş seramik heykeltıraşlarına uzanan süreklilik.",
        curatorialEssay: `
          <h3>Küratöryel Çerçeve: Ateş, Su ve İnsan Eli</h3>
          <p>Toprak, insanlığın ilk tuvali ve ilk sığınağıdır. Meşher'in Beyoğlu'ndaki tarihi binasında gerçekleşen bu sergi, Hitit ve Frig pişmiş toprak kaplarından günümüz seramik sanatçılarına kadar uzanan kesintisiz bir zanaat mirasını kutluyor. Sergi, seramiği yalnızca fonksiyonel bir eşya değil, ruhsal bir ifade biçimi olarak ele alıyor.</p>
          <p>Geleneksel Avanos ve Kütahya ustalarının çark başındaki el hareketleri video dökümantasyonlarıyla aktarılırken, çağdaş sanatçıların kusurluluğu öven (wabi-sabi) organik heykelleri sergi salonlarını dolduruyor.</p>
        `,
        featuredArtists: ["Alev Ebüzziya Siesbye", "Candeğer Furtun", "Atelier Lune", "Füreya Koral Arşivi"],
        visitingHours: "Salı – Pazar: 11:00 – 19:00"
      }
    ],

    // 2.4 KİTAPLAR (World Classics, Spiritual, Philosophical & Intellectual Masterpieces - Not Just Shopping)
    curatedBooks: [
      {
        id: "book_calvino_cities",
        title: "Görünmez Kentler",
        originalTitle: "Le città invisibili",
        author: "Italo Calvino",
        translator: "Işıl Saatçıoğlu",
        publisher: "Yapı Kredi Yayınları",
        category: "Dünya Klasikleri",
        genre: "Felsefi Kurgu & Şiirsel Mimarlık",
        pages: 164,
        cover: "/images/editorial/book_reading.jpg",
        badge: "BAŞYAPIT",
        quote: "Bir kentin tadını sokaklarında değil, pencerelerinden sızan akşamlarda çıkarırsınız.",
        curatorReview: "Marco Polo ile Kubilay Han'ın satranç tahtası ve haritalar başında yaptıkları hayali sohbetler. Calvino'nun anlattığı 55 kent fiziksel coğrafyada değil; insan hafızasında, arzularında, pişmanlıklarında ve rüyalarında yer alır. Mimarlar, yazarlar ve şehir tutkunları için zihni genişleten en berrak edebiyat anıtı.",
        whyRead: "Şehirlere ve gündelik mekanlara sıradan beton yığınları olarak değil, anlam ve duygu yüklü semboller olarak bakmayı öğrenmek için.",
        keyThemes: ["Hafıza & Kent", "Boşluk Estetiği", "Görünmez Bağlar", "Şiirsel Coğrafya"]
      },
      {
        id: "book_proust_swann",
        title: "Kayıp Zamanın İzinde: Swann'ların Tarafı",
        originalTitle: "Du côté de chez Swann",
        author: "Marcel Proust",
        translator: "Roza Hakmen",
        publisher: "Yapı Kredi Yayınları",
        category: "Dünya Klasikleri",
        genre: "Dünya Romanının Zirvesi",
        pages: 468,
        cover: "/images/editorial/library_books.jpg",
        badge: "EDEBİ ANIT",
        quote: "Hakiki keşif yolculuğu yeni manzaralar aramakta değil, yeni gözlere sahip olmaktadır.",
        curatorReview: "Ihlamur çayına batırılan madlen çöreğinin damağa değdiği an başlayan bu anıtsal nehir roman, insan bilincinin ve hafızasının en derin arkeolojisidir. Proust, Combray'in çan kulelerini, bir kadının elbisesindeki kıvrımı ya da sonbahar serinliğini öyle bir titizlikle anlatır ki, zamanın akışını durdurup her saniyeyi sonsuzluğa çevirir.",
        whyRead: "Hayatın en küçük ayrıntılarını, kokuları ve geçmiş anları kristal bir berraklıkla hissetmek ve algıyı keskinleştirmek için.",
        keyThemes: ["İstemsiz Bellek", "Duyusal Algı", "Zamanın Dönüşümü", "Aşk & Kıskançlık"]
      },
      {
        id: "book_tanpinar_huzur",
        title: "Huzur",
        originalTitle: "Huzur",
        author: "Ahmet Hamdi Tanpınar",
        translator: "Orijinal Türkçe",
        publisher: "Dergâh Yayınları",
        category: "Dünya Klasikleri",
        genre: "Türk Edebiyatı Klasiği & Şehir Ruhu",
        pages: 418,
        cover: "/images/editorial/bosphorus_sunset.jpg",
        badge: "İSTANBUL RUHU",
        quote: "Ne içindeyim zamanın, ne de büsbütün dışında; yekpare, geniş bir anın parçalanmaz akışında.",
        curatorReview: "Mümtaz ve Nuran'ın aşkı ekseninde, İkinci Dünya Savaşı'nın arifesinde İstanbul'un tarihi mahallelerini, Boğaziçi'nin ışık oyunlarını ve Klasik Türk Musikisi'nin derin felsefesini nakşeden bir başyapıt. Şehrin mimarisini ve musikisini insan ruhunun uzantısı olarak gören eşsiz bir roman.",
        whyRead: "Boğaziçi'nin akşam sularını, mazi hissini ve Doğu ile Batı arasındaki derin zihinsel dengeyi kavramak için.",
        keyThemes: ["Boğaziçi Medeniyeti", "Klasik Musiki", "İçsel Huzur Arayışı", "Zaman Felsefesi"]
      },
      {
        id: "book_aurelius_meditations",
        title: "Kendime Düşünceler",
        originalTitle: "Meditations (Τὰ εἰς ἑαυτόν)",
        author: "Marcus Aurelius",
        translator: "Şadan Karadeniz",
        publisher: "İş Bankası Kültür Yayınları",
        category: "Felsefe & Düşünce",
        genre: "Stoacı Felsefe & Ruhsal Rehber",
        pages: 208,
        cover: "/images/editorial/slow_living_coffee_morning.jpg",
        badge: "STOACI REHBER",
        quote: "Ruhun rengi, düşüncelerinin rengine bürünür. Zihnini neyle beslersen osun.",
        curatorReview: "Roma İmparatoru Marcus Aurelius'un Tuna boylarındaki savaş çadırında gece mum ışığında kendi vicdanına yazdığı samimi günlüğü. Dış dünyada olup biten fırtınalara rağmen içsel bir kale kurmanın, erdemli yaşamanın ve her günü son günmüş gibi sükunetle karşılamanın kadim felsefesi.",
        whyRead: "Modern hayatın yarattığı kaygı, hız ve öfkeye karşı sarsılmaz bir içsel dinginlik ve zihinsel direnç kazanmak için.",
        keyThemes: ["İçsel Kale", "Stoacı Sükunet", "Özdenetim", "Evrensel Doğa"]
      },
      {
        id: "book_bachelard_poetics",
        title: "Mekânın Poetikası",
        originalTitle: "La poétique de l'espace",
        author: "Gaston Bachelard",
        translator: "Alp Tümertekin",
        publisher: "İthaki Yayınları",
        category: "Mimarlık & Poetik",
        genre: "Fenomenoloji & Mekân Felsefesi",
        pages: 280,
        cover: "/images/editorial/modern_interior.jpg",
        badge: "MİMARLIK FELSEFESİ",
        quote: "Ev, dünyadaki köşemizdir; ilk evrenimizdir. Şiirsel hayal gücünün gerçek yuvasıdır.",
        curatorReview: "Fransız düşünür Bachelard; evin mahzeninden tavan arasına, çekmecelerinden gizli sandıklarına kadar her köşenin insan ruhunu ve çocukluk düşlerini nasıl koruduğunu araştırıyor. Mekânı soğuk bir geometri değil, insanın hayal kurma yetisini barındıran sıcak bir kabuk olarak ele alan lirik bir metin.",
        whyRead: "Yaşadığımız evin, oturduğumuz köşenin ve eşyaların ruhsal dünyamızdaki derin yankısını keşfetmek için.",
        keyThemes: ["Ev İmgesi", "Sığınak & Korunma", "Tavan Arası & Mahzen", "Düşlem Poetikası"]
      },
      {
        id: "book_hesse_siddhartha",
        title: "Siddhartha",
        originalTitle: "Siddhartha",
        author: "Hermann Hesse",
        translator: "Kâmuran Şipal",
        publisher: "Can Yayınları",
        category: "Spiritüel & İçsel Arayış",
        genre: "Spiritüel Klasik & Doğu Bilgeliği",
        pages: 152,
        cover: "/images/editorial/slow_living_terrace_view.jpg",
        badge: "İÇSEL UYANIŞ",
        quote: "Nehir her yerdedir; kaynağında, döküldüğü yerde, akıntıda, denizde... Nehir için sadece şimdiki an vardır.",
        curatorReview: "Brahman oğlu Siddhartha'nın tüm öğretileri, hocaları ve dogmaları geride bırakarak hakikati kendi deneyimleriyle arayışının şiirsel serüveni. Kayıkçı Vasudeva ile birlikte nehrin sesini dinlemeyi öğrenen Siddhartha, bilgeliğin başkasına aktarılamayacağını, ancak bizzat yaşanarak kavranacağını fısıldar.",
        whyRead: "Hayatın arayışlarla dolu yollarında kendi pusulanızı bulmak ve 'şimdi'nin bilgeliğine teslim olmak için.",
        keyThemes: ["Nehir Metaforu", "Öğretisiz Bilgelik", "Birlik Hissi", "Dinginlik"]
      },
      {
        id: "book_pallasmaa_eyes",
        title: "Tenin Gözleri: Mimarlık ve Duyular",
        originalTitle: "The Eyes of the Skin",
        author: "Juhani Pallasmaa",
        translator: "Aziz Ufuk Kılıç",
        publisher: "YEM Yayın",
        category: "Mimarlık & Poetik",
        genre: "Mimarlık Teorisi & Duyusal Tasarım",
        pages: 144,
        cover: "/images/editorial/architecture_arched.jpg",
        badge: "DUYUSAL MİMARLIK",
        quote: "Bir kapı tokmağı, binanın el sıkışmasıdır. Dokunma, tüm duyuların anasıdır.",
        curatorReview: "Finli mimar ve kuramcı Pallasmaa, ekran bağımlısı ve yalnızca gözü tatmin etmeye çalışan modern mimarlığı eleştirir. Taşın soğukluğunu, ahşabın kokusunu, adım atarken yankılanan ayak seslerini ve gölgenin şefkatini savunan bu manifesto, mimariyi tüm bedenimizle nasıl tecrübe ettiğimizi açıklar.",
        whyRead: "Görsel bombardımanın ötesine geçip dokunma, işitme ve sessizlik duyularıyla yaşam alanlarımızı yeniden kurgulamak için.",
        keyThemes: ["Dokunsal Algı", "Göz Merkezcilik Eleştirisi", "Sessiz Mekân", "Beden Hafızası"]
      },
      {
        id: "book_bulgakov_master",
        title: "Usta ile Margarita",
        originalTitle: "Master i Margarita",
        author: "Mihail Bulgakov",
        translator: "Aydın Emeç",
        publisher: "Can Yayınları",
        category: "Dünya Klasikleri",
        genre: "Büyülü Gerçekçilik & Metafizik Hiciv",
        pages: 580,
        cover: "/images/editorial/library_books.jpg",
        badge: "ÖZGÜRLÜK DESTANI",
        quote: "El yazmaları yanmaz!",
        curatorReview: "Şeytan Woland ve tuhaf maiyetinin 1930'lar Moskova'sına yaptığı ziyaret, bürokrasiye ve sansüre meydan okuyan ölümsüz bir aşka dönüşür. Pontius Pilatus ile İsa arasındaki diyalogların paralel aktığı bu devasa roman, sanatın ve hakikatin hiçbir baskı aygıtı tarafından yok edilemeyeceğinin zafer çığlığıdır.",
        whyRead: "Zekice kurgulanmış bir edebi karnaval içinde hakikatin, vicdanın ve özgürlüğün gücünü hissetmek için.",
        keyThemes: ["Sanatın Ölümsüzlüğü", "Korkaklık & Erdem", "Büyülü Gerçekçilik", "Özgürlük"]
      }
    ],

    // 2.5 FİLMLER (Curated Cinema for Distinguished Visitors to Explore & Save to Profile)
    films: [
      {
        id: "film_perfect_days",
        title: "Perfect Days",
        year: 2023,
        director: "Wim Wenders",
        country: "Japonya & Almanya",
        duration: "124 dk",
        cast: "Koji Yakusho, Tokio Emoto, Arisa Nakano",
        genre: "Dram / Meditasyon / Şiirsel Gerçekçilik",
        poster: "/images/editorial/slow_living_window_book.jpg",
        badge: "GÜNÜN FİLMİ",
        awards: "Cannes Film Festivali En İyi Erkek Oyuncu Ödülü (Koji Yakusho)",
        curatorNote: "Telaşlı modern dünyada gündelik rutinin nasıl bir ibadete ve içsel şiire dönüşebileceğini gösteren dingin bir mucize.",
        whyWatchToday: "Tokyo'nun umumi tuvaletlerini temizleyen Hirayama'nın sabah gökyüzüne bakıp gülümseyişi, analog kasetlerinde Lou Reed ve Patti Smith dinleyişi ve ağaç yaprakları arasından süzülen güneş ışığını (komorebi) Olympus fotoğraf makinesiyle yakalayışı... Bu film, günün yorgunluğunu üzerinizden alıp varoluşun yalın güzelliğini hatırlatacak.",
        themes: ["Komorebi (Güneş Işığı)", "Gündelik Ritüeller", "Analog Kasetler", "Sessizlik ve Kanaat"]
      },
      {
        id: "film_great_beauty",
        title: "The Great Beauty (La Grande Bellezza)",
        year: 2013,
        director: "Paolo Sorrentino",
        country: "İtalya & Fransa",
        duration: "142 dk",
        cast: "Toni Servillo, Carlo Verdone, Sabrina Ferilli",
        genre: "Dram / Estetizm / Melankoli",
        poster: "/images/editorial/florence_duomo.jpg",
        badge: "MODERN KLASİK",
        awards: "En İyi Yabancı Dilde Film Oscar Ödülü, BAFTA ve Altın Küre",
        curatorNote: "Roma'nın gece sessizliğinde antik sütunlar, saray terasları ve kayıp gençliğin hüznü arasında hakiki güzelliği arayan bir başyapıt.",
        whyWatchToday: "65. yaş gününü kutlayan yazar ve cemiyet adamı Jep Gambardella'nın 'Bunca şaşaadan ve dedikodudan geriye ne kaldı?' sorusunun peşinde Roma sokaklarında gece yürüyüşüne çıkışı. Görsel ihtişamı ve hüzünlü neoklasik müzikleriyle ruhu sarhoş eden lirik bir sinema ziyafeti.",
        themes: ["Roma Estetiği", "Zamanın Geçiciliği", "Hakiki Güzellik", "İronik Melankoli"]
      },
      {
        id: "film_drive_my_car",
        title: "Drive My Car",
        year: 2021,
        director: "Ryusuke Hamaguchi",
        country: "Japonya",
        duration: "179 dk",
        cast: "Hidetoshi Nishijima, Toko Miura, Masaki Okada",
        genre: "Dram / Yol Filmi / Edebi Uyarlama",
        poster: "/images/editorial/slow_living_coffee_morning.jpg",
        badge: "EDEBI BAŞYAPIT",
        awards: "En İyi Uluslararası Film Oscar Ödülü, Cannes En İyi Senaryo",
        curatorNote: "Haruki Murakami'nin öyküsünden uyarlanan, kırmızı bir Saab 900 içinde kat edilen yollar ve suskunluğun iyileştirici gücü.",
        whyWatchToday: "Tiyatro yönetmeni Kafuku ile genç şoförü Misaki'nin Hiroşima otoyollarında kasetten Çehov'un 'Vanya Dayı' tiratlarını dinleyerek çıktıkları yolculuk. İki insanın acılarını konuşmadan, sadece motorun ve rüzgarın sesini dinleyerek nasıl paylaştığını anlatan sabırlı bir terapi.",
        themes: ["Yas ve Arınma", "Kırmızı Saab 900", "Çehov Tiyatrosu", "Yolculuğun Dinginliği"]
      },
      {
        id: "film_paterson",
        title: "Paterson",
        year: 2016,
        director: "Jim Jarmusch",
        country: "ABD & Fransa",
        duration: "118 dk",
        cast: "Adam Driver, Golshifteh Farahani, Nellie",
        genre: "Şiirsel Komedi / Dram",
        poster: "/images/editorial/life_rituals.jpg",
        badge: "ŞİİRSEL SİNEMA",
        awards: "Cannes Film Festivali Resmi Seçkisi",
        curatorNote: "Bir otobüs şoförünün sıradan haftasını küçük bir deftere yazdığı şiirlerle kutsayan zarif bir Jarmusch güzellemesi.",
        whyWatchToday: "Her sabah aynı saatte uyanan, New Jersey'nin Paterson kasabasında 23 numaralı otobüsü süren ve öğle molasında bir kibrit kutusuna bakıp şiir yazan Paterson'ın hayatı. Büyük dramlara ihtiyaç duymadan, gündelik sevginin ve sadeliğin ne kadar kıymetli olduğunu hatırlamak için.",
        themes: ["Gündelik Şiir", "Sabit Ritimler", "Kibrit Kutuları", "Minimalist Yaşam"]
      },
      {
        id: "film_call_me_by_your_name",
        title: "Call Me by Your Name",
        year: 2017,
        director: "Luca Guadagnino",
        country: "İtalya, Fransa, ABD",
        duration: "132 dk",
        cast: "Timothée Chalamet, Armie Hammer, Michael Stuhlbarg",
        genre: "Romantik Dram / Büyüme Hikayesi",
        poster: "/images/editorial/slow_living_terrace_view.jpg",
        badge: "AKDENİZ YAZI",
        awards: "En İyi Uyarlama Senaryo Oscar Ödülü (James Ivory)",
        curatorNote: "1983 yazı, Kuzey İtalya'da 17. yüzyıldan kalma bir taş villa, şeftali bahçeleri ve Bach piyano transkripsiyonları.",
        whyWatchToday: "Yaz mevsiminin tüm duyusal zenginliğini perdeye yansıtan bir görsel şölen. Kitap okunan nehir kıyıları, bisiklet turları, entelektüel akşam yemekleri ve ilk aşkın yaralayıcı güzelliği. Filmin sonundaki baba-oğul konuşması ise sinema tarihinin en şefkatli monologlarından biridir.",
        themes: ["Kuzey İtalya", "Yaz Melankolisi", "Klasik Piyano", "Duyusal Uyanış"]
      },
      {
        id: "film_stalker",
        title: "Stalker",
        year: 1979,
        director: "Andrei Tarkovsky",
        country: "SSCB",
        duration: "162 dk",
        cast: "Aleksandr Kaidanovsky, Anatoly Solonitsyn, Nikolai Grinko",
        genre: "Felsefi Bilimkurgu / Spiritüel Yolculuk",
        poster: "/images/editorial/architecture_arched.jpg",
        badge: "KÜLT BAŞYAPIT",
        awards: "Cannes Film Festivali Ekümenik Jüri Ödülü",
        curatorNote: "İnsanın en gizli ve samimi dileklerinin gerçekleştiği gizemli 'Oda'ya doğru yapılan metafizik bir inanç arayışı.",
        whyWatchToday: "Suyun akışını, paslanmış metalleri ve doğanın terk edilmiş endüstriyel harabeleri nasıl geri aldığını gösteren hipnotik sekanslar. Tarkovsky'nin zamanı heykel gibi işlediği, her karesi derin bir felsefi tefekkür olan benzersiz bir başyapıt.",
        themes: ["Manevi Arayış", "Suyun Şiiri", "İçsel Dilekler", "Metafizik Sessizlik"]
      },
      {
        id: "film_il_postino",
        title: "Il Postino (Postacı)",
        year: 1994,
        director: "Michael Radford & Massimo Troisi",
        country: "İtalya & Fransa",
        duration: "108 dk",
        cast: "Massimo Troisi, Philippe Noiret, Maria Grazia Cucinotta",
        genre: "Dram / Biyografi / Şiir",
        poster: "/images/editorial/amalfi_coast.jpg",
        badge: "ŞİİR VE DENİZ",
        awards: "En İyi Müzik Oscar Ödülü, 5 Dalda Oscar Adaylığı",
        curatorNote: "Sürgündeki Şilili şair Pablo Neruda ile İtalyan bir balıkçı köyünün naif postacısı arasındaki dokunaklı dostluk.",
        whyWatchToday: "Postacı Mario'nun şair Neruda'dan metaforları öğrenişi ve sevdiği adanın seslerini (dalgaların kayalara çarpışını, rüzgarı, doğmamış bebeğinin kalp atışını) bir teyp kasedine kaydedişi. Şiirin dünyayı algılama biçimimizi nasıl değiştirdiğini anlatan sımsıcak bir klasik.",
        themes: ["Metafor ve Şiir", "Akdeniz Adası", "Pablo Neruda", "Ses Manzaraları"]
      }
    ],

    // 2.6 MÜZİKLER (Music of the Day: La Valse d'Amélie & Atmospheric Soundscapes)
    musicTracks: [
      {
        id: "track_valse_amelie",
        title: "La Valse d'Amélie (Version Piano & Accordéon)",
        artist: "Yann Tiersen",
        album: "Le Fabuleux Destin d'Amélie Poulain (Orijinal Film Müziği)",
        year: 2001,
        duration: "2:38",
        badge: "GÜNÜN MÜZİĞİ",
        genre: "Paris Valsi / Neoklasik / Akordeon & Piyano",
        cover: "/images/editorial/slow_living_coffee_morning.jpg",
        curatorNote: "Montmartre'ın arnavut kaldırımlı sokaklarından Paris sonbaharına uzanan melankolik, oyuncu ve çocuksu bir vals. Yann Tiersen'in oyuncak piyano ve akordeonla ördüğü bu zamansız melodi, zihni gündelik telaşlardan arındırıp kalbe hafif bir sevinç fısıldar.",
        instruments: ["Akordeon", "Oyuncak Piyano", "Solo Piyano", "Yaylılar"],
        audioNotes: "3/4'lük zarif bir vals ritminde yükselen melodi, insanın içindeki meraklı ve naif çocuğu uyandırır.",
        isDailyTrack: true
      },
      {
        id: "track_nils_frahm_ambre",
        title: "Ambre",
        artist: "Nils Frahm",
        album: "Solo",
        year: 2015,
        duration: "3:45",
        badge: "PİYANO MEDİTASYONU",
        genre: "Ambient / Çağdaş Klasik",
        cover: "/images/editorial/moment_morning.jpg",
        curatorNote: "Keçeli piyano çekiçlerinin ahşap tellere vuruşundaki ham sıcaklık ve her notanın arasında nefes alan derin sessizlik.",
        instruments: ["Keçe Akustik Piyano"],
        audioNotes: "Günün erken saatlerinde zihni sakinleştirmek ve odaklanmak için ideal.",
        isDailyTrack: false
      },
      {
        id: "track_max_richter_daylight",
        title: "On the Nature of Daylight",
        artist: "Max Richter",
        album: "The Blue Notebooks",
        year: 2004,
        duration: "6:11",
        badge: "NEOKLASİK BAŞYAPIT",
        genre: "Neoklasik Yaylılar",
        cover: "/images/editorial/bosphorus_sunset.jpg",
        curatorNote: "Viyolonsel ve kemanların iç içe geçen lirik dokusu; insan hafızasının kırılganlığı ve yaşamın hüznü üzerine anıtsal bir ağıt.",
        instruments: ["Viyolonsel Beşlisi", "Keman"],
        audioNotes: "Derin editoryal okumalar ve akşamüstü düşünceleri için.",
        isDailyTrack: false
      },
      {
        id: "track_einaudi_nuvole",
        title: "Nuvole Bianche",
        artist: "Ludovico Einaudi",
        album: "Una Mattina",
        year: 2004,
        duration: "5:58",
        badge: "AKICI SÜKUNET",
        genre: "Çağdaş Klasik Piyano",
        cover: "/images/editorial/slow_living_positano.jpg",
        curatorNote: "Gökyüzünde ağır ağır süzülen beyaz bulutların hafifliğini notalara döken akıcı ve duru bir piyano serüveni.",
        instruments: ["Akustik Grand Piyano"],
        audioNotes: "Akıcı arpejler ve içsel dinginlik.",
        isDailyTrack: false
      },
      {
        id: "track_satie_gymnopedie",
        title: "Gymnopédie No. 1",
        artist: "Erik Satie",
        album: "Trois Gymnopédies",
        year: 1888,
        duration: "3:15",
        badge: "ZAMANSIZ KLASİK",
        genre: "Minimalist Klasik",
        cover: "/images/editorial/florence_duomo.jpg",
        curatorNote: "19. yüzyıl sonu Paris avangardının aşırı romantizme karşı geliştirdiği yalın, hüzünlü ve durağan bir dinginlik manifestosu.",
        instruments: ["Piyano"],
        audioNotes: "Zamanın durduğu, hiçbir şeyin acelesinin olmadığı anlar için.",
        isDailyTrack: false
      },
      {
        id: "track_debussy_clair_de_lune",
        title: "Clair de Lune",
        artist: "Claude Debussy",
        album: "Suite bergamasque",
        year: 1905,
        duration: "5:02",
        badge: "İZLENİMCİ ŞİİR",
        genre: "İzlenimci Piyano",
        cover: "/images/editorial/bosphorus_bridge_view.jpg",
        curatorNote: "Paul Verlaine'in şiirinden esinlenen, Boğaziçi ve Akdeniz sularına vuran ay ışığının parıltılarını hissettiren bir rüya.",
        instruments: ["Piyano"],
        audioNotes: "Gece sessizliğinde balkon veya pencere kenarı dinlemeleri için.",
        isDailyTrack: false
      }
    ],

    // 2.7 TASARIM (Showcase across 5 disciplines: Interior, Lighting, Craft/Ceramics, Furniture, Typography)
    designs: [
      {
        id: "des_interior_wabisabi",
        discipline: "İç Mimari",
        title: "Karaköy Çatı Katı: Taş & Ahşap Sükuneti",
        designer: "Studio Monolit & Mimar Kerem",
        location: "Karaköy, İstanbul",
        materials: "Ham Denizli traverteni, masif meşe, doğal kireç sıvalı duvarlar",
        image: "/images/editorial/modern_interior.jpg",
        badge: "İÇ MİMARİ",
        philosophy: "Eşyaların kalabalığından arındırılmış, ışığın ve gölgenin mimari bir öğe olarak mekana dolduğu wabi-sabi yaşam alanı. Her köşe gözü dinlendirmek ve zihni sakinleştirmek üzere tasarlandı.",
        features: ["Gizlenmiş dolap kapakları", "Zeminle hemzemin taş basamaklar", "Akşamları indirekt sıcak ışık bantları"]
      },
      {
        id: "des_lighting_akari",
        discipline: "Aydınlatma",
        title: "Akari 1A Işık Heykeli",
        designer: "Isamu Noguchi (1951)",
        location: "Gifu, Japonya",
        materials: "Geleneksel Japon dut ağacı kağıdı (washi), bambu iskelet, dökme demir ayaklar",
        image: "/images/editorial/travertine_lamp.jpg",
        badge: "AYDINLATMA",
        philosophy: "Noguchi'nin deyimiyle 'ışığı bir madde olmaktan çıkarıp bir atmosfere dönüştüren' tasarım ikonu. Washi kağıdının gözeneklerinden süzülen ışık, bir ampulün sertliğini güneşi anımsatan yumuşak bir hale getirir.",
        features: ["Tek tek elde yapıştırılan kağıt şeritler", "Katlanabilir geleneksel fener formu", "Gözü asla yormayan 2700K sıcaklık"]
      },
      {
        id: "des_craft_kintsugi",
        discipline: "Zanaat & Seramik",
        title: "Kintsugi Altın Onarım Çanağı",
        designer: "Usta Kenzo & Atelier Lune",
        location: "Kyoto & İstanbul",
        materials: "Kırık stoneware seramik, doğal urushi ağacı reçinesi, 24 ayar saf altın tozu",
        image: "/images/editorial/ceramic_bowl.jpg",
        badge: "ZANAAT & SERAMİK",
        philosophy: "Kırılanı gizlemek veya çöpe atmak yerine, kırılma çizgisini saf altınla belirginleştirerek nesnenin yaşanmışlığını kutsayan 500 yıllık Japon felsefesi. Yaralarımızı saklamak değil, onları birer zarafet izi olarak taşımak.",
        features: ["3 ay süren doğal reçine kurutma süreci", "Gıda ile temasa uygun organik malzeme", "Her parçada benzersiz çatlak haritası"]
      },
      {
        id: "des_furniture_oak_table",
        discipline: "Mobilya",
        title: "Masif Meşe Kütüphane Çalışma Masası",
        designer: "Hans Wegner Çizgisi / Zanaat Atölyesi",
        location: "Kopenhag & Bolu",
        materials: "80 yıllık fırınlanmış masif Anadolu meşesi, doğal keten yağı cilası",
        image: "/images/editorial/library_books.jpg",
        badge: "MOBİLYA",
        philosophy: "Tek bir vida veya metal bağlantı kullanılmadan, geleneksel ahşap zıvana ve geçme tekniğiyle bir araya getirilen çalışma masası. Zamanla kullanıldıkça patina kazanan, nesilden nesile aktarılacak bir edebi çalışma mabedi.",
        features: ["Çivisiz ahşap geçme detaylar", "Gizli kablo yuvaları ve entegre kalem olukları", "Kavisli yumuşak kenar profili"]
      },
      {
        id: "des_typography_maison",
        discipline: "Tipografi",
        title: "Maison Serif & Editoryal Tipografi",
        designer: "Studio Typo & Maison Creative",
        location: "Zürih & İstanbul",
        materials: "Dijital OpenType font ailesi, 120 gr pamuklu asitsiz kağıt baskı numunesi",
        image: "/images/editorial/book_reading.jpg",
        badge: "TİPOGRAFİ",
        philosophy: "18. yüzyıl klasik Didot oranlarının zarafetini 21. yüzyıl ekran okunabilirliğiyle harmanlayan özel yazı karakteri. Geniş satır aralıkları ve cömert kenar boşlukları ile okuma eylemini gözü dinlendiren bir ritüele dönüştürür.",
        features: ["Özel ligatürler ve eski usul rakamlar", "Nefes alan beyaz boşluk kurgusu", "Uzun form okumalarda yormayan optik denge"]
      },
      {
        id: "des_craft_stoneware_vase",
        discipline: "Zanaat & Seramik",
        title: "Ham Stoneware Vazo N°7",
        designer: "Atelier Lune",
        location: "İstanbul, Türkiye",
        materials: "Yerel kırmızı kil ve bazalt tozu, 1250°C yüksek fırınlama",
        image: "/images/editorial/art_sculpture.jpg",
        badge: "ZANAAT & SERAMİK",
        philosophy: "Geleneksel çömlekçi çarkında parmak izlerinin bilerek bırakıldığı heykelsi form. İçine konan tek bir kuru dal veya yabani çiçekle bile mekanın merkezinde duru bir odak noktası yaratır.",
        features: ["Sırsız mat doku", "Tek tek elde çekilmiş gövde", "Su geçirmez iç astar"]
      },
      {
        id: "des_lighting_travertine_sconce",
        discipline: "Aydınlatma",
        title: "Traverten Duvar & Zemin Apliği",
        designer: "Studio Petra",
        location: "Denizli, Türkiye",
        materials: "Yekpare oyulmuş Denizli traverten taşı, pirinç iç reflektör",
        image: "/images/editorial/travertine_lamp.jpg",
        badge: "AYDINLATMA",
        philosophy: "Milyonlarca yıllık kalsiyum tortularının yarattığı doğal delikli dokudan sızan sıcak ışık. Açıldığında taşın damarlarını bir tablo gibi aydınlatır, kapalıyken minimalist bir heykel gibi durur.",
        features: ["Yekpare masif taş gövde", "Göz almayan gizli LED ışık kaynağı", "Doğal bej ve sıcak kum tonları"]
      },
      {
        id: "des_furniture_chandigarh_chair",
        discipline: "Mobilya",
        title: "Arşiv Koltuk (Jeanneret Ekolü)",
        designer: "Pierre Jeanneret İlhamı",
        location: "Chandigarh & İstanbul",
        materials: "Masif teak (tik) ağacı, el örgüsü doğal hint kamışı (rattan)",
        image: "/images/editorial/architecture_arched.jpg",
        badge: "MOBİLYA",
        philosophy: "Modernizmin en ikonik 'V' ayaklı oturma formu. Rattan örgünün sağladığı esneklik ve hava geçirgenliği, tropikal iklimin bilgeliğini çağdaş salonlara taşır.",
        features: ["Geleneksel V formu masif ayaklar", "Sekizgen desenli el örgüsü sırt ve oturum", "Hafif ama son derece dayanıklı konstrüksiyon"]
      }
    ],

    // 2.8 NESNELER (Rich Curated Objects Catalog with Provenance, Maker, and Stories)
    curatedObjects: [
      {
        id: "obj_ceramic_bowl",
        name: "El Yapımı Seramik Kase",
        maker: "Atelier Lune",
        category: "El Yapımı Seramik",
        material: "Doğal yerel kil & kurşunsuz mat sır",
        origin: "İstanbul, Türkiye",
        image: "/images/editorial/ceramic_bowl.jpg",
        price: "₺2.850",
        story: "Toprağın sadeliğinde, gündelik hayatın zarafeti saklıdır. Çömlek çarkında tek tek elde çekilen bu kase, sabah meyvenizi koyduğunuzda ya da masanızda tek başına durduğunda heykelsi bir sükunet yaratır.",
        whyWeChoseIt: "Anadolu'nun kadim seramik geleneğini modern yalınlıkla buluşturduğu için."
      },
      {
        id: "obj_rare_book",
        name: "Görünmez Kentler (1974 İlk İtalyanca Baskı)",
        maker: "Einaudi Torino / Sahaf Koleksiyonu",
        category: "Nadir Kitap",
        material: "Özel el dikişi ipek sırt cilt & pamuk kağıt",
        origin: "Torino, İtalya",
        image: "/images/editorial/book_reading.jpg",
        price: "₺4.200",
        story: "İtalyan edebiyatının başyapıtı. Orijinal Torino baskısı, sararmış pamuklu sayfaları ve dönemine ait tipo baskısıyla elli yıl öncesinin edebi heyecanına dokunmaktır.",
        whyWeChoseIt: "Mimarinin ve edebiyatın kesiştiği en derin şiirsel metin olduğu için."
      },
      {
        id: "obj_travertine_lamp",
        name: "Traverten Heykelsi Abajur",
        maker: "Studio Petra",
        category: "Tasarım Objesi",
        material: "Doğal Denizli Traverteni & Ham Keten Başlık",
        origin: "Denizli, Türkiye",
        image: "/images/editorial/travertine_lamp.jpg",
        price: "₺4.600",
        story: "Işık sadece odayı aydınlatmaz; gölgeleriyle mekanı tanımlar. Travertenin milyonlarca yıllık gözenekleri, modern bir evin salonuna yerkürenin sakinliğini taşır.",
        whyWeChoseIt: "Masif taşın ağırlığı ile keten abajurun yumuşak ışığı arasındaki mükemmel denge için."
      },
      {
        id: "obj_perfume_amber",
        name: "Maison Botanical N°3: Amber & Sedir",
        maker: "Atelier Grasse & Maison",
        category: "Parfüm",
        material: "Saf Akdeniz sedir ağacı reçineleri, kehribar, organik alkol",
        origin: "Grasse, Fransa & İstanbul",
        image: "/images/editorial/soy_candle.jpg",
        price: "₺3.400",
        story: "Kokular kelimelerden daha hızlı hatıralara ulaşır. N°3, yağmurlu bir sonbahar gününde eski bir ahşap kütüphanede oturmanın huzurunu teninizde yaşatır.",
        whyWeChoseIt: "Sentetik kimyasallardan tamamen arındırılmış, 6 ay soğuk maserasyonla dinlendirilmiş saf formülü için."
      },
      {
        id: "obj_linen_throw",
        name: "Ham Keten Dokuma Masa Örtüsü & Şal",
        maker: "Antik Ege Tezgahı",
        category: "Tekstil",
        material: "%100 Anadolu Ham Keteni, doğal kök boya kenar fitili",
        origin: "Denizli / Buldan, Türkiye",
        image: "/images/editorial/modern_interior.jpg",
        price: "₺2.150",
        story: "Geleneksel ahşap tezgahlarda dokunan saf keten. Yıkandıkça yumuşayan, ütü gerektirmeyen doğal ve samimi bir doku. Sofrada veya bir koltuğun kolunda zamansız bir zarafet.",
        whyWeChoseIt: "Hızlı tüketime inat ömür boyu saklanacak ve her yıkamada daha da güzelleşecek bir dokuma olduğu için."
      },
      {
        id: "obj_vintage_brass_pen",
        name: "Masif Pirinç Dolmakalem & Mürekkep Seti",
        maker: "Kaweco & Maison Özel Üretim",
        category: "Yazı Gereçleri",
        material: "İşlenmemiş som pirinç gövde, altın kaplama çelik uç",
        origin: "Nürnberg, Almanya",
        image: "/images/editorial/library_books.jpg",
        price: "₺3.100",
        story: "Yazmak, düşünceleri yavaşlatmanın en asil yoludur. İşlenmemiş pirinç gövde, sahibinin elinin teriyle ve zamanla karararak kişisel bir patina kazanır.",
        whyWeChoseIt: "Düşüncelerinizi ekrana değil, kağıda aktarmanın dokunsal keyfini yeniden hatırlattığı için."
      }
    ],
    curatedItems: [
      {
        id: "exp_1",
        category: "sanat_sergiler",
        type: "Sergiler",
        title: "Zamansız İzler",
        subtitle: "İstanbul Modern • Küratör: Zeynep Oğuz",
        image: "/images/editorial/art_exhibition.jpg",
        badge: "SERGİ",
        meta: "12 Ekim – 15 Ocak",
        desc: "Geçmişin formları ile günümüzün malzemeleri arasındaki sessiz gerilimi inceliyor."
      },
      {
        id: "exp_2",
        category: "mimari_mekan",
        type: "Mekânlar",
        title: "Mikla & Yeni Anadolu Mutfağı",
        subtitle: "The Marmara Pera Çatı Katı, İstanbul",
        image: "/images/editorial/gastronomy_pasta.jpg",
        badge: "FINE DINING",
        meta: "Michelin Yıldızı",
        desc: "Boğaziçi ve Tarihi Yarımada siluetine karşı yerel lezzetlerin rafine buluşması."
      },
      {
        id: "exp_3",
        category: "kitaplar",
        type: "Kitaplar",
        title: "Görünmez Kentler",
        subtitle: "Italo Calvino • YKY Yayınları",
        image: "/images/editorial/book_reading.jpg",
        badge: "KİTAP",
        meta: "164 Sayfa • Felsefi Kurgu",
        desc: "Marco Polo ile Kubilay Han'ın hayali şehirler üzerinden hafıza ve zaman sohbeti."
      },
      {
        id: "exp_4",
        category: "seyahat",
        type: "Şehirler",
        title: "Bodrum & Gümüşlük Taş Sokakları",
        subtitle: "Muğla, Ege Kıyıları",
        image: "/images/editorial/slow_living_terrace_4.jpg",
        badge: "ŞEHİR",
        meta: "Ege Rotaları",
        desc: "Antik Myndos harabelerinden günbatımında deniz kenarı sofralarına bir kültür rotası."
      },
      {
        id: "exp_5",
        category: "dergiler",
        type: "Tasarım",
        title: "Akari 1A Işık Heykeli",
        subtitle: "Isamu Noguchi • Japon Dut Ağacı Kağıdı",
        image: "/images/editorial/travertine_lamp.jpg",
        badge: "TASARIM",
        meta: "Aydınlatma İkonu",
        desc: "Işığı maddeye değil bir atmosfere dönüştüren zamansız tasarım klasiği."
      },
      {
        id: "exp_6",
        category: "gastronomi",
        type: "Müzikler",
        title: "La Valse d'Amélie — Yann Tiersen",
        subtitle: "Günün Müziği • Le Fabuleux Destin d'Amélie",
        image: "/images/editorial/slow_living_coffee_morning.jpg",
        badge: "GÜNÜN MÜZİĞİ",
        meta: "2:38 • Vals",
        desc: "Montmartre sokaklarından yükselen çocuksu ve nostaljik bir piyano & akordeon valsı."
      },
      {
        id: "exp_7",
        category: "moda",
        type: "Filmler",
        title: "Perfect Days — Wim Wenders",
        subtitle: "Günün Sinema Seçkisi • Tokyo",
        image: "/images/editorial/slow_living_window_book.jpg",
        badge: "GÜNÜN FİLMİ",
        meta: "124 dk • Koji Yakusho",
        desc: "Gündelik rutinin kutsal sadeliğini ve güneş ışığını anlatan dingin bir başyapıt."
      }
    ]
  },

  // 3. MAISON SHOP / SEÇKİN ÜRÜNLER (Not mass e-commerce; 11 curated objects with stories, makers, materials, cultural context)
  products: [
    {
      id: "ceramic_bowl",
      categoryTag: "El Yapımı Seramik",
      name: "El Yapımı Seramik Kase",
      maker: "Atelier Lune",
      price: "₺2.850",
      image: "/images/editorial/ceramic_bowl.jpg",
      whyWeChoseIt: "Anadolu'nun kadim seramik geleneğinden ilham alan bu özel parça, modern bir yorumla yeniden hayat buluyor. Her biri elde şekillendirilen kaseler, sofranızı sadece bir nesne değil, bir hikaye ile donatıyor.",
      details: {
        material: "Doğal yerel kil & kurşunsuz mat sır",
        craft: "Geleneksel çömlek çarkında tek tek elde çekildi",
        edition: "50 adet numaralı üretim",
        origin: "İstanbul, Türkiye"
      },
      story: "Toprağın sadeliğinde, gündelik hayatın zarafeti saklıdır. Bu kase sadece bir kap değil; sabah meyvenizi koyduğunuzda ya da masanızda tek başına durduğunda bile heykelsi bir sükunet yaratır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "rare_book_calvino",
      categoryTag: "Nadir Kitap",
      name: "Görünmez Kentler (1974 İlk Baskı)",
      maker: "Einaudi Torino / Sahaf Koleksiyonu",
      price: "₺4.200",
      image: "/images/editorial/book_reading.jpg",
      whyWeChoseIt: "İtalyan edebiyatının ve mimarlık felsefesinin başyapıtı. Orijinal Torino baskısı, sararmış pamuklu sayfaları ve dönemine ait tipografisiyle bir edebi anıt.",
      details: {
        material: "Özel el dikişi ipek sırt cilt & pamuk kağıt",
        craft: "Torino Tipografi Atölyesi",
        edition: "Koleksiyonluk 1. Basım",
        origin: "Torino, İtalya"
      },
      story: "Calvino'nun şehirleri fiziksel mekanlar değil, insan ruhunun ve hafızasının katmanlarıdır. Bu nadir cildi elinizde tutmak, elli yıl öncesinin edebi heyecanına dokunmaktır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "travertine_lamp",
      categoryTag: "Tasarım Objesi",
      name: "Traverten Heykelsi Abajur",
      maker: "Studio Petra",
      price: "₺4.600",
      image: "/images/editorial/travertine_lamp.jpg",
      whyWeChoseIt: "Doğal Denizli traverten taşının masif dokusu ve sıcak sarı ışığın birleşimi. Mekana mimari bir ağırlık ve dinginlik katar.",
      details: {
        material: "Doğal Denizli Traverteni & Ham Keten Başlık",
        craft: "Elde oyulmuş masif taş kaide",
        edition: "Sınırlı Seri",
        origin: "Denizli, Türkiye"
      },
      story: "Işık sadece odayı aydınlatmaz; gölgeleriyle mekanı tanımlar. Travertenin milyonlarca yıllık gözenekleri, modern bir evin salonuna yerkürenin sakinliğini taşır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "botanical_perfume",
      categoryTag: "Parfüm",
      name: "Maison Botanical N°3: Amber & Sedir",
      maker: "Atelier Grasse & Maison",
      price: "₺3.400",
      image: "/images/editorial/soy_candle.jpg",
      whyWeChoseIt: "Sentetik kimyasallardan tamamen arındırılmış, Akdeniz sedir ağacı reçineleri ve sıcak amber notalarıyla harmanlanmış niş bir imza koku.",
      details: {
        material: "Saf bitkisel esanslar, organik alkol",
        craft: "Soğuk maserasyon yöntemiyle 6 ay bekletildi",
        edition: "100 ml Cam Şişe, Pirinç Kapak",
        origin: "Grasse, Fransa & İstanbul"
      },
      story: "Kokular kelimelerden daha hızlı hatıralara ulaşır. N°3, yağmurlu bir sonbahar gününde eski bir ahşap kütüphanede oturmanın huzurunu teninizde yaşatır.",
      relatedScreen: "product_good_days_candle"
    },
    {
      id: "linen_textile",
      categoryTag: "Tekstil",
      name: "Ham Keten Dokuma Masa Örtüsü",
      maker: "Antik Ege Tezgahı",
      price: "₺2.150",
      image: "/images/editorial/modern_interior.jpg",
      whyWeChoseIt: "Geleneksel ahşap tezgahlarda dokunan %100 saf ham keten. Yıkandıkça yumuşayan, ütü gerektirmeyen doğal ve samimi bir doku.",
      details: {
        material: "%100 Anadolu Ham Keteni",
        craft: "Mekikli ahşap tezgah el dokuması",
        edition: "Doğal kök boya kenar fitili",
        origin: "Denizli & Tire"
      },
      story: "Keten, doğanın insana sunduğu en dürüst kumaştır. Kırışıklıkları bir kusur değil, yaşayan bir evin ve keyifli bir sofra sohbetinin kanıtıdır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "vintage_watch_1968",
      categoryTag: "Saat",
      name: "Maison Horology Vintage 1968 Mekanik Kol Saati",
      maker: "Cenevre Saat Atölyesi",
      price: "₺28.500",
      image: "/images/editorial/life_rituals.jpg",
      whyWeChoseIt: "1968 yapımı, kurmalı mekanik kalibre. Şampanya rengi kadrandaki doğal patine ve zarif altın kaplama kasa ile zamansız bir başyapıt.",
      details: {
        material: "18K Sarı Altın Kaplama Kasa & Hakiki Deri Kayış",
        craft: "İsviçre kurmalı 17 taşlı mekanizma (Revize edildi)",
        edition: "Tek parça koleksiyonluk",
        origin: "Cenevre, İsviçre"
      },
      story: "Her sabah saatinizin tepesini parmaklarınızla çevirerek kurmak, günün hızına kapılmadan önce zamana selam durmaktır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "gold_seal_ring",
      categoryTag: "Mücevher",
      name: "Dövme Mat Altın Mühür Yüzük",
      maker: "Kapalıçarşı Usta Aram",
      price: "₺16.800",
      image: "/images/editorial/art_sculpture.jpg",
      whyWeChoseIt: "Fabrikasyon olmayan, örs üzerinde çekiç darbeleriyle tek tek şekillendirilen mat dokulu masif altın mühür yüzük.",
      details: {
        material: "18 Ayar Mat Sarı Altın (7.8 gr)",
        craft: "Geleneksel çekiçle dövme tekniği",
        edition: "Sipariş üzerine kişiye özel",
        origin: "Kapalıçarşı, İstanbul"
      },
      story: "Yüzüğün yüzeyindeki her çekiç izi, ustanın nefesini ve sabrını taşır. Gösterişten uzak, ağırbaşlı ve asil bir kimlik simgesi.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "bosphorus_print",
      categoryTag: "Sanat Baskısı",
      name: "Boğaziçi Gravür Taşbaskı No: 14/50",
      maker: "Maison Gravür Arşivi",
      price: "₺5.500",
      image: "/images/editorial/bosphorus_sunset.jpg",
      whyWeChoseIt: "19. yüzyıl Melling gravürlerinden esinlenerek Arches pamuklu kağıt üzerine el presiyle basılmış sınırlı edisyon taşbaskı.",
      details: {
        material: "300 gr Arches %100 Pamuk Kağıt & Mineral Mürekkep",
        craft: "Manuel litografi el baskısı, kör damgalı",
        edition: "50 adet sınırlı üretim (No: 14/50)",
        origin: "İstanbul"
      },
      story: "Boğaz'ın mavi suları ve yalıların silueti, duvarınızda geçmiş ile bugünün kesiştiği sessiz bir pencere açar.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "vintage_magnifier",
      categoryTag: "Vintage Obje",
      name: "1950'ler Pirinç Okuma Büyüteci",
      maker: "Floransa Antika Pazarı",
      price: "₺3.200",
      image: "/images/editorial/library_books.jpg",
      whyWeChoseIt: "Ağır masif pirinç gövde ve kristal optik mercek. Kitap okurken ya da harita incelerken çalışma masanıza ağırlık ve derinlik katar.",
      details: {
        material: "Masif döküm pirinç & 3x büyütmeli optik cam",
        craft: "1950'ler İtalyan üretimi",
        edition: "Vintage Orijinal Tek Parça",
        origin: "Floransa, İtalya"
      },
      story: "Bu merceğin altından hangi kitaplar, hangi mektuplar, hangi eski haritalar geçti? Eski bir nesneye sahip olmak, başkalarının merakına ortak olmaktır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "fountain_pen",
      categoryTag: "Yazı Gereçleri",
      name: "Masif Ceviz ve Pirinç Dolma Kalem",
      maker: "Koto Craft Atölyesi",
      price: "₺3.900",
      image: "/images/editorial/moment_morning.jpg",
      whyWeChoseIt: "Japon ceviz ağacından tornalanmış gövde ve 14K altın kaplama Alman çelik uç. Mürekkebin kağıtla buluştuğu anı bir seremoniye dönüştürür.",
      details: {
        material: "Doğal Ceviz Ağacı & Som Pirinç Aksanlar",
        craft: "Elde zımparalanmış ve keten tohumu yağı ile cilalanmış",
        edition: "Numaralı Kutu İçeriği",
        origin: "Kyoto & İstanbul"
      },
      story: "Ekrana yazı yazmak düşünceyi hızlandırır ama yüzeyselleştirir; dolma kalemle kağıda dökmek ise kelimelere ağırlık ve özen kazandırır.",
      relatedScreen: "product_ceramic_bowl"
    },
    {
      id: "copper_carafe",
      categoryTag: "Ev İçin Seçkin Parçalar",
      name: "Elde Dövme Ağır Bakır Su Karafı",
      maker: "Gaziantep Bakırcılar Çarşısı",
      price: "₺3.750",
      image: "/images/editorial/ceramic_bowl.jpg",
      whyWeChoseIt: "Saf bakır levhanın günlerce çekiçlenmesiyle form bulan, içi geleneksel yöntemle kalaylanmış, sofra için heykelsi bir su karafı.",
      details: {
        material: "%100 Saf Ağır Bakır & Geleneksel Sıcak Kalay Kaplama",
        craft: "Usta ellerde dövülerek yekpare üretildi",
        edition: "Zanaatkar İmzalı",
        origin: "Gaziantep, Türkiye"
      },
      story: "Bakır, suyu soğuk tutar ve ona tatlı bir yumuşaklık verir. Masanızın ortasında dururken binlerce yıllık maden işçiliğinin asaletini sergiler.",
      relatedScreen: "product_ceramic_bowl"
    }
  ],

  // 4. SALON (10 Digital Dialogue Rooms with Opening Notes, Ambience Audio, Member Thoughts, and "Ben ne düşünüyorum?" inputs)
  salonRooms: [
    {
      id: "sanat_yasam",
      title: "Sanat & Yaşam",
      topic: "Sanat, Gündelik Hayatı Nasıl Değiştirir?",
      activeUsers: 28,
      category: "SANAT",
      image: "/images/editorial/art_exhibition.jpg",
      description: "Gündelik yaşamda sanatın yeri, sergiler, sanatçıların görme biçimleri ve evde sanatla yaşamak.",
      hostName: "Zeynep Oğuz",
      hostRole: "Küratör & Sanat Eleştirmeni",
      hostAvatar: "/images/editorial/architect_selin.jpg",
      openingNote: "Hoş geldiniz. Sanat sadece müzelerin steril beyaz duvarlarında sergilenen bir nesne midir, yoksa sabah kahvenizi içerken duvardaki bir lekeye ya da pencereden süzülen ışığın açısına dikkatle bakabilme yetisi midir? Bugün sanatın gündelik hayatımıza nasıl nefes aldırdığını konuşuyoruz.",
      ambienceMusic: {
        title: "Written on the Sky",
        artist: "Max Richter",
        duration: "1:40",
        type: "Modern Klasik & Piyano"
      },
      discussions: [
        {
          author: "Selin Arslan",
          role: "Mimar",
          avatar: "/images/editorial/architect_selin.jpg",
          time: "15 dk önce",
          text: "İstanbul Modern'deki 'Zamansız İzler' sergisini gezerken şunu düşündüm: Bir eserin önünde ne kadar durabiliyoruz? Hızlıca fotoğrafını çekip gitmek ile 5 dakika sessizce bakmak arasındaki fark, sanatın hayatımıza dokunup dokunmadığını belirliyor."
        },
        {
          author: "Deniz Kaya",
          role: "Yazar",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "8 dk önce",
          text: "Çok haklısın Selin. T.S. Eliot'ın dediği gibi: 'Bilginin içinde bilgeliği, bilginin içinde hayatı kaybettik.' Sanat eseri bize sadece bakmayı değil, beklemeyi hatırlatıyor."
        },
        {
          author: "Berke Saygılı",
          role: "Küratör",
          avatar: "/images/editorial/berke_saygili.jpg",
          time: "3 dk önce",
          text: "Evdeki tek bir seramik kasenin ya da duvardaki bir taşbaskının yarattığı dinginlik hissi, günün tüm yorgunluğunu unutturmaya yetiyor. Sanat, zihnin sığınağıdır."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "kitap_kulubu",
      title: "Kitap Kulübü",
      topic: "Bu Ay Ne Okuyoruz? Zamanın ve Hafızanın İzinde",
      activeUsers: 34,
      category: "KİTAP",
      image: "/images/editorial/library_books.jpg",
      description: "Hafıza, yavaşlık, felsefe ve edebiyat üzerine derin okuma sohbetleri.",
      hostName: "Ahmet Ümit",
      hostRole: "Yazar & Konuk Küratör",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Sevgili kitapseverler, bu ay Proust'tan Calvino'ya, Tanpınar'dan Pallasmaa'ya uzanan bir hafıza yolculuğundayız. Bir kitabın ilk cümlesiyle zihninizde açılan kapı nereye çıkıyor?",
      ambienceMusic: {
        title: "Avril 14th",
        artist: "Aphex Twin",
        duration: "2:05",
        type: "Akustik Piyano"
      },
      discussions: [
        {
          author: "Ahmet Ümit",
          role: "Yazar",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "1 saat önce",
          text: "Zaman kavramını edebiyatta işlemek bir labirent inşa etmek gibidir. Proust'un çayına batırdığı madlen kekini hatırlayın; küçücük bir koku, koca bir çocukluğu geri çağırır."
        },
        {
          author: "Elif Demir",
          role: "Sanatçı",
          avatar: "/images/editorial/architect_selin.jpg",
          time: "35 dk önce",
          text: "Calvino'nun Görünmez Kentler'ini okurken her kentin bir duygu durumu olduğunu anladım. Bugün yaşadığımız şehirler acaba bizim hangi yaralarımızı gizliyor?"
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "sarap_gastronomi",
      title: "Şarap & Gastronomi",
      topic: "Toprağın Hafızası: Terroir ve Kadim Sofra Ritüelleri",
      activeUsers: 22,
      category: "GASTRONOMİ",
      image: "/images/editorial/slow_living_tuscany.jpg",
      description: "Yerel üzümler, fermantasyon kültürü, zeytinyağı ve yavaş sofra felsefesi.",
      hostName: "Kerem Demir",
      hostRole: "Şef & Gastronomi Tarihçisi",
      hostAvatar: "/images/editorial/chef_kerem.jpg",
      openingNote: "İyi bir sofra, sadece karnı doyurmaz; ruhu besler. Yerel tohumların, antik bağların ve sabırla bekletilen fıçıların hikayelerini paylaşıyoruz.",
      ambienceMusic: {
        title: "Mediterranean Breeze",
        artist: "Maison Soundscape",
        duration: "3:10",
        type: "Akdeniz Akustik Gitar"
      },
      discussions: [
        {
          author: "Kerem Demir",
          role: "Şef",
          avatar: "/images/editorial/chef_kerem.jpg",
          time: "45 dk önce",
          text: "Bağbozumu sadece üzüm toplamak değildir; koca bir yılın iklimini, toprağın sabrını şişeye kilitlemektir. Masadaki herkes bu sabrın ortağı olur."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "mimari",
      title: "Mimari & Mekân",
      topic: "Bir Evin Karakterini Mimari mi Belirler, Yaşayanlar mı?",
      activeUsers: 29,
      category: "MİMARİ",
      image: "/images/editorial/modern_interior.jpg",
      description: "Mimari, malzeme dürüstlüğü, ışık kullanımı ve yaşanmış mekanların aurası.",
      hostName: "Selin Arslan",
      hostRole: "Mimar & Koruma Uzmanı",
      hostAvatar: "/images/editorial/architect_selin.jpg",
      openingNote: "Bir mekanda kendinizi güvende ve huzurlu hissettiren nedir? Yüksek tavanlar mı, ahşabın sıcaklığı mı, yoksa içeri süzülen sabah ışığı mı?",
      ambienceMusic: {
        title: "Solitude",
        artist: "Ryuichi Sakamoto",
        duration: "2:45",
        type: "Minimalist Ambient"
      },
      discussions: [
        {
          author: "Murat Can",
          role: "Koleksiyoner",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "2 saat önce",
          text: "Tuğla ve ahşap zamanla yaşlanır ve güzelleşir; sentetik malzemeler ise sadece eskir ve solar. Bir mekanın dürüstlüğü kullandığı malzemenin yaş alma biçimindedir."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "saatler",
      title: "Saatler & Horoloji",
      topic: "Mekanik Zaman: Çarkların Sessiz Felsefesi",
      activeUsers: 19,
      category: "HOROLOJİ",
      image: "/images/editorial/life_rituals.jpg",
      description: "Vintage kurmalı saatler, bağımsız saat ustaları ve zamanı ölçmenin zarafeti.",
      hostName: "Murat Can",
      hostRole: "Horoloji Meraklısı & Koleksiyoner",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Mekanik saatçilik, insanın zamanı kontrol etme değil; ona saygı duyma sanatıdır. Hangi vintage saat hikayesi sizi heyecanlandırıyor?",
      ambienceMusic: {
        title: "Chronos Tick",
        artist: "Ambient Horology",
        duration: "2:20",
        type: "Mekanik Ritim & Çello"
      },
      discussions: [
        {
          author: "Murat Can",
          role: "Koleksiyoner",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "1 saat önce",
          text: "1960'ların mekanik kronograflarındaki elle çizilmiş kadrana baktığınızda, bir ustanın göz nurunu görüyorsunuz. Dijital dünya bu dokunuşu asla taklit edemez."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "seyahat_hikayeleri",
      title: "Seyahat Hikâyeleri",
      topic: "Gezmek mi, Bir Yerde Durup Kalmak mı?",
      activeUsers: 31,
      category: "SEYAHAT",
      image: "/images/editorial/amalfi_coast.jpg",
      description: "Hızlı turizme inat yavaş seyahat, tren yolculukları, keşfedilmemiş kasabalar.",
      hostName: "Deniz Kaya",
      hostRole: "Yazar & Seyyah",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Bir şehri fethetmek için değil, o şehrin sakin ritmine teslim olmak için yola çıkıyoruz. Sizi en çok yavaşlatan yer neresiydi?",
      ambienceMusic: {
        title: "Ambre",
        artist: "Nils Frahm",
        duration: "4:12",
        type: "Ambient Piyano"
      },
      discussions: [
        {
          author: "Deniz Kaya",
          role: "Yazar",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "2 saat önce",
          text: "Kyoto'daki Ryoan-ji tapınağının çakıl taşlı bahçesinde 2 saat boyunca hiçbir şey yapmadan oturmuştum. Hayatımda geçirdiğim en dolu iki saatti."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "klasik_otomobiller",
      title: "Klasik Otomobiller",
      topic: "Tasarımın Zirve Çağı: 1960'lar ve Analog Sürüş",
      activeUsers: 16,
      category: "TASARIM",
      image: "/images/editorial/architecture_arched.jpg",
      description: "Çizgilerin zarafeti, karbüratör sesi, ahşap direksiyon simitleri ve analog yolculuklar.",
      hostName: "Emre Talu",
      hostRole: "Klasik Otomobil Restorasyon Uzmanı",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Rüzgar tünellerinin birbirine benzettiği modern araçların çağında, elle çizilmiş ikonik gövdelerin hikayesi.",
      ambienceMusic: {
        title: "Route des Alpes",
        artist: "Vintage Sound Lab",
        duration: "3:00",
        type: "Caz & Akustik Kontrbas"
      },
      discussions: [
        {
          author: "Emre Talu",
          role: "Restoratör",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "3 saat önce",
          text: "Eski bir Alfa Romeo'nun ya da Jaguar E-Type'ın direksiyonuna geçtiğinizde araba ile sürücü arasında hiçbir filtre kalmaz; mekaniği iliklerinize kadar hissedersiniz."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "moda_stil",
      title: "Moda & Stil",
      topic: "Trendlerin Ötesinde: Kişisel Bir Üniforma Yaratmak",
      activeUsers: 25,
      category: "STİL",
      image: "/images/editorial/berke_saygili.jpg",
      description: "Kalıcı gardıroplar, doğal kumaşlar, terzilik kültürü ve zamansız stil ilkeleri.",
      hostName: "Aylin Tezel",
      hostRole: "Küratör & Stil Danışmanı",
      hostAvatar: "/images/editorial/architect_selin.jpg",
      openingNote: "Her sezon değişen modanın peşinde koşmak mı, yoksa içinde kendinizi en dürüst hissettiğiniz 5 parçalık bir üniformaya sadık kalmak mı?",
      ambienceMusic: {
        title: "Quiet Silk",
        artist: "Maison Atelier",
        duration: "2:30",
        type: "Lo-Fi Akustik Doku"
      },
      discussions: [
        {
          author: "Aylin Tezel",
          role: "Stilist",
          avatar: "/images/editorial/architect_selin.jpg",
          time: "1 saat önce",
          text: "Bir kadının ya da erkeğin en şık olduğu an, üzerindeki giysiyi unutup sohbetine ve düşüncelerine odaklandığı andır."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "felsefe_dusunce",
      title: "Felsefe & Düşünce",
      topic: "Gürültülü Bir Dünyada İçsel Dinginlik Mümkün mü?",
      activeUsers: 38,
      category: "FELSEFE",
      image: "/images/editorial/moment_morning.jpg",
      description: "Stoacılık, Doğu felsefesi, modern çağda dikkat ekonomisi ve dinginlik arayışı.",
      hostName: "Prof. Dr. İlber Ortaylı",
      hostRole: "Tarihçi & Düşünür",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Marcus Aurelius'tan Seneca'ya, insanın kendine dönmesi ve zihninde sakin bir oda inşa etmesi üzerine bir sohbet.",
      ambienceMusic: {
        title: "Meditation",
        artist: "Olafur Arnalds",
        duration: "3:40",
        type: "Piyano & Yaylılar"
      },
      discussions: [
        {
          author: "Deniz Kaya",
          role: "Yazar",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "40 dk önce",
          text: "Dinginlik dış koşulların mükemmelliği değildir; fırtınanın ortasında bile kendine ait bir merkeze sahip olabilmektir."
        }
      ],
      relatedScreen: "salon_room"
    },
    {
      id: "muzik",
      title: "Müzik & Ses Manzaraları",
      topic: "Sessizlik ile Nota Arasındaki Boşluk",
      activeUsers: 27,
      category: "MÜZİK",
      image: "/images/editorial/salon_gathering.jpg",
      description: "Ambient, neoklasik, analog plak kültürü ve zihni dinginleştiren frekanslar.",
      hostName: "Cem Talu",
      hostRole: "Müzik Küratörü & Fotoğrafçı",
      hostAvatar: "/images/editorial/author_deniz.jpg",
      openingNote: "Miles Davis'in dediği gibi: 'Müzik notaların kendisi değil, notalar arasındaki sessizliktir.' Hangi parçalar zihninize alan açıyor?",
      ambienceMusic: {
        title: "Vessel",
        artist: "Jon Hopkins",
        duration: "4:00",
        type: "Ambient Elektronik"
      },
      discussions: [
        {
          author: "Cem Talu",
          role: "Küratör",
          avatar: "/images/editorial/author_deniz.jpg",
          time: "50 dk önce",
          text: "Plağın iğneyle buluştuğu o ilk hışırtı sesi, müziği dinlemeye başlamadan önce insanı ana davet eden en güzel ritüeldir."
        }
      ],
      relatedScreen: "salon_room"
    }
  ],

  // 5. KOLEKSİYONLAR (The 7 User's Digital Taste Archive Collections)
  collections: [
    {
      id: "benim_istanbulum",
      title: "Benim İstanbul'um",
      description: "Sessiz avlular, Boğaz iskeleleri, eski sahaflar ve Rumeli Hisarı manzaraları.",
      curator: "Berke Saygılı",
      count: 9,
      cover: "/images/editorial/bosphorus_sunset.jpg",
      items: [
        { id: "ist_1", name: "İstanbul'un Sessiz Avluları ve Taşın Hafızası", type: "Yazı", author: "Selin Arslan", badge: "OKU" },
        { id: "ist_2", name: "Büyük Valide Han Çatı Terası ve Kubbeler", type: "Mekân", author: "Küratör Notu", badge: "KEŞFET" },
        { id: "ist_3", name: "Boğaziçi Gravür Taşbaskı No: 14/50", type: "Nesne", author: "Arşiv Eseri", badge: "SEÇKİN" },
        { id: "ist_4", name: "Kandilli İskelesi Sabah Çayı", type: "Deneyim", author: "Berke Saygılı", badge: "RİTÜEL" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "okumak_istediklerim",
      title: "Okumak İstediklerim",
      description: "Felsefe, estetik, mimari ve yavaş yaşam üzerine editoryal okuma listesi.",
      curator: "Berke Saygılı",
      count: 14,
      cover: "/images/editorial/book_reading.jpg",
      items: [
        { id: "oku_1", name: "Yavaş Yaşamak: Daha Fazlasını Hissetmek", type: "Yazı", author: "Deniz Kaya", badge: "OKU" },
        { id: "oku_2", name: "Görünmez Kentler", type: "Nadir Kitap", author: "Italo Calvino", badge: "KİTAP" },
        { id: "oku_3", name: "Tenin Gözleri: Mimarlık ve Duyular", type: "Kitap", author: "Juhani Pallasmaa", badge: "MİMARİ" },
        { id: "oku_4", name: "Mekânın Poetikası", type: "Kitap", author: "Gaston Bachelard", badge: "FELSEFE" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "yaz_aksamlari",
      title: "Yaz Akşamları",
      description: "Akdeniz esintisi, teras sohbetleri, hafif şaraplar ve mum ışığı ritüelleri.",
      curator: "Berke Saygılı",
      count: 8,
      cover: "/images/editorial/slow_living_coffee_terrace.jpg",
      items: [
        { id: "yaz_1", name: "Amalfi'de Yavaş Zamanlar", type: "Yazı", author: "Deniz Kaya", badge: "OKU" },
        { id: "yaz_2", name: "Good Days Doğal Soya Mumu", type: "Nesne", author: "Maison Botanical", badge: "SEÇKİN" },
        { id: "yaz_3", name: "Akdeniz Akustik Gitar Seçkisi", type: "Müzik", author: "Maison Ambience", badge: "SES" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "italya",
      title: "İtalya",
      description: "Floransa taş sokakları, Amalfi kıyıları, Venedik avluları ve Toskana zanaatkarları.",
      curator: "Berke Saygılı",
      count: 11,
      cover: "/images/editorial/amalfi_coast.jpg",
      items: [
        { id: "ita_1", name: "Floransa'nın Taş Sokakları ve Zanaatkarlar", type: "Şehir Rotası", author: "Deniz Kaya", badge: "KEŞFET" },
        { id: "ita_2", name: "1950'ler Pirinç Okuma Büyüteci", type: "Vintage Obje", author: "Floransa Antika", badge: "SEÇKİN" },
        { id: "ita_3", name: "Fondazione Querini Stampalia Mimarlık İncelemesi", type: "Mekân", author: "Selin Arslan", badge: "MİMARİ" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "evime_alacaklarim",
      title: "Evime Alacaklarım",
      description: "Zamana meydan okuyan, el yapımı sakin nesneler ve heykelsi aydınlatmalar.",
      curator: "Berke Saygılı",
      count: 7,
      cover: "/images/editorial/ceramic_bowl.jpg",
      items: [
        { id: "ev_1", name: "El Yapımı Seramik Kase", type: "Seramik", author: "Atelier Lune", badge: "₺2.850" },
        { id: "ev_2", name: "Traverten Heykelsi Abajur", type: "Aydınlatma", author: "Studio Petra", badge: "₺4.600" },
        { id: "ev_3", name: "Ham Keten Dokuma Masa Örtüsü", type: "Tekstil", author: "Antik Ege Tezgahı", badge: "₺2.150" },
        { id: "ev_4", name: "Elde Dövme Ağır Bakır Su Karafı", type: "Ev Parçası", author: "Gaziantep Ustaları", badge: "₺3.750" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "bir_gun_gormek_istediklerim",
      title: "Bir Gün Görmek İstediklerim",
      description: "Kyoto Ryoan-ji tapınağı, Naoshima ada müzeleri ve İsviçre dağ kaplıcaları.",
      curator: "Berke Saygılı",
      count: 6,
      cover: "/images/editorial/modern_interior.jpg",
      items: [
        { id: "gor_1", name: "Ryoan-ji Zen Bahçesi", type: "Mekân & Felsefe", author: "Kyoto, Japonya", badge: "MİMARİ" },
        { id: "gor_2", name: "Therme Vals (Peter Zumthor)", type: "Termal Yapı", author: "Vals, İsviçre", badge: "MİMARİ" },
        { id: "gor_3", name: "Benesse House & Chichu Art Museum", type: "Sanat Adası", author: "Naoshima, Japonya", badge: "SANAT" }
      ],
      relatedScreen: "collection_detail"
    },
    {
      id: "hayatimda_olmasini_istediklerim",
      title: "Hayatımda Olmasını İstediklerim",
      description: "Sakin sabah ritüelleri, analog bir çalışma masası ve derinlikli bir kütüphane.",
      curator: "Berke Saygılı",
      count: 10,
      cover: "/images/editorial/moment_morning.jpg",
      items: [
        { id: "hay_1", name: "Ekransız Sabahın İlk 30 Dakikası", type: "Ritüel", author: "Gündelik Pratik", badge: "YAŞAM" },
        { id: "hay_2", name: "Masif Ceviz ve Pirinç Dolma Kalem", type: "Yazı Gereci", author: "Koto Craft", badge: "SEÇKİN" },
        { id: "hay_3", name: "Haftalık Salon Düşünce Saati", type: "Topluluk", author: "MAISON Salon", badge: "SALON" }
      ],
      relatedScreen: "collection_detail"
    }
  ],

  // 6. MAISON PEOPLE (9 Curated Profiles with Instagram-Grade Editorial Portfolios)
  people: [
    {
      id: "deniz_kaya",
      name: "Deniz Kaya",
      handle: "@deniz.kaya",
      badge: "✦ Baş Küratör & Yazar",
      role: "Yazar & Küratör",
      type: "Yazarlar",
      location: "İstanbul & Floransa",
      affinityPercent: 96,
      mutualCount: 4,
      mutualNote: "Seninle Selin Arslan ve İtalya Notları Çevresi ortak.",
      avatar: "/images/editorial/author_deniz.jpg",
      cover: "/images/editorial/florence_duomo.jpg",
      quote: "Mekanlar insanların sessiz hikayeleridir.",
      bio: "İyi yaşam, iyi sorularla başlar. Seyahat, kültür ve insan hikayeleri üzerine yazıyor. Şehirleri, mekanları ve insanları dikkatli bir bakışla gözlemliyor, günlük hayatın içindeki ilhamı paylaşıyor.",
      personalTastes: [
        "İtalyan espresso ritüeli",
        "Eski sahaf dükkanlarında amaçsızca kaybolmak",
        "Arno nehri kıyısında sabah yürüyüşleri",
        "Lamy dolma kalemler ve pamuklu kağıtlar"
      ],
      recommendations: [
        { title: "Görünmez Kentler", type: "Kitap", author: "Italo Calvino" },
        { title: "Fondazione Querini Stampalia", type: "Mekân", author: "Venedik" },
        { title: "Amalfi Taş Kıyı Yolu", type: "Rota", author: "Güney İtalya" }
      ],
      maisonArticles: [
        "Yavaş Yaşamak: Daha Fazlasını Hissetmek",
        "Amalfi'de Yavaş Zamanlar: Coğrafyanın Sabrı",
        "Kelimelerin ve Mekânların Peşinde: Edebiyatın Mekânı"
      ],
      collections: ["Benim İstanbul'um", "Yaz Akşamları", "İtalya Notları"],
      stats: { posts: 42, followers: "28K", following: 148, affinity: "%96" },
      story: {
        id: "story_deniz",
        title: "Floransa Sabahı",
        image: "/images/editorial/florence_duomo.jpg",
        caption: "Arno kıyısında sis dağılırken eski Floransa köprüsünü izlemek... Zaman burada acele etmiyor.",
        time: "2 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_deniz_1", title: "Ritüeller", icon: "☕", img: "/images/editorial/slow_living_coffee_morning.jpg" },
        { id: "h_deniz_2", title: "Floransa", icon: "🏛️", img: "/images/editorial/florence_duomo.jpg" },
        { id: "h_deniz_3", title: "Kütüphane", icon: "📚", img: "/images/editorial/library_books.jpg" },
        { id: "h_deniz_4", title: "Yazılar", icon: "✍️", img: "/images/editorial/book_reading.jpg" }
      ],
      posts: [
        {
          id: "post_deniz_1",
          image: "/images/editorial/florence_duomo.jpg",
          caption: "Floransa'da sabah çan sesleri ve ilk espresso... Bir kenti tanımak için onun en uykulu saatlerinde yürümek gerek.",
          location: "Piazza del Duomo, Floransa",
          likes: 412,
          liked: false,
          time: "3 saat önce",
          comments: [
            { author: "Selin Arslan", avatar: "/images/editorial/architect_selin.jpg", text: "Brunelleschi kubbesinin sabah ışığındaki rengi benzersiz." },
            { author: "Berke Saygılı", avatar: "/images/editorial/berke_saygili.jpg", text: "Kelimelerin ve mekanların harika bir buluşması." }
          ]
        },
        {
          id: "post_deniz_2",
          image: "/images/editorial/book_reading.jpg",
          caption: "Calvino'nun Görünmez Kentler'i ile öğleden sonra molası. 'Göz bir şey görmez, anlamını bildiği şeylerin ağırlığını taşır.'",
          location: "Biblioteca delle Oblate, Floransa",
          likes: 328,
          liked: false,
          time: "1 gün önce",
          comments: [
            { author: "İlber Ortaylı", avatar: "/images/editorial/author_deniz.jpg", text: "Calvino, Akdeniz muhayyilesinin en rafine temsilcisidir." }
          ]
        },
        {
          id: "post_deniz_3",
          image: "/images/editorial/slow_living_coffee_morning.jpg",
          caption: "Kağıt, mürekkep ve sessizlik. Günün en verimli yarım saati hiçbir bildirim olmadan sadece düşünceye ayrılan an.",
          location: "San Frediano, Floransa",
          likes: 295,
          liked: false,
          time: "2 gün önce",
          comments: [
            { author: "Aylin Tezel", avatar: "/images/editorial/architect_selin.jpg", text: "Sade bir sabahın asaleti bambaşka." }
          ]
        },
        {
          id: "post_deniz_4",
          image: "/images/editorial/amalfi_coast.jpg",
          caption: "Amalfi sırtlarında taş patika. Coğrafyanın sabrı insanı kendine getiriyor; bazen en büyük keşif sadece durup nefes alabilmektir.",
          location: "Sentiero degli Dei, Amalfi",
          likes: 520,
          liked: false,
          time: "4 gün önce",
          comments: []
        },
        {
          id: "post_deniz_5",
          image: "/images/editorial/library_books.jpg",
          caption: "Querini Stampalia'nın Carlo Scarpa tarafından elden geçirilen avlusunda su sesleri ve ciltli klasikler.",
          location: "Venedik, İtalya",
          likes: 384,
          liked: false,
          time: "5 gün önce",
          comments: []
        },
        {
          id: "post_deniz_6",
          image: "/images/editorial/moment_morning.jpg",
          caption: "Güne telaşsız bir başlangıç: Seramik bir kase, taze zeytin yaprağı kokusu ve sabah serinliği.",
          location: "Floransa & Toskana",
          likes: 246,
          liked: false,
          time: "1 hafta önce",
          comments: []
        }
      ]
    },
    {
      id: "selin_arslan",
      name: "Selin Arslan",
      handle: "@selin.arslan",
      badge: "✦ Koruma Mimarı & Konsey Üyesi",
      role: "Mimar & Koruma Uzmanı",
      type: "Mimarlar",
      location: "İstanbul & Bodrum",
      affinityPercent: 94,
      mutualCount: 5,
      mutualNote: "Seninle Deniz Kaya ve İstanbul Mimari Çevresi ortak.",
      avatar: "/images/editorial/architect_selin.jpg",
      cover: "/images/editorial/architecture_arched.jpg",
      quote: "Bir mekanın ruhu, bırakılan boşluklardadır.",
      bio: "Tarihi yapıların çağdaş yaşamla diyaloğu üzerine odaklanıyor. Akdeniz taş mimarisi, doğal malzeme kullanımı ve koruma pratikleri konularında araştırmalar yürütüyor.",
      personalTastes: [
        "Denizli traverteninin doğal dokusu",
        "Sabah ışığının kemerli pencerelerden süzülüşü",
        "Minimalist Japon seramikleri",
        "Klasik müzik eşliğinde eskiz çizmek"
      ],
      recommendations: [
        { title: "Tenin Gözleri", type: "Kitap", author: "Juhani Pallasmaa" },
        { title: "Büyük Valide Han Avlusu", type: "Mekân", author: "Eminönü, İstanbul" },
        { title: "Traverten Heykelsi Abajur", type: "Tasarım Objesi", author: "Studio Petra" }
      ],
      maisonArticles: [
        "İstanbul'un Sessiz Avluları ve Taşın Hafızası"
      ],
      collections: ["Taşın ve Işığın Hafızası", "Kentsel Sığınaklar"],
      stats: { posts: 36, followers: "19.4K", following: 112, affinity: "%94" },
      story: {
        id: "story_selin",
        title: "Bodrum Traverten",
        image: "/images/editorial/architecture_arched.jpg",
        caption: "Bodrum şantiyesinde ham traverten taşının gölgeyle dansı... Doğal malzeme zamanla eskimez, güzelleşir.",
        time: "4 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_selin_1", title: "Projeler", icon: "🏛️", img: "/images/editorial/architecture_arched.jpg" },
        { id: "h_selin_2", title: "Avlular", icon: "🌿", img: "/images/editorial/istanbul_courtyard.jpg" },
        { id: "h_selin_3", title: "Taş & Doku", icon: "🧱", img: "/images/editorial/modern_interior.jpg" },
        { id: "h_selin_4", title: "Eskizler", icon: "📐", img: "/images/editorial/book_reading.jpg" }
      ],
      posts: [
        {
          id: "post_selin_1",
          image: "/images/editorial/architecture_arched.jpg",
          caption: "Kemerlerin gölgesi ve doğal taşın serinliği. Akdeniz mimarisinde boşluk, doluluktan çok daha fazlasını söyler.",
          location: "Gümüşlük, Bodrum",
          likes: 489,
          liked: false,
          time: "4 saat önce",
          comments: [
            { author: "Berke Saygılı", avatar: "/images/editorial/berke_saygili.jpg", text: "Kemer oranları ve ışık dengesi olağanüstü." },
            { author: "Defne Akman", avatar: "/images/editorial/architect_selin.jpg", text: "Malzemenin dürüstlüğü tam olarak bu." }
          ]
        },
        {
          id: "post_selin_2",
          image: "/images/editorial/istanbul_courtyard.jpg",
          caption: "Tarihi Yarımada'da bir sabah avlusu. Şehrin gürültüsünden sadece üç basamakla asırlık bir sessizliğe geçiş.",
          location: "Eminönü & Süleymaniye, İstanbul",
          likes: 372,
          liked: false,
          time: "1 gün önce",
          comments: [
            { author: "İlber Ortaylı", avatar: "/images/editorial/author_deniz.jpg", text: "Eski İstanbul avluları medeniyetin iç sığınağıdır." }
          ]
        },
        {
          id: "post_selin_3",
          image: "/images/editorial/modern_interior.jpg",
          caption: "Meşe, ham keten ve traverten. Fazlalıklardan arındırılmış bir mekan, zihne sakin bir sığınak sağlar.",
          location: "Kuzguncuk Atölyesi, İstanbul",
          likes: 415,
          liked: false,
          time: "3 gün önce",
          comments: []
        },
        {
          id: "post_selin_4",
          image: "/images/editorial/slow_living_mediterranean_1.jpg",
          caption: "Akdeniz'in taş dokuları arasında rüzgarın sesi. Doğal malzeme doğayla savaşmaz, ona eşlik eder.",
          location: "Bodrum Yarımadası",
          likes: 310,
          liked: false,
          time: "5 gün önce",
          comments: []
        },
        {
          id: "post_selin_5",
          image: "/images/editorial/bosphorus_sunset.jpg",
          caption: "Akşam ışığının yalı cephelerindeki yansıması. Boğaz'ın ahşap mimarisi suyun ışığıyla yaşar.",
          location: "Yeniköy Kıyıları, İstanbul",
          likes: 540,
          liked: false,
          time: "1 hafta önce",
          comments: []
        },
        {
          id: "post_selin_6",
          image: "/images/editorial/slow_living_amalfi_terrace.jpg",
          caption: "Teras mimarisi ve ufuk çizgisi. Doğru bir teras, sizi gökyüzüne bağlayan sessiz bir platformdur.",
          location: "Ravello, İtalya",
          likes: 290,
          liked: false,
          time: "10 gün önce",
          comments: []
        }
      ]
    },
    {
      id: "kerem_demir",
      name: "Kerem Demir",
      handle: "@kerem.demir",
      badge: "✦ Ege Gastronomi Küratörü",
      role: "Şef & Gastronomi Tarihçisi",
      type: "Şefler",
      location: "İzmir & Atina",
      affinityPercent: 91,
      mutualCount: 3,
      mutualNote: "Seninle Zeytin & Akdeniz Çevresi ortak.",
      avatar: "/images/editorial/chef_kerem.jpg",
      cover: "/images/editorial/gastronomy_pasta.jpg",
      quote: "Sofra, insanı yavaşlatan ve birbirine bağlayan en kadim mabettir.",
      bio: "Ege ve Doğu Akdeniz mutfaklarının antropolojik köklerini araştırıyor. Sofra ritüelleri, yerel tohumların korunması ve antik pişirme teknikleri üzerine çalışıyor.",
      personalTastes: [
        "Taş baskı soğuk sıkım erken hasat zeytinyağı",
        "Yabani Ege otları ve deniz tuzu",
        "Toprak güveçte saatlerce ağır pişen yemekler",
        "Uzun masa etrafında dost sohbetleri"
      ],
      recommendations: [
        { title: "Damak Tadı Felsefesi", type: "Kitap", author: "Brillat-Savarin" },
        { title: "Ayvalık Zeytin Korulukları", type: "Rota", author: "Ege" },
        { title: "Elde Dövme Bakır Su Karafı", type: "Nesne", author: "Gaziantep Ustaları" }
      ],
      maisonArticles: [
        "Ege'nin Kadim Zeytin Ağaçları ve Sofra Ritüeli"
      ],
      collections: ["Ege Sofraları", "Toprağın Lezzetleri"],
      stats: { posts: 48, followers: "21.6K", following: 96, affinity: "%91" },
      story: {
        id: "story_kerem",
        title: "Zeytin Hasadı",
        image: "/images/editorial/slow_living_mediterranean_2.jpg",
        caption: "Urla'da asırlık ağaçlardan elle toplanan memecik zeytinleri... Taş baskıdan çıkan ilk yeşil yağın kokusu anlatılamaz.",
        time: "5 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_kerem_1", title: "Sofralar", icon: "🫒", img: "/images/editorial/gastronomy_pasta.jpg" },
        { id: "h_kerem_2", title: "Zanaat", icon: "🏺", img: "/images/editorial/ceramic_bowl.jpg" },
        { id: "h_kerem_3", title: "Hasat", icon: "🌿", img: "/images/editorial/slow_living_mediterranean_2.jpg" },
        { id: "h_kerem_4", title: "Ritüeller", icon: "☕", img: "/images/editorial/slow_living_coffee_terrace.jpg" }
      ],
      posts: [
        {
          id: "post_kerem_1",
          image: "/images/editorial/gastronomy_pasta.jpg",
          caption: "Taş değirmende öğütülmüş siyez unu, sarı yumurta ve yabani Ege kekiğiyle taze el açması makarna. Sade lezzetlerin gücü.",
          location: "Urla Bağ Yolu, İzmir",
          likes: 512,
          liked: false,
          time: "5 saat önce",
          comments: [
            { author: "Deniz Kaya", avatar: "/images/editorial/author_deniz.jpg", text: "İtalya'nın kuzeyindeki pasta geleneklerini aratmıyor." }
          ]
        },
        {
          id: "post_kerem_2",
          image: "/images/editorial/ceramic_bowl.jpg",
          caption: "Elde şekillendirilmiş yerel kırmızı kil kase ve erken hasat zeytinyağı. Sofra önce göze, sonra ruha hitap etmeli.",
          location: "Menemen Çömlekçileri & Urla",
          likes: 340,
          liked: false,
          time: "2 gün önce",
          comments: []
        },
        {
          id: "post_kerem_3",
          image: "/images/editorial/slow_living_mediterranean_2.jpg",
          caption: "Bin yıllık bir zeytin ağacının gölgesinde ikindi sessizliği. Bu topraklar sabrı bize her mevsim yeniden öğretiyor.",
          location: "Ayvalık Zeytinlikleri, Balıkesir",
          likes: 460,
          liked: false,
          time: "4 gün önce",
          comments: []
        },
        {
          id: "post_kerem_4",
          image: "/images/editorial/slow_living_coffee_terrace.jpg",
          caption: "Akşamüstü terasında adaçayı ve taze incir seremonisi. Sofranın etrafında geçen zaman asla kayıp değildir.",
          location: "Cunda Adası, Ayvalık",
          likes: 395,
          liked: false,
          time: "1 hafta önce",
          comments: []
        }
      ]
    },
    {
      id: "elif_demir",
      name: "Elif Demir",
      handle: "@elif.demir",
      badge: "✦ Görsel Sanatçı",
      role: "Çağdaş Görsel Sanatçı",
      type: "Sanatçılar",
      location: "İstanbul & Berlin",
      affinityPercent: 93,
      mutualCount: 4,
      mutualNote: "Seninle Karaköy Sanat ve Minimalizm Çevresi ortak.",
      avatar: "/images/editorial/architect_selin.jpg",
      cover: "/images/editorial/art_sculpture.jpg",
      quote: "Göz görmez, zihin hatırlar.",
      bio: "Tuval üzerine doğal pigmentler ve mineral boyalarla katmanlı hafıza manzaraları üretiyor. Eserleri uluslararası bienallerde sergileniyor.",
      personalTastes: [
        "Keten kumaşın doğal lif dokusu",
        "Berlin'in gri sabahları",
        "Max Richter ve minimalist yaylılar",
        "Kömür kalem eskizleri"
      ],
      recommendations: [
        { title: "Görmenin Biçimleri", type: "Kitap", author: "John Berger" },
        { title: "İstanbul Modern Sergileri", type: "Etkinlik", author: "Karaköy" }
      ],
      maisonArticles: ["Görsel Hafızanın Katmanları"],
      collections: ["Renkler ve Sessizlik"],
      stats: { posts: 29, followers: "24.2K", following: 84, affinity: "%93" },
      story: {
        id: "story_elif",
        title: "Berlin Atölyesi",
        image: "/images/editorial/art_sculpture.jpg",
        caption: "Doğal toprak boyaları keten bezine işlerken... Katmanlar kurudukça hafıza beliriyor.",
        time: "6 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_elif_1", title: "Eserler", icon: "🎨", img: "/images/editorial/art_sculpture.jpg" },
        { id: "h_elif_2", title: "Sergiler", icon: "🏛️", img: "/images/editorial/art_exhibition.jpg" },
        { id: "h_elif_3", title: "Atölye", icon: "🖌️", img: "/images/editorial/modern_interior.jpg" }
      ],
      posts: [
        {
          id: "post_elif_1",
          image: "/images/editorial/art_sculpture.jpg",
          caption: "Doğal mineral pigmentlerle doku denemeleri. Tuval sadece bir yüzey değil, zamanın tortusunu tutan bir hafıza alanı.",
          location: "Mitte Atölyesi, Berlin",
          likes: 432,
          liked: false,
          time: "6 saat önce",
          comments: []
        },
        {
          id: "post_elif_2",
          image: "/images/editorial/art_exhibition.jpg",
          caption: "Karaköy'deki karma seçkiden bir kesit: Işık ve gölgenin boşlukla kurduğu sessiz diyalog.",
          location: "Karaköy Liman Sahası, İstanbul",
          likes: 388,
          liked: false,
          time: "2 gün önce",
          comments: []
        }
      ]
    },
    {
      id: "murat_can",
      name: "Murat Can",
      handle: "@murat.can",
      badge: "✦ Horoloji & Antika Koleksiyoneri",
      role: "Antika & Horoloji Koleksiyoneri",
      type: "Koleksiyonerler",
      location: "İstanbul & Cenevre",
      affinityPercent: 89,
      mutualCount: 4,
      mutualNote: "Seninle Zaman Felsefesi ve Klasik Saatler Çevresi ortak.",
      avatar: "/images/editorial/author_deniz.jpg",
      cover: "/images/editorial/dim_nesneler.jpg",
      quote: "Bir nesnenin gerçek değeri, üzerinden geçen zamanın bıraktığı izdedir.",
      bio: "30 yıldır mekanik saatler, nadir kitaplar ve 1950'ler tasarım objeleri topluyor. MAISON Salon'da saat ve nesne kültürü odasını yönetiyor.",
      personalTastes: [
        "1960'ların mekanik kronografları",
        "Pirinç optik büyüteçler",
        "Eski deri ciltli atlaslar",
        "Puro ve koyu kavrulmuş kahve"
      ],
      recommendations: [
        { title: "Maison Horology Vintage 1968", type: "Saat", author: "Cenevre Atölyesi" },
        { title: "Zamanın Ustaları", type: "Kitap", author: "Horoloji Tarihi" }
      ],
      maisonArticles: ["Bir Nesnenin Hatırası: Vintage Saatlerin Zaman Felsefesi"],
      collections: ["Zaman Makineleri", "Nadir Ciltler"],
      stats: { posts: 38, followers: "16.8K", following: 79, affinity: "%89" },
      story: {
        id: "story_murat",
        title: "1968 Cenevre",
        image: "/images/editorial/dim_nesneler.jpg",
        caption: "Manuel kurmalı mekanik kronografın iç mekanizmasını incelerken... Zamanı sayısallaştırmadan hissetmek.",
        time: "7 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_murat_1", title: "Saatler", icon: "⏱️", img: "/images/editorial/dim_nesneler.jpg" },
        { id: "h_murat_2", title: "Nadir Cilt", icon: "📖", img: "/images/editorial/library_books.jpg" },
        { id: "h_murat_3", title: "Objeler", icon: "🔍", img: "/images/editorial/modern_interior.jpg" }
      ],
      posts: [
        {
          id: "post_murat_1",
          image: "/images/editorial/dim_nesneler.jpg",
          caption: "1968 Cenevre el yapımı kronograf. Çarkların pirinç pırıltısı, insanın zamana karşı kurduğu en zarif meydan okumadır.",
          location: "Rue du Rhône, Cenevre",
          likes: 476,
          liked: false,
          time: "7 saat önce",
          comments: []
        },
        {
          id: "post_murat_2",
          image: "/images/editorial/library_books.jpg",
          caption: "18. yüzyıl Venedik deniz haritaları atlası. Deri cildin kokusu asırların yolculuğunu bugüne taşıyor.",
          location: "Beyoğlu Antikacılar Çarşısı, İstanbul",
          likes: 315,
          liked: false,
          time: "3 gün önce",
          comments: []
        }
      ]
    },
    {
      id: "defne_akman",
      name: "Defne Akman",
      handle: "@defne.akman",
      badge: "✦ Endüstriyel Tasarımcı & Zanaat",
      role: "Endüstriyel Tasarımcı & Zanaat Araştırmacısı",
      type: "Tasarımcılar",
      location: "Kopenhag & İstanbul",
      affinityPercent: 95,
      mutualCount: 6,
      mutualNote: "Seninle Selin Arslan ve İskandinav Tasarım Çevresi ortak.",
      avatar: "/images/editorial/architect_selin.jpg",
      cover: "/images/editorial/modern_interior.jpg",
      quote: "İyi tasarım kendini bağırmaz, sessizce hayatı kolaylaştırır.",
      bio: "İskandinav işlevselliği ile Akdeniz sıcaklığını bir araya getiren mobilya ve aydınlatma tasarımları yapıyor.",
      personalTastes: [
        "Masif meşe ve dişbudak ağacı",
        "Dieter Rams tasarım ilkeleri",
        "Kopenhag bisiklet yolları",
        "El dokuması ham yün kilimler"
      ],
      recommendations: [
        { title: "Tasarımın Tasarımı", type: "Kitap", author: "Kenya Hara" },
        { title: "El Yapımı Seramik Kase", type: "Tasarım", author: "Atelier Lune" }
      ],
      maisonArticles: ["Sessiz Tasarım: İhtiyaç ile Fazlalık Arasındaki Çizgi"],
      collections: ["Nordik Dinginlik", "Sade Formlar"],
      stats: { posts: 44, followers: "22.5K", following: 105, affinity: "%95" },
      story: {
        id: "story_defne",
        title: "Meşe & Zanaat",
        image: "/images/editorial/modern_interior.jpg",
        caption: "Kopenhag atölyesinde masif dişbudak ağacını el rendesiyle inceltirken çıkan reçine kokusu...",
        time: "3 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_defne_1", title: "Mobilya", icon: "🪑", img: "/images/editorial/modern_interior.jpg" },
        { id: "h_defne_2", title: "Seramik", icon: "🏺", img: "/images/editorial/ceramic_bowl.jpg" },
        { id: "h_defne_3", title: "Kopenhag", icon: "🚲", img: "/images/editorial/slow_living_mediterranean_3.jpg" }
      ],
      posts: [
        {
          id: "post_defne_1",
          image: "/images/editorial/modern_interior.jpg",
          caption: "Masif meşe koltuk prototipi tamamlandı. Vida kullanmadan, geleneksel geçme tekniğiyle bir araya gelen saf zanaat.",
          location: "Vesterbro, Kopenhag",
          likes: 560,
          liked: false,
          time: "3 saat önce",
          comments: []
        },
        {
          id: "post_defne_2",
          image: "/images/editorial/ceramic_bowl.jpg",
          caption: "Wabi-sabi felsefesinin seramikteki tecellisi: Kusurun içindeki eşsiz güzellik.",
          location: "Moda Atölyesi, Kadıköy",
          likes: 410,
          liked: false,
          time: "2 gün önce",
          comments: []
        }
      ]
    },
    {
      id: "ilber_ortayli",
      name: "Prof. Dr. İlber Ortaylı",
      handle: "@ilberortayli",
      badge: "✦ Onur Üyesi & Tarihçi",
      role: "Tarihçi & Yazar",
      type: "Akademisyenler",
      location: "İstanbul & Viyana",
      affinityPercent: 92,
      mutualCount: 7,
      mutualNote: "Seninle Boğaziçi ve Tarih Çevresi ortak.",
      avatar: "/images/editorial/author_deniz.jpg",
      cover: "/images/editorial/bosphorus_sunset_new.jpg",
      quote: "Tarihini bilmeyen insan, hafızasını kaybetmiş bir yolcu gibidir.",
      bio: "Akdeniz dünyası, Osmanlı modernleşmesi ve Avrupa kültür tarihi üzerine ömrünü vermiş bir düşünce insanı.",
      personalTastes: [
        "Topkapı Sarayı'nın avlularında sabah yürüyüşü",
        "Klasik müzik ve opera",
        "Eski haritalar ve el yazması divanlar",
        "İyi demlenmiş bir fincan çay"
      ],
      recommendations: [
        { title: "İmparatorluğun En Uzun Yüzyılı", type: "Kitap", author: "İlber Ortaylı" },
        { title: "Süleymaniye Kütüphanesi", type: "Mekân", author: "İstanbul" }
      ],
      maisonArticles: ["Boğaziçi Medeniyeti ve Şehrin Kültürel Katmanları"],
      collections: ["Osmanlı Estetiği", "Akdeniz Tarihi"],
      stats: { posts: 85, followers: "128K", following: 45, affinity: "%92" },
      story: {
        id: "story_ilber",
        title: "Süleymaniye",
        image: "/images/editorial/library_books.jpg",
        caption: "Süleymaniye Kütüphanesi'nin kubbesi altında divan el yazmalarını tetkik ederken... Bu şehrin hafızası eşsizdir.",
        time: "1 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_ilber_1", title: "Kütüphane", icon: "📜", img: "/images/editorial/library_books.jpg" },
        { id: "h_ilber_2", title: "Boğaziçi", icon: "🌊", img: "/images/editorial/bosphorus_sunset_new.jpg" },
        { id: "h_ilber_3", title: "Saraylar", icon: "🏛️", img: "/images/editorial/istanbul_courtyard.jpg" }
      ],
      posts: [
        {
          id: "post_ilber_1",
          image: "/images/editorial/bosphorus_sunset_new.jpg",
          caption: "Boğaziçi medeniyeti, suyun ve koruların oluşturduğu dünyadaki tek şehir peyzajıdır. Onu korumak hepimizin vazifesidir.",
          location: "Kandilli Sırtları, İstanbul",
          likes: 1420,
          liked: false,
          time: "1 saat önce",
          comments: []
        },
        {
          id: "post_ilber_2",
          image: "/images/editorial/library_books.jpg",
          caption: "Süleymaniye'de bir sabah araştırması. Yazma eserlerin kağıdındaki aharlı terkipler asırlardır solmadan duruyor.",
          location: "Süleymaniye, İstanbul",
          likes: 980,
          liked: false,
          time: "3 gün önce",
          comments: []
        }
      ]
    },
    {
      id: "cem_talu",
      name: "Cem Talu",
      handle: "@cem.talu",
      badge: "✦ Fotoğraf Sanatçısı",
      role: "Kültür & Portre Fotoğrafçısı",
      type: "Fotoğrafçılar",
      location: "İstanbul & Londra",
      affinityPercent: 94,
      mutualCount: 4,
      mutualNote: "Seninle Analog Fotoğraf Çevresi ortak.",
      avatar: "/images/editorial/chef_kerem.jpg",
      cover: "/images/editorial/bosphorus_bridge_hd.jpg",
      quote: "Işık, gerçeğin en dürüst şahididir.",
      bio: "Analog makineler ve doğal ışıkla çalışan, portrelerinde insanların ruhundaki sakin anları yakalayan fotoğraf sanatçısı.",
      personalTastes: [
        "Leica M6 analog makine",
        "Tri-X 400 siyah beyaz film",
        "Plağın sıcak analog tınısı",
        "Yağmurlu günlerde karanlık oda baskısı"
      ],
      recommendations: [
        { title: "Ara Güler: Bir Gözlemcinin Portresi", type: "Fotoğraf Kitabı", author: "Ara Güler" },
        { title: "Boğaziçi Sabah Işıkları", type: "Fotoğraf Rotası", author: "İstanbul" }
      ],
      maisonArticles: ["Analog Fotoğrafın Sabrı: Beklemenin Güzelliği"],
      collections: ["Işığın İzinde", "Siyah Beyaz Hatıralar"],
      stats: { posts: 32, followers: "36.2K", following: 120, affinity: "%94" },
      story: {
        id: "story_cem",
        title: "35mm Boğaz",
        image: "/images/editorial/bosphorus_bridge_hd.jpg",
        caption: "Boğaz'ın sisli sabahında Leica ile deklanşöre basmak... Her kare bir daha geri gelmeyecek tek bir an.",
        time: "8 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_cem_1", title: "Analog", icon: "📷", img: "/images/editorial/bosphorus_bridge_hd.jpg" },
        { id: "h_cem_2", title: "Portreler", icon: "👥", img: "/images/editorial/salon_gathering.jpg" },
        { id: "h_cem_3", title: "Karanlık Oda", icon: "🎞️", img: "/images/editorial/slow_living_cozy_morning.jpg" }
      ],
      posts: [
        {
          id: "post_cem_1",
          image: "/images/editorial/bosphorus_bridge_hd.jpg",
          caption: "Ortaköy sırtlarından sisli sabah ışığı. Siyah beyaz filmin gümüş zerrecikleri puslu havayı öyle güzel kavrıyor ki.",
          location: "Boğaziçi, İstanbul",
          likes: 640,
          liked: false,
          time: "8 saat önce",
          comments: []
        }
      ]
    },
    {
      id: "aylin_tezel",
      name: "Aylin Tezel",
      handle: "@aylin.tezel",
      badge: "✦ Stil Danışmanı & Küratör",
      role: "Küratör & Stil Danışmanı",
      type: "Stil Sahipleri",
      location: "Paris & İstanbul",
      affinityPercent: 93,
      mutualCount: 5,
      mutualNote: "Seninle Zamansız Tasarım ve Paris Çevresi ortak.",
      avatar: "/images/editorial/architect_selin.jpg",
      cover: "/images/editorial/slow_living_terrace_4.jpg",
      quote: "Stil, ne giydiğiniz değil; nasıl yaşadığınızdır.",
      bio: "Sürdürülebilir lüks, vintage terzilik ve zamansız gardırop mimarisi üzerine danışmanlık veriyor.",
      personalTastes: [
        "Ham keten blazer ceketler",
        "Paris bit pazarları",
        "Amber ve tütsü esansları",
        "Minimalist altın takılar"
      ],
      recommendations: [
        { title: "Zamana Direnen Terzilik", type: "Makale", author: "Aylin Tezel" },
        { title: "Dövme Mat Altın Mühür Yüzük", type: "Mücevher", author: "Kapalıçarşı Usta Aram" }
      ],
      maisonArticles: ["Zamana Direnen Terzilik: Sade Bir Zarafet Arayışı"],
      collections: ["Zamansız Gardırop", "Rafine Detaylar"],
      stats: { posts: 51, followers: "46.8K", following: 135, affinity: "%93" },
      story: {
        id: "story_aylin",
        title: "Saint-Germain",
        image: "/images/editorial/slow_living_terrace_4.jpg",
        caption: "Sabah rüzgarında ham keten kumaşın akışı... Paris'te zarafet fazlalıklardan vazgeçme sanatıdır.",
        time: "9 saat önce",
        seen: false
      },
      highlights: [
        { id: "h_aylin_1", title: "Gardırop", icon: "🧥", img: "/images/editorial/slow_living_terrace_4.jpg" },
        { id: "h_aylin_2", title: "Zanaat", icon: "💍", img: "/images/editorial/dim_tasarim.jpg" },
        { id: "h_aylin_3", title: "Paris", icon: "🥐", img: "/images/editorial/slow_living_coffee_morning.jpg" }
      ],
      posts: [
        {
          id: "post_aylin_1",
          image: "/images/editorial/slow_living_terrace_4.jpg",
          caption: "Saint-Germain terasında bir sabah sohbeti. Gerçek stil kendini asla bağırmaz; kumaşın dokusunda ve duruşunda fısıldar.",
          location: "Rue de Seine, Paris",
          likes: 720,
          liked: false,
          time: "9 saat önce",
          comments: []
        }
      ]
    }
  ],

  // 7. MAISON MOMENT (Daily Mindful Habit Layer)
  moment: {
    title: "Günün 5 Dakikası",
    date: "Bugün",
    tagline: "Büyük değişimler, küçük anlarla başlar.",
    idea: "Zamanı durduramazsın ama derinleştirebilirsin.",
    essay: "Güne huzurlu başlamak için 5 basit adım: Sabahın ilk yarım saatinde ekrana bakmamak, bir fincan sıcak suyu veya kahveyi kokusunu hissederek yudumlamak, pencereden gökyüzüne en az 2 dakika dikkatle bakmak, gün için tek bir ana niyet belirlemek ve bir cümlelik bir şükür notu almak.",
    music: {
      title: "Ambre",
      artist: "Nils Frahm",
      duration: "4:12",
      type: "Ambient Piyano & Sessizlik Manzarası"
    },
    photo: "/images/editorial/moment_morning.jpg",
    photoPrompt: "Sabah ışığında ahşap masa, seramik fincan ve açık bir kitap.",
    book: "Düşün, Yavaşla – Daniel Kahneman",
    bookCover: "/images/editorial/book_reading.jpg",
    place: "Fondazione Querini Stampalia, Venedik (Carlo Scarpa mimarisi)",
    question: "Bugün neyi aceleye getirmeyeceksin?",
    relatedScreen: "moment_intro"
  },

  // 8. JOURNAL ENTRIES (User's Personal Mindful Reflections)
  journalEntries: [
    {
      id: "j1",
      title: "Yavaş Bir Sabahın Ritmi",
      date: "Bugün",
      excerpt: "Bugün kendime daha fazla zaman ayırdım. Kahvemi içerken telaşsızca pencereden dışarı baktım...",
      content: "Bugün kendime daha fazla zaman ayırdım. Sabah kahvemi içerken telaşsızca Boğaz'a ve pencereden süzülen sonbahar ışığına baktım. Yaşamın hızı değil, derinliği önemli. Bir kitabı bitirmek için değil, satırlarında kaybolmak için okumalı.",
      tags: ["Ritüel", "Sakinlik", "Sabah"],
      relatedScreen: "journal_detail"
    },
    {
      id: "j2",
      title: "Taşın ve Boşluğun Dersi",
      date: "Dün",
      excerpt: "Mimaride olduğu gibi zihinde de bırakılan boşluklar en değerli alanlardır...",
      content: "Büyük Valide Han'ın avlusunda yürürken fark ettim: Eskiden insanlar mekanları sadece doldurmak için değil, orada nefes alıp sessizliği paylaşmak için tasarlarmış. Eşyaları azalttıkça zihnim berraklaşıyor.",
      tags: ["Mekân", "Felsefe"],
      relatedScreen: "journal_detail"
    },
    {
      id: "j3",
      title: "Analog Bir An: Plak ve Çay",
      date: "3 gün önce",
      excerpt: "Akşam saatlerinde telefonu diğer odaya bıraktım. Çıtırtılı bir caz plağı koydum...",
      content: "Akşam saatlerinde telefonu diğer odaya bıraktım. Çıtırtılı bir caz plağı koydum. Dijital dünyanın sonsuz akışı insanı yoruyor; oysa bir plağın iki yüzü bittiğinde gün de doğal olarak sona eriyor.",
      tags: ["Müzik", "Analog"],
      relatedScreen: "journal_detail"
    }
  ],

  // 9. MAISON — M DÜNYASI / ÖZEL GEÇİŞ KAPISI
  mWorld: {
    welcomeQuotes: [
      "Dünyanı biraz daha genişlet.",
      "Berke, bu akşam kimlerle temas etmek istersin?",
      "Bugün MAISON'da 42 kişi mimari ve sanat üzerine düşünüyor."
    ],
    intentionChips: [
      { id: "chip_moment", label: "5 dakika ayır", icon: "⏳", action: "moment" },
      { id: "chip_oku", label: "Bir şey oku", icon: "📖", action: "oku" },
      { id: "chip_tanis", label: "Yeni biriyle tanış", icon: "🤝", action: "tanis" },
      { id: "chip_kesfet", label: "Bir fikir keşfet", icon: "💡", action: "kesfet" },
      { id: "chip_salon", label: "Salon'a gir", icon: "💬", action: "salon" },
      { id: "chip_koleksiyon", label: "Koleksiyon oluştur", icon: "🔖", action: "koleksiyon" },
      { id: "chip_journal", label: "Journal yaz", icon: "✍️", action: "journal" },
      { id: "chip_surpriz", label: "Beni şaşırt", icon: "✨", action: "surpriz" }
    ],
    liveDiscussions: [
      {
        id: "live_1",
        title: "Modernist Mimari",
        desc: "12 kişi İstanbul'un modernist mimarisi üzerine konuşuyor",
        activeCount: 12,
        roomId: "room_mimari",
        time: "Canlı"
      },
      {
        id: "live_2",
        title: "İtalyan Sineması",
        desc: "8 kişi İtalyan sineması odasında",
        activeCount: 8,
        roomId: "room_sinema",
        time: "Canlı"
      },
      {
        id: "live_3",
        title: "Sonbahar Okumaları",
        desc: "Defne ve Can ortak bir koleksiyon oluşturuyor: 'Sonbahar Okumaları'",
        activeCount: 5,
        roomId: "room_edebiyat",
        time: "Az önce"
      },
      {
        id: "live_4",
        title: "Arter / Yeni Katmanlar",
        desc: "Yeni bir sergi tartışması başladı: Arter / Yeni Katmanlar",
        activeCount: 14,
        roomId: "room_sergi",
        time: "Canlı"
      }
    ],
    dailyMatch: {
      id: "selin_arslan",
      name: "Selin Arslan",
      title: "Mimar & Koruma Uzmanı",
      quote: "Bir mekanın ruhu, bırakılan boşluklardadır.",
      mutualTags: ["Akdeniz Mimarisi", "Traverten & Doku", "Carlo Scarpa"],
      mutualCount: 4,
      avatar: "/images/editorial/architect_selin.jpg",
      matchScore: 94
    },
    maisonMatch: {
      id: "match_deniz",
      targetId: "deniz_kaya",
      targetName: "Deniz Kaya",
      targetRole: "Yazar & Küratör",
      avatar: "/images/editorial/author_deniz.jpg",
      affinityPercent: 96,
      sharedSummary: "6 ortak konu, 3 kitap, 4 editoryal rota",
      detailedNote: "İkiniz de son 3 günde Calvino, Floransa ve Yavaş Yaşam üzerine içerikler kaydettiniz.",
      sharedItems: [
        "Italo Calvino — Görünmez Kentler",
        "Floransa Rönesans Rotaları",
        "Yavaş Yaşamak Felsefesi"
      ]
    },
    suggestedPeople: [
      {
        id: "selin_arslan",
        name: "Selin Arslan",
        title: "Mimar & Koruma Uzmanı",
        tags: ["Akdeniz", "Mimari", "Traverten"],
        mutualCount: 5,
        mutualNote: "5 ortak ilgi alanınız var (%94 Zevk Uyumu)",
        quote: "Akdeniz taş mimarisi ve tarihi yapıların korunması.",
        avatar: "/images/editorial/architect_selin.jpg"
      },
      {
        id: "deniz_kaya",
        name: "Deniz Kaya",
        title: "Yazar & Küratör",
        tags: ["Edebiyat", "Floransa", "Seyahat"],
        mutualCount: 4,
        mutualNote: "İtalya notları ve Calvino üzerine benzer zevkler (%96 Zevk Uyumu)",
        quote: "Mekanlar insanların sessiz hikayeleridir.",
        avatar: "/images/editorial/author_deniz.jpg"
      },
      {
        id: "kerem_demir",
        name: "Kerem Demir",
        title: "Şef & Gastronomi Tarihçisi",
        tags: ["Gastronomi", "Zeytin", "Ege"],
        mutualCount: 3,
        mutualNote: "Kadim sofra ritüelleri ve Ege zeytinlikleri (%91 Zevk Uyumu)",
        quote: "Sofra, insanı yavaşlatan en kadim mabettir.",
        avatar: "/images/editorial/chef_kerem.jpg"
      },
      {
        id: "defne_akman",
        name: "Defne Akman",
        title: "Endüstriyel Tasarımcı & Zanaat",
        tags: ["Zanaat", "İskandinav", "Mobilya"],
        mutualCount: 4,
        mutualNote: "Masif ahşap ve Dieter Rams ilkeleri (%95 Zevk Uyumu)",
        quote: "İyi tasarım kendini bağırmaz, sessizce hayatı kolaylaştırır.",
        avatar: "/images/editorial/modern_interior.jpg"
      }
    ],
    circles: [
      {
        id: "c_mimari",
        name: "İstanbul'da Mimari Meraklıları",
        members: 18,
        activeTopic: "Sedad Hakkı Eldem ve Türk Evi Tipolojisi",
        icon: "🏛️",
        category: "Mimari",
        lastActive: "12 dk önce",
        joined: false
      },
      {
        id: "c_sanat",
        name: "Modern Sanat Üzerine",
        members: 34,
        activeTopic: "Venedik Bienali ve Akdeniz Pavyonları",
        icon: "🎨",
        category: "Sanat",
        lastActive: "Az önce",
        joined: true
      },
      {
        id: "c_okurlar",
        name: "Pazar Sabahı Okurları",
        members: 52,
        activeTopic: "Bu hafta: Italo Calvino — Görünmez Kentler",
        icon: "📖",
        category: "Edebiyat",
        lastActive: "25 dk önce",
        joined: false
      },
      {
        id: "c_italya",
        name: "İtalya'yı Sevenler",
        members: 27,
        activeTopic: "Floransa ve Bologna saklı avlu notları",
        icon: "🇮🇹",
        category: "Seyahat",
        lastActive: "1 saat önce",
        joined: true
      },
      {
        id: "c_sofra",
        name: "İyi Sofra Kültürü",
        members: 19,
        activeTopic: "Doğal şaraplar, zanaatkar ekmek ve zeytinyağı",
        icon: "🍷",
        category: "Gastronomi",
        lastActive: "3 saat önce",
        joined: false
      },
      {
        id: "c_saat",
        name: "Saat & Zanaat",
        members: 14,
        activeTopic: "Bağımsız İsviçre ve Alman saat yapımcıları",
        icon: "⌚",
        category: "Zanaat",
        lastActive: "Dün",
        joined: false
      },
      {
        id: "c_minimal",
        name: "Minimalist Yaşam",
        members: 41,
        activeTopic: "Mekanda ve zihinde azaltma pratikleri",
        icon: "🌿",
        category: "Felsefe",
        lastActive: "4 saat önce",
        joined: false
      },
      {
        id: "c_fotograf",
        name: "Fotoğraf Üzerine",
        members: 23,
        activeTopic: "Analog Leica M ve siyah-beyaz gümüş baskı",
        icon: "📷",
        category: "Sanat",
        lastActive: "2 saat önce",
        joined: false
      }
    ],
    invitations: [
      {
        id: "inv_1",
        type: "salon",
        sender: "Elif",
        title: "Modern Mimari Odası",
        note: "Elif seni 'Modern Mimari' odasına davet etti",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        roomId: "room_mimari",
        time: "15 dk önce",
        status: "pending"
      },
      {
        id: "inv_2",
        type: "collection",
        sender: "Mert",
        title: "Boğaz Kıyıları",
        note: "Mert seninle ortak bir koleksiyon oluşturmak istiyor: 'Boğaz Kıyıları'",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        time: "1 saat önce",
        status: "pending"
      },
      {
        id: "inv_3",
        type: "connection",
        sender: "Defne",
        title: "Kültürel Bağlantı",
        note: "Defne seninle kültürel bağlantı kurmak istiyor",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        time: "Dün",
        status: "pending"
      }
    ],
    collaborativeCollections: [
      {
        id: "collab_1",
        title: "İstanbul'da Bir Hafta Sonu",
        participants: ["Sen", "Defne", "Mert"],
        itemCount: 24,
        cover: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80",
        desc: "Gizli avlular, sahil kahveleri ve tarihi pastaneler seçkisi.",
        recentAdd: "Kuzguncuk Çınaraltı Notları"
      },
      {
        id: "collab_2",
        title: "En İyi Tipografi Kitapları",
        participants: ["Sen", "Can"],
        itemCount: 12,
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        desc: "Müller-Brockmann'dan Tschichold'a uzanan grafik tasarım referansları.",
        recentAdd: "Grid Systems — Josef Müller-Brockmann"
      },
      {
        id: "collab_3",
        title: "Terk Edilmiş Mekanlar",
        participants: ["Sen", "Selim"],
        itemCount: 18,
        cover: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        desc: "Zamanın durduğu endüstriyel miras ve sessiz yapılar.",
        recentAdd: "Beykoz Kundura Fabrikası Arşivi"
      }
    ],
    yourUniverse: {
      collectionsCount: 5,
      collectionsItems: 38,
      lastSavedItem: "Pera Palas'ın Gizli Katı",
      readThisWeek: 3,
      journalCount: 7,
      activeSalonsCount: 3
    },
    surpriseDiscoveries: [
      {
        id: "surp_1",
        tag: "Müzik Arşivi",
        title: "1974 Floransa Caz Kaydı",
        desc: "1974 yılında Floransa'da kaydedilmiş bir caz kaydı bulduk. Zevk profiline %93 uyuyor.",
        meta: "Chet Baker Quartet • Canlı Floransa Konseri",
        badge: "%93 Zevk Uyumu",
        actionText: "Dinle / Keşfet",
        actionType: "music"
      },
      {
        id: "surp_2",
        tag: "Nadir Mimari",
        title: "Carlo Scarpa'nın Saklı Merdiveni",
        desc: "Venedik Querini Stampalia Vakfı'nda su seviyesine inen mermer basamaklar. Zevklerinle kusursuz örtüşüyor.",
        meta: "Venedik • Carlo Scarpa 1963",
        badge: "%96 Zevk Uyumu",
        actionText: "İncele & Kaydet",
        actionType: "article"
      },
      {
        id: "surp_3",
        tag: "Edebi Fragman",
        title: "Borges'in Labirent Notları",
        desc: "Buenos Aires Ulusal Kütüphanesi'nde bulunan el yazması bir kenar notu: 'Sonsuzluk, bir kütüphanenin iki aynası arasındaki mesafedir.'",
        meta: "Jorge Luis Borges • 1951",
        badge: "%95 Zevk Uyumu",
        actionText: "Fragmanı Oku",
        actionType: "quote"
      },
      {
        id: "surp_4",
        tag: "Saklı Mekan",
        title: "Kyoto Ryoan-ji'nin 15. Taşı",
        desc: "Zen bahçesindeki 15 taştan birini hangi açıdan bakarsan bak göremezsin. Sadece aydınlanan zihin 15 taşı birden idrak eder.",
        meta: "Kyoto • Muromachi Dönemi",
        badge: "%91 Zevk Uyumu",
        actionText: "Hikâyeyi Oku",
        actionType: "place"
      }
    ]
  },

  // 10. BİLDİRİMLER (Notification Center)
  notifications: [
    {
      id: "notif_1",
      category: "cultural",
      title: "Günün 5 Dakikası Hazır",
      message: "Sabah Boğaz ışığı ve sükunet üzerine 5 dakikalık editoryal dinginlik ritüeli seni bekliyor.",
      time: "10 dk önce",
      unread: true,
      action: "moment"
    },
    {
      id: "notif_2",
      category: "invitation",
      title: "Salon Daveti • Elif",
      message: "Elif seni 'Modern Mimari' odasında başlayan canlı sohbete davet etti.",
      time: "25 dk önce",
      unread: true,
      action: "room",
      roomId: "room_mimari"
    },
    {
      id: "notif_3",
      category: "collection",
      title: "Ortak Koleksiyon Daveti • Mert",
      message: "Mert seninle 'Boğaz Kıyıları' ortak koleksiyonunu oluşturmak istiyor.",
      time: "1 saat önce",
      unread: true,
      action: "collab"
    },
    {
      id: "notif_4",
      category: "cultural",
      title: "Yeni Editoryal Deneme",
      message: "Deniz Kaya'nın kaleminden 'Akdeniz'de Zamansızlık' yazısı yayında.",
      time: "3 saat önce",
      unread: false,
      action: "article",
      articleId: "amalfi"
    },
    {
      id: "notif_5",
      category: "interaction",
      title: "Yeni Beğeni & Yorum",
      message: "Defne son paylaştığın 'Taşın ve Boşluğun Dersi' notuna beğeni bıraktı.",
      time: "Dün",
      unread: false,
      action: "journal"
    }
  ],

  // 11. SEYAHAT ROTALARI & TASLAK PLANLARI (Curated Travel Itineraries)
  travelItineraries: {
    "florence": {
      id: "florence",
      title: "Floransa & Toskana",
      subtitle: "Rönesans Saklı Avluları & Doğal Bağlar",
      daysCount: 4,
      cover: "/images/editorial/florence_duomo.jpg",
      curatorNote: "Floransa'yı turist kalabalıklarından uzakta, sabah erken saatlerin sakin ışığında ve Arno Nehri'nin güneyindeki zanaatkar mahallelerinde yaşamak için hazırlandı.",
      days: [
        {
          day: 1,
          title: "Saklı Avlular & Oltrarno Zanaatkarları",
          highlights: [
            { time: "Sabah (09:00)", title: "Santo Spirito Meydanı", desc: "Meydandaki gölgeli çınarlar altında espresso ve sıcak cantucci. Güne telaşsız bir başlangıç." },
            { time: "Öğleden Sonra (14:00)", title: "Zanaatkar Deri & Kağıt Atölyeleri", desc: "Via Maggio boyunca yüzyıllardır süregelen el yapımı mermer kağıt ustaları." },
            { time: "Günbatımı (18:30)", title: "San Miniato al Monte", desc: "Şehrin en eski Romanesk bazilikasının merdivenlerinde altın saat Boğaz'ı andıran ufuk manzarası." }
          ]
        },
        {
          day: 2,
          title: "Chianti Bağları & Kırsal Dinginlik",
          highlights: [
            { time: "Sabah (10:00)", title: "Greve in Chianti Yolu", desc: "Selvi ağaçlarıyla bezeli taş yollarda sessiz sürüş ve zeytin hasadı notları." },
            { time: "Öğle (13:30)", title: "Bağ Evi Sofrası & Doğal Şarap", desc: "Yerel pecorino peyniri, ev yapımı pappardelle ve minimum müdahaleli doğal şarap tadımı." },
            { time: "Akşam (19:00)", title: "Panzano Taş Kasabası", desc: "Eski meydanda akşamüstü aperitivo ritüeli." }
          ]
        },
        {
          day: 3,
          title: "Mimar Carlo Scarpa & Sanatın Sessizliği",
          highlights: [
            { time: "Sabah (10:30)", title: "Bargello Ulusal Müzesi", desc: "Donatello ve Michelangelo'nun taş heykelleri arasında gölgeli iç avlu molası." },
            { time: "Öğleden Sonra (15:00)", title: "Uffizi'nin Saklı Koridorları", desc: "Erken Rönesans ressamlarının perspektif keşifleri üzerine küratöryel okuma." }
          ]
        }
      ]
    },
    "bologna": {
      id: "bologna",
      title: "Bologna & Emilia-Romagna",
      subtitle: "Kemerli Yollar (Portici) & Mutfak Felsefesi",
      daysCount: 3,
      cover: "/images/editorial/slow_living_coffee_morning.jpg",
      curatorNote: "UNESCO korumasındaki 40 kilometrelik kemerli yolların altında yağmurdan korunarak kitapçıları ve asırlık şarküterileri keşfedin.",
      days: [
        {
          day: 1,
          title: "Kemerli Yollar & Eski Kitapçılar",
          highlights: [
            { time: "Sabah (09:30)", title: "Piazza Santo Stefano", desc: "Yedi Kiliseler kompleksinin mistik avlusu ve antikacı tezgahları." },
            { time: "Öğle (13:00)", title: "Osteria del Sole (1465)", desc: "Kendi aldığınız peynir ve ekmeğinizle girip sadece şarap ısmarladığınız 550 yıllık vaha." }
          ]
        },
        {
          day: 2,
          title: "Geleneksel El Açması Makarna Zanaatı",
          highlights: [
            { time: "Sabah (10:00)", title: "Sflogina Atölyesi", desc: "Sarı yumurtalı hamurun ahşap merdane ile ipek gibi inceltilme sanatı." },
            { time: "Akşam (20:00)", title: "Trattoria di Via Serra", desc: "Yavaş pişen ragù ve dağ otlu tortelloni." }
          ]
        }
      ]
    },
    "kas_kalkan": {
      id: "kas_kalkan",
      title: "Ege & Akdeniz Kıyıları (Kaş - Kalkan)",
      subtitle: "Likya Yolu, Turkuaz Koylar & Kekova Notları",
      daysCount: 4,
      cover: "/images/editorial/bosphorus_sunset.jpg",
      curatorNote: "Akdeniz'in en berrak suları, begonvilli taş sokaklar ve batık antik kentlerin sükuneti.",
      days: [
        {
          day: 1,
          title: "Antik Tiyatro & Liman Günbatımı",
          highlights: [
            { time: "Sabah (08:30)", title: "Küçük Çakıl Koyu", desc: "Kayalıklardan buz gibi kaynak sularına sabah dalışı." },
            { time: "Akşamüstü (18:00)", title: "Kaş Antik Tiyatrosu", desc: "Meis Adası'na karşı güneşin batışını izlerken sessizlik molası." }
          ]
        },
        {
          day: 2,
          title: "Kekova & Simena Batık Kenti",
          highlights: [
            { time: "Sabah (10:00)", title: "Üçağız'dan Ahşap Tekne", desc: "Motor sesi olmadan rüzgarla ilerleyen sessiz koylar." },
            { time: "Öğleden Sonra (14:30)", title: "Kaleköy Keçi Boynuzlu Dondurması", desc: "Kalenin zirvesinde Likya lahitleri arasında Akdeniz manzarası." }
          ]
        }
      ]
    },
    "kyoto": {
      id: "kyoto",
      title: "Kyoto & Zen Bahçeleri",
      subtitle: "Tapınaklar, Matcha Ritüeli & Bambu Ormanları",
      daysCount: 5,
      cover: "/images/editorial/architecture_arched.jpg",
      curatorNote: "Minimalizmin ve Wabi-Sabi felsefesinin kalbinde; taş bahçelerindeki boşluğun derinliği.",
      days: [
        {
          day: 1,
          title: "Ryoan-ji & Kuru Peyzaj Bahçesi",
          highlights: [
            { time: "Sabah (08:00)", title: "Ryoan-ji 15 Taş Bahçesi", desc: "Ahşap verandada oturup taranmış çakıllar ve taşlar arasındaki boşluğu dinleme." },
            { time: "Öğle (12:30)", title: "Yudofu (Sıcak Tofu) Öğle Yemeği", desc: "Tapınak avlusunda yalın, sıcak ve dengeli bir keşiş yemeği." }
          ]
        }
      ]
    }
  },
  studioCategories: [
    { id: "all", name: "Tümü", icon: "✨" },
    { id: "hareket", name: "Hareket", icon: "🧘", desc: "Yoga, nefes, esneme, beden" },
    { id: "ev_yasam", name: "Ev & Yaşam", icon: "🏺", desc: "Çömlek, çiçek, sofra, kahve, ev ritüelleri" },
    { id: "zihin", name: "Zihin", icon: "🌿", desc: "Meditasyon, nefes, odaklanma, düşünce" },
    { id: "zevk", name: "Zevk", icon: "🎨", desc: "Gastronomi, sanat, müzik, kitap, tasarım" },
    { id: "mevsim", name: "Mevsim", icon: "🍂", desc: "Mevsimlere göre küçük ritüeller ve yaşam fikirleri" }
  ],
  studioVideos: [
    {
      id: "vid_yoga_sabah",
      title: "3 Basit Yoga Hareketi",
      subtitle: "Sabaha daha sakin ve dengeli başlamak için.",
      description: "Güne omurgayı nazikçe uyandıran, göğüs kafesini açan ve zihni toparlayan 3 akıcı hareket serisi. Herhangi bir ekipmana ihtiyaç duymadan, evinizde uygulayabilirsiniz.",
      category: "hareket",
      categoryLabel: "HAREKET",
      duration: "03:12",
      durationSeconds: 192,
      cover: "/images/editorial/studio_yoga_morning.jpg",
      curator: "Zeynep Oral",
      curatorRole: "Yoga & Beden Pratiği",
      level: "Başlangıç",
      topic: "Yoga",
      tags: ["Sabah Rutini", "Beden", "Esneme"],
      keyTakeaways: [
        "Kedi-İnek (Marjaryasana) ile omurga esnekliği",
        "Aşağı Bakan Köpek (Adho Mukha) ile tüm bedeni uzatma",
        "Çocuk Pozu (Balasana) ile zihni dinlendirme"
      ],
      videoSource: "mock_yoga"
    },
    {
      id: "vid_nefes_dogru",
      title: "Doğru Nefes Teknikleri",
      subtitle: "Nefesinizi fark etmek ve gün içerisinde daha bilinçli kullanmak.",
      description: "Diyafram nefesini günlük hayata entegre etmenin incelikleri. Kısa bir 4-7-8 ritmiyle nabzı yavaşlatın, parasempatik sinir sistemini nazikçe devreye sokun.",
      category: "zihin",
      categoryLabel: "ZİHİN",
      duration: "04:15",
      durationSeconds: 255,
      cover: "/images/editorial/studio_breathwork.jpg",
      curator: "Deniz Kaya",
      curatorRole: "Farkındalık & Meditasyon",
      level: "Tüm Seviyeler",
      topic: "Nefes",
      tags: ["Nefes", "Sakinlik", "Odak"],
      keyTakeaways: [
        "Burundan derin ve sessiz nefes alımı",
        "Diyaframın doğal genişlemesini hissetme",
        "4 saniye al, 7 saniye tut, 8 saniye ver ritmi"
      ],
      videoSource: "mock_breath"
    },
    {
      id: "vid_comlek_yapimi",
      title: "Çömlek: İlk Adım",
      subtitle: "Çamurla çalışmaya ve torna başına küçük bir giriş.",
      description: "Ham toprağın merkezlenmesi, parmakların basıncıyla form kazanması ve ateşle buluşmadan önceki sabır dolu şekillendirme süreci.",
      category: "ev_yasam",
      categoryLabel: "EV & YAŞAM",
      duration: "04:28",
      durationSeconds: 268,
      cover: "/images/editorial/studio_pottery_wheel.jpg",
      curator: "Ali Vardar",
      curatorRole: "Seramik Sanatçısı",
      level: "Başlangıç",
      topic: "Zanaat",
      tags: ["Seramik", "Toprak", "El Emeği"],
      keyTakeaways: [
        "Çamurun kıvamını hissetme ve yoğurma",
        "Torna tablasında mükemmel merkezleme",
        "İçten dışa nazik parmak baskısıyla form verme"
      ],
      videoSource: "mock_pottery"
    },
    {
      id: "vid_kahve_demleme",
      title: "V60 ile Sakin Kahve Demleme",
      subtitle: "Sabahın ilk kokusu; suyun ve çekirdeğin ritmi.",
      description: "Suyun sıcaklığı, döküş açısı ve kahvenin çiçek açma (blooming) anı. Telaşsız bir sabah kahvesi hazırlamak bir içecekten çok bir meditasyondur.",
      category: "ev_yasam",
      categoryLabel: "EV & YAŞAM",
      duration: "03:45",
      durationSeconds: 225,
      cover: "/images/editorial/studio_v60_coffee.jpg",
      curator: "Kerem Arslan",
      curatorRole: "Kahve Küratörü",
      level: "Tüm Seviyeler",
      topic: "Ritüel",
      tags: ["Kahve", "Sabah Rutini", "Sakin Yaşam"],
      keyTakeaways: [
        "92°C su sıcaklığı ve kağıt filtre durulama",
        "30 saniyelik ön demleme (blooming)",
        "Merkezden dışa doğru spiral su akışı"
      ],
      videoSource: "mock_coffee"
    },
    {
      id: "vid_sofra_duzeni",
      title: "Zahmetsiz Sofra Düzenleme",
      subtitle: "Keten örtüler, doğal dallar ve samimi zarafet.",
      description: "Aşırı süslü ve yapay sofralar yerine, doğal malzemeler, seramik tabaklar ve mevsim meyveleriyle kurulan sakin bir akşam masası.",
      category: "zevk",
      categoryLabel: "ZEVK",
      duration: "03:30",
      durationSeconds: 210,
      cover: "/images/editorial/studio_table_setting.jpg",
      curator: "Selin Doğan",
      curatorRole: "Mekan & Sofra Tasarımcısı",
      level: "Başlangıç",
      topic: "Sofra & Tasarım",
      tags: ["Sofra", "Zarafet", "Akşam"],
      keyTakeaways: [
        "Yıkanmış keten örtünün doğal kırışıklıkları",
        "Farklı seramik tabakların monokrom uyumu",
        "Alçak mum ışığı ve yabani zeytin dalları"
      ],
      videoSource: "mock_table"
    },
    {
      id: "vid_cicek_duzenleme",
      title: "İkebana Esintili Çiçek Düzenleme",
      subtitle: "Boşluğun gücü: Az çiçekle derin bir denge.",
      description: "Japon çiçek düzenleme sanatı İkebana'nın temel prensipleri: Gökyüzü, insan ve yeryüzü üçgeninde, sadece 3-4 dal ile yaratılan zamansız heykelimsi form.",
      category: "ev_yasam",
      categoryLabel: "EV & YAŞAM",
      duration: "04:02",
      durationSeconds: 242,
      cover: "/images/editorial/studio_ikebana_flowers.jpg",
      curator: "Aylin Teoman",
      curatorRole: "Botanik Sanatçısı",
      level: "Orta",
      topic: "Çiçek & Estetik",
      tags: ["İkebana", "Çiçek", "Minimalizm"],
      keyTakeaways: [
        "Kenzan (çivi yatağı) kullanımı ve dal açıları",
        "Asimetrik denge ve negatif alanın önemi",
        "Mevsimsel dal ve tek bir ana çiçek seçimi"
      ],
      videoSource: "mock_floral"
    },
    {
      id: "vid_kitap_oncesi",
      title: "Bir Kitaba Başlamadan Önce",
      subtitle: "Yazarın dünyasına girmeden önceki 3 dakikalık hazırlık.",
      description: "Klasik bir esere başlamadan önce yazarın yaşadığı dönemi, sessiz bir okuma köşesi oluşturmayı ve not alma ritüelini ele alan sakin bir rehber.",
      category: "zevk",
      categoryLabel: "ZEVK",
      duration: "03:15",
      durationSeconds: 195,
      cover: "/images/editorial/studio_book_reading.jpg",
      curator: "Deniz Kaya",
      curatorRole: "Edebiyat Editörü",
      level: "Tüm Seviyeler",
      topic: "Kitap",
      tags: ["Edebiyat", "Okuma Ritüeli", "Düşünce"],
      keyTakeaways: [
        "Yazarın dönemsel bağlamını gözden geçirme",
        "Işık açısı ve telefon bildirimlerini kapatma",
        "Kurşun kalem ile kenar notları tutma"
      ],
      videoSource: "mock_book"
    },
    {
      id: "vid_mevsim_sonbahar",
      title: "Mevsimsel Yaşam Önerileri: Sonbahar",
      subtitle: "Evin ışığını, dokularını ve ritmini mevsime uydurmak.",
      description: "Günlerin kısaldığı dönemde evde sıcak ışık noktaları yaratma, yün battaniyeler, tarçınlı bitki çayları ve içe dönüşün getirdiği dinginlik.",
      category: "mevsim",
      categoryLabel: "MEVSİM",
      duration: "03:50",
      durationSeconds: 230,
      cover: "/images/editorial/studio_autumn_ritual.jpg",
      curator: "Maison Kürasyon Ekibi",
      curatorRole: "Mevsimsel Kürasyon",
      level: "Tüm Seviyeler",
      topic: "Mevsim",
      tags: ["Sonbahar", "Ev", "Ritüel"],
      keyTakeaways: [
        "Sarı ve loş aydınlatmaya geçiş",
        "Doğal dokuların (yün, keten, ahşap) katmanlanması",
        "Akşam üzeri 15 dakikalık sessizlik ritüeli"
      ],
      videoSource: "mock_season"
    },
    {
      id: "vid_numeroloji",
      title: "Numerolojiye Sakin Bir Bakış",
      subtitle: "Sayıların arkasındaki kadim sembolizm ve döngüler.",
      description: "Gezegen saatleri, yaşam yolu sayıları ve antik felsefede matematik ile bilincin kesişim noktalarına dair önyargısız, entelektüel bir bakış.",
      category: "zihin",
      categoryLabel: "ZİHİN",
      duration: "04:10",
      durationSeconds: 250,
      cover: "/images/editorial/studio_numerology_sacred.jpg",
      curator: "Canan Yılmaz",
      curatorRole: "Sembolizm Araştırmacısı",
      level: "Başlangıç",
      topic: "Sembolizm",
      tags: ["Numeroloji", "Zihin", "Sembol"],
      keyTakeaways: [
        "Pisagorcu sayı felsefesi",
        "Kişisel yaşam döngülerinin 9 yıllık ritmi",
        "Gündelik hayatta sayıların sakin farkındalığı"
      ],
      videoSource: "mock_numerology"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.MAISON_DATA = MAISON_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MAISON_DATA;
}
