import React from 'react'
import { services} from '../../data/services.json';
import './services.css'
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='services-container'>
    <Navbar/>
      <h2>Our Services</h2>
      <div className='services-list'>
        {services.map((service, index) => (
          <div key={index} className='service-item' onClick={()=> navigate(service.url)}>
            <FontAwesomeIcon icon={faCheckCircle} size="3x" style={{ color: '#4CAF50' }} className="service-icon" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services