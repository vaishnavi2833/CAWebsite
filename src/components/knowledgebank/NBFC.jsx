import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const NBFC = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>NBFC & Misc NBC (Advt) Rules, 1977</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/NBFC_Misc_NBC_Advt_Rules_1977.pdf"
                className='pdf-viewer'
                title="NBFC & Misc NBC (Advt) Rules, 1977" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default NBFC