import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/images/my.logo.jpg" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
