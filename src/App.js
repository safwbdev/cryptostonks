import React from "react";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/exchanges">
          Exchanges
        </Route>
        <Route exact path="/cryptocurrencies">
          Cryptocurrencies
        </Route>
        <Route exact path="/crypto">
          Coin details
        </Route>
        <Route exact path="/news">
          News
        </Route>
      </Switch>
    </div>
  );
};

export default App;
