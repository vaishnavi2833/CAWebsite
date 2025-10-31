import React from 'react'
import './about.css'
import teamImage from '../../assets/team.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye , faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {services } from '../../data/services.json'; 
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate(); 
  
    const handleExploreServices = () => {
        navigate('/services'); 
    };

  return (
    <div className='about-container'>
        <div className='about-us'>
            <h2>About Us</h2>
            <br className='about-br'/>
            <p>At Ronak Dhoot & Associates, we are committed to delivering exceptional value to our clients by offering innovative solutions and unparalleled service. As a trusted Chartered Accountancy firm, we understand the complexities of today’s financial landscape, and we pride ourselves on our ability to adapt and evolve alongside our clients’ needs.

            Our approach is built on a foundation of integrity, transparency, and a deep understanding of the financial challenges faced by businesses, individuals, and organizations alike. 
            </p>
            <button className='about-button'>Read More</button>
        </div>
        <div className='about-vision'>
            <h2>OUR VISION, MISSION & PURPOSE</h2>
            <br className='about-br'/>
            <p>To deliver exceptional value to our clients through innovative solutions and unparalleled service.</p>
            <div className='about-vision-cards'>
                <div className='vision-card'>
                    <FontAwesomeIcon icon={faEye} size="3x" style={{ color: '#4CAF50' }} />
                    <h3>Vision</h3>
                    <p>To be the most trusted partner in guiding businesses through it's transformative financial journeys, driving long-term success through clarity, innovation, and expert collaboration.</p>
                </div>
                <div className='vision-card'>
                    <FontAwesomeIcon icon={faBullseye} size="3x" style={{ color: '#4CAF50' }} />
                    <h3>Mission</h3>
                    <p>To deliver personalized, strategic financial solutions that empower businesses to unlock new growth opportunities, optimize performance, and help achieve sustainable success in an ever-evolving market.</p>
                </div>
                <div className='vision-card'>
                    <FontAwesomeIcon icon={faLightbulb} size="3x" style={{ color: '#4CAF50' }} />
                    <h3>Purpose</h3>
                    <p>To create lasting, positive change for our clients, employees, and community by fostering innovation, inclusivity, and ethical financial practices that make a difference.</p>
                </div>
            </div>
        </div>
        <div className='about-team'>
            
            <div className='team-content'>
                <h2>OUR TEAM</h2>
                <hr className='about-br'/>
                <p>At RONAK DHOOT & ASSOCIATES, our team comprises qualified professionals who bring a diverse range of expertise across taxation, accounting, GST, and business advisory services.

                    Our work approach is rooted in diligence, confidentiality, and adherence to ethical practices. </p>
                <button className='team-button'>Meet the Team</button>
            </div>
            <div className='team-image'>
                <img src={teamImage} alt='Team Image' />
            </div>
        </div>
        <div className='about-services'>
            <h2>OUR SERVICES</h2>
            <div className='services-list'>
                
                {services.slice(0, 6).map((service, index) => (
                    <div key={index} className='service-item'>
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{ color: '#4CAF50' }} className="service-icon" />
                    <h3>{service.name}</h3>
                    <p>{service.short_description || service.description}</p>
                    </div>
                ))}
            </div>
            <button className='service-button' onClick={handleExploreServices}>View All Services</button>
        </div>
    </div>
  )
}

export default About