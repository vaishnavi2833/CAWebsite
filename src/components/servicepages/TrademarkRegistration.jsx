import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const TrademarkRegistration = () => {
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
                        Trademark Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Trademark Registration</h1>
                    <p className="highlight-box">
                        Trademark Registration is the process of legally protecting a brand, logo, or symbol to distinguish goods or services and prevent unauthorized use.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Trademark registration is essential for protecting your brand's identity and ensuring that no one else can legally use your business name, logo, or symbol. It grants you exclusive rights to use the mark and safeguards your brand from infringement. We offer end-to-end trademark registration services, making the process simple, quick, and hassle-free.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for Trademark Registration</h2>
                        <p>Trademark registration is available to:</p>
                        <ol>
                            <li><strong>Individuals and Proprietors:</strong> Anyone who wishes to protect their unique business name or logo.</li>
                            <li><strong>Partnership Firms and LLPs:</strong> Businesses looking to secure their brand identity.</li>
                            <li><strong>Companies and Corporations:</strong> Both private and public limited companies.</li>
                            <li><strong>Societies and Trusts:</strong> Organizations aiming to protect their emblem or logo.</li>
                            <li><strong>Foreign Nationals and Companies:</strong> International businesses operating in India.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Benefits of Trademark Registration</h2>
                        <ul>
                            <li><strong>Exclusive Rights:</strong> Grants the exclusive right to use the trademark across India.</li>
                            <li><strong>Brand Protection:</strong> Safeguards your brand from unauthorized use and infringement.</li>
                            <li><strong>Legal Evidence:</strong> Provides legal proof of ownership and enhances brand credibility.</li>
                            <li><strong>Asset Creation:</strong> The registered trademark becomes an intangible asset for your business.</li>
                            <li><strong>Nationwide Recognition:</strong> Your trademark is protected throughout India.</li>
                            <li><strong>Brand Loyalty and Trust:</strong> Establishes customer trust and loyalty through brand recognition.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Trademark Registration Process</h2>
                        <p>We follow a streamlined process to secure your trademark:</p>
                        <ol>
                            <li><strong>Trademark Search:</strong> Conduct a thorough search to ensure the desired mark is unique.</li>
                            <li><strong>Application Filing:</strong> Submit the <strong>Trademark Application (Form TM-A</strong>) with all necessary details.</li>
                            <li><strong>Examination:</strong> Follow up with the <strong>Trademark Registrar</strong> to address any objections.</li>
                            <li><strong>Publication:</strong> Publish the mark in the <strong>Trademark Journal</strong> to invite public objections.</li>
                            <li><strong>Registration Certificate:</strong> Receive the certificate if no objections are raised within the stipulated time.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>Once the trademark is registered, the following compliances should be maintained:</p>
                        <ul>
                            <li><strong>Renewal of Trademark:</strong> Renew the registration every 10 years to maintain validity.</li>
                            <li><strong>Trademark Usage:</strong> Consistently use the trademark to avoid cancellation.</li>
                            <li><strong>Opposition Handling:</strong> Address any opposition claims promptly during the publication stage.</li>
                            <li><strong>Trademark Watch:</strong> Monitor for any infringement and take timely legal action if needed.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, your trademark registration becomes a seamless process, allowing you to focus on building your brand while we take care of legal formalities.
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

export default TrademarkRegistration