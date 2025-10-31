import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const OPCRegistration = () => {
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
                        One Person Company Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>One Person Company Registration</h1>
                    <p className="highlight-box">
                        One Person Company Registration is the process of legally forming a company owned and managed by a single individual, offering limited liability protection.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        A <strong>One Person Company (OPC)</strong> is a unique business structure introduced under the <strong>Companies Act, 2013,</strong> specifically designed for <strong>solo entrepreneurs</strong> who want to enjoy the benefits of a corporate entity. It combines the advantages of a <strong>sole proprietorship and a private limited company,</strong> offering limited liability protection and a separate legal identity. At <strong>eFiling Guru,</strong> we provide hassle-free <strong>OPC Registration services,</strong> ensuring a smooth and efficient incorporation process.
                        </p>
                    </section>

                    <section>
                        <h2>Benefits of OPC Registration</h2>
                        <ul>
                            <li><strong>Limited Liability:</strong> The owner's personal assets are protected against business liabilities.</li>
                            <li><strong>Separate Legal Entity:</strong> OPC has a distinct legal identity, separate from its owner.</li>
                            <li><strong>Single Ownership:</strong> Owned and managed by a single person, making decision-making quick and efficient.</li>
                            <li><strong>Perpetual Succession:</strong> The nominee director takes over in the event of the owner’s demise or incapacity.</li>
                            <li><strong>Less Compliance:</strong> Compared to other company structures, OPCs have fewer compliance requirements.</li>
                        </ul>

                    </section>

                    <section>
                        <h2>Our OPC Registration Process</h2>
                        <p>At <strong>eFiling Guru,</strong> we take care of the entire OPC registration process with the following steps:</p>
                        <ol>
                        <li><strong>Digital Signature Certificate (DSC):</strong> Assisting in obtaining DSC for the owner.</li>
                            <li><strong>Director Identification Number (DIN):</strong> Applying for the DIN of the sole director.</li>
                            <li><strong>Name Reservation:</strong> Filing the RUN (Reserve Unique Name) application to secure the desired company name.</li>
                            <li><strong>Incorporation Application:</strong> Submitting SPICe+ (INC-32) along with MOA (Memorandum of Association) and AOA (Articles of Association) to the Registrar of Companies (RoC).</li>
                            <li><strong>Certificate of Incorporation:</strong> Obtaining the Certificate of Incorporation along with the CIN (Corporate Identification Number), PAN, and TAN.</li>
                            <li><strong>Bank Account Opening:</strong> Assistance in opening a corporate bank account for the OPC.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Incorporation Compliance</h2>
                        <p>Once your <strong>One Person Company</strong> is registered, we assist with mandatory post-registration compliance, including:</p>
                        <ul>
                            <li><strong>GST Registration</strong></li>
                            <li><strong>Annual ROC Filing</strong></li>
                            <li><strong>Income Tax Return Filing</strong> </li>
                            <li><strong>Maintenance of Financial Records</strong></li>
                        </ul>

                        <br></br>
                        <p>
                        With us, your OPC registration process becomes easy, transparent, and fully compliant. Let us help you establish your business with confidence and legal accuracy. Reach out to us today for a seamless registration experience!
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

export default OPCRegistration