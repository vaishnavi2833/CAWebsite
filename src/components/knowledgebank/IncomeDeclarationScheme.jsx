import Navbar from '../navbar/Navbar';
import './pdf.css';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const IncomeDeclarationScheme = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Income Declaration Scheme 2016</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/ICAI_Income_Declaration_Scheme2016.pdf"
          className="pdf-viewer"
          title="Income Declaration Scheme PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default IncomeDeclarationScheme