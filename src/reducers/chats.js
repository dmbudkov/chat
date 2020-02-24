import * as types from "../constants";
import { combineReducers } from "redux";

const initialState = {
  activeChat: {
    id: '',
    title: ''
  },
  allIds: [],
  myId: [],
  byIds: {},
  messages: [],
  searchWord: '',
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
    case types.RECEIVE_NEW_CHAT:
      return [
        ...state,
        action.payload.chat._id
      ];
    case types.DELETE_CHAT_SUCCESS:
    case types.RECEIVE_DELETED_CHAT:
      return state.filter(i => i !== action.payload);
    default:
      return state;
  }
};
const myId = (state = initialState.myId, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case types.CHAT_CREATE_SUCCESS:
    case types.JOIN_CHAT_SUCCESS:
      return [
        ...state,
        action.payload.chat._id
      ];
    case types.DELETE_CHAT_SUCCESS:
    case types.RECEIVE_DELETED_CHAT:
      return state.filter(i => i !== action.payload);
    case types.LEAVE_CHAT_SUCCESS:
      return state.filter(i => i !== action.payload.chat._id);
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
    case types.JOIN_CHAT_SUCCESS:
    case types.LEAVE_CHAT_SUCCESS:
    case types.RECEIVE_NEW_CHAT:
      return {
        ...state,
        [action.payload.chat._id]: action.payload.chat
      };
    default:
      return state;
  }
};

const messages = (state = initialState.messages, action) => {
  switch (action.type) {
    case types.CHAT_MESSAGES_SUCCESS:
      return action.payload.chat.messages;
    case types.RECEIVE_MESSAGE:
      return [...state, action.payload.message];
    default:
      return state;
  }
};

const searchWord = (state = initialState.searchWord, action) => {
  switch (action.type) {
    case types.SEARCH_FILTER_APPLY:
      return action.payload;
    default:
      return state;
  }
};


export default combineReducers({
  activeChat,
  allIds,
  myId,
  byIds,
  messages,
  searchWord,
});


/* Selectors */
export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);

export const isMember = (state, chatId, userId) => {
  let chat = state.byIds[chatId];
  return chat ? chat.members.some(i => i._id === userId) : false;
};

export const isCreator = (state, chatId, userId) => {
  let chat = state.byIds[chatId];
  return chat ? chat.creator._id === userId : false;
};

export const isChatMember = (...args) => isMember(...args) || isCreator(...args);

export const chatListFilter = (chats, q) => chats.filter(i => i.title.toLowerCase().includes(q.toLowerCase()));