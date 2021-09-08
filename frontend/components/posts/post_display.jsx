import React from 'react';
import { Redirect } from 'react-router';
import PostBox from './post_box';

class PostDisplay extends React.Component {

  componentDidMount() {
    this.props.getPost(this.props.postId);
  }

  componentDidUpdate(prevProps) {
      if(this.props.postId !== prevProps.postId) {
          this.props.getPost(this.props.postId);
      }
  }

  render() {
    const { post, author, clearPostErrors, notFound } = this.props;
    if(notFound) {
      clearPostErrors();
      return (<Redirect to="/404" />);
    } else if (!post || !author) {
      return null;
    } else {
      return (
        <PostBox post={post} author={author} />
      );
    }
  }
}

export default PostDisplay;
