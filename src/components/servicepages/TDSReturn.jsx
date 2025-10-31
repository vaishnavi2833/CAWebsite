import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const TDSReturn = () => {
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
                       TDS Return
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>TDS Return</h1>
                    <p className="highlight-box">
                        TDS Return is the process of filing a return with the Income Tax Department that details the tax deducted at source (TDS) on various payments such as salaries, interest, and contractor payments made by an organization.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        TDS (Tax Deducted at Source) return filing is a mandatory compliance requirement for businesses and individuals who deduct tax at the source while making payments such as salaries, interest, commission, rent, or professional fees. We offer accurate and timely <strong>TDS Return Filing Services,</strong> ensuring that your deductions are properly accounted for and filed as per statutory requirements.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for TDS Return Filing?</h2>
                        <p>Filing TDS returns is essential to comply with the provisions of the Income Tax Act. It helps in maintaining transparent records of tax deductions and avoids penalties for non-compliance. Moreover, timely filing of TDS returns ensures that deductees can avail of TDS credits while filing their income tax returns.</p>
                    </section>

                    <section>
                        <h2>Key Benefits of TDS Return Filing</h2>
                        <ol>
                        <li><strong>Legal Compliance:</strong> Avoid hefty penalties for non-filing or late filing.</li>
                        <li><strong>Claim TDS Credits:</strong> Enables deductees to claim TDS credit in their income tax returns.</li>
                        <li><strong>Transparent Tax Records:</strong> Maintain proper records of tax deductions and remittances.</li>
                        <li><strong>Seamless Refunds:</strong> Smooth refund process for excess tax deducted.</li>
                        <li><strong>Avoid Interest and Late Fees:</strong> Filing on time helps avoid interest and late fees under the Income Tax Act.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for TDS Return Filing</h2>
                        <ul>
                        <li><strong>Employers:</strong> Deducting TDS on salaries.</li>
                        <li><strong>Businesses:</strong> Deducting TDS on rent, professional fees, contract payments, etc.</li>
                        <li><strong>Banks and Financial Institutions:</strong> Deducting TDS on interest payments.</li>
                        <li><strong>Individuals and HUFs:</strong> If required to deduct TDS on specified payments.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our TDS Return Filing Process</h2>
                        <ol>
                        <li><strong>Data Collection:</strong> Gather details of payments made and TDS deducted.</li>
                        <li><strong>Computation:</strong> Calculate the amount of TDS and generate the challan.</li>
                        <li><strong>Return Preparation:</strong> Prepare the return in the required format (Form 24Q, 26Q, etc.).</li>
                        <li><strong>Filing Returns:</strong> Submit the TDS return on the income tax portal.</li>
                        <li><strong>Post-Filing Support:</strong> Assistance with corrections and issuing TDS certificates.</li>
                        </ol>
                    </section>

                    <section>                        
                        <h2>Post-Registration Compliance</h2>
                        <ul>
                        <li><strong>Quarterly Filing:</strong> TDS returns need to be filed quarterly as per the due dates.</li>
                        <li><strong>Challan and Statement:</strong> Regular submission of TDS challan and statement.</li>
                        <li><strong>Form 16/16A Generation:</strong> Issuing TDS certificates to deductees.</li>
                        <li><strong>Correction Filing:</strong> In case of errors in filed returns, timely correction is essential.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, ensure accurate and timely filing of your TDS returns to stay compliant with tax regulations. Get in touch with us today for professional TDS return filing services.
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

export default TDSReturn;
