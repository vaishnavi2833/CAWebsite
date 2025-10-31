import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const IndianPartnershipAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Indian Partnership Act, 1932</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/the_indian_partnership_act_1932.pdf"
          className="pdf-viewer"
          title="Indian Partnership Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default IndianPartnershipAct