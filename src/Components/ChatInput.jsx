/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

export class ChatInputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMessage: "",
    };
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSend();
    }
  };

  handleSend = (event) => {
    const { firebase, authUser, activeUser } = this.props;
    const { inputMessage } = this.state;
    if (inputMessage !== "") {
      const authUserId = authUser.uid;
      firebase.doCreateMessage(inputMessage, authUserId, activeUser);
    }
    this.setState({ inputMessage: "" });
  };

  render() {
    const { activeUser } = this.props;
    const { inputMessage } = this.state;
    const isInvalid = !activeUser;
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            disabled={isInvalid}
            value={inputMessage}
            onChange={event => this.setState(updateByPropertyName("inputMessage", event.target.value))
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

export const ChatInput = compose(withFirebase)(ChatInputComponent);
