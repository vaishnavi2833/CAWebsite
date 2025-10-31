import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './pdf.css';
import { useState } from 'react';

const ProfessionTaxRules = () => {
    const [selectedAct, setSelectedAct] = useState('m2001');
      
      const actOptions = {
        'm2001': {
          name: 'Maharashtra Profession Tax Rules',
          url: 'https://dreamware.co.in/kb/rules/pdf/Maharashtra_PT_Rules.pdf'
        },
        'k1996': {
          name: 'Karnataka Profession Tax Rules', 
          url: 'https://dreamware.co.in/kb/rules/pdf/Karnataka_PT_Rules.pdf'
        },
        'ap2008': {
          name: 'Andhra Pradesh Profession Tax Rules',
          url: 'https://dreamware.co.in/kb/rules/pdf/AP_PT_Rules.pdf'
        },
        'wb2005': {
          name: 'West Bengal Profession Tax Rules',
          url: 'https://dreamware.co.in/kb/rules/pdf/WestBengal_PT_Rules.pdf'
        }
      };
    
      const handleActChange = (event) => {
        setSelectedAct(event.target.value);
      };
    
    return (
        <div className='pdf-page'>
            <Navbar />
            <div style={{ padding: '20px' }}>
                <h2>Profession Tax Rules</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="act-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
                        Select Profession Tax Rule:
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
    );
};

export default ProfessionTaxRules;