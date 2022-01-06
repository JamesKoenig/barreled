import { connect } from "react-redux";
import   Feed      from "./feed";
import { logout  } from "../../actions/session.js";
import { getFeed } from "../../actions/feed";

const mSTP = ({entities: { feedEntities: feedItems }}) => ({
  feedItems,
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  getFeed: () => dispatch(getFeed()),
});

export default connect(mSTP,mDTP)(Feed);
