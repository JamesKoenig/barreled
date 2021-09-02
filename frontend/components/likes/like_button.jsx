import React from 'react';

export default ({ postId, isLiked, toggleLike }) => {
  const likerOnClick = event => {
    event.stopPropagation();
    alert(`like button pressed on ${postId}`);
  }

  return (
    <button className='post-like-button'
            onClick={ likerOnClick }>
      <span className='material-icons'>
        favorite
      </span>
    </button>
  )
}
