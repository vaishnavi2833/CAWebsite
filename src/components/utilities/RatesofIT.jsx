import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './ratesofit.css';

const YEARS = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22', '2020-21', '2017-18'];

const AY_PY = {
  '2025-26': '2024-25',
  '2024-25': '2023-24',
  '2023-24': '2022-23',
  '2022-23': '2021-22',
  '2021-22': '2020-21',
  '2020-21': '2019-20',
  '2017-18': '2016-17',
};

/* ─── Slab table helpers ─────────────────────────────────────── */

function SlabTableSplit({ oldRows, newRows, label }) {
  const maxRows = Math.max(oldRows.length, newRows.length);
  const rows = Array.from({ length: maxRows }, (_, i) => ({
    oldSlab: oldRows[i]?.[0] ?? '',
    oldRate: oldRows[i]?.[1] ?? '',
    newSlab: newRows[i]?.[0] ?? '',
    newRate: newRows[i]?.[1] ?? '',
  }));
  return (
    <div className="roit-content slab-block">
      {label && <h3 className="slab-label">{label}</h3>}
      <div className="table-scroll">
        <table className="roit-table slab-table">
          <thead>
            <tr>
              <th colSpan={2}>Old Tax Slab</th>
              <th colSpan={2}>New Tax Slab (Sec 115BAC)</th>
            </tr>
            <tr>
              <th>Income Range</th><th>Rate</th>
              <th>Income Range</th><th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{r.oldSlab}</td>
                <td className="rate-cell">{r.oldRate}</td>
                <td>{r.newSlab}</td>
                <td className="rate-cell">{r.newRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SlabTableSimple({ rows, label }) {
  return (
    <div className="roit-content slab-block">
      {label && <h3 className="slab-label">{label}</h3>}
      <div className="table-scroll">
        <table className="roit-table slab-table simple">
          <thead>
            <tr><th>Income Range</th><th>Rate</th></tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{r[0]}</td><td className="rate-cell">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CoopSimpleTable({ rows }) {
  return (
    <div className="table-scroll">
      <table className="roit-table slab-table simple narrow">
        <thead><tr><th>Income Range</th><th>Rate</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
              <td>{r[0]}</td><td className="rate-cell">{r[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const COOP_NORMAL_ROWS = [
  ['Up to Rs. 10,000', '10%'],
  ['Rs. 10,001 to Rs. 20,000', '20%'],
  ['Above Rs. 20,000', '30%'],
];

/* ─── Per-year new slab sets ────────────────────────────────── */

const newSlabs_2526 = [
  ['Upto Rs. 3,00,000', 'NIL'],
  ['Rs. 3,00,001 – Rs. 7,00,000', '5%'],
  ['Rs. 7,00,001 – Rs. 10,00,000', '10%'],
  ['Rs. 10,00,001 – Rs. 12,00,000', '15%'],
  ['Rs. 12,00,001 – Rs. 15,00,000', '20%'],
  ['Above Rs. 15,00,000', '30%'],
];

const newSlabs_2425 = [
  ['Upto Rs. 3,00,000', 'NIL'],
  ['Rs. 3,00,001 – Rs. 6,00,000', '5%'],
  ['Rs. 6,00,001 – Rs. 9,00,000', '10%'],
  ['Rs. 9,00,001 – Rs. 12,00,000', '15%'],
  ['Rs. 12,00,001 – Rs. 15,00,000', '20%'],
  ['Above Rs. 15,00,000', '30%'],
];

const newSlabs_2324 = [
  ['Upto Rs. 2,50,000', 'NIL'],
  ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
  ['Rs. 5,00,001 – Rs. 7,50,000', '10%'],
  ['Rs. 7,50,001 – Rs. 10,00,000', '15%'],
  ['Rs. 10,00,001 – Rs. 12,50,000', '20%'],
  ['Rs. 12,50,001 – Rs. 15,00,000', '25%'],
  ['Above Rs. 15,00,000', '30%'],
];

/* ─── Year content renderer ─────────────────────────────────── */

function Year_2526() {
  const seniorOld = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorOld = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersOld = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSplit oldRows={seniorOld} newRows={newSlabs_2526}
        label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSplit oldRows={superSeniorOld} newRows={newSlabs_2526}
        label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSplit oldRows={othersOld} newRows={newSlabs_2526}
        label="3. Individuals, HUF, AOP, BOI, AJP (other than above)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A is allowed to resident individual having income upto Rs. 7 lacs. Rebate is upto the amount of income tax, not exceeding Rs. 25,000.
      </div>

      <h3 className="sub-section-heading">Surcharge (Individuals)</h3>
      <ul className="info-list">
        <li>10% — Taxable income exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income exceeding Rs. 1 Crore upto Rs. 2 Crore</li>
        <li>25% — Taxable income exceeding Rs. 2 Crore</li>
      </ul>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (manufacturing company set up on or after 1.3.2016) — <strong>25%</strong></li>
        <li>Section 115BAA (Domestic company) — <strong>22%</strong></li>
        <li>Section 115BAB (Domestic Manufacturing company set up on or after 1.10.2019 &amp; business commenced on or before 31.3.2024) — <strong>15%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>MAT: <strong>15%</strong></li>
      </ul>
      <div className="note-box">In the above cases, few incentives &amp; deductions are not available.</div>
      <h4 className="minor-heading">Surcharge:</h4>
      <ul className="info-list">
        <li>7% — Taxable income between Rs. 1 Crore and Rs. 10 Crore</li>
        <li>12% — Taxable income exceeding Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        <strong>Notes:</strong>
        <ol><li>Surcharge is subject to marginal relief.</li>
        <li>Rate of surcharge for Section 115BAA or 115BAB shall be flat <strong>10%</strong> irrespective of total income.</li></ol>
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>35%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty received from Government or an Indian concern (agreements made after March 31, 1961 but before April 1, 1976, or fees for technical services under agreements made after February 29, 1964 but before April 1, 1976, approved by the Central Government)</li>
        <li>Surcharge: 2% if taxable income is between Rs. 1 Crore and Rs. 10 Crore; 5% if exceeds Rs. 10 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
      <div className="note-box">Surcharge is subject to marginal relief.</div>

      <h2 className="section-heading">Firms &amp; LLP</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies (Section 115BAC – New Regime)</h2>
      <h3 className="sub-section-heading">(A) Normal Rates</h3>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 7% if taxable income between Rs. 1 Crore and Rs. 10 Crore; 12% if exceeds Rs. 10 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
        <li>Alternate Minimum Tax (AMT): <strong>15%</strong></li>
      </ul>
      <div className="note-box">Surcharge is subject to marginal relief.</div>
      <h3 className="sub-section-heading">(B) Resident Co-operative society opting for Section 115BAD (giving up few incentives &amp; deductions): <strong>22%</strong></h3>
      <h3 className="sub-section-heading">(C) Concessional rate for manufacturing cooperative society set up on or after 1.4.2023 &amp; commences manufacture on or before 31.3.2024: <strong>15%</strong></h3>
      <div className="note-box">In case of concessional tax, surcharge flat 10% without any marginal relief.</div>
    </>
  );
}

function Year_2425() {
  const seniorOld = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorOld = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersOld = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSplit oldRows={seniorOld} newRows={newSlabs_2425}
        label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSplit oldRows={superSeniorOld} newRows={newSlabs_2425}
        label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSplit oldRows={othersOld} newRows={newSlabs_2425}
        label="3. Individuals, HUF, AOP, BOI, AJP (other than above)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A — resident individuals are allowed rebate.
      </div>

      <h3 className="sub-section-heading">Surcharge (Individuals)</h3>
      <ul className="info-list">
        <li>10% — Taxable income exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income exceeding Rs. 1 Crore but not exceeding Rs. 2 Crore</li>
        <li>25% — Taxable income exceeding Rs. 2 Crore but not exceeding Rs. 5 Crore</li>
        <li>37% — Taxable income exceeding Rs. 5 Crore <em>(Not applicable for new tax regime)</em></li>
      </ul>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (turnover/gross receipt does not exceed Rs. 400 Crore in FY 2018-19) — <strong>25%</strong></li>
        <li>Section 115BAA (not claiming profit-linked deductions, unabsorbed depreciation &amp; losses) — <strong>22%</strong></li>
        <li>Section 115BAB (new manufacturing companies) — <strong>15%</strong></li>
        <li>Where total turnover/gross receipt in PY 2021-22 does not exceed Rs. 400 Crore — <strong>25%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>MAT: <strong>15%</strong></li>
      </ul>
      <ul className="info-list">
        <li>Surcharge: 7% if taxable income between Rs. 1 Crore and Rs. 10 Crore; 12% if exceeds Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        Surcharge is subject to marginal relief. Rate of surcharge for Section 115BAA or 115BAB shall be flat <strong>10%</strong> irrespective of total income.
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty/technical service fees under Central Government approved agreements (1961–1976/1964–1976)</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Firms &amp; LLP</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies (Section 115BAC – New Regime)</h2>
      <h3 className="sub-section-heading">(A) Normal Rates</h3>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 7% (Rs. 1–10 Crore); 12% (exceeds Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
      <h3 className="sub-section-heading">(B) Special tax rates for Co-operative societies: <strong>22%</strong></h3>
      <h3 className="sub-section-heading">(C) Alternate Minimum Tax (AMT): <strong>15%</strong></h3>
      <h3 className="sub-section-heading">(D) Concessional tax for new manufacturing cooperative society: <strong>15%</strong></h3>
    </>
  );
}

function Year_2324() {
  const seniorOld = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorOld = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersOld = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSplit oldRows={seniorOld} newRows={newSlabs_2324}
        label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSplit oldRows={superSeniorOld} newRows={newSlabs_2324}
        label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSplit oldRows={othersOld} newRows={newSlabs_2324}
        label="3. Individuals, HUF, AOP/BOI (other than co-operative societies)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A — resident individuals are allowed rebate (if taxable income does not exceed Rs. 5 lakh) equal to 100% of income tax or Rs. 12,500, whichever is less.
      </div>

      <h3 className="sub-section-heading">Surcharge (Individuals)</h3>
      <ul className="info-list">
        <li>10% — Taxable income exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income exceeding Rs. 1 Crore but not exceeding Rs. 2 Crore</li>
        <li>25% — Taxable income exceeding Rs. 2 Crore but not exceeding Rs. 5 Crore</li>
        <li>37% — Taxable income exceeding Rs. 5 Crore</li>
      </ul>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Firms</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (turnover/gross receipt does not exceed Rs. 400 Crore in FY 2018-19) — <strong>25%</strong></li>
        <li>Section 115BAA (not claiming profit-linked deductions, unabsorbed depreciation &amp; losses) — <strong>22%</strong></li>
        <li>Section 115BAB (new manufacturing companies) — <strong>15%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>MAT: <strong>15%</strong></li>
        <li>Surcharge: 7% if taxable income exceeds Rs. 1 Crore; 12% if exceeds Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        Rate of surcharge for Section 115BAA or 115BAB shall be <strong>10%</strong> irrespective of total income.
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty/technical service fees under Central Government approved agreements</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies</h2>
      <h3 className="sub-section-heading">Under Old Regime</h3>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
      <h3 className="sub-section-heading">Under New Regime (Section 115BAC)</h3>
      <ul className="info-list">
        <li>Income Tax: Flat rate of <strong>22%</strong></li>
        <li>Surcharge: <strong>10%</strong></li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Local Authorities</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
    </>
  );
}

function Year_2223() {
  const seniorOld = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorOld = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersOld = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSplit oldRows={seniorOld} newRows={newSlabs_2324}
        label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSplit oldRows={superSeniorOld} newRows={newSlabs_2324}
        label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSplit oldRows={othersOld} newRows={newSlabs_2324}
        label="3. Individuals, HUF, AOP/BOI (other than co-operative societies)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A — resident individuals are allowed rebate (if taxable income does not exceed Rs. 5 lakh) equal to 100% of income tax or Rs. 12,500, whichever is less.
      </div>

      <h3 className="sub-section-heading">Surcharge (Individuals)</h3>
      <ul className="info-list">
        <li>10% — Taxable income exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income exceeding Rs. 1 Crore but not exceeding Rs. 2 Crore</li>
        <li>25% — Taxable income exceeding Rs. 2 Crore but not exceeding Rs. 5 Crore</li>
        <li>37% — Taxable income exceeding Rs. 5 Crore</li>
      </ul>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Firms</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (turnover/gross receipt does not exceed Rs. 400 Crore in FY 2018-19) — <strong>25%</strong></li>
        <li>Section 115BAA (not claiming profit-linked deductions) — <strong>22%</strong></li>
        <li>Section 115BAB (new manufacturing companies) — <strong>15%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>MAT: <strong>15%</strong></li>
        <li>Surcharge: 7% if taxable income exceeds Rs. 1 Crore; 12% if exceeds Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        Rate of surcharge for Section 115BAA or 115BAB shall be <strong>10%</strong> irrespective of total income.
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty/technical service fees under Central Government approved agreements</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies</h2>
      <h3 className="sub-section-heading">Under Old Regime</h3>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
      <h3 className="sub-section-heading">Under New Regime (Section 115BAC)</h3>
      <ul className="info-list">
        <li>Income Tax: Flat rate of <strong>22%</strong></li>
        <li>Surcharge: <strong>10%</strong></li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Local Authorities</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
    </>
  );
}

function Year_2122() {
  const seniorOld = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorOld = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersOld = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSplit oldRows={seniorOld} newRows={newSlabs_2324}
        label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSplit oldRows={superSeniorOld} newRows={newSlabs_2324}
        label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSplit oldRows={othersOld} newRows={newSlabs_2324}
        label="3. Individuals, HUF, AOP/BOI (other than co-operative societies)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A — resident individuals are allowed rebate (if taxable income does not exceed Rs. 5 lakh) equal to 100% of income tax or Rs. 12,500, whichever is less.
      </div>

      <h3 className="sub-section-heading">Surcharge on Income Tax on Other Incomes</h3>
      <ul className="info-list">
        <li>10% — Taxable income (including Dividend &amp; Income u/s 111A &amp; 112A) exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income (including Dividend &amp; Income u/s 111A &amp; 112A) exceeding Rs. 1 Crore upto Rs. 2 Crore</li>
        <li>25% — Taxable income (excluding Dividend &amp; Income u/s 111A &amp; 112A) exceeding Rs. 2 Crore upto Rs. 5 Crore</li>
        <li>37% — Taxable income (excluding Dividend &amp; Income u/s 111A &amp; 112A) exceeding Rs. 5 Crore</li>
      </ul>
      <h3 className="sub-section-heading">Surcharge on Dividend Income &amp; Income u/s 111A &amp; 112A</h3>
      <ul className="info-list">
        <li>10% — Income (including Dividend/111A/112A) exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Income (including Dividend/111A/112A) exceeding Rs. 1 Crore upto Rs. 2 Crore</li>
        <li>15% — Income (excluding Dividend/111A/112A) exceeding Rs. 2 Crore upto Rs. 5 Crore</li>
        <li>15% — Income (excluding Dividend/111A/112A) exceeding Rs. 5 Crore</li>
      </ul>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Firms</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (turnover/gross receipt does not exceed Rs. 400 Crore in FY 2019-20) — <strong>25%</strong></li>
        <li>Section 115BAA (not claiming profit-linked deductions) — <strong>22%</strong></li>
        <li>Section 115BAB (new manufacturing companies) — <strong>15%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>MAT: <strong>15%</strong></li>
        <li>Surcharge: 7% if taxable income exceeds Rs. 1 Crore; 12% if exceeds Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        Rate of surcharge for Section 115BAA or 115BAB shall be <strong>10%</strong> irrespective of total income.
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty/technical service fees under Central Government approved agreements</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies</h2>
      <h3 className="sub-section-heading">Under Old Regime</h3>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
      <h3 className="sub-section-heading">Under New Regime (Section 115BAC)</h3>
      <ul className="info-list">
        <li>Income Tax: Flat rate of <strong>22%</strong></li>
        <li>Surcharge: <strong>10%</strong></li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Local Authorities</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
    </>
  );
}

function Year_2021() {
  const seniorRows = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorRows = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersRows = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '5%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSimple rows={seniorRows} label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSimple rows={superSeniorRows} label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSimple rows={othersRows} label="3. Individuals, HUF, AOP/BOI (other than co-operative societies)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A — resident individuals are allowed rebate *(if taxable income does not exceed Rs. 5 lakh) equal to 100% of income tax or Rs. 12,500, whichever is less. *(by Finance Act 2019)
      </div>
      <h3 className="sub-section-heading">Surcharge</h3>
      <ul className="info-list">
        <li>10% — Taxable income exceeding Rs. 50 Lacs upto Rs. 1 Crore</li>
        <li>15% — Taxable income exceeding Rs. 1 Crore but not exceeding Rs. 2 Crore</li>
        <li>25% — Taxable income exceeding Rs. 2 Crore but not exceeding Rs. 5 Crore</li>
        <li>37% — Taxable income exceeding Rs. 5 Crore</li>
      </ul>
      <p className="info-para"><strong>Short-Term Capital Gains u/s 111A:</strong> 10% (income Rs. 50L–1Cr) &amp; 15% (above Rs. 1 Crore) plus surcharge.</p>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h2 className="section-heading">Firms</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>Section 115BA (turnover/gross receipt does not exceed Rs. 400 Crore in FY 2017-18) — <strong>25%</strong></li>
        <li>Section 115BAA (not claiming profit-linked deductions) — <strong>22%</strong></li>
        <li>Section 115BAB (new manufacturing companies) — <strong>15%</strong></li>
        <li>Any other domestic company — <strong>30%</strong></li>
        <li>Surcharge: 7% if taxable income exceeds Rs. 1 Crore; 12% if exceeds Rs. 10 Crore</li>
      </ul>
      <div className="note-box">
        Rate of surcharge for Section 115BAA or 115BAB shall be <strong>10%</strong> irrespective of total income.
      </div>
      <p className="info-para"><strong>Health and Education Cess:</strong> 4% on Tax plus surcharge.</p>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li><strong>50%</strong> — Royalty/technical service fees under Central Government approved agreements</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies</h2>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Local Authorities</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Health and Education Cess: 4% on Tax plus surcharge</li>
      </ul>
    </>
  );
}

function Year_1718() {
  const seniorRows = [
    ['Upto Rs. 3,00,000', 'NIL'],
    ['Rs. 3,00,001 – Rs. 5,00,000', '10%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const superSeniorRows = [
    ['Upto Rs. 5,00,000', 'NIL'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  const othersRows = [
    ['Upto Rs. 2,50,000', 'NIL'],
    ['Rs. 2,50,001 – Rs. 5,00,000', '10%'],
    ['Rs. 5,00,001 – Rs. 10,00,000', '20%'],
    ['Above Rs. 10,00,000', '30%'],
  ];
  return (
    <>
      <h2 className="section-heading">Individuals, HUF, AOP, BOI, AJP</h2>
      <SlabTableSimple rows={seniorRows} label="1. Resident Senior Citizens (Age above 60 Years)" />
      <SlabTableSimple rows={superSeniorRows} label="2. Resident Super Senior Citizens (Age above 80 Years)" />
      <SlabTableSimple rows={othersRows} label="3. Individuals, HUF, AOP/BOI (other than co-operative societies)" />

      <div className="note-box">
        <strong>Note:</strong> Rebate u/s 87A (from Finance Act 2013) — resident individuals are allowed rebate (if taxable income does not exceed Rs. 5 lakh) equal to 100% of income tax or Rs. 5,000, whichever is less.
      </div>
      <h3 className="sub-section-heading">Surcharge</h3>
      <ul className="info-list">
        <li>15% — Taxable income exceeding Rs. 1 Crore</li>
      </ul>
      <ul className="info-list">
        <li>Education Cess: 2% on income-tax plus surcharge</li>
        <li>Secondary and Higher Education Cess: 1% on income-tax plus surcharge</li>
        <li>Long-Term Capital Gains: 20% on income-tax plus surcharge</li>
        <li>Short-Term Capital Gains u/s 111A: 15% on income-tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Firms</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Education Cess: 2% on income-tax plus surcharge</li>
        <li>Secondary and Higher Education Cess: 1% on income-tax plus surcharge</li>
      </ul>

      <h2 className="section-heading">Companies</h2>
      <h3 className="sub-section-heading">(A) Domestic Companies</h3>
      <ul className="info-list">
        <li>30% (29% if turnover or gross receipt does not exceed Rs. 5 Crore)</li>
        <li>Surcharge: 7% if taxable income exceeds Rs. 1 Crore; 12% if exceeds Rs. 10 Crore</li>
        <li>Education Cess: 2% + Secondary &amp; Higher Education Cess: 1% on income-tax plus surcharge</li>
      </ul>

      <h3 className="sub-section-heading">(B) Foreign Companies</h3>
      <ul className="info-list">
        <li>Income Tax: <strong>40%</strong> (in general)</li>
        <li>Surcharge: 2% (Rs. 1–10 Crore); 5% (above Rs. 10 Crore)</li>
        <li>Education Cess: 2% + Secondary &amp; Higher Education Cess: 1%</li>
      </ul>

      <h2 className="section-heading">Cooperative Societies</h2>
      <CoopSimpleTable rows={COOP_NORMAL_ROWS} />
      <ul className="info-list" style={{marginTop:'8px'}}>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Education Cess: 2%; Secondary and Higher Education Cess: 1%</li>
      </ul>

      <h2 className="section-heading">Local Authorities</h2>
      <ul className="info-list">
        <li>Income Tax: <strong>30%</strong></li>
        <li>Surcharge: 12% where total taxable income exceeds Rs. 1 Crore</li>
        <li>Education Cess: 2% + Secondary &amp; Higher Education Cess: 1%</li>
      </ul>
    </>
  );
}

const yearComponentMap = {
  '2025-26': <Year_2526 />,
  '2024-25': <Year_2425 />,
  '2023-24': <Year_2324 />,
  '2022-23': <Year_2223 />,
  '2021-22': <Year_2122 />,
  '2020-21': <Year_2021 />,
  '2017-18': <Year_1718 />,
};

/* ─── Main Component ─────────────────────────────────────────── */

export default function RatesofIT() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState('2025-26');

  return (
    <div>
        <Navbar />
        <div className="roit-page">
        <div className="roit-content">
            <h1 className="page-title">Rates of Income Tax</h1>
            <p className="page-subtitle">
            Assessment Year: <strong>{activeYear}</strong>&nbsp;&nbsp;|&nbsp;&nbsp;
            Previous Year: <strong>{AY_PY[activeYear]}</strong>
            </p>

            {/* Year Tabs */}
            <div className="year-tabs">
            {YEARS.map(y => (
                <button
                key={y}
                className={`year-tab${activeYear === y ? ' active' : ''}`}
                onClick={() => setActiveYear(y)}
                >
                AY {y}
                </button>
            ))}
            </div>

            {/* Year Content */}
            <div className="year-content">
            {yearComponentMap[activeYear]}
            </div>

            <p className="last-updated">Last updated: 05.04.2023</p>
        </div>
        </div>
        <Contact />
        <Footer />
    </div>
  );
}
