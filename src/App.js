import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
