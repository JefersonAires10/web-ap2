"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBM34W8qQUs-RxDdcLOt962tWezv_gl4Og",
  authDomain: "crud-web-1092c.firebaseapp.com",
  projectId: "crud-web-1092c",
  storageBucket: "crud-web-1092c.appspot.com",
  messagingSenderId: "712565880652",
  appId: "1:712565880652:web:22c6aeadb392e1ac2681e9"
};

// Initialize Firebase
var app = (0, _app.initializeApp)(firebaseConfig);

// get firestore service
var db = (0, _firestore.getFirestore)(app);
var _default = db;
exports["default"] = _default;