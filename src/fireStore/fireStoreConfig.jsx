// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCv14IPJpdIg8xgykNhz_t9MVXKMAyavf0",
	authDomain: "fir-v9-practice-65ca1.firebaseapp.com",
	projectId: "fir-v9-practice-65ca1",
	storageBucket: "fir-v9-practice-65ca1.appspot.com",
	messagingSenderId: "733235350732",
	appId: "1:733235350732:web:9fcd3d66641a4236144669",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// init services:
export const db = getFirestore(app);
