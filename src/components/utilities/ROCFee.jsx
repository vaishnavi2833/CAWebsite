import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './rocfee.css';

export default function ROCFee() {
  return (
    <>
      <Navbar />
      <div className="rf-page">
        <div className="rf-content">

          <h1 className="rf-page-title">ROC Fee Structure</h1>
          <p className="rf-subtitle">
            Companies Act, 2013 &nbsp;|&nbsp; Fees for Filing Various Documents / Registering Facts
          </p>

          {/* ── Section 1: Filing Fee by Capital ── */}
          <h2 className="rf-section-heading">
            Fees For Filing Various Documents or For Registering any Fact
            <span className="rf-section-sub">(Except Form No. SH-7)</span>
          </h2>
          <div className="rf-table-scroll">
            <table className="rf-table">
              <thead>
                <tr>
                  <th className="rf-sl">S.No.</th>
                  <th>Nominal Share Capital</th>
                  <th>Fees per Document</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1.', 'Less than ₹1,00,000', '₹ 200'],
                  ['2.', '₹1,00,000 and less than ₹5,00,000', '₹ 300'],
                  ['3.', '₹5,00,000 and less than ₹25,00,000', '₹ 400'],
                  ['4.', '₹25,00,000 or more and less than ₹1 Crore', '₹ 500'],
                  ['5.', '₹1 Crore or more', '₹ 600'],
                ].map(([sl, cap, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'rf-row-alt' : ''}>
                    <td className="rf-sl">{sl}</td>
                    <td>{cap}</td>
                    <td className="rf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 2: SH-7 note + Stamp Duty ── */}
          <div className="rf-info-block">
            <p>
              <strong>Form No. SH-7 — For Increasing Authorised Capital:</strong> The difference
              between the fee payable on the proposed Authorised Capital and on the existing Capital
              at the rates prevailing on the date of filing.
            </p>
            <p>
              For enhancement of Authorised Capital or for registration of a new company, an
              additional stamp duty is payable <strong>@ 0.15%</strong> of the increased/fresh
              authorised capital as per the Delhi Stamp Act.
            </p>
          </div>

          {/* ── Section 3: Applications to Central Government ── */}
          <h2 className="rf-section-heading">
            Fee on Applications (including Appeal) made to Central Government
          </h2>
          <div className="rf-table-scroll">
            <table className="rf-table rf-app-table">
              <thead>
                <tr>
                  <th className="rf-sl">S.No.</th>
                  <th>Application made by</th>
                  <th>OPC &amp; Small Companies (₹)</th>
                  <th>Other than OPC &amp; Small Companies (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rf-sl" rowSpan={5}>(i)</td>
                  <td>A Company having an Authorised Share Capital of:</td>
                  <td></td>
                  <td></td>
                </tr>
                {[
                  ['(a) Upto ₹25,00,000', '1,000', '2,000'],
                  ['(b) More than ₹25,00,000 and upto ₹50,00,000', '2,500', '5,000'],
                  ['(c) More than ₹50,00,000 and upto ₹5 Crores', 'N/A', '10,000'],
                  ['(d) More than ₹5 Crores and upto ₹10 Crores', 'N/A', '15,000'],
                  ['(e) More than ₹10 Crores', 'N/A', '20,000'],
                ].map(([label, opc, other], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'rf-row-alt' : ''}>
                    <td className="rf-indent">{label}</td>
                    <td className="rf-fee">{opc}</td>
                    <td className="rf-fee">{other}</td>
                  </tr>
                ))}
                {[
                  ['(ii)', 'A Company limited by guarantee but not having share capital', '–', '2,000'],
                  ['(iii)', 'Section 8 Company', '–', '2,000'],
                  ['(iv)', 'Foreign Company', '–', '5,000'],
                  ['(v)', 'Application for Allotment of DIN u/s 153', '500', '500'],
                  ['(vi)', 'For surrender of Director Identification Number under Rule 11(f) of the Companies (Appointment and Qualification of Directors) Rules, 2014', '1,000', '1,000'],
                ].map(([sl, label, opc, other], i) => (
                  <tr key={`b${i}`} className={i % 2 === 0 ? '' : 'rf-row-alt'}>
                    <td className="rf-sl">{sl}</td>
                    <td>{label}</td>
                    <td className="rf-fee">{opc}</td>
                    <td className="rf-fee">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 4: Late Filing ── */}
          <h2 className="rf-section-heading">Additional Fees For Late Filing of Document</h2>
          <div className="rf-table-scroll">
            <table className="rf-table">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Period of Delay</th>
                  <th>Rate of Additional Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={2}><strong>Form No. SH-7</strong><br />(Increase in Share Capital)</td>
                  <td>Up to 6 months</td>
                  <td className="rf-fee">2.5% per month on normal fee</td>
                </tr>
                <tr className="rf-row-alt">
                  <td>Beyond 6 months</td>
                  <td className="rf-fee">3% per month on normal fee</td>
                </tr>
                {[
                  ['i)', 'Upto 15 days (Sec. 139 & 157)', 'One time of normal filing fee'],
                  ['ii)', 'More than 15 days and upto 30 days (Section 139 & 157) and upto 30 days in remaining forms', 'Two times of normal filing fee'],
                  ['iii)', 'More than 30 days and upto 60 days', 'Four times of normal filing fee'],
                  ['iv)', 'More than 60 days and upto 90 days', 'Six times of normal filing fee'],
                  ['v)', 'More than 90 days and upto 180 days', 'Ten times of normal filing fee'],
                  ['vi)', 'More than 180 days', 'Twelve times of normal filing fee'],
                ].map(([sl, period, rate], i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'rf-row-alt'}>
                    {i === 0 && <td rowSpan={6}><strong>Other Documents</strong></td>}
                    <td>{sl}&nbsp; {period}</td>
                    <td className="rf-fee">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sec 92/137 note */}
          <div className="rf-info-block rf-info-note">
            <p>
              <strong>For Forms under Section 92 or 137:</strong> In case the period within which
              a document required to be submitted under Section 92 or 137 of the Act expires after
              30/06/2018, the additional fee mentioned in the table below shall be payable:
            </p>
            <table className="rf-table rf-inline-table">
              <thead>
                <tr>
                  <th className="rf-sl">S.No.</th>
                  <th>Period of Delay</th>
                  <th>Additional Fee Payable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rf-sl">01</td>
                  <td>Delay beyond period provided under Section 92(4) of the Act <em>(MGT-7 / 7A)</em></td>
                  <td className="rf-fee">₹100 per day</td>
                </tr>
                <tr className="rf-row-alt">
                  <td className="rf-sl">02</td>
                  <td>Delay beyond period provided under Section 137(1) of the Act <em>(AOC-4 / AOC-XBRL)</em></td>
                  <td className="rf-fee">₹100 per day</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Section 5: Other Fees ── */}
          <h2 className="rf-section-heading">Other Fee to be Paid</h2>
          <div className="rf-two-col">

            <div>
              <h3 className="rf-sub-heading">Inspection of File and Charges</h3>
              <div className="rf-table-scroll">
                <table className="rf-table">
                  <thead>
                    <tr><th>Type</th><th>Charges</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>File Inspection</td><td className="rf-fee">₹ 100</td></tr>
                    <tr className="rf-row-alt"><td>Charges Inspection</td><td className="rf-fee">₹ 100</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="rf-sub-heading">Fees for Obtaining Certified Copy</h3>
              <div className="rf-table-scroll">
                <table className="rf-table">
                  <thead>
                    <tr><th>Document</th><th>Fee</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Certificate of Incorporation</td><td className="rf-fee">₹ 100</td></tr>
                    <tr className="rf-row-alt"><td>Other Certified Copies</td><td className="rf-fee">₹ 25 per page</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
