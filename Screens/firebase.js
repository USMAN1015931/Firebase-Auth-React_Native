// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCoVh4x9iZPa6dpbb2rWe5VA-VI8blAZck",
    authDomain: "fir-login-7850e.firebaseapp.com",
    projectId: "fir-login-7850e",
    storageBucket: "fir-login-7850e.appspot.com",
    messagingSenderId: "821043753777",
    appId: "1:821043753777:web:047a534885a1ca7ff77610",
    measurementId: "G-R23LVD8XXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};