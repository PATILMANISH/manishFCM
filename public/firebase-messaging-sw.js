// Import the Firebase scripts
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDDaBR_KOZEdREIgNVmrMmv7kyG7xd3PPQ",
  authDomain: "manishfcm-8c910.firebaseapp.com",
  projectId: "manishfcm-8c910",
  storageBucket: "manishfcm-8c910.appspot.com",
  messagingSenderId: "388805580045",
  appId: "1:388805580045:web:2fc789fb3993df32fdcc44",
  measurementId: "G-Q4Z8B7L0W9",
});

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
