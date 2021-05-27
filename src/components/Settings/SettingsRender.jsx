import React, { useState } from "react";
import styled from "styled-components";
import SettingsNavigation from "./SettingsNavigation";
import ProfileSettings from "./ProfileSettings";
import Security from "./Security";
import Connect from "./Connect";
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardWrapper } from "../styled/index";
import Token from "./Token";

const SettingsRender = ({ activeModal, handleToggle }) => {
  const [active, setActive] = useState("profile");
  return (
    <StyledDiv>
      <h3 className="setting">Settings</h3>
      <div className="settings-grid-container mt-4">
        <div>
          {" "}
          <SettingsNavigation active={active} setActive={setActive} />
        </div>
        <div>
          {active === "profile" ? (
            <ProfileSettings />
          ) : active === "security" ? (
            <Security />
          ) : active === "connect" ? (
            <Connect activeModal={activeModal} handleToggle={handleToggle} />
          ) : active === "token" ? (
            <Token />
          ) : null}
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled(DashboardWrapper)`
  /* box-sizing: border-box; */
  .setting {
    font-size: 2rem;
    font-weight: 600;
    color: #405169;
  }
  .settings-grid-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 4rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .settings-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 4rem;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .settings-grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }
`;

export default SettingsRender;
