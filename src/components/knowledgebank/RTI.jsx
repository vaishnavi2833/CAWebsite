import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const RTI = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Right to Information Act, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/rti_act_2005.pdf"
          className="pdf-viewer"
          title="RTI Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default RTI