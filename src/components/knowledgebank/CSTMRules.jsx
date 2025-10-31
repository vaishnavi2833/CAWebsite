import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CSTMRules = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>CST (Maharashtra) Rules, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/rules/pdf/CST_Maharashtra_Rules.pdf"
          className='pdf-viewer'
          title="CST Maharashtra Rules PDF" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CSTMRules