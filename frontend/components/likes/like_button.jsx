import React, {
    useEffect,
    useState,
} from 'react';

export default ({ postId, isLiked, toggleLike }) => {
  const [classes,setClasses] = useState("material-icons md-inactive");
  const likerOnClick = event => {
    event.stopPropagation();
    console.log(isLiked);
    toggleLike();
  }

  useEffect( () => {
    setClasses(`material-icons${
      isLiked ? " md-dark" : " md-inactive"
    }`);
  }, [postId, isLiked]);

  return (
    <button className='post-like-button'
            onClick={ likerOnClick }>
      <span className={classes}>
        favorite
      </span>
    </button>
  )
}
