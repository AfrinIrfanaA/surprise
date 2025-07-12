import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactPage.css';
import Header from '../components/Header';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/gifts', {
        name,
        email,
        phone,
        message,
      });
      console.log(response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="contact-container">
      <Header />
      <div className="hero">
        
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="form-input"
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="form-textarea"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
      <footer className="footer">
        <div className="footer-content">
          <p className='heading'><strong>SURPRISE</strong></p>
          <p>Syed Ammal Engineering College, Ramanathapuram, PC 623502</p>
          <p>Email: ajanthaafrin@gmail.com | Phone: 9876543210</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
