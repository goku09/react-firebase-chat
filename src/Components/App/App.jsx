import React, { Component } from "react";
import "./app.css";
import Main from "../Main/Main.jsx";
import LoginPage from "../Login/Login.jsx";
import SignUpPage from "../Signup/Signup.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { firebase } from "../../Firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      authUser: null
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
            authUser: authenticated
          }))
        : this.setState(() => ({
            authenticated: false,
            authUser: null
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
            component={
              authenticated
                ? () => <Main authUser={authUser} />
                : () => <LoginPage />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
