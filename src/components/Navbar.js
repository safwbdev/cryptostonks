import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/exchanges">Exchanges</Link>
      <Link to="/cryptocurrencies">Crypto Currencies</Link>
      <Link to="/news">News</Link>
    </div>
  );
};

export default Navbar;
