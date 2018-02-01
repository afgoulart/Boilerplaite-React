import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ route, children }) => (
  <NavLink
    to={route === 'home' ? '/' : `/${ route }`}
    activeClassName={'active'}
  >
    {children}
  </NavLink>
);

export default FilterLink;