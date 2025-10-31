import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const GujaratVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Gujarat Value Added Tax Act, 2003</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Gujarat_VAT_Act_2005.pdf"
          className="pdf-viewer"
          title="Gujarat VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default GujaratVAT