import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA4zedXSNPrfEUR1X_vqyVJJrFmckhbpH0",
  authDomain: "crm-9ad9d.firebaseapp.com",
  projectId: "crm-9ad9d",
  storageBucket: "crm-9ad9d.appspot.com",
  messagingSenderId: "822197351564",
  appId: "1:822197351564:web:06e7cdb7ca3e59ef1177a9"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;