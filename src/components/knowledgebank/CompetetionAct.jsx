import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';


const CompetetionAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Competition Act, 2002</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/the-competition-act.pdf"
          className="pdf-viewer"
          title="Competition Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CompetetionAct