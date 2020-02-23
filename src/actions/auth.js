import * as types from "../constants/auth";
import callApi from "../utils/call-api";
import { getMessages } from "./chats";


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST,
    });

    return callApi("signup", undefined,{ method: "POST" }, {
      username: username,
      password: password
    })
      .then(json => {
        if(!json.token){
          throw new Error(json.message);
        }
        localStorage.setItem('token', json.token);
        return json;
      })
      .then(json => dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: types.SIGNUP_FAILURE,
        payload: reason
      }))
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST,
    });

    return callApi("login", undefined,{ method: "POST" },{
      username: username,
      password: password
    })
      .then(json => {
        if(!json.token){
          throw new Error(json.message);
        }
        localStorage.setItem('token', json.token);
        return json;
      })
      .then(json => dispatch({
        type: types.LOGIN_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: types.LOGIN_FAILURE,
        payload: reason
      }))
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_REQUEST,
    });

    new Promise((resolve, reject) => {
      localStorage.removeItem("token");
      resolve();
    }).then(() => {
        dispatch({
          type: types.LOGOUT_SUCCESS
        });
      })
      .catch(reason => {
        dispatch({
          type: types.LOGOUT_FAILURE,
          payload: reason
        });
      });
  };
}

export function recieveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.RECEIVE_AUTH_REQUEST
    });

    if(!token) {
      return dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      });
    }

    return callApi("users/me", token)
      .then(json => dispatch({
        type: types.RECEIVE_AUTH_SUCCESS,
        payload: json
      }))
      .catch(reason => dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
        payload: reason
      }))
  };
}

export function editUser(data) {
  return (dispatch, getState) => {
    const { token } = getState().auth;

    dispatch({
      type: types.UPDATE_PROFILE_REQUEST,
    });

    if(!token) {
      return dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
      });
    }

    return callApi("users/me", token, { method: "POST" }, { data })
      .then(json => {
        dispatch({
          type: types.UPDATE_PROFILE_SUCCESS,
          payload: json
        });
        dispatch(getMessages());
      }).catch(reason => dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
        payload: reason
      }))
  }
}