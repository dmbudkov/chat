import * as types from "../constants/chats";
import callApi from "../utils/call-api";
import { redirect } from "./services";
import history from "../utils/history";


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
    const urlId = history.location.pathname.split('/').pop();

    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST
    });

    callApi('chats', token)
      .then(data => {
        dispatch({
          type: types.FETCH_ALL_CHATS_SUCCESS,
          payload: data
        });
        const chatIds = data.chats.map(chat => chat._id);

        if(chatIds.indexOf(urlId) !== -1){
          dispatch(setActiveChat(urlId));
        }
        else {
          return dispatch(redirect("chat"));
        }
      })
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

    return callApi(`chats/${chatId}`, token)
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
    dispatch(fetchChat(chatId))
      .then(data => {
        if(!data){
          dispatch({
            type: types.UNSET_ACTIVE_CHAT
          });
          return dispatch(redirect("chat"))
        }

        dispatch({
          type: types.SET_ACTIVE_CHAT,
          payload: data
        });
        dispatch(redirect(`chat/${chatId}`));
        return dispatch(getMessages());
      });
  }
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
    const { token } = getState().auth;
    const chatId = getState().chats.activeChat.id;

    dispatch({
      type: types.JOIN_CHAT_REQUEST
    });
    callApi(`chats/${chatId}/join`, token)
      .then(data => dispatch({
        type: types.JOIN_CHAT_SUCCESS,
        payload: data
      }))
      .catch(reason => {
        dispatch({
          type: types.JOIN_CHAT_FAILURE,
          payload: reason
        });
      })
  }
}

export function leaveChat() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const chatId = getState().chats.activeChat.id;

    dispatch({
      type: types.LEAVE_CHAT_REQUEST
    });
    callApi(`chats/${chatId}/leave`, token)
      .then(data => dispatch({
        type: types.LEAVE_CHAT_SUCCESS,
        payload: data
      }))
      .catch(reason => {
        dispatch({
          type: types.LEAVE_CHAT_FAILURE,
          payload: reason
        });
      })
  }
}

export function deleteChat() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch({
      type: types.DELETE_CHAT_REQUEST
    });
    const chatId = getState().chats.activeChat.id;

    if(!chatId) {
      return dispatch({
        type: types.DELETE_CHAT_FAILURE
      });
    }

    callApi(`chats/${chatId}`, token, { method: "DELETE" })
      .then(() => dispatch({
        type: types.DELETE_CHAT_SUCCESS,
        payload: chatId
      }))
      .catch(() => {
        dispatch({
          type: types.DELETE_CHAT_FAILURE
        });
      })
  }
}

export function sendMessage(message) {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const chatId = getState().chats.activeChat.id;
    dispatch({
      type: types.SEND_MESSAGE_REQUEST
    });

    callApi(`chats/${chatId}`, token, { method: "POST" }, {
      data: {
        "content": message,
        "statusMessage": false
      }
    })
      .then(data => dispatch({
        type: types.SEND_MESSAGE_SUCCESS,
        payload: data
      }))
      .catch(reason => {
        dispatch({
          type: types.SEND_MESSAGE_FAILURE,
          payload: reason
        });
      })
  }
}

export function getMessages() {
  return (dispatch, getState) => {
    const { token } = getState().auth;
    const chatId = getState().chats.activeChat.id;
    dispatch({
      type: types.CHAT_MESSAGES_REQUEST
    });

    callApi(`chats/${chatId}`, token)
      .then(data => dispatch({
        type: types.CHAT_MESSAGES_SUCCESS,
        payload: data
      }))
      .catch(reason => {
        dispatch({
          type: types.CHAT_MESSAGES_FAILURE,
          payload: reason
        });
      })
  }
}

export function editUser() {
  return (dispatch, getState) => {
    //
  }
}