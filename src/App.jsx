import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import{Containers} from "./components/styled/index"
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Authors from "./components/Authors";
import Author1 from "./components/Author1";
// import ErrorPage from "./components/Error"


function App() {
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
            <Route path="/nav/author1" component={Author1} />
          </Switch>
          </Containers>
      </Router>
    </>
  );
}

export default App;
