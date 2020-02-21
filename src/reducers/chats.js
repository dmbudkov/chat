import * as types from "../constants/chats";
import { combineReducers } from "redux";

const initialState = {
  activeId: '',
  allIds: [],
  myId: [],
  byIds: {}
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
    case types.CHAT_CREATE_SUCCESS:
      return action.payload.chat._id;
    case types.UNSET_ACTIVE_CHAT:
      return "";
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
  activeId,
  allIds,
  myId,
  byIds
});


/* Selectors */
export const getChatId = chat => chat._id;
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);