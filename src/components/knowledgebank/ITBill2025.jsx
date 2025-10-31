import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const ITBill2025 = () => {
  return (
    <div className='pdf-page'>
        <Navbar />
        <h2>IT Bill, 2025</h2>
        <div className="pdf-container">
            <iframe
                src="https://dreamware.co.in/kb/utilities/pdf/Income_Tax_Bill_2025.pdf"
                className='pdf-viewer'
                title="IT Bill" />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default ITBill2025