import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const APVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Andhra Pradesh Value Added Tax Act, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/AP_VAT_Act_2005.pdf"
          className="pdf-viewer"
          title="Andhra Pradesh VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default APVAT