import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const IGSTRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>IGST Rules, 2017</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/IGST_Rules_2017.pdf"
                className='pdf-viewer'
                title="IGST Rules" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default IGSTRules