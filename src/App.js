import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import OrderSummary from "./Challenges/OrderSummary/OrderSummary";

const Entry = () => (
  <React.Fragment>
    <Link to="orderSummary">Order Summary</Link>
    <Link to="orderSummary">Order Summary</Link>
  </React.Fragment>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Entry} />
          <Route path="/orderSummary" exact component={OrderSummary} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
