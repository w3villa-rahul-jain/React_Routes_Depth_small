import React from "react";
import "./Window.scss";
import { Link, Outlet } from "react-router-dom";


export default function Window() {
  return (
    <div className="main-window">
      <div className="first-window">
        <ul className="list-container">
          <li>
            <Link to="/window">First</Link>
          </li>
          <li>
            <Link to="/window/second">Second</Link>
          </li>
          <li>
            <Link to="/window/third">Third</Link>
          </li>
        </ul>
      </div>
      <div className="second-window">
        <Outlet />
      </div>
    </div>
  );
}
