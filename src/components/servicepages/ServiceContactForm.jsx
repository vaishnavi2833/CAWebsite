import React, { useState } from 'react';
import './servicecontact.css'

const ServiceContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your submission logic here (API call, etc.)
    };
    return (
        <div className="service-contact-form-container">
            <button className="btn call-btn">Call Us</button>
            <button className="btn whatsapp-btn">WhatsApp</button>

            <h3>Contact Us</h3>

            <form onSubmit={handleSubmit} className="service-contact-form">
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
                name="mobile"
                placeholder="Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                />
                <textarea
                name="message"
                placeholder="Please mention your requirements here"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                ></textarea>

                <button type="submit" className="btn send-btn">
                Send Message
                </button>
            </form>
        </div>
    )
}

export default ServiceContactForm