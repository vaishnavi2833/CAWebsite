import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const LLPRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>LLP Rules, 2009</h2>
        <div className="pdf-container">
            <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/LLP_Rules_2009.pdf" 
                className='pdf-viewer'
                title="LLP Rules, 2009" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default LLPRules