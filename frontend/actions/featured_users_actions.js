import { fetchFeatured } from "../utils/featured_utils";

export const RECEIVE_FEATURED_USERS = "RECEIVE_FEATURED_USERS";

const receiveFeatured = featuredUsers => ({
  type: RECEIVE_FEATURED_USERS,
  ...featuredUsers, //confusingly, featuredUsers is the key of the array
});

export const getFeatured = () => dispatch =>
  fetchFeatured().then(
    featuredUsers =>
      dispatch(receiveFeatured(featuredUsers))
  );
