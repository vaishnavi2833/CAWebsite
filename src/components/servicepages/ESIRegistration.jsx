import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ESIRegistration = () => {
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
                        ESI Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>ESI Registration</h1>
                    <p className="highlight-box">
                        ESI Registration is the process of registering a business with the Employees' State Insurance Corporation (ESIC) to provide health and social security benefits to employees.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Employee State Insurance (ESI) is a social security scheme designed to provide medical and financial assistance to employees in case of sickness, maternity, disability, or injury during employment. The scheme is regulated by the <strong>Employees' State Insurance Act, 1948,</strong> and is managed by the <strong>Employees' State Insurance Corporation (ESIC).</strong> We offer a seamless and efficient ESI registration services to ensure your business complies with statutory obligations.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for ESI Registration</h2>
                        <p>ESI registration is mandatory for:</p>
                        <ol>
                            <li>Establishments with <strong>10 or more employees</strong> (in some states, the threshold is 20 employees).</li>
                            <li>Employees earning a <strong>gross salary of up to ₹21,000 per month </strong>(₹25,000 per month for employees with disabilities).</li>
                            <li><strong>Factories and establishments as notified by the government.</strong></li>
                        </ol>
                    </section>

                    <section>
                        <h2>Benefits of ESI Registration</h2>
                        <ul>
                        <li><strong>Medical Benefits:</strong> Comprehensive medical care for employees and their families.</li>
                        <li><strong>Sickness Benefits:</strong> Compensation at the rate of <strong>70% of wages</strong> during medical leave.</li>
                        <li><strong>Maternity Benefits:</strong> Paid maternity leave for female employees.</li>
                        <li><strong>Disability Benefits: </strong>Compensation in case of temporary or permanent disability.</li>
                        <li><strong>Dependents’ Benefits:</strong> Financial assistance to dependents in case of employee death due to employment injury.</li>
                        <li><strong>Funeral Expenses:</strong> Financial support for funeral costs.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our ESI Registration Process</h2>
                        <p>We follow a streamlined approach to make ESI registration hassle-free:</p>
                        <ol>
                            <li><strong>Document Collection:</strong> Gather essential documents such as the business registration certificate, PAN, address proof, employee details (including Aadhaar and salary records), and digital signature.</li>
                            <li><strong>Application Filing:</strong> Complete the ESI registration form on the <strong>ESIC portal</strong> with accurate details and upload the necessary documents.</li>
                            <li><strong>ESI Code Allotment:</strong> Obtain the <strong>17-digit ESI registration number</strong> and employee Insurance Numbers.</li>
                            <li><strong>Post-Registration Assistance:</strong> Help with the generation of <strong>ESI cards</strong> for employees and guide employers on contribution procedures.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After ESI registration, businesses must comply with the following obligations:</p>
                        <ul>
                            <li><strong>Monthly Contribution:</strong> Deposit the employer's contribution <strong>(3.25% of wages)</strong> and employee's contribution <strong>(0.75% of wages)</strong> within the due date.</li>
                            <li><strong>ESI Returns:</strong> File monthly and half-yearly returns with the details of wages and contributions.</li>
                            <li><strong>Maintenance of Records:</strong> Maintain registers and records as required under the <strong>ESI Act.</strong></li>
                            <li><strong>Timely Update of Employee Details:</strong> Update the database with changes in employee information or wages.</li>
                        </ul>
                        <br></br>
                        <p>
                        We ensure comprehensive support with ESI registration and ongoing compliance, helping you focus on your core business while staying legally compliant.
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

export default ESIRegistration