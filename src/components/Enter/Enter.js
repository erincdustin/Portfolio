import React from 'react';
import Typed from 'react-typed';
import './Enter.css';

class Enter extends React.Component{
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
        {/* <h1 class="connect-text">Let's Get Connected!</h1>
        <div class = "container connect">
          <a href="https://www.linkedin.com/in/erin-dustin/" target="_blank"><img src="https://dumielauxepices.net/sites/default/files/linkedin-clipart-transparent-666582-6184783.png" class="linkedin icon" alt="link to LinkedIn" /><p>/erindustin</p></a>
          <a href="https://github.com/erincdustin" target="_blank"><img src="https://png.pngtree.com/svg/20170920/41a529ce9e.png" class="github icon" alt="link to Github" /><p>/erincdustin</p></a>
          <a href="mailto:erincdustin@gmail.com" target="_top" class="contact-email" ><img src={mail} class="email icon" alt="link to email" /><p>Email</p></a>         
        </div> */}
      </section>
    )
    }
}

export default Enter;