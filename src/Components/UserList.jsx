/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { userListener, selectUser } from "../redux/actions";
import { UserItem } from ".";
import { AuthService, UserService, MessageService } from "../services/firebase";

export class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { userListener } = this.props;
    userListener();
  }

  handleClick = (user) => {
    const { selectUser } = this.props;
    selectUser(user);
  };

  render() {
    const { authUser, userList, selectedUser } = this.props;
    const filteredUserList = userList.filter(
      (user) => authUser.uid !== user.userId
    );

    return (
      <div className="inbox_chat">
        {filteredUserList.map((user) => (
          <UserItem
            key={user.userId}
            username={user.username}
            email={user.email}
            isActive={user.userId === selectedUser.userId}
            onItemClick={() => this.handleClick(user)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth }) => ({
  authUser: auth.authUser,
  userList: user.userList,
  selectedUser: user.selectedUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ userListener, selectUser }, dispatch);

export const UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListComponent);
