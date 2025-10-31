import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const BaggageRules = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Baggage Rules, 2016</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/baggage_rules_2016.pdf"
                className='pdf-viewer'
                title="Baggage Rules" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default BaggageRules