import React from 'react';

import './AboutMe.css';

function About() {
  return(
    <div className="about-page">
      <div className="about-me">
        <img className="about-image" src="https://i.imgur.com/q3ehgGf.png" alt="Danosaur" />
        <h1>About me</h1>
        <p>Hello! I'm a software developer that is currently attending Flatiron Schools and is 
          looking for a front end job in the Denver area. My favorite framework is currently React, 
          although, I am very curious to learn Vue on my spare time!.</p>
        <br />
        <h3>Full Bio:</h3>
        <p>Welcome to the extended version of my Bio! In this we'll talk more about my hobbies 
          and just me as a person! So, I must admit I am a design freak and absolutely love doing 
          frontend dev work. I can easily lose myself in CSS for hours at a time trying to get just the right look
          to my websites! On my free time I enjoy to read all types of books, a few titles being "Welcome to nightvale",
          "Gregor the Overlander", and "The Alchemist". So a little fiction heavy but, hey, I just love to see how creative
          people can be with their work! Other things I find myself tapping into is drawing, It's alwasy fun for me to draw
          a childhood cartoon here and there. I'm also probably the most outdoorsy person that doesn't go outdoors! nutty!
          How can one be outdoorsy and stay indoors all the time? easy answer. Video games. BOOM, who needs to go outside
          when I can pop on this nifty little Virtual reality headset and be at the top of a mountian without the cold!</p>
        <p></p>
      </div>
    </div>
  );
};

export default About;