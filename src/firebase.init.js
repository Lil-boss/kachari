
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDHPMtyBprQ0Zc9qVGrt-SWoowIwyj42lE",
    authDomain: "kachari-auth-system.firebaseapp.com",
    projectId: "kachari-auth-system",
    storageBucket: "kachari-auth-system.appspot.com",
    messagingSenderId: "684380640422",
    appId: "1:684380640422:web:a598888cbbb4f3e22b1067"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth