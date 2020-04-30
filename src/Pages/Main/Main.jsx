/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../../redux/actions";
import "./main.css";
import { Sidebar, ChatBox } from "../../components";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { authUser } = this.props;
    return (
      <React.Fragment>
        <div className="inbox_msg">
          <Sidebar />
          <ChatBox />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
  authUser: auth.authUser,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectUser }, dispatch);
export const MainPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
);
