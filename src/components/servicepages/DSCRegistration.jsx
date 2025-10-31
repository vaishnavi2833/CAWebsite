import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const DSCRegistration = () => {
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
                        Class III, DGFT DSC Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Class III, DGFT DSC Registration</h1>
                    <p className="highlight-box">
                        Class III DGFT DSC Registration is the process of obtaining a digital signature certificate (DSC) for secure electronic submissions to the Directorate General of Foreign Trade (DGFT) for import/export activities.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        The <strong>Class III Digital Signature Certificate (DSC)</strong> for <strong>Directorate General of Foreign Trade (DGFT)</strong> is essential for businesses involved in <strong>import and export activities.</strong> It ensures secure and authenticated online transactions on the DGFT portal. We provide reliable and efficient DSC registration services to help you streamline your foreign trade operations.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for Class III, DGFT DSC Registration</h2>
                        <p>The following entities are eligible for Class III, DGFT DSC registration:</p>
                        <ol>
                            <li><strong>Importers and Exporters:</strong> Engaged in international trade activities.</li>
                            <li><strong>Proprietorship and Partnership Firms:</strong> Businesses involved in import-export activities.</li>
                            <li><strong>Private and Public Limited Companies:</strong> Exporting or importing goods and services.</li>
                            <li><strong>LLPs and Trusts:</strong> Engaged in cross-border trade.</li>
                            <li><strong>Authorized Signatories and Individuals:</strong> Required to sign documents on behalf of organizations.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Benefits of Class III, DGFT DSC Registration</h2>
                        <ul>
                            <li><strong>Secure Transactions:</strong> Ensures safe and secure transactions on the DGFT portal.</li>
                            <li><strong>Paperless Documentation:</strong> Facilitates paperless transactions, saving time and effort.</li>
                            <li><strong>Mandatory for Online Filing:</strong> Required for online filing of applications on the DGFT portal.</li>
                            <li><strong>Fast Processing:</strong> Ensures quick and hassle-free documentation and approvals.</li>
                            <li><strong>Increased Credibility:</strong> Adds authenticity to digital documents and reduces the risk of forgery.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Class III, DGFT DSC Registration Process</h2>
                        <p>We follow a straightforward process to obtain your DGFT DSC:</p>
                        <ol>
                            <li><strong>Document Collection:</strong> Collect KYC documents, PAN card, Aadhaar card, passport-size photo, and business details.</li>
                            <li><strong>Application Filing:</strong> Submit the digital signature application form along with the required documents.</li>
                            <li><strong>Identity Verification:</strong> Complete <strong>video verification</strong> as mandated by the Certifying Authority.</li>
                            <li><strong>Digital Signature Generation:</strong> Obtain the <strong>Class III DSC</strong> on a secure USB token after approval.</li>
                            <li><strong>DGFT Registration:</strong> Register the DSC on the DGFT portal to start using it for online transactions.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After obtaining the Class III, DGFT DSC, ensure the following:</p>
                        <ul>
                            <li><strong>Timely Renewal:</strong> Renew the DSC before the expiration date (usually valid for 1 to 2 years).</li>
                            <li><strong>USB Token Safety:</strong> Keep the secure USB token safe to prevent unauthorized access.</li>
                            <li><strong>DGFT Portal Registration:</strong> Regularly update the DSC details on the DGFT portal.</li>
                            <li><strong>Compliance with DGFT Guidelines:</strong> Follow the latest guidelines and updates from DGFT to ensure continued validity.</li>
                        </ul>

                        <br></br>
                        <p>
                        With us, you receive end-to-end support in acquiring and maintaining your Class III, DGFT DSC, allowing you to focus on growing your business globally.
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

export default DSCRegistration