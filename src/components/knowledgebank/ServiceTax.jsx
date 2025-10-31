import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const ServiceTax = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Service Tax (Finance Act, 1994)</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Service_Tax_Finance_Act_1994.pdf"
          className="pdf-viewer"
          title="Service Tax PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ServiceTax