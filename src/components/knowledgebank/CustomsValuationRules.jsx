import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CustomsValuationRules = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Customs Valuation Rules, 2007</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/rules/pdf/customs_valuation_rules.pdf"
          className='pdf-viewer'
          title="Customs Valuation Rules PDF" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CustomsValuationRules