/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSignOut = (event) => {
    const { logoutUser } = this.props;
    logoutUser();
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
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authUser: auth.authUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logoutUser }, dispatch);
export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
