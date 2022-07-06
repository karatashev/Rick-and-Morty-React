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
            <Link className="nav-links" style={{textDecoration: "none", color: "black", fontSize: "20px"}} to="/">Characters</Link>
          </li>
          <li>
            <Link style={{textDecoration: "none", color: "black", fontSize: "20px"}} to="/episodes">Episodes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
