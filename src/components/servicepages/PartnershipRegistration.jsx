import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const PartnershipRegistration = () => {
  return (
    <div>
        <Navbar/>
        <div className='main-div'>
            <div className='service-info'>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                    <Link to="/services">Services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                       Partnership Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Partnership Registration</h1>
                    <p className="highlight-box">
                        Partnership Registration is the process of legally forming a business partnership between two or more individuals, enabling them to operate jointly under a registered name.
                    </p>
                    <section>
                        <h2>Details</h2>
                        <p>
                        A Partnership Firm is a popular form of business constitution for businesses that are owned, managed and controlled by an Association of People for profit. Partnership firms are relatively easy to start are is prevalent amongst small and medium sized businesses in the unorganized sectors. With the introduction of Limited Liability Partnerships in India, Partnership Firms are fast losing their prevalence due to the added advantages offered by a Limited Liability Partnership.
                        </p>
                        <br></br>
                        <p>There are two types of Partnership firms, registered and un-registered Partnership firm. It is not compulsory to register a Partnership firm; however, it is advisable to register a Partnership firm due to the added advantages. Partnership firms are created by drafting a Partnership deed amongst the Partners and IndiaFilings can help start a registered or un-registered Partnership firm in India.
                        </p>
                    </section>

                </div>
            </div>
            <div className='contact-info'>
                <ServiceContactForm/>
            </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default PartnershipRegistration