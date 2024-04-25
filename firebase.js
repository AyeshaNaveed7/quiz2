// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

const firebaseConfig = {
  apiKey: "AIzaSyDBrrDd_ufuHQqSOOAPHvF-jiPYCAlvLyc",
  authDomain: "mad-quiz-b3cc0.firebaseapp.com",
  projectId: "mad-quiz-b3cc0",
  storageBucket: "mad-quiz-b3cc0.appspot.com",
  messagingSenderId: "547311458329",
  appId: "1:547311458329:web:abbed0bf67120b4d943288",
  measurementId: "G-MN00WGBGXJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const storage = getStorage(firebaseApp);
// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }
