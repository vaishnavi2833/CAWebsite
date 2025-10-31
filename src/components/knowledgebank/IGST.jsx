import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const IGST = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Integrated Goods and Services Tax (IGST)</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/IGST_Act.pdf"
          className="pdf-viewer"
          title="IGST PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default IGST