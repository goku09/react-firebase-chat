import React, { Component } from "react";
import UserItem from "./UserItem";
import { firebase, auth } from "../Firebase";
import { db } from "../Firebase/firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentWillMount() {
    const ref = db.ref("users");
    ref.on("value", usersnapshot => {
      let newUsers = [];
      usersnapshot.forEach(snapshot => {
        const key = snapshot.key;
        const val = snapshot.val();
        newUsers.push({
          userId: key,
          username: val["username"],
          email: val["email"]
        });
        console.log(key + "," + val["username"] + "," + val["email"]);
      });
      this.setState({ users: newUsers });
    });
  }

  render() {
    // if (this.state.users.length == 0) {
    //   return <h1>...Loading</h1>;
    // }
    const users = this.state.users;
    console.log(users);
    return (
      <div className="inbox_chat">
        {users.map(user => (
          // console.log(user.userId + " , " + user.username + " , " + user.email);

          <UserItem
            key={user.userId}
            userId={user.userId}
            username={user.username}
            email={user.email}
            isActive={false}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
