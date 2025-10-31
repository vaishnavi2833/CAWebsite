import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ResOfDirectors = () => {
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
                       Resignation Of Directors
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Resignation Of Directors</h1>
                    <p className="highlight-box">
                        The resignation of a director from a company is a formal process governed by the <strong>Companies Act, 2013.</strong> It is essential to follow proper procedures and file necessary documents with the <strong>Registrar of Companies (ROC)</strong> to ensure compliance and avoid legal complications. We offer comprehensive services to help companies and directors manage the resignation process smoothly and efficiently.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Appointing a director involves fulfilling various statutory requirements and filing necessary documents with the <strong>Registrar of Companies (ROC)</strong>. Non-compliance can lead to penalties and disqualification of directors. With us you can ensure that the entire process is handled with precision and compliance, saving you time and effort.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Director Resignation Services?</h2>
                        <p>
                        Resignation from the post of director requires the submission of specific forms and documents to the ROC within the stipulated time frame. Failure to do so may result in penalties and non-compliance issues. We ensures that the entire process is handled with precision, from drafting the resignation letter to filing necessary forms.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Director Resignation Services</h2>
                       <ol>
                            <li><strong>Legal Compliance:</strong> Ensure that all legal requirements are met for smooth resignation.</li>
                            <li><strong>Timely Filing:</strong> File necessary forms within the prescribed period to avoid penalties.</li>
                            <li><strong>Documentation Support:</strong> Draft resignation letters and board resolutions accurately.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Director Resignation</h2>
                        <ul>
                            <li><strong>Resignation Letter:</strong> A formal resignation letter addressed to the company.</li>
                            <li><strong>Board Resolution:</strong> Approval of resignation by the Board of Directors.</li>
                            <li><strong>Form DIR-11:</strong> Filing of Form DIR-11 by the resigning director with the ROC.</li>
                            <li><strong>Form DIR-12:</strong> Filing of Form DIR-12 by the company to update the resignation.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Appointment of Directors Process</h2>
                        <ol>
                            <li><strong>Consultation:</strong> Understand the reason for resignation and gather necessary details.</li>
                            <li><strong>Drafting Resignation Letter:</strong> Prepare a well-drafted resignation letter for submission to the company.</li>
                            <li><strong>Board Resolution:</strong> Draft and finalize the board resolution accepting the resignation.</li>
                            <li><strong>Form Filing:</strong> File Form DIR-11 and Form DIR-12 with the ROC.</li>
                            <li><strong>Compliance Verification:</strong> Ensure all documentation and filings are accurate and complete.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Resignation Compliance</h2>
                        <ul>
                            <li><strong>Update ROC Records:</strong> Ensure that the resignation is reflected in the company’s records.</li>
                            <li><strong>Public Notice:</strong> In some cases, publish the resignation notice in newspapers.</li>
                            <li><strong>Company Records Update:</strong> Update the register of directors and key managerial personnel.</li>
                            <li><strong>Avoiding Liabilities:</strong> Clearly mention the date of resignation to avoid future liabilities.</li>
                        </ul>
                        <br></br>
                        <p>
                        Get professional assistance for a smooth and hassle-free resignation process with us. Contact us today!
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

export default ResOfDirectors