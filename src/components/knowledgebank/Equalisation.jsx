import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';

const Equalisation = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Equalisation</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/equalisation_levy_act_2016.pdf"
          className="pdf-viewer"
          title="Equalisation PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Equalisation