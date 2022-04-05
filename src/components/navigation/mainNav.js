import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="navigation-links">
      <div className="navigation-link-container">
        {/* {(<NavLink
          to="/signin"
          children = "Sign in"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        />
        )} */}

        <Link className="home-link" to="/">Home</Link>
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