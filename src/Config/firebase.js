import firebase from 'firebase';

 // Initialize Firebase
const config = {
  apiKey: "AIzaSyDzns0Dsi_3LYcdN-Fy3ky3rWL6q_0P4TI",
  authDomain: "socialutn.firebaseapp.com",
  databaseURL: "https://socialutn.firebaseio.com",
  projectId: "socialutn",
  storageBucket: "socialutn.appspot.com",
  messagingSenderId: "94925619755"
};
firebase.initializeApp(config);

export default firebase;

