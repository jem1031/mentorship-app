import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/hello">Hello Home</Link>
            </li>
            <li>
              <Link to="/Registration/Mentor">Mentor Registration</Link>
            </li>
            <li>
              <Link to="/Registration/Mentee">Mentee Registration</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
