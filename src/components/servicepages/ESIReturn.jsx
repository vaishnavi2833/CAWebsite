import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ESIReturn = () => {
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
                       ESI Return Filing
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>ESI Return Filing</h1>
                    <p className="highlight-box">
                        ESI Return Filing is the process of submitting the Employee State Insurance (ESI) contribution details to the Employees' State Insurance Corporation (ESIC), ensuring compliance with the ESI Act and payment of employee benefits.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Employee State Insurance (ESI) return filing is mandatory for all employers registered under the <strong>Employee State Insurance Act, 1948</strong>. It ensures that employees are covered under the ESI scheme and can avail of medical and cash benefits. We offer efficient and hassle-free <strong>ESI Return Filing Services</strong> to help you meet your statutory obligations on time.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for ESI Return Filing?</h2>
                        <p>Filing ESI returns ensures compliance with labor laws and protects businesses from legal consequences. It also ensures that employees can avail of medical and financial benefits in case of sickness, maternity, disability, or death due to employment injury.</p>
                    </section>

                    <section>
                        <h2>Key Benefits of ESI Return Filing</h2>
                        <ol>
                        <li><strong>Legal Compliance:</strong> Avoid penalties and legal issues by adhering to ESI regulations.</li>
                        <li><strong>Employee Welfare:</strong> Provide social security benefits to employees.</li>
                        <li><strong>Transparent Records:</strong> Maintain proper records of contributions and compliance.</li>
                        <li><strong>Claim Benefits Easily:</strong> Ensure employees can avail of medical and other benefits without hassle.</li>
                        <li><strong>Avoid Legal Complications:</strong> Proper filing helps avoid disputes and fines.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for ESI Return Filing</h2>
                        <ul>
                        <li><strong>Establishments:</strong> Factories, shops, hotels, restaurants, and other specified establishments.</li>
                        <li><strong>Employee Strength:</strong> Establishments with 10 or more employees.</li>
                        <li><strong>Salary Limit:</strong> Employees earning up to ₹21,000 per month (₹25,000 for persons with disabilities).</li>
                        </ul>   
                    </section>
                        
                    <section>
                        <h2>Our ESI Return Filing Process</h2>
                        <ol>
                        <li><strong>Data Collection:</strong> Gather employee salary details and ESI contributions.</li>
                        <li><strong>Challan Generation:</strong> Calculate contributions and generate the ESI challan.</li>
                        <li><strong>Return Preparation:</strong> Prepare the ESI return as per prescribed formats.</li>
                        <li><strong>Return Filing:</strong> Submit the return on the ESI portal before the due date.</li>
                        <li><strong>Post-Filing Support:</strong> Assistance with corrections and compliance management.</li>
                        </ol>
                    </section>

                    <section>                        
                        <h2>Post-Registration Compliance</h2>
                        <ul>
                        <li><strong>Monthly Contribution:</strong> Employers and employees must contribute to the ESI fund monthly.</li>
                        <li><strong>Half-Yearly Filing:</strong> ESI returns must be filed every six months (April to September and October to March).</li>
                        <li><strong>Maintenance of Records:</strong> Employers must maintain proper records of wages, attendance, and contributions.</li>
                        <li><strong>Form Submission:</strong> Submit forms such as Form 6 and Form 7 on time.</li>
                        </ul>
                        <br></br>
                        <p>
                        Choose us to simplify your ESI return filing and ensure your business remains compliant. Contact us today for reliable ESI return services!
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

export default ESIReturn