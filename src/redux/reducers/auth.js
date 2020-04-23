import actionTypes from "../actions/types";

const L = "_LOADING";
const F = "_FAIL";

const initialState = {
  ld_loginUser: false,
  ld_logoutUser: false,

  er_loginUser: null,
  er_logoutUser: null,

  authUser: null,
  authenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_USER + L:
      return { ...state, ld_loginUser: true, er_loginUser: null };
    case actionTypes.LOG_IN_USER:
      const { authUser, authenticated } = action.payload;
      return {
        ...state,
        ld_loginUser: false,
        er_loginUser: null,
        authUser: { ...authUser },
        authenticated: authenticated,
      };
    case actionTypes.LOG_IN_USER + F:
      return {
        ...state,
        ld_loginUser: false,
        er_loginUser: action.error,
      };
    case actionTypes.LOG_OUT_USER + L:
      return { ...state, ld_logoutUser: true, er_logoutUser: null };
    case actionTypes.LOG_OUT_USER:
      return {
        ...state,
        ld_logoutUser: false,
        er_logoutUser: null,
        authUser: null,
        authenticated: false,
      };
    case actionTypes.LOG_OUT_USER + F:
      return {
        ...state,
        ld_logoutUser: false,
        er_logoutUser: action.error,
      };

    default:
      return state;
  }
};
