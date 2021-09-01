import React from 'react';

export default ({ isLiked, likeCb }) => {
  const likerOnClick = event => {
    event.stopPropagation();
    alert("like button pressed");
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
