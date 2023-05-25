import React from "react";
import { Link } from "react-router-dom"

import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
          {icon && <i className={icon} />} {title}
        </Link>
      </h1>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden" }}>
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'App',
  icon: null,
};

const NavItem = ({ to, label }) => (
  <li style={{
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    ':hover': {
      backgroundColor: "#FFF",
    }
  }}>
    <Link to={to} style={{ color: "#f2f2f2", textDecoration: "none" }}>{label}</Link>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Navbar;
