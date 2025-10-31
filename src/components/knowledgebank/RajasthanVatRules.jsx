import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const RajasthanVatRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Rajasthan VAT Rules, 2006</h2>
        <div className='pdf-container'>
            <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Rajasthan_VAT_Rules.pdf" 
                className='pdf-viewer'
                title="Rajasthan VAT Rules, 2006" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default RajasthanVatRules