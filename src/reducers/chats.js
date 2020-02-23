import * as types from "../constants/chats";
import { combineReducers } from "redux";

const initialState = {
  activeChat: {
    id: '',
    title: ''
  },
  allIds: [],
  myId: [],
  byIds: {}
};

const activeChat = (state = {
  id: initialState.id,
  title: initialState.title
}, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
    case types.CHAT_CREATE_SUCCESS:
      return {
        ...state,
        id: action.payload.chat._id,
        title: action.payload.chat.title
      };
    case types.UNSET_ACTIVE_CHAT:
      return {
        ...state,
        id: '',
        title: ''
      };
    default:
      return state;
  }
};
const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CHAT_CREATE_SUCCESS:
      return [
        ...state,
        action.payload.chat._id
      ];
    case types.DELETE_CHAT_SUCCESS:
      const index = state.indexOf(action.payload);

      return [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ];
    default:
      return state;
  }
};
const myId = (state = initialState.myId, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CHAT_CREATE_SUCCESS:
      return [
        ...state,
        action.payload.chat._id
      ];
    case types.DELETE_CHAT_SUCCESS:
      const index = state.indexOf(action.payload);

      return [
        ...state.slice(0, index),
        ...state.slice(index+1, state.length)
      ];
    default:
      return state;
  }
};
const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SUCCESS:
    case types.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [chat._id]: chat
        }), {})
      };
    case types.CHAT_CREATE_SUCCESS:
      return {
        ...state,
        [action.payload.chat._id]: action.payload.chat
      };
    default:
      return state;
  }
};

export default combineReducers({
  activeChat,
  allIds,
  myId,
  byIds
});


/* Selectors */
export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);

export const isMember = (state, chatId, userId) => {
  let chat = state.byIds[chatId];
  return chat ? chat.members.indexOf(userId) !== -1 : false;
};

export const isCreator = (state, chatId, userId) => {
  let chat = state.byIds[chatId];
  return chat ? chat.creator._id === userId : false;
};

export const isChatMember = (...args) => isMember(...args) || isCreator(...args);