// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//importamos el servicio para obtener la bd
import { getFirestore } from "firebase/firestore";
//importar el servicio

// Your web app's Firebase configuration
const firebaseConfig = {
    //importando las variables de entorno
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
//Inicializar nuestro proyecto de firebase (utilizar recursos)
const app = initializeApp(firebaseConfig);
//creamos una constante para utilzar el servicio de la bd
const db = getFirestore(app)

export default db