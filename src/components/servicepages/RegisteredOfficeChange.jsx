import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const RegisteredOfficeChange = () => {
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
                       Registered Office Change
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Registered Office Change</h1>
                    <p className="highlight-box">
                        Registered Office Change is the process of updating the official address of a company with the relevant authorities, ensuring that all communications and legal notices are sent to the new location.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Changing the registered office of a company is a crucial corporate decision that must be reported to the <strong>Registrar of Companies (ROC)</strong>. Whether you are relocating within the same city, to a different city within the same state, or to another state entirely, we offer comprehensive <strong>Registered Office Change Services</strong> to ensure a smooth and compliant transition.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Registered Office Change Services?</h2>
                        <p>
                        Changing the registered office without proper filing can lead to legal complications and non-compliance issues. Updating the registered office address with ROC is mandatory, as all official communications and notices are sent to this address. Our expert team ensures that all necessary documentation and formalities are completed efficiently.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Changing the Registered Office</h2>
                        <ol>
                            <li><strong>Legal Compliance:</strong> Avoid penalties by updating your registered office address on time.</li>
                            <li><strong>Operational Flexibility:</strong> Relocate your business operations as needed.</li>
                            <li><strong>Official Communication:</strong> Ensure that all important notices and communications are received.</li>
                            <li><strong>Compliance Support:</strong> Get end-to-end assistance to complete documentation and filing.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Annual Filing</h2>
                        <ul>
                            <li><strong>Board Resolution:</strong> A resolution must be passed by the Board of Directors.</li>
                            <li><strong>Special Resolution (if required):</strong> If shifting to another state, a special resolution and approval from shareholders are mandatory.</li>
                            <li><strong>Necessary Approvals:</strong> Obtain approvals from relevant authorities, such as Regional Directors (if applicable).</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Registered Office Change Process</h2>
                        <ol>
                            <li><strong>Consultation:</strong> Understand the nature and location of the new office.</li>
                            <li><strong>Documentation:</strong> Prepare the required documents, including board resolutions and NOC.</li>
                            <li><strong>Form Filing:</strong> File Form INC-22 and necessary attachments on the MCA portal.</li>
                            <li><strong>Compliance Verification:</strong> Ensure the correctness of filings and adherence to statutory requirements.</li>
                            <li><strong>Post-Filing Support:</strong> Get assistance with any follow-up queries or documentation.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <ol>
                            <li><strong>Filing of Form INC-22:</strong> Notify the ROC of the change within 30 days of the decision.</li>
                            <li><strong>Amendment of MOA:</strong> Update the registered office clause in the Memorandum of Association (MOA) if the shift is to another state.</li>
                            <li><strong>Publishing Notice:</strong> Publish a newspaper advertisement (if moving to another state).</li>
                            <li><strong>Updating Records:</strong> Update the registered office address on all official documents and portals.</li>
                        </ol>
                        <br></br>
                        <p>
                        Choose us to simplify the registered office change process and ensure complete compliance with the ROC regulations. Contact us today!
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

export default RegisteredOfficeChange