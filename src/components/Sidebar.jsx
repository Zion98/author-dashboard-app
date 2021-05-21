import React from "react";
import people from '../assets/people.svg'
import home from '../assets/home.svg'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="circle"></p>
      <div className="icons">
        <img src={home} alt="dashboard" />
      </div>
      <div className="icons">
        <img src={people} alt="dashboard" />
      </div>
      <div className="icons">
        <img src={home}  alt="dashboard" />
      </div>
    </div>
  );
};

export default Sidebar;
