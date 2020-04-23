/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { messageListener } from "../redux/actions";
import { ChatIncoming, ChatOutgoing } from ".";
import { MessageService } from "../services/firebase";

class ChatAreaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { messageListener } = this.props;
    messageListener();
  }

  render() {
    const { authUser, selectedUser, messageList } = this.props;
    const authUserId = authUser.uid;
    const selectedUserId = selectedUser.userId;

    const filteredMessageList = messageList.filter(
      (message) =>
        (message.receiverId === authUserId &&
          message.senderId === selectedUserId) ||
        (message.receiverId === selectedUserId &&
          message.senderId === authUserId)
    );

    if (isEmpty(selectedUserId)) {
      return <div className="msg_history" />;
    }
    return (
      <div className="msg_history">
        {filteredMessageList.map((message) => (
          <React.Fragment key={message.messagId}>
            {message.senderId === selectedUserId ? (
              <ChatIncoming text={message.text} />
            ) : (
              <ChatOutgoing text={message.text} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth, message }) => ({
  authUser: auth.authUser,
  authenticated: auth.authenticated,
  selectedUser: user.selectedUser,
  messageList: message.messageList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ messageListener }, dispatch);

export const ChatArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatAreaComponent);
