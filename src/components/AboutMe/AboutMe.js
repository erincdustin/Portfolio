import React from 'react';
import me from '../../images/portfolio-picture.jpg'

import './AboutMe.css';

function AboutMe(props){
  return (
    <div>
      <h1 className="about-me-header">About Me</h1>
      <section id="about-me">
        <div className="headshot">
        <img src={me} className="headshot-img" alt="Erin" />
        </div>
        <div className="about-me">
          <p className="about-me-text">As a former marketer and salesperson, I am passionate about forging relationships and making visions come to life.
          My enthusiasm for programming began at a young age when I first created content to mimic my favorite websites.  That fascination has stayed 
          with me throughout the years, and has inspired me to pursue a career change that offers high levels of creativity and problem solving.  Above all, I love learning new things!  
          When I’m not behind a computer, you can find me outdoors at a bluegrass concert, rock climbing, or exploring the nearest hiking trail.</p>
        </div>
      </section>
    </div>
  )
}

export default AboutMe;