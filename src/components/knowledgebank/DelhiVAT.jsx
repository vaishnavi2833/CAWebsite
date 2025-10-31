import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const DelhiVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Delhi Value Added Tax Act, 2004</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/DVAT_ACT_2014.pdf"
          className="pdf-viewer"
          title="Delhi VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default DelhiVAT