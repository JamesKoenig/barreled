import { connect } from "react-redux";
import Featured from "./featured";
import { getFeatured } from "../../actions/featured_users_actions";

const mSTP = state => ({
  featuredUsers: state.entities.featuredUsers,
});

const mDTP = {
  getFeatured
};

export default connect(mSTP, mDTP)(Featured);
