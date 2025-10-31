import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const MRTP = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Monopolies and Restrictive Trade Practices Act, 1969</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/MRTP_Act_1969.pdf"
          className="pdf-viewer"
          title="MRTP Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default MRTP