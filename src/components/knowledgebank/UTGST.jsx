import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const UTGST = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Union Territory Goods and Services Tax (UTGST)</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/A2017_14.pdf"
          className="pdf-viewer"
          title="UTGST PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default UTGST