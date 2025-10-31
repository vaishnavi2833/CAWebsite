import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const RBIAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Reserve Bank of India Act, 1934</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/a1934-2.pdf"
          className="pdf-viewer"
          title="Reserve Bank of India Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default RBIAct