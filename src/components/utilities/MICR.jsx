import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './micr.css';

const BASE = 'https://dreamware.co.in/kb/files/';

const banks = [
  { name: 'Allahabad Bank',                 url: BASE + 'allahabad bank micr.xlsx' },
  { name: 'Andhra Bank',                    url: BASE + 'andhra bank micr.xlsx' },
  { name: 'Bank of Baroda',                 url: BASE + 'BOB micr.xlsx' },
  { name: 'Bank of India',                  url: BASE + 'BOI micr.xlsx' },
  { name: 'Bank of Maharashtra',            url: BASE + 'BOM micr.xlsx' },
  { name: 'Canara Bank',                    url: BASE + 'canara bank micr.xlsx' },
  { name: 'Central Bank of India',          url: BASE + 'cenral bank micr.xlsx' },
  { name: 'Corporation Bank',               url: BASE + 'corporation micr.xlsx' },
  { name: 'Dena Bank',                      url: BASE + 'dena bank micr.xlsx' },
  { name: 'HDFC Bank',                      url: BASE + 'hdfc bank micr.xlsx' },
  { name: 'ICICI Bank',                     url: BASE + 'ICICI bank MICR.xlsx' },
  { name: 'IDBI Bank Limited',              url: BASE + 'idbi bank micr.xlsx' },
  { name: 'Indian Bank',                    url: BASE + 'indian bank micr.xlsx' },
  { name: 'Indian Overseas Bank',           url: BASE + 'indian overseas bank micr.xlsx' },
  { name: 'Oriental Bank of Commerce',      url: BASE + 'oriental bank micr.xlsx' },
  { name: 'Punjab & Sindh Bank',            url: BASE + 'punjab and sindh bank MICR.xlsx' },
  { name: 'Punjab National Bank',           url: BASE + 'pnb micr.xlsx' },
  { name: 'Reserve Bank of India',          url: BASE + 'RBI MICR.xlsx' },
  { name: 'State Bank of Bikaner & Jaipur', url: BASE + 'sbbj micr.xlsx' },
  { name: 'State Bank of Hyderabad',        url: BASE + 'hyderabad micr.xlsx' },
  { name: 'State Bank of India',            url: BASE + 'sbi micr.xlsx' },
  { name: 'State Bank of Indore',           url: BASE + 'SB Indore micr.xlsx' },
  { name: 'State Bank of Mysore',           url: BASE + 'sbm micr.xlsx' },
  { name: 'State Bank of Patiala',          url: BASE + 'sbp micr.xlsx' },
  { name: 'State Bank of Travancore',       url: BASE + 'sbt micr.xlsx' },
  { name: 'Syndicate Bank',                 url: BASE + 'syndicate micr.xlsx' },
  { name: 'The Jammu and Kashmir Bank',     url: BASE + 'jammu kashmir MICR.xlsx' },
  { name: 'UCO Bank',                       url: BASE + 'uco micr.xlsx' },
  { name: 'Union Bank of India',            url: BASE + 'union bank micr.xlsx' },
  { name: 'United Bank of India',           url: BASE + 'united bank micr.xlsx' },
  { name: 'Vijaya Bank',                    url: BASE + 'vijya bank micr.xlsx' },
];

function getInitials(name) {
  return name
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

export default function MICR() {
  const [search, setSearch] = useState('');
  const q = search.trim().toLowerCase();
  const filtered = banks.filter(b => !q || b.name.toLowerCase().includes(q));

  return (
    <>
      <Navbar />
      <div className="micr-page">
        <div className="micr-content">

          <h1 className="micr-page-title">List of MICR Codes</h1>
          <p className="micr-subtitle">
            List of BSR codes of branches authorised to collect direct taxes. MICR (Magnetic Ink
            Character Recognition) is a 9-digit code used to identify bank branches for cheque
            processing and direct tax collections.
          </p>

          {/* Search */}
          <div className="micr-search-bar">
            <input
              type="text"
              placeholder="Search by bank name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="micr-clear-btn" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Bank Grid */}
          {filtered.length === 0 ? (
            <p className="micr-no-results">No matching banks found.</p>
          ) : (
            <div className="micr-grid">
              {filtered.map(bank => (
                <a
                  key={bank.name}
                  className="micr-card"
                  href={bank.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Download MICR codes — ${bank.name}`}
                >
                  <div className="micr-card-avatar">{getInitials(bank.name)}</div>
                  <span className="micr-card-name">{bank.name}</span>
                  <span className="micr-card-link">Download MICR File ↗</span>
                </a>
              ))}
            </div>
          )}

          <p className="micr-note">
            * Clicking a bank will open the branch MICR / BSR code directory on an external site.
            MICR codes are assigned by the Reserve Bank of India (RBI) and are printed at the bottom
            of cheque leaves.
          </p>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
