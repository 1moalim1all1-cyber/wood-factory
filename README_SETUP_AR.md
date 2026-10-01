# مصنع الأخشاب — نسخة GitHub Pages + Firebase + Cloudinary

هذه النسخة مصممة بحيث:

- GitHub Pages = استضافة الموقع والملفات HTML/CSS/JS
- Firestore = المنتجات + طلبات العملاء + إعدادات الموقع
- Firebase Authentication Phone = دخول الأدمن برقم الموبايل + SMS OTP
- Cloudinary = رفع صور المنتجات

## 1) Firebase

1. افتح Firebase Console وأنشئ Project.
2. أضف Web App وانسخ firebaseConfig.
3. فعّل Firestore Database.
4. من Authentication > Sign-in method فعّل Phone.
5. من Authentication > Settings > Authorized domains أضف دومين GitHub Pages الخاص بك، مثال:
   `USERNAME.github.io`
6. افتح `public/firebase-config.js` وضع بيانات Firebase.

## 2) Cloudinary

1. أنشئ حساب Cloudinary.
2. أنشئ Unsigned Upload Preset مخصصًا للصور.
3. ضع Cloud Name واسم Upload Preset داخل `public/firebase-config.js`.
4. لا تضع API Secret داخل الموقع نهائيًا.

## 3) Firestore Rules

انسخ محتوى ملف `firestore.rules` والصقه في:
Firestore Database > Rules > Publish

## 4) أول دخول للأدمن بالموبايل

1. بعد نشر الموقع افتح:
   `https://USERNAME.github.io/REPOSITORY/admin.html`
2. اكتب رقم الموبايل المصري مثل `01012345678`، والموقع سيحوله إلى `+201012345678`.
3. أدخل كود SMS.
4. في أول مرة سيظهر لك UID.
5. افتح Firestore وأنشئ Collection باسم `admins`.
6. أنشئ Document يكون اسمه هو نفس UID الظاهر.
7. أضف field:
   - `active` = `true` (Boolean)
8. ارجع للوحة واضغط "إعادة التحقق من صلاحية الأدمن".

## 5) رفع المشروع على GitHub

1. أنشئ Repository جديد.
2. ارفع محتويات هذا المشروع بالكامل، بما فيها مجلد `.github` ومجلد `public`.
3. تأكد أن الفرع الرئيسي اسمه `main`.
4. افتح Settings > Pages.
5. تحت Build and deployment اختر Source = `GitHub Actions`.
6. اعمل أي Push إلى main، وسيتم نشر محتويات `public` تلقائيًا.

رابط الموقع عادة:
`https://USERNAME.github.io/REPOSITORY/`

لوحة التحكم:
`https://USERNAME.github.io/REPOSITORY/admin.html`

## 6) تهيئة المنتجات

بعد دخول لوحة التحكم كأدمن:
- افتح تبويب "التهيئة".
- اضغط "إضافة المنتجات التجريبية" مرة واحدة فقط.
- بعدها عدّل أو احذف أو أضف المنتجات والصور من لوحة التحكم.

## ملاحظات مهمة

- GitHub يستضيف الواجهة فقط؛ المنتجات والطلبات لا تُحفظ في GitHub.
- كل التغييرات التي تعملها من لوحة التحكم تُحفظ مباشرة في Firestore وتظهر لكل الزوار.
- صور المنتجات ترفع إلى Cloudinary ويُحفظ رابط الصورة في Firestore.
- روابط الموقع Relative، لذلك تعمل على `USERNAME.github.io/REPOSITORY/` بدون تعديل للمسارات.
