import React from 'react';
import '../styles/Skills.css'; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-content">

        <div className="skills-description" data-aos="zoom-in">
          
          <h2 className="skills-heading">Technologies I am working with</h2>
          <p className="skills-text">
            I have a solid foundation in web development, specializing in HTML, CSS and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
        
        <div className="skills-list">
          
          <div className="skills-column">
            <h2 className="skill-item" data-aos="zoom-in">TYPESCRIPT</h2>
            <h2 className="skill-item" data-aos="zoom-in">HTML</h2>
            <h2 className="skill-item" data-aos="zoom-in">CSS</h2>
          </div>

          <div className="skills-column">
            <h2 className="skill-item" data-aos="zoom-in">REACT.JS</h2>
            <h2 className="skill-item" data-aos="zoom-in">NEXT.JS</h2>
            <h2 className="skill-item" data-aos="zoom-in">NODE.JS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
