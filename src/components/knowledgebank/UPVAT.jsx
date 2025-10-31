import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const UPVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Uttar Pradesh Value Added Tax Act, 2008</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/UPVAT_ACT.pdf"
          className="pdf-viewer"
          title="Uttar Pradesh VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default UPVAT