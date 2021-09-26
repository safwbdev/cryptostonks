import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import {
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  Home,
  Navbar,
  News,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:id">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
