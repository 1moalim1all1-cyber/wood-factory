# مصنع الأخشاب المتكامل — GitHub Pages + Firebase + Cloudinary

هذه النسخة مجهزة للعمل بالشكل التالي:

- **GitHub Pages** لاستضافة واجهة الموقع.
- **Firebase Firestore** للمنتجات والطلبات والإعدادات.
- **Firebase Authentication (Phone)** لتسجيل دخول الأدمن برقم الموبايل وكود SMS.
- **Cloudinary** لرفع صور المنتجات.

## قبل التشغيل

1. فعّل Firestore وPhone Authentication داخل مشروع Firebase.
2. أضف دومين GitHub Pages الخاص بالموقع إلى Authorized domains في Firebase Authentication.
3. عدّل `public/firebase-config.js` وضع بيانات Firebase Web App وبيانات Cloudinary.
4. انشر قواعد Firestore الموجودة في `firestore.rules` من Firebase Console أو Firebase CLI.
5. من GitHub: Settings → Pages → Source → GitHub Actions.

## لوحة التحكم

بعد النشر ستكون لوحة التحكم في:

`/admin.html`

الأدمن يدخل برقم الموبايل ويستلم OTP. يجب إضافة UID الخاص به داخل مجموعة `admins` في Firestore بالشكل:

`admins/{UID}` مع الحقل `active: true`.
