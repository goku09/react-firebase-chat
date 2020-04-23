/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { registerUser } from "../../redux/actions";
import "./signup.css";
import * as routes from "../../constants/routes";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: null,
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, password } = this.state;

    const { history, registerUser } = this.props;

    // firebase
    //   .doCreateUserWithEmailAndPassword(email, password)
    //   .then((authUser) => {
    //     firebase
    //       .doCreateUser(authUser.user.uid, username, email)
    //       .then(() => {
    //         this.setState(() => ({ ...INITIAL_STATE }));
    //         history.push(routes.MAIN);
    //       })
    //       .catch((error) => {
    //         this.setState(updateByPropertyName("error", error));
    //       });
    //   })
    //   .catch((error) => {
    //     this.setState(updateByPropertyName("error", error));
    //   });

    registerUser(username, email, password);

    event.preventDefault();
  };

  render() {
    const { username, email, password, error } = this.state;
    const { authUser, authenticated } = this.props;
    const isInvalid = password === "" || username === "" || email === "";
    if (authenticated && !isEmpty(authUser)) {
      return <Redirect to={routes.LANDING} />;
    }

    return (
      <div className="container-fluid">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <p>Please provide the below details</p>
            </div>
            <form id="Login" onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  value={username}
                  onChange={(event) =>
                    this.setState(
                      updateByPropertyName("username", event.target.value)
                    )
                  }
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </div>

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

              <button
                disabled={isInvalid}
                type="submit"
                className="btn btn-primary"
              >
                Signup
              </button>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth }) => ({
  authUser: auth.authUser,
  authenticated: auth.authenticated,
  er_loginUser: auth.er_loginUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ registerUser }, dispatch);
export const SignUpPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Signup)
);
