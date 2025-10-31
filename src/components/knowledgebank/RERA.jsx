import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const RERA = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Real Estate (Regulation and Development) Act, 2016</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/RERA_Act.pdf"
          className="pdf-viewer"
          title="RERA PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default RERA