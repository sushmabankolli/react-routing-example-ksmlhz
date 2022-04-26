import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <li>
        <Link to="/">Home</Link>

        <Link to="test">Test</Link>

        <Link to="contact">Contact</Link>
      </li>
    </nav>
  </header>
);

export default Header;
