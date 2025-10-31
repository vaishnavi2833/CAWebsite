import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const PunjabVAT = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Punjab Value Added Tax Act, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/punjab_vat_act_2005.pdf"
          className="pdf-viewer"
          title="Punjab VAT Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default PunjabVAT