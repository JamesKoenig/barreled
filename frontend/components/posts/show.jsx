import React from 'react';

import PostDisplay from './post_display_container';

export default () => (
  <div id="post-show">
    <div className="post-show-side"></div>
    <div className="post-show-centerize">
        <PostDisplay />
    </div>
    <div className="post-show-side"></div>
  </div>
)
