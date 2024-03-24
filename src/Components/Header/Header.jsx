import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ about, contact, logo }) {
  return (
    <header>
      <nav>
        <ul>
          <div className="logo">
            <li>
              <img src={logo} alt={logo} />
            </li>
          </div>
          <div className="links">
            <li>
              <Link to="/contact">{contact}</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
