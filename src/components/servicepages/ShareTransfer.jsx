import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ShareTransfer = () => {
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
                       Share Transfer
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Share Transfer</h1>
                    <p className="highlight-box">
                        Share Transfer is the process of transferring ownership of shares from one shareholder to another, following legal and regulatory procedures to ensure proper documentation and compliance with company laws.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        Share transfer is the process of transferring ownership of shares from one person or entity to another. This is a common practice in private limited companies when shareholders wish to sell or transfer their shares to new or existing shareholders. Proper documentation and compliance with the <strong>Companies Act, 2013</strong> are essential to ensure the smooth transfer of shares. We offer expert assistance to streamline the entire share transfer process, minimizing legal hassles and delays.
                        </p>
                    </section>

                    <section>
                        <h2>Why Opt for Share Transfer Services?</h2>
                        <p>
                        Transferring shares involves legal formalities, including drafting share transfer deeds, paying stamp duty, and filing necessary forms with the <strong>Registrar of Companies (ROC).</strong> Any mistake or omission can lead to compliance issues and penalties. We ensures that the transfer is carried out efficiently and in full compliance with legal requirements.
                        </p>
                    </section>

                    <section>
                        <h2>Key Benefits of Share Transfer</h2>
                        <ol>
                            <li><strong>Legal Compliance:</strong> Adhere to all statutory requirements under the Companies Act.</li>
                            <li><strong>Seamless Transition:</strong> Facilitate smooth transfer of ownership without disputes.</li>
                            <li><strong>Accurate Documentation:</strong> Properly drafted transfer deeds and shareholder agreements.</li>
                            <li><strong>Timely Filing:</strong> Submit required forms and documents to the ROC on time.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Eligibility for Share Transfer</h2>
                        <ul>
                            <li><strong>Share Transfer Deed:</strong> Properly executed and signed transfer deed (Form SH-4).</li>
                            <li><strong>Stamp Duty Payment:</strong> Payment of applicable stamp duty on the share transfer.</li>
                            <li><strong>Board Resolution:</strong> Approval of the share transfer by the Board of Directors.</li>
                            <li><strong>Share Certificate:</strong> Endorsement on the share certificate after transfer.</li>
                        </ul>
                    </section>
                        
                    <section>
                        <h2>Our Share Transfer Process</h2>
                        <ol>
                            <li><strong>Documentation:</strong> Gather necessary documents, including the share transfer deed and share certificates.</li>
                            <li><strong>Stamp Duty Payment:</strong> Calculate and pay the stamp duty applicable.</li>
                            <li><strong>Board Meeting:</strong> Pass a resolution to approve the transfer of shares.</li>
                            <li><strong>Form Filing:</strong> File Form SH-4 and other relevant forms with the ROC.</li>
                            <li><strong>Certificate Issuance:</strong> Issue a new share certificate to the transferee.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Post-Transfer Compliance</h2>
                        <ul>
                            <li><strong>Update Registers:</strong> Update the Register of Members and Share Transfer Register.</li>
                            <li><strong>Issue New Share Certificate:</strong> In the name of the transferee.</li>
                            <li><strong>ROC Filing:</strong> File Form MGT-7 and Form PAS-3 as required.</li>
                            <li><strong>Annual Return Update:</strong> Reflect the changes in the company’s annual return.</li>
                        </ul>
                        <br></br>
                        <p>
                        Ensure a hassle-free and legally compliant share transfer with us. Get in touch today for professional assistance!
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

export default ShareTransfer