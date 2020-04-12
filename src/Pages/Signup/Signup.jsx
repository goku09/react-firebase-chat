/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../../firebase";
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

    const { history, firebase } = this.props;

    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // Create a user in your own accessible Firebase Database too
        firebase
          .doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.MAIN);
          })
          .catch((error) => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch((error) => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username, email, password, error,
    } = this.state;

    const isInvalid = password === "" || username === "" || email === "";

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
                  onChange={event => this.setState(updateByPropertyName("username", event.target.value))
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

              <button disabled={isInvalid} type="submit" className="btn btn-primary">
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

export const SignUpPage = compose(
  withRouter,
  withFirebase,
)(Signup);
