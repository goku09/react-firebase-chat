import React, { Component } from "react";
import { ChatIncoming } from ".";
import { ChatOutgoing } from ".";
import { db, auth } from "../Firebase/firebase";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

export class ChatArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      userId: ""
    };
  }

  setAuthUser() {
    let uid;
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        uid = authUser.uid;
        this.setState(updateByPropertyName("userId", uid));
      } else {
      }
    });
  }

  componentWillMount() {
    this.setAuthUser();
    const ref = db.ref("messages");
    ref.orderByChild("timestamp").on("value", messagesnapshot => {
      let newMessages = [];
      messagesnapshot.forEach(snapshot => {
        const key = snapshot.key;
        const val = snapshot.val();
        newMessages.push({
          messagId: key,
          text: val["text"],
          receiverId: val["receiverId"],
          senderId: val["senderId"],
          timestamp: val["timestamp"]
        });
        //        console.log(newMessages);
      });
      this.setState({ messages: newMessages });
    });
  }
  render() {
    const messages = this.state.messages;
    //    console.log(messages);

    console.log(this.state.userId + " , " + this.props.activeUser);

    if (!this.props.activeUser) {
      return <div className="msg_history" />;
    }
    return (
      <div className="msg_history">
        {messages.map(message => {
          if (
            (message.receiverId === this.state.userId &&
              message.senderId === this.props.activeUser) ||
            (message.receiverId === this.props.activeUser &&
              message.senderId === this.state.userId)
          ) {
            return (
              <React.Fragment>
                {message.senderId === this.props.activeUser ? (
                  <ChatIncoming key={message.messagId} text={message.text} />
                ) : (
                  <ChatOutgoing key={message.messagId} text={message.text} />
                )}
              </React.Fragment>
            );
          } else {
            return <React.Fragment />;
          }
        })}
      </div>
    );
  }
}
