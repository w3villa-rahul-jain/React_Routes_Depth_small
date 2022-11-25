import React from "react";
import "../Navigation/Nav.scss";
import { Link, NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <div>
      <header class="main-header">
        <div>
          <span class="nav-logo">Microsoft</span>
        </div>
        <div>
          <ul className="list-container">
            <li className="list-itemss">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}      
                className="links"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="list-itemss">
              <Link className="links" to="/window">
                Window
              </Link>
            </li>
            <li className="list-itemss">
              <Link className="links" to="/surface">
                Surface
              </Link>
            </li>
            <li className="list-itemss">Xbos</li>
            <li className="list-itemss">Support</li>
            <li className="list-itemss">Teams</li>
          </ul>
        </div>
        <button className="explore-btn">Explore</button>
      </header>
    </div>
  );
}
