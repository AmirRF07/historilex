import { WordEntry } from '../types';

export const INITIAL_WORDS: WordEntry[] = [
  // --- نظریه، روش‌شناسی و تاریخ‌نگاری ---
  {
    id: 'begriffsgeschichte',
    term: 'Begriffsgeschichte (Conceptual History)',
    ipa: '/bəˈɡrɪfsɡəˌʃɪçtə/',
    persianMeaning: 'تاریخ مفاهیم (تبارشناسی معنایی واژه‌ها)',
    simpleExplanationFa: 'کوزلک می‌گوید واژه‌ها در طول تاریخ معنیشان ثابت نمی‌ماند بلکه عوض می‌شود. مثلاً واژه «ملت» در عهد صفوی یعنی پیروان یک مذهب، اما در مشروطه یعنی کل مردم صاحب حق رأی! با این روش، ریشه و دگرگونی معنای واژه‌ها در تاریخ کشف می‌شود.',
    academicDefinitionEn: 'A methodological approach in historiography that investigates the semantic evolution, socio-political usage, and transformation of fundamental historical concepts over time.',
    academicDefinitionFa: 'رویکردی روش‌شناختی در تاریخ‌نگاری (بنیان‌گذاری‌شده توسط راینهارت کوزلک) که دگرگونی معنایی و کاربرد سیاسی-اجتماعی مفاهیم کلیدی را در بستر زمان و تحولات تاریخی واکاوی می‌کند.',
    category: 'historiography',
    categoryFa: 'نظریه و تاریخ‌نگاری',
    bookId: 'koselleck',
    quoteOrContext: 'Concepts contain within themselves both the historical experiences of the past and the horizon of future expectations.',
    quoteTranslation: 'مفاهیم در درون خود هم تجربیات زیسته گذشته و هم افق انتظارات آینده را در بر می‌گیرند.',
    historicalSignificance: 'در پژوهش تاریخ ایران، برای تحلیل چگونگی دگرگونی واژگانی مانند «ملت»، «عدالت»، «رعیت» و «آزادی» از عهد سنتی به عصر مشروطه، بهره‌گیری از رویکرد کوزلک بنیادین است.',
    collocations: [
      'semantic horizon | افق معنایی',
      'horizon of expectation | افق انتظار آینده',
      'space of experience | فضای تجربه زیسته',
      'conceptual transformation | دگرگونی مفهومی'
    ],
    collocationsList: [
      { en: 'semantic horizon', fa: 'افق معنایی واژه' },
      { en: 'horizon of expectation', fa: 'افق انتظار نسبت به آینده' },
      { en: 'space of experience', fa: 'فضای تجربه گذشته' },
      { en: 'conceptual transformation', fa: 'دگرگونی بنیادین مفهومی' }
    ],
    relatedTerms: ['Historical Semantics', 'Sattelzeit', 'Historicism']
  },
  {
    id: 'historicism',
    term: 'Historicism (Historismus)',
    ipa: '/hɪˈstɔːrɪsɪzəm/',
    persianMeaning: 'تاریخی‌گری / اصالت تاریخ (دیدن گذشته با عینک زمان خودش)',
    simpleExplanationFa: 'یعنی هر اتفاق یا آیینی در گذشته را باید دقیقاً با عقل، باورها و شرایط همان زمان قضاوت کرد، نه با عینک و استانداردهای قرن بیست و یکم! مثلاً نمی‌شود شیوه حکومت سلاطین سلجوقی را با دموکراسی امروزی مقایسه و سرزنش کرد.',
    academicDefinitionEn: 'The historiographical stance asserting that historical events, institutions, and ideas must be understood strictly within the context of their own specific time, rather than evaluated by anachronistic present values.',
    academicDefinitionFa: 'دیدگاه تاریخ‌نگارانه‌ای که تاکید دارد رویدادها، نهادها و اندیشه‌ها را تنها باید بر مبنای روح زمانه، شرایط اقلیمی و معیارهای همان دوره فهمید، نه با پیش‌داوری‌ها و معیارهای اخلاقی اکنون.',
    category: 'historiography',
    categoryFa: 'نظریه و تاریخ‌نگاری',
    bookId: 'ritter',
    quoteOrContext: 'Historicism emphasizes that no universal eternal values can be imposed when analyzing past social structures.',
    quoteTranslation: 'تاریخی‌گری تاکید می‌کند که هنگام تحلیل ساختارهای اجتماعی گذشته نباید ارزش‌های جهان‌شمول و ابدی معاصر را تحمیل کرد.',
    historicalSignificance: 'مانع از قضاوت غیرتاریخی درباره عملکرد شاهان یا نهادهای سنتی ایران (مانند اقطاع یا حرمسرا) بر اساس معیارهای حقوقی مدرن می‌شود.',
    collocations: [
      'historical situatedness | موقعیت‌مندی تاریخی',
      'temporal specificity | ویژگی و تعین زمانی',
      'anti-teleological stance | رویکرد ضد غایت‌انگاری'
    ],
    collocationsList: [
      { en: 'historical situatedness', fa: 'جای‌گیری در بستر زمان تاریخی' },
      { en: 'temporal specificity', fa: 'تعین و ویژگی زمانی یک رخداد' },
      { en: 'anti-teleological stance', fa: 'موضع ضد غایت‌انگاری' }
    ],
    relatedTerms: ['Anachronism', 'Relativism', 'Contextualism']
  },
  {
    id: 'annales-school',
    term: 'Annales School',
    ipa: '/æˈnɑːl skuːl/',
    persianMeaning: 'مکتب آنال (تاریخ ساختاری و درازمدت)',
    simpleExplanationFa: 'مورخان این مکتب فرانسوی می‌گویند: "جنگ‌ها و پادشاهان فقط کف روی آب اقیانوس هستند؛ اصل تاریخ، عمق آب یعنی جغرافیا، آب و هوا، شیوه کشاورزی، قنات‌ها و ذهنیت مردم در طی چند قرن است!" آثار لمبتون درباره ایران نمونه کامل این نوع تاریخ است.',
    academicDefinitionEn: 'A pioneering school of 20th-century French historiography that shifted focus from political-diplomatic narrative (histoire événementielle) toward long-term socio-economic structures, geography, and mentalities (longue durée).',
    academicDefinitionFa: 'مکتب تاثیرگذار تاریخ‌نگاری فرانسوی (مارک بلوک، لوسین فور، فرنان برودل) که کانون پژوهش را از وقایع‌نگاری سیاسی شاهان و جنگ‌ها به سوی ساختارهای اقلیمی، اجتماعی، اقتصادی و ذهنیت جمعی در «درازمدت» برد.',
    category: 'historiography',
    categoryFa: 'نظریه و تاریخ‌نگاری',
    bookId: 'green-troup',
    quoteOrContext: 'The Annales historians rejected traditional political narrative in favor of total history grounded in geography and economics.',
    quoteTranslation: 'مورخان مکتب آنال روایت سیاسی سنتی را به نفع «تاریخ تام» متکی بر جغرافیا و اقتصاد کنار گذاشتند.',
    historicalSignificance: 'آثاری چون پژوهش‌های لمبتون و ویلم فلور مستقیماً متاثر از این رهیافت ساختاری و مطالعه شرایط اقلیمی و مادی فلات ایران هستند.',
    collocations: [
      'longue durée | دیرپایی و زمان درازمدت',
      'histoire totale | تاریخ فراگیر و کل‌نگر',
      'structural history | تاریخ ساختاری'
    ],
    collocationsList: [
      { en: 'longue durée', fa: 'زمان درازمدت تاریخی (قرن‌ها)' },
      { en: 'histoire totale', fa: 'تاریخ تام / تاریخ فراگیر جامعه' },
      { en: 'structural history', fa: 'تاریخ ساختارهای اقتصادی-اجتماعی' }
    ],
    relatedTerms: ['Microhistory', 'Quantification', 'Positivism']
  },
  {
    id: 'presentism',
    term: 'Presentism',
    ipa: '/ˈprɛzəntɪzəm/',
    persianMeaning: 'اکنون‌زدگی (دیدن گذشته با عینک دنیای امروز)',
    simpleExplanationFa: 'یکی از بزرگ‌ترین اشتباهات دانشجویان تاریخ! این یعنی فکر کنیم مردم ۵۰۰ سال پیش هم مثل ما در قرن ۲۱ فکر می‌کردند و با ملاک‌های امروزی (حقوق بشر، برابری جنسیتی، ناسیونالیسم) آنها را توبیخ یا تحسین کنیم.',
    academicDefinitionEn: 'An uncritical adherence to present-day attitudes, moral paradigms, and modern sociological concepts, projecting them erroneously onto the past.',
    academicDefinitionFa: 'خطای معرفتی و تاریخ‌نگارانه رایج که در آن مفاهیم، ارزش‌ها و هنجارهای اخلاقی دنیای معاصر به کنشگران و رخدادهای سده‌های پیشین نسبت داده می‌شود.',
    category: 'historiography',
    categoryFa: 'نظریه و تاریخ‌نگاری',
    bookId: 'munslow',
    quoteOrContext: 'Presentism distorts historical reality by reducing the distinct alterity of the past to a mere anticipation of our present.',
    quoteTranslation: 'اکنون‌زدگی با فروکاستن بیگانگی و تمایز گذشته به پیش‌درآمدی بر وضعیت کنونی ما، واقعیت تاریخی را تحریف می‌کند.',
    historicalSignificance: 'مثال رایج در تاریخ ایران: نسبت دادن هویت «دولت-ملت مدرن» به امپراتوری‌های صفوی یا سامانی به صورت آناکرونیستی.',
    collocations: [
      'presentist bias | سوگیری اکنون‌زده',
      'anachronistic projection | فرافکنی نابه‌هنگام تاریخی'
    ],
    collocationsList: [
      { en: 'presentist bias', fa: 'سوگیری و پیش‌داوری اکنون‌گرایانه' },
      { en: 'anachronistic projection', fa: 'نسبت دادن مفاهیم امروزی به گذشته' }
    ],
    relatedTerms: ['Anachronism', 'Whig History', 'Teleology']
  },
  {
    id: 'teleology',
    term: 'Teleology (Teleological History)',
    ipa: '/ˌtiːliˈɒlədʒi/',
    persianMeaning: 'غایت‌انگاری (گذشته را پیش‌درآمد اجباری آینده دانستن)',
    simpleExplanationFa: 'یعنی فکر کنیم کل تاریخ مثل یک ریل قطار به سمتی مشخص و اجتناب‌ناپذیر می‌رفته است. مثلاً بگوییم کل حوادث دوران قاجار حتماً و جبراً باید به انقلاب مشروطه می‌رسید، در حالی که در هر مقطع ممکن بود سرنوشت دیگری رقم بخورد.',
    academicDefinitionEn: 'The interpretation of history in terms of inevitable progression toward a predetermined end, destination, or destiny.',
    academicDefinitionFa: 'رویکردی در فلسفه تاریخ که تاریخ را حرکت جبری، پیوسته و ناگزیر رویدادها به سوی یک هدف از پیش‌تعیین‌شده (مثل انقلاب یا تجدد) می‌داند و وقایع گذشته را صرفاً مقدمه آن هدف تلقی می‌کند.',
    category: 'historiography',
    categoryFa: 'نظریه و تاریخ‌نگاری',
    bookId: 'munslow',
    quoteOrContext: 'Teleological narratives construct a linear chain of causation leading inevitably to the contemporary nation-state.',
    quoteTranslation: 'روایت‌های غایت‌انگارانه زنجیره‌ای خطی از علیت می‌سازند که ناگزیر به دولت-ملت معاصر ختم می‌شود.',
    historicalSignificance: 'در تاریخ‌نگاری عصر قاجار و مشروطه، منتقدان هشدار می‌دهند نباید کل حوادث قرن ۱۹ را صرفاً مقدمه جبری جنبش مشروطه تفسیر کرد.',
    collocations: [
      'teleological narrative | روایت غایت‌انگارانه',
      'linear progression | پیشرفت تک‌خطی'
    ],
    collocationsList: [
      { en: 'teleological narrative', fa: 'روایت تاریخ مبتنی بر غایت از پیش تعیین‌شده' },
      { en: 'linear progression', fa: 'پیشرفت خطی و پیوسته تاریخ' }
    ],
    relatedTerms: ['Whig History', 'Determinism', 'Linearity']
  },

  // --- تمدن و جهان اسلام (هاجسن) ---
  {
    id: 'islamicate',
    term: 'Islamicate',
    ipa: '/ɪsˈlɑːmɪkeɪt/',
    persianMeaning: 'اسلامیزه / تمدنی-فرهنگی (نه صرفاً دینی)',
    simpleExplanationFa: 'مارشال هاجسن این واژه را ساخت تا فرق بگذارد بین "دین اسلام" (Islamic) و "کل تمدن، هنر، شعر، دربار و دانش مشترک" (Islamicate) که مسیحیان، یهودیان، زرتشتیان و ایرانیان همگی در ساختنش نقش داشتند.',
    academicDefinitionEn: 'A term coined by Marshall Hodgson referring to the cultural, artistic, and social complex historically associated with Islam as a civilization, including non-Muslim participants, distinguished from strictly religious Islamic doctrine.',
    academicDefinitionFa: 'اصطلاح ابداعی مارشال هاجسن برای تفکیک ساحت تمدنی و فرهنگی مشترک سرزمین‌های فتح‌شده (هنر، ادبیات، دیوان، فلسفه با مشارکت مسیحیان، زرتشتیان و یهودیان) از باورهای صرفاً فقهی-مذهبی (Islamic).',
    category: 'islamicate',
    categoryFa: 'تمدن و جهان اسلام',
    bookId: 'hodgson',
    quoteOrContext: 'I use "Islamicate" for the culture of the high society, which included Christians and Jews alongside Muslims.',
    quoteTranslation: 'من اصطلاح «اسلامیزه» را برای فرهنگ طبقه نخبگان به کار می‌برم، که مسیحیان و یهودیان را در کنار مسلمانان در بر می‌گرفت.',
    historicalSignificance: 'این اصطلاح در متون ایران‌شناسی اجازه می‌دهد بدون اختلاط مذهب با دستاوردهای علمی و دیوانی ایرانیان، تمدن آن دوره به درستی تبیین شود.',
    collocations: [
      'Islamicate civilization | تمدن اسلامیزه',
      'literary cosmopolitanism | جهان‌وطنی ادبی'
    ],
    collocationsList: [
      { en: 'Islamicate civilization', fa: 'تمدن و فرهنگ گسترده جهان اسلام' },
      { en: 'literary cosmopolitanism', fa: 'جهان‌وطنی و فراملیتی ادبی' }
    ],
    relatedTerms: ['Persianate', 'Islamdom', 'Cosmopolitanism']
  },
  {
    id: 'persianate',
    term: 'Persianate (Persianate World)',
    ipa: '/pɜːrʒəneɪt/',
    persianMeaning: 'قلمرو ایرانی‌مآب (جهان زبان و ادب فارسی)',
    simpleExplanationFa: 'قلمرو پهناوری از ترکیه و آناتولی تا دهلی و هند و سمرقند که پادشاهانش شاید ترک یا مغول بودند، اما برای کشورداری، منشی‌گری، شعر، دیپلماسی و اخلاق درباری، فقط از فرهنگ و زبان فارسی استفاده می‌کردند!',
    academicDefinitionEn: 'Refers to societies that were influenced by or based on the Persian language, literature, administrative culture, and court etiquette from Anatolia to Central and South Asia.',
    academicDefinitionFa: 'جهان پهناور فرهنگی و زبانی از آناتولی سلجوقی تا گورکانیان هند و آسیای میانه که در آن زبان فارسی، ادب دیوانی، بوطیقای شعری و آیین کشورداری ایرانی زبان معیار فرهنگ و دیپلماسی بود.',
    category: 'islamicate',
    categoryFa: 'تمدن و جهان اسلام',
    bookId: 'hodgson',
    quoteOrContext: 'The Persianate tradition became the common medium for high literature, administration, and ethical discourse across most of non-Arab Islamdom.',
    quoteTranslation: 'سنت ایرانی‌مآب به واسطه مشترک ادبیات متعالی، امور دیوانی و گفتمان اخلاقی در اکثر بخش‌های غیرعرب جهان اسلام تبدیل شد.',
    historicalSignificance: 'مفهوم مرکزی در فهم تاریخ صفوی، عثمانی و گورکانی که پیوستگی تاریخی فلات ایران با همسایگانش را روشن می‌کند.',
    collocations: [
      'Persianate world | جهان فرهنگی ایران',
      'bureaucratic idiom | زبان دیوان‌سالاری',
      'courtly ethos | آیین و اخلاق درباری'
    ],
    collocationsList: [
      { en: 'Persianate world', fa: 'جهان و سپهر فرهنگی ایرانی‌مآب' },
      { en: 'bureaucratic idiom', fa: 'زبان و اسلوب نگارش دیوانی' },
      { en: 'courtly ethos', fa: 'آداب، رسوم و اخلاق درباری' }
    ],
    relatedTerms: ['Islamicate', 'Adab Culture', 'Cosmopolis']
  },
  {
    id: 'military-patronage-state',
    term: 'Military Patronage State',
    ipa: '/ˈmɪlɪtəri ˈpeɪtrənɪdʒ steɪt/',
    persianMeaning: 'دولت نظامی حامی (حکومت عشایری-ارضی پساایلخانی)',
    simpleExplanationFa: 'الگوی هاجسن برای حکومت‌هایی مثل ایلخانان، تیموریان و صفویه: یک خاندان نظامی عشایری حکومت می‌کردند و زمین‌ها و درآمدهای کشاورزی را بین فرماندهان ارتش تقسیم می‌کردند تا ارتش به آنها وفادار بماند.',
    academicDefinitionEn: 'Hodgsons analytical model for post-Mongol Middle Eastern empires characterized by a ruling military elite allocating land revenue to soldiers in exchange for loyal dynastic service.',
    academicDefinitionFa: 'الگوی تبیینی هاجسن برای ساختار دولت‌های پساایلخانی که در آن یک اقلیت نظامی-عشایری حاکم، منابع مالی و درآمدهای ارضی را به ازای وفاداری نظامی و حفظ نظم میان فرماندهان توزیع می‌کردند.',
    category: 'islamicate',
    categoryFa: 'تمدن و جهان اسلام',
    bookId: 'hodgson',
    quoteOrContext: 'In the military patronage state, public authority was legitimized through dynastic clan power and agrarian revenue allocation.',
    quoteTranslation: 'در دولت نظامی حامی، اقتدار عمومی از طریق قدرت طایفه‌ای دودمان و تخصیص عایدات کشاورزی مشروعیت می‌یافت.',
    historicalSignificance: 'چهارچوب تفسیری استاندارد برای فهم ساختار قدرت در ادوار ایلخانی، تیموری، آق‌قویونلو و اوایل صفویه.',
    collocations: [
      'nomadic dynasticism | دودمان‌گرایی عشایری',
      'revenue prebend | عایدی و مواجب ارضی'
    ],
    collocationsList: [
      { en: 'nomadic dynasticism', fa: 'سلطنت مبتنی بر طوایف عشایری' },
      { en: 'revenue prebend', fa: 'مواجب ناشی از درآمدهای محلی' }
    ],
    relatedTerms: ['Iqta', 'Tuyul', 'Patrimonialism']
  },

  // --- نظام‌های ارضی و روابط مالک و دهقان (لمبتون) ---
  {
    id: 'tuyul',
    term: 'Tuyul (Tiqul)',
    ipa: '/tuːˈjuːl/',
    persianMeaning: 'تیول (حق وصول موقت مالیات یا محصول یک منطقه)',
    simpleExplanationFa: 'شاهان صفوی و قاجار چون پول نقد نداشتند به وزرا و فرماندهان حقوق بدهند، می‌گفتند: "فلان روستا با دهقانانش تیول تو! برو مالیات گندم و جو را خودت برای خرج سپاهت بردار". این واگذاری موقت بود نه مالکیت قطعی زمین.',
    academicDefinitionEn: 'A conditional assignation of land, revenues, or taxes by the crown to an individual in lieu of salary or as a royal grant in late medieval and early modern Iran.',
    academicDefinitionFa: 'واگذاری مشروط حق بهره‌برداری از عواید یک قطعه زمین، روستا یا مالیات‌های مشخص به صاحب‌منصبان دیوانی یا سران لشکری به جای مواجب نقدی در دوران تیموری، صفوی و قاجار.',
    category: 'agrarian',
    categoryFa: 'نظام‌های ارضی و کشاورزی',
    bookId: 'lambton-landlord',
    quoteOrContext: 'The tuyul differed from full private ownership in that it was essentially a grant of the right to collect revenue rather than alienable property.',
    quoteTranslation: 'تیول با مالکیت خصوصی تمام‌عیار تفاوت داشت، چرا که اساساً واگذاری حق وصول عایدات بود نه مالکیت قابل فروش زمین.',
    historicalSignificance: 'مهم‌ترین اهرم مالیاتی-نظامی دولت‌های صفوی و قاجار که مانع از رشد طبقه سرمایه‌دار مستقل و شکل‌گیری مالکیت قطعی زمین شد.',
    collocations: [
      'tuyul grant | فرمان واگذاری تیول',
      'tuyuldar extraction | بهره‌کشی تیول‌دار',
      'revocable tenure | تصدی فسخ‌پذیر'
    ],
    collocationsList: [
      { en: 'tuyul grant', fa: 'فرمان واگذاری و اعطای تیول' },
      { en: 'tuyuldar extraction', fa: 'وصول عایدات توسط تیول‌دار' },
      { en: 'revocable tenure', fa: 'تصرف مشروط و ابطال‌پذیر توسط شاه' }
    ],
    relatedTerms: ['Iqta', 'Soyurghal', 'Arbab-o-Rayat']
  },
  {
    id: 'iqta',
    term: 'Iqta (Iqta al-Istighlal)',
    ipa: '/ɪkˈtɑː/',
    persianMeaning: 'اقطاع (واگذاری خراج زمین در ازای خدمت لشکری سلجوقی)',
    simpleExplanationFa: 'خواجه نظام‌الملک طوسی در عهد سلجوقیان برای اینکه ارتش حقوق دائمی داشته باشد، زمین‌های کشور را قطعه‌قطعه بین فرماندهان ترکمان تقسیم کرد (اقطاع) تا با خراج آن سوارکاران جنگی را آماده نگه دارند.',
    academicDefinitionEn: 'The traditional Islamic administrative grant of the right to collect agricultural tax (kharaj) from a delineated parcel of land in return for military or civil service, prevalent under the Seljuqs.',
    academicDefinitionFa: 'نهاد واگذاری حق جمع‌آوری خراج زمین‌های کشاورزی در ازای خدمات لشکری یا دیوانی که به ویژه توسط خواجه نظام‌الملک طوسی در عهد سلجوقیان نهادینه شد و شاکله ارضی ایران میانه را رقم زد.',
    category: 'agrarian',
    categoryFa: 'نظام‌های ارضی و کشاورزی',
    bookId: 'lambton-continuity',
    quoteOrContext: 'Nizam al-Mulk sought to regulate the iqta system so that muqtas would not oppress the peasantry beyond the statutory levies.',
    quoteTranslation: 'خواجه نظام‌الملک کوشید نظام اقطاع را چنان قاعده بیاورد که مقطعان فراتر از مالیات‌های مقرر بر دهقانان ستم روا ندارند.',
    historicalSignificance: 'ریشه و پیش‌درآمد ساختار تیول‌داری در دوره‌های بعدی و کانون منازعه قدرت بین سلاطین و امرای ترکمان.',
    collocations: [
      'military iqta | اقطاع نظامی',
      'iqta tenure | تصدی اقطاعی',
      'fiscal decentralization | تمرکززدایی مالیاتی'
    ],
    collocationsList: [
      { en: 'military iqta', fa: 'اقطاع لشکری و سپاهی' },
      { en: 'iqta tenure', fa: 'تصدی و در اختیار داشتن اقطاع' },
      { en: 'fiscal decentralization', fa: 'تمرکززدایی از دریافت مالیات' }
    ],
    relatedTerms: ['Tuyul', 'Kharaj', 'Soyurghal']
  },
  {
    id: 'soyurghal',
    term: 'Soyurghal',
    ipa: '/soʊˈjʊərɡɑːl/',
    persianMeaning: 'سیورغال (بخشش موروثی و کاملاً معاف از مالیات)',
    simpleExplanationFa: 'برخلاف تیول که شاه هر وقت می‌خواست پس می‌گرفت، سیورغال ارثی و ابدی بود و هیچ مأمور مالیاتی یا داروغه حق نداشت پای خود را در آن زمین بگذارد! معمولاً به سادات، علمای بزرگ یا سرداران خاص بخشیده می‌شد.',
    academicDefinitionEn: 'A hereditary, tax-exempt land grant of Mongol and Timurid origin, continued into the Safavid period, conferring judicial and fiscal immunity upon the grantee.',
    academicDefinitionFa: 'عطیه و بخشش ارضی موروثی و معاف از مالیات با ریشه مغولی و ترکی که توسط ایلخانان و تیموریان و صفویان به سادات، علما یا سرداران بزرگ داده می‌شد و مصونیت کامل مالیاتی داشت.',
    category: 'agrarian',
    categoryFa: 'نظام‌های ارضی و کشاورزی',
    bookId: 'lambton-continuity',
    quoteOrContext: 'Unlike the temporary tuyul, the soyurghal was perpetual, hereditary, and often entailed judicial immunity for the holder.',
    quoteTranslation: 'برخلاف تیولِ موقتی، سیورغال همیشگی و موروثی بود و اغلب متضمن مصونیت قضایی برای صاحب آن می‌شد.',
    historicalSignificance: 'باعث تهی شدن خزاین سلاطین و انباشت اراضی پهناور معاف از خراج در دست نخبگان مذهبی و درباری گردید.',
    collocations: [
      'hereditary immunity | مصونیت موروثی',
      'tax exemption | معافیت مالیاتی',
      'imperial farman | فرمان همایونی'
    ],
    collocationsList: [
      { en: 'hereditary immunity', fa: 'مصونیت قضایی موروثی' },
      { en: 'tax exemption', fa: 'معافیت کامل از عوارض دیوانی' },
      { en: 'imperial farman', fa: 'فرمان سلطنتی برای واگذاری' }
    ],
    relatedTerms: ['Tuyul', 'Waqf', 'Muqataah']
  },
  {
    id: 'buneh',
    term: 'Buneh (Plough-Unit Team)',
    ipa: '/buːˈnɛ/',
    persianMeaning: 'بُنه (تیم هم‌یاری و کار گروهی دهقانان ایرانی)',
    simpleExplanationFa: 'چون در کویر و فلات ایران آب کم بود و یک دهقان به تنهایی نمی‌توانست قنات بکشد و جفت‌گاو شخم را اداره کند، چند دهقان یک "بُنه" تشکیل می‌دادند و با هم نوبتی آب می‌بردند و محصول را با ارباب نصف می‌کردند.',
    academicDefinitionEn: 'The indigenous Iranian socio-economic cooperative production unit in arid rural villages, organizing collective irrigation, ploughing, and harvest division.',
    academicDefinitionFa: 'واحد سنتی کار و تولید اشتراکی در روستاهای فلات خشک ایران که در آن گروهی از دهقانان برای مدیریت آب نوبتی، جفت‌گاو شخم و تقسیم محصول با مالک زمین متحد می‌شدند.',
    category: 'agrarian',
    categoryFa: 'نظام‌های ارضی و کشاورزی',
    bookId: 'lambton-landlord',
    quoteOrContext: 'The buneh was essentially a collective response to water scarcity and the technological demands of arid plateau cultivation.',
    quoteTranslation: 'بُنه در اصل پاسخی جمعی به کمبود آب و مقتضیات فناورانه کشت و کار در فلات خشک بود.',
    historicalSignificance: 'مهم‌ترین نمونه مردم‌شناختی بقای خُرده‌دهقانان در برابر هجوم مکرر ایل‌ها و خشکسالی‌های متوالی فلات مرکزی ایران.',
    collocations: [
      'agrarian cooperation | هم‌یاری کشاورزی',
      'water shareholder | حقابه‌بر'
    ],
    collocationsList: [
      { en: 'agrarian cooperation', fa: 'همکاری و تعاون تولیدی در روستا' },
      { en: 'water shareholder', fa: 'سهام‌دار آب و نوبت حقابه' }
    ],
    relatedTerms: ['Arbab-o-Rayat', 'Qanat', 'Mirab']
  },
  {
    id: 'arbab-o-rayat',
    term: 'Arbab-o-Ra\'yat (Landlord-Peasant Relationship)',
    ipa: '/ærˈbɑːb oʊ ræˈjæt/',
    persianMeaning: 'نظام ارباب و رعیتی (مزارعه سنتی پنج‌گانه)',
    simpleExplanationFa: 'شیوه اصلی زندگی روستاییان ایران تا زمان اصلاحات ارضی: ۵ عامل تولید وجود داشت (زمین، آب، گاو، بذر، نیروی کار). هر کس هر کدام را می‌آورد یک پنجم سهم محصول را می‌برد؛ چون ارباب زمین و آب را داشت، سهم اعظم غله مال او بود.',
    academicDefinitionEn: 'The traditional asymmetrical power and production dynamic in pre-modern Iranian rural society between landholders (arbab) and sharecroppers/peasants (rayat).',
    academicDefinitionFa: 'الگوی ساختاری مسلط روابط تولیدی در روستاهای ایران که در آن ارباب بر پایه عوامل پنج‌گانه تولید (زمین، آب، بذر، نیروی کار و گاو) بخش عمده محصول را تصاحب می‌کرد.',
    category: 'agrarian',
    categoryFa: 'نظام‌های ارضی و کشاورزی',
    bookId: 'lambton-landlord',
    quoteOrContext: 'The rayat had no legal security of tenure, leaving them vulnerable to arbitrary eviction by the landlord or his bailiff.',
    quoteTranslation: 'رعیت هیچ‌گونه امنیت حقوقی در تصرف زمین نداشت و این امر او را در برابر اخراج مستبدانه توسط ارباب یا مباشر آسیب‌پذیر می‌کرد.',
    historicalSignificance: 'ستون اصلی اقتصاد سنتی ایران که تا اصلاحات ارضی دهه ۱۳۴۰ پابرجا ماند و ساخت طبقاتی جامعه را تعریف می‌کرد.',
    collocations: [
      'sharecropping contract | قرارداد مزارعه',
      'five factors of production | عوامل پنج‌گانه تولید'
    ],
    collocationsList: [
      { en: 'sharecropping contract', fa: 'قرارداد سنتی سهم‌بری محصول' },
      { en: 'five factors of production', fa: 'عوامل پنج‌گانه تولید در فقه و عرف' }
    ],
    relatedTerms: ['Peasantry', 'Tuyul', 'Buneh']
  },

  // --- تشکیلات اداری، قضایی و نهادهای صفوی (ویلم فلور) ---
  {
    id: 'divan-begi',
    term: 'Divan-begi (Chief Secular Magistrate)',
    ipa: '/diːˈvɑːn ˈbɛɡi/',
    persianMeaning: 'دیوان‌بیگی (وزیر دادگستری و قاضی‌القضات عرف صفوی)',
    simpleExplanationFa: 'در ایران دو نوع قانون داشتیم: شرع (فقه اسلامی زیر نظر شیخ‌الاسلام) و عرف (قوانین شاه و مملکت زیر نظر دیوان‌بیگی). دیوان‌بیگی در کاخ چهل‌ستون می‌نشست و به قتل، سرقت و شکایات علیه حاکمان رسیدگی می‌کرد.',
    academicDefinitionEn: 'The supreme judicial officer in the Safavid administrative hierarchy responsible for customary law (urf), dealing with capital crimes and civil appeals throughout the realm.',
    academicDefinitionFa: 'عالی‌ترین مقام قضایی عرفی در ساختار اداری صفویه که در تالار چهل‌ستون یا درگاه شاهی به دعاوی سنگین جنایی، دادخواهی‌های عموم و موارد قانون عرف رسیدگی می‌کرد.',
    category: 'institutions',
    categoryFa: 'تشکیلات اداری صفوی',
    bookId: 'floor-institutions',
    quoteOrContext: 'The divan-begi served as the monarch\'s voice in secular jurisprudence, counterbalancing the ecclesiastical authority of the Shaykh al-Islam.',
    quoteTranslation: 'دیوان‌بیگی به عنوان زبان شاه در قضای عرفی عمل می‌کرد و وزنه‌ای در برابر اقتدار شرعی شیخ‌الاسلام به شمار می‌رفت.',
    historicalSignificance: 'نماد دوگانگی قضایی (شرع در برابر عرف) در ساختار حکمرانی پیشامدرن ایران.',
    collocations: [
      'customary jurisdiction | صلاحیت قضای عرفی',
      'appeals magistrate | مرجع رسیدگی به دادخواهی‌ها'
    ],
    collocationsList: [
      { en: 'customary jurisdiction', fa: 'قلمرو و اختیارات قضای عرفی' },
      { en: 'appeals magistrate', fa: 'دادرس عالی رسیدگی به شکایات' }
    ],
    relatedTerms: ['Shaykh al-Islam', 'Urf', 'Sadr']
  },
  {
    id: 'mustawfi-al-mamalik',
    term: 'Mustawfi al-Mamalik (Grand Accountant General)',
    ipa: '/mʊstoʊˈfiː æl mæˈmɑːlɪk/',
    persianMeaning: 'مستوفی‌الممالک (وزیر دارایی و حسابدار کل کشور)',
    simpleExplanationFa: 'مستوفیان با یک خط رمزآلود به نام «خط سیاق» حساب کتاب کل کشور را می‌نوشتند. جز خودشان هیچ‌کس حتی خود شاه هم از آن سر درنمی‌آورد! برای همین مستوفی‌الممالک یکی از قدرتمندترین رجال ایران بود.',
    academicDefinitionEn: 'The head of the royal treasury and financial administration (Bureau of Revenue) in Safavid and Qajar Iran, responsible for auditing provincial accounts and tax assessments.',
    academicDefinitionFa: 'رئیس کل دیوان استیفا و حسابداری کشور در عهد صفوی و قاجار که اسناد مالی، مواجب‌نامه‌ها، برات‌ها و وصول مالیات ایالات را با خط مخصوص سیاق ثبت و ضبط می‌کرد.',
    category: 'institutions',
    categoryFa: 'تشکیلات اداری صفوی',
    bookId: 'floor-institutions',
    quoteOrContext: 'Without the seal and notation of the Mustawfi al-Mamalik, no imperial payment or salary voucher could be honored by the provincial treasuries.',
    quoteTranslation: 'بدون مهر و علامت توشیح مستوفی‌الممالک، هیچ حواله یا برات مواجبی در خزانه‌های ولایتی کارساز نبود.',
    historicalSignificance: 'این منصب قرن‌ها در خاندان‌های منشی اصیل موروثی بود و انحصار خط سیاق قدرت عجیبی به دیوان‌سالاران اهل قلم می‌بخشید.',
    collocations: [
      'siyaq notation | خط رمزی و حسابداری سیاق',
      'fiscal ledger | دفتر مالیاتی و دخل‌وخرج'
    ],
    collocationsList: [
      { en: 'siyaq notation', fa: 'خط مخصوص حسابداری و ارقام سیاق' },
      { en: 'fiscal ledger', fa: 'کتابچه و طومار دخل و خرج دیوانی' }
    ],
    relatedTerms: ['Ahl-e Qalam', 'Divan', 'Fiscal Administration']
  },
  {
    id: 'kassa-vs-mamalek',
    term: 'Khassah vs. Mamalik Lands',
    ipa: '/ˈxɑːsə vɜːrsəs mæˈmɑːlɪk/',
    persianMeaning: 'اراضی خاصه در برابر ممالک (املاک خصوصی شاه در برابر ایالات)',
    simpleExplanationFa: 'شاه عباس برای اینکه قدرت خان‌های قزلباش را بشکند، زمین‌ها را دو قسمت کرد: اراضی خاصه (که سود ابریشم و مالیاتش یکراست می‌رفت توی جیب شخصی شاه برای خرید اسلحه و حقوق ارتش شخصی) و اراضی ممالک (که دست حاکمان محلی بود).',
    academicDefinitionEn: 'The institutional division of territory in the Safavid state between royal crown domains (khassah), managed directly for the Shah\'s privy purse, and provincial state territories (mamalik).',
    academicDefinitionFa: 'تقسیم بنیادین سرزمینی در عهد صفوی میان زمین‌های تاج و تخت (خاصه) که درآمدهایش مستقیم به خزانه شاه واریز می‌شد، و ایالات دولتی (ممالک) که حکام قزلباش خراج آن را صرف ارتش‌های ولایتی می‌کردند.',
    category: 'fiscal',
    categoryFa: 'مالیه و اقتصاد تاریخی',
    bookId: 'floor-fiscal',
    quoteOrContext: 'Shah Abbas I famously converted extensive mamalik lands into khassah to centralize power and finance his standing slave army.',
    quoteTranslation: 'شاه عباس اول بخش اعظم اراضی ممالک را به خاصه تبدیل کرد تا قدرت را متمرکز سازد و ارتش غلامان دائمی خود را تأمین مالی کند.',
    historicalSignificance: 'اصلی‌ترین سازوکار گذار صفویان از کنفدراسیون نامتمرکز عشایری به دولت متمرکز مطلقه.',
    collocations: [
      'privy purse | خزانه و جیب خاصه شاه',
      'standing army | ارتش دائمی دولتی'
    ],
    collocationsList: [
      { en: 'privy purse', fa: 'خزانه اختصاصی و دخل و خرج دربار' },
      { en: 'standing army', fa: 'قشون منظم و دائمی شاهی' }
    ],
    relatedTerms: ['Gholam', 'Tuyul', 'Centralization']
  },

  // --- تاریخ معاصر و دولت قاجار (عباس امانت) ---
  {
    id: 'patrimonialism',
    term: 'Patrimonialism (Neo-patrimonialism)',
    ipa: '/ˌpætrɪˈmoʊniəlɪzəm/',
    persianMeaning: 'حکومت پاتریمونیال (کشورداری به مثابه خانه شخصی شاه)',
    simpleExplanationFa: 'ماکس وبر و عباس امانت می‌گویند ناصرالدین‌شاه ایران را مثل خانه و حیاط خلوت شخصی خودش اداره می‌کرد! هیچ مرزی بین خزانه مملکت و جیب شاه نبود؛ صدراعظم مثل پیشخدمت ارشد بود و والیان استان‌ها مثل مستأجرانی بودند که باید برای حفظ مقامشان به شاه پیشکش می‌دادند.',
    academicDefinitionEn: 'A Weberian concept used by Abbas Amanat to explain the Qajar monarchy, wherein political authority is exercised as a personal extension of the ruler\'s household, blurring public treasury with private wealth.',
    academicDefinitionFa: 'مفهوم وبری مورد استفاده عباس امانت برای تبیین شیوه حکمرانی قاجار، که در آن کل مملکت به عنوان مایملک شخصی پادشاه اداره می‌شد و مرز روشنی میان خزانه عمومی و جیب شاه وجود نداشت.',
    category: 'modern',
    categoryFa: 'تاریخ معاصر و دولت قاجار',
    bookId: 'amanat-pivot',
    quoteOrContext: 'Nasir al-Din Shah viewed the state apparatus as an extension of his own imperial household, balancing courtiers like household retainers.',
    quoteTranslation: 'ناصرالدین شاه دستگاه دولت را امتداد خانه شاهی خود می‌دانست و درباریان را مانند چاکران خانگی در تعادل نگه می‌داشت.',
    historicalSignificance: 'کلید فهم ناتوانی ساختار قاجار در ایجاد بوروکراسی مدرن و اصلاحات نهادی تا پیش از مشروطه.',
    collocations: [
      'patrimonial rule | حکومت‌داری پاتریمونیال',
      'household governance | شیوه کشورداری اندرونی و خاندانی'
    ],
    collocationsList: [
      { en: 'patrimonial rule', fa: 'شیوه حکمرانی موروثی و پدرسالارانه' },
      { en: 'household governance', fa: 'اداره کشور مانند یک خانواده بزرگ سنتی' }
    ],
    relatedTerms: ['Sultanism', 'Charisma', 'Autocracy']
  },
  {
    id: 'millenarianism',
    term: 'Millenarianism (Messianic Movements)',
    ipa: '/ˌmɪlɪˈnɛəriənɪzəm/',
    persianMeaning: 'هزاره‌گرایی / آخرالزمان‌باوری (جنبش‌های موعودگرایی سده ۱۹)',
    simpleExplanationFa: 'در سال ۱۲۶۰ قمری، درست هزار سال از غیبت امام زمان می‌گذشت. مردم که از فقر، وبا و ستم خسته شده بودند، منتظر منجی بودند تا دنیا را زیر و رو کند. این باور منشأ شورش‌های گسترده و جنبش باب در عهد قاجار شد.',
    academicDefinitionEn: 'The belief by a religious or political movement in an imminent major transformation of society, marked by the advent of a messianic figure.',
    academicDefinitionFa: 'باور به ظهور قریب‌الوقوع منجی موعود و دگرگونی بنیادین نظم عالم که در سده نوزدهم ایران (به‌ویژه مقارن با هزارمین سال غیبت امام زمان در ۱۲۶۰ ق) زمینه‌ساز جنبش بابیه و بحران‌های مشروعیت قاجار گردید.',
    category: 'modern',
    categoryFa: 'تاریخ معاصر و دولت قاجار',
    bookId: 'amanat-modern',
    quoteOrContext: 'The nineteenth century witnessed a profound surge in Shia millenarian fervor, fueled by social dislocation and foreign encroachment.',
    quoteTranslation: 'سده نوزدهم شاهد اوج‌گیری عمیق شور هزاره‌گرایانه شیعی بود که بر اثر گسست‌های اجتماعی و دست‌اندازی خارجی تشدید می‌شد.',
    historicalSignificance: 'محور اصلی تحلیل امانت درباره جنبش‌های پیشامشروطه و چالش‌های مذهبی دربار ناصری.',
    collocations: [
      'messianic expectation | انتظار موعودگرایانه',
      'eschatological upheaval | خیزش آخرالزمانی'
    ],
    collocationsList: [
      { en: 'messianic expectation', fa: 'انتظار و چشم‌داشت ظهور منجی' },
      { en: 'eschatological upheaval', fa: 'آشوب و قیام با انگیزه‌های فرجام‌شناختی' }
    ],
    relatedTerms: ['Charismatic Authority', 'Babi Movement', 'Eschatology']
  },
  {
    id: 'andarun-vs-birun',
    term: 'Andarun vs. Birun (Court Politics)',
    ipa: '/ændæˈruːn vɜːrsəs biːˈruːn/',
    persianMeaning: 'سیاست اندرونی در برابر بیرونی (حرمسرا علیه دربار)',
    simpleExplanationFa: 'امیرکبیر در بخش بیرونی (دفتر نخست‌وزیری) تصمیمات اصلاحی می‌گرفت، اما در اندرونی (حرمسرا)، مادر شاه (مهدعلیا) و زنان قدرتمند با دسیسه‌چینی تصمیمات او را لغو می‌کردند و در نهایت حکم قتلش را گرفتند!',
    academicDefinitionEn: 'The spatial and political duality in the Qajar palace where the female and domestic realm (andarun) operated as an autonomous center of intrigue and lobbying affecting the public sphere (birun).',
    academicDefinitionFa: 'دوگانگی ساختاری در دربار قاجار که در آن حرمسرای شاهی (اندرونی به رهبری مهدعلیا یا انیس‌الدوله) کانون رایزنی‌های پنهان، عزل و نصب وزرا و رقابت با محافل عمومی دیوانی (بیرونی) بود.',
    category: 'modern',
    categoryFa: 'تاریخ معاصر و دولت قاجار',
    bookId: 'amanat-pivot',
    quoteOrContext: 'Decisions made within the secluded halls of the andarun frequently undermined the grand reform plans conceived in the administrative birun.',
    quoteTranslation: 'تصمیماتی که در تالارهای پس‌پرده اندرونی گرفته می‌شد، مکرراً برنامه‌های کلان اصلاحی تدوین‌شده در بیرونی اداری را بی‌اثر می‌کرد.',
    historicalSignificance: 'نشان می‌دهد برای فهم تحولاتی مثل عزل امیرکبیر، بررسی مناسبات درون حرمسرا نقشی سرنوشت‌ساز دارد.',
    collocations: [
      'harem politics | مناسبات سیاسی حرمسرا',
      'palace intrigue | دسیسه‌های دربار'
    ],
    collocationsList: [
      { en: 'harem politics', fa: 'سیاست‌ورزی و رقابت‌های درون حرمسرا' },
      { en: 'palace intrigue', fa: 'دسیسه و توطئه‌های درباری' }
    ],
    relatedTerms: ['Patrimonialism', 'Qajar Court', 'Regency']
  },
  {
    id: 'clerical-hierocracy',
    term: 'Clerical Hierocracy (Marja\'iyyat)',
    ipa: '/ˈklɛrɪkəl haɪəˈrɒkrəsi/',
    persianMeaning: 'سلسله‌مراتب روحانیت شیعه و نهاد مرجعیت',
    simpleExplanationFa: 'چون مجتهدان شیعه خمس و سهم امام را مستقیماً از بازاریان و مردم می‌گرفتند و حقوق‌بگیر شاه نبودند، استقلال مالی پیدا کردند و توانستند مثل ماجرای قرارداد تنباکو با یک خط فتوا کل تصمیمات شاه و قراردادهای بریتانیا را لغو کنند!',
    academicDefinitionEn: 'The institutionalized authority of high-ranking Shia jurists who achieved financial and doctrinal independence from the state through religious dues.',
    academicDefinitionFa: 'شکل‌گیری اقتدار نهادمند مجتهدان و مراجع تقلید شیعه (با پیروزی مکتب اصولی بر اخباری) که به پشتوانه وجوهات شرعی و پایگاه مردمی، نهادی رقیب و خودمختار در برابر سلطنت پدید آوردند.',
    category: 'modern',
    categoryFa: 'تاریخ معاصر و دولت قاجار',
    bookId: 'amanat-modern',
    quoteOrContext: 'By the late nineteenth century, the Shia hierocracy claimed spiritual sovereignty that rivaled the secular pretensions of the Qajar crown.',
    quoteTranslation: 'در اواخر سده نوزدهم، سلسله‌مراتب روحانیت مدعی حاکمیت معنوی شد که هماورد دعوی‌های عرفی تاج و تخت قاجار بود.',
    historicalSignificance: 'مبنای پیروزی در جنبش تنباکو و پیشبرد انقلاب مشروطه بر پایه فتوای مراجع نجف.',
    collocations: [
      'doctrinal autonomy | استقلال فقهی و مذهبی',
      'spiritual hegemony | نفوذ و سروری معنوی'
    ],
    collocationsList: [
      { en: 'doctrinal autonomy', fa: 'استقلال در فتوا و استنباط احکام' },
      { en: 'spiritual hegemony', fa: 'برتری و مرجعیت معنوی بر جامعه' }
    ],
    relatedTerms: ['Usulism', 'Constitutionalism', 'Fatwa']
  },
  {
    id: 'concessions',
    term: 'Imperial Concessions',
    ipa: '/kənˈsɛʃənz/',
    persianMeaning: 'امتیازات استعماری (فروش انحصارات کشور به روس و انگلیس)',
    simpleExplanationFa: 'شاهان قاجار برای تأمین مخارج سفرهای فرنگ یا پر کردن خزانه خالی، انحصار توتون و تنباکو (رژی)، شیلات شمال یا نفت (دارسی) را ارزان به خارجی‌ها واگذار می‌کردند که در نهایت جرقه اعتراضات ملی و مشروطه را زد.',
    academicDefinitionEn: 'Monopolistic economic and infrastructure privileges granted by financially desperate Qajar rulers to British and Russian commercial interests.',
    academicDefinitionFa: 'حقوق انحصاری اقتصادی، ترانزیتی و گمرکی که شاهان قاجار در ازای وام‌های مقطعی یا پیش‌پرداخت به سرمایه‌گذاران روس و بریتانیا اعطا کردند و حاکمیت اقتصادی کشور را در معرض انقیاد قرار داد.',
    category: 'modern',
    categoryFa: 'تاریخ معاصر و دولت قاجار',
    bookId: 'amanat-modern',
    quoteOrContext: 'The surrender of sovereign monopolies through concessions ignited the nationalist resistance of Iranian merchants and clerics alike.',
    quoteTranslation: 'واگذاری انحصارهای حاکمیتی از طریق قراردادهای امتیاز، آتش مقاومت ملی بازرگانان و علمای ایران را به‌طور همزمان برانگیخت.',
    historicalSignificance: 'محرک مستقیم خیزش‌های استقلال‌طلبانه از نهضت تحریم تنباکو (۱۸۹۱) تا ملی شدن صنعت نفت (۱۹۵۱).',
    collocations: [
      'monopoly contract | قرارداد انحصاری',
      'mercantile backlash | خشم و واکنش بازرگانان'
    ],
    collocationsList: [
      { en: 'monopoly contract', fa: 'قرارداد انحصار تجارت یا استخراج' },
      { en: 'mercantile backlash', fa: 'اعتراض و مقاومت طبقه تجار بازار' }
    ],
    relatedTerms: ['Tobacco Protest', 'Sovereignty', 'Colonialism']
  }
];
