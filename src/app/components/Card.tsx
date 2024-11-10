import Image from 'next/image';
import React from 'react';
import '../styles/Card.css'; // Import the custom CSS file

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div 
      className="card-container"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
        <div className="card-image">
            <Image 
              src={img} 
              width={350} 
              height={350} 
              alt={title} 
            />
        </div>

        <div className="card-content">
            <div className="card-title">{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className="tag" key={el}>
                        {el}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Card;
