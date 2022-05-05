
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOm4h0v3EHzp3YZcnasUKofQqBYD9rqCs",
  authDomain: "readify-27c31.firebaseapp.com",
  projectId: "readify-27c31",
  storageBucket: "readify-27c31.appspot.com",
  messagingSenderId: "84439612188",
  appId: "1:84439612188:web:9c188cd53b8450c192d8d9",
  measurementId: "G-XTEER99C2Y"
};
const fire = firebase.initializeApp(firebaseConfig);

// Initialize Firebase

const analytics = getAnalytics(fire);

export const auth=fire.auth();
export default fire ;
