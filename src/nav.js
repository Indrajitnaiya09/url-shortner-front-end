import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
      color: 'Red'
  }
  return (
      <nav>
          <ul className="nav-links ">
              <Link style={navStyle} to="/">
                <li> Home </li>
              </Link>
              <Link style={navStyle} to="/stat" >
                <li> Stat </li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;