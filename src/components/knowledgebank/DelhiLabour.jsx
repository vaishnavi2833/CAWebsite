import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const DelhiLabour = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>Delhi Labour Welfare Fund Rules, 1997</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/rules/pdf/delhi_labour_welfare_fund_rules_1997.pdf"
                className='pdf-viewer'
                title="Delhi Labour Welfare Fund Rules, 1997" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default DelhiLabour