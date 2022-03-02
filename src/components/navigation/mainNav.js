import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="navigation-links">
      <div className="navigation-link-container">
        {(<NavLink
          to="/signin"
          children = "Sign in"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        />
        )}
      </div>


      {/* {(<NavLink
        to="/profile"
        children = "Profile"
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      />
      )}  */}

    </div>
  );
}

export default MainNav;