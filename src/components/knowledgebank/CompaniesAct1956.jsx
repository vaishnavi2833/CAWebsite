import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CompaniesAct1956 = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Companies Act, 1956</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/acts/pdf/Companies_Act_1956.pdf" 
            className='pdf-viewer'
            title="Companies Act, 1956" />
        </div>
        <Contact />
        <Footer />
    </div>

  )
}

export default CompaniesAct1956