// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBBDGNh7Z_W6RIus1W17xGkXP34Dd-l6D0",
authDomain: "kata-27d4e.firebaseapp.com",
projectId: "kata-27d4e",
storageBucket: "kata-27d4e.appspot.com",
messagingSenderId: "1043186264947",
appId: "1:1043186264947:web:61ff435622476b91f8f306",
measurementId: "G-03R742TWDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
