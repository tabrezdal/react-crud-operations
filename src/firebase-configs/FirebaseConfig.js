import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlRTFPcPVRasVt-ZB2UkYYz8DWRPj-_VI",
  authDomain: "react-crud-operation-4db89.firebaseapp.com",
  projectId: "react-crud-operation-4db89",
  storageBucket: "react-crud-operation-4db89.appspot.com",
  messagingSenderId: "478468293021",
  appId: "1:478468293021:web:a06c20d1a77445820b2f74",
  measurementId: "G-SMKDDJ5CEG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);