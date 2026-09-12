// Reviewed Modern Standard Arabic copy and natural coffee terminology.
catalog.ar.brand="قهوجي";
catalog.ar.scroll="مرّر لتصفّح القائمة";
catalog.ar.tag="قهوة عربية أصيلة";
catalog.ar.nav=["القهوة","القهوة الكلاسيكية","العصائر الساخنة","العصائر الباردة","الحلويات"];
catalog.ar.sections=[
["intro","قهوجي","",[],"كل فنجان بداية لحكاية جديدة."],
["arabic","القهوة","أصالة المذاق في كل فنجان",[["قهوة الدلّة","قهوة أصيلة بنكهة الهيل","١٢٠–١٤٠"],["دلّة الكراميل","مزيج من قهوة الدلّة والكراميل","١٦٠"],["دلّة الخلطة","خلطة قهوجي المميّزة","١٣٠"],["دلّة القهوة المعتّقة","مذاق عميق يدوم طويلاً","٢٨٠"],["نص نص","مزيج مميّز ومتوازن","٢١٠"]],"القهوة عبق ذكريات لم نصنعها بعد."],
["story","ثقافة القهوة","",[],"القهوة ليست مجرّد مشروب؛ بل لحظة تأمّل نرى فيها العالم من جديد."],
["classic","القهوة الكلاسيكية","مذاق مألوف بجودة استثنائية",[["إسبريسو","","١٠٠–١١٠"],["قهوة إسبنه","","١٥٠"],["قهوة تركية","","١٨٠"],["قهوة فرنسية","","٢٨٠"],["أمريكانو","","١١٠"]],"يبدأ الصباح الجميل بعبق القهوة قبل شروق الشمس."],
["hot","المشروبات الساخنة","دفء في كل فصل",[["كابتشينو","","١٨٠"],["شوكولاتة ساخنة","","٢٠٠"],["لاتيه","","١٩٠"],["موكا","","٢١٠"],["كراميل ماكياتو","","٢٣٠"]],"أحياناً يكون دفء الفنجان كل ما يحتاج إليه يومنا."],
["cold","المشروبات الباردة","انتعاش أكثر",[["جميع المشروبات","متاحة مثلّجة (آيس)","+٢٠"]],"القهوة باردة، لكن حكايتها لا تزال دافئة."],
["dessert","الحلويات","رفيق القهوة الدائم",[["التمر","تشكيلة من أجود أنواع التمور العربية","—"]],"حلاوة التمر توازن مرارة القهوة."],
["closing","قهوجي","",[],"القهوة لحظة هدوء، ثم نعود إلى الحياة."]
];
catalog.ar.sections[4][1]="العصائر الساخنة";
catalog.ar.sections[5][1]="العصائر الباردة";
catalog.ar.sections[5][3][0][0]="جميع العصائر";
catalog.en.sections[3][3][1][0]="White Coffee";
function addContactLinks(lang){
  const closing=document.querySelector("#closing>div");if(!closing)return;
  const labels={fa:["اینستاگرام","واتساپ","مسیریابی"],ar:["إنستغرام","واتساب","الاتجاهات"],en:["Instagram","WhatsApp","Directions"]}[lang];
  const links=document.createElement("div");links.className="contact-links";
  links.innerHTML=`<a href="https://www.instagram.com/qahvechii?stkn=cTFzbnk1ajI1NnRt" target="_blank" rel="noopener noreferrer" aria-label="${labels[0]}"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="dot" cx="17.4" cy="6.6" r="1"/></svg><span>${labels[0]}</span></a><a href="https://wa.me/qr/32Y7ITF6VB4IJ1" target="_blank" rel="noopener noreferrer" aria-label="${labels[1]}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"/><path d="M8.2 7.7c.3-.6.6-.6.9-.6.4 0 .5.1.7.5l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.2.4.3.4.5 0 .3-.2 1.4-.9 1.9-.6.5-1.4.7-2.3.4-1-.3-2.3-.8-3.9-2.2-1.3-1.2-2.2-2.7-2.5-3.7-.3-.9 0-1.7.3-2.1Z"/></svg><span>${labels[1]}</span></a><a href="https://www.google.com/maps/dir/?api=1&amp;destination=GMQX%2BFM7%2C%20Babol%2C%20Mazandaran%2C%20Iran&amp;travelmode=driving" target="_blank" rel="noopener noreferrer" aria-label="${labels[2]}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>${labels[2]}</span></a>`;
  closing.insertBefore(links,closing.querySelector(".eyebrow"));
}
const renderMenu=render;render=function(lang){renderMenu(lang);addContactLinks(lang)};
render(localStorage.getItem("coffee-language")||"fa");
