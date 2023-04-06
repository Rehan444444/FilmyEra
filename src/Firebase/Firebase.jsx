// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtcPN2VNdhcZ5u7MxINXZOA6ZVV-iMEXk",
  authDomain: "filmyera-2.firebaseapp.com",
  projectId: "filmyera-2",
  storageBucket: "filmyera-2.appspot.com",
  messagingSenderId: "987869867116",
  appId: "1:987869867116:web:b00144b584ce38ed41bc49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const movieref =collection(db,"movies");
// export const AddDoc = c

export default app;