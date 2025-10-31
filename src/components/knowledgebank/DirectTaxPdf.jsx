import React from 'react'
import './pdf.css'
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const DirectTaxPdf = () => {
  return (
    <div className='pdf-page'>
      <Navbar />
      <h2>Direct Tax Vivad Se Vishwas Scheme</h2>
      <div className="pdf-container">
        <iframe
          src="https://dreamware.co.in/kb/acts/pdf/Direct_Tax_Vivad_Se_Vishwas_Act_2020.pdf"
          className="pdf-viewer"
          title="Direct Tax Laws PDF"
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default DirectTaxPdf