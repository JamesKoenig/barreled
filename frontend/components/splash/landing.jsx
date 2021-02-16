import   React  from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link to="/signup">
      <button className="blue">Get Started</button>
    </Link>
    <Link to="/login">
      <button className="dark">Log In</button>
    </Link>
  </div>
)
