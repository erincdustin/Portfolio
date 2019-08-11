import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends React.Component{
  render() {
    return (
    <div className="Header header-flex">
      <div className="nav-link flex-link">
        <Link className="flex-link" to="/">home</Link>
      </div>
      <div className="nav-link flex-link">
      <Link className="flex-link" to="/aboutMe">about me</Link>
      </div>
      <div className="nav-link flex-link">
      <Link className="flex-link" to="/contact">contact</Link>
      </div>
      <div className="nav-link flex-link">
      <Link className="flex-link" to="/projects">projects</Link>
      </div>
      {/* <div className="nav-link flex-link">
      <Link className="flex-link" to="/contact">contact</Link>
      </div> */}
    </div>
  )
}
}

export default Header;