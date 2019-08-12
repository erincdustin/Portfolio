import React from 'react';
import Typed from 'react-typed';
import './Enter.css';

export default class Enter extends React.Component{
  render() {
    return (
      <section id="enter">
        <br />
        <div className="enter-container">
          <br />
          <h1 className="name">
            <Typed strings={['Erin Dustin']} typeSpeed={100} />
          </h1>
          <h2 className="job">Full Stack Web Developer</h2>
        </div>
      </section>
    )
}
}