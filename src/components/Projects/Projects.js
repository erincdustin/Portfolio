import React from 'react';
import windchime from '../../images/wind-chime-2.PNG';
import apprendere from '../../images/apprendere.JPG';
import react from '../../images/react.png';
import node from '../../images/—Pngtree—nodejs_1246958.png';
import jobreel from '../../images/jobreel.PNG';
import postgres from '../../images/—Pngtree—mbs   postgresql_761268.png';

import './Projects.css'

function Projects(props){
  return (
    <section id="portfolio">
      <div className= "container">
        <section className="project 1">
          <div className="thumbnail">
          <a href="https://erins-windchime-app.erincdustin.now.sh/" rel="noopener noreferrer" target="_blank"><img src={windchime} alt="wind chime app" className="portfolio" /></a>
          </div>
          <div className="info">
          <h1>Wind Chime</h1>
          <img src={react} alt="react symbol" className="stack"/>
          <img src={node} alt="node symbol" className="stack" />
          <img src={postgres} alt="postgreSQL symbol" className="stack" />
          <p className="desc">Have you ever struggled to find the perfect playlist for a sunny or rainy day?  
            Wind Chime uses current weather conditions to manipulate Spotify's 
            recommendations algorithm and posts a custom playlist to your account that fits the weather "mood". 
            Users can choose from a list of genres or their top Spotify artists to seed the playlist, and can
            alter mood settings like tempo and happiness if they want to change the song selections.</p>
          <a href="https://erins-windchime-app.erincdustin.now.sh/" className="link-text" rel="noopener noreferrer" target="_blank"><button type="button">Demo</button></a>
          <a href="https://github.com/erincdustin/windchime-client" className="link-text" rel="noopener noreferrer" target="_blank"><button type="button">Client</button></a>
          <a href="https://github.com/erincdustin/windchime-server" className="link-text" rel="noopener noreferrer" target="_blank"><button type="button">Server</button></a>
          </div>
        </section>
        <section className="project 2">
        <div className="thumbnail">
          <a href="https://jobreel.now.sh/dashboard" rel="noopener noreferrer" target="_blank"><img src={jobreel} alt="JobReel app" className="portfolio" /></a>
          </div>
          <div className="info">
          <h1>JobReel</h1>
          <img src={react} alt="react symbol" className="stack"/>
          <img src={node} alt="node symbol" className="stack" /> 
          <img src={postgres} alt="postgreSQL symbol" className="stack" />
          <p className="desc">JobReel simplifies the job search process for bootcamp graduates. 
          Users can search for job postings, networking events, and professional contacts within 
          the app and directly add these to their saved assets.  JobReel's database stores 
          jobs, contacts, companies of interest, events, and helpful resources and tracks 
          progress for the user.  Utilizes GitHub Jobs, Autherntic Jobs, Eventbrite, and Hunter.io 
          APIs.</p>
          <a href="https://jobreel.now.sh/dashboard" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Demo</button></a>
          <a href="https://github.com/thinkful-ei-dragonfly/JobReel-client" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Client</button></a>
          <a href="https://github.com/thinkful-ei-dragonfly/JobReel-server" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Server</button></a>
          </div>
        </section>
        <section className="project 3">
          <div className="thumbnail">
           <a href="https://apprendere.lucasvocos.now.sh/" rel="noopener noreferrer" target="_blank"><img src={apprendere} alt="apprendere app" className="portfolio" /></a>
          </div>
          <div className="info">
            <h1>Apprendere</h1>
            <img src={react} alt="react symbol" className="stack"/>
            <img src={node} alt="node symbol" className="stack" />
            <img src={postgres} alt="postgreSQL symbol" className="stack" />
            <p className="desc">Apprendere is a flashcard app that uses spaced repetition to help users learn Italian.  After prompting for an answer to a vocabulary word, 
            the server will implement an algorithm to move the card back in the list, depending on whether the user answers correctly or incorrectly. </p>
            <a href="https://apprendere.lucasvocos.now.sh/" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Demo</button></a>
            <a href="https://github.com/thinkful-ei-dragonfly/lucas-erin-spaced-repetition-client" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Client</button></a>
            <a href="https://github.com/thinkful-ei-dragonfly/lucas-erin-spaced-repetition-api" className="link-text" rel="noopener noreferrer" target="_blank"><button type="click">Server</button></a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Projects;