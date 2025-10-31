import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom';
import './common.css'
import ServiceContactForm from './ServiceContactForm';
import Navbar from '../navbar/Navbar';

const ImportExportRegistration = () => {
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
                        Import Export Code Registration
                    </li>
                </ol>
                </nav>
                <div className="inservice-item">
                    <h1>Import Export Code Registration</h1>
                    <p className="highlight-box">
                        Import Export Code (IEC) Registration is the process of obtaining a unique identification number from the Directorate General of Foreign Trade (DGFT), required for businesses involved in international trade.
                    </p>

                    <section>
                        <h2>Details</h2>
                        <p>
                        The Import Export Code (IEC) is a mandatory registration for businesses involved in the import and export of goods and services in India. It is issued by the Directorate General of Foreign Trade (DGFT) under the Ministry of Commerce and Industry. We offer efficient and hassle-free IEC registration services to help your business expand globally.
                        </p>
                    </section>

                    <section>
                        <h2>Eligibility for IEC Registration</h2>
                        <p>The following entities are eligible for IEC registration:</p>
                        <ol>
                            <li><strong>Proprietorship Firms:</strong> Individual businesses involved in import/export.</li>
                            <li><strong>Partnership Firms:</strong> Firms engaged in international trade.</li>
                            <li><strong>Limited Liability Partnerships (LLP):</strong> Businesses involved in cross-border commerce.</li>
                            <li><strong>Private and Public Limited Companies:</strong> Exporting or importing goods or services.</li>
                            <li><strong>Societies and Trusts:</strong> Engaged in charitable or commercial trade across borders.</li>
                        </ol>


                    </section>

                    <section>
                        <h2>Benefits of IEC Registration</h2>
                       <ul>
                            <li><strong>Global Expansion:</strong> Enables businesses to import and export goods or services worldwide.</li>
                            <li><strong>Government Benefits:</strong> Avail export promotion schemes and subsidies from the government.</li>
                            <li><strong>No Annual Compliance:</strong> IEC does not require the filing of returns.</li>
                            <li><strong>Lifetime Validity:</strong> Once issued, IEC is valid for a lifetime without renewal requirements.</li>
                            <li><strong>Easy Processing:</strong> Hassle-free online application and issuance within 5–7 working days.</li>
                        </ul>

                    </section>

                    <section>
                        <h2>Our IEC Registration Process</h2>
                        <p>We makes IEC registration simple with the following steps:</p>
                       <ol>
                            <li><strong>Document Collection:</strong> Gather necessary documents such as PAN, Aadhar, bank details, and business proof.</li>
                            <li><strong>Application Filing:</strong> Submit the <strong>IEC application (ANF 2A</strong>) on the DGFT portal along with the required fee.</li>
                            <li><strong>Digital Signature Certificate (DSC):</strong> Attach the DSC for authentication and digital signing.</li>
                            <li><strong>Verification and Approval:</strong> Complete online verification and resolve any discrepancies.</li>
                            <li><strong>Issuance of IEC Code:</strong> Receive the IEC certificate via email after successful approval.</li>
                        </ol>

                    </section>

                    <section>
                        <h2>Post-Registration Compliance</h2>
                        <p>Once the IEC is obtained, ensure the following compliance:</p>
                        <ul>
                            <li><strong>Updating Changes:</strong> Update any changes in business address or details with the DGFT.</li>
                            <li><strong>Usage in Exports/Imports:</strong> Quote the IEC on all export/import documents and customs clearances.</li>
                            <li><strong>Renewal and Maintenance:</strong> Though the IEC is valid for a lifetime, any modifications must be updated.</li>
                            <li><strong>DGFT Notifications:</strong> Stay updated with DGFT guidelines and notifications related to international trade.</li>
                        </ul>
                        <br></br>
                        <p>
                        With us, you get professional assistance and timely updates throughout the IEC registration process, allowing you to focus on your business growth without administrative hassles.
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

export default ImportExportRegistration