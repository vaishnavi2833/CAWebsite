import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const TelanganaVatRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Telangana VAT Rules, 2005</h2>
        <div className='pdf-container'>
                <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Telangana_VAT_Rules.pdf" 
                className='pdf-viewer'
                title="Telangana VAT Rules, 2005" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default TelanganaVatRules