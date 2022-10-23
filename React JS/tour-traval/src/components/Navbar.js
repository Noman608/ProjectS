import React, { Component } from "react";
import { MenuItems } from "./MenuItems.js";
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg shadow-lg p-3 mb-5 bgbody rounded">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <strong>GhuraGhuri</strong>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mx-auto"></div>
              <ul className="navbar-nav">
                {MenuItems.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <NavLink className="nav-link" to={item.url}>
                        <i className={item.icon}> </i>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
