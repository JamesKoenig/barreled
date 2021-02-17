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
        <div id="post-placeholder-container">
          <div className="bouncer">
            <div id="post-placeholder">
              <h1>{author.username}:</h1>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PostDisplay;
