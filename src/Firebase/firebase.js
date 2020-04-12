import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
    this.db = this.app.database();
    console.log(firebase, this.app);
  }
  // *** Authentication API *** //

  // Sign Up
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  // Sign In
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  // Sign out
  doSignOut = () => this.auth.signOut();

  // Password Reset
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // Password Update
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Database API *** //

  // User API //

  // Create User
  doCreateUser = (id, username, email) => this.db.ref(`users/${id}`).set({
    username,
    email,
  });

  // Get All Users
  onceGetUsers = () => this.db.ref("users").once("value");

  // Chat API //

  // Create new message
  doCreateMessage = (text, senderId, receiverId) => this.db.ref("messages").push({
    text,
    senderId,
    receiverId,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  });

  // Fetch Messages
  onMessageAdded = callback => this.db
    .ref("messages")
    .orderByChild("timestamp")
    .on("value", callback);
}

export default Firebase;
