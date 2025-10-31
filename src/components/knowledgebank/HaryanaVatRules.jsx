import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const HaryanaVatRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Haryana VAT Rules, 2003</h2>
        <div className='pdf-container'>
                <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Haryana_VAT_Rules.pdf" 
                className='pdf-viewer'
                title="Haryana VAT Rules, 2003" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default HaryanaVatRules