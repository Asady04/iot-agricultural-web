import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD4oHW8MqxA6N0S2jXm2Bs8T9dI6WwnBdM",
    authDomain: "iot-test-cec6e.firebaseapp.com",
    databaseURL: "https://iot-test-cec6e-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "iot-test-cec6e",
    storageBucket: "iot-test-cec6e.appspot.com",
    messagingSenderId: "303048547525",
    appId: "1:303048547525:web:c9915cd9ff6f33d42e24ac",
    measurementId: "G-RCRDFWSCWS"  
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = getDatabase(app);

export { db };