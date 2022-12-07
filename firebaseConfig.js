import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlKQM_jNNqyJn-CgkfdijVKyn3H3nADf4",
  authDomain: "m4-stories.firebaseapp.com",
  projectId: "m4-stories",
  storageBucket: "m4-stories.appspot.com",
  messagingSenderId: "352466045435",
  appId: "1:352466045435:web:4b8271dedf8065ea6a235e",
  measurementId: "G-3V013Y0JCK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
