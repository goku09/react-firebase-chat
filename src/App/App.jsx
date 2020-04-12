/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../firebase";
import { MainPage } from "../pages/Main";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/Signup";
import * as routes from "../constants/routes";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      authUser: null,
    };
  }

  componentDidMount() {
    const { firebase } = this.props;
    firebase.auth.onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
          authenticated: true,
          authUser: authenticated,
        }))
        : this.setState(() => ({
          authenticated: false,
          authUser: null,
        }));
    });
  }

  render() {
    const { authenticated, authUser } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path={routes.LANDING} component={() => <LoginPage />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <LoginPage />} />
          <Route
            exact
            path={routes.MAIN}
            component={authenticated ? () => <MainPage authUser={authUser} /> : () => <LoginPage />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export const App = compose(withFirebase)(AppComponent);
