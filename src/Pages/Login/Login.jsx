/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase";
import "./login.css";
import * as routes from "../../constants/routes";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history, firebase } = this.props;

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.MAIN);
      })
      .catch((error) => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <div className="container-fluid">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <p>Please enter your email and password</p>
            </div>
            <form id="Login" onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  value={email}
                  onChange={event => this.setState(updateByPropertyName("email", event.target.value))
                  }
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group">
                <input
                  value={password}
                  onChange={event => this.setState(updateByPropertyName("password", event.target.value))
                  }
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>
              <button disabled={isInvalid} type="submit" className="btn btn-primary">
                Login
              </button>
              <SignUpLink />
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignUpLink = () => (
  <div className="toSignup">
    <p>
      Don't have an account?
      {" "}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  </div>
);

export const LoginPage = compose(
  withRouter,
  withFirebase,
)(Login);
