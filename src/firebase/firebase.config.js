import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDA7_4DdD-mZqV5HOwftTVmBIUXhhcSm_o",
    authDomain: "pabna-online.firebaseapp.com",
    projectId: "pabna-online",
    storageBucket: "pabna-online.appspot.com",
    messagingSenderId: "370778740893",
    appId: "1:370778740893:web:d78bde5864e9252f43dc74",
    measurementId: "G-QKSM8VJMXX"
  };

 const firebaseInitApp = () => {
    initializeApp(firebaseConfig);


}

export default firebaseInitApp
