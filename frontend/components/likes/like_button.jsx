import React, {
    useEffect,
    useState,
} from 'react';

import onlyOnce from '../../utils/only_once';

export default ({ postId, isLiked, toggleLike }) => {
  const [classes,setClasses] = useState("material-icons md-inactive");

  //onlyOnce is run-again every time the props change
  const likerOnClick = onlyOnce( event => {
    event.stopPropagation();
    toggleLike();
  });

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
