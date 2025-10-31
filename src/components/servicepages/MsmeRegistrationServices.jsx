import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const MsmeRegistrationServices = () => {
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
                        MSME Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>MSME Registration</h1>
                    <p className="highlight-box">
                        MSME Registration is the process of officially registering a business under the Micro, Small, and Medium Enterprises (MSME) Act, allowing businesses to access various government benefits, financial support, and schemes aimed at promoting the growth of small and medium-sized enterprises.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Micro, Small, and Medium Enterprises (MSME) play a crucial role in the economic growth of India. To promote and support MSMEs, the government offers numerous benefits and schemes. Obtaining MSME registration provides businesses with legal recognition and access to various subsidies, loans, and incentives. We professional MSME registration services to help businesses secure these benefits effortlessly.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for MSME Registration</h2>
                        <p>MSME registration is available to businesses categorized as Micro, Small, or Medium Enterprises based on their investment in plant and machinery or equipment and annual turnover:</p>
                        <ul>
                        <li><strong>Micro Enterprises:</strong> 
                            <ul>
                                <li>Investment in plant and machinery or equipment: Up to ₹1 crore</li>
                                <li>Annual turnover: Up to ₹5 crore</li>
                            </ul>
                        </li>
                        <li><strong>Small Enterprises:</strong> 
                            <ul>
                                <li>Investment in plant and machinery or equipment: Up to ₹10 crore</li>
                                <li>Annual turnover: Up to ₹50 crore</li>
                            </ul>
                        </li>
                        <li><strong>Medium Enterprises:</strong> 
                            <ul>
                                <li>Investment in plant and machinery or equipment: Up to ₹50 crore</li>
                                <li>Annual turnover: Up to ₹250 crore</li>
                            </ul>
                        </li>
                        </ul>
                    </section>

                    <section>
                        <h2>Benefits of MSME Registration</h2>
                        <ul>
                        <li><strong>Easy Access to Loans:</strong> Avail collateral-free loans under government schemes.</li>
                        <li><strong>Subsidies and Incentives:</strong> Access various subsidies on patent registration and industrial promotion.</li>
                        <li><strong>Interest Rate Concessions:</strong> Enjoy reduced interest rates on bank loans.</li>
                        <li><strong>Tax Benefits: </strong>Avail direct tax exemptions and reliefs.</li>
                        <li><strong>Government Tenders:</strong> Registered MSMEs get preference in government procurement and tenders.</li>
                        <li><strong>Protection Against Delayed Payments:</strong> Legal protection and interest on delayed payments from buyers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our MSME Registration Process</h2>
                        <p>We ensure a smooth and hassle-free MSME registration process:</p>
                        <ol>
                        <li><strong>Document Collection:</strong> Collecting necessary documents such as Aadhaar Card, PAN Card, business address proof, bank details, and business registration certificate.</li>
                        <li><strong>Application Filing:</strong> Filling out the MSME registration form with accurate details and uploading the required documents.</li>
                        <li><strong>Certificate Issuance:</strong> Once approved, the Udyam Registration Certificate is issued, containing a unique MSME number.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After obtaining MSME registration, businesses need to comply with certain requirements to maintain their benefits and status:</p>
                        <ul>
                            <li><strong>Annual Filing:</strong> Filing annual returns with the Ministry of MSME to maintain active status.</li>
                            <li><strong>Updation of Udyam Registration:</strong> Keeping business details updated in case of changes in capital or turnover.</li>
                            <li><strong>Timely Renewal (if applicable):</strong> Ensuring timely renewal of certificates to continue availing benefits.</li>
                            <li><strong>Compliance with Government Notifications:</strong> Adhering to any amendments or new regulations under the MSME Act.</li>
                        </ul>
                        <p>
                        We provide complete support for post-registration compliance, ensuring your MSME remains fully compliant and enjoys uninterrupted benefits.
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

export default MsmeRegistrationServices