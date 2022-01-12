import React from "react";
import PostBox from "../posts/post_box";

const FeedPost = ({post,author}) => {
  if(!post || !author) return null;
  return (
    <PostBox post={post} author={author} />
  );
};

export default FeedPost;
