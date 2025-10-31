import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CSTDelhiRules = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>CST (Delhi) Rules, 2005</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/rules/pdf/cst_delhi.pdf"
          className='pdf-viewer'
          title="CST Delhi Rules PDF" />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CSTDelhiRules