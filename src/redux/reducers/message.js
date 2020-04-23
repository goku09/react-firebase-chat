import actionTypes from "../actions/types";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_sendMessage: false,
  ld_messageList: false,

  er_sendMessage: null,
  er_messageList: null,

  messageList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE + L:
      return { ...state, ld_sendMessage: true, er_sendMessage: null };
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        ld_sendMessage: false,
        er_sendMessage: null,
      };
    case actionTypes.SEND_MESSAGE + F:
      return {
        ...state,
        ld_sendMessage: false,
        er_sendMessage: action.error,
      };
    case actionTypes.GET_MESSAGES + L:
      return { ...state, ld_messageList: true, er_messageList: null };
    case actionTypes.GET_MESSAGES:
      const { messageList } = action.payload;
      return {
        ...state,
        ld_messageList: false,
        er_messageList: null,
        messageList: [...messageList],
      };
    case actionTypes.GET_MESSAGES + F:
      return {
        ...state,
        ld_messageList: false,
        er_messageList: action.error,
      };

    default:
      return state;
  }
};
