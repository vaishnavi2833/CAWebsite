import Navbar from "../navbar/Navbar"
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const WBVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>West Bengal Value Added Tax Act, 2003</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/WEST_BENGAL_VAT_ACT_2003.pdf"
          className="pdf-viewer"
          title="West Bengal VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default WBVAT