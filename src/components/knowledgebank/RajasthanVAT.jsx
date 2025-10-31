import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const RajasthanVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Rajasthan Value Added Tax Act, 2003</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/RVAT_act_2003.pdf"
          className="pdf-viewer"
          title="Rajasthan VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default RajasthanVAT