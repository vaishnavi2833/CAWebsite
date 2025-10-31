import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const FAQITBill = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>FAQs - Income Tax Bill</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/utilities/pdf/faqs-income-tax-bill.pdf"
                className='pdf-viewer'
                title="FAQs - Income Tax Bill" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default FAQITBill