import firebase from "firebase";
import { firebaseConfig } from "../config";
import { AuthService } from "./authService";
import { MessageService } from "./messageService";
import { UserService } from "./userService";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firebaseDB = firebaseApp.database();

export {
  firebaseApp,
  firebaseAuth,
  firebaseDB,
  AuthService,
  MessageService,
  UserService,
};
