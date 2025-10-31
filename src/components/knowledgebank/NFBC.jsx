import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const NFBC = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>NBFC Deposits Directions, 1998</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/NBFC_deposits_directions_1998.pdf"
                className='pdf-viewer'
                title="NBFC Deposits Directions, 1998" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default NFBC