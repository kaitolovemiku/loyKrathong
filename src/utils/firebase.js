import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7qrRM229Cy5DABkX-2RXg_164m4-S3bA",
  authDomain: "loy-krathong-4f168.firebaseapp.com",
  projectId: "loy-krathong-4f168",
  storageBucket: "loy-krathong-4f168.appspot.com",
  messagingSenderId: "273599669594",
  appId: "1:273599669594:web:b42c87a6cb1e3c393f7f63",
  measurementId: "G-QDVMPEGGB4"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase;