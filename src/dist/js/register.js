import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBEBncrubOEVZmun8BBqjg_9Y4zne5pYE",
  authDomain: "gracialogin.firebaseapp.com",
  projectId: "gracialogin",
  storageBucket: "gracialogin.appspot.com",
  messagingSenderId: "481403714196",
  appId: "1:481403714196:web:4102ed9347c10980449281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const submit=document.getElementById('submit-1');
submit.addEventListener("click", function(event){
    event.preventDefault()
    const email=document.getElementById('email-1').value;
  const password=document.getElementById('password-1').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("creating account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})