import { connect } from "react-redux";
import Feed from "../feed/feed";
import { getIndex } from "../../actions/feed";

const mSTP = ({entities: { feedEntities: feedItems }}) => {
  console.log("in explore mSTP!");
  return ({
  feedItems,
});
}

const mDTP = {
  getFeed: getIndex,
};

export default connect(mSTP,mDTP)(Feed);
