import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="navigation-links">
      {(<NavLink
        to="/"
        children = "Home"
        // exact
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      />
      )}

      {(<NavLink
        to="/profile"
        children = "Profile"
        // exact
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        // exact
        // className={(props) => props.isActive ? "router-link-exact-active" : "nav-link"}
      />
      )} 

    </div>
  );
}

export default MainNav;