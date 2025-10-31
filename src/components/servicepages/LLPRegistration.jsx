import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const LLPRegistration = () => {
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
                        Limited Liability Partnership Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Limited Liability Partnership Registration</h1>
                    <p className="highlight-box">
                        Limited Liability Partnership Registration is the process of legally forming a partnership business with limited liability protection for its partners.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        A <strong>Limited Liability Partnership (LLP)</strong> is a flexible business structure that combines the benefits of a <strong>partnership and a corporate entity.</strong> Introduced under the <strong>Limited Liability Partnership Act, 2008,</strong> an LLP provides the <strong>limited liability protection</strong> of a company while allowing partners to manage the business directly. It is an ideal choice for professionals, small businesses, and startups looking for <strong>reduced compliance requirements</strong> and <strong>ease of management.</strong> We offer streamlined and professional <strong>LLP Registration services,</strong> ensuring a quick and hassle-free incorporation process.
                        </p>
                    </section>

                    <section>
                        <h2>Benefits of OPC Registration</h2>
                        <ul>
                            <li><strong>Limited Liability Protection:</strong> Partners' personal assets are not liable for the business debts.</li>
                            <li><strong>Separate Legal Entity:</strong> An LLP has its own legal identity, separate from its partners.</li>
                            <li><strong>Operational Flexibility:</strong> Partners can directly manage the business without complex corporate structures.</li>
                            <li><strong>Lower Compliance Burden:</strong> Compared to private limited companies, LLPs have fewer compliance requirements.</li>
                            <li><strong>Tax Benefits:</strong> LLPs are exempt from <strong>Dividend Distribution Tax (DDT)</strong> and have <strong>pass-through taxation.</strong></li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our LLP Registration Process</h2>
                        <p>We handle the entire LLP registration process efficiently:</p>
                        <ol>
                            <li><strong>Digital Signature Certificate (DSC):</strong> Assisting in obtaining DSCs for all designated partners.</li>
                            <li><strong>Director Identification Number (DIN):</strong> Applying for the DIN of the proposed partners.</li>
                            <li><strong>Name Reservation:</strong> Filing for <strong>LLP-RUN (Reserve Unique Name)</strong> to secure the desired business name.</li>
                            <li><strong>Drafting LLP Agreement:</strong> Creating a comprehensive <strong>LLP Agreement</strong> that outlines the roles, responsibilities, and profit-sharing ratio of partners.</li>
                            <li><strong>Filing Incorporation Documents:</strong> Submitting Form FiLLiP (<strong>Form for incorporation of LLP)</strong> along with necessary documents to the <strong>Registrar of Companies (RoC).</strong></li>
                            <li><strong>Certificate of Incorporation:</strong> Obtaining the <strong>Certificate of Incorporation</strong> along with the <strong>LLPIN (LLP Identification Number).</strong></li>
                            <li><strong>PAN and TAN Application:</strong> Getting the <strong>PAN and TAN</strong> for the newly formed LLP.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Incorporation Compliance</h2>
                        <p>Once your LLP is registered, we assist with essential post-incorporation compliance such as:</p>
                        <ul>
                            <li><strong>Annual Filing and ROC Compliance</strong></li>
                            <li><strong>Income Tax Return Filing</strong></li>
                            <li><strong>GST Registration and Compliance</strong> </li>
                            <li><strong>Maintenance of Statutory Records</strong></li>
                        </ul>

                        <br></br>
                        <p>
                        We ensure that your LLP registration process is smooth and compliant with all legal requirements. Get in touch with us today to establish your LLP with ease and professionalism!
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

export default LLPRegistration