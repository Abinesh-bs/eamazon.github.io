// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js');

// Initialize Firebase with your project's configuration
const firebaseConfig = {
                           apiKey: 'AIzaSyDFFTa5H5BE1Z_xzq3F0DNTM8AxL2ZmvF4',
                           appId: '1:948737216499:web:9d8e64de1f9bb941478c86',
                           messagingSenderId: '948737216499',
                           projectId: 'e-5d676',
                           authDomain: 'e-5d676.firebaseapp.com',
                           storageBucket: 'e-5d676.firebasestorage.app',
                           measurementId: 'G-Z37HQM74BZ',
                           };firebase.initializeApp(firebaseConfig);

                              // Retrieve firebase messaging
                              const messaging = firebase.messaging();

                              messaging.onBackgroundMessage(function(payload) {
                                console.log("Received background message ", payload);

                                const notificationTitle = payload.notification.title;
                                const notificationOptions = {
                                  body: payload.notification.body,
                                };

                                self.registration.showNotification(notificationTitle, notificationOptions);
                              });});