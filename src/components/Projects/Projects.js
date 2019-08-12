import React from 'react';
import windchime from '../../images/wind-chime-2.PNG';
import apprendere from '../../images/apprendere.JPG';
import noteful from '../../images/noteful.PNG';
import react from '../../images/react.png';
import node from '../../images/—Pngtree—nodejs_1246958.png';
import postgres from '../../images/—Pngtree—mbs   postgresql_761268.png';

import './Projects.css'

function Projects(props){
  return (
    <section id="portfolio">
      <div className= "container">
        <section className="project 1">
          <div className="thumbnail">
          <a href="https://erins-windchime-app.erincdustin.now.sh/" target="_blank"><img src={windchime} alt="wind chime app" className="portfolio" /></a>
          </div>
          <div className="info">
          <h1>Wind Chime</h1>
          <img src={react} alt="react symbol" className="stack"/>
          <img src={node} alt="node symbol" className="stack" />
          <img src={postgres} alt="postgreSQL symbol" className="stack" />
          <p className="desc">Have you ever struggled to find the perfect playlist for a sunny or rainy day?  
            Wind Chime uses current weather conditions to manipulate Spotify's 
            recommendations algorithm, providing you with a custom playlist that fits the weather "mood". 
            Choose from a list of genres or your top Spotify artists to seed the playlist.</p>
          <a href="https://erins-windchime-app.erincdustin.now.sh/" className="link-text" target="_blank"><button type="click">Demo</button></a>
          <a href="https://github.com/erincdustin/windchime-client" className="link-text" target="_blank"><button type="click">Client</button></a>
          <a href="https://github.com/erincdustin/windchime-server" className="link-text" target="_blank"><button type="click">Server</button></a>
          </div>
        </section>

        <section className="project 2">
          <div className="thumbnail">
           <a href="https://apprendere.lucasvocos.now.sh/" target="_blank"><img src={apprendere} alt="apprendere app" className="portfolio" /></a>
          </div>
          <div className="info">
            <h1>Apprendere</h1>
            <img src={react} alt="react symbol" className="stack"/>
            <img src={node} alt="node symbol" className="stack" />
            <img src={postgres} alt="postgreSQL symbol" className="stack" />
            <p className="desc">Apprendere is a flashcard app that uses spaced repetition to help users learn Italian.  After prompting for an answer to a vocabulary word, 
            the server will implement an algorithm to move the card back in the list, depending on whether the user answers correctly or incorrectly. </p>
            <a href="https://apprendere.lucasvocos.now.sh/" className="link-text" target="_blank"><button type="click">Demo</button></a>
            <a href="https://github.com/thinkful-ei-dragonfly/lucas-erin-spaced-repetition-client" className="link-text" target="_blank"><button type="click">Client</button></a>
            <a href="https://github.com/thinkful-ei-dragonfly/lucas-erin-spaced-repetition-api" className="link-text" target="_blank"><button type="click">Server</button></a>
          </div>
        </section>

        <section className="project 3">
        <div className="thumbnail">
          <a href="https://erins-noteful-app.now.sh/" target="_blank"><img src={noteful} alt="noteful app" className="portfolio" /></a>
          </div>
          <div className="info">
          <h1>Noteful</h1>
          <img src={react} alt="react symbol" className="stack"/>
          <img src={node} alt="node symbol" className="stack" />
          <img src={postgres} alt="postgreSQL symbol" className="stack" />
          <p className="desc">A simple solution to keeping track of list items and to-dos.  Allows users to create folders and notes to 
          manage lists and tasks.</p>
          <a href="https://erins-noteful-app.now.sh/" className="link-text" target="_blank"><button type="click">Demo</button></a>
          <a href="https://github.com/erincdustin/Noteful-Day-3" className="link-text" target="_blank"><button type="click">Client</button></a>
          <a href="https://github.com/erincdustin/noteful-server" className="link-text" target="_blank"><button type="click">Server</button></a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects;