/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "bootstrap/dist/css/bootstrap.css";
import Firebase, { FirebaseContext } from "./firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root"),
);
