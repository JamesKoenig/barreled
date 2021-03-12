import { connect   } from 'react-redux';
import { openModal } from '../../actions/modal';
import { logout    } from '../../actions/session';
import   Header      from './base_header';

const mSTP = ({ entities: { posts },
                 session: { currentUserId } }) => ({
  currentUserId,
  posts,
});

const mDTP = dispatch => ({
  navButtons: [
    ["New Post",() => dispatch(openModal('newPost'))],
    ["Logout", () => dispatch(logout())],
  ],
  editPost: ["Edit Post", () => dispatch( openModal("editPost") ) ],
});

/* routerProps is being used in lieu of ownProps to signal their sole
 *  origin/use */
const mergeProps = ({ currentUserId,
                      posts },
                    { navButtons,
                      editPost },
                    { match: { params: { postId } } } ) => {
  if(postId && posts[postId]
          && posts[postId].authorId === currentUserId ) {
    return { navButtons: [editPost, ...navButtons] };
  } else {
  return { navButtons };
  }
}

export default connect(mSTP,mDTP,mergeProps)(Header);
