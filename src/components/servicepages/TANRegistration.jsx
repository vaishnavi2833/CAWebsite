import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const TANRegistration = () => {
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
                        TAN Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>TAN Registration</h1>
                    <p className="highlight-box">
                        TAN Registration is the process of obtaining a Tax Deduction and Collection Account Number (TAN) from the Income Tax Department, required for businesses to deduct or collect tax at source.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Tax Deduction and Collection Account Number (TAN) is a unique 10-digit alphanumeric number issued by the <strong>Income Tax Department of India.</strong> It is mandatory for businesses and individuals responsible for deducting or collecting tax at source (TDS/TCS) on behalf of the government. We offer end-to-end assistance with TAN registration, ensuring accurate and hassle-free processing.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for TAN Registration</h2>
                        <p>TAN registration is mandatory for:</p>
                        <ol>
                            <li><strong>Employers deducting TDS on salaries.</strong> </li>
                            <li><strong>Businesses making payments that attract TDS or TCS.</strong> </li>
                            <li><strong>Entities required to file TDS/TCS returns.</strong></li>
                            <li><strong>Companies, firms, trusts, and proprietors with TDS or TCS obligations.</strong> </li>
                        </ol>
                    </section>

                    <section>
                        <h2>Benefits of TAN Registration</h2>
                        <ul>
                            <li><strong>Compliance with Tax Laws:</strong> Mandatory for deducting and depositing TDS/TCS.</li>
                            <li><strong>Filing TDS/TCS Returns:</strong> Essential for filing quarterly TDS/TCS statements.</li>
                            <li><strong>Avoiding Penalties:</strong> Failure to quote TAN may lead to heavy penalties and rejections.</li>
                            <li><strong>Smooth Business Operations:</strong> Ensures compliance with tax regulations and avoids legal issues.</li>
                        </ul>

                    </section>

                    <section>
                        <h2>Our TAN Registration Process</h2>
                        <p>We follow a streamlined approach to obtain your TAN:</p>
                        <ol>
                            <li><strong>Document Collection:</strong> Gather necessary documents such as proof of identity, address proof, and business registration certificate.</li>
                            <li><strong>Application Filing:</strong> Complete Form 49B with accurate details and submit it online through the <strong>TIN-NSDL portal</strong>.</li>
                            <li><strong>Payment of Fees:</strong> Pay the required application fee for processing.</li>
                            <li><strong>Acknowledgment Receipt:</strong> Receive an acknowledgment containing a 14-digit unique number.</li>
                            <li><strong>TAN Allotment:</strong> Obtain the TAN within the stipulated time, either physically or digitally.</li>
                        </ol>


                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>Once TAN is registered, businesses must adhere to the following compliances:</p>
                        <ul>
                            <li><strong>Quoting TAN:</strong> Mention TAN in all TDS/TCS-related documents, challans, and returns.</li>
                            <li><strong>Filing TDS/TCS Returns:</strong> Submit timely returns to avoid penalties.</li>
                            <li><strong>Timely TDS/TCS Payment:</strong> Deposit the deducted or collected amount within the due dates.</li>
                            <li><strong>Updating TAN Details:</strong> Update any changes (like address or business name) with the Income Tax Department.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, your TAN registration becomes seamless and error-free, ensuring compliance with tax laws and efficient handling of TDS/TCS obligations.
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

export default TANRegistration