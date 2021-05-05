import React from 'react';
import PostBox from './post_box';

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
        <PostBox post={post} author={author} />
      );
    }
  }
}

export default PostDisplay;
