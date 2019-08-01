import React from 'react';
import mail from '../../images/download.png';

import './Contact.css'

function Contact(props){
  return (
    <section role="region" id="contact">
      <div class = "container">
        <a href="https://www.linkedin.com/in/erin-dustin/" target="_blank"><img src="https://dumielauxepices.net/sites/default/files/linkedin-clipart-transparent-666582-6184783.png" class="linkedin icon" alt="link to LinkedIn" /><p>/erindustin</p></a>
        <a href="https://github.com/erincdustin" target="_blank"><img src="https://png.pngtree.com/svg/20170920/41a529ce9e.png" class="github icon" alt="link to Github" /><p>/erincdustin</p></a>
        <a href="mailto:erincdustin@gmail.com" target="_top" class="contact-email" ><img src={mail} class="email icon" alt="link to email" /><p>Email</p></a>         
      </div>
    </section>
  )
}

export default Contact;