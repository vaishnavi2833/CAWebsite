import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const IncAuthCapital = () => {
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
                       Increase In Authorized Capital
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Increase In Authorized Capital</h1>
                    <p className="highlight-box">
                        Increase in Authorized Capital is the process of raising the maximum limit of a company's share capital, allowing it to issue more shares and attract additional investment, in accordance with legal and regulatory procedures.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Authorized capital is the maximum amount of capital that a company is authorized to issue to its shareholders. Increasing the authorized capital is essential when a company plans to expand its operations, raise additional funds, or issue new shares. The process of increasing authorized capital involves altering the company’s <strong>Memorandum of Association (MOA)</strong> and <strong>Articles of Association (AOA)</strong> and obtaining approval from the <strong>Registrar of Companies (ROC).</strong> We simplify this process by providing end-to-end support for increasing your authorized capital.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Increasing Authorized Capital Services?</h2>
                        <p>
                        Increasing the authorized capital involves several legal procedures and documentation, including conducting board meetings and passing resolutions. Any mistake during this process can lead to non-compliance and penalties.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Increasing Authorized Capital</h2>
                       <ol>
                            <li><strong>Business Expansion:</strong> Allows the company to raise more capital by issuing new shares.</li>
                            <li><strong>Financial Flexibility:</strong> Enhances the company’s ability to meet future funding needs.</li>
                            <li><strong>Investor Confidence:</strong> Shows readiness for growth and expansion.</li>
                            <li><strong>Compliance Assurance:</strong> Meet all regulatory requirements without any hassle.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Increasing Authorized Capital</h2>
                        <ul>
                            <li><strong>Board Resolution:</strong> Approval from the Board of Directors.</li>
                            <li><strong>Shareholders’ Consent:</strong> Approval from shareholders through a special resolution.</li>
                            <li><strong>Alteration of MOA and AOA:</strong> Necessary changes to the Memorandum and Articles of Association.</li>
                            <li><strong>ROC Filing:</strong> Filing of Form SH-7 with the ROC within the prescribed time.</li>
                        </ul>

                    </section>
                        
                    <section>
                        <h2>Our Capital Increase Process</h2>
                        <ol>
                            <li><strong>Documentation:</strong> Collect and verify required documents.</li>
                            <li><strong>Board Meeting:</strong> Conduct a board meeting and pass a resolution for capital increase.</li>
                            <li><strong>Shareholders’ Meeting:</strong> Obtain shareholders’ approval through a special resolution.</li>
                            <li><strong>ROC Filing:</strong> File Form SH-7 and other necessary documents with the ROC.</li>
                            <li><strong>Compliance Check:</strong> Verify the successful update of authorized capital in the company records.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Resignation Compliance</h2>
                        <ul>
                            <li><strong>Updation of Company Records:</strong> Update company records to reflect the increased capital.</li>
                            <li><strong>Statutory Registers Update:</strong> Update the Register of Members and Share Capital.</li>
                            <li><strong>Amendments to MOA and AOA:</strong> Reflect the new authorized capital amount.</li>
                            <li><strong>Filing Annual Returns:</strong> Ensure that the increased capital is recorded in annual filings.</li>
                        </ul>
                        <br></br>
                        <p>
                        Get your authorized capital increased without any complications with us. Contact us today to get started!
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

export default IncAuthCapital