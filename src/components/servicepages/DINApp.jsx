import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const DINApp = () => {
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
                       Application For DIN
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Application For DIN</h1>
                    <p className="highlight-box">
                        Application for DIN (Director Identification Number) is the process of applying for a unique identification number issued by the Ministry of Corporate Affairs (MCA) to an individual intending to become a director in a company.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        The <strong>Director Identification Number (DIN)</strong> is a unique identification number allotted to an individual who intends to become a director or is already a director of a company. Obtaining a DIN is mandatory for every director under the <strong>Companies Act, 2013</strong>. We offer comprehensive support in obtaining and managing your DIN efficiently.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for DIN Application Services?</h2>
                        <p>
                        Applying for a DIN involves submitting personal information and identity proofs along with the application form. Any discrepancy can lead to rejection or delay. With us, you can be assured of a hassle-free experience with accurate document preparation and timely submission.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Obtaining DIN</h2>
                        <ol>
                            <li><strong>Unique Identification:</strong> Ensures the director’s identity across all companies.</li>
                            <li><strong>Legal Compliance:</strong> Mandatory for all existing and proposed directors.</li>
                            <li><strong>Transparency:</strong> Maintains proper identification records of directors.</li>
                            <li><strong>Validity for Life:</strong> Once allotted, the DIN remains valid for the director’s lifetime.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Applying for DIN</h2>
                        <ul>
                            <li><strong>Age:</strong> The applicant must be at least 18 years old.</li>
                            <li><strong>Nationality:</strong> Both Indian and foreign nationals are eligible.</li>
                            <li><strong>Identity Proof:</strong> PAN card for Indian nationals and passport for foreign nationals.</li>
                            <li><strong>Address Proof:</strong> Aadhaar, passport, driving license, or utility bill.</li>
                            <li><strong>Passport-size Photograph:</strong> Recent color photograph.</li>
                            <li><strong>Digital Signature Certificate (DSC):</strong> Mandatory for signing the application.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our DIN Application Process</h2>
                        <ol>
                            <li><strong>Documentation:</strong> Collection and verification of required documents.</li>
                            <li><strong>Form Filing:</strong> Preparation and filing of Form DIR-3 with the Ministry of Corporate Affairs (MCA).</li>
                            <li><strong>Digital Signature:</strong> Affixing the Digital Signature Certificate (DSC) to the application.</li>
                            <li><strong>Verification and Submission:</strong> Verification by a practicing professional and submission to the ROC.</li>
                            <li><strong>DIN Allotment:</strong> Upon approval, the DIN is generated and issued.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Transfer Compliance</h2>
                        <ul>
                            <li><strong>Updation of DIN Details:</strong> Update DIN details in case of changes (like address or personal information).</li>
                            <li><strong>Annual Compliance:</strong> Use the DIN in all ROC filings and company documents.</li>
                            <li><strong>Surrender or Deactivation:</strong> In case of resignation or disqualification, surrender or deactivate the DIN.</li>
                        </ul>
                        <br></br>
                        <p>
                        Get your DIN without any hassles with us. Reach out to us today for a smooth and error-free application process!
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

export default DINApp