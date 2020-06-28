 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNgfMBEHtnD-6FiyXd7NH_ARoJsOBxKwI",
    authDomain: "fa-database-721e9.firebaseapp.com",
    databaseURL: "https://fa-database-721e9.firebaseio.com",
    projectId: "fa-database-721e9",
    storageBucket: "fa-database-721e9.appspot.com",
    messagingSenderId: "861361045313",
    appId: "1:861361045313:web:a8aa3273fe47a33e3a2bc0",
    measurementId: "G-J12CW23R6L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.firestore();