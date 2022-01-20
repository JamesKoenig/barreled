import { connect } from "react-redux";
import Feed from "../feed/feed";
import { getLikes } from "../../actions/feed";

const mSTP = ({entities: { feedEntities: feedItems }}) => ({
  feedItems,
});

const mDTP = {
  getFeed: getLikes,
};

export default connect(mSTP,mDTP)(Feed);
