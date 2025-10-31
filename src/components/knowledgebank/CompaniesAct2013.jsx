import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CompaniesAct2013 = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Companies Act, 2013</h2>
        <div className="pdf-container">
            <iframe 
            src="https://dreamware.co.in/kb/acts/pdf/A2013-18.pdf" 
            className='pdf-viewer'
            title="Companies Act, 2013" />
        </div>
        <Contact />
        <Footer />
    </div>

  )
}

export default CompaniesAct2013