import React, { Component } from "react";
import "./app.css";
// import Sidebar from "../Sidebar";
// import ChatBox from "../ChatBox";
import Main from "../Main/Main.jsx";
import LoginPage from "../Login/Login.jsx";
import SignUpPage from "../Signup/Signup.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "../../Constants/routes";
import withAuthentication from "../Session/withAuthentication";

const App = () => (
  <Router>
    <div className="app">
      <Route exact path={routes.LANDING} component={() => <LoginPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <LoginPage />} />
      <Route exact path={routes.MAIN} component={() => <Main />} />
    </div>
  </Router>
);

export default withAuthentication(App);
