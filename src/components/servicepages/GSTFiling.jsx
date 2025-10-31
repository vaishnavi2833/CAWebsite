import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const GSTFiling = () => {
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
                       GST Return Filing
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>GST Return Filing</h1>
                    <p className="highlight-box">
                        GST Return Filing is the process of submitting periodic tax returns to the Goods and Services Tax (GST) authorities, detailing sales, purchases, and tax liabilities to ensure compliance with GST laws.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Filing GST returns is an essential compliance requirement for businesses registered under the Goods and Services Tax (GST) regime in India. We offer reliable and hassle-free <strong>GST Return Filing Services,</strong> ensuring accurate and timely filing to avoid penalties and maintain legal compliance.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for GST Return Filing?</h2>
                        <p>GST return filing helps businesses report their sales, purchases, output GST, and input tax credit. It is mandatory for all registered businesses to file GST returns periodically, depending on their turnover and business type. Timely filing ensures smooth business operations and avoids late fees and interest.</p>
                    </section>

                    <section>
                        <h2>Key Benefits of GST Return Filing</h2>
                        <ol>
                        <li><strong>Legal Compliance:</strong> Avoid hefty penalties by filing on time.</li>
                        <li><strong>Claim Input Tax Credit:</strong> Get tax benefits on purchases made for business.</li>
                        <li><strong>Maintain Transparency:</strong> Keep accurate records of sales and purchases.</li>
                        <li><strong>Build Credibility:</strong> Demonstrate compliance to clients and stakeholders.</li>
                        <li><strong>Smooth Business Operations:</strong> Avoid disruption in business due to non-compliance.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for GST Return Filing</h2>
                        <ul>
                        <li><strong>Registered Businesses:</strong> All entities registered under GST.</li>
                        <li><strong>Turnover Criteria:</strong> Businesses with an annual turnover exceeding ₹20 lakhs (₹10 lakhs for special category states).</li>
                        <li><strong>Composition Scheme Dealers:</strong> Required to file quarterly returns.</li>
                        <li><strong>E-commerce Operators:</strong> Must file GSTR-8 and GSTR-9.</li>
                        <li><strong>Input Service Distributors:</strong> Required to file GSTR-6.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our GST Return Filing Process</h2>
                        <ol>
                        <li><strong>Data Collection:</strong> Gather invoices, purchase details, and tax payments.</li>
                        <li><strong>Tax Computation:</strong> Calculate GST liability and eligible input tax credit.</li>
                        <li><strong>Return Preparation:</strong> Prepare GST returns in the required format.</li>
                        <li><strong>Filing Returns:</strong> Submit the return to the GST portal.</li>
                        <li><strong>Post-Filing Support:</strong> Assistance with GST payments and error rectification.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <ul>
                        <li><strong>Monthly/Quarterly Filing:</strong> Depending on the turnover and type of registration.</li>
                        <li><strong>Annual Return:</strong> Mandatory filing at the end of each financial year.</li>
                        <li><strong>Reconciliation and Audit:</strong> Ensure records match with GSTN data.</li>
                        <li><strong>Timely Payments:</strong> Clear outstanding liabilities to avoid penalties.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, experience simplified and accurate GST return filing while staying compliant with the latest GST norms. Let us handle your GST compliance, so you can focus on growing your business!
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

export default GSTFiling