import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const SocietyRegistrationAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Society Registration Act, 1860</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Societies_Registration_Act_1860.pdf"
          className="pdf-viewer"
          title="Society Registration Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default SocietyRegistrationAct