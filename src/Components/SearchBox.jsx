import React, { Component } from "react";
import { auth } from "../Firebase";
import * as routes from "../Constants/routes";

class SearchBox extends Component {
  state = {};
  handleSignOut = event => {
    auth
      .doSignOut()
      .then(this.props.history.push(routes.SIGN_IN))
      .catch();
  };
  render() {
    return (
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>Name</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <button
              class="btn btn-secondary btn-sm"
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

export default SearchBox;
