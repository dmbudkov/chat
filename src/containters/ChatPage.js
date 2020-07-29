import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, fetchMembers, setActiveChat, createChat, deleteChat, joinChat, leaveChat, getMessages } from "../actions/chats";
import { logout, editUser } from "../actions/auth";
import { filterApply } from "../actions/services";
import { sendMessage, mountChat, unmountChat, socketsConnect } from "../actions/sockets";
import ChatPage from "../components/ChatPage";
import * as fromChats from "../reducers/chats";
import getUserName from "../utils/get-user-name";


const mapStateToProps = state => ({
  chats: fromChats.chatListFilter(
    fromChats.getByIds(state.chats, state.chats.allIds),
    state.chats.searchWord,
  ),
  myChats: fromChats.chatListFilter(
    fromChats.getByIds(state.chats, state.chats.myId),
    state.chats.searchWord,
  ),
  members: fromChats.memberListFilter(
    fromChats.getByMember(state.chats, state.chats.members).map(e => {
      e.creator = {
        _id: null
      };
      e.title = getUserName(e);
      return e;
    }),
    state.chats.searchWord,
  ),
  activeChat: state.chats.activeChat,
  isAuth: state.auth.isAuth,
  isChatMember: fromChats.isChatMember(state.chats, state.chats.activeChat.id, state.auth.user._id),
  isMember: fromChats.isMember(state.chats, state.chats.activeChat.id, state.auth.user._id),
  isCreator: fromChats.isCreator(state.chats, state.chats.activeChat.id, state.auth.user._id),
  messages: state.chats.messages,
  user: state.auth.user,
  error: state.services.errors.chat,
  isConnected: state.services.isConnected
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  fetchMembers,
  setActiveChat,
  createChat,
  deleteChat,
  logout,
  joinChat,
  leaveChat,
  getMessages,
  editUser,
  filterApply,
  sendMessage,
  mountChat,
  unmountChat,
  socketsConnect
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);