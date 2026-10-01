export const firebaseConfig={apiKey:'PASTE_FIREBASE_API_KEY',authDomain:'PASTE_PROJECT_ID.firebaseapp.com',projectId:'PASTE_PROJECT_ID',storageBucket:'PASTE_PROJECT_ID.firebasestorage.app',messagingSenderId:'PASTE_MESSAGING_SENDER_ID',appId:'PASTE_APP_ID'};
export const cloudinaryConfig={cloudName:'PASTE_CLOUDINARY_CLOUD_NAME',uploadPreset:'PASTE_UNSIGNED_UPLOAD_PRESET'};
export const defaults={factoryName:'مصنع الأخشاب المتكامل',phone:'01000000000',whatsapp:'201000000000',email:'info@woodfactory.com',address:'المنطقة الصناعية – مصر'};
export const configReady=()=>!firebaseConfig.apiKey.startsWith('PASTE_')&&!firebaseConfig.projectId.startsWith('PASTE_');
export const cloudinaryReady=()=>!cloudinaryConfig.cloudName.startsWith('PASTE_')&&!cloudinaryConfig.uploadPreset.startsWith('PASTE_');
