import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Containers } from "./components/styled/index";
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Authors from "./components/Authors";
import Author1 from "./components/Author1";
import SettingsRender from "./components/Settings/SettingsRender";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  const handleToggle = () => {
    setActiveModal(!activeModal);
  };
  return (
    <>
      <Router>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Containers>
          <Route path="/nav" component={Navbar} />
          <Switch>
            <Route path="/nav/dashboard" component={Dashboard} />
            <Route path="/nav/authors" component={Authors} />
            <Route path="/nav/author1/:authorname" component={Author1} />
              <Route path="/nav/dashboard" component={Dashboard} />
              <Route path="/nav/authors" component={Authors} />
              <Route path="/nav/settings">
                <SettingsRender
                  activeModal={activeModal}
                  handleToggle={handleToggle}
                />
              </Route>
          </Switch>
        </Containers>
      </Router>
    </>
  );
}

// const StyledDiv = styled.div`
//   .bg {
//     background: rgba(197, 197, 197, 0.5) !important;
//   }
// `;
// className={`wrapper ${activeModal ? "bg" : ""}`}

export default App;
