import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const GujratVATRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Gujarat VAT Rules, 2006</h2>
        <div className='pdf-container'>
                <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Gujrat_VAT_Rules_2006.pdf" 
                className='pdf-viewer'
                title="Gujarat VAT Rules, 2006" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default GujratVATRules