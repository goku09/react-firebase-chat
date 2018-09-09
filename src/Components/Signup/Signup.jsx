import React, { Component } from "react";
import "./signup.css";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../Constants/routes";
import { firebase, auth, db } from "../../Firebase";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: null
};

const SignUpPage = ({ history }) => (
  <div className="container-fluid">
    <div className="login-form">
      <div className="main-div">
        <div className="panel">
          <p>Please provide the below details</p>
        </div>
        <Signup history={history} />
      </div>
    </div>
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        // Create a user in your own accessible Firebase Database too
        const authUser = firebase.auth.currentUser;
        console.log("UserId of authenticatd User => " + authUser.uid);
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.MAIN);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };
  render() {
    const { username, email, password, error } = this.state;

    const isInvalid = password === "" || username === "" || email === "";

    return (
      <form id="Login" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            value={username}
            onChange={event =>
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
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
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
            onChange={event =>
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

        <button disabled={isInvalid} type="submit" className="btn btn-primary">
          Signup
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignUpPage);
