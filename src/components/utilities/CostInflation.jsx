import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './costinflation.css';

const ciiData = [
  { fy: '2024-2025', cii: 363 },
  { fy: '2023-2024', cii: 348 },
  { fy: '2022-2023', cii: 331 },
  { fy: '2021-2022', cii: 317 },
  { fy: '2020-2021', cii: 301 },
  { fy: '2019-2020', cii: 289 },
  { fy: '2018-2019', cii: 280 },
  { fy: '2017-2018', cii: 272 },
  { fy: '2016-2017', cii: 264 },
  { fy: '2015-2016', cii: 254 },
  { fy: '2014-2015', cii: 240 },
  { fy: '2013-2014', cii: 220 },
  { fy: '2012-2013', cii: 200 },
  { fy: '2011-2012', cii: 184 },
  { fy: '2010-2011', cii: 167 },
  { fy: '2009-2010', cii: 148 },
  { fy: '2008-2009', cii: 137 },
  { fy: '2007-2008', cii: 129 },
  { fy: '2006-2007', cii: 122 },
  { fy: '2005-2006', cii: 117 },
  { fy: '2004-2005', cii: 113 },
  { fy: '2003-2004', cii: 109 },
  { fy: '2002-2003', cii: 105 },
  { fy: '2001-2002', cii: 100 },
];

export default function CostInflation() {
  const [search, setSearch] = useState('');
  const q = search.trim().toLowerCase();
  const filtered = ciiData.filter(r => !q || r.fy.includes(q) || String(r.cii).includes(q));

  return (
    <>
      <Navbar />
      <div className="cii-page">
        <div className="cii-content">

          <h1 className="cii-page-title">Cost Inflation Index</h1>
          <p className="cii-subtitle">
            As notified by the Central Board of Direct Taxes (CBDT) &nbsp;|&nbsp; Base Year: 2001-02 (CII = 100)
          </p>

          {/* Search */}
          <div className="cii-search-bar">
            <input
              type="text"
              placeholder="Search by Financial Year or Index..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="cii-clear-btn" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Table */}
          <div className="cii-table-scroll">
            <table className="cii-table">
              <thead>
                <tr>
                  <th>Financial Year</th>
                  <th>Cost Inflation Index</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={2} className="cii-no-results">No matching records found.</td>
                  </tr>
                )}
                {filtered.map((row, i) => (
                  <tr key={row.fy} className={i % 2 === 1 ? 'cii-row-alt' : ''}>
                    <td className="cii-fy">{row.fy}</td>
                    <td className="cii-index">{row.cii}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cii-note">
            * The Cost Inflation Index (CII) is used to compute long-term capital gains (LTCG) under the
            Income Tax Act, 1961. The base year is 2001-02 with an index of 100. Notified u/s 48
            of the Income Tax Act.
          </p>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
