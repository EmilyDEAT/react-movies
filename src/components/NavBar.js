import React from "react";
import { NavLink } from 'react-router-dom'

import logo from "../images/logo.png";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className='navBarContainer'>
        <img className="navBarLogo" src={logo} alt="Films Inspiration" />
        <ul className="navBarLinks">
            <li>
              <NavLink to="/populaire" activeClassName="active">Populaire</NavLink>
            </li>
            <li>
              <NavLink to="/action" activeClassName="active">Action</NavLink>
            </li>
            <li>
              <NavLink to="/aventure" activeClassName="active">Aventure</NavLink>
            </li>
            <li>
              <NavLink to="/comedie" activeClassName="active">Comédie</NavLink>
            </li>
            <li>
              <NavLink to="/drame" activeClassName="active">Drame</NavLink>
            </li>
            <li>
              <NavLink to="/familial" activeClassName="active">Familial</NavLink>
            </li>
            <li>
              <NavLink to="/fantastique" activeClassName="active">Fantastique</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
