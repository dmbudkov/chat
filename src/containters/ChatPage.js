import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, setActiveChat, createChat } from "../actions/chats";
import { logout } from "../actions/auth";
import ChatPage from "../components/ChatPage";
import * as fromChats from "../reducers/chats";
import history from "../utils/history";



const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
  myChats: fromChats.getByIds(state.chats, state.chats.myId),
  activeId: state.chats.activeId,
  urlId: history.location.pathname.split('/').pop()
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  logout
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);