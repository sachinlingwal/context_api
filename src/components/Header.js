import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <div>
      <span>React Context API</span>
      <ul style={{ display: "flex" }}>
        <li style={{ margin: "0 1em" }}>
          <Link to="/">Home Page</Link>
        </li>
        <li style={{ margin: "0 1em" }}>
          <Link to="/cart">Cart Page ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
