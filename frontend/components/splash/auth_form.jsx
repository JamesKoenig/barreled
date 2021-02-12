import React from 'react';

export default props => (
  <>
    <p>auth form! from {props.formType}</p>
    <form>
      {props.inputs}
      <button>Get Started!</button>
      <button>Log In</button>
    </form>
  </>
)
