import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const PFReturn = () => {
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
                        PF Return
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>PF Return</h1>
                    <p className="highlight-box">
                        PF Return is a periodic submission to the Employees' Provident Fund (EPF) organization that reports the contributions made by both the employer and employee to the provident fund. It ensures compliance with the EPF Act and helps maintain accurate records of the fund for each employee.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        <strong>Provident Fund (PF) Return</strong> filing is a mandatory compliance requirement for employers covered under the <strong>Employees’ Provident Fund and Miscellaneous Provisions Act, 1952.</strong> Employers are required to deposit the contributions deducted from employees’ salaries along with the employer's share to the <strong>Employees’ Provident Fund Organization (EPFO)</strong> and file periodic returns. We offer professional <strong>PF Return filing services</strong> to help businesses meet their statutory obligations efficiently and accurately.
                        </p>
                        <br></br>
                        <p>
                            Our team of experts ensures the <strong>accurate calculation and timely filing of PF returns,</strong> minimizing the risk of penalties and legal complications. We handle the entire process, from <strong>preparing the return statement, verifying the contribution details, generating ECR (Electronic Challan cum Return), and uploading it to the EPFO portal.</strong> We also ensure that the <strong>monthly and annual returns (like Form 3A, Form 6A, and Form 12A)</strong> are filed correctly and on time.
                        </p>
                        <br />
                        <p>
                            With eFiling Guru, you can eliminate the hassle of dealing with complex compliance requirements. We help you maintain <strong>error-free records, prepare reports, and ensure that the payments are made accurately and within the due dates.</strong> Our services are tailored to suit businesses of all sizes, ensuring that you remain compliant without dedicating excessive time and resources.
                        </p>
                        <br/>
                        <p>
                            By choosing us, for your <strong>PF Return filing needs,</strong> you can focus on your core business while we take care of your statutory obligations. Our team stays updated with the latest regulatory changes to provide you with <strong>reliable and compliant solutions.</strong> Let us simplify your PF filing process and help you maintain a spotless compliance record.
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

export default PFReturn