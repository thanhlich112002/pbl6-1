// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4G0qK72WO1OkbbEv3np2Npzm5gqsUbz8",
    authDomain: "dfsdfdsfdsf-951ee.firebaseapp.com",
    databaseURL: "https://dfsdfdsfdsf-951ee-default-rtdb.firebaseio.com",
    projectId: "dfsdfdsfdsf-951ee",
    storageBucket: "dfsdfdsfdsf-951ee.appspot.com",
    messagingSenderId: "954971139105",
    appId: "1:954971139105:web:83b4dcee2d4c59431a8760",
    measurementId: "G-B62Y3TJENX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);