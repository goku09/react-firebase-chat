import React, { Component } from "react";
import { firebase, auth } from "../Firebase";
import * as routes from "../Constants/routes";
import { db } from "../Firebase/firebase";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  userId: "",
  username: "",
  email: "",

  error: null
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  //  state = {};
  handleSignOut = event => {
    auth
      .doSignOut()
      .then(this.props.history.push(routes.LANDING))
      .catch();
  };

  // componentWillMount() {
  //   let uid;
  //   let promise = new Promise((resolve, reject) => {
  //     firebase.auth.onAuthStateChanged(authUser => {
  //       if (authUser) {
  //         uid = authUser.uid;
  //         this.setState(updateByPropertyName("userId", uid));
  //         console.log("User is present =>" + uid);
  //       } else {
  //         console.log("user is not present");
  //       }
  //     });

  //     if (uid != null) {
  //       resolve("Promise resolved successfully");
  //     } else {
  //       reject(Error("Promise rejected"));
  //     }
  //   });
  //   promise.then(uid => {
  //     const ref = db.ref("users").child(uid);
  //     ref
  //       .once("value")
  //       .then(snapshot => {
  //         const key = snapshot.key;
  //         const val = snapshot.val();
  //         console.log(val);
  //       })
  //       .catch(e => {
  //         console.log("Error fething data => ", e);
  //       });
  //   });

  //   this.setState(updateByPropertyName("username", this.state.username));
  // }

  componentWillMount() {
    let uid;
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        uid = authUser.uid;
        this.setState(updateByPropertyName("userId", uid));
        this.setState(updateByPropertyName("email", authUser.email));
        //        console.log("User is present =>" + uid);
      } else {
        //        console.log("user is not present");
      }
    });
  }

  componentDidMount() {
    //let uid = firebase.auth.currentUser.uid;
    // let uid;
    // firebase.auth.onAuthStateChanged(authUser => {
    //   if (authUser) {
    //     uid = authUser.uid;
    //     this.setState(updateByPropertyName("userId", uid));
    //     this.setState(updateByPropertyName("email", authUser.email));
    //     console.log("User is present =>" + uid);
    //   } else {
    //     console.log("user is not present");
    //   }
    // });
    // console.log("After getting uid");
    // const ref = db.ref("users");
    // ref.on("value", snapshot => {
    //   const key = snapshot.key;
    //   const val = snapshot.val();
    //   console.log(val);
    // });
    // this.setState(updateByPropertyName("username", "Pawan"));
  }

  render() {
    return (
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>{this.state.email}</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <button
              className="btn btn-secondary btn-sm"
              onClick={this.handleSignOut}
            >
              Sign Out
            </button>
            {/* <input type="text" className="search-bar" placeholder="Search" />
            <span className="input-group-addon">
              <button type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBox);
