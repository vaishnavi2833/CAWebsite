import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const Bankruptcy = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Bankruptcy and Insolvency Code, 2016</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/INSOLVENCY_CODE.pdf"
          className="pdf-viewer"
          title="Bankruptcy PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Bankruptcy