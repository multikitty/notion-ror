import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import { logout } from '../../actions/session-actions';
import {
  createPage,
  fetchPage,
  fetchPages,
  updatePage,
  deletePage,
} from '../../actions/page-actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.currentUserId],
  // pages: getAllPages(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  createPage: (page) => dispatch(createPage(page)),
  fetchPage: (pageId) => dispatch(fetchPage(pageId)),
  fetchPages: (userId) => dispatch(fetchPages(userId)),
  updatePage: (page) => dispatch(updatePage(page)),
  deletePage: (pageId) => dispatch(deletePage(pageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
