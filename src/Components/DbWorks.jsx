import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDbdEYVHiNcu36TEXDGozF6mUYY1Usw5zI",
    authDomain: "addquestions-9f826.firebaseapp.com",
    projectId: "addquestions-9f826",
    storageBucket: "addquestions-9f826.appspot.com",
    messagingSenderId: "240124915754",
    appId: "1:240124915754:web:d792b73944836508879353",
    measurementId: "G-C07L770H0R"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRef = doc(db, "question_test", "test");
const docSnap = await getDoc(docRef);

export default docSnap