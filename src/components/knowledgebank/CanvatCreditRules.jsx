import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CanvatCreditRules = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Canvat Credit Rules, 2017</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/rules/pdf/cenvat_credit_rules.pdf"
          className='pdf-viewer'
          title="Cenvat Credit Rules PDF" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CanvatCreditRules