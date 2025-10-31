import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const LLPAct = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Limited Liability Partnership Act</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/acts/pdf/A2009-06.pdf" 
            className='pdf-viewer'
            title="Limited Liability Partnership Act" />
        </div>
        <Contact />
        <Footer />
    </div>

  )
}

export default LLPAct