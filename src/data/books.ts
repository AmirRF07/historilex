import { BookReference } from '../types';

export const REFERENCE_BOOKS: BookReference[] = [
  {
    id: 'munslow',
    title: 'The Routledge Companion to Historical Studies',
    author: 'Alun Munslow',
    publisherYear: 'Routledge (2000 / 2006)',
    searchQuery: '"The Routledge Companion to Historical Studies" "Munslow" filetype:pdf',
    category: 'نظریه و روش‌شناسی تاریخ‌نگاری',
    description: 'راهنمای جامع مفاهیم بنیادین معرفت‌شناسی تاریخ، جریان‌های پسامدرن و بازاندیشی در شیوه‌های نگارش تاریخی.'
  },
  {
    id: 'ritter',
    title: 'Dictionary of Concepts in History',
    author: 'Harry Ritter',
    publisherYear: 'Greenwood Press (1986)',
    searchQuery: '"Dictionary of Concepts in History" "Harry Ritter"',
    category: 'مفاهیم و اصطلاحات تاریخ‌نگاری',
    description: 'فرهنگ تحلیلی-انتقادی اصطلاحات فلسفه و علم تاریخ همراه با تبارشناسی معنایی واژگان بنیادین.'
  },
  {
    id: 'green-troup',
    title: 'The Houses of History: A Critical Reader',
    author: 'Anna Green & Kathleen Troup',
    publisherYear: 'Manchester University Press (1999 / 2016)',
    searchQuery: '"The Houses of History: A Critical Reader" "Green"',
    category: 'مکاتب و نظریه‌های تاریخ',
    description: 'بررسی انتقادی مکاتب اصلی تاریخ‌نگاری سده بیستم نظیر مکتب آنال، تاریخ‌نگاری مارکسیستی، خُرده‌تاریخ و پساساختارگرایی.'
  },
  {
    id: 'koselleck',
    title: 'Futures Past: On the Semantics of Historical Time',
    author: 'Reinhart Koselleck',
    publisherYear: 'Columbia University Press (2004)',
    searchQuery: '"Futures Past: On the Semantics of Historical Time" "Koselleck" filetype:pdf',
    category: 'معناشناسی زمان تاریخی و تاریخ مفاهیم',
    description: 'اثر کلاسیک در حوزه «تاریخ مفاهیم» (Begriffsgeschichte) و چگونگی تحول درک انسان از گذشته، افق انتظار و مدرنیته.'
  },
  {
    id: 'hodgson',
    title: 'The Venture of Islam (Vol. 2 & 3)',
    author: 'Marshall G. S. Hodgson',
    publisherYear: 'University of Chicago Press (1974)',
    searchQuery: '"The Venture of Islam" "Hodgson" filetype:pdf',
    category: 'تاریخ و تمدن جهان اسلام',
    description: 'شاهکار تمدن‌پژوهی که با ابداع واژگان دقیق (مانند Islamicate و Persianate) چشم‌انداز نوینی به قلمروهای پسین اسلام بخشید.'
  },
  {
    id: 'lambton-landlord',
    title: 'Landlord and Peasant in Persia',
    author: 'Ann K. S. Lambton',
    publisherYear: 'Oxford University Press / I.B. Tauris (1953 / 1991)',
    searchQuery: '"Landlord and Peasant in Persia" "Lambton"',
    category: 'نظام‌های ارضی و مناسبات مالک و دهقان',
    description: 'تحقیق بی‌بدیل لمبتون درباره تحول مالکیت زمین، اقطاع، مالیات‌های روستایی و حیات دهقانی در فلات ایران از صدر اسلام تا پهلوی.'
  },
  {
    id: 'lambton-continuity',
    title: 'Continuity and Change in Medieval Persia',
    author: 'Ann K. S. Lambton',
    publisherYear: 'Bibliotheca Persica (1988)',
    searchQuery: '"Continuity and Change in Medieval Persia" "Lambton"',
    category: 'جنبه‌های دیوانی، حقوقی و مذهبی ایران میانه',
    description: 'تحلیل دقیق تداوم نهادهای ایرانی در دوران سلجوقی و ایلخانی، وظایف دیوانی، نهاد حسبه، قضا و اوقاف.'
  },
  {
    id: 'amanat-pivot',
    title: 'Pivot of the Universe: Nasir al-Din Shah and the Iranian Monarchy',
    author: 'Abbas Amanat',
    publisherYear: 'University of California Press (1997)',
    searchQuery: '"Pivot of the Universe" "Abbas Amanat"',
    category: 'تاریخ سیاسی و دربار قاجار',
    description: 'کالبدشکافی ساختار پاتریمونیال حکومت ناصرالدین‌شاه، مناسبات اندرونی، صدارت و تنش میان سنت و نوگرایی.'
  },
  {
    id: 'amanat-modern',
    title: 'Iran: A Modern History',
    author: 'Abbas Amanat',
    publisherYear: 'Yale University Press (2017)',
    searchQuery: '"Iran: A Modern History" "Abbas Amanat"',
    category: 'تاریخ جامع ایران معاصر',
    description: 'روایتی جامع و مدرن از گذار ایران در دوران صفوی، قاجار و پهلوی، با تاکید بر جریانات مذهبی، هزاره‌گرایی و مشروطه.'
  },
  {
    id: 'floor-institutions',
    title: 'Safavid Government Institutions',
    author: 'Willem Floor',
    publisherYear: 'Mazda Publishers (2001)',
    searchQuery: '"Safavid Government Institutions" "Willem Floor"',
    category: 'نهادها و تشکیلات اداری صفوی',
    description: 'بررسی تفصیلی مقامات و مناصب دیوانی، ارتش، قورچی‌باشی، دیوان‌بیگی و دستگاه اداری عهد صفوی.'
  },
  {
    id: 'floor-fiscal',
    title: 'A Fiscal History of Iran in the Safavid and Qajar Periods',
    author: 'Willem Floor',
    publisherYear: 'Bibliotheca Persica (1998)',
    searchQuery: '"A Fiscal History of Iran in the Safavid and Qajar Periods" "Willem Floor"',
    category: 'تاریخ مالیه، عایدات و نظام مالیاتی',
    description: 'تحقیق عمیق در ساختار عایدات، اراضی خاصه و ممالک، مالیات‌های جنسی و نقدی، مواجب و سیورغال در قرون ۱۶ تا ۲۰ میلادی.'
  }
];
