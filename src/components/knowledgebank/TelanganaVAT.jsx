import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const TelanganaVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Telangana Value Added Tax Act, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Telengana_VAT_act_2005.pdf"
          className="pdf-viewer"
          title="Telangana VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default TelanganaVAT