import { firebaseApp, firebaseAuth } from "./";

// *** Authentication Service *** //
const AuthService = {
  // Sign Up
  doCreateUserWithEmailAndPassword: (email, password) =>
    firebaseAuth.createUserWithEmailAndPassword(email, password),

  // Sign In
  doSignInWithEmailAndPassword: (email, password) =>
    firebaseAuth.signInWithEmailAndPassword(email, password),

  // Sign out
  doSignOut: () => firebaseAuth.signOut(),

  // Password Reset
  doPasswordReset: (email) => firebaseAuth.sendPasswordResetEmail(email),

  // Password Update
  doPasswordUpdate: (password) =>
    firebaseAuth.currentUser.updatePassword(password),

  doOnAuthStateChanged: (callback) => firebaseAuth.onAuthStateChanged(callback),
};

export { AuthService };
