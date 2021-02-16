import React from 'react';

const _renderError = err => (
  <li key={err}>{err}</li>
);

export default ({ errors }) => (
  <ul id="error-box">
    { errors.map( _renderError ) }
  </ul>
);
