import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Nadeem Ali Mohammed</span></h1>
        <h3>I'm a Web Developer</h3>
        <p>Welcome to my personal portfolio website.</p>
      </div>
      <div className="profile-pic">
        <img src="%PUBLIC_URL%/images/profile-pic.png" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
