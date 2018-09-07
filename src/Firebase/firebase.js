import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDa-SvAaqOhaK9lKPQEbOUKMPqCzh_uz9k",
  authDomain: "react-firebase-chat-43290.firebaseapp.com",
  databaseURL: "https://react-firebase-chat-43290.firebaseio.com",
  projectId: "react-firebase-chat-43290",
  storageBucket: "react-firebase-chat-43290.appspot.com",
  messagingSenderId: "30200316484"
};

var fire = firebase.initializeApp(config);

const db = fire.database();
const auth = fire.auth();

export { db, auth };
