import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const GSTAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Goods and Services Tax (GST) Act</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/GST-Compensation-Act.pdf"
          className="pdf-viewer"
          title="GST Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default GSTAct