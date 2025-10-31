import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const LLPWindingUpRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>LLP Winding Up Rules, 2012</h2>
        <div className="pdf-container">
            <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/LLP_WindingUp_Rules_2012.pdf" 
                className='pdf-viewer'
                title="LLP Winding Up Rules, 2012" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default LLPWindingUpRules