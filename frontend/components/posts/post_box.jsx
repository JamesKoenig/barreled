import React from 'react';

export default ({ post, author }) => (
  <div className="post-display">
    <header className="author-container">
      <h3 className="author-name">{author.username}</h3>
    </header>
    <div className="post-content">
      <p className="post-text">{post.body}</p>
    </div>
    <footer className="post-properties">
      <p>imma footer!</p>
    </footer>
  </div>
)
