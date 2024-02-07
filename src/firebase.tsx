// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClqSXtw3xLlrIsJE-R9vqQnx3w-ElTMXM",
  authDomain: "smartlab-code-checker-web.firebaseapp.com",
  projectId: "smartlab-code-checker-web",
  storageBucket: "smartlab-code-checker-web.appspot.com",
  messagingSenderId: "768674473940",
  appId: "1:768674473940:web:9737b29840d9e31e2b5841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
