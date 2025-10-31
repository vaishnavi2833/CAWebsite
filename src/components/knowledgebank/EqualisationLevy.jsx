import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const EqualisationLevy = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Equalisation Levy Rules, 2016</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/equalisation_levy_rules_2016.pdf"
                className='pdf-viewer'
                title="Equalisation Levy" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default EqualisationLevy