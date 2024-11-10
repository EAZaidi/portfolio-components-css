import React from 'react';
import '../styles/Navbar.css'; // Import the custom CSS file
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-brand"></div>

        <ul className="navbar-links">
          <li className="navbar-item"><a href="#hero">Home</a></li>
          <li className="navbar-item"><a href="#about">About Me</a></li>
          <li className="navbar-item"><a href="#projects">My Projects</a></li>
          <li className="navbar-item"><a href="#skills">My Skills</a></li>
          <li className="navbar-item"><a href="#contact">Contact Me</a></li>
          <LuMenu className='md' size={30}/>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
