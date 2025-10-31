import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const SecretariesAct = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Company Secretaries Act, 1980</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/acts/pdf/CSAct1980.pdf" 
            className='pdf-viewer'
            title="Secretaries Act" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default SecretariesAct