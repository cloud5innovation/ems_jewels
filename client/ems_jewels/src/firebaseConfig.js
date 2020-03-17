import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

  firebase.initializeApp(config);

//   export const auth = firebase.auth();
//   export const googleProvider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  googleProvider.setCustomParameters({
      "prompt": "select_account"
  })

//   export default firebase;
export {
    googleProvider, auth, storage, firebase as default
}

// import firebase from 'firebase/app'
// import 'firebase/auth';

// import 'firebase/storage';



// // firebase.initializeApp(config)

// // var firebaseConfig = {
// //     apiKey: "AIzaSyAKWKfNizc1Hs9f9KWf3a0l-EQ46ZXSc_o",
// //     authDomain: "em-s-jewels.firebaseapp.com",
// //     databaseURL: "https://em-s-jewels.firebaseio.com",
// //     projectId: "em-s-jewels",
// //     storageBucket: "em-s-jewels.appspot.com",
// //     messagingSenderId: "509051921151",
// //     // appId: "1:509051921151:web:de8931fffc5021ff0ca2ca",
// //     // measurementId: "G-WQCE3CW3JL
// //   };
//   // Initialize Firebase
//   firebase.initializeApp(config);

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const auth = firebase.auth();

// const storage = firebase.storage();

// export {
//     googleProvider, auth, storage, firebase as default
// }
