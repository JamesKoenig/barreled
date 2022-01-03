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

export default onlyOnce;
