import React from "react";
import { NavLink } from 'react-router-dom';
import {ReactComponent as HomeIcon} from '../../app/assets/home.svg';

const MainNav = () => {
  return (
    <div className="navigation-links">
      <div className="navigation-link-container">
        <NavLink className="home-link" to="/">
          <HomeIcon className="home-icon"/>
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default MainNav;
