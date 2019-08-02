import React from 'react';
import hand from '../../images/emoji.PNG'
import './Enter.css';

class Header extends React.Component{
  render() {
    return (
      <div className="inner">
        <div className="textbox">
          <div className="banner">
            <h1 className="header-homepage">
              <div className="emoji">
                <img className="emoji" src={hand} alt="waving hand emoji"></img>
              </div> Hi, my name is Erin</h1>
          </div>
          <h2>I followed my dream and pursued software engineering full-time. Now I build full stack web applications.</h2>
        </div>
      </div>
  )
}
}

export default Header;