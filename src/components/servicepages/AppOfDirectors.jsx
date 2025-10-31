import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const AppOfDirectors = () => {
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
                       Appointment Of Directors
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Appointment Of Directors</h1>
                    <p className="highlight-box">
                        Appointment of Directors is the process of formally selecting and appointing individuals to the board of directors of a company, in accordance with the company's bylaws and regulatory requirements.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Appointing a director involves fulfilling various statutory requirements and filing necessary documents with the <strong>Registrar of Companies (ROC)</strong>. Non-compliance can lead to penalties and disqualification of directors. With us you can ensure that the entire process is handled with precision and compliance, saving you time and effort.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Appointing Directors</h2>
                        <ol>
                            <li><strong>Strategic Leadership:</strong> Strengthen the company’s leadership and management.</li>
                            <li><strong>Operational Efficiency:</strong> Enhance decision-making with skilled professionals.</li>
                            <li><strong>Legal Compliance:</strong> Properly appoint directors as per the Companies Act, 2013.</li>
                            <li><strong>Governance and Accountability:</strong> Maintain good corporate governance with responsible directors.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Eligibility for Appointment of Directors</h2>
                        <ul>
                            <li><strong>Director Identification Number (DIN):</strong> The individual must have a valid DIN.</li>
                            <li><strong>Digital Signature Certificate (DSC):</strong> A DSC is mandatory for filing forms.</li>
                            <li><strong>Age Criteria:</strong> Must be at least 18 years of age.</li>
                            <li><strong>Citizenship and Residency:</strong> Both Indian and foreign nationals are eligible.</li>
                            <li><strong>Shareholder Approval:</strong> Required in case of appointment of additional or alternate directors.</li>
                        </ul>

                    </section>
                        
                    <section>
                        <h2>Our Appointment of Directors Process</h2>
                        <ol>
                            <li><strong>Documentation:</strong> Collect necessary documents such as DIN, DSC, PAN, and consent letter.</li>
                            <li><strong>Board Meeting:</strong> Draft board resolution and obtain approval.</li>
                            <li><strong>Form Filing:</strong> File Form DIR-12 and relevant attachments on the MCA portal.</li>
                            <li><strong>Compliance Verification:</strong> Ensure accuracy and adherence to statutory requirements.</li>
                            <li><strong>Post-Filing Support:</strong> Get assistance with any follow-up or rectification if needed.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <ul>
                            <li><strong>Filing of Form DIR-12:</strong> Notify the ROC within 30 days of appointment.</li>
                            <li><strong>Board Resolution:</strong> Pass a resolution to formalize the appointment.</li>
                            <li><strong>Updating Registers:</strong> Update the Register of Directors and Key Managerial Personnel.</li>
                            <li><strong>Disclosure of Interest:</strong> Directors must disclose their interest in other entities, if any.</li>
                        </ul>

                        <br></br>
                        <p>
                        Let us handle the appointment of directors for your company with complete professionalism and accuracy. Contact us today to streamline the process!
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

export default AppOfDirectors