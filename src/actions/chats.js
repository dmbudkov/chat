import * as types from "../constants/chats";
import callApi from "../utils/call-api";
import { redirect } from "./services";


export function fetchMyChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST
    });

    callApi('chats/my', token)
      .then(data => dispatch({
        type: types.FETCH_MY_CHATS_SUCCESS,
        payload: data
      }))
      .catch(reason => dispatch({
        type: types.FETCH_MY_CHATS_FAILURE,
        payload: reason
      }))
  };
}
export function fetchAllChats() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    });

    callApi('chats', token)
      .then(data => dispatch({
        type: types.FETCH_ALL_CHATS_SUCCESS,
        payload: data
      }))
      .catch(reason => dispatch({
        type: types.FETCH_ALL_CHATS_FAILURE,
        payload: reason
      }))
  };
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.FETCH_CHAT_REQUEST
    });

    callApi(`chats/${chatId}`, token)
      .then(data => {
        dispatch({
          type: types.FETCH_CHAT_SUCCESS,
          payload: data
        });
        return data
      })
      .catch(reason => dispatch({
        type: types.FETCH_CHAT_FAILURE,
        payload: reason
      }))
  };
}

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(fetchChat(chatId))
      .then(data => {
        if(!data){
          dispatch({
            type: types.UNSET_ACTIVE_CHAT
          });
          return dispatch(redirect("/chat"))
        }

        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data
        });
      });
  };
}

export function createChat(chatName) {

  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.CHAT_CREATE_REQUEST
    });
    callApi('chats', token, { method: "POST" }, {
      data: {
        title: chatName
      }
    })
      .then(data => dispatch({
        type: types.CHAT_CREATE_SUCCESS,
        payload: data
      }))
      .catch(reason => {
        dispatch({
          type: types.CHAT_CREATE_FAILURE,
          payload: reason
        });
        console.log('server error'); //TODO create notification
      })
  }
}

export function joinChat() {
  return (dispatch, getState) => {
    //
  }
}

export function leaveChat() {
  return (dispatch, getState) => {
    //
  }
}

export function deleteChat() {
  return (dispatch, getState) => {
    //
  }
}

export function sendMessage() {
  return (dispatch, getState) => {
    //
  }
}

export function editUser() {
  return (dispatch, getState) => {
    //
  }
}