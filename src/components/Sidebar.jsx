import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import people from "../assets/people.svg";
import settings from "../assets/Vector.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="circle"></p>

      <NavLink
        className="icons"
        exact
        activeClassName="active"
        to="/nav/dashboard"
      >
        <img src={home} alt="dashboard" />
      </NavLink>

      <NavLink
        className="icons"
        exact
        activeClassName="active"
        to="/nav/authors"
      >
        <img src={people} alt="authors-page-icon" />
      </NavLink>

      <NavLink
        className="icons"
        exact
        activeClassName="active"
        to="/nav/author1"
      >
        <img src={settings} alt="single-authors-page-icon" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
