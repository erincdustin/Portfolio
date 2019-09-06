import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends React.Component{
  render() {
    return (
    <div className="Header header-flex">
      <div className="nav-link flex-link">
        <Link to="/">home</Link>
      </div>
      <div className="nav-link flex-link">
      <Link to="/aboutMe">about</Link>
      </div>
      <div className="nav-link flex-link">
      <Link to="/projects">projects</Link>
      </div>
      <div className="nav-link flex-link">
      <Link to="/contact">contact</Link>
      </div>
    </div>
  )
}
}

export default Header;