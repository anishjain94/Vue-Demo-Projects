import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAxBjpFCqgLl7bD-tbjeOHLQRB-H-2uqHc",
    authDomain: "vue-project-34252.firebaseapp.com",
    databaseURL: "https://vue-project-34252.firebaseio.com",
    projectId: "vue-project-34252",
    storageBucket: "vue-project-34252.appspot.com",
    messagingSenderId: "260206811203",
    appId: "1:260206811203:web:624dd89f32b84a35b9dcf6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;