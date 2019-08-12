import React from 'react';
import mail from '../../images/email-black.png';
import github from '../../images/github-black.png';
import linkedin from '../../images/linkedin-black.png';

import './Contact.css'

class Contact extends React.Component{
  render() {
  return (
    <section id="contact">
      <h1 className="connect-header">Let's Get Connected!</h1>
      <div className="container connect">
        <a href="https://www.linkedin.com/in/erin-dustin/" target="_blank"><img src={linkedin} class="linkedin icon" alt="link to LinkedIn" /><p className="connect-text">/erindustin</p></a>
        <a href="https://github.com/erincdustin" target="_blank"><img src={github} class="github icon" alt="link to Github" /><p className="connect-text">/erincdustin</p></a>
        <a href="mailto:erincdustin@gmail.com" target="_top" class="contact-email" ><img src={mail} class="email icon" alt="link to email" /><p className="connect-text">Email</p></a>         
      </div>
    </section>
  )
  }
}

export default Contact;