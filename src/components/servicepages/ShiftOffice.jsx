import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ShiftOffice = () => {
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
                       Shifting of Registered Office
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Shifting of Registered Office</h1>
                    <p className="highlight-box">
                        Shifting of Registered Office is the process of changing the official address of a company, requiring approval from the board of directors, shareholders, and filing necessary forms with the regulatory authorities to update the company's records.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Changing the registered office of a company is a crucial decision that may arise due to business expansion, cost optimization, or operational efficiency. The registered office is the official address where all statutory records and communications are maintained. Shifting it requires adherence to legal formalities and approvals from the <strong>Registrar of Companies (ROC).</strong> We offer end-to-end assistance to ensure a smooth and compliant transition of your registered office address.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Registered Office Shifting Services?</h2>
                        <p>
                        Shifting the registered office involves updating statutory records, notifying the ROC, and communicating the change to stakeholders. Any lapse in the procedure may result in legal penalties. We ensure meticulous handling of documentation and ROC filings to make the process hassle-free and legally compliant.
                        </p>
                    </section>

                    <section>
                        <h2>Types of Registered Office Shifting</h2>
                        <ol>
                            <li><strong>Within the Same City:</strong> Simple process with minimal documentation.</li>
                            <li><strong>Within the Same State but Different City:</strong> Requires approval from the ROC.</li>
                            <li><strong>From One State to Another:</strong> Involves approval from the Regional Director (RD) and ROC, along with alteration of the MOA (Memorandum of Association).</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Registered Office Shifting</h2>
                        <ul>
                            <li><strong>Board Approval:</strong> Passing a board resolution authorizing the shift.</li>
                            <li><strong>Special Resolution:</strong> Passing a special resolution in the general meeting if shifting to another state.</li>
                            <li><strong>Public Notice:</strong> Publishing an advertisement in local newspapers if shifting from one state to another.</li>
                            <li><strong>ROC Filings:</strong> Filing necessary forms like INC-22 and MGT-14 (if applicable).</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Registered Office Shifting Process</h2>
                        <ol>
                            <li><strong>Consultation:</strong> Understand the nature and reason for the shift.</li>
                            <li><strong>Documentation:</strong> Draft resolutions and necessary forms.</li>
                            <li><strong>ROC Filing:</strong> Submit required documents to the ROC for approval.</li>
                            <li><strong>Public Notification:</strong> Publish a notice if the shift is inter-state.</li>
                            <li><strong>Approval and Certification:</strong> Obtain the approval certificate from ROC.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Shifting Compliance</h2>
                        <ul>
                            <li><strong>Update MOA:</strong> Alter the registered office clause in the MOA if shifting between states.</li>
                            <li><strong>Intimation to Authorities:</strong> Update the registered office address with PAN, TAN, GST, and other registrations.</li>
                            <li><strong>Bank Account Update:</strong> Notify the bank about the new registered office address.</li>
                            <li><strong>Communication to Stakeholders:</strong> Inform clients, vendors, and other stakeholders about the change.</li>
                        </ul>
                        <br></br>
                        <p>
                        Get your registered office shifted without any legal hurdles with us. Contact us to streamline the process!
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

export default ShiftOffice