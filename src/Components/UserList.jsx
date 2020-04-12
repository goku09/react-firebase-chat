/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { compose } from "recompose";
import { UserItem } from ".";
import { withFirebase } from "../firebase";

// const updateByPropertyName = (propertyName, value) => () => ({
//   [propertyName]: value,
// });

export class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isActiveUser: "",
    };
  }

  componentWillMount() {
    const { firebase } = this.props;
    // this.setAuthUser();
    const ref = firebase.db.ref("users");
    ref.on("value", (usersnapshot) => {
      const newUsers = [];
      usersnapshot.forEach((snapshot) => {
        const { key } = snapshot;
        const val = snapshot.val();
        newUsers.push({
          userId: key,
          username: val.username,
          email: val.email,
        });
        //        console.log(key + "," + val["username"] + "," + val["email"]);
      });
      this.setState({ users: newUsers });
    });
  }

  handleClick = (userId) => {
    const { getActiveUser } = this.props;
    this.setState({ isActiveUser: userId });
    getActiveUser(userId);
  };

  render() {
    const { users, isActiveUser } = this.state;
    const { authUser } = this.props;

    return (
      <div className="inbox_chat">
        {users.map(user => (
          <React.Fragment>
            {authUser.uid !== user.userId && (
              <UserItem
                key={user.userId}
                userId={user.userId}
                username={user.username}
                email={user.email}
                isActive={user.userId === isActiveUser}
                onItemClick={this.handleClick}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export const UserList = compose(withFirebase)(UserListComponent);
