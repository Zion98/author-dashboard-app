import React from "react"
import styled from "styled-components"


const SettigsNavigation = ({ active, setActive }) => {
  return (
    <StyledDiv>
      <div
        className={`tabs-div ${active === "profile" ? "active" : ""}`}
        onClick={(e) => setActive("profile")}
      >
        <div className="settings-icon icons">
          <img src="/images/profile-settings-icon.svg" alt="settings-icon" />
        </div>
        <div className="tabs-span">Profile Settings</div>
      </div>
      <div
        className={`tabs-div mt-4 ${active === "security" ? "active" : ""}`}
        onClick={(e) => setActive("security")}
      >
        <div className="security-icon icons">
          <img src="/images/security-icon.svg" alt="settings-icon" />
        </div>
        <div className="tabs-span">Security</div>
      </div>
      <div
        className={`tabs-div mt-4 ${active === "connect" ? "active" : ""}`}
        onClick={(e) => setActive("connect")}
      >
        <div className="connect-icon icons">
          <img src="/images/connect-icon.svg" alt="settings-icon" />
        </div>
        <div className="tabs-span">Connect Website</div>
      </div>
      <div
        className={`tabs-div mt-4 ${active === "token" ? "active" : ""}`}
        onClick={(e) => setActive("token")}
      >
        <div className="token-icon icons">
          <img src="/images/token-icon.svg" alt="settings-icon" />
        </div>
        <div className="tabs-span">Get Token</div>
      </div>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  .icons {
    background: rgba(235, 235, 253, 0.6);
    width: 2rem;
    max-height: 2rem;
    display: flex;
    justify-content: center;
    padding: 0.4rem 0.5rem;
    border-radius: 5px;
  }
  .tabs-div {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .tabs-span {
    color: rgba(64, 81, 105, 0.8);
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }
  .active{
      font-weight: 600;
      font-size: 1.2rem;
  }
`;
export default SettigsNavigation