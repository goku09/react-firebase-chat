/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { ChatIncoming, ChatOutgoing } from ".";

class ChatAreaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    const { firebase } = this.props;
    firebase.onMessageAdded((messagesnapshot) => {
      const newMessages = [];
      messagesnapshot.forEach((snapshot) => {
        const { key } = snapshot;
        const val = snapshot.val();
        newMessages.push({
          messagId: key,
          text: val.text,
          receiverId: val.receiverId,
          senderId: val.senderId,
          timestamp: val.timestamp,
        });
      });
      this.setState({ messages: newMessages });
    });
  }

  render() {
    const { messages } = this.state;
    const { authUser, activeUser } = this.props;
    const userId = authUser.uid;

    if (!activeUser) {
      return <div className="msg_history" />;
    }
    return (
      <div className="msg_history">
        {messages.map((message) => {
          if (
            (message.receiverId === userId && message.senderId === activeUser)
            || (message.receiverId === activeUser && message.senderId === userId)
          ) {
            return (
              <React.Fragment>
                {message.senderId === activeUser ? (
                  <ChatIncoming key={message.messagId} text={message.text} />
                ) : (
                  <ChatOutgoing key={message.messagId} text={message.text} />
                )}
              </React.Fragment>
            );
          }
          return <React.Fragment />;
        })}
      </div>
    );
  }
}

export const ChatArea = compose(withFirebase)(ChatAreaComponent);
