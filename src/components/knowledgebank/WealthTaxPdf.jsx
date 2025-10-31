import Navbar from '../navbar/Navbar';
import './pdf.css';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const WealthTaxPdf = () => {
  return (
    <div className='pdf-page'>
      <Navbar/>
      <h2>Wealth Tax Act</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/a1957-27.pdf"
          className="pdf-viewer"
          title="Wealth Tax Act PDF"
        />
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default WealthTaxPdf;
