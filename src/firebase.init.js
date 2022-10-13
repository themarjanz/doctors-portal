// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALvdId_rR4wscFxtfRuoTVvNvMin2vTGk",
    authDomain: "doctors-portal-41c5a.firebaseapp.com",
    projectId: "doctors-portal-41c5a",
    storageBucket: "doctors-portal-41c5a.appspot.com",
    messagingSenderId: "481337208075",
    appId: "1:481337208075:web:11239b96de63475cec860e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// REACT_APP_API_KEY=AIzaSyALvdId_rR4wscFxtfRuoTVvNvMin2vTGk
// REACT_APP_AUTH_DOMAIN=doctors-portal-41c5a.firebaseapp.com
// REACT_APP_PROJECT_ID=doctors-portal-41c5a
// REACT_APP_STORAGE_BUCKET=doctors-portal-41c5a.appspot.com
// REACT_APP_MESSAGING_SENDER_ID=481337208075
// REACT_APP_APP_ID=1:481337208075:web:11239b96de63475cec860e