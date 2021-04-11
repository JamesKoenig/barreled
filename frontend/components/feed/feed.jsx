import React, {
  useEffect
} from 'react';

export default ({ posts=[], logout, getFeed }) => {
  useEffect(() => {
    getFeed();
  }, []);
  return (
  <div id="feed">
    <button onClick={() => logout()}>logout</button>
    <ul>
      {posts.map( () => {}) }
    </ul>
  </div>
)}
