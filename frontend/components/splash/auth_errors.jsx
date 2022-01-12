import React from "react";

const _renderError = err => (
  <li key={err}>{err}</li>
);

const AuthErrors = ({ errors }) => (
  <ul id="error-box">
    { errors.map( _renderError ) }
  </ul>
);

export default AuthErrors;
