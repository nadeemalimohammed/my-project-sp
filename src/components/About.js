import React from 'react';

function About() {
  return (
    <section className="about-section" id="about">
      <h1>About Me</h1>
      <p>
        I am a passionate web developer with experience in front-end technologies like React, HTML, CSS, and JavaScript.
        I’m exploring modern technologies like React and Node.js to enhance the interactivity and functionality of web applications.
      </p>

      <div className="skills">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
      </div>
    </section>
  );
}

export default About;
