import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ProprietorshipRegistration = () => {
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
                       Proprietorship Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Proprietorship Registration</h1>
                    <p className="highlight-box">
                        Proprietorship Registration is the process of legally establishing a business owned and operated by a single individual, allowing them to operate under a registered trade name.
                    </p>
                    <section>
                        <h2>Details</h2>
                        <p>
                        A sole proprietorship is a type of unregistered business entity that is owned, managed and controlled by one person. Sole proprietorship's are one of the most common forms of business in India, used by most micro and small businesses operating in the unorganised sectors. Proprietorships are very easy to start and have very minimal regulatory compliance requirement for started and operating. However, after the startup phase, proprietorship's do not offer the promoter a host of benefits such as limited liability proprietorship, corporate status, separate legal entity, independent existence, transferability, perpetual existence - which are desirable features for any business. Therefore, proprietorship registration is suited only for unorganised, small businesses that will remain small and/or have a limited period of existence.
                        </p>
                        <br></br>
                        <p>There is no mechanism provided by the Government of India for the registration of a Proprietorship. Therefore, the existence of a proprietorship must be established through tax registrations and other business registrations that a business is required to have as per the rules and regulations. For instance, VAT or Service Tax or GST Registration can be obtained in the name of the Proprietor to establish that the Proprietor is operating a business as a sole proprietorship. Thus, all the registrations for a proprietorship would be in the name of the Proprietor, making the Proprietor personally liable for all the liabilities of the Proprietorship.</p>
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

export default ProprietorshipRegistration