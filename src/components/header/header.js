import React from 'react';
import { Link } from 'react-router';
import './header.scss';

const Header = (...props) => {
  return(
    <nav className="navbar" role="navigation">
      <Link to="about">About</Link>
      <Link to="">Home</Link>
    </nav>
  )  
};

export {Header}