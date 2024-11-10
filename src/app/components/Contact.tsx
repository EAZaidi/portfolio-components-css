import React from 'react';
import '../styles/Contact.css'; // Import the custom CSS file
import { GoMail } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import Link from 'next/link';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      
      <div className="contact-grid">
        
        <div className="contact-info">
          
          <h2 className="contact-title" data-aos="zoom-in">Get In Touch</h2>
          <p className="contact-description" data-aos="zoom-in">
            Drop me a line, send me a message, give me a call or simply reach out to me via email.
          </p>

          <div className="flex gap-3 items-start" data-aos="zoom-in">
          <GoMail size={30} /> essa.abbas11@gmail.com
          </div>
          
          <div className="flex gap-3 items-start" data-aos="zoom-in">
          <BsTelephoneInbound size={30} /> +92-343-289-6174
          </div>
        </div>
        
        <div className="contact-form">
          
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" />
          </div>
          
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" />
          </div>
          
          <div className="form-group" data-aos="zoom-in">
            <label htmlFor="msg">Message</label>
            <textarea id="message" rows={8} className="form-textarea"></textarea>
          </div>
          
          <button className="send-button" data-aos="zoom-in">Send</button>
        
        </div>
      </div>
    </div>
  );
}

export default Contact;
