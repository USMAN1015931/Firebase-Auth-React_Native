// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    // apiKey: "AIzaSyAdaZ4lXurV3zGRYn8AB9PEEarwn8ht7_8",
    // authDomain: "csg1-d8421.firebaseapp.com",
    // projectId: "csg1-d8421",
    // storageBucket: "csg1-d8421.appspot.com",
    // messagingSenderId: "881558113515",
    // appId: "1:881558113515:web:4e65deb9bb527854a3c2ae",
    // measurementId: "G-GZV2HS8YKK"
    apiKey: "AIzaSyDMg0eqrM87CA5qxD3bhGJhDt_xSQWjKvQ",
    authDomain: "loginregister-82d7c.firebaseapp.com",
    projectId: "loginregister-82d7c",
    storageBucket: "loginregister-82d7c.appspot.com",
    messagingSenderId: "707517882080",
    appId: "1:707517882080:web:0a97da7b23a691e2c8ba85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};