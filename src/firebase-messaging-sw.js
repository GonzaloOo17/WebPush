importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyC_WSdWlHoJV45fp88A2U-cUmpCnjrGEzA",
    authDomain: "simply-notify-a967d.firebaseapp.com",
    databaseURL: "https://simply-notify-a967d.firebaseio.com",
    projectId: "simply-notify-a967d",
    storageBucket: "simply-notify-a967d.appspot.com",
    messagingSenderId: "982307666139",
    appId: "1:982307666139:web:62de6d57427c0718ddf4fe",
    measurementId: "G-6VDHCF926T"
});
  const messaging = firebase.messaging();