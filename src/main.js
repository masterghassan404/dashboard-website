
// import { createApp } from 'vue'
// import './assets/css/app.css'
// import './style.css'
// import App from './App.vue'
// import router from './router'
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyB-8QbtR7vS7UeWahBJnfULuqLd1a5b-A0",
//   authDomain: "vue-login-c76a0.firebaseapp.com",
//   projectId: "vue-login-c76a0",
//   storageBucket: "vue-login-c76a0.appspot.com", // تصحيح المسار
//   messagingSenderId: "463528868344",
//   appId: "1:463528868344:web:df0216599d1446185d3e0d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { createApp } from 'vue';
import './assets/css/app.css';
import './style.css';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app'; // تأكد من استيراد Firebase هنا

// تهيئة Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-8QbtR7vS7UeWahBJnfULuqLd1a5b-A0",
  authDomain: "vue-login-c76a0.firebaseapp.com",
  projectId: "vue-login-c76a0",
  storageBucket: "vue-login-c76a0.appspot.com",
  messagingSenderId: "463528868344",
  appId: "1:463528868344:web:df0216599d1446185d3e0d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// إنشاء تطبيق Vue
const app = createApp(App);

// استخدام router
app.use(router);

// ربط التطبيق بعنصر DOM
app.mount('#app');