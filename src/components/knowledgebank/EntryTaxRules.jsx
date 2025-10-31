import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const EntryTaxRules = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Entry Tax Rules</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/rules/pdf/entry_tax_rules.pdf"
          className='pdf-viewer'
          title="Entry Tax Rules PDF" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default EntryTaxRules