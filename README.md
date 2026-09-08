# Apex Football Academy — أكاديمية أبيكس لكرة القدم

الهيكل الأساسي لموقع أكاديمية كرة القدم: موقع ثابت (Static Website) متعدد الصفحات،
متجاوب مع جميع الأجهزة، ومكتوب بالكامل بلغة عربية (RTL) دون أي اعتماديات خارجية.

**Football Academy Management System — foundational website structure.**

## المحتوى (Pages)

| الصفحة | الملف | الوصف |
| --- | --- | --- |
| الرئيسية | `index.html` | واجهة رئيسية مع Hero وإحصائيات ومميزات ونظرة على البرامج |
| من نحن | `pages/about.html` | القصة، الرسالة، الرؤية، والقيم |
| البرامج التدريبية | `pages/programs.html` | البرامج حسب الفئة العمرية + الأسعار + الجدول |
| المدربون | `pages/coaches.html` | الكادر التدريبي |
| التسجيل | `pages/registration.html` | نموذج تسجيل مع تحقّق من الحقول |
| تواصل معنا | `pages/contact.html` | معلومات التواصل + نموذج رسالة |

## البنية (Structure)

```
apexacademy2/
├── index.html            # الصفحة الرئيسية
├── pages/                # بقية الصفحات
│   ├── about.html
│   ├── programs.html
│   ├── coaches.html
│   ├── registration.html
│   └── contact.html
├── css/
│   └── style.css         # نظام التصميم الكامل (design tokens + مكوّنات)
├── js/
│   └── main.js           # قائمة الجوال + تمييز الرابط النشط + التحقق من النماذج
├── img/
│   └── logo.svg          # شعار الأكاديمية
└── README.md
```

## التشغيل محلياً (Run locally)

الموقع ثابت بالكامل، يكفي فتح `index.html` في المتصفح، أو تشغيل خادم بسيط:

```bash
# Python
python3 -m http.server 8000
# ثم افتح http://localhost:8000
```

## التقنيات (Tech)

- HTML5 دلالي (Semantic)
- CSS3 حديث (Grid / Flexbox / متغيرات CSS) — بدون إطار عمل خارجي
- JavaScript خالص (Vanilla JS) — بدون اعتماديات

## الخطوات التالية المقترحة (Next steps)

- ربط النماذج بخدمة خلفية (Backend) أو Formspree لاستقبال الطلبات فعلياً.
- إضافة خريطة Google Maps في صفحة التواصل.
- إضافة صور حقيقية للأكاديمية والمدربين في مجلد `img/`.
- إضافة لوحة تحكم (Dashboard) لإدارة اللاعبين والاشتراكات.
