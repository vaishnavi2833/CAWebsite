import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const FEMA = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Foreign Exchange Management Act, 1999</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/A1999_42.pdf"
          className="pdf-viewer"
          title="FEMA PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default FEMA