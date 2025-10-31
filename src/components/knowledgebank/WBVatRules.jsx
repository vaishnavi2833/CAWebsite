import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const WBVatRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>West Bengal VAT Rules, 2005</h2>
        <div className='pdf-container'>
                <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/West_Bengal_VAT_Rules.pdf" 
                className='pdf-viewer'
                title="West Bengal VAT Rules, 2005" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default WBVatRules