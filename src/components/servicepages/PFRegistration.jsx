import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const PFRegistration = () => {
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
                        PF Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>PF Registration</h1>
                    <p className="highlight-box">
                        PF Registration is the process of registering a business or organization with the Employees' Provident Fund Organization (EPFO) to provide retirement benefits to employees.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Provident Fund (PF) registration is mandatory for businesses with 20 or more employees under the <strong> Employees' Provident Fund and Miscellaneous Provisions Act, 1952.</strong> The Employee Provident Fund (EPF) is a social security scheme that helps employees save for retirement while also offering insurance and pension benefits. We provide hassle-free PF registration services to ensure your business complies with statutory requirements.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for PF Registration</h2>
                        <p>PF registration is mandatory for:</p>
                        <ol>
                            <li><strong>Businesses with 20 or more employees.</strong></li>
                            <li><strong>Certain notified industries with fewer than 20 employees </strong> (as specified by the government).</li>
                            <li><strong>Any organization wishing to voluntarily opt for EPF coverage.</strong></li>
                        </ol>
                        <br></br>
                        <p>Employees earning a basic salary of up to ₹15,000 per month are mandatorily covered under EPF, while employees earning above this threshold can also opt for coverage with employer consent.</p>
                    </section>

                    <section>
                        <h2>Benefits of PF Registration</h2>
                        <ul>
                        <li><strong>Social Security for Employees:</strong> Provides financial security and retirement savings.</li>
                        <li><strong>Insurance and Pension Benefits:</strong> Includes Employee Deposit Linked Insurance (EDLI) and pension schemes.</li>
                        <li><strong>Tax Benefits:</strong> Employer contributions to EPF are tax-deductible.</li>
                        <li><strong>Employee Motivation and Retention:</strong> Offers financial security to employees, leading to higher job satisfaction.</li>
                        <li><strong>Compliance with Labor Laws:</strong> Avoids legal issues and penalties related to non-compliance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our PF Registration Process</h2>
                        <p>We ensure a smooth and accurate PF registration process:</p>
                        <ol>
                            <li><strong>Document Collection:</strong> Gather necessary documents, including PAN, Aadhaar, business registration certificate, address proof, employee details, and digital signature.</li>
                            <li><strong>Application Filing:</strong> Complete the PF registration form on the EPFO portal with accurate details and upload the required documents.</li>
                            <li><strong>Registration Certificate Issuance:</strong> Obtain the <strong>PF registration number</strong> and <strong>Universal Account Numbers (UAN)</strong> for employees.</li>
                            <li><strong>Post-Registration Assistance:</strong> Provide guidance on maintaining records and filing monthly PF returns.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After PF registration, businesses must comply with the following requirements:</p>
                        <ul>
                            <li><strong>Monthly PF Contributions:</strong> Deposit employer and employee contributions (12% each) before the due date.</li>
                            <li><strong>Filing of Monthly and Annual Returns:</strong> Submit Form 12A, Form 5, Form 10, and Form 3A to the EPFO regularly.</li>
                            <li><strong>Maintain Employee Records:</strong> Keep records of employee wages, contributions, and UAN details.</li>
                            <li><strong>Annual PF Statement:</strong> Issue PF account statements to employees annually.</li>
                        </ul>
                        <p>
                        We offer a complete assistance with PF registration and ongoing compliance to ensure that your business remains fully compliant and avoids penalties.
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

export default PFRegistration