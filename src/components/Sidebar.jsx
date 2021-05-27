import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
import people from "../assets/people.svg";
import settings from "../assets/Vector.svg";
import logout from "../assets/logout.svg";
const SideBar = styled.div`
  grid-area: nav;
  font-family: "Bree Serif", serif;
  font-size: 16px;
  background-color: #4c60eb;
  color: #ffffff;
  padding: 15px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  position: fixed;
  z-index: 9;

  .icons {
    margin-bottom: 30px;
    opacity: 0.5;
  }

  .active {
    padding: 5px;
    background: rgba(35, 80, 188, 0.3);
    border-radius: 5px;
    opacity: 1;
  }

  a {
    text-decoration: none;
  }

  .logout {
    margin-top: 350px;
  }
`;

const Circle = styled.div`
  border: 1px solid #ffffff;
  background-color: #ffffff;
  border-radius: 50px;
  width: 35px;
  height: 35px;
  margin-bottom: 30px;
`;

const Sidebar = () => {
  return (
    <SideBar>
      <Circle />

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
        to="/nav/settings"
      >
        <img src={settings} alt="single-authors-page-icon" />
      </NavLink>

      <NavLink
        className="icons logout"
        exact
        activeClassName="active"
        to="/"
      >
        <img src={logout} alt="single-authors-page-icon" />
      </NavLink>
    </SideBar>
  );
};

export default Sidebar;
