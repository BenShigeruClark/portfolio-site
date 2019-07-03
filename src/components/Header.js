import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
    <NavLink to="/portfolio/123" activeClassName="is-active">Item Page</NavLink>
    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
);

export default Header;