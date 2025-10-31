import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const ProfessionTaxAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Profession Tax Act</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/professions_tax_act_2005.pdf"
          className="pdf-viewer"
          title="Professional Tax Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ProfessionTaxAct