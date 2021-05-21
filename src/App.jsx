import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <div className="containers">
          <Route path="/nav" component={Navbar} />
          <Switch>
            <Route path="/nav/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
