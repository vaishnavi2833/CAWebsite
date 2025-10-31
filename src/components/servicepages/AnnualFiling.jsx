import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const AnnualFiling = () => {
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
                       Annual Filing
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Annual Filing</h1>
                    <p className="highlight-box">
                        Annual Filing is the process of submitting required financial and statutory documents, such as balance sheets, profit and loss statements, and other mandatory reports, to regulatory authorities to ensure compliance with company laws and tax regulations.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Annual filing is crucial to maintaining corporate transparency and complying with statutory obligations. It helps maintain updated records with the ROC and ensures the smooth functioning of the business. Non-compliance can lead to hefty penalties, disqualification of directors, and even company strike-off.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Annual Filing</h2>
                        <ol>
                            <li><strong>Legal Compliance:</strong> Avoid penalties and maintain good corporate standing.</li>
                            <li><strong>Corporate Transparency:</strong> Keep shareholders and stakeholders informed about financial performance.</li>
                            <li><strong>Maintain Active Status:</strong> Ensure that your business remains active on the MCA portal.</li>
                            <li><strong>Financial Disclosure:</strong> Present the company’s financial health and performance.</li>
                            <li><strong>Stakeholder Trust:</strong> Boost confidence among investors and partners by maintaining proper records.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Annual Filing</h2>
                        <ul>
                            <li><strong>Private Limited Company:</strong> Mandatory for all private limited companies registered in India.</li>
                            <li><strong>One Person Company (OPC):</strong> Annual compliance is compulsory.</li>
                            <li><strong>Limited Liability Partnership (LLP):</strong> Must file annual returns and financial statements.</li>
                            <li><strong>Public Limited Company:</strong> Mandatory for all public limited companies.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Annual Filing Process</h2>
                        <ol>
                            <li><strong>Data Collection:</strong> Gather necessary documents and financial statements.</li>
                            <li><strong>Return Preparation:</strong> Draft annual returns and financial statements.</li>
                            <li><strong>Filing Returns:</strong> Submit the required forms on the MCA portal.</li>
                            <li><strong>Compliance Check:</strong> Ensure accuracy and compliance with legal requirements.</li>
                            <li><strong>Post-Filing Support:</strong> Assistance with updates and corrections if needed.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <ul>
                            <li><strong>Filing of Financial Statements (AOC-4):</strong> Submission of the company’s financial statements.</li>
                            <li><strong>Annual Return (MGT-7):</strong> Filing of annual return within 60 days from the date of the AGM.</li>
                            <li><strong>LLP Annual Return (Form 11):</strong> Mandatory for LLPs to file annual returns.</li>
                            <li><strong>Statement of Accounts and Solvency (Form 8):</strong> To be filed by LLPs.</li>
                            <li><strong>Director KYC (DIR-3 KYC):</strong> Annual KYC for all company directors.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, experience seamless and accurate annual filing to keep your business compliant. Contact us today for professional assistance!
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

export default AnnualFiling