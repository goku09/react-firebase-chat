import actionTypes from "./types";
import {
  AuthService,
  UserService,
  MessageService,
} from "../../services/firebase";

const L = "_LOADING";
const F = "_FAIL";

export const registerUser = (username, email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.REGISTER_USER + L });
    AuthService.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch({
          type: actionTypes.LOG_IN_USER,
          payload: { authUser },
        });
        UserService.doCreateUser(authUser.user.uid, username, email)
          .then((res) => {
            dispatch({
              type: actionTypes.REGISTER_USER,
            });
          })
          .catch((e) => {
            dispatch({ type: actionTypes.REGISTER_USER + F, error: e });
          });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.REGISTER_USER + F, error: e });
      });
  };
};

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.LOG_IN_USER + L });
    AuthService.doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch({
          type: actionTypes.LOG_IN_USER,
          payload: { authUser, authenticated: true },
        });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.LOG_IN_USER + F, error: e });
      });
  };
};

export const logoutUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.LOG_OUT_USER + L });
    AuthService.doSignOut()
      .then(() => {
        dispatch({
          type: actionTypes.LOG_OUT_USER,
        });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.LOG_OUT_USER + F, error: e });
      });
  };
};

export const authListener = () => {
  return async (dispatch, getState) => {
    AuthService.doOnAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.LOG_IN_USER,
          payload: { authUser, authenticated: true },
        });
      } else if (getState().auth.authUser) {
        dispatch({
          type: actionTypes.LOG_OUT_USER,
          payload: {},
        });
      }
    });
  };
};

export const userListener = () => {
  return async (dispatch, getState) => {
    UserService.doOnUsersChanged((usersSnapshot) => {
      let userList = [];
      usersSnapshot.forEach((singleSnapshot) => {
        const { key } = singleSnapshot;
        const { username, email } = singleSnapshot.val();
        userList.push({
          userId: key,
          username: username,
          email: email,
        });
      });
      dispatch({ type: actionTypes.GET_USERS, payload: { userList } });
    });
  };
};

export const getAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.GET_USERS + L });
    UserService.doOnceGetUsers()
      .then((usersSnapshot) => {
        let userList = [];
        usersSnapshot.forEach((singleSnapshot) => {
          const { key } = singleSnapshot;
          const { username, email } = singleSnapshot.val();
          userList.push({
            userId: key,
            username: username,
            email: email,
          });
        });
        dispatch({ type: actionTypes.GET_USERS, payload: { userList } });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.GET_USERS + F, error: e });
      });
  };
};

export const selectUser = (selectedUser) => ({
  type: actionTypes.SET_SELECTED_USER,
  payload: { selectedUser },
});

export const messageListener = () => {
  return async (dispatch, getState) => {
    MessageService.onMessageAdded((messageSnapshot) => {
      let messageList = [];
      messageSnapshot.forEach((singleSnapshot) => {
        const { key } = singleSnapshot;
        const { text, receiverId, senderId, timestamp } = singleSnapshot.val();
        messageList.push({
          messagId: key,
          text,
          receiverId,
          senderId,
          timestamp,
        });
      });
      dispatch({ type: actionTypes.GET_MESSAGES, payload: { messageList } });
    });
  };
};

export const sendMessage = (text, senderId, receiverId) => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.SEND_MESSAGE + L });
    MessageService.doCreateMessage(text, senderId, receiverId)
      .then(() => {
        dispatch({
          type: actionTypes.SEND_MESSAGE,
          payload: {},
        });
      })
      .catch((e) => {
        dispatch({ type: actionTypes.SEND_MESSAGE + F, error: e });
      });
  };
};
