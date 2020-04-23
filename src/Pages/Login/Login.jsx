/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { loginUser } from "../../redux/actions";
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

    const { loginUser } = this.props;

    // firebase
    //   .doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }));
    //     history.push(routes.MAIN);
    //   })
    //   .catch((error) => {
    //     this.setState(updateByPropertyName("error", error));
    //   });

    loginUser(email, password);

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const { authUser, authenticated } = this.props;
    const isInvalid = password === "" || email === "";

    if (authenticated && !isEmpty(authUser)) {
      return <Redirect to={routes.LANDING} />;
    }

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
                  onChange={(event) =>
                    this.setState(
                      updateByPropertyName("email", event.target.value)
                    )
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
                  onChange={(event) =>
                    this.setState(
                      updateByPropertyName("password", event.target.value)
                    )
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
              <button
                disabled={isInvalid}
                type="submit"
                className="btn btn-primary"
              >
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
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  </div>
);

const mapStateToProps = ({ user, auth }) => ({
  authUser: auth.authUser,
  authenticated: auth.authenticated,
  er_loginUser: auth.er_loginUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginUser }, dispatch);
export const LoginPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);

// export const LoginPage = compose(withRouter, withFirebase)(Login);
