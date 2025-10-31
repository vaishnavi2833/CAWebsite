import React from 'react'
import Navbar from '../navbar/Navbar'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import './aboutpage.css' 
import aboutImg from '../../assets/about.jpg' // Ensure this path is correct

const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <div className='aboutpage-container'>
            <img src={aboutImg} alt='About Us' className='about-image'/>
            <h2>ABOUT US</h2>
            <hr class="custom-line" />
            <p>At <b>RONAK DHOOT & ASSOCIATES</b>, we are committed to upholding the highest standards of professional service in financial, tax, and business advisory domains. With a strong foundation in professional ethics and practical experience, our team supports individuals, startups, and established enterprises across various stages of their financial and regulatory journey.

                Our core areas of practice include GST compliance, business incorporations, advanced income tax matters, accounting and bookkeeping, auditing and assurance, financial advisory, and regulatory compliance. We approach each assignment with diligence and a thorough understanding of the applicable legal and financial frameworks, providing solutions tailored to the nature and scope of each client’s requirements.

                We believe in building long-term professional relationships based on integrity, trust, and consistent service quality. Every engagement is guided by a thoughtful and proactive approach, ensuring that clients receive the necessary guidance to navigate today's dynamic financial landscape responsibly.

                With a client-focused outlook and sound technical acumen, we strive to deliver clarity, compliance, and value within the framework of prevailing professional guidelines.
            </p>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default AboutPage