import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB8hjQ95nw9tiEikWevSjqgFsF8Ye1tpP0",
    authDomain: "gameflip-225b0.firebaseapp.com",
    projectId: "gameflip-225b0",
    storageBucket: "gameflip-225b0.appspot.com",
    messagingSenderId: "646950043486",
    appId: "1:646950043486:web:7fe0af866418a040e659cf",
    measurementId: "G-8BYPQBXY54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db }