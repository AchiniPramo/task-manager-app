import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsfGIkZRmdPRNvNwq_tlupaWh4-GcLW9w",
  authDomain: "task-manager-49aaa.firebaseapp.com",
  projectId: "task-manager-49aaa",
  storageBucket: "task-manager-49aaa.firebasestorage.app",
  messagingSenderId: "1058747703282",
  appId: "1:1058747703282:web:2fe9eabb36e8373146d56b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);