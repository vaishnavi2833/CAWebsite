import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './llpfees.css';

export default function LLPFees() {
  return (
    <>
      <Navbar />
      <div className="llpf-page">
        <div className="llpf-content">

          <h1 className="llpf-page-title">Limited Liability Partnership Fees</h1>
          <p className="llpf-subtitle">Annexure A &nbsp;|&nbsp; LLP Act &amp; LLP Rules</p>

          {/* ── Section 1 ── */}
          <h2 className="llpf-section-heading">1. Registration Fee</h2>
          <p className="llpf-section-desc">
            For registration of an LLP including conversion of a firm or a private company or an
            unlisted public company into an LLP:
          </p>
          <div className="llpf-table-scroll">
            <table className="llpf-table">
              <thead>
                <tr>
                  <th>Contribution Slab</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Contribution does not exceed ₹1 Lakh', '₹ 500'],
                  ['Contribution exceeds ₹1 Lakh but does not exceed ₹5 Lakhs', '₹ 2,000'],
                  ['Contribution exceeds ₹5 Lakhs but does not exceed ₹10 Lakhs', '₹ 4,000'],
                  ['Contribution exceeds ₹10 Lakhs', '₹ 5,000'],
                ].map(([slab, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'llpf-row-alt' : ''}>
                    <td>{slab}</td>
                    <td className="llpf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 2 ── */}
          <div className="llpf-info-block">
            <p>
              <strong>2.</strong> The difference between the fees payable on the increased slab of
              contribution and the fees paid on the preceding slab of contribution shall be paid
              through <strong>Form 3</strong>.
            </p>
          </div>

          {/* ── Section 3 ── */}
          <h2 className="llpf-section-heading llpf-section-heading--gap">3. Filing Fee</h2>
          <p className="llpf-section-desc">
            For filing, registering or recording any document, form, statement, notice, Statement
            of Accounts and Solvency, annual return and an application along with the Statement for
            conversion by this Act or by these rules:
          </p>
          <div className="llpf-table-scroll">
            <table className="llpf-table">
              <thead>
                <tr>
                  <th>Contribution Slab</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Contribution does not exceed ₹1 Lakh', '₹ 50'],
                  ['Contribution exceeds ₹1 Lakh but does not exceed ₹5 Lakhs', '₹ 100'],
                  ['Contribution exceeds ₹5 Lakhs but does not exceed ₹10 Lakhs', '₹ 150'],
                  ['Contribution exceeds ₹10 Lakhs', '₹ 200'],
                ].map(([slab, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'llpf-row-alt' : ''}>
                    <td>{slab}</td>
                    <td className="llpf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 4 ── */}
          <h2 className="llpf-section-heading llpf-section-heading--gap">4. Application Fees</h2>
          <p className="llpf-section-desc">
            Fee for any application other than application for conversion of a firm or a private
            company or an unlisted public company into LLP:
          </p>
          <div className="llpf-table-scroll">
            <table className="llpf-table">
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Application for reservation of name u/s 16', '₹ 200'],
                  ['Application for direction to change the name u/s 18 ¹', '₹ 5,000'],
                  ['Application for reservation of name under Rule 18(3)', '₹ 10,000'],
                  ['Application for renewal of name under Rule 18(3)', '₹ 5,000'],
                  ['Application for obtaining DPIN under Rule 10(5)', '₹ 100'],
                ].map(([purpose, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'llpf-row-alt' : ''}>
                    <td>{purpose}</td>
                    <td className="llpf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 5 ── */}
          <h2 className="llpf-section-heading llpf-section-heading--gap">5. Inspection and Certified Copy Fee</h2>
          <div className="llpf-table-scroll">
            <table className="llpf-table">
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Inspection of documents of an LLP under Section 36', '₹ 50'],
                  ['Copy or extract of any document under Section 36, certified by Registrar', '₹ 5 per page or fractional part thereof'],
                ].map(([purpose, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'llpf-row-alt' : ''}>
                    <td>{purpose}</td>
                    <td className="llpf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 6 ── */}
          <h2 className="llpf-section-heading llpf-section-heading--gap">6. Fee for Foreign LLP</h2>
          <p className="llpf-section-desc">
            Fee for filing any form, Statement of Account and Solvency, notice or document by a
            foreign limited liability partnership:
          </p>
          <div className="llpf-table-scroll">
            <table className="llpf-table">
              <thead>
                <tr>
                  <th>Purpose</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Filing a document under Rule 34(1)', '₹ 5,000'],
                  ['Any other form, Statement of Account and Solvency, notice or document', '₹ 1,000'],
                ].map(([purpose, fee], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'llpf-row-alt' : ''}>
                    <td>{purpose}</td>
                    <td className="llpf-fee">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="llpf-note-block">
            <p><strong>Note:</strong></p>
            <p>
              ¹ The fee for application for direction to change name u/s 18 was ₹10,000/- prior
              to the LLP (Amendment) Rules, 2010.
            </p>
          </div>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
