import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './nscintrest.css';

/* ─── VIII Issue ──────────────────────────────────────────────────── */

const viii_periods = [
  '01-03-2001 to 28-02-2002',
  '01-03-2002 to 28-02-2003',
  '01-03-2003 to 30-11-2011',
  '01-12-2011 to 31-03-2012',
  '01-04-2012 to 31-03-2013',
  '01-04-2013 to 31-03-2014',
  '01-04-2014 to 31-03-2015',
  '01-04-2015 to 31-03-2016',
  '01-04-2016 to 30-09-2016',
  '01-10-2016 to 31-03-2017',
  '01-04-2017 to 30-06-2017',
  '01-07-2017 to 31-12-2017',
  '01-01-2018 to 30-09-2018',
  '01-10-2018 to 30-06-2019',
  '01-07-2019 to 31-03-2020',
  '01-04-2020 to Onwards',
];

const viii_rows = [
  { year: '1st Year', rates: [9.72, 9.20, 8.16, 8.58, 8.78, 8.68, 8.68, 8.68, 8.10, 8.00, 7.90, 7.80, 7.60, 8.00, 7.90, 6.80] },
  { year: '2nd Year', rates: [10.67, 10.05, 8.83, 9.31, 9.56, 9.43, 9.43, 9.43, 8.76, 8.64, 8.52, 8.41, 8.18, 8.64, 8.52, 7.26] },
  { year: '3rd Year', rates: [11.71, 10.97, 9.55, 10.11, 10.40, 10.25, 10.25, 10.25, 9.46, 9.33, 9.20, 9.06, 8.80, 9.33, 9.20, 7.76] },
  { year: '4th Year', rates: [12.85, 11.98, 10.33, 10.98, 11.31, 11.14, 11.14, 11.14, 10.23, 10.08, 9.93, 9.77, 9.47, 10.08, 9.92, 8.28] },
  { year: '5th Year', rates: [14.10, 13.09, 11.17, 11.92, 12.30, 12.11, 12.11, 12.11, 11.06, 10.88, 10.70, 10.55, 10.19, 10.88, 10.71, 8.85] },
  { year: '6th Year', rates: [15.47, 14.29, 12.08, null, null, null, null, null, null, null, null, null, null, null, null, null] },
];

/* ─── IX Issue ────────────────────────────────────────────────────── */

const ix_periods = [
  '01-12-2011 to 31-03-2012',
  '01-04-2012 to 31-03-2013',
  '01-04-2013 to 31-03-2014',
  '01-04-2014 to 31-03-2015',
  '01-04-2015 to 19-12-2015\n(Discontinued w.e.f 20/12/2015)',
];

const ix_rows = [
  { year: '1st Year',  rates: [8.89, 9.10, 8.99, 8.99, 8.99] },
  { year: '2nd Year',  rates: [9.68, 9.93, 9.80, 9.80, 9.80] },
  { year: '3rd Year',  rates: [10.54, 10.83, 10.68, 10.68, 10.68] },
  { year: '4th Year',  rates: [11.48, 11.81, 11.64, 11.64, 11.64] },
  { year: '5th Year',  rates: [12.50, 12.89, 12.69, 12.69, 12.69] },
  { year: '6th Year',  rates: [13.61, 14.06, 13.83, 13.83, 13.83] },
  { year: '7th Year',  rates: [14.82, 15.34, 15.08, 15.08, 15.08] },
  { year: '8th Year',  rates: [16.13, 16.74, 16.43, 16.43, 16.43] },
  { year: '9th Year',  rates: [17.57, 18.26, 17.91, 17.91, 17.91] },
  { year: '10th Year', rates: [19.13, 19.92, 19.52, 19.52, 19.52] },
];

/* ─── Sub-component ───────────────────────────────────────────────── */

function NSCTable({ periods, rows }) {
  return (
    <div className="nsc-table-scroll">
      <table className="nsc-table">
        <thead>
          <tr>
            <th className="nsc-year-col">Year</th>
            {periods.map((p, i) => (
              <th key={i}>{p.split('\n').map((line, j) => (
                <span key={j}>{line}{j < p.split('\n').length - 1 && <br />}</span>
              ))}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? 'nsc-row-alt' : ''}>
              <td className="nsc-year-cell">{row.year}</td>
              {row.rates.map((r, j) => (
                <td key={j} className={r === null ? 'nsc-na' : 'nsc-rate'}>
                  {r === null ? 'N/A' : r.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */

export default function NSCIntrest() {
  return (
    <>
      <Navbar />
      <div className="nsc-page">
        <div className="nsc-content">

          <h1 className="nsc-page-title">Calculation of Interest on NSC</h1>
          <p className="nsc-subtitle">
            Rates of interest accruing on National Savings Certificates as notified by the
            Ministry of Finance, Government of India.
          </p>

          <h2 className="nsc-section-heading">Rates of Interest on NSC (VIII Issue)</h2>
          <NSCTable periods={viii_periods} rows={viii_rows} />
          <p className="nsc-note">
            * NSC VIII Issue was a 6-year scheme until discontinued and converted to 5-year w.e.f.
            01-12-2011. Rates represent accrued interest (₹) per ₹100 invested at end of each year,
            compounded half-yearly.
          </p>

          <h2 className="nsc-section-heading nsc-section-heading--gap">Rates of Interest on NSC (IX Issue)</h2>
          <NSCTable periods={ix_periods} rows={ix_rows} />
          <p className="nsc-note">
            * NSC IX Issue was a 10-year scheme. It was discontinued with effect from 20/12/2015.
            Rates represent accrued interest (₹) per ₹100 invested at end of each year,
            compounded half-yearly.
          </p>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
