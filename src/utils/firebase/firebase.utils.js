import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ4uvLmThvYdTqSROZIuLaXIaPgJIzNds",
  authDomain: "crwn-clothing-db-e0035.firebaseapp.com",
  projectId: "crwn-clothing-db-e0035",
  storageBucket: "crwn-clothing-db-e0035.appspot.com",
  messagingSenderId: "235307253234",
  appId: "1:235307253234:web:82798586222a3f0e753f6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
