/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { sendMessage } from "../redux/actions";

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

  handleSend = () => {
    const { sendMessage, authUser, selectedUser } = this.props;
    const { inputMessage } = this.state;
    if (!isEmpty(inputMessage)) {
      const authUserId = authUser.uid;
      const selectedUserId = selectedUser.userId;
      sendMessage(inputMessage, authUserId, selectedUserId);
    }
    this.setState({ inputMessage: "" });
  };

  render() {
    const { selectedUser } = this.props;
    const { inputMessage } = this.state;
    const isInvalid = isEmpty(selectedUser);
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            disabled={isInvalid}
            value={inputMessage}
            onChange={(event) =>
              this.setState({ inputMessage: event.target.value })
            }
            onKeyPress={this.handleKeyPress}
            type="text"
            className="write_msg"
            placeholder="Type a message"
          />
          <button
            className="msg_send_btn"
            type="button"
            onClick={this.handleSend}
          >
            <i className="fa fa-paper-plane-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, auth }) => ({
  authUser: auth.authUser,
  selectedUser: user.selectedUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export const ChatInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInputComponent);
