/* ==============================
   FUJOGHOSTVERSE
   Omegaverse Sınıflandırma Testi
   ============================== */

const QUESTIONS = [
    // Bölüm I — Kişilik ve içgüdüler (1–6)
    {
        id: 1,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Bir arkadaşın seni yeni biriyle tanıştırmak istiyor. Nasıl tepki verirsin?",
        options: [
            { key: "A", text: "Neden olmasın? Yeni insanlarla tanışmayı severim, gider sohbet ederim." },
            { key: "B", text: "Önce o kişi hakkında biraz bilgi almak isterim. Kiminle tanışacağımı bilmek hoşuma gider." },
            { key: "C", text: "Çok hevesli olmasam da arkadaşıma ayıp etmemek için giderim. Belki güzel bir tanışma olur." },
            { key: "D", text: "Pek ilgimi çekmez. Sırf biri istedi diye yeni biriyle tanışmak zorunda değilim." }
        ]
    },
    {
        id: 2,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Yeni bir ortama girdiğinde ilk olarak ne yaparsın?",
        options: [
            { key: "A", text: "Ortamın havasını anlamaya çalışır, insanları gözlemlerim." },
            { key: "B", text: "Kendime uygun bir yer bulur ve rahatça hareket etmeye başlarım." },
            { key: "C", text: "İnsanlarla iletişim kurarak ortama alışırım." },
            { key: "D", text: "Çok düşünmeden dikkatimi çeken şeylere yönelirim." }
        ]
    },
    {
        id: 3,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Bir grup çalışmasında işler karıştı. Nasıl tepki verirsin?",
        options: [
            { key: "A", text: "Herkesin ne yapması gerektiğini belirleyip işleri toparlamaya çalışırım." },
            { key: "B", text: "Önce aksayan noktaları bulur, sorunun nereden kaynaklandığını anlamaya çalışırım." },
            { key: "C", text: "Herkesin fikrini dinleyerek ortak bir çözüm bulmayı tercih ederim." },
            { key: "D", text: "Mevcut plan işe yaramıyorsa kendi yöntemimi denemekten çekinmem." }
        ]
    },
    {
        id: 4,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Birisi senin hakkında yanlış bir izlenime sahip. Ne yaparsın?",
        options: [
            { key: "A", text: "Kendimi açıklamak için uygun bir fırsat yaratırım." },
            { key: "B", text: "Zamanla davranışlarımla yanıldığını anlamasını beklerim." },
            { key: "C", text: "Yanlış anlaşılmak benim için önemli değilse üzerinde durmam." },
            { key: "D", text: "Beni ilgilendiren bir durumsa doğrudan konuşurum." }
        ]
    },
    {
        id: 5,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Belirsizlik içeren bir karar vermen gerekiyor.",
        options: [
            { key: "A", text: "Seçenekleri değerlendirir, en az sorun çıkaracak yolu seçerim." },
            { key: "B", text: "İçimden gelen seçeneğe yönelirim; bazen fazla düşünmek işleri zorlaştırır." },
            { key: "C", text: "Güvendiğim birinin fikrini alıp kendi kararımı veririm." },
            { key: "D", text: "Diğerlerinin pek düşünmediği ihtimalleri de hesaba katarım." }
        ]
    },
    {
        id: 6,
        section: "BÖLÜM I · KİŞİLİK VE İÇGÜDÜLER",
        text: "Bir konuda başarısız oldun. İlk tepkin ne olur?",
        options: [
            { key: "A", text: "Nerede hata yaptığımı bulup bir sonraki denemede farklı davranırım." },
            { key: "B", text: "Bir süre uzaklaşır, kafamı toparladıktan sonra yeniden başlarım." },
            { key: "C", text: "Başarısızlığı fazla büyütmeden başka bir yol denerim." },
            { key: "D", text: "Kendime kızsam bile vazgeçmem; sonuç alana kadar uğraşırım." }
        ]
    },

    // Bölüm II — Bağlar ve ilişkiler (7–12)
    {
        id: 7,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Yakın olduğun biri zor bir dönemden geçiyor ama yardım istemiyor.",
        options: [
            { key: "A", text: "Konuşmak istemiyorsa zorlamam ama ihtiyaç duyduğunda yanındayım." },
            { key: "B", text: "Bir şey yapmadan beklemek yerine günlük hayatını kolaylaştıracak bir şeyler yaparım." },
            { key: "C", text: "Biraz alan tanırım; bazen insanların kendi sorunlarını çözmesi gerekir." },
            { key: "D", text: "İyi olmadığını görüyorsam bunu görmezden gelemem. Onunla konuşmaya çalışırım." }
        ]
    },
    {
        id: 8,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Bir arkadaş grubunda anlaşmazlık çıktı.",
        options: [
            { key: "A", text: "Önce herkesin ne düşündüğünü anlamaya çalışırım." },
            { key: "B", text: "Haksızlık olduğunu düşünüyorsam sessiz kalmam." },
            { key: "C", text: "Tartışmanın büyümesini istemem ama taraf tutmak zorunda da hissetmem." },
            { key: "D", text: "Herkesin konuştuğu şeyin ötesinde asıl sorunun ne olduğunu bulmaya çalışırım." }
        ]
    },
    {
        id: 9,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Birine gerçekten güvenmeni sağlayan şey nedir?",
        options: [
            { key: "A", text: "Zor zamanlarda söylediklerinin arkasında durması." },
            { key: "B", text: "Yanında kendimi olduğum gibi gösterebilmem." },
            { key: "C", text: "Küçük şeylerde bile tutarlı ve dürüst davranması." },
            { key: "D", text: "Birbirimizi her zaman açıklama yapmak zorunda kalmadan anlayabilmemiz." }
        ]
    },
    {
        id: 10,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Sevdiğin biri sana kırıldığını söyledi.",
        options: [
            { key: "A", text: "Önce onu dinlerim. Belki benim fark etmediğim bir şey vardır." },
            { key: "B", text: "Ne hissettiğimi ve ne düşündüğümü açıkça anlatırım." },
            { key: "C", text: "Hemen konuşmak yerine ikimizin de sakinleşmesini beklerim." },
            { key: "D", text: "Aramızdaki sorunu çözmek için ilk adımı atmaktan çekinmem." }
        ]
    },
    {
        id: 11,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Bir ilişkide seni en çok ne rahatsız eder?",
        options: [
            { key: "A", text: "Sürekli ne yapmam gerektiğinin söylenmesi." },
            { key: "B", text: "Söylenenlerle yapılanların birbirini tutmaması." },
            { key: "C", text: "Birlikteyken bile kendimi yalnız hissetmek." },
            { key: "D", text: "Bir ilişkinin herkes için aynı şekilde ilerlemesi gerektiğini düşünmem. İki kişinin kendine özgü bir ilişki dinamiği oluşturmasını önemserim." }
        ]
    },
    {
        id: 12,
        section: "BÖLÜM II · BAĞLAR VE İLİŞKİLER",
        text: "Birisi sana beklemediğin kadar yakınlık gösterdi.",
        options: [
            { key: "A", text: "Bu yakınlığın doğal olup olmadığını anlamaya çalışırım." },
            { key: "B", text: "Ben de sıcak davranırım ama insanları hemen hayatıma almam." },
            { key: "C", text: "Aramızdaki iletişim hoşuma gittiyse bunu belli ederim." },
            { key: "D", text: "Yakınlık güzel olsa da kendi alanımı korumaya devam ederim." }
        ]
    },

    // Bölüm III — Tanışma, bağ ve partnerlik (13–16)
    {
        id: 13,
        section: "BÖLÜM III · TANIŞMA, BAĞ VE PARTNERLİK",
        text: "Bir arkadaşın seni yeni tanıştığı biriyle tanıştırmak istiyor ve ikinizin birbirinize yakışabileceğini düşünüyor. Nasıl tepki verirsin?",
        options: [
            { key: "A", text: "Birbirimizi tanımadan böyle bir karar verilmesini garip bulurum." },
            { key: "B", text: "Bir şans veririm. Bazen beklenmedik tanışmalar güzel şeylere dönüşebilir." },
            { key: "C", text: "Arkadaşımın neden bizi uygun gördüğünü merak ederim ama son kararı kendim veririm." },
            { key: "D", text: "Birbirine hiç benzemeyen iki kişinin, başkalarının göremediği bir uyum yakalayabileceğine inanırım." }
        ]
    },
    {
        id: 14,
        section: "BÖLÜM III · TANIŞMA, BAĞ VE PARTNERLİK",
        text: "Sence iki insanı gerçekten birbirine bağlayan şey nedir?",
        options: [
            { key: "A", text: "Birbirlerine duydukları güven ve sadakat." },
            { key: "B", text: "Zor zamanlarda birbirlerinin yanında olabilmeleri." },
            { key: "C", text: "Birbirlerinin özgürlüğüne ve kişisel alanına saygı duymaları." },
            { key: "D", text: "Birbirini tanımak için herkesin kullandığı yöntemlerin dışında, iki insanın kendilerine özgü bir iletişim yolu geliştirebileceğine inanırım." }
        ]
    },
    {
        id: 15,
        section: "BÖLÜM III · TANIŞMA, BAĞ VE PARTNERLİK",
        text: "Birisiyle aranda güçlü bir bağ oluştuğunu düşün. Bu bağda senin için en önemli şey ne olurdu?",
        options: [
            { key: "A", text: "Birbirimize her koşulda güvenebilmek." },
            { key: "B", text: "Birbirimizi korumak ve gerektiğinde birbirimiz için mücadele etmek." },
            { key: "C", text: "Birlikteyken de kendi benliğimizi kaybetmemek." },
            { key: "D", text: "Başkalarının anlayamayacağı kadar özel bir yakınlık paylaşmak." }
        ]
    },
    {
        id: 16,
        section: "BÖLÜM III · TANIŞMA, BAĞ VE PARTNERLİK",
        text: "Romantik bir ilişkide nasıl bir partner olacağını düşünüyorsun?",
        options: [
            { key: "A", text: "Sevdiğim kişiye karşı koruyucu ve sahiplenici olurum. Onun yanında olduğumu hissettirmek isterim." },
            { key: "B", text: "Duygularımı hemen göstermem ama birine bağlandığımda kolay kolay vazgeçmem." },
            { key: "C", text: "İlişkide arkadaşlık, anlayış ve karşılıklı özgürlük benim için çok önemlidir." },
            { key: "D", text: "Yoğun duygular yaşamayı severim. Sıradan ve tahmin edilebilir bir ilişkidense güçlü bir bağ isterim." }
        ]
    },

    // Bölüm IV — Beklenmedik durumlar (17–20)
    {
        id: 17,
        section: "BÖLÜM IV · BEKLENMEDİK DURUMLAR",
        text: "Kalabalık bir yerde aniden bir kriz yaşandı.",
        options: [
            { key: "A", text: "Hızla sorumluluk alıp insanları yönlendirmeye çalışırım." },
            { key: "B", text: "Önce tehlikeyi değerlendirir, en güvenli yolu bulurum." },
            { key: "C", text: "Yanımdaki insanların iyi olduğundan emin olmaya çalışırım." },
            { key: "D", text: "Herkes paniklerken sakin kalıp farklı bir çözüm ararım." }
        ]
    },
    {
        id: 18,
        section: "BÖLÜM IV · BEKLENMEDİK DURUMLAR",
        text: "Bir sırrı öğrendin ve bu bilgi bir arkadaşını zor durumda bırakabilir.",
        options: [
            { key: "A", text: "Önce arkadaşımı dinler, onun ne yapmak istediğini öğrenirim." },
            { key: "B", text: "Bilginin doğruluğundan emin olmadan hiçbir şey yapmam." },
            { key: "C", text: "Gerekiyorsa zor bir konuşma yapmaktan kaçınmam." },
            { key: "D", text: "Kimseyi gereksiz yere incitmeden sorunu çözmenin yolunu ararım." }
        ]
    },
    {
        id: 19,
        section: "BÖLÜM IV · BEKLENMEDİK DURUMLAR",
        text: "Herkesin aynı fikirde olduğu bir kararın yanlış olduğunu düşünüyorsun.",
        options: [
            { key: "A", text: "Düşüncemi açıkça dile getiririm." },
            { key: "B", text: "Önce neden böyle düşündüklerini anlamaya çalışırım." },
            { key: "C", text: "Herkes aynı fikirde olsa bile kararın dayandığı varsayımları sorgular ve başka bir ihtimali araştırırım." },
            { key: "D", text: "Görüşümü destekleyecek somut örnekler bulup yeniden konuşurum." }
        ]
    },
    {
        id: 20,
        section: "BÖLÜM IV · BEKLENMEDİK DURUMLAR",
        text: "Kendini en çok hangi durumda gerçek anlamda güçlü hissedersin?",
        options: [
            { key: "A", text: "Zor bir durumda insanların bana güvenebildiğini gördüğümde." },
            { key: "B", text: "Kimseye kendimi kanıtlamak zorunda kalmadan kendi kararlarımı verdiğimde." },
            { key: "C", text: "Değer verdiğim insanlarla güçlü bir bağ kurabildiğimde." },
            { key: "D", text: "Başkalarının beklentilerinin ötesinde kendi yolumu çizebildiğimde." }
        ]
    }
];

/* 80 Satırlık Puanlama Anahtarı (+2 Birincil, +1 İkincil, enigma: gizli işaret) */
const SCORING = {
    1: {
        A: { primary: "BO", secondary: "B", enigma: false },
        B: { primary: "CA", secondary: "B", enigma: false },
        C: { primary: "CO", secondary: "BO", enigma: false },
        D: { primary: "BA", secondary: "B", enigma: false }
    },
    2: {
        A: { primary: "B", secondary: "CO", enigma: false },
        B: { primary: "CA", secondary: "BA", enigma: false },
        C: { primary: "BO", secondary: "B", enigma: false },
        D: { primary: "BA", secondary: "CA", enigma: false }
    },
    3: {
        A: { primary: "BA", secondary: "B", enigma: false },
        B: { primary: "B", secondary: "CA", enigma: false },
        C: { primary: "BO", secondary: "CO", enigma: false },
        D: { primary: "CA", secondary: "BO", enigma: true }
    },
    4: {
        A: { primary: "CO", secondary: "BO", enigma: false },
        B: { primary: "CA", secondary: "B", enigma: false },
        C: { primary: "B", secondary: "CA", enigma: false },
        D: { primary: "BA", secondary: "BO", enigma: false }
    },
    5: {
        A: { primary: "B", secondary: "CA", enigma: false },
        B: { primary: "BO", secondary: "CO", enigma: false },
        C: { primary: "CO", secondary: "B", enigma: false },
        D: { primary: "CA", secondary: "B", enigma: true }
    },
    6: {
        A: { primary: "BA", secondary: "CA", enigma: false },
        B: { primary: "CA", secondary: "CO", enigma: false },
        C: { primary: "B", secondary: "BO", enigma: false },
        D: { primary: "BA", secondary: "CA", enigma: false }
    },
    7: {
        A: { primary: "CO", secondary: "B", enigma: false },
        B: { primary: "BA", secondary: "BO", enigma: false },
        C: { primary: "CA", secondary: "B", enigma: false },
        D: { primary: "BO", secondary: "CO", enigma: false }
    },
    8: {
        A: { primary: "B", secondary: "CO", enigma: false },
        B: { primary: "BA", secondary: "BO", enigma: false },
        C: { primary: "CA", secondary: "B", enigma: false },
        D: { primary: "CA", secondary: "CO", enigma: true }
    },
    9: {
        A: { primary: "B", secondary: "CO", enigma: false },
        B: { primary: "CO", secondary: "BO", enigma: false },
        C: { primary: "B", secondary: "CA", enigma: false },
        D: { primary: "BO", secondary: "CO", enigma: false }
    },
    10: {
        A: { primary: "CO", secondary: "B", enigma: false },
        B: { primary: "BA", secondary: "CA", enigma: false },
        C: { primary: "CA", secondary: "CO", enigma: false },
        D: { primary: "BA", secondary: "BO", enigma: false }
    },
    11: {
        A: { primary: "CA", secondary: "B", enigma: false },
        B: { primary: "B", secondary: "CA", enigma: false },
        C: { primary: "CO", secondary: "BO", enigma: false },
        D: { primary: "BO", secondary: "CA", enigma: true }
    },
    12: {
        A: { primary: "B", secondary: "CA", enigma: false },
        B: { primary: "CO", secondary: "CA", enigma: false },
        C: { primary: "BO", secondary: "CO", enigma: false },
        D: { primary: "CA", secondary: "B", enigma: false }
    },
    13: {
        A: { primary: "CA", secondary: "B", enigma: false },
        B: { primary: "BO", secondary: "CO", enigma: false },
        C: { primary: "B", secondary: "CA", enigma: false },
        D: { primary: "BO", secondary: "CA", enigma: true }
    },
    14: {
        A: { primary: "CO", secondary: "BO", enigma: false },
        B: { primary: "BA", secondary: "CA", enigma: false },
        C: { primary: "B", secondary: "CO", enigma: false },
        D: { primary: "BO", secondary: "CO", enigma: true }
    },
    15: {
        A: { primary: "B", secondary: "CO", enigma: false },
        B: { primary: "BA", secondary: "BO", enigma: false },
        C: { primary: "CA", secondary: "B", enigma: false },
        D: { primary: "CO", secondary: "BO", enigma: false }
    },
    16: {
        A: { primary: "BA", secondary: "BO", enigma: false },
        B: { primary: "CO", secondary: "BA", enigma: false },
        C: { primary: "B", secondary: "BO", enigma: false },
        D: { primary: "BO", secondary: "BA", enigma: false }
    },
    17: {
        A: { primary: "BA", secondary: "B", enigma: false },
        B: { primary: "CA", secondary: "B", enigma: false },
        C: { primary: "CO", secondary: "BO", enigma: false },
        D: { primary: "CA", secondary: "BO", enigma: true }
    },
    18: {
        A: { primary: "CO", secondary: "B", enigma: false },
        B: { primary: "B", secondary: "CA", enigma: false },
        C: { primary: "BA", secondary: "BO", enigma: false },
        D: { primary: "BO", secondary: "CO", enigma: false }
    },
    19: {
        A: { primary: "BA", secondary: "BO", enigma: false },
        B: { primary: "B", secondary: "CO", enigma: false },
        C: { primary: "CA", secondary: "B", enigma: true },
        D: { primary: "CA", secondary: "B", enigma: false }
    },
    20: {
        A: { primary: "BA", secondary: "CO", enigma: false },
        B: { primary: "CA", secondary: "B", enigma: false },
        C: { primary: "CO", secondary: "BO", enigma: false },
        D: { primary: "BO", secondary: "BA", enigma: false }
    }
};

const RESULTS_DATA = {
    BA: {
        name: "Baskın Alpha",
        image: "assets/dominant-alpha.jpg",
        description: "İnisiyatif alabilen, kriz anlarında yön çizen ve değer verdiği kişileri koruma eğilimi güçlü bir duruşun var.",
        whyHeading: "Sen neden bir Baskın Alpha’sın?",
        opening: "Öne çıkmaktan, sorumluluk almaktan ve değer verdiğin kişileri koruyup kollamaktan çekinmiyorsun."
    },
    CA: {
        name: "Çekinik Alpha",
        image: "assets/recessive-alpha.jpg",
        description: "Kendi kararlarını bağımsız ve kontrollü biçimde veren, stratejik ve sessiz bir otoriteyle hareket eden bir yapın öne çıkıyor.",
        whyHeading: "Sen neden bir Çekinik Alpha’sın?",
        opening: "Kendi kararlarını kendin vermeyi, kontrollü ilerlemeyi ve sınırlarını net tutmayı önemsiyorsun."
    },
    B: {
        name: "Beta",
        image: "assets/beta.jpg",
        description: "Dengeli, gerçekçi ve ortama uyum sağlayabilen yapınla ilişkilerde ve ekip içinde sağlam bir orta nokta kuruyorsun.",
        whyHeading: "Sen neden bir Beta’sın?",
        opening: "Olaylara serinkanlı, dengeli ve gerçekçi bir yerden yaklaşıp ortama uyum sağlamayı başarıyorsun."
    },
    BO: {
        name: "Baskın Omega",
        image: "assets/dominant-omega.jpg",
        description: "Duygusal cesareti yüksek, sezgileri güçlü ve bağ kurarken kendi iradesini net ortaya koyan bir profil sergiliyorsun.",
        whyHeading: "Sen neden bir Baskın Omega’sın?",
        opening: "Duygularını ve sezgilerini geri planda bırakmadan, bağ kurarken kendi iradeni de açıkça ortaya koyuyorsun."
    },
    CO: {
        name: "Çekinik Omega",
        image: "assets/recessive-omega.jpg",
        description: "Empatisi gelişmiş, hassas ve güven oluştuğunda derin, anlamlı bağlar kurmaya değer veren bir iç dünyan var.",
        whyHeading: "Sen neden bir Çekinik Omega’sın?",
        opening: "İnce ayrıntıları fark eden, empatisi güçlü ve güven oluştuğunda derin bağlar kuran bir yaklaşımın var."
    },
    E: {
        name: "Enigma",
        image: "assets/enigma.jpg",
        description: "Alışılmış kalıpların dışında kalan, öngörülemez ve kendi özgün çizgisinde ilerleyen nadir bir örüntü gösterdin.",
        whyHeading: "Sen neden bir Enigma’sın?",
        opening: "Tek bir kalıpla açıklanamayacak, alışılmış yaklaşımların ötesinde bağlantılar kurabilen özgün bir düşünce yapısına sahipsin."
    }
};

const SECTION_NAMES = {
    1: "Bölüm I",
    2: "Bölüm II",
    3: "Bölüm III",
    4: "Bölüm IV"
};

/* Seçilen şıklara göre hazır, dilbilgisi bozulmayan yan cümleler (clause) ve anlam grubu (topic) */
const TRAIT_HINTS = {
    "1D": { classes: ["BA", "B"], topic: "boundary", clause: "yeni tanışmalarda kendi sınırını net tuttuğun" },
    "2A": { classes: ["CA", "B"], topic: "observation", clause: "yeni bir ortamda önce ortamın havasını anlayıp insanları gözlemlediğin" },
    "2B": { classes: ["CA", "BA"], topic: "space", clause: "yeni bir ortamda kendine uygun yeri bulup rahatça hareket ettiğin" },
    "2D": { classes: ["BA", "CA"], topic: "impulse", clause: "dikkatini çeken şeye fazla düşünmeden yöneldiğin" },
    "3A": { classes: ["BA", "B"], topic: "lead", clause: "işler karıştığında sorumluluk alıp ekibi toparlamaya çalıştığın" },
    "3B": { classes: ["CA", "B"], topic: "analysis", clause: "aksayan noktaları bulup sorunun kaynağını anlamaya çalıştığın" },
    "3D": { classes: ["CA", "BO", "E"], topic: "method", clause: "işe yaramayan bir plan karşısında kendi yöntemini denediğin" },
    "4D": { classes: ["BA", "BO"], topic: "directness", clause: "seni ilgilendiren bir konuda doğrudan konuşmayı seçtiğin" },
    "5A": { classes: ["B", "CA"], topic: "options", clause: "belirsizlikte en az sorun çıkaracak yolu değerlendirdiğin" },
    "5D": { classes: ["CA", "B", "E"], topic: "options", clause: "bir karar vermeden önce farklı ihtimalleri hesaba kattığın" },
    "6A": { classes: ["BA", "CA"], topic: "adjust", clause: "hatanın nerede olduğunu bulup bir sonraki adımda farklı davrandığın" },
    "6B": { classes: ["CA", "CO"], topic: "space", clause: "geri çekilip kafanı toparladıktan sonra yeniden başladığın" },
    "6D": { classes: ["BA", "CA"], topic: "persistence", clause: "sonuç alana kadar vazgeçmeden uğraştığın" },
    "7A": { classes: ["CO", "B"], topic: "gentle_support", clause: "yakının konuşmak istemediğinde onu zorlamadan yanında durduğun" },
    "7B": { classes: ["BA", "BO"], topic: "care", clause: "zor dönemdeki yakınının günlük hayatını kolaylaştıracak adımlar attığın" },
    "7C": { classes: ["CA", "B"], topic: "space", clause: "karşındaki kişiye kendi sorununu çözebileceği bir alan tanıdığın" },
    "8B": { classes: ["BA", "BO"], topic: "justice", clause: "haksızlık gördüğünde sessiz kalmadığın" },
    "8D": { classes: ["CA", "CO", "E"], topic: "root_cause", clause: "tartışmanın yüzeyindeki sözlerin ötesinde asıl sorunu aradığın" },
    "9A": { classes: ["B", "CO"], topic: "loyalty", clause: "yakınlarının zor zamanlarında yanında olmayı ve verdiğin sözleri tutmayı önemsediğin" },
    "9C": { classes: ["B", "CA"], topic: "consistency", clause: "küçük şeylerde bile tutarlı ve dürüst davranmaya önem verdiğin" },
    "10A": { classes: ["CO", "B"], topic: "empathy", clause: "kırgınlıkta önce karşındakini dinleyip kendi gözden kaçırdığın noktayı aradığın" },
    "10B": { classes: ["BA", "CA"], topic: "directness", clause: "kırgınlık yaşandığında ne hissettiğini ve düşündüğünü açıkça anlattığın" },
    "10C": { classes: ["CA", "CO"], topic: "cool_down", clause: "gergin anlarda hemen konuşmak yerine ikinizin de sakinleşmesini beklediğin" },
    "10D": { classes: ["BA", "BO"], topic: "initiative", clause: "aradaki sorunu çözmek için ilk adımı atmaktan çekinmediğin" },
    "11A": { classes: ["CA", "B"], topic: "boundary", clause: "bir ilişkide sana sürekli ne yapman gerektiğinin söylenmesinden rahatsız olduğun" },
    "11D": { classes: ["BO", "CA", "E"], topic: "bond_dynamic", clause: "ilişkilerin tek tip kalıba ilerlemek yerine kendine özgü bir dinamik kurmasını önemsediğin" },
    "12B": { classes: ["CO", "CA"], topic: "boundary", clause: "sıcak davransan da insanları hemen hayatına almadığın" },
    "12D": { classes: ["CA", "B"], topic: "boundary", clause: "yakınlık hissetsen bile kendi alanını korumaya devam ettiğin" },
    "13A": { classes: ["CA", "B"], topic: "boundary", clause: "tanımadığın biriyle hemen yakıştırılma fikrini garip bulduğun" },
    "13C": { classes: ["B", "CA"], topic: "self_choice", clause: "başkalarının görüşünü merak etsen de son kararı kendin verdiğin" },
    "13D": { classes: ["BO", "CA", "E"], topic: "bond_dynamic", clause: "birbirine benzemeyen iki kişinin, başkalarının göremediği bir uyum yakalayabileceğine inandığın" },
    "14A": { classes: ["CO", "B"], topic: "trust_loyalty", clause: "iki insanı birbirine bağlayan asıl şeyin güven ve sadakat olduğunu düşündüğün" },
    "14B": { classes: ["BA", "CA"], topic: "loyalty", clause: "insanları birbirine bağlayan şeyin zor zamanlarda yanında durmak olduğunu düşündüğün" },
    "14C": { classes: ["B", "CO"], topic: "balance", clause: "ilişkide karşılıklı anlayış, özgürlük ve kişisel alana saygı aradığın" },
    "14D": { classes: ["BO", "CO", "E"], topic: "communication", clause: "iki insanın alışılmış yöntemlerin dışında kendine özgü bir iletişim yolu geliştirebileceğine inandığın" },
    "15B": { classes: ["BA", "BO"], topic: "care", clause: "güçlü bir bağda birbirini koruma ve gerektiğinde mücadele etme isteğini öne çıkardığın" },
    "15C": { classes: ["CA", "B"], topic: "boundary", clause: "birlikteyken de kendi benliğini kaybetmemeye dikkat ettiğin" },
    "16A": { classes: ["BA", "BO"], topic: "care", clause: "sevdiğin kişiye karşı koruyucu ve sahiplenici davranıp yanında olduğunu hissettirdiğin" },
    "16D": { classes: ["BO", "BA"], topic: "bond_dynamic", clause: "sıradan ve tahmin edilebilir bir ilişkiden ziyade yoğun ve güçlü bir bağ istediğin" },
    "17A": { classes: ["BA", "B"], topic: "lead", clause: "ani bir krizde hızla sorumluluk alıp insanları yönlendirmeye çalıştığın" },
    "17B": { classes: ["CA", "B"], topic: "options", clause: "beklenmedik bir durumda önce tehlikeyi değerlendirip en güvenli yolu bulduğun" },
    "17D": { classes: ["CA", "BO", "E"], topic: "method", clause: "herkes paniklerken sakin kalıp farklı bir çözüm aradığın" },
    "18A": { classes: ["CO", "B"], topic: "respect_choice", clause: "hassas bir konuda önce arkadaşını dinleyip onun ne yapmak istediğini öğrendiğin" },
    "18B": { classes: ["B", "CA"], topic: "consistency", clause: "hassas bir durumda bilginin doğruluğundan emin olmadan adım atmadığın" },
    "18C": { classes: ["BA", "BO"], topic: "directness", clause: "gerektiğinde zor bir konuşma yapmaktan kaçınmadığın" },
    "18D": { classes: ["CO", "B"], topic: "non_harm", clause: "kimseyi gereksiz yere incitmeden sorunu çözmenin yolunu aradığın" },
    "19A": { classes: ["BA", "BO"], topic: "directness", clause: "yanlış gördüğün bir karar karşısında düşünceni açıkça dile getirdiğin" },
    "19C": { classes: ["CA", "B", "E"], topic: "options", clause: "herkes aynı fikirde olsa bile kararın varsayımlarını sorgulayıp başka bir ihtimali araştırdığın" },
    "19D": { classes: ["CA", "B"], topic: "root_cause", clause: "görüşünü somut örneklerle destekleyip yeniden konuşmayı seçtiğin" },
    "20A": { classes: ["BA", "CO"], topic: "loyalty", clause: "zor bir durumda insanların sana güvenebildiğini gördüğünde kendini güçlü hissettiğin" },
    "20B": { classes: ["CA", "B"], topic: "self_choice", clause: "kimseye kendini kanıtlamak zorunda kalmadan kendi kararlarını verdiğinde güçlü hissettiğin" },
    "20C": { classes: ["CO", "BO"], topic: "deep_bond", clause: "değer verdiğin insanlarla güçlü bir bağ kurabildiğinde kendini güçlü hissettiğin" },
    "20D": { classes: ["BO", "BA"], topic: "self_choice", clause: "başkalarının beklentilerinin ötesinde kendi yolunu çizebildiğinde güçlü hissettiğin" }
};

function formatClauseList(clauses) {
    if (clauses.length === 0) return "";
    if (clauses.length === 1) return clauses[0];
    if (clauses.length === 2) return `${clauses[0]} ve ${clauses[1]}`;
    return `${clauses[0]}, ${clauses[1]} ve ${clauses[2]}`;
}

const NORMAL_CLASSES = ["BA", "CA", "BO", "CO", "B"];

const homeSection = document.getElementById("home-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const sectionLabel = document.getElementById("section-label");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const whyResultHeading = document.getElementById("why-result-heading");
const whyResultText = document.getElementById("why-result-text");

let currentIndex = 0;
let selectedAnswers = Array(QUESTIONS.length).fill(null);

function getSectionGroup(questionNumber) {
    if (questionNumber <= 6) return 1;
    if (questionNumber <= 12) return 2;
    if (questionNumber <= 16) return 3;
    return 4;
}

function getTopSectionNumber(sectionScores) {
    const sections = [1, 2, 3, 4];
    sections.sort((a, b) => sectionScores[b] - sectionScores[a]);
    return sections[0];
}

function selectDiverseTraits(candidates, maxCount = 3) {
    const sorted = [...candidates].sort((a, b) => b.weight - a.weight);
    const chosen = [];
    const usedQuestions = new Set();
    const usedSections = new Set();
    const usedTopics = new Set();

    // 1. tur: farklı soru, farklı bölüm ve farklı anlam grubu
    for (const item of sorted) {
        if (chosen.length >= maxCount) break;
        if (
            !usedQuestions.has(item.questionId) &&
            !usedSections.has(item.section) &&
            !usedTopics.has(item.topic)
        ) {
            chosen.push(item);
            usedQuestions.add(item.questionId);
            usedSections.add(item.section);
            usedTopics.add(item.topic);
        }
    }

    // 2. tur: farklı soru ve farklı anlam grubu (bölüm sınırı esnetilebilir)
    for (const item of sorted) {
        if (chosen.length >= maxCount) break;
        if (
            !chosen.includes(item) &&
            !usedQuestions.has(item.questionId) &&
            !usedTopics.has(item.topic)
        ) {
            chosen.push(item);
            usedQuestions.add(item.questionId);
            usedTopics.add(item.topic);
        }
    }

    // 3. tur: farklı soru sınırı korunarak kalan yüksek ağırlıklı adaylar
    for (const item of sorted) {
        if (chosen.length >= maxCount) break;
        if (!chosen.includes(item) && !usedQuestions.has(item.questionId)) {
            chosen.push(item);
            usedQuestions.add(item.questionId);
        }
    }

    return chosen.map((item) => item.clause);
}

function buildWhyResultText(primaryCode, context) {
    const { sectionScores, enigmaMarks, enigmaSectionCount } = context;
    const primaryData = RESULTS_DATA[primaryCode] || RESULTS_DATA.B;
    const topSectionLabel = SECTION_NAMES[getTopSectionNumber(sectionScores)];

    const candidates = [];
    QUESTIONS.forEach((q, idx) => {
        const chosenKey = selectedAnswers[idx];
        if (!chosenKey) return;

        const code = `${q.id}${chosenKey}`;
        const hint = TRAIT_HINTS[code];
        const rule = SCORING[q.id]?.[chosenKey];
        if (!hint || !rule) return;

        if (primaryCode === "E") {
            if (rule.enigma) {
                candidates.push({
                    weight: 3,
                    questionId: q.id,
                    section: getSectionGroup(q.id),
                    topic: hint.topic,
                    clause: hint.clause
                });
            }
        } else {
            let weight = 0;
            if (rule.primary === primaryCode) weight += 2;
            if (rule.secondary === primaryCode) weight += 1;
            if (weight > 0 && hint.classes.includes(primaryCode)) {
                candidates.push({
                    weight,
                    questionId: q.id,
                    section: getSectionGroup(q.id),
                    topic: hint.topic,
                    clause: hint.clause
                });
            }
        }
    });

    const selectedClauses = selectDiverseTraits(candidates, 3);
    const joinedClauses = formatClauseList(selectedClauses);

    if (primaryCode === "E") {
        const behaviorPart = joinedClauses
            ? `Yanıtlarında, ${joinedClauses} gibi alışılmış kalıpların dışına çıkan tercihlerin öne çıktı.`
            : "Yanıtlarında alışılmış kalıpların dışına çıkan tercihlerin dikkat çekti.";
      return `${primaryData.opening} ${behaviorPart} Seni Enigma yapan şey, bu sıra dışı yaklaşımın tek bir alanda kalmayıp dört bölümün tamamında kendini göstermesi. Dört farklı bölümde toplam ${enigmaMarks} sıra dışı işaret biriktirerek alışılmış sınıflandırmaların ötesine geçen bir örüntü oluşturdun.`;
    }

    const behaviorPart = joinedClauses
        ? ` Yanıtlarında, ${joinedClauses} görülüyor.`
        : "";
    const sectionPart = ` Özellikle ${topSectionLabel}’deki yanıtların bu eğilimini daha belirgin hâle getiriyor.`;

    return `${primaryData.opening}${behaviorPart}${sectionPart}`;
}

function calculateResult() {
    const scores = { BA: 0, CA: 0, BO: 0, CO: 0, B: 0 };
    const primaryHits = { BA: 0, CA: 0, BO: 0, CO: 0, B: 0 };
    const secondaryHits = { BA: 0, CA: 0, BO: 0, CO: 0, B: 0 };
    const sectionScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
    let enigmaMarks = 0;
    const enigmaSections = new Set();

    QUESTIONS.forEach((q, idx) => {
        const chosenKey = selectedAnswers[idx];
        if (!chosenKey) return;

        const rule = SCORING[q.id]?.[chosenKey];
        if (!rule) return;

        const sec = getSectionGroup(q.id);

        if (scores[rule.primary] !== undefined) {
            scores[rule.primary] += 2;
            primaryHits[rule.primary] += 1;
            sectionScores[sec] += 2;
        }
        if (scores[rule.secondary] !== undefined) {
            scores[rule.secondary] += 1;
            secondaryHits[rule.secondary] += 1;
            sectionScores[sec] += 1;
        }

        if (rule.enigma) {
            enigmaMarks += 1;
            enigmaSections.add(sec);
        }
    });

    const sortedNormalClasses = [...NORMAL_CLASSES].sort((a, b) => {
        if (scores[b] !== scores[a]) return scores[b] - scores[a];
        if (primaryHits[b] !== primaryHits[a]) return primaryHits[b] - primaryHits[a];
        if (secondaryHits[b] !== secondaryHits[a]) return secondaryHits[b] - secondaryHits[a];
        return NORMAL_CLASSES.indexOf(a) - NORMAL_CLASSES.indexOf(b);
    });

    const isEnigmaQualified = enigmaMarks >= 4 && enigmaSections.size >= 4;
    const primaryCode = isEnigmaQualified ? "E" : sortedNormalClasses[0];

    return {
        primaryCode,
        scores,
        primaryHits,
        secondaryHits,
        sectionScores,
        enigmaMarks,
        enigmaSectionCount: enigmaSections.size,
        isEnigmaQualified
    };
}

function renderQuestion(index) {
    const question = QUESTIONS[index];
    if (!question) return;

    sectionLabel.textContent = question.section;
    questionCounter.textContent = `Soru ${index + 1} / ${QUESTIONS.length}`;

    const answeredCount = selectedAnswers.filter((ans) => ans !== null).length;
    progressBar.setAttribute("aria-valuenow", String(answeredCount));

    const progressPercent = ((index + 1) / QUESTIONS.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    questionText.textContent = question.text;
    optionsList.innerHTML = "";

    const currentAnswer = selectedAnswers[index];

    question.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-button";
        btn.setAttribute("role", "radio");

        const isSelected = currentAnswer === opt.key;
        btn.setAttribute("aria-checked", String(isSelected));
        if (isSelected) {
            btn.classList.add("is-selected");
        }

        const keyBadge = document.createElement("span");
        keyBadge.className = "option-key";
        keyBadge.textContent = opt.key;

        const textSpan = document.createElement("span");
        textSpan.textContent = opt.text;

        btn.appendChild(keyBadge);
        btn.appendChild(textSpan);

        btn.addEventListener("click", () => {
            selectedAnswers[index] = opt.key;
            renderQuestion(index);
        });

        optionsList.appendChild(btn);
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = currentAnswer === null;
    nextBtn.textContent = index === QUESTIONS.length - 1 ? "SONUCU GÖR" : "SONRAKİ SORU";
}

function renderResult() {
    const resultContext = calculateResult();
    const primaryData = RESULTS_DATA[resultContext.primaryCode] || RESULTS_DATA.B;

    resultImage.src = primaryData.image;
    resultImage.alt = `${primaryData.name} karakter görseli`;
    resultName.textContent = primaryData.name;
    resultDescription.textContent = primaryData.description;

    if (whyResultHeading) {
        whyResultHeading.textContent = primaryData.whyHeading;
    }
    if (whyResultText) {
        whyResultText.textContent = buildWhyResultText(resultContext.primaryCode, resultContext);
    }

    quizSection.hidden = true;
    resultSection.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
    currentIndex = 0;
    selectedAnswers = Array(QUESTIONS.length).fill(null);
    homeSection.hidden = true;
    resultSection.hidden = true;
    quizSection.hidden = false;
    renderQuestion(currentIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
}

if (restartBtn) {
    restartBtn.addEventListener("click", startQuiz);
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            renderQuestion(currentIndex);
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (selectedAnswers[currentIndex] === null) return;

        if (currentIndex < QUESTIONS.length - 1) {
            currentIndex += 1;
            renderQuestion(currentIndex);
        } else {
            renderResult();
        }
    });
}