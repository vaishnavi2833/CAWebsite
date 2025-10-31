import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const PublicCompanyRegistration = () => {
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
                        Public Limited Company
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Public Limited Company</h1>
                    <p className="highlight-box">
                        Public Limited Company Registration is the process of legally incorporating a company that offers shares to the public and has limited liability for its shareholders.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                       A <strong>Public Limited Company (PLC)</strong> is a business entity that offers its shares to the public and can be listed on a stock exchange. It is governed by the <strong>Companies Act, 2013,</strong> and is ideal for large businesses that aim to raise capital from the public through <strong>Initial Public Offerings (IPO).</strong> We provide expert assistance in <strong>Public Limited Company Registration,</strong> ensuring complete compliance with all regulatory requirements.
                        </p>
                    </section>

                    <section>
                        <h2>Benefits of Public Limited Company Registration</h2>
                        <ul>
                            <li><strong>Easy Fundraising:</strong> PLCs can raise capital by issuing shares to the public.</li>
                            <li><strong>Limited Liability:</strong> Shareholders' personal assets are protected from business debts.</li>
                            <li><strong>Separate Legal Entity:</strong> The company has its own legal identity, distinct from its members.</li>
                            <li><strong>Transferability of Shares:</strong> Shares of a public company are easily transferable.</li>
                            <li><strong>Enhanced Credibility:</strong> Being publicly listed boosts the company’s reputation and trustworthiness.</li>
                        </ul>

                    </section>

                    <section>
                        <h2>Our Public Limited Company Registration Process</h2>
                        <p>We handle the entire process of PLC registration efficiently:</p>
                        <ol>
                            <li><strong>Digital Signature Certificate (DSC):</strong> Assisting in obtaining DSCs for all proposed directors.</li>
                            <li><strong>Director Identification Number (DIN):</strong> Applying for the DIN for the designated directors.</li>
                            <li><strong>Name Approval:</strong> Filing the <strong>RUN (Reserve Unique Name)</strong> application to secure the desired company name.</li>
                            <li><strong>Drafting Incorporation Documents:</strong> Preparing<strong> MOA (Memorandum of Association),</strong> and <strong>AOA (Articles of Association).</strong></li>
                            <li><strong>Filing for Incorporation:</strong> Submitting <strong>SPICe+ (INC-32)</strong> and other necessary forms to the <strong>Registrar of Companies (RoC).</strong></li>
                            <li><strong>Certificate of Incorporation:</strong> Recieving <strong>Certificate of Incorporation, Company Identification Number (CIN), PAN,</strong> and <strong>TAN.</strong></li>
                            <li><strong>Public Issue of Shares:</strong> Assisting with compliance for <strong>IPO or public issue of shares.</strong></li>
                        </ol>

                    </section>

                    <section>
                        <h2>Post-Incorporation Compliance</h2>
                        <p>Once your <strong>Public Limited Company</strong> is registered, we assist with ongoing compliance, such as:</p>
                        <ul>
                            <li><strong>Annual ROC Filings</strong></li>
                            <li><strong>Financial Statements and Audit Reports</strong></li>
                            <li><strong>Corporate Governance Compliance</strong> </li>
                            <li><strong>Stock Exchange Compliances (if listed)</strong></li>
                            <li><strong>Income Tax Return Filing</strong></li>
                        </ul>
                        <br></br>
                        <p>
                        Choosing us for your <strong>Public Limited Company Registration</strong> ensures a smooth and transparent incorporation process with complete legal compliance. Let us help you take your business to the next level by registering as a <strong>Public Limited Company</strong> today!
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

export default PublicCompanyRegistration