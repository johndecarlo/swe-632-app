import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="navigation-links">
      <div className="navigation-link-container">
        <Link className="home-link" to="/">Home</Link>
      </div>
    </div>
  );
}

export default MainNav;