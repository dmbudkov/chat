import * as types from "../constants/auth";
import callApi from "../utils/call-api";


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

    if(!token) {
      dispatch({
        type: types.RECEIVE_AUTH_FAILURE,
      });
      return;
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