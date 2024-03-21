import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

/*let config = {
    apiKey: "AIzaSyDbdEYVHiNcu36TEXDGozF6mUYY1Usw5zI",
    authDomain: "addquestions-9f826.firebaseapp.com",
    projectId: "addquestions-9f826",
    storageBucket: "addquestions-9f826.appspot.com",
    messagingSenderId: "240124915754",
    appId: "1:240124915754:web:d792b73944836508879353",
    measurementId: "G-C07L770H0R"
};*/
let config = {
    apiKey: "AIzaSyATW-5DXL5e5Gi483A_bk8o3-Wytj7q_Dg",
    authDomain: "careercalculator-479f2.firebaseapp.com",
    projectId: "careercalculator-479f2",
    storageBucket: "careercalculator-479f2.appspot.com",
    messagingSenderId: "823412724685",
    appId: "1:823412724685:web:863302b5c93070fe3f2a84",
    measurementId: "G-5G3GQ86EF7"
};

const app = initializeApp(config);
//const analytics = getAnalytics(app);

export default getFirestore(app);