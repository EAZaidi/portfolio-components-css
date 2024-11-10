import React from 'react';
import '../styles/Heading.css'; // Import the custom CSS file

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="heading-container">
        <p className="heading-title">{title}</p>
    </div>
  );
}

export default Heading;
