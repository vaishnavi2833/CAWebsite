import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const GstRegistration = () => {
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
                        GST Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>GST Registration</h1>
                    <p className="highlight-box">
                        GST Registration is the process of obtaining a unique Goods and Services Tax Identification
                        Number (GSTIN) to legally collect and remit GST.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Goods and Services Tax (GST) is a unified, indirect tax levied on the supply of goods and services in India. 
                        It has replaced multiple indirect taxes like VAT, Service Tax, and Excise Duty. Businesses whose turnover 
                        exceeds the prescribed threshold limit are required to obtain GST registration. We offer fast and hassle-free 
                        GST Registration services, ensuring your business is fully compliant with GST laws.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for GST Registration</h2>
                        <p>GST registration is mandatory for businesses and individuals meeting the following criteria:</p>
                        <ul>
                        <li><strong>Turnover Threshold:</strong> Businesses with an aggregate turnover exceeding ₹40 lakh (₹20 lakh for service providers) in a financial year. For special category states, the threshold limit is ₹20 lakh (₹10 lakh for service providers).</li>
                        <li><strong>Inter-State Supply:</strong> Businesses involved in the interstate supply of goods or services.</li>
                        <li><strong>E-Commerce Operators:</strong> Entities involved in online sales through e-commerce platforms.</li>
                        <li><strong>Casual Taxable Persons and Non-Resident Taxable Persons:</strong> Individuals or entities occasionally supplying goods or services in a taxable territory.</li>
                        <li><strong>Reverse Charge Mechanism (RCM):</strong> Businesses liable to pay tax under the reverse charge mechanism.</li>
                        <li><strong>Input Service Distributors and Agents:</strong> ISDs distributing credit and agents supplying goods on behalf of others.</li>
                        <li><strong>Voluntary Registration:</strong> Businesses opting for voluntary registration even if not mandated.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Benefits of GST Registration</h2>
                        <ul>
                        <li><strong>Legal Recognition:</strong> Your business is legally recognized as a supplier of goods or services.</li>
                        <li><strong>Input Tax Credit (ITC):</strong> Avail ITC on purchases and reduce tax liability.</li>
                        <li><strong>Seamless Interstate Business:</strong> Conduct business without restrictions across states.</li>
                        <li><strong>Enhanced Credibility:</strong> Builds customer and client trust by showcasing GST compliance.</li>
                        <li><strong>Competitive Edge:</strong> Registered businesses can cater to larger clients and government tenders.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our GST Registration Process</h2>
                        <p>We handle the complete GST registration process efficiently:</p>
                        <ol>
                        <li><strong>Document Collection:</strong> PAN Card and Aadhaar Card of the applicant, proof of business registration, identity and address proof of promoters/directors, business address proof, and bank statement or a cancelled cheque.</li>
                        <li><strong>Application Filing:</strong> Submitting GST REG-01 on the GST portal with accurate details and supporting documents.</li>
                        <li><strong>ARN Generation:</strong> Receiving the Application Reference Number (ARN) upon successful submission.</li>
                        <li><strong>Verification by GST Officer:</strong> Verification of application and documents by the GST officer.</li>
                        <li><strong>GSTIN Allotment:</strong> Obtaining the GST Identification Number (GSTIN) and Certificate of Registration upon approval.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>After registration, we also assist with:</p>
                        <ul>
                        <li>GST Return Filing (Monthly, Quarterly, and Annual)</li>
                        <li>GST Invoicing and Billing</li>
                        <li>E-Way Bill Generation</li>
                        <li>GST Audit and Annual Filing</li>
                        <li>Compliance with GST Notifications and Amendments</li>
                        </ul>
                        <p>
                        With us, your GST registration and compliance are smooth, efficient, and stress-free. 
                        Contact us today to get your business GST registered with professional assistance!
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

export default GstRegistration