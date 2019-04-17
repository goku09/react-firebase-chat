/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as routes from "../Constants/routes";

// const updateByPropertyName = (propertyName, value) => () => ({
//   [propertyName]: value,
// });

class SearchBoxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSignOut = (event) => {
    const { firebase, history } = this.props;
    firebase
      .doSignOut()
      .then(history.push(routes.LANDING))
      .catch();
  };

  render() {
    const { authUser } = this.props;
    const { email } = authUser;
    return (
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>{email}</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const SearchBox = compose(
  withRouter,
  withFirebase,
)(SearchBoxComponent);
