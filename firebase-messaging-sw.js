importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDFFTa5H5BE1Z_xzq3F0DNTM8AxL2ZmvF4',
  appId: '1:948737216499:web:9d8e64de1f9bb941478c86',
  messagingSenderId: '948737216499',
  projectId: 'e-5d676',
  authDomain: 'e-5d676.firebaseapp.com',
  storageBucket: 'e-5d676.appspot.com',
  measurementId: 'G-Z37HQM74BZ',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/eamazon.github.io/flutter_logo.png',
  });
});
