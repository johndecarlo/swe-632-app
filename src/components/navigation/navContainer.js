import React from "react";
import MainNav from "./mainNav";
import { NavLink } from 'react-router-dom';
import {ReactComponent as ForestTree} from '../../app/assets/forest-tree.svg';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <div>
          <NavLink to="/">
            <ForestTree className="tree-icon"/>
            Ureview
          </NavLink>
        </div>
      </div>
      <MainNav />
    </div>
  );
};

export default Navigation;