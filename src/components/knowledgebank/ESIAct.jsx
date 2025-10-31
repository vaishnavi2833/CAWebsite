import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const ESIAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Employees' State Insurance Act, 1948</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/theemployeesact1948.pdf"
          className="pdf-viewer"
          title="Employees' State Insurance Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ESIAct