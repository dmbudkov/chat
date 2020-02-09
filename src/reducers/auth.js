import {SIGNUP_SUCCESS, SIGNUP_FAILURE,
        LOGIN_SUCCESS, LOGIN_FAILURE,
        LOGOUT_SUCCESS} from "../constants/";

const token = localStorage.getItem('token');

const initialState = {
  isAuth: !!token,
  user: null,
  token,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        username: action.payload.username,
        token: action.payload.token,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        username: null,
        token: '',
      };
    default:
      return state;
  }
}