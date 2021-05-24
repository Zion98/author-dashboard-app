import React from "react";
import styled from "styled-components";
import picture from "../assets/Oval.png";

const Headers = styled.div`
  grid-area: header;
  background-color: #fff;
  color: #a0bce4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 95px;
  position: fixed;
  width: 100%;
  z-index: 3;

  .header-input {
    height: 35px;
    min-width: 20%;
    border: 1px solid rgba(76, 141, 235, 0.186481);
  }
  .header-input span {
    padding: 5px;
  }
  input {
    height: 32px;
    min-width: 90%;
    border: none;
  }

  ::placeholder {
    color: #a0bce4;
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    input {
      min-width: 84%;
    }
  }
`;

const Header = () => {
  return (
    <Headers>
      <div className="header-input">
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className=""
          name=""
          placeholder="Search for Author"
        />
      </div>
      <div className="header-img">
        <img src={picture} alt="" />
      </div>
    </Headers>
  );
};

export default Header;
