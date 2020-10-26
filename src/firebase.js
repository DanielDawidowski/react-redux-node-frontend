import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCz3ZTJ_23dULQm6SkAu7WZBdMSeC7NRJs",
  authDomain: "redux-ecom.firebaseapp.com",
  databaseURL: "https://redux-ecom.firebaseio.com",
  projectId: "redux-ecom",
  storageBucket: "redux-ecom.appspot.com",
  messagingSenderId: "432646536168",
  appId: "1:432646536168:web:7e8dff47048fb0dfa8025d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
