import actionTypes from "../actions/types";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_registerUser: false,
  ld_userList: false,
  ld_selectedUser: false,

  er_registerUser: null,
  er_userList: null,
  er_selectedUser: null,

  userList: [],
  selectedUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER + L:
      return { ...state, ld_registerUser: true, er_registerUser: null };
    case actionTypes.REGISTER_USER:
      return {
        ...state,
        ld_registerUser: false,
        er_registerUser: null,
      };
    case actionTypes.REGISTER_USER + F:
      return {
        ...state,
        ld_registerUser: false,
        er_registerUser: action.error,
      };
    case actionTypes.GET_USERS + L:
      return { ...state, ld_userList: true, er_userList: null };
    case actionTypes.GET_USERS:
      const { userList } = action.payload;
      return {
        ...state,
        ld_userList: false,
        er_userList: null,
        userList: [...userList],
      };
    case actionTypes.GET_USERS + F:
      return {
        ...state,
        ld_userList: false,
        er_userList: action.error,
      };
    case actionTypes.SET_SELECTED_USER + L:
      return { ...state, ld_selectedUser: true, er_selectedUser: null };
    case actionTypes.SET_SELECTED_USER:
      const { selectedUser } = action.payload;
      return {
        ...state,
        ld_selectedUser: false,
        er_selectedUser: null,
        selectedUser: { ...selectedUser },
      };
    case actionTypes.SET_SELECTED_USER + F:
      return {
        ...state,
        ld_selectedUser: false,
        er_selectedUser: action.error,
      };

    default:
      return state;
  }
};
