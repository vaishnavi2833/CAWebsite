import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CGST = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Central Goods and Services Tax (CGST)</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/CGST_ACT.pdf"
          className="pdf-viewer"
          title="CGST PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CGST