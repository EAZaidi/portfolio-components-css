import React from 'react';
import '../styles/Hero.css'; // Import the custom CSS file
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="hero-container"
      style={{
        backgroundImage: "url(/IMG-20201208-WA0017.jpg)",
        backgroundSize: "25%",
        backgroundPosition: "left 150px top 180px",
      }}
    >
      <Navbar/>
      <div className="hero-content">
        <div className="hero-text"></div>
          <div className='hero-detail'>
          <div>
            <p data-aos="zoom-in">I'm</p>
            <p data-aos="zoom-in">Essa</p>
            <p data-aos="zoom-in">Abbas Zaidi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
