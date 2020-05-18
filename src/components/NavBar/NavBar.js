import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import cross from "../../images/cross.png";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";

import "./NavBar.css";

const NavBar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  // Function open menu burger
  const openMenu = () => {
    setBurgerMenu(true);
  };

  // Function close menu burger
  const closeMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <NavLink to="/">
          <img className="navBarLogo" src={logo} alt="Films Inspiration" />
        </NavLink>
        <img
          className="navBarMenu"
          src={menu}
          alt="burger menu"
          onClick={openMenu}
        />
        <ul
          className={`navBarLinks ${
            burgerMenu ? "" : "burgerMenuHide"
          }`}
        >
          <img
            className="navBarClose"
            src={cross}
            alt="close"
            onClick={closeMenu}
          />
          <li>
            <NavLink to="/populaire" activeClassName="active">
              Populaire
            </NavLink>
          </li>
          <li>
            <NavLink to="/action" activeClassName="active">
              Action
            </NavLink>
          </li>
          <li>
            <NavLink to="/aventure" activeClassName="active">
              Aventure
            </NavLink>
          </li>
          <li>
            <NavLink to="/comedie" activeClassName="active">
              Comédie
            </NavLink>
          </li>
          <li>
            <NavLink to="/drame" activeClassName="active">
              Drame
            </NavLink>
          </li>
          <li>
            <NavLink to="/familial" activeClassName="active">
              Familial
            </NavLink>
          </li>
          <li>
            <NavLink to="/fantastique" activeClassName="active">
              Fantastique
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoris" activeClassName="active">
              Ma liste
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
