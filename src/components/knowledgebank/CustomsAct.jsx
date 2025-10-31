import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CustomsAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Customs Act, 1962</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/the_customs_act_1962.pdf"
          className="pdf-viewer"
          title="Customs Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CustomsAct