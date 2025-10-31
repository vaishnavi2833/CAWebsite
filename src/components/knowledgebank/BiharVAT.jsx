import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const BiharVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Bihar Value Added Tax Act, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/BHR_VAT_Act.pdf"
          className="pdf-viewer"
          title="Bihar VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default BiharVAT