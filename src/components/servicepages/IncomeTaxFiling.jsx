import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const IncomeTaxFiling = () => {
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
                        Income Tax Filing
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Income Tax Filing</h1>
                    <p className="highlight-box">
                        Income Tax Filing is the process of submitting an individual's or business's income tax return to the tax authorities, detailing earnings, deductions, and tax liabilities for the assessment year.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Filing your income tax returns accurately and on time is crucial to maintaining compliance and avoiding penalties. We offer professional <strong>Income Tax Filing</strong> Services to help individuals, businesses, and professionals file their returns with ease and accuracy. Our team of experts ensures that your tax calculations are error-free and your deductions are maximized.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Income Tax Filing?</h2>
                        <p>Income tax filing is a mandatory obligation for individuals and entities earning income above the threshold limit set by the government. Timely filing helps avoid penalties and enables you to claim refunds, carry forward losses, and maintain a clear financial record.</p>
                    </section>

                    <section>
                        <h2>Key Benefits of Income Tax Filing</h2>
                        <ol>
                            <li><strong>Legal Compliance: </strong>Stay compliant with the Income Tax Act.</li>
                            <li><strong>Claim Refunds:</strong> Get back excess tax paid during the financial year.</li>
                            <li><strong>Avoid Penalties:</strong> Steer clear of fines and late fees.</li>
                            <li><strong>Financial Proof:</strong> Acts as proof of income and is essential for availing loans.</li>
                            <li><strong>Carry Forward Losses:</strong> Adjust previous years' losses against future gains.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Income Tax Filing</h2>
                        <ul>
                            <li><strong>Individuals:</strong> Earning above the basic exemption limit as per the Income Tax Act.</li>
                            <li><strong>Businesses:</strong> Required to file regardless of income level.</li>
                            <li><strong>Professionals:</strong> Freelancers and consultants with taxable income.</li>
                            <li><strong>Companies and Firms:</strong> Mandatory filing as per business structure.</li>
                            <li><strong>NRIs:</strong> If income earned or accrued in India exceeds the exemption limit.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Income Tax Filing Process</h2>
                        <ol>
                            <li><strong>Data Collection:</strong> Gather income details, investment proofs, and other financial records.</li>
                            <li><strong>Tax Computation:</strong> Calculate taxable income and applicable deductions.</li>
                            <li><strong>Document Verification:</strong> Ensure the accuracy of the submitted documents.</li>
                            <li><strong>Filing Returns:</strong> Submit your return to the Income Tax Department.</li>
                            <li><strong>Post-Filing Support:</strong> Assist with refund tracking and response to IT Department queries.</li>
                        </ol>
                        <br></br>
                        <p>
                        With us, you can experience hassle-free and accurate tax filing while maximizing your savings.
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

export default IncomeTaxFiling