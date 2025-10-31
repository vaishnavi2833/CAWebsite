import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone , faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); 
  
  };
  
  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className='contact-container'>
        <div className='about-us-sec'>
            <h2 className='contact-title'>About Us</h2>
            <p className='contact-text'>We are a team of dedicated professionals committed to providing top-notch services.</p>
        </div>
        <div className='quick-links'>
            <h2 className='contact-title'>Quick Links</h2>
            <ul className='quick-links-list'>
                <li className='quick-link-item' onClick={handleHomeClick}>Home</li>
                <li className='quick-link-item' onClick={handleAboutClick}>About Us</li>
                <li className='quick-link-item' onClick={handleServicesClick}>Services</li>
                <li className='quick-link-item'>Blogs</li>
                <li className='quick-link-item'>Contact Us</li>
            </ul>
        </div>
        <div className='address'>
            <h2 className='contact-title'>Address</h2>
            <div className='contact-line'>
              <FontAwesomeIcon icon={faMapLocationDot} style={{ color: 'white' }} />
              <p>Shop no. 134, First Floor, Kanchan Business Center, Manor-Mahim road, Palghar-401404 </p>
            </div>
        </div>
        <div className='contact-us'>
          <h2 className='contact-title'>Contact Us</h2>
          <div className='contact-line'>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
            <p>Email: caronakd@gmail.com</p>
          </div>
          <div className='contact-line'>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} />
            <p>Phone: +91 7058256866</p>
          </div>
        </div>
    </div>
  )
}

export default Contact