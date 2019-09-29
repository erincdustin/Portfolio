import React from 'react';
import Typed from 'react-typed';
import client from '../../images/client.png'
import server from '../../images/server.png'
import tools from '../../images/tools.png'
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
        <div className="tech-flex">
          <div className="frontend tech">
              <img src={client} alt="frontend technologies"/>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Enzyme</li>
                <li>jQuery</li>
                <li>HTML5/CSS3</li>
                <li>SASS</li>
              </ul>
            </div>
            <div className="backend tech">
              <img src={server} alt="backend technologies"/>
              <ul>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Mocha</li>
                <li>Chai</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="tools tech">
              <img src={tools} alt="dev tools"/>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Chrome Dev Tools</li>
                <li>Heroku</li>
                <li>Travis CI</li>
              </ul>
            </div>
          </div>
      </section>
    )
}
}