import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
import ProductsList from "./components/products-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{
                backgroundColor: "orange",
                color: "white",
              }}
              exact
              to={"/"}
              className="nav-link"
            >
              All Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{
                backgroundColor: "orange",
                color: "white",
              }}
              exact
              to={"/modify"}
              className="nav-link"
            >
              Modify Products
            </NavLink>
          </li>
        </div>
      </nav>
        <div className="container mt-3">
          <Switch>
              <Route path="/" exact component={ProductsList} />  
            {/* <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
