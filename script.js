'use strict';
/* =====================================================
   ALMO PRESTIGE — script.js
   Bilingual (AR/EN + RTL) SPA logic. No libraries.
   ===================================================== */

/* ---------- 1. Assets (supplied ALMO imagery) ---------- */
const IMG = {
  blueprint:  'https://z-cdn-media.chatglm.cn/files/0b26c663-3744-4ce5-be22-c0a43e6bb0d9.png?auth_key=1888474716-53caf225ab7a4380ad682da98c6a01da-0-335c3ce44912d51f78e2b1e9c3c97514',
  boxGold:    'https://z-cdn-media.chatglm.cn/files/8a98c7b3-0f71-4979-a6d5-ed54583faa8d.png?auth_key=1888474716-959e696564c246c8e940cda4511377-0-29fee5a3c8a59e3f2c74b09f541353d7',
  marble:     'https://z-cdn-media.chatglm.cn/files/5c098e7a-ff54-46d8-a461-9db51121be21.png?auth_key=1888474716-56f95c25db6c4e8186f6728f11083e8b-0-ad560439db1d8cc1cb5d38fe406ac6ab',
  logo:       'https://z-cdn-media.chatglm.cn/files/69b74e30-bba9-4060-8417-5102d851aa4d.png?auth_key=1888474716-26ec9dbae30543d099764660a7d9703a-0-8ebe9119ba2c07e4c78ea590b8a6aa65',
  cards:      'https://z-cdn-media.chatglm.cn/files/ca4e7671-9f55-43f1-b0d7-774bdf30597c.jpg?auth_key=1888474716-b25bdc1f53d24f10bb3ffa2a0fac9325-0-f6cc4de4dedf7748cb2a44a90e428bb1',
  packaging:  'https://z-cdn-media.chatglm.cn/files/003fc5de-5f7b-4882-aade-2361fa160b8a.jpg?auth_key=1888474716-ed3d5682706c40799a75cd58e9d51b63-0-e58d0204917e1530e7176c5b53fb102e',
  boxPlain:   'https://z-cdn-media.chatglm.cn/files/c721ad30-6544-4c44-991b-6ee9d02a5e2f.png?auth_key=1888474716-968ac0bc711548f0a505540d324d08d5-0-fd4fa6ef8746d6bd49bad2ead9c1b179',
  portrait:   'https://z-cdn-media.chatglm.cn/files/547443d1-8f50-49f4-b90c-eee1f04692f4.png?auth_key=1888474716-520ce2f03cb94eb4aa7fa9b75265add0-0-0611241ae7dabb1d5e273cde218b8bfa',
  avant:      'https://z-cdn-media.chatglm.cn/files/80f632a7-66b8-4a27-b636-15d5149921a2.png?auth_key=1888474716-2624038dc29e405482719e1a0269cdbf-0-89fdc10385e99795d1e35a23e6016256'
};

/* ---------- 2. Product catalogue ---------- */
const products = [
  {
    id: 1, name: "ALMO Architect", nameArabic: "ألـمو أركيتكت",
    collection: "ALMO ARCHITECT", collectionArabic: "ألـمو أركيتكت",
    category: "men", signature: true, limited: false, edition: null,
    price: 1850, currency: "SAR", sku: "AL-ARC-01", stock: true,
    image: IMG.blueprint, gallery: [IMG.blueprint, IMG.portrait, IMG.cards],
    description: "Drafted before it was built. A flat titanium browline, squared lens architecture and a graphite finish that reads like brushed concrete in daylight. The founding frame of the ARCHITECT line.",
    descriptionArabic: "صُمم قبل أن يُصنع. خط جبين مسطّح من التيتانيوم، وعمارة عدسات مربّعة، ولمسة جرافيت تبدو كالخرسانة المصقولة تحت ضوء النهار. الإطار المؤسِّس لخط «أركيتكت».",
    materials: "Grade-5 titanium · graphite PVD · UV400 polarised",
    materialsArabic: "تيتانيوم درجة 5 · طلاء PVD جرافيت · عدسات UV400 مستقطبة",
    specs: { lens: "54 mm", bridge: "20 mm", temple: "145 mm", weight: "24 g" }
  },
  {
    id: 2, name: "ALMO Vanguard", nameArabic: "ألـمو فانجارد",
    collection: "ALMO VANGUARD", collectionArabic: "ألـمو فانجارد",
    category: "unisex", signature: false, limited: true, edition: 25,
    price: 3900, currency: "SAR", sku: "AL-VGD-02", stock: true,
    image: IMG.avant, gallery: [IMG.avant, IMG.marble, IMG.blueprint],
    description: "A cantilevered silhouette folded — never soldered — from a single titanium sheet. Avant-garde by engineering, not by decoration. Twenty-five numbered pieces, ever.",
    descriptionArabic: "صورة ظلّية ناتئة تُطوى — ولا تُلحم أبداً — من صفيحة تيتانيوم واحدة. طليعي بالهندسة لا بالزخرفة. خمس وعشرون قطعة مرقّمة، للأبد.",
    materials: "Folded Grade-5 titanium · smoked CR-39",
    materialsArabic: "تيتانيوم درجة 5 مطوي · عدسات CR-39 دخالية",
    specs: { lens: "56 mm", bridge: "18 mm", temple: "148 mm", weight: "22 g" }
  },
  {
    id: 3, name: "ALMO Nocturne", nameArabic: "ألـمو نوكتيرن",
    collection: "ALMO NOCTURNE", collectionArabic: "ألـمو نوكتيرن",
    category: "women", signature: false, limited: false, edition: null,
    price: 1450, currency: "SAR", sku: "AL-NCT-03", stock: true,
    image: IMG.boxGold, gallery: [IMG.boxGold, IMG.packaging, IMG.cards],
    description: "Champagne-gold temples against a smoked front. The lightest frame in the house, tuned for the evening.",
    descriptionArabic: "ساقان بذهب الشامبانيا مقابل واجهة دخالية. أخفّ إطار في الدار، مضبوط لأمسياتك.",
    materials: "Champagne-gold titanium · smoked CR-39",
    materialsArabic: "تيتانيوم بذهب الشامبانيا · CR-39 دخالية",
    specs: { lens: "52 mm", bridge: "18 mm", temple: "140 mm", weight: "19 g" }
  },
  {
    id: 4, name: "ALMO Monolith", nameArabic: "ألـمو مونوليث",
    collection: "ALMO MONOLITH", collectionArabic: "ألـمو مونوليث",
    category: "unisex", signature: true, limited: false, edition: null,
    price: 1650, currency: "SAR", sku: "AL-MNL-04", stock: true,
    image: IMG.marble, gallery: [IMG.marble, IMG.blueprint, IMG.avant],
    description: "A single-block aesthetic: thick bevels, no visible joints, and a finish that absorbs light rather than chasing it.",
    descriptionArabic: "جمالية الكتلة الواحدة: حواف سميكة، بلا مفاصل ظاهرة، ولمسة تمتصّ الضوء بدل أن تطارده.",
    materials: "Matte titanium · anti-reflective CR-39",
    materialsArabic: "تيتانيوم مطفي · عدسات CR-39 مضادة للانعكاس",
    specs: { lens: "55 mm", bridge: "21 mm", temple: "145 mm", weight: "26 g" }
  },
  {
    id: 5, name: "ALMO Meridian", nameArabic: "ألـمو ميريديان",
    collection: "ALMO ARCHITECT", collectionArabic: "ألـمو أركيتكت",
    category: "men", signature: false, limited: false, edition: null,
    price: 1250, currency: "SAR", sku: "AL-MRD-05", stock: true,
    image: IMG.boxPlain, gallery: [IMG.boxPlain, IMG.blueprint, IMG.cards],
    description: "The daily instrument. Classic geometry, balanced weight distribution, and hinges pre-loaded for a decade of service.",
    descriptionArabic: "الأداة اليومية. هندسيات كلاسيكية، وتوزيع وزن متوازن، ومفاصل مشدودة مسبقاً لعقدٍ من الاستخدام.",
    materials: "Brushed titanium · G15 polarised",
    materialsArabic: "تيتانيوم مصقول · عدسات G15 مستقطبة",
    specs: { lens: "54 mm", bridge: "19 mm", temple: "145 mm", weight: "23 g" }
  },
  {
    id: 6, name: "ALMO Sovereign", nameArabic: "ألـمو سوفرين",
    collection: "ALMO HERITAGE", collectionArabic: "ألـمو هيريتاج",
    category: "women", signature: false, limited: true, edition: 60,
    price: 2900, currency: "SAR", sku: "AL-SOV-06", stock: true,
    image: IMG.portrait, gallery: [IMG.portrait, IMG.boxGold, IMG.packaging],
    description: "Heritage geometry in champagne gold with a saddle bridge. Limited run, individually numbered.",
    descriptionArabic: "هندسيات التراث بذهب الشامبانيا وجسر سرجي. إصدار محدود، مرقّم قطعة قطعة.",
    materials: "Champagne-gold titanium · acetate temple tips",
    materialsArabic: "تيتانيوم ذهب شامبانيا · أطراف ساق من الأسيتات",
    specs: { lens: "53 mm", bridge: "19 mm", temple: "142 mm", weight: "21 g" }
  },
  {
    id: 7, name: "ALMO Axiom", nameArabic: "ألـمو أكسيوم",
    collection: "ALMO VANGUARD", collectionArabic: "ألـمو فانجارد",
    category: "women", signature: false, limited: false, edition: null,
    price: 1750, currency: "SAR", sku: "AL-AXM-07", stock: false,
    image: IMG.boxGold, gallery: [IMG.boxGold, IMG.avant, IMG.marble],
    description: "The hypothesis frame: an oversized feminine geometry proving that boldness and balance are the same property.",
    descriptionArabic: "إطار الفرضية: هندسية أنثوية كبيرة تُثبت أن الجرأة والتوازن الخاصية ذاتها.",
    materials: "Titanium · gradient CR-39",
    materialsArabic: "تيتانيوم · عدسات CR-39 متدرّجة",
    specs: { lens: "57 mm", bridge: "17 mm", temple: "145 mm", weight: "22 g" }
  },
  {
    id: 8, name: "ALMO Obsidian", nameArabic: "ألـمو أوبسيديان",
    collection: "ALMO MONOLITH", collectionArabic: "ألـمو مونوليث",
    category: "men", signature: false, limited: true, edition: 40,
    price: 2150, currency: "SAR", sku: "AL-OBS-08", stock: true,
    image: IMG.marble, gallery: [IMG.marble, IMG.portrait, IMG.boxPlain],
    description: "Black on black on graphite. The Monolith line's dark exercise, limited to one numbered run.",
    descriptionArabic: "أسود على أسود على جرافيت. التمرين الداكن لخط «مونوليث»، محدود بإصدار مرقّم واحد.",
    materials: "PVD black titanium · graphite acetate",
    materialsArabic: "تيتانيوم أسود PVD · أسيتات جرافيت",
    specs: { lens: "55 mm", bridge: "20 mm", temple: "146 mm", weight: "27 g" }
  },
  {
    id: 9, name: "ALMO Signature Gift Set", nameArabic: "طقم الهدايا السيجنتشر",
    collection: "GIFT SETS", collectionArabic: "أطقم الهدايا",
    category: "gifts", signature: false, limited: false, edition: null,
    price: 2100, currency: "SAR", sku: "GS-SIG-01", stock: true,
    image: IMG.packaging, gallery: [IMG.packaging, IMG.cards, IMG.boxGold],
    description: "Any catalogue frame, boxed and sealed by hand: leather case, certificate, microfibre cloth and ribboned presentation box.",
    descriptionArabic: "أي إطار من الكتالوج، معبّأ ومختوم يدوياً: علبة جلدية، وشهادة، وقطعة ميكروفايبر، وعلبة تقديم بشريط.",
    materials: "Leather · silk ribbon · lacquered card",
    materialsArabic: "جلد · شريط حرير · بطاقة مطلية",
    specs: null
  },
  {
    id: 10, name: "ALMO Sovereign Gift Set", nameArabic: "طقم الهدايا سوفرين",
    collection: "GIFT SETS", collectionArabic: "أطقم الهدايا",
    category: "gifts", signature: false, limited: false, edition: null,
    price: 3200, currency: "SAR", sku: "GS-SOV-02", stock: true,
    image: IMG.packaging, gallery: [IMG.packaging, IMG.boxGold, IMG.cards],
    description: "Any limited-edition frame in a lacquered display case, with a numbered certificate and concierge hand-delivery.",
    descriptionArabic: "أي إطار من الإصدار المحدود داخل علبة عرض مطلية، مع شهادة مرقّمة وتسليم خاص.",
    materials: "Lacquered display case · numbered certificate",
    materialsArabic: "علبة عرض مطلية · شهادة مرقّمة",
    specs: null
  }
];

/* ---------- 3. Editorial data ---------- */
const FAQS = [
  { q: { en: "How do I choose my frame?", ar: "كيف أختار إطاري المناسب؟" },
    a: { en: "Start with scale, not style: match the frame width to your face width, then contrast the silhouette — angular frames soften round faces and vice versa. Every product page lists exact lens, bridge and temple measurements, and the catalogue can be filtered by line and character.",
         ar: "ابدأ من المقاس لا من الشكل: طابق عرض الإطار مع عرض وجهك، ثم اختر التضاد — الإطارات الحادة تلطّف الوجوه الدائرية والعكس صحيح. كل صفحة منتج تعرض مقاسات العدسة والجسر والساق، ويمكن تصفية الكتالوج حسب الخط والطابع." } },
  { q: { en: "What materials are used?", ar: "ما المواد المستخدمة؟" },
    a: { en: "Grade-5 titanium for the chassis, Japanese acetate for contact surfaces, and CR-39 polarised lenses with UV400 protection and a seven-layer anti-reflective coating.",
         ar: "تيتانيوم درجة 5 للهيكل، وأسيتات ياباني لسطوح التلامس، وعدسات CR-39 مستقطبة بحماية UV400 وطلاء مضاد للانعكاس من سبع طبقات." } },
  { q: { en: "How should I care for my eyewear?", ar: "كيف أعتني بنظارتي؟" },
    a: { en: "Rinse with lukewarm water, dry with the supplied microfibre cloth, and store cased with the lenses facing up. Keep frames away from prolonged heat.",
         ar: "اغسلها بماء فاتر، وجفّفها بقطعة الميكروفايبر المرفقة، واحفظها في العلبة والعدسات نحو الأعلى. وابتعد عن الحرارة المطوّلة." } },
  { q: { en: "Do you offer shipping?", ar: "هل توفرون التوصيل؟" },
    a: { en: "Yes. Delivery is fully insured — complimentary on orders above SAR 1,000, and a flat SAR 75 below it. Limited-edition pieces are hand-delivered by concierge.",
         ar: "نعم. التوصيل مؤمّن بالكامل — مجاني للطلبات فوق 1,000 ر.س، وبمبلغ ثابت 75 ر.س لما دون ذلك. وتُسلَّم قطع الإصدار المحدود تسليماً يدوياً خاصاً." } },
  { q: { en: "What is your return policy?", ar: "ما سياسة الإرجاع؟" },
    a: { en: "Unworn frames in original condition may be returned within fourteen days of delivery for a full refund. Engraved and numbered pieces are final sale.",
         ar: "يمكن إرجاع الإطارات غير المستعملة بحالتها الأصلية خلال أربعة عشر يوماً من التسليم مقابل استرداد كامل. القطع المحفورة والمرقّمة بيع نهائي." } },
  { q: { en: "Are the products authentic?", ar: "هل المنتجات أصلية؟" },
    a: { en: "Every ALMO frame carries a serial number on the inner temple and ships with a matching certificate of authenticity. Limited pieces are verifiable against the register.",
         ar: "كل إطار من ألـمو يحمل رقماً تسلسلياً على الساق الداخلية ويأتي مع شهادة أصالة مطابقة. ويمكن التحقق من قطع الإصدار المحدود مقابل السجل." } },
  { q: { en: "How can I contact ALMO?", ar: "كيف أتواصل مع ألـمو؟" },
    a: { en: "Through the form on this page, or via any of our social channels. The concierge replies within two business days.",
         ar: "عبر النموذج في هذه الصفحة، أو من خلال أي قناة من قنواتنا الاجتماعية. يرد فريق الاستقبال خلال يومي عمل." } }
];

const ENG = [
  { tab: { en: "FRAME", ar: "الهيكل" },
    copy: { en: "The chassis of every ALMO frame is machined from Grade-5 titanium billet, stress-relieved twice, and hand-brushed along the grain so the metal reads as a single continuous surface.",
            ar: "يُصنع هيكل كل إطار من ألـمو بالتقطيع من قضيب تيتانيوم درجة 5، ويُخفَّف إجهاده مرتين، ويُفرش يدوياً مع اتجاه المعدن لتبدو السطح ككتلة واحدة متصلة." },
    rows: [
      { l: { en: "MATERIAL", ar: "المادة" }, v: { en: "Grade-5 titanium", ar: "تيتانيوم درجة 5" } },
      { l: { en: "WEIGHT", ar: "الوزن" }, v: { en: "24 g", ar: "24 غراماً" } },
      { l: { en: "TOLERANCE", ar: "التفاوت" }, v: { en: "±0.1 mm", ar: "±0.1 مم" } },
      { l: { en: "FINISH", ar: "التشطيب" }, v: { en: "Hand-brushed / polished", ar: "فرش يدوي / مصقول" } } ] },
  { tab: { en: "LENSES", ar: "العدسات" },
    copy: { en: "Lenses are cast in CR-39 with a polarising film laminated at the optical centre, then coated on seven faces for reflection control.",
            ar: "تُسبك العدسات من CR-39 مع غشاء استقطاب مُلبَّد في المركز البصري، ثم تُطلى على سبعة أوجه للتحكم في الانعكاس." },
    rows: [
      { l: { en: "MATERIAL", ar: "المادة" }, v: { en: "CR-39 polarised", ar: "CR-39 مستقطبة" } },
      { l: { en: "PROTECTION", ar: "الحماية" }, v: { en: "UV400", ar: "UV400" } },
      { l: { en: "COATING", ar: "الطلاء" }, v: { en: "7-layer anti-reflective", ar: "مضاد انعكاس من 7 طبقات" } },
      { l: { en: "GEOMETRY", ar: "الجيومترية" }, v: { en: "1.5 mm aspheric", ar: "1.5 مم لاقورية" } } ] },
  { tab: { en: "HINGES", ar: "المفاصل" },
    copy: { en: "Barrel hinges are turned from solid rod and pre-loaded, so the temple returns to the same closed position for the life of the frame.",
            ar: "تُخرط المفاصل الأسطوانية من قضيب صلب وتُشدّ مسبقاً، فتعود الساق إلى موضع الإغلاق ذاته طوال عمر الإطار." },
    rows: [
      { l: { en: "TYPE", ar: "النوع" }, v: { en: "Custom barrel, 3-piece", ar: "أسطواني مخصص من 3 قطع" } },
      { l: { en: "CYCLES", ar: "الدورات" }, v: { en: "20,000+", ar: "+20,000" } },
      { l: { en: "MATERIAL", ar: "المادة" }, v: { en: "Machined nickel-silver", ar: "نيكل-فضة مخرط" } },
      { l: { en: "ADJUSTMENT", ar: "الضبط" }, v: { en: "Micro-click, 5° steps", ar: "نقر دقيق بدرجات 5°" } } ] }
];

const GALLERY = [
  { src: IMG.blueprint, cap: { en: "The Architect — drafting-table study", ar: "«أركيتكت» — دراسة على طاولة التصميم" } },
  { src: IMG.boxGold,   cap: { en: "Nocturne — presentation study", ar: "«نوكتيرن» — دراسة العرض" } },
  { src: IMG.marble,    cap: { en: "Monolith — material study", ar: "«مونوليث» — دراسة المواد" } },
  { src: IMG.logo,      cap: { en: "The maison mark", ar: "شعار الدار" } },
  { src: IMG.cards,     cap: { en: "Atelier stationery", ar: "أوراق المشغل" } },
  { src: IMG.packaging, cap: { en: "The presentation system", ar: "منظومة التقديم" } },
  { src: IMG.boxPlain,  cap: { en: "Meridian — elevation", ar: "«ميريديان» — مسقط أمامي" } },
  { src: IMG.portrait,  cap: { en: "Worn study — engineering environment", ar: "دراسة الارتداء — بيئة هندسية" } },
  { src: IMG.avant,     cap: { en: "Vanguard — the avant-garde study", ar: "«فانجارد» — الدراسة الطليعية" } }
];

const FEATURED = [1, 2, 3];

/* ---------- 4. State ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};
let lang = localStorage.getItem('almo-lang') || ((navigator.language||'en').toLowerCase().indexOf('ar')===0 ? 'ar' : 'en');
let cart = store.get('almo-cart', []);
let filter = 'all', search = '', sort = 'featured';
let engTab = 0, lightboxIndex = 0;
let currentProduct = null, pmQty = 1;
let userReserved = store.get('almo-reserved', []);
const DEFAULT_TAKEN = [3, 7, 11, 14, 19, 22];
const VANGUARD_EDITION = 25;
const FREE_SHIP = 1000, SHIP_FEE = 75;

/* ---------- 5. Helpers ---------- */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const L  = (en, ar) => lang === 'ar' ? ar : en;
const byId = id => products.find(p => p.id === id);
const pad2 = n => String(n).padStart(2, '0');
const fmt = n => lang === 'ar' ? n.toLocaleString('en-US') + ' ر.س' : 'SAR ' + n.toLocaleString('en-US');
const pName = p => lang === 'ar' ? p.nameArabic : p.name;
const pColl = p => lang === 'ar' ? p.collectionArabic : p.collection;
const SV = {
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 12h16"/></svg>',
  plus:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 4v16M4 12h16"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 6h16M9.5 6V4h5v2M6.5 6l1 15h9l1-15M10 10v8M14 10v8"/></svg>',
  arrow: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h17M14 6l6 6-6 6"/></svg>'
};

function toast(msg){
  const box = $('#toastBox');
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 420); }, 3200);
}

function syncLock(){
  const on = $('#cartDrawer').classList.contains('open')
          || $('#mobileMenu').classList.contains('open')
          || $('#searchOverlay').classList.contains('open')
          || !!document.querySelector('.modal.open');
  document.body.classList.toggle('locked', on);
}

/* ---------- 6. i18n ---------- */
function setLang(l){ lang = l; localStorage.setItem('almo-lang', l); applyI18n(); }

function applyI18n(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = L('ALMO Prestige — Engineered for Prestige', 'ألـمو برستيج — صُممت للتميز');
  $$('[data-en]').forEach(el => { const v = el.dataset[lang === 'ar' ? 'ar' : 'en']; if (v != null) el.textContent = v; });
  $$('[data-en-ph]').forEach(el => { el.placeholder = el.dataset[lang === 'ar' ? 'arPh' : 'enPh'] || ''; });
  $('#searchBtn').setAttribute('aria-label', L('Search', 'بحث'));
  $('#cartBtn').setAttribute('aria-label', L('Cart', 'السلة'));
  $('#burgerBtn').setAttribute('aria-label', L('Menu', 'القائمة'));
  $('#langBtn').setAttribute('aria-label', L('Switch language', 'تغيير اللغة'));
  renderTicker(); renderShop(); renderFeatured(); renderEng(); renderFaq();
  renderGallery(); renderPieces(); renderCartUI(); renderCheckoutSummary();
  renderSearchResults($('#searchInput').value);
  $$('[data-price]').forEach(el => { const p = byId(+el.dataset.price); if (p) el.textContent = fmt(p.price); });
}

function renderTicker(){
  const words = lang === 'ar' ? ['مُهندَسة', 'دقيقة', 'فاخرة', 'ألـمو برستيج'] : ['ENGINEERED', 'PRECISE', 'PRESTIGIOUS', 'ALMO PRESTIGE'];
  let html = '';
  for (let r = 0; r < 6; r++) words.forEach(w => html += `<span class="tk">${w}</span><span class="tk-dot"></span>`);
  $('#tickerTrack').innerHTML = html;
}

/* ---------- 7. Shop ---------- */
function currentList(){
  let list = products.filter(p => {
    if (filter === 'men' || filter === 'women' || filter === 'unisex') return p.category === filter;
    if (filter === 'signature') return !!p.signature;
    if (filter === 'limited')   return !!p.limited;
    return true; /* ALL — includes gift sets */
  });
  if (search){
    const q = search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) || p.nameArabic.includes(search) ||
      p.collection.toLowerCase().includes(q) || p.collectionArabic.includes(search) ||
      p.sku.toLowerCase().includes(q));
  }
  if (sort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
  return list;
}

function cardHTML(p, i){
  const badge = !p.stock ? `<span class="pc-badge pc-sold">${L('SOLD OUT','نفدت الكمية')}</span>`
              : p.limited ? `<span class="pc-badge">${L('LIMITED','محدود')} — ${p.edition}</span>`
              : p.signature ? `<span class="pc-badge">${L('SIGNATURE','سيجنتشر')}</span>` : '';
  return `<article class="pcard" style="animation-delay:${i * 60}ms">
    <div class="pc-media" data-open-product="${p.id}">
      <img src="${p.image}" alt="${pName(p)}" loading="lazy" decoding="async">
      ${badge}
      <span class="pc-index mono">${pad2(p.id)}</span>
    </div>
    <div class="pc-info">
      <span class="pc-collection mono">${pColl(p)}</span>
      <h3 class="pc-name">${pName(p)}</h3>
      <p class="pc-price">${fmt(p.price)}</p>
      <div class="pc-actions">
        <button class="pc-btn" data-open-product="${p.id}">${L('VIEW DETAILS','التفاصيل')}</button>
        <button class="pc-btn pc-btn-solid" data-add="${p.id}" ${p.stock ? '' : 'disabled'}>${L('ADD TO CART','أضف للسلة')}</button>
      </div>
    </div>
  </article>`;
}

function renderShop(){
  const list = currentList();
  $('#shopGrid').innerHTML = list.map(cardHTML).join('');
  $('#shopCount').textContent = `${L('SHOWING','يُعرض')} ${list.length} / ${products.length}`;
  $('#shopEmpty').hidden = list.length > 0;
}

function syncChips(){ $$('#filters .chip').forEach(c => c.classList.toggle('is-active', c.dataset.filter === filter)); }

/* ---------- 8. Featured (eyewear section) ---------- */
function renderFeatured(){
  $('#frameIndex').innerHTML = FEATURED.map(id => {
    const p = byId(id);
    return `<li><button class="fi-row" data-open-product="${p.id}">
      <span class="fi-num mono">${pad2(p.id)}</span>
      <span class="fi-name">${pName(p)}</span>
      <span class="fi-meta">${p.limited ? L('LIMITED — 25 PIECES','محدود — 25 قطعة') : pColl(p)}</span>
      <span class="fi-price">${fmt(p.price)}</span>
      ${SV.arrow}
    </button></li>`;
  }).join('');
}

/* ---------- 9. Engineering tabs ---------- */
function renderEng(){
  $('#engTabs').innerHTML = ENG.map((t, i) =>
    `<button class="eng-tab ${i === engTab ? 'is-active' : ''}" data-eng="${i}">${L(t.tab.en, t.tab.ar)}</button>`).join('');
  const d = ENG[engTab];
  const panel = $('#engPanel');
  panel.innerHTML = `<p class="eng-desc">${L(d.copy.en, d.copy.ar)}</p>
    <dl class="spec-list">${d.rows.map(r =>
      `<div class="spec-row"><dt>${L(r.l.en, r.l.ar)}</dt><dd>${L(r.v.en, r.v.ar)}</dd></div>`).join('')}</dl>`;
  panel.classList.remove('fade'); void panel.offsetWidth; panel.classList.add('fade');
}

/* ---------- 10. FAQ ---------- */
function renderFaq(){
  $('#faqList').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-q" aria-expanded="${i === 0}"><span>${L(f.q.en, f.q.ar)}</span><i class="faq-ico"></i></button>
      <div class="faq-a"><div><p>${L(f.a.en, f.a.ar)}</p></div></div>
    </div>`).join('');
}

/* ---------- 11. Gallery + lightbox ---------- */
function renderGallery(){
  $('#galleryGrid').innerHTML = GALLERY.map((g, i) => `
    <figure class="gfig" data-g="${i}">
      <img src="${g.src}" alt="${L(g.cap.en, g.cap.ar)}" loading="lazy" decoding="async">
      <figcaption><span class="mono">${pad2(i + 1)} / ${pad2(GALLERY.length)}</span><span>${L(g.cap.en, g.cap.ar)}</span></figcaption>
    </figure>`).join('');
}
function openLightbox(i){
  lightboxIndex = (i + GALLERY.length) % GALLERY.length;
  showLb();
  $('#lightbox').classList.add('open'); syncLock();
}
function showLb(){
  const g = GALLERY[lightboxIndex];
  const img = $('#lbImg');
  img.classList.remove('pm-fade'); void img.offsetWidth;
  img.src = g.src; img.alt = L(g.cap.en, g.cap.ar); img.classList.add('pm-fade');
  $('#lbCount').textContent = `${pad2(lightboxIndex + 1)} / ${pad2(GALLERY.length)}`;
  $('#lbText').textContent = L(g.cap.en, g.cap.ar);
}
function closeLightbox(){ $('#lightbox').classList.remove('open'); syncLock(); }

/* ---------- 12. Limited edition piece board ---------- */
function isTaken(n){ return DEFAULT_TAKEN.includes(n) || userReserved.includes(n); }
function renderPieces(){
  $('#pieceBoard').innerHTML = Array.from({ length: VANGUARD_EDITION }, (_, i) => {
    const n = i + 1, taken = isTaken(n), reserved = userReserved.includes(n);
    return `<button class="piece ${taken ? 'taken' : ''} ${reserved ? 'reserved' : ''}"
      data-piece="${n}" ${taken ? 'disabled' : ''} aria-label="${L('Piece','قطعة')} ${n}">${n}</button>`;
  }).join('');
  const taken = new Set([...DEFAULT_TAKEN, ...userReserved]).size;
  $('#pieceStatus').textContent = `${VANGUARD_EDITION - taken} / ${VANGUARD_EDITION} ${L('AVAILABLE','متاحة')}`;
}
function reservePiece(n){
  if (isTaken(n)) return;
  userReserved.push(n); store.set('almo-reserved', userReserved);
  renderPieces();
  addToCart(2, 1, true);
  toast(L(`Piece Nº ${n} reserved — added to your selection.`, `تم حجز القطعة رقم ${n} — أُضيفت إلى سلتك.`));
}

/* ---------- 13. Cart ---------- */
function saveCart(){ store.set('almo-cart', cart); }
function cartTotals(){
  const sub = cart.reduce((s, c) => s + (byId(c.id) ? byId(c.id).price * c.qty : 0), 0);
  const ship = (cart.length && sub < FREE_SHIP) ? SHIP_FEE : 0;
  return { sub, ship, total: sub + ship, count: cart.reduce((s, c) => s + c.qty, 0) };
}
function addToCart(id, qty, silent){
  const p = byId(id); if (!p) return;
  if (!p.stock){ toast(L('This piece is currently sold out.', 'هذه القطعة نفدت حالياً.')); return; }
  const row = cart.find(c => c.id === id);
  if (row) row.qty += qty; else cart.push({ id, qty });
  saveCart(); renderCartUI(); renderCheckoutSummary();
  const badge = $('#cartCount');
  badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump');
  if (!silent) toast(`${pName(p)} — ${L('added to your selection.', 'أُضيفت إلى سلتك.')}`);
}
function changeQty(id, step){
  const row = cart.find(c => c.id === id); if (!row) return;
  row.qty += step;
  if (row.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart(); renderCartUI(); renderCheckoutSummary();
}
function removeItem(id){
  cart = cart.filter(c => c.id !== id);
  saveCart(); renderCartUI(); renderCheckoutSummary();
  toast(L('Removed from your selection.', 'أُزيل من السلة.'));
}
function renderCartUI(){
  const t = cartTotals();
  const badge = $('#cartCount');
  badge.textContent = t.count; badge.hidden = t.count === 0;
  $('#cartTitle').textContent = `${L('YOUR SELECTION','سلتك')} — ${t.count}`;
  if (!cart.length){
    $('#cartItems').innerHTML = `<div class="cart-empty">
      <p class="ce-title">${L('YOUR SELECTION IS EMPTY','سلتك فارغة')}</p>
      <p>${L('The catalogue is one scroll away.','الكتالوج على بُعد تمريرة واحدة.')}</p>
      <a href="#shop" class="btn btn-small">${L('BROWSE FRAMES','تصفح الإطارات')}</a></div>`;
  } else {
    $('#cartItems').innerHTML = cart.map(c => {
      const p = byId(c.id); if (!p) return '';
      return `<div class="ci">
        <img src="${p.image}" alt="${pName(p)}">
        <div>
          <span class="ci-collection">${pColl(p)}</span>
          <h4 class="ci-name">${pName(p)}</h4>
          <span class="ci-unit">${fmt(p.price)}</span>
          <div class="ci-ctrl">
            <button data-step="-1" data-cid="${p.id}" aria-label="Decrease">${SV.minus}</button>
            <span class="ci-qty">${c.qty}</span>
            <button data-step="1" data-cid="${p.id}" aria-label="Increase">${SV.plus}</button>
          </div>
        </div>
        <div class="ci-side">
          <button class="ci-rm" data-remove data-cid="${p.id}" aria-label="Remove">${SV.trash}</button>
          <span class="ci-total">${fmt(p.price * c.qty)}</span>
        </div>
      </div>`;
    }).join('');
  }
  $('#cartSub').textContent = fmt(t.sub);
  $('#cartShip').textContent = t.ship === 0 ? L('COMPLIMENTARY','مجاني') : fmt(t.ship);
  $('#cartTotal').textContent = fmt(t.total);
  $('#cartNote').textContent = t.ship === 0
    ? L('Complimentary insured delivery on this order.', 'توصيل مؤمّن مجاني لهذا الطلب.')
    : L(`Add ${fmt(FREE_SHIP - t.sub)} more for complimentary delivery.`, `أضف ${fmt(FREE_SHIP - t.sub)} للحصول على توصيل مجاني.`);
  $('#cartCheckoutBtn').disabled = !cart.length;
}
function openCart(){ $('#cartDrawer').classList.add('open'); $('#pageOverlay').classList.add('show'); syncLock(); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#pageOverlay').classList.remove('show'); syncLock(); }

/* ---------- 14. Product modal ---------- */
function openProduct(id){
  const p = byId(id); if (!p) return;
  currentProduct = p; pmQty = 1;
  $('#pmMain').src = p.gallery[0]; $('#pmMain').alt = pName(p);
  $('#pmCollection').textContent = pColl(p);
  $('#pmName').textContent = pName(p);
  $('#pmPrice').textContent = fmt(p.price);
  $('#pmDesc').textContent = L(p.description, p.descriptionArabic);
  $('#pmMatText').textContent = L(p.materials, p.materialsArabic);
  const stock = $('#pmStock');
  if (!p.stock){ stock.className = 'pm-stock out'; stock.textContent = L('SOLD OUT — REGISTER FOR RESTOCK','نفدت الكمية — سجّل في القائمة لمعرفة التوفر'); }
  else if (p.limited){ stock.className = 'pm-stock'; stock.textContent = L(`LIMITED EDITION — Nº 001–${pad3(p.edition)}`, `إصدار محدود — رقم 001–${pad3(p.edition)}`); }
  else { stock.className = 'pm-stock'; stock.textContent = L('IN STOCK — DISPATCHED WITHIN 48 HOURS','متوفر — يُشحن خلال 48 ساعة'); }
  const rows = [];
  if (p.specs){
    rows.push([L('LENS','العدسة'), p.specs.lens], [L('BRIDGE','الجسر'), p.specs.bridge],
              [L('TEMPLE','الساق'), p.specs.temple], [L('WEIGHT','الوزن'), p.specs.weight]);
  }
  rows.push([L('SKU','رمز المنتج'), p.sku]);
  if (p.limited) rows.push([L('EDITION','الإصدار'), `Nº 001–${pad3(p.edition)}`]);
  $('#pmSpecs').innerHTML = rows.map(r => `<div class="spec-row"><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('');
  $('#pmThumbs').innerHTML = p.gallery.map((src, i) =>
    `<button class="${i === 0 ? 'is-active' : ''}" data-thumb="${i}" aria-label="View ${i + 1}"><img src="${src}" alt=""></button>`).join('');
  $('#pmQty').textContent = pmQty;
  $('#pmAdd').disabled = !p.stock;
  $('#productModal').classList.add('open'); syncLock();
}
const pad3 = n => String(n).padStart(3, '0');
function closeProduct(){ $('#productModal').classList.remove('open'); syncLock(); }

/* ---------- 15. Search overlay ---------- */
function openSearch(){
  $('#searchOverlay').classList.add('open'); syncLock();
  const inp = $('#searchInput'); inp.value = '';
  renderSearchResults('');
  setTimeout(() => inp.focus(), 120);
}
function closeSearch(){ $('#searchOverlay').classList.remove('open'); syncLock(); }
function renderSearchResults(q){
  q = (q || '').trim();
  const matches = q ? products.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) || p.nameArabic.includes(q) ||
      p.collection.toLowerCase().includes(q.toLowerCase()) || p.collectionArabic.includes(q)) : products.slice(0, 4);
  const list = matches.slice(0, 8);
  let html = `<p class="sr-label">${q ? `${L('RESULTS','النتائج')} — ${matches.length}` : L('SUGGESTED','مقترحات')}</p>`;
  if (!list.length) html += `<p class="sr-empty">${L('No frames match your search.','لا نتائج مطابقة لبحثك.')}</p>`;
  else html += list.map(p => `
    <button class="sr-row" data-open-product="${p.id}">
      <img src="${p.image}" alt="">
      <span><span class="sr-name">${pName(p)}</span><span class="sr-coll">${pColl(p)}</span></span>
      <span class="sr-price">${fmt(p.price)}</span>
      ${SV.arrow}
    </button>`).join('');
  $('#searchResults').innerHTML = html;
}

/* ---------- 16. Checkout & confirmation ---------- */
function openCheckout(){
  if (!cart.length) return;
  $('#checkout').hidden = false;
  renderCheckoutSummary();
  closeCart();
  requestAnimationFrame(() => $('#checkout').scrollIntoView({ behavior: 'smooth' }));
}
function renderCheckoutSummary(){
  const t = cartTotals();
  $('#coItems').innerHTML = cart.length ? cart.map(c => {
    const p = byId(c.id); if (!p) return '';
    return `<li><span>${c.qty} × ${pName(p)}</span><span class="co-line-price">${fmt(p.price * c.qty)}</span></li>`;
  }).join('') : `<li><span>${L('No items','لا عناصر')}</span></li>`;
  $('#coSub').textContent = fmt(t.sub);
  $('#coShip').textContent = t.ship === 0 ? L('COMPLIMENTARY','مجاني') : fmt(t.ship);
  $('#coTotal').textContent = fmt(t.total);
}
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d][\d\s\-()]{6,}$/;

function checkField(field){
  const inp = field.querySelector('input,textarea');
  if (!inp) return true;
  const v = inp.value.trim();
  let ok = true;
  if (inp.required && !v) ok = false;
  else if (v && inp.dataset.validate === 'email' && !emailRe.test(v)) ok = false;
  else if (v && inp.dataset.validate === 'phone' && !phoneRe.test(v)) ok = false;
  field.classList.toggle('invalid', !ok);
  return ok;
}
function validateForm(form){
  let firstBad = null;
  form.querySelectorAll('.field').forEach(f => { if (!checkField(f) && !firstBad) firstBad = f; });
  if (firstBad){ firstBad.querySelector('input,textarea').focus(); return false; }
  return true;
}

function confirmOrder(e){
  e.preventDefault();
  if (!validateForm($('#checkoutForm'))) return;
  const t = cartTotals();
  const order = {
    no: `ALMO-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 90)}`,
    name: $('#coName').value.trim(),
    items: cart.map(c => ({ qty: c.qty, name: pName(byId(c.id)) })),
    total: t.total,
    address: `${$('#coAddress').value.trim()}\n${$('#coCity').value.trim()}, ${$('#coCountry').value.trim()}`
  };
  $('#cfOrder').textContent = '№ ' + order.no;
  $('#cfItems').textContent = order.items.map(i => `${i.qty} × ${i.name}`).join('\n');
  $('#cfTotal').textContent = fmt(order.total);
  $('#cfCustomer').textContent = order.name;
  $('#cfAddress').textContent = order.address;
  $('#checkoutForm').reset();
  cart = []; saveCart(); renderCartUI(); renderCheckoutSummary();
  $('#checkout').hidden = true;
  closeCart();
  $('#confirmModal').classList.add('open'); syncLock();
  toast(L('Order confirmed — thank you.', 'تم تأكيد الطلب — شكراً لك.'));
}

/* ---------- 17. Scroll, nav, effects ---------- */
let ticking = false;
function onScroll(){
  const y = window.scrollY;
  $('#siteHeader').classList.toggle('scrolled', y > 24);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $('#scrollProgress').style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  if (y < window.innerHeight) $('#heroBg').style.transform = `translateY(${y * 0.16}px)`;
}
window.addEventListener('scroll', () => {
  if (!ticking){ requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; }
}, { passive: true });

function initReveal(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => io.observe(el));
}
function initNavSpy(){
  const links = $$('.nav-link');
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));
}

/* ---------- 18. Global delegated events ---------- */
document.addEventListener('click', e => {
  const q = sel => e.target.closest(sel);
  let el;

  if (el = q('#langBtn')){ setLang(lang === 'ar' ? 'en' : 'ar'); return; }
  if (el = q('#searchBtn')){ openSearch(); return; }
  if (el = q('#searchClose')){ closeSearch(); return; }
  if (el = q('#burgerBtn')){
    const open = $('#mobileMenu').classList.toggle('open');
    $('#siteHeader').classList.toggle('menu-open', open);
    syncLock(); return;
  }
  if (el = q('#cartBtn')){ openCart(); return; }
  if (el = q('#cartClose') || q('#cartContinue')){ closeCart(); return; }
  if (el = q('#pageOverlay')){ closeCart(); return; }
  if (el = q('#cartCheckoutBtn')){ openCheckout(); return; }
  if (el = q('#coBack')){ $('#checkout').hidden = true; openCart(); return; }

  if (el = q('.chip')){ filter = el.dataset.filter; syncChips(); renderShop(); return; }
  if (el = q('#shopReset')){ filter = 'all'; search = ''; $('#shopSearch').value = ''; syncChips(); renderShop(); return; }
  if (el = q('[data-add]')){ addToCart(+el.dataset.add, 1); return; }
  if (el = q('[data-step]')){ changeQty(+el.dataset.cid, +el.dataset.step); return; }
  if (el = q('[data-remove]')){ removeItem(+el.dataset.cid); return; }
  if (el = q('[data-thumb]')){
    const p = currentProduct, i = +el.dataset.thumb;
    const img = $('#pmMain');
    img.classList.remove('pm-fade'); void img.offsetWidth;
    img.src = p.gallery[i]; img.classList.add('pm-fade');
    $$('#pmThumbs button').forEach(b => b.classList.toggle('is-active', b === el));
    return;
  }
  if (el = q('[data-open-product]')){ openProduct(+el.dataset.openProduct); return; }

  if (el = q('#pmMinus')){ pmQty = Math.max(1, pmQty - 1); $('#pmQty').textContent = pmQty; return; }
  if (el = q('#pmPlus')){ pmQty = Math.min(9, pmQty + 1); $('#pmQty').textContent = pmQty; return; }
  if (el = q('#pmAdd')){
    if (currentProduct){ addToCart(currentProduct.id, pmQty); closeProduct(); openCart(); }
    return;
  }

  if (el = q('.faq-q')){
    const item = el.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    $$('.faq-item.open').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-q').setAttribute('aria-expanded','false'); });
    if (!wasOpen){ item.classList.add('open'); el.setAttribute('aria-expanded','true'); }
    return;
  }
  if (el = q('.gfig')){ openLightbox(+el.dataset.g); return; }
  if (el = q('#lbPrev')){ lightboxIndex--; showLb(); return; }
  if (el = q('#lbNext')){ lightboxIndex++; showLb(); return; }

  if (el = q('.piece:not(.taken)')){ reservePiece(+el.dataset.piece); return; }
  if (el = q('.eng-tab')){ engTab = +el.dataset.eng; renderEng(); return; }

  if (el = q('.col-card')){
    e.preventDefault();
    const name = el.dataset.collection;
    const p = products.find(x => x.collection === 'ALMO ' + name);
    filter = 'all'; search = p ? (lang === 'ar' ? p.collectionArabic : p.collection) : name;
    $('#shopSearch').value = search; syncChips(); renderShop();
    $('#mobileMenu').classList.contains('open') && closeMenus();
    $('#shop').scrollIntoView({ behavior: 'smooth' });
    toast(L('Catalogue filtered to this collection.', 'تم تصفية الكتالوج حسب هذه المجموعة.'));
    return;
  }

  if (el = q('#cfContinue')){
    $('#confirmModal').classList.remove('open'); syncLock();
    $('#home').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (el = q('.modal-close') || q('.modal-backdrop')){
    el.closest('.modal').classList.remove('open'); syncLock(); return;
  }

  /* any in-page anchor: close overlays, let CSS smooth-scroll run */
  if (el = q('a[href^="#"]')){ closeMenus(); return; }
});

function closeMenus(){
  $('#mobileMenu').classList.remove('open');
  $('#siteHeader').classList.remove('menu-open');
  closeSearch(); closeCart();
}

document.addEventListener('input', e => {
  const f = e.target.closest('.field');
  if (f) f.classList.remove('invalid');
  if (e.target.id === 'shopSearch'){ search = e.target.value.trim(); renderShop(); }
  if (e.target.id === 'searchInput'){ renderSearchResults(e.target.value); }
});
document.addEventListener('change', e => {
  if (e.target.id === 'shopSort'){ sort = e.target.value; renderShop(); }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){
    if ($('#lightbox').classList.contains('open'))      return closeLightbox();
    if ($('#productModal').classList.contains('open')) return closeProduct();
    if ($('#confirmModal').classList.contains('open')) { $('#confirmModal').classList.remove('open'); return syncLock(); }
    if ($('#searchOverlay').classList.contains('open'))return closeSearch();
    if ($('#cartDrawer').classList.contains('open'))   return closeCart();
    if ($('#mobileMenu').classList.contains('open'))   return closeMenus();
  }
  if ($('#lightbox').classList.contains('open')){
    const rtl = document.documentElement.dir === 'rtl';
    if (e.key === (rtl ? 'ArrowRight' : 'ArrowLeft')){ lightboxIndex--; showLb(); }
    if (e.key === (rtl ? 'ArrowLeft' : 'ArrowRight')){ lightboxIndex++; showLb(); }
  }
  if (e.key === 'Enter' && $('#searchOverlay').classList.contains('open')){
    const first = $('#searchResults .sr-row');
    if (first && document.activeElement === $('#searchInput')){ e.preventDefault(); openProduct(+first.dataset.openProduct); closeSearch(); }
  }
});

/* ---------- 19. Forms ---------- */
 $('#checkoutForm').addEventListener('submit', confirmOrder);

 $('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm($('#contactForm'))) return;
  $('#ctOk').hidden = false;
  toast(L('Message sent — the concierge will reply shortly.', 'تم إرسال الرسالة — سيرد الفريق قريباً.'));
  e.target.reset();
  setTimeout(() => { $('#ctOk').hidden = true; }, 8000);
});

 $('#newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const inp = $('#newsEmail');
  if (!inp.value.trim() || !emailRe.test(inp.value.trim())){
    inp.focus(); toast(L('Please enter a valid email address.', 'أدخل بريداً إلكترونياً صحيحاً.')); return;
  }
  $('#newsOk').hidden = false; inp.value = '';
  toast(L('Welcome to the register.', 'أهلاً بك في السجل.'));
});

/* ---------- 20. Init ---------- */
applyI18n();
syncChips();
initReveal();
initNavSpy();
onScroll();