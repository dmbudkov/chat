import * as types from "../constants/";
import fetch from "isomorphic-fetch";


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_REQUEST,
    });

    return fetch("http://localhost:8000/v1/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then(data => data.json())
      .then(json => {
        if(json.success){
          return json;
        }
        throw new Error(json.message);
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

    return fetch("http://localhost:8000/v1/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then(data => data.json())
      .then(json => {
        if(json.success){
          return json;
        }
        throw new Error(json.message);
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
    })
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

    return fetch("http://localhost:8000/v1/users/me", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then(data => data.json())
      .then(json => {
        if(json.success){
          return json;
        }
        throw new Error(json.message);
      })
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