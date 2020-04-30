/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { authListener } from "../redux/actions";
import "./app.css";
import * as routes from "../constants/routes";
import { MainPage } from "../pages/Main";
import { LoginPage } from "../pages/Login";
import { SignUpPage } from "../pages/Signup";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { authListener } = this.props;
    authListener();
  }

  render() {
    const { authenticated } = this.props;
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path={routes.LANDING}>
              {authenticated ? () => <MainPage /> : () => <LoginPage />}
            </Route>
            <Route exact path={routes.SIGN_UP}>
              <SignUpPage />
            </Route>
            <Route exact path={routes.SIGN_IN}>
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ authListener }, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
