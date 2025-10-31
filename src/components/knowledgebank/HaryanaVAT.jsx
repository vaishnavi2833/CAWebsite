import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const HaryanaVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Haryana Value Added Tax Act, 2003</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Hariyana_VAT_act.pdf"
          className="pdf-viewer"
          title="Haryana VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default HaryanaVAT