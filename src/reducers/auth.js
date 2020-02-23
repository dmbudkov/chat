import * as types from "../constants/";

const token = localStorage.getItem('token');

const initialState = {
  isAuth: !!token,
  user: {},
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        username: action.payload.username,
        token: action.payload.token,
      };
    case types.RECEIVE_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        username: action.payload.username
      };
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.RECEIVE_AUTH_FAILURE:
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        username: null,
        token: '',
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.user.username,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
        }
      };
    default:
      return state;
  }
}