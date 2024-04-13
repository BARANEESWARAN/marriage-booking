import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHmjsVAbqrA_NH6l0_s_lSH7BlbhjNMp8",
    authDomain: "vms-marriage-management.firebaseapp.com",
    projectId: "vms-marriage-management",
    storageBucket: "vms-marriage-management.appspot.com",
    messagingSenderId: "222400513179",
    appId: "1:222400513179:web:6fa60341d595cac0a4723e",
    measurementId: "G-5ZM123Q346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)