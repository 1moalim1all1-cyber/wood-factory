export const firebaseConfig={apiKey:'AIzaSyDxbeZvwI1Z0nilxNvCsfhZ6gx0e_k3shc',authDomain:'mesafer-9b81e.firebaseapp.com',projectId:'mesafer-9b81e',storageBucket:'mesafer-9b81e.firebasestorage.app',messagingSenderId:'949117252084',appId:'1:949117252084:web:3be3e24a4475b4932c09a1',measurementId:'G-3F974J6WL7'};
export const cloudinaryConfig={cloudName:'dftwehzsn',uploadPreset:'wood factory'};
export const defaults={factoryName:'مصنع الأخشاب المتكامل',phone:'01000000000',whatsapp:'201000000000',email:'info@woodfactory.com',address:'المنطقة الصناعية – مصر'};
export const configReady=()=>!firebaseConfig.apiKey.startsWith('PASTE_')&&!firebaseConfig.projectId.startsWith('PASTE_');
export const cloudinaryReady=()=>!cloudinaryConfig.cloudName.startsWith('PASTE_')&&!cloudinaryConfig.uploadPreset.startsWith('PASTE_');
