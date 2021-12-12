import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AppState from "./Components/Context/AppState";
// import AppState from "./Components/Context/AppState";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import './Styles/custom.css';

function App () {
  return (
    <AppState>
      <Router basename='/itodo'>
        <Navbar />
        <hr />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;
