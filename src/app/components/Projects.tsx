import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../styles/Projects.css'; // Import the custom CSS file

const data = [
  {
    id: 0,
    name: 'Facebook Login Page Clone',
    description: 'A Facebook login page clone using Next.js and Tailwind CSS.',
    img: '/facebook.jpg',
    tags: ['Next.js', 'HTML', 'Node', 'Tailwind CSS'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.name}
            desc={el.description}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
