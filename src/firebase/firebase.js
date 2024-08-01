import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9OIBKtyAxJI518JyRA84jc1bVAbA9txk",
  authDomain: "register-53adb.firebaseapp.com",
  projectId: "register-53adb",
  storageBucket: "register-53adb.appspot.com",
  messagingSenderId: "1064873733201",
  appId: "1:1064873733201:web:9cb166f0fbe1ae42835c70",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
