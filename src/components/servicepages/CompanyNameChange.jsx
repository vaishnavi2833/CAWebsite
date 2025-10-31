import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const CompanyNameChange = () => {
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
                      Company Name Change
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Company Name Change</h1>
                    <p className="highlight-box">
                        Company Name Change is the process of legally altering a company's registered name, which involves approval from shareholders, filing with the relevant authorities, and updating official documents and records.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Changing the name of a company is a strategic decision that may arise due to rebranding, mergers, acquisitions, or a change in business activities. The process of changing a company's name involves several legal formalities and approvals from the <strong>Registrar of Companies (ROC).</strong> We offer comprehensive assistance to ensure a smooth and hassle-free name change process, adhering to all statutory requirements.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Company Name Change Services?</h2>
                        <p>
                        Changing a company's name requires amendments to the <strong>Memorandum of Association (MOA)</strong> and <strong>Articles of Association (AOA),</strong> filing necessary forms, and obtaining approval from stakeholders and the ROC. Any errors or non-compliance can lead to legal complications. We ensure accuracy and compliance at every step, making the entire process efficient and stress-free.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Company Name Change</h2>
                        <ol>
                            <li><strong>Complete Legal Compliance:</strong> Adherence to the provisions of the Companies Act, 2013.</li>
                            <li><strong>Efficient Documentation:</strong> Drafting resolutions and amendments to the MOA and AOA.</li>
                            <li><strong>Timely ROC Filings:</strong> Submission of necessary forms to the ROC to avoid delays and penalties.</li>
                            <li><strong>Expert Guidance:</strong> Professional support from documentation to approval.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Company Name Change</h2>
                        <ul>
                            <li><strong>Board Approval:</strong> Passing of a board resolution approving the name change.</li>
                            <li><strong>Name Availability Check:</strong> Ensuring the proposed name is not already registered or conflicting with existing trademarks.</li>
                            <li><strong>Special Resolution:</strong> Passing a special resolution in the general meeting of the company.</li>
                            <li><strong>ROC Filing:</strong> Submitting Form MGT-14 and Form INC-24 to the ROC for approval.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Company Name Change Process</h2>
                        <ol>
                            <li><strong>Consultation:</strong> Understand the reason and requirements for the name change.</li>
                            <li><strong>Documentation:</strong> Draft board and special resolutions, and prepare amendment documents.</li>
                            <li><strong>Name Approval:</strong> Apply for name availability through the RUN (Reserve Unique Name) portal.</li>
                            <li><strong>ROC Filings:</strong> Submit required forms and documents to the ROC.</li>
                            <li><strong>Approval and Certification:</strong> Obtain a fresh certificate of incorporation reflecting the new name.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Name Change Compliance</h2>
                        <ul>
                            <li><strong>Update MOA and AOA:</strong> Reflect the new name in the constitutional documents of the company.</li>
                            <li><strong>Statutory Registrations:</strong> Update the new name in PAN, TAN, GST, and other licenses.</li>
                            <li><strong>Bank Account Update:</strong> Inform the bank about the name change and update relevant records.</li>
                            <li><strong>Intimation to Stakeholders:</strong> Notify clients, vendors, and partners about the change.</li>
                        </ul>
                        <br></br>
                        <p>
                        Get your company name changed seamlessly with us. Contact us today to get started!
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

export default CompanyNameChange