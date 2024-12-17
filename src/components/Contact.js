import React from 'react';

// Optionally import FontAwesome for the social icons
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
