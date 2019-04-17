/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Firebase, { FirebaseContext } from "./Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root"),
);
