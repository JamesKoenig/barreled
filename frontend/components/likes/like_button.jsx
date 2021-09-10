import React, {
    useEffect,
    useState,
} from 'react';

export default ({ postId, isLiked, toggleLike }) => {
  const [classes,setClasses] = useState("material-icons md-inactive");

  const onlyOnce = callback => {
    let blocked = false;
    const wrapped = (...args) => {
      if(!blocked) {
          blocked = true;
          return callback(...args);
      }
    }
    return wrapped;
  }

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
