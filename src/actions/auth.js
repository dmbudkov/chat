import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
        LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE} from "../constants/";
import fetch from "isomorphic-fetch";


export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
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
      .then(json => dispatch({
        type: SIGNUP_SUCCESS,
        payload: json
      }))
      .catch(json => dispatch({
        type: SIGNUP_FAILURE,
        payload: json
      }))
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
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
      .then(json => dispatch({
        type: LOGIN_SUCCESS,
        payload: json
      }))
      .catch(json => dispatch({
        type: LOGIN_FAILURE,
        payload: json
      }))
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST,
    })
  };
}