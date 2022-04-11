import React from "react";
import "./App.css";
import { currencies, news, root } from "./constants/routes";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import {
  CryptoCurrencies,
  CryptoDetails,
  Home,
  Navbar,
  News,
  Footer,
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
              <Route exact path={root}>
                <Home noPadding={true} />
              </Route>
              <Route exact path={currencies}>
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:id">
                <CryptoDetails />
              </Route>
              <Route exact path={news}>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <Footer />
      </div>
    </div>
  );
};

export default App;
