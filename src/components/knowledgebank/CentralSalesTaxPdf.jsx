import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CentralSalesTaxPdf = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Central Sales Tax Act, 1956</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/central_sales_tax_act_1956.pdf"
          className="pdf-viewer"
          title="Central Sales Tax PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CentralSalesTaxPdf