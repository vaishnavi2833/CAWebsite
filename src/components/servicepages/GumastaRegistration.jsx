import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const GumastaRegistration = () => {
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
                        Gumasta Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Gumasta Registration</h1>
                    <p className="highlight-box">
                        Gumasta Registration is the process of obtaining a license for businesses to operate legally under the Shops and Establishments Act, ensuring compliance with local regulations.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Gumasta License, also known as <strong>Shop and Establishment License,</strong> is a mandatory registration for businesses operating in Maharashtra. It is issued under the <strong>Maharashtra Shops and Establishments Act, 1948,</strong> and serves as a legal permit to conduct business within the state. We offer comprehensive Gumasta registration services, ensuring that your business is legally compliant and ready to operate.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for Gumasta Registration</h2>
                        <p>Gumasta registration is mandatory for:</p>
                        <ol>
                            <li><strong>Shops and Commercial Establishments:</strong> Retail outlets, grocery stores, and other commercial setups.</li>
                            <li><strong>Service Providers:</strong> Businesses offering professional services, including consultancies and agencies.</li>
                            <li><strong>Small and Medium Enterprises (SMEs):</strong> Manufacturing units and industrial setups.</li>
                            <li><strong>Partnership Firms and Sole Proprietorships:</strong> Engaged in any commercial activity.</li>
                            <li><strong>Private and Public Limited Companies:</strong> Operating within Maharashtra.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Benefits of Gumasta Registration</h2>
                        <ul>
                            <li><strong>Legal Recognition:</strong> Provides legal proof of business existence and compliance with state regulations.</li>
                            <li><strong>Bank Account Opening:</strong> Mandatory for opening a current bank account in the business name.</li>
                            <li><strong>Government Benefits:</strong> Avail subsidies and schemes offered by the Maharashtra government.</li>
                            <li><strong>Business Growth:</strong> Enhances credibility and trust among customers and stakeholders.</li>
                            <li><strong>Smooth Operations:</strong> Avoids penalties and legal complications by adhering to state norms.</li>
                        </ul>

                    </section>

                    <section>
                        <h2>Our Gumasta Registration Process</h2>
                        <p>We simplify the registration process with the following steps:</p>
                        <ol>
                            <li><strong>Consultation and Documentation:</strong> Collect necessary documents such as identity proof, address proof, business PAN card, and photos.</li>
                            <li><strong>Application Filing:</strong> Fill out the Gumasta License application form and submit it to the <strong>Municipal Corporation</strong> or the <strong>Labour Department</strong>.</li>
                            <li><strong>Document Verification:</strong> Assist in verifying documents and resolving any discrepancies.</li>
                            <li><strong>Payment of Fees:</strong> Pay the applicable government fees and charges.</li>
                            <li><strong>License Issuance:</strong> Obtain the Gumasta License after successful verification and approval.</li>
                        </ol>


                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>Once registered, the business must comply with the following:</p>
                        <ul>
                            <li><strong>Renewal of License:</strong> Renew the Gumasta License periodically to maintain validity.</li>
                            <li><strong>Display of License:</strong> Display the license at a prominent place in the establishment.</li>
                            <li><strong>Record Maintenance:</strong> Maintain proper records of employee details, salary, and working hours.</li>
                            <li><strong>Amendments and Updates:</strong> Update the license if there are any changes in business details.</li>
                        </ul>
                        <br></br>
                        <p>
                         With us, obtaining your Gumasta License is hassle-free and quick. Get your business registered and compliant with state laws without any worries!
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

export default GumastaRegistration