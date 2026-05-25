import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './servicecontact.css'

const ServiceContactForm = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleWhatsApp = () => {
        const number = '917058256866';
        const parts = [];
        if (formData.name)    parts.push(`Name: ${formData.name}`);
        if (formData.email)   parts.push(`Email: ${formData.email}`);
        if (formData.phone)   parts.push(`Phone: ${formData.phone}`);
        if (formData.message) parts.push(`Message: ${formData.message}`);
        const text = parts.length
            ? parts.join('\n')
            : 'Hello, I would like to enquire about your services.';
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            },
            (error) => {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS Error:', error.text);
            }
        );
    };
    return (
        <div className="service-contact-form-container">
            <button className="btn call-btn" type="button" onClick={() => window.location.href = 'tel:+917058256866'}>Call Us</button>
            <button className="btn whatsapp-btn" type="button" onClick={handleWhatsApp}>WhatsApp</button>

            <h3>Contact Us</h3>

            <form onSubmit={handleSubmit} ref={form} className="service-contact-form">
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
                placeholder="Your Mobile"
                value={formData.phone}
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