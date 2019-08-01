import React from 'react';
import { Link } from 'react-router-dom'
import me from '../../images/zion.jpg';
import face from '../../images/portfolio-picture.jpg'
import './Enter.css';

class Header extends React.Component{
  render() {
    return (
    <div className="flex-container">
      <div className="flex">
        {/* <div className="img"><img src={face} alt="me"/></div> */}
        {/* <img src={me} alt="zion" className="picture"></img> */}  
          <h1>Hi, my name is Erin</h1>
          <h2>I'm a full stack engineer</h2>
      </div>
    </div>
  )
}
}

export default Header;