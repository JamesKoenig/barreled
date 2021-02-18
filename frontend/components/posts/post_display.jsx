import React        from 'react';

class PostDisplay extends React.Component {

  componentDidMount() {
    this.props.getPost(this.props.postId);
  }

  render() {
    const { post, author } = this.props;
    if (!post || !author) {
      return null;
    } else {
      return (
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
      );
    }
  }
}

export default PostDisplay;
