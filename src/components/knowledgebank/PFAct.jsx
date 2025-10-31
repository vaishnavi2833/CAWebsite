import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const PFAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Employees' Provident Fund Act, 1952</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/EPFAct1952.pdf"
          className="pdf-viewer"
          title="Employees' Provident Fund Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default PFAct