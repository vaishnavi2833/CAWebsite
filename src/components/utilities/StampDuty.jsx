import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './stampduty.css';

const data = [
  {
    state: 'DELHI',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '200',
        aoa: '0.15% of Authorised Capital subject to a maximum of ₹25 Lakhs',
        sh7: '0.15% of amount of increase in Authorised Capital subject to maximum of ₹25 Lakhs',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '10', moa: '200', aoa: '200', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '10', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'HARYANA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '15', moa: '60',
        aoa: '₹60 if Authorised Capital ≤ ₹1 Lakh; ₹120 if Authorised Capital > ₹1 Lakh',
        sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '15', moa: '60', aoa: '60', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '15', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'MAHARASHTRA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '100', moa: '200',
        aoa: '₹1,000 on every ₹5 Lakhs of Authorised Capital or part thereof, subject to a maximum of ₹50 Lakhs',
        sh7: '₹1,000 on every ₹5 Lakhs of increase in Authorised Capital or part thereof, subject to maximum of ₹50 Lakhs. No stamp duty payable beyond Authorised Capital of ₹2,50,00,00,000/-',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '100', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '100', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'ODISHA',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '300', aoa: '300', sh7: 'NIL',
        remarks: 'Rules apply to all company types including Section 8.',
      },
    ],
  },
  {
    state: 'ANDHRA PRADESH',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '500',
        aoa: '0.15% of Authorised Capital, minimum ₹1,000 and maximum ₹5 Lakhs',
        sh7: '0.15% of increase in Authorised Capital, minimum ₹1,000 and maximum ₹5 Lakhs (maximum calculated fresh each time)',
        remarks: 'Also applies to Section 8 Companies having Share Capital.',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '500', aoa: '1,000', sh7: '1,000',
        remarks: 'Also applies to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'TELANGANA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '500',
        aoa: '0.15% of Authorised Capital, minimum ₹1,000 and maximum ₹5 Lakhs',
        sh7: '0.15% of increase in Authorised Capital, minimum ₹1,000 and maximum ₹5 Lakhs (maximum calculated fresh each time)',
        remarks: 'Also applies to Section 8 Companies having Share Capital.',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '500', aoa: '1,000', sh7: '1,000',
        remarks: 'Also applies to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'BIHAR',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '500',
        aoa: '0.15% of Authorised Capital or ₹1,000 whichever is more, subject to maximum of ₹5 Lakhs',
        sh7: 'Higher of: (i) ₹1,000; or (ii) 0.15% of increased capital (max ₹5L) less 0.15% of existing capital (max ₹5L). No duty if existing capital already at ₹5L threshold.',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '500', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'JHARKHAND',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '5', moa: '63', aoa: '105', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8).',
      },
      {
        name: 'Section 8 Companies',
        inc: '5', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'JAMMU AND KASHMIR',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '150',
        aoa: '₹150 if Authorised Capital ≤ ₹1 Lakh; ₹300 if Authorised Capital > ₹1 Lakh',
        sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '10', moa: '150', aoa: '150', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '10', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'TAMIL NADU',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '200', aoa: '300', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8).',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'PUDUCHERRY',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '200', aoa: '300', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8).',
      },
      {
        name: 'Section 8 Companies',
        inc: '10', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'ASSAM',
    rows: [
      {
        name: 'All Companies',
        inc: '15', moa: '200', aoa: '310', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'MEGHALAYA',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '100', aoa: '300', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'MANIPUR',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '100', aoa: '150', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'NAGALAND',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '100', aoa: '150', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'TRIPURA',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '100', aoa: '150', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'ARUNACHAL PRADESH',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '200', aoa: '500', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'MIZORAM',
    rows: [
      {
        name: 'All Companies',
        inc: '10', moa: '100', aoa: '150', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'KERALA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '25', moa: '1,000',
        aoa: 'Upto ₹10L: ₹2,000; Above ₹10L upto ₹25L: ₹5,000; Above ₹25L: 0.5% of Authorised Capital',
        sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies having Share Capital.',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '25', moa: '1,000', aoa: '2,000', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'LAKSHADWEEP',
    rows: [
      {
        name: 'All Companies',
        inc: '25', moa: '500', aoa: '1,000', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies and Companies not having Share Capital (other than Section 8).',
      },
    ],
  },
  {
    state: 'MADHYA PRADESH',
    rows: [
      {
        name: 'Companies having Share Capital',
        inc: '50', moa: '2,500',
        aoa: '0.15% of Authorised Capital, minimum ₹5,000 and maximum ₹25 Lakhs',
        sh7: '0.15% of increased capital (min ₹5K, max ₹25L) less 0.15% of existing capital (min ₹5K, max ₹25L; or min ₹1K, max ₹5L if last increase was before 16 Sep 2014)',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital',
        inc: '10', moa: '2,500', aoa: '5,000', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'CHHATTISGARH',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '500',
        aoa: '0.15% of Authorised Capital or ₹1,000 whichever is more, maximum ₹5 Lakhs',
        sh7: 'Higher of: (i) ₹1,000; or (ii) 0.15% of increased capital (max ₹5L) less 0.15% of existing capital (max ₹5L). No duty if existing capital already at ₹5L threshold.',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '10', moa: '500', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '10', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'RAJASTHAN',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '500',
        aoa: '0.5% of Authorised Capital',
        sh7: '0.5% of increase in Authorised Capital, maximum ₹25 Lakhs (maximum calculated fresh each time)',
        remarks: 'Also applies to Section 8 Companies having Share Capital.',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '10', moa: '500', aoa: '500', sh7: 'NIL',
        remarks: 'Also applies to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'PUNJAB',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '25', moa: '5,000',
        aoa: '₹5,000 if Authorised Capital ≤ ₹1 Lakh; ₹10,000 if Authorised Capital > ₹1 Lakh',
        sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '25', moa: '5,000', aoa: '5,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '25', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'HIMACHAL PRADESH',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '3', moa: '60',
        aoa: '₹60 if Authorised Capital ≤ ₹1 Lakh; ₹120 if Authorised Capital > ₹1 Lakh',
        sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '3', moa: '60', aoa: '60', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '3', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'CHANDIGARH',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '3', moa: '500', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '3', moa: '500', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '3', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'UTTAR PRADESH',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '500', aoa: '500', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8) and Section 8 Companies having Share Capital.',
      },
      {
        name: 'Section 8 Companies (not having Share Capital)',
        inc: 'NIL', moa: 'NIL', aoa: 'NIL', sh7: 'NIL',
        remarks: 'Applicable only to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'UTTARAKHAND',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '500', aoa: '500', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8) and Section 8 Companies having Share Capital.',
      },
      {
        name: 'Section 8 Companies (not having Share Capital)',
        inc: 'NIL', moa: 'NIL', aoa: 'NIL', sh7: 'NIL',
        remarks: 'Applicable only to Section 8 Companies not having Share Capital.',
      },
    ],
  },
  {
    state: 'WEST BENGAL',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '10', moa: '60', aoa: '300', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8).',
      },
      {
        name: 'Section 8 Companies',
        inc: '10', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'KARNATAKA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '1,000',
        aoa: '₹500 on every ₹10 Lakhs of Authorised Capital or part thereof',
        sh7: '₹500 on every ₹10 Lakhs of increase in Authorised Capital or part thereof, subject to minimum of ₹500',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '1,000', aoa: '500', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'GUJARAT',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '100',
        aoa: '0.5% of Authorised Capital, maximum ₹5 Lakhs',
        sh7: '0.5% of increased capital (max ₹5L) less 0.5% of existing capital (max ₹5L)',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '100', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'DADRA AND NAGAR HAVELI',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '1', moa: '15', aoa: '25', sh7: 'NIL',
        remarks: 'Also applies to Companies not having Share Capital (other than Section 8).',
      },
      {
        name: 'Section 8 Companies',
        inc: '1', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'GOA',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '50', moa: '150',
        aoa: '₹1,000 for every ₹5 Lakhs or part thereof of Authorised Capital',
        sh7: '₹1,000 for every ₹5 Lakhs of increase in Authorised Capital or part thereof',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '50', moa: '150', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '50', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'DAMAN AND DIU',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '150',
        aoa: '₹1,000 for every ₹5 Lakhs or part thereof of Authorised Capital',
        sh7: '₹1,000 for every ₹5 Lakhs of increase in Authorised Capital or part thereof',
        remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '150', aoa: '1,000', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
  {
    state: 'ANDAMAN AND NICOBAR',
    rows: [
      {
        name: 'Companies having Share Capital (other than Section 8)',
        inc: '20', moa: '200', aoa: '300', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Companies not having Share Capital (other than Section 8)',
        inc: '20', moa: '200', aoa: '300', sh7: 'NIL', remarks: '',
      },
      {
        name: 'Section 8 Companies',
        inc: '20', moa: 'NIL', aoa: 'NIL', sh7: 'NIL', remarks: '',
      },
    ],
  },
];

export default function StampDuty() {
  const [search, setSearch] = useState('');
  const q = search.trim().toLowerCase();
  const filtered = data.filter(s => !q || s.state.toLowerCase().includes(q));

  return (
    <>
      <Navbar />
      <div className="sd-page">
        <div className="sd-content">

          <h1 className="sd-page-title">Rate of Stamp Duty</h1>
          <p className="sd-subtitle">
            State-wise stamp duty rules for eForm INC-2 / INC-7 / INC-29, Memorandum of
            Association (MoA), Articles of Association (AoA), eForm SH-7 and eForm FC-1
          </p>

          {/* Search */}
          <div className="sd-search-bar">
            <input
              type="text"
              placeholder="Search by state / union territory..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="sd-clear-btn" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {filtered.length === 0 && (
            <p className="sd-no-results">No matching states found.</p>
          )}

          {filtered.map(state => (
            <div key={state.state} className="sd-state-block">
              <h2 className="sd-state-heading">{state.state}</h2>
              <div className="sd-table-scroll">
                <table className="sd-table">
                  <thead>
                    <tr>
                      <th className="sd-col-type">Company Type</th>
                      <th className="sd-col-num">INC-2/<br />INC-7/<br />INC-29 (₹)</th>
                      <th className="sd-col-num">MoA (₹)</th>
                      <th className="sd-col-wide">AoA</th>
                      <th className="sd-col-wide">SH-7</th>
                      <th className="sd-col-remarks">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? 'sd-row-alt' : ''}>
                        <td className="sd-col-type">{row.name}</td>
                        <td className={`sd-col-num ${row.inc === 'NIL' ? 'sd-nil' : ''}`}>{row.inc}</td>
                        <td className={`sd-col-num ${row.moa === 'NIL' ? 'sd-nil' : ''}`}>{row.moa}</td>
                        <td className={`sd-col-wide ${row.aoa === 'NIL' ? 'sd-nil' : ''}`}>{row.aoa}</td>
                        <td className={`sd-col-wide ${row.sh7 === 'NIL' ? 'sd-nil' : ''}`}>{row.sh7}</td>
                        <td className="sd-col-remarks">{row.remarks || '–'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
