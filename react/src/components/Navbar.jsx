import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-list">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>SKILLS</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
