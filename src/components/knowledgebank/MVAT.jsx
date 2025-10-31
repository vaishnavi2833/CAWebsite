import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const MVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Maharashtra Value Added Tax Act, 2002</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/maharashtra_VAT_act_2002.pdf"
          className="pdf-viewer"
          title="Maharashtra VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default MVAT