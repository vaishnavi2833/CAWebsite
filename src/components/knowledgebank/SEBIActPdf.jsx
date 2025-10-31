import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const SEBIActPdf = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>SEBI Act, 1992</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/acts/pdf/SEBI_Act_1992.pdf" 
            className='pdf-viewer'
            title="SEBI Act" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default SEBIActPdf