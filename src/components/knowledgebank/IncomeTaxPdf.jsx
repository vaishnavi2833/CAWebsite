import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const IncomeTaxPdf = () => {
  return (
    <div>
    <div className='pdf-page'>
      <Navbar/>
      <h2>Income Tax Act</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/a1961-43.pdf"
          className="pdf-viewer"
          title="Income Tax Act PDF"
        />
      </div>
    </div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default IncomeTaxPdf;
