import { connect } from "react-redux";
import   Feed      from "./feed";
import { getFeed } from "../../actions/feed";

const mSTP = ({entities: { feedEntities: feedItems }}) => ({
  feedItems,
});

const mDTP = dispatch => ({
  getFeed: () => dispatch(getFeed()),
});

export default connect(mSTP,mDTP)(Feed);
