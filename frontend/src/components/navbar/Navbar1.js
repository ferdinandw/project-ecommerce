import React from "react";
import { Link } from "react-router-dom";
import "./Navbar1.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-item nav-link" to="/new">
        What's New
      </Link>
      <Link className="nav-item nav-link" to="/woman">
        Woman
      </Link>
      <Link className="nav-item nav-link" to="/man">
        Man
      </Link>
      <Link className="nav-item nav-link" to="/electronic">
        Electronic
      </Link>
      <Link className="nav-item nav-link" to="/accessories">
        Accessories
      </Link>
      <Link className="nav-item nav-link" to="/beauty">
        Beauty
      </Link>
      <Link className="nav-item nav-link" to="/bag">
        Bag
      </Link>
      <Link className="nav-item nav-link" to="/homeandgarden">
        Home and Garden
      </Link>
      <Link className="nav-item nav-link" to="/kids">
        Kids
      </Link>
      <Link className="nav-item nav-link" to="/sale">
        Sale
      </Link>
    </nav>
  );
};

export default Navbar;
