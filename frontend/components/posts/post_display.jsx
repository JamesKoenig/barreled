import React        from 'react';
import { Redirect } from 'react-router';

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
          <div className="author-container">
            <h3 className="author-name">{author.username}</h3>
          </div>
          <div className="post-content">
            <p className="post-text">{post.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default PostDisplay;
