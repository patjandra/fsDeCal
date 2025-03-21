import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div>My Website</div>
      <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/nothome">Not Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
