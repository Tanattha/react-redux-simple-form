import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Exercise from "./Components/Excercise/Excercise";
import Footer from './Components/Footer/Footer'
import Contact from "./Components/Contact/Contact"
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="logo" className="NavImg" />
          </a>
          <Link to="/contact" className="nav-link">
            <img src="img/contactIcon.png" alt="contact" className="NavImg" />
          </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Exercise} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
       <Footer />
      </Router>
  </Provider>
);
export default App;