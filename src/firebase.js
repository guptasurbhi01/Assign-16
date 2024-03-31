import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVle-f-6Q86awy36upBZIj-DzvjtpnZs8",
  authDomain: "login-edda5.firebaseapp.com",
  projectId: "login-edda5",
  storageBucket: "login-edda5.appspot.com",
  messagingSenderId: "498446861082",
  appId: "1:498446861082:web:47f6d84ed24f9dfa3422a3",
  measurementId: "G-XHY93NBKRV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
