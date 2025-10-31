import React, { useState, useRef } from 'react';
import './contactForm.css';
import rdLogo from '../../assets/rdlogo.jpg';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',    // Replace with your actual EmailJS service ID
      'your_template_id',   // Replace with your template ID
      form.current,
      'your_public_key'     // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log('Success:', result.text);
        setFormData({ name: '', email: '', phone: '', message: '' });
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error.text);
      }
    );
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <div className="contact-form-content">
        <img src={rdLogo} alt="RD Logo" />
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
