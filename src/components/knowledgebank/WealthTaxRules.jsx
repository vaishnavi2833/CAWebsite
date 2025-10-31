import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const WealthTaxRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Wealth Tax Act Rules</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/rules/pdf/Income_Tax_Rules1962.pdf" 
            className='pdf-viewer'
            title="Wealth Tax Rules PDF" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default WealthTaxRules