import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const BenamiProperty = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Benami Property Act, 1988</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/benami_property_act_1988.pdf"
          className="pdf-viewer"
          title="Benami Property PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default BenamiProperty