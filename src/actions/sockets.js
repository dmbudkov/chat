import SocketIOClient from 'socket.io-client';
import config from "../config";
import * as types from '../constants';
import { redirect } from "./services";


export function missingSocketConnection() {
  return {
    type: types.SOCKET_CONNECTION_MISSING,
    payload: new Error('Missing connection')
  }
}

let socket = null;

export function socketsConnect() {
  return (dispatch, getState) => {

    const state = getState();

    const { isFetching } = state.services;
    if(isFetching.sockets){
      return Promise.resolve();
    }

    const { token } = state.auth;

    dispatch({
      type: types.SOCKET_CONNECTION_REQUEST,
    });

    socket = SocketIOClient(config.SOCKETS_URI, {
      query: { token }
    });

    socket.on('connect', () => {
      dispatch({
        type: types.SOCKET_CONNECTION_SUCCESS,
      })
    });

    socket.on('error', (error) => {
      dispatch({
        type: types.SOCKET_CONNECTION_FAILURE,
        payload: new Error(`Connection ${error}`),
      })
    });

    socket.on('connect_error', () => {
      dispatch({
        type: types.SOCKET_CONNECTION_FAILURE,
        payload: new Error(`Lost connection`),
      })
    });

    socket.on('new-message', (message) => {
      dispatch({
        type: types.RECEIVE_MESSAGE,
        payload: message,
      })
    });

    socket.on('new-chat', (chat) => {
      dispatch({
        type: types.RECEIVE_NEW_CHAT,
        payload: chat,
      })
    });

    socket.on('deleted-chat', (chat) => {
      const { activeChat } = getState().chats;

      dispatch({
        type: types.RECEIVE_DELETED_CHAT,
        payload: chat.chat._id,
      });

      if(activeChat.id === chat.chat._id) {
        dispatch({
          type: types.UNSET_ACTIVE_CHAT,
        });
        dispatch(redirect('chat'));
      }
    });
  }
} 

export function sendMessage(content) {
  return (dispatch, getState) => {
    const { activeChat } = getState().chats;

    if(!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('send-message', {
      chatId: activeChat.id,
      content,
    }, () => {
      dispatch({
        type: types.SEND_MESSAGE,
        payload: {
          chatId: activeChat.id,
          content,
        }
      });
    });
  }
}

export function mountChat(chatId) {
  return (dispatch) => {
    if(!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat', chatId);

    dispatch({
      type: types.MOUNT_CHAT,
      payload: chatId,
    });
  }
}

export function unmountChat(chatId) {
  return (dispatch) => {
    if(!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('unmount-chat', chatId);

    dispatch({
      type: types.UNMOUNT_CHAT,
      payload: chatId,
    });
  }
}