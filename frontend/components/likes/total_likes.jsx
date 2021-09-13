import React from 'react';
import { connect } from 'react-redux';

const mSTP = ({ entities: { posts } }, { postId }) => ({
    totalLikes: posts[postId] ? posts[postId].totalLikes : 0,
})

const pluralizeLike = n =>
    n === 1 ? "like" : "likes"

const TotalLikes = ({ totalLikes }) => (
  <span className="total-likes-counter">
    { totalLikes > 0 ? (
        <h3>
          <span className="total-likes-number">
            {totalLikes}
          </span>
          <span className="total-likes-descriptor">
            {pluralizeLike(totalLikes)}
          </span>
        </h3>
      ) : null
    }
  </span>
)

export default connect(mSTP)(TotalLikes);
