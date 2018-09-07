import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./login.css";
import * as routes from "../../Constants/routes";
import { auth, db } from "../../Firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const LoginPage = ({ history }) => (
  <div class="container-fluid">
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <p>Please enter your email and password</p>
        </div>
        <Login history={history} />
      </div>
    </div>
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.MAIN);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <form id="Login" onSubmit={this.onSubmit}>
        <div class="form-group">
          <input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Email Address"
          />
        </div>

        <div class="form-group">
          <input
            value={password}
            onChange={event =>
              this.setState(
                updateByPropertyName("password", event.target.value)
              )
            }
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <div class="forgot">
          <a href="#">Forgot password?</a>
        </div>
        <button disabled={isInvalid} type="submit" class="btn btn-primary">
          Login
        </button>
        <SignUpLink />
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <div class="toSignup">
    <p>
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  </div>
);

export default withRouter(LoginPage);
