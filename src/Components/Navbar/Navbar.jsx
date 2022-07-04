import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to={`/`}>
          <img className="logo-img" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
