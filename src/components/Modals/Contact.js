import React from 'react';

import './Contact.css';
import '../../App.css';

function ContactMe() {
  return(
    <div className="app-container">
      <div className="app-content">
        <img className="about-image" src="https://i.imgur.com/q3ehgGf.png" alt="Danosaur" />
        <h1>Contact Me!</h1>
        <div className="contact-content">
        <p>Phone number: </p>
        <p className="contact-info">813-525-6017</p>
        </div>
        <div className="contact-content">
        <p>Email: </p>
        <p className="contact-info">Sanchezz611@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/daniel-sanchez-9810a9b1/"><img src="http://assets.stickpng.com/thumbs/58e91afdeb97430e81906504.png" alt="LinkedIn" className="contact-images" /></a>
        <a href="https://github.com/ImDanosaur?tab=repositories"><img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" alt="Github" className="contact-images" id="git"/></a>
      </div>
    </div>
  );
};

export default ContactMe;