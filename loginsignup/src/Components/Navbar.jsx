import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="navbar-logo">
          Logo
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink exact to="/" className="navbar-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/products" className="navbar-link" activeClassName="active">
              Products
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className="navbar-link" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/logout" className="navbar-link" activeClassName="active">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
