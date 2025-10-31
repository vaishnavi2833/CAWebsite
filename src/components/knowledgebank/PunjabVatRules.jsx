import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const PunjabVatRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Punjab VAT Rules</h2>
        <div className='pdf-container'>
                <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Punjab_VAT_Rules.pdf" 
                className='pdf-viewer'
                title="Punjab VAT Rules" 
            />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default PunjabVatRules