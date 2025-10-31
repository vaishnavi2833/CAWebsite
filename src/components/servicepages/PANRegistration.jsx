import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

export const PANRegistration = () => {
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
                        PAN Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>PAN Registration</h1>
                    <p className="highlight-box">
                        PAN Registration is the process of obtaining a Permanent Account Number (PAN) from the Income Tax Department, used for tax identification and financial transactions.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Permanent Account Number (PAN) is a unique 10-digit alphanumeric code issued by the <strong>Income Tax Department of India.</strong> It serves as an essential identification number for individuals, businesses, and other entities for tax-related transactions and financial activities. We provide seamless PAN registration services, making it easy to obtain your PAN card without any hassle.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for PAN Registration</h2>
                        <p>PAN registration can be done by:</p>
                        <ol>
                            <li><strong>Individuals:</strong> Indian citizens, including minors and students.</li>
                            <li><strong>Companies:</strong> Indian companies, foreign companies operating in India, and other corporate entities.</li>
                            <li><strong>Firms/Partnerships:</strong> Partnerships, LLPs, and associations of persons (AOPs).</li>
                            <li><strong>Trusts and Societies:</strong> Charitable trusts, NGOs, and societies.</li>
                            <li><strong>Foreign Nationals:</strong> Non-resident Indians (NRIs) and foreign nationals engaged in business or professional activities in India.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Benefits of PAN Registration</h2>
                        <ul>
                            <li><strong>Identity Proof: </strong> Serves as a valid proof of identity for various financial transactions.</li>
                            <li><strong>Tax Filing:</strong> Mandatory for filing income tax returns and paying taxes.</li>
                            <li><strong>Financial Transactions:</strong> Required for opening bank accounts, purchasing property, and conducting high-value transactions.</li>
                            <li><strong>Avoiding Tax Deductions:</strong> Prevents higher TDS rates by linking PAN with bank accounts.</li>
                            <li><strong>Business Operations:</strong> Essential for obtaining GST registration and conducting business in India.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our PAN Registration Process</h2>
                        <p>We ensure a smooth and hassle-free PAN registration process:</p>
                        <ol>
                            <li><strong>Document Collection:</strong> Gather required documents such as Aadhaar card, proof of address, passport-size photographs, and company incorporation documents (for businesses).</li>
                            <li><strong>Form Submission:</strong> Fill out the PAN application form (<strong>Form 49A for Indian citizens and Form 49AA for foreign nationals)</strong> with accurate details.</li>
                            <li><strong>Document Verification:</strong> Verify the documents and submit them to the <strong>Income Tax Department</strong>.</li>
                            <li><strong>Application Tracking:</strong> Track the application status and keep you updated at every stage.</li>
                            <li><strong>PAN Card Issuance:</strong> Receive the PAN card physically or digitally within the stipulated time.</li>
                        </ol>   

                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After obtaining the PAN card, the following must be ensured:</p>
                        <ul>
                            <li><strong>Linking PAN with Aadhaar:</strong> Mandatory as per government regulations.</li>
                            <li><strong>Updating PAN Details:</strong> Keep the PAN details updated in case of address or name changes.</li>
                            <li><strong>Filing Income Tax Returns (ITR):</strong> Use PAN while filing ITR and paying taxes.</li>
                            <li><strong>Quoting PAN:</strong> Use the PAN number for all financial and high-value transactions as mandated by the Income Tax Act.</li>
                        </ul>
                        <br></br>
                        <p>
                        We offer professional assistance with PAN registration and post-registration compliance, ensuring a hassle-free experience.
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
