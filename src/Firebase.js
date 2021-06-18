import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyCVyZLqa0gPz09tEKtmLsGb-twZ8Ud_VMs",
    authDomain: "clone-10b73.firebaseapp.com",
    projectId: "clone-10b73",
    storageBucket: "clone-10b73.appspot.com",
    messagingSenderId: "868142200735",
    appId: "1:868142200735:web:0b4cadd010bfa119dd6faa",
    measurementId: "G-V4RZ8DL4CG"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider}


