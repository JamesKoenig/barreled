import React from 'react';
import { connect } from 'react-redux';

const mSTP = ({ entities: { posts } }, { postId }) => ({
    totalLikes: posts[postId] ? posts[postId].totalLikes : 0,
})

const pluralizeLike = n =>
    n === 1 ? "Like" : "Likes"

const TotalLikes = ({ totalLikes }) => (
  <span className="total-likes-counter">
    { totalLikes > 0 ? (
        <p>
          <span className="total-likes-number">
            {totalLikes}
          </span>
          <span className="total-likes-descriptor">
            {pluralizeLike(totalLikes)}
          </span>
        </p>
      ) : null
    }
  </span>
)

export default connect(mSTP)(TotalLikes);
