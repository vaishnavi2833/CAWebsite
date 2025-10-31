import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const KarnatakaVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Karnataka Value Added Tax Act, 2003</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/KVAT_ACT_2003_ENGLISH.pdf"
          className="pdf-viewer"
          title="Karnataka VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default KarnatakaVAT