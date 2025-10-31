import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import { useState } from 'react';
import './pdf.css';

const EntryTaxAct = () => {
  const [selectedAct, setSelectedAct] = useState('ap2001');
  
  const actOptions = {
    'ap2001': {
      name: 'AP Entry Tax Act 2001',
      url: 'https://dreamware.co.in/kb/acts/pdf/act_39_of_2001.pdf'
    },
    'ap1996': {
      name: 'AP Entry Tax Act 1996', 
      url: 'https://dreamware.co.in/kb/acts/pdf/ap-etvehicles-act-1996.pdf'
    },
    'haryana2008': {
      name: 'Haryana Entry Tax Act 2008',
      url: 'https://dreamware.co.in/kb/acts/pdf/haryana-entry-tax-act-2008.pdf'
    }
  };

  const handleActChange = (event) => {
    setSelectedAct(event.target.value);
  };

  return (
    <div className='pdf-page'>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Entry Tax Acts</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="act-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
            Select Entry Tax Act:
          </label>
          <select 
            id="act-select"
            value={selectedAct} 
            onChange={handleActChange}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              minWidth: '250px'
            }}
          >
            {Object.entries(actOptions).map(([key, act]) => (
              <option key={key} value={key}>
                {act.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pdf-container">
        <iframe
          src={actOptions[selectedAct].url}
          className="pdf-viewer"
          title={`${actOptions[selectedAct].name} PDF`}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default EntryTaxAct