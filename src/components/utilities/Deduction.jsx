import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './deduction.css';

const rows = [
  {
    particulars: 'Applicable w.e.f.',
    tta: 'AY 2013-14',
    ttb: 'AY 2019-20',
    remarks: 'Till AY 2018-19, 80TTA was available to senior citizens also.',
  },
  {
    particulars: 'Deductor to whom applicable',
    tta: 'Banks, Cooperative banks, Post offices etc.',
    ttb: 'Banks, Cooperative banks, Post offices etc.',
    remarks: 'Not applicable to other deductors like companies who may have taken deposits.',
  },
  {
    particulars: 'Deductee to whom applicable',
    tta: 'Individuals (other than Senior Citizens) & HUF',
    ttb: 'Senior Citizens',
    remarks: 'Either 80TTA or 80TTB can be claimed.',
  },
  {
    particulars: 'Residential status of deductee',
    tta: 'Residents & Non-residents',
    ttb: 'Residents only',
    remarks: '',
  },
  {
    particulars: 'Type of payment on which applicable',
    tta: 'Interest on Savings Account',
    ttb: 'Interest on Savings Account & Fixed Deposits',
    remarks: 'No benefit to persons other than senior citizens for interest on FD.',
  },
  {
    particulars: 'Maximum Deduction',
    tta: '₹ 10,000',
    ttb: '₹ 50,000',
    remarks: 'Deductor to give remarks \u201cR\u201d for 80TTB till amount reaches ₹50,000.',
  },
  {
    particulars: 'Where to Claim',
    tta: 'ITR (TDS not applicable on interest on savings account)',
    ttb: 'TDS & ITR',
    remarks: 'Same',
  },
];

export default function Deduction() {
  return (
    <>
      <Navbar />
      <div className="ded-page">
        <div className="ded-content">

          <h1 className="ded-page-title">Comparison of Deduction u/s 80TTA &amp; 80TTB</h1>

          <div className="ded-table-scroll">
            <table className="ded-table">
              <thead>
                <tr>
                  <th className="ded-col-particulars">Particulars</th>
                  <th className="ded-col-tta">80TTA</th>
                  <th className="ded-col-ttb">80TTB</th>
                  <th className="ded-col-remarks">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'ded-row-alt' : ''}>
                    <td className="ded-cell-particulars">{row.particulars}</td>
                    <td>{row.tta}</td>
                    <td>{row.ttb}</td>
                    <td className="ded-cell-remarks">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
