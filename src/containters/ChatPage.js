import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, deleteChat, joinChat, leaveChat } from "../actions/chats";
import { logout } from "../actions/auth";
import ChatPage from "../components/ChatPage";
import * as fromChats from "../reducers/chats";


const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
  myChats: fromChats.getByIds(state.chats, state.chats.myId),
  activeChat: state.chats.activeChat,
  isAuth: state.auth.isAuth,
  isChatMember: fromChats.isChatMember(state.chats, state.chats.activeChat.id, state.auth.user._id),
  isMember: fromChats.isMember(state.chats, state.chats.activeChat.id, state.auth.user._id),
  isCreator: fromChats.isCreator(state.chats, state.chats.activeChat.id, state.auth.user._id),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  deleteChat,
  logout,
  joinChat,
  leaveChat
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);