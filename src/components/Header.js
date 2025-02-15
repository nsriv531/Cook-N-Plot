import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ animateOut }) => {
  return (
    <header className={`header ${animateOut ? 'slide-out' : ''}`}>
      <nav>
        <ul>
          <li><Link to="/">Garden</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;