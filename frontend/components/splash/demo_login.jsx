import React from 'react';

export default ( { loginDemoUser }) => (
  <form onSubmit={loginDemoUser}>
    <button className="demo-login-button logo-char-animation"
            type="submit">
      <span className="demo-icon">⚇</span>Demo login
    </button>
  </form>
)
