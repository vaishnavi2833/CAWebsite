import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const PrivateCompanyRegistration = () => {
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
                        Private Limited Company Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Private Limited Company Registration</h1>
                    <p className="highlight-box">
                        Private Limited Company Registration is the process of legally incorporating a company with limited liability and a separate legal identity, owned by private shareholders.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                       A <strong>Private Limited Company (PLC)</strong> is one of the most popular business structures in India, offering a blend of <strong>limited liability protection and corporate status.</strong> It is governed by the <strong>Companies Act, 2013</strong> and is ideal for startups and growing businesses looking to raise capital or build credibility. We offer comprehensive <strong>Private Limited Company Registration services,</strong> ensuring a seamless and hassle-free incorporation process.
                        </p>
                    </section>

                    <section>
                        <h2>Benefits of Private Limited Company Registration</h2>
                        <ul>
                            <li><strong>Limited Liability Protection:</strong> Shareholders' personal assets are protected from business liabilities.</li>
                            <li><strong>Separate Legal Entity:</strong> The company has its own legal identity, distinct from its owners.</li>
                            <li><strong>Easy Fundraising:</strong> PLCs can attract investors and venture capital funding.</li>
                            <li><strong>Perpetual Succession:</strong> The company's existence is not affected by changes in ownership.</li>
                            <li><strong>Enhanced Credibility:</strong> PLC registration improves the company's credibility and reputation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Private Limited Company Registration Process</h2>
                        <p>We take care of every step in the registration process:</p>
                        <ol>
                            <li><strong>Digital Signature Certificate (DSC):</strong> Assisting in obtaining DSCs for all proposed directors.</li>
                            <li><strong>Director Identification Number (DIN):</strong> Applying for the DIN for the designated directors.</li>
                            <li><strong>Name Approval:</strong> Filing the <strong>RUN (Reserve Unique Name)</strong> application to secure the desired company name.</li>
                            <li><strong>Incorporation Documents:</strong> Preparing and filing forms like <strong>SPICe+ (INC-32), MOA (Memorandum of Association),</strong> and <strong>AOA (Articles of Association).</strong></li>
                            <li><strong>Certificate of Incorporation:</strong> Obtaining the Certificate of Incorporation along with the <strong>Company Identification Number (CIN), PAN,</strong> and <strong>TAN.</strong></li>
                            <li><strong>Bank Account Opening:</strong> Assistance in opening a company bank account.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Post-Incorporation Compliance</h2>
                        <p>Once your <strong>Private Limited Company</strong> is registered, we assist with post-incorporation requirements such as:</p>
                        <ul>
                            <li><strong>GST Registration</strong></li>
                            <li><strong>EPF and ESI Registration</strong></li>
                            <li><strong>Trademark Registration</strong> </li>
                            <li><strong>Annual Compliance Filing (including ROC Filings and Annual Returns)</strong></li>
                        </ul>
                        <br></br>
                        <p>
                        Registering your <strong>Private Limited Company</strong> with us and ensures that your business gets started on the right legal footing, with all necessary compliances taken care of efficiently and accurately. Reach out to us to get your company registered without any hassle!
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

export default PrivateCompanyRegistration