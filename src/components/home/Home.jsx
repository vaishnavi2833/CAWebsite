import React from 'react'
import './home.css'
import homeImage from '../../assets/homeImage.jpg' 
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import ContactForm from '../form/ContactForm';

const Home = () => {
  const navigate = useNavigate(); 
  
  const handleExploreServices = () => {
    navigate('/services'); 
  };

  return (
    
    <div className='home-container'>
      <Navbar/>
        <img src={homeImage} alt="Home Image" className='home-image'/>
        <div className="overlay">
            <h1>Welcome</h1>
            <p>RONAK DHOOT & ASSOCIATES</p>
            <button className='home-button' onClick={handleExploreServices}>Explore Services</button>
        </div>
      <About/>
      <ContactForm/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home