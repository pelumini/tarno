import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "tarno-427817.firebaseapp.com",
  projectId: "tarno-427817",
  storageBucket: "tarno-427817.appspot.com",
  messagingSenderId: "715339628039",
  appId: "1:715339628039:web:2b613e834b29ddae1b34a2",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
