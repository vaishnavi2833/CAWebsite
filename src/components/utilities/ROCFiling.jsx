import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './rocfiling.css';

/* ─── Data ───────────────────────────────────────────────────────────── */

const table1 = [
  { cap: '1,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '2,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '3,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '4,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '5,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '6,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '7,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '10,00,000',     moa: '–',          form: '–',   total: '–' },
  { cap: '15,00,000',     moa: '–',          form: '–',   total: '–' },
  { cap: '20,00,000',     moa: '66,000',     form: '400', total: '66,400' },
  { cap: '25,00,000',     moa: '81,000',     form: '500', total: '81,500' },
  { cap: '30,00,000',     moa: '96,000',     form: '500', total: '96,500' },
  { cap: '35,00,000',     moa: '1,11,000',   form: '500', total: '1,11,500' },
  { cap: '40,00,000',     moa: '1,26,000',   form: '500', total: '1,26,500' },
  { cap: '45,00,000',     moa: '1,41,000',   form: '500', total: '1,41,500' },
  { cap: '50,00,000',     moa: '1,56,000',   form: '500', total: '1,56,500' },
  { cap: '60,00,000',     moa: '1,66,000',   form: '500', total: '1,66,500' },
  { cap: '70,00,000',     moa: '1,76,000',   form: '500', total: '1,76,500' },
  { cap: '80,00,000',     moa: '1,86,000',   form: '500', total: '1,86,500' },
  { cap: '90,00,000',     moa: '1,96,000',   form: '500', total: '1,96,500' },
  { cap: '1,00,00,000',   moa: '2,06,000',   form: '600', total: '2,06,600' },
  { cap: '2,00,00,000',   moa: '2,81,000',   form: '600', total: '2,81,600' },
  { cap: '3,00,00,000',   moa: '3,56,000',   form: '600', total: '3,56,600' },
  { cap: '4,00,00,000',   moa: '4,31,000',   form: '600', total: '4,31,600' },
  { cap: '5,00,00,000',   moa: '5,06,000',   form: '600', total: '5,06,600' },
];

const table2 = [
  { cap: '1,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '2,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '3,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '4,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '5,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '6,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '7,00,000',      moa: '–',          form: '–',   total: '–' },
  { cap: '10,00,000',     moa: '–',          form: '–',   total: '–' },
  { cap: '15,00,000',     moa: '–',          form: '–',   total: '–' },
  { cap: '20,00,000',     moa: '22,000',     form: '400', total: '22,400' },
  { cap: '25,00,000',     moa: '32,000',     form: '500', total: '32,500' },
  { cap: '30,00,000',     moa: '42,000',     form: '500', total: '42,500' },
  { cap: '35,00,000',     moa: '52,000',     form: '500', total: '52,500' },
  { cap: '40,00,000',     moa: '62,000',     form: '500', total: '62,500' },
  { cap: '45,00,000',     moa: '72,000',     form: '500', total: '72,500' },
  { cap: '50,00,000',     moa: '82,000',     form: '500', total: '82,500' },
  { cap: '60,00,000',     moa: '1,66,000',   form: '500', total: '1,66,500' },
  { cap: '70,00,000',     moa: '1,76,000',   form: '500', total: '1,76,500' },
  { cap: '80,00,000',     moa: '1,86,000',   form: '500', total: '1,86,500' },
  { cap: '90,00,000',     moa: '1,96,000',   form: '500', total: '1,96,500' },
  { cap: '1,00,00,000',   moa: '2,06,000',   form: '600', total: '2,06,600' },
  { cap: '2,00,00,000',   moa: '2,81,000',   form: '600', total: '2,81,600' },
  { cap: '3,00,00,000',   moa: '3,56,000',   form: '600', total: '3,56,600' },
  { cap: '4,00,00,000',   moa: '4,31,000',   form: '600', total: '4,31,600' },
  { cap: '5,00,00,000',   moa: '5,06,000',   form: '600', total: '5,06,600' },
];

/* ─── Fee calculation helpers ────────────────────────────────────────── */

function calcMemo(x) {
  let amount = 0;
  if (x <= 1000000) {
    amount = 2000;
  } else if (x > 1000000 && x <= 5000000) {
    amount = 2000 + ((x - 1000000) / 10000) * 200;
  } else if (x > 5000000) {
    amount = 156000;
    if (x <= 10000000) {
      amount = 156000 + ((x - 5000000) / 10000) * 100;
    } else {
      amount = 156000 + 50000 + ((x - 10000000) / 10000) * 75;
    }
  }
  return amount;
}

function calcEformAoa(x) {
  const eform = 500;
  let aoa = 300;
  if (x <= 500000)                         aoa = 300;
  else if (x > 500000  && x <= 2500000)    aoa = 400;
  else if (x > 2500000 && x <= 10000000)   aoa = 500;
  else if (x > 10000000)                   aoa = 600;
  return eform + aoa;
}

function fmt(n) {
  return '₹\u00a0' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ─── Sub-component: fee table ───────────────────────────────────────── */

function FeeTable({ rows }) {
  return (
    <div className="roc-table-scroll">
      <table className="roc-table">
        <thead>
          <tr>
            <th>Authorised Capital (₹)</th>
            <th>Memorandum of Association (₹)</th>
            <th>E-Form INC-32 (SPICe) &amp; AOA* (₹)</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? '' : 'roc-row-alt'}>
              <td className="roc-cap">{row.cap}</td>
              <td className={`roc-amt ${row.moa === '–' ? 'roc-dash' : ''}`}>{row.moa}</td>
              <td className={`roc-amt ${row.form === '–' ? 'roc-dash' : ''}`}>{row.form}</td>
              <td className={`roc-amt roc-total ${row.total === '–' ? 'roc-dash' : ''}`}>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */

export default function ROCFiling() {
  const [capital, setCapital] = useState('');
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState('');

  function handleCalculate() {
    const x = parseFloat(capital);
    if (!capital || isNaN(x) || x <= 0) {
      setError('Please enter a valid authorised capital amount.');
      setResult(null);
      return;
    }
    setError('');
    const memo     = calcMemo(x);
    const eformAoa = calcEformAoa(x);
    setResult({ memo, eformAoa, total: memo + eformAoa });
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleCalculate();
  }

  return (
    <>
      <Navbar />
      <div className="roc-page">
        <div className="roc-content">
          <h1 className="roc-page-title">ROC Filing Fees</h1>
          <p className="roc-subtitle">Companies Act, 2013 &nbsp;|&nbsp; Filing Fees for Incorporation of a Company having a Share Capital</p>

          {/* ── Calculator ── */}
          <div className="roc-calc-card">
            <h2 className="roc-calc-title">Fee Calculator</h2>
            <p className="roc-calc-desc">Enter the proposed Authorised Capital to compute filing fees instantly.</p>
            <div className="roc-calc-row">
              <label className="roc-calc-label">Authorised Capital Required (₹)</label>
              <div className="roc-calc-input-wrap">
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  placeholder="e.g. 1000000"
                  value={capital}
                  onChange={e => { setCapital(e.target.value); setResult(null); setError(''); }}
                  onKeyDown={handleKeyDown}
                  className="roc-calc-input"
                />
                <button className="roc-calc-btn" onClick={handleCalculate}>Calculate</button>
              </div>
              {error && <p className="roc-calc-error">{error}</p>}
            </div>

            {result && (
              <div className="roc-result-grid">
                <div className="roc-result-item">
                  <span className="roc-result-label">Memorandum of Association</span>
                  <span className="roc-result-value">{fmt(result.memo)}</span>
                </div>
                <div className="roc-result-item">
                  <span className="roc-result-label">E-Form INC-32 (SPICe) &amp; AOA</span>
                  <span className="roc-result-value">{fmt(result.eformAoa)}</span>
                </div>
                <div className="roc-result-item roc-result-total-item">
                  <span className="roc-result-label">Total</span>
                  <span className="roc-result-value roc-result-total-val">{fmt(result.total)}</span>
                </div>
              </div>
            )}
          </div>

          {/* ── Table 1 ── */}
          <h2 className="roc-section-heading">
            Incorporation of a Company Other than OPC / Small Company
          </h2>
          <FeeTable rows={table1} />
          <p className="roc-note">
            *Note: This is the combined fee of E-Form INC-32 (SPICe) &amp; AOA. Filing fee of E-Form INC-32 is ₹500 &amp; AOA as per share capital criteria.
          </p>

          {/* ── Table 2 ── */}
          <h2 className="roc-section-heading">
            Incorporation of an OPC / Small Company
          </h2>
          <FeeTable rows={table2} />
          <p className="roc-note">
            *Note: This is the combined fee of E-Form INC-32 (SPICe) &amp; AOA. Filing fee of E-Form INC-32 is ₹500 &amp; AOA as per share capital criteria.
          </p>

          <p className="roc-last-updated">Last updated on 09.04.2024</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
