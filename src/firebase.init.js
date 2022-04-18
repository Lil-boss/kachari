
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID

    apiKey: "AIzaSyDHPMtyBprQ0Zc9qVGrt-SWoowIwyj42lE",
    authDomain: "kachari-auth-system.firebaseapp.com",
    projectId: "kachari-auth-system",
    storageBucket: "kachari-auth-system.appspot.com",
    messagingSenderId: "684380640422",
    appId: "1:684380640422:web:a598888cbbb4f3e22b1067"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;