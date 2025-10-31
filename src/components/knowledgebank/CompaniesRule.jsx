import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CompaniesRule = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Companies Rules, 2014</h2>
        <div className="pdf-container">
            <iframe 
                src="https://dreamware.co.in/kb/rules/pdf/Companies-Incorporation-Rules-2014.pdf" 
                className='pdf-viewer'
                title="Companies Rules, 2014" />
        </div>
    </div>
  )
}

export default CompaniesRule