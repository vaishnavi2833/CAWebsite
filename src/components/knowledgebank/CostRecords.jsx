import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CostRecords = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Cost records and audit Rules, 2014</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/Companies-Rules-2014.pdf"
                className='pdf-viewer'
                title="Cost Records" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default CostRecords