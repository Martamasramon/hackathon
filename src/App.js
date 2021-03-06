import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import all views
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import Charities from "./Views/Charities";
import Help from "./Views/Help";
import Boroughs from "./Views/Boroughs";
import NavigationBar from "./Navbars/Navbar";
import Footer from "./Navbars/Footer";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/charities" component={Charities} />
          <Route exact path="/boroughs" component={Boroughs} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
