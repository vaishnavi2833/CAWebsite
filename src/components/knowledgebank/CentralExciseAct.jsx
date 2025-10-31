import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const CentralExciseAct = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Central Excise Act, 1944</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/a1944-01.pdf"
          className="pdf-viewer"
          title="Central Excise Act PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default CentralExciseAct