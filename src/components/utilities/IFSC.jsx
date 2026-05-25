import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './ifsc.css';

const banks = [
  { name: 'Allahabad Bank',                 slug: 'allahabad-bank' },
  { name: 'Andhra Bank',                    slug: 'andhra-bank' },
  { name: 'Axis Bank',                      slug: 'axis-bank' },
  { name: 'Bank of Baroda',                 slug: 'bank-of-baroda' },
  { name: 'Bank of India',                  slug: 'bank-of-india' },
  { name: 'Bank of Maharashtra',            slug: 'bank-of-maharashtra' },
  { name: 'Canara Bank',                    slug: 'canara-bank' },
  { name: 'Central Bank of India',          slug: 'central-bank-of-india' },
  { name: 'Corporation Bank',               slug: 'corporation-bank' },
  { name: 'Dena Bank',                      slug: 'dena-bank' },
  { name: 'HDFC Bank',                      slug: 'hdfc-bank' },
  { name: 'ICICI Bank',                     slug: 'icici-bank' },
  { name: 'IDBI Bank Limited',              slug: 'idbi-bank' },
  { name: 'Indian Bank',                    slug: 'indian-bank' },
  { name: 'Indian Overseas Bank',           slug: 'indian-overseas-bank' },
  { name: 'Oriental Bank of Commerce',      slug: 'oriental-bank-of-commerce' },
  { name: 'Punjab & Sindh Bank',            slug: 'punjab-and-sindh-bank' },
  { name: 'Punjab National Bank',           slug: 'punjab-national-bank' },
  { name: 'State Bank of Bikaner & Jaipur', slug: 'state-bank-of-bikaner-and-jaipur' },
  { name: 'State Bank of Hyderabad',        slug: 'state-bank-of-hyderabad' },
  { name: 'State Bank of India',            slug: 'state-bank-of-india' },
  { name: 'State Bank of Indore',           slug: 'state-bank-of-indore' },
  { name: 'State Bank of Mysore',           slug: 'state-bank-of-mysore' },
  { name: 'State Bank of Patiala',          slug: 'state-bank-of-patiala' },
  { name: 'State Bank of Travancore',       slug: 'state-bank-of-travancore' },
  { name: 'Syndicate Bank',                 slug: 'syndicate-bank' },
  { name: 'The Jammu and Kashmir Bank',     slug: 'jammu-and-kashmir-bank' },
  { name: 'UCO Bank',                       slug: 'uco-bank' },
  { name: 'Union Bank of India',            slug: 'union-bank-of-india' },
  { name: 'United Bank of India',           slug: 'united-bank-of-india' },
  { name: 'Vijaya Bank',                    slug: 'vijaya-bank' },
  { name: 'Yes Bank',                       slug: 'yes-bank' },
];

function getInitials(name) {
  return name
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
}

export default function IFSC() {
  const [search, setSearch] = useState('');
  const q = search.trim().toLowerCase();
  const filtered = banks.filter(b => !q || b.name.toLowerCase().includes(q));

  return (
    <>
      <Navbar />
      <div className="ifsc-page">
        <div className="ifsc-content">

          <h1 className="ifsc-page-title">List of IFSC Codes</h1>
          <p className="ifsc-subtitle">
            IFSC (Indian Financial System Code) is an 11-character alphanumeric code used for NEFT, RTGS
            and IMPS transactions. Select a bank below to look up branch-wise IFSC codes.
          </p>

          {/* Search */}
          <div className="ifsc-search-bar">
            <input
              type="text"
              placeholder="Search by bank name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="ifsc-clear-btn" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Bank Grid */}
          {filtered.length === 0 ? (
            <p className="ifsc-no-results">No matching banks found.</p>
          ) : (
            <div className="ifsc-grid">
              {filtered.map(bank => (
                <a
                  key={bank.slug}
                  className="ifsc-card"
                  href={`https://bankifsccode.com/${bank.slug}-ifsc-code.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View IFSC codes — ${bank.name}`}
                >
                  <div className="ifsc-card-avatar">{getInitials(bank.name)}</div>
                  <span className="ifsc-card-name">{bank.name}</span>
                  <span className="ifsc-card-link">View IFSC Codes ↗</span>
                </a>
              ))}
            </div>
          )}

          <p className="ifsc-note">
            * Clicking a bank will open the branch IFSC directory on an external site. IFSC codes
            are assigned by the Reserve Bank of India (RBI).
          </p>

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
