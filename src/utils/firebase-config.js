
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_j7uQr73-eyMwEie6nKTYcWLWDgdAEb0",
  authDomain: "netflix-project-57600.firebaseapp.com",
  projectId: "netflix-project-57600",
  storageBucket: "netflix-project-57600.appspot.com",
  messagingSenderId: "671986200031",
  appId: "1:671986200031:web:49503ee3473ab0abab286a",
  measurementId: "G-M8CQ77BHS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);
// const analytics = getAnalytics(app);