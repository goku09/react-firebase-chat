import React, { Component } from "react";
import { auth, db, firebase } from "../Firebase/firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

export class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: "",
    };
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleSend();
    }
  };

  handleSend = event => {
    if (this.state.inputMessage !== "") {
      const authUserId = auth.currentUser.uid;
      const ref = db.ref("messages");
      const text = {
        text: this.state.inputMessage,
        senderId: authUserId,
        receiverId: this.props.activeUser,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      };
      //    console.log(text);
      ref.push(text);
    }
    this.setState({ inputMessage: "" });
  };

  render() {
    const isInvalid = this.props.activeUser ? false : true;
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            disabled={isInvalid}
            value={this.state.inputMessage}
            onChange={event =>
              this.setState(updateByPropertyName("inputMessage", event.target.value))
            }
            onKeyPress={this.handleKeyPress}
            type="text"
            className="write_msg"
            placeholder="Type a message"
          />
          <button className="msg_send_btn" type="button" onClick={this.handleSend}>
            <i className="fa fa-paper-plane-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}
