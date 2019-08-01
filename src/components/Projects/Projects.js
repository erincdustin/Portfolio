import React from 'react';
import windchime from '../../images/wind-chime-2.PNG';
import bookmarks from '../../images/bookmarks-app.JPG';
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
          <a href="https://github.com/erincdustin/windchime-client" className="link-text" target="_blank"><button type="click">View Code</button></a>
          <a href="https://erins-windchime-app.erincdustin.now.sh/" className="link-text" target="_blank"><button type="click">View Project</button></a>
          </div>
        </section>

        <section className="project 2">
        <div className="thumbnail">
          <a href="https://erins-noteful-app.now.sh/" target="_blank"><img src={noteful} alt="noteful app" className="portfolio" /></a>
          </div>
          <div className="info">
          <h1>Noteful</h1>
          <img src={react} alt="react symbol" className="stack"/>
          <img src={node} alt="node symbol" className="stack" />
          <img src={postgres} alt="postgreSQL symbol" className="stack" />
          <p className="desc">A simple solution to keeping track of list items and to-dos.  Allows users to create folders and notes to manage lists and tasks.</p>
          <a href="https://github.com/erincdustin/Noteful-Day-3" className="link-text" target="_blank"><button type="click">View Code</button></a>
          <a href="https://erins-noteful-app.now.sh/" className="link-text" target="_blank"><button type="click">View Project</button></a>
          </div>
        </section>

        <section className="project 3">
        <div className="thumbnail">
            <a href="https://thinkful-ei-dragonfly.github.io/Erin-Bookmarks-App/" target="_blank"><img src={bookmarks} alt="bookmarks app" className="portfolio" /></a>
            </div>
            <div className="info">
            <h1>Bookmarks App</h1>
            <img src={react} alt="js symbol" className="stack" />
            <p className="desc">The Bookmarks app is for users who want to keep track of their favorite links.  Add, delete, and edit bookmarks with the ability to filter the user rating.</p>
            <a href="https://github.com/thinkful-ei-dragonfly/Erin-Bookmarks-App" className="link-text" target="_blank"><button type="click">View Code</button></a>
            <a href="https://thinkful-ei-dragonfly.github.io/Erin-Bookmarks-App/" className="link-text" target="_blank"><button type="click">View Project</button></a>
            </div>
        </section>
      </div>
    </section>
  )
}

export default Projects;