import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './goldsilverrates.css';

const rates = [
  { date: '31.03.2024', gold: 69135, silver: 77800 },
  { date: '31.03.2023', gold: 59512, silver: 71582 },
  { date: '31.03.2022', gold: 51278, silver: 66990 },
  { date: '31.03.2021', gold: 44013, silver: 62862 },
  { date: '31.03.2020', gold: 43000, silver: 39200 },
  { date: '31.03.2019', gold: 31640, silver: 37245 },
  { date: '31.03.2018', gold: 30680, silver: 38355 },
  { date: '31.03.2017', gold: 28950, silver: 42000 },
  { date: '31.03.2016', gold: 28340, silver: 36990 },
  { date: '31.03.2015', gold: 26245, silver: 37825 },
  { date: '31.03.2014', gold: 28470, silver: 43070 },
  { date: '31.03.2013', gold: 29610, silver: 54030 },
  { date: '31.03.2012', gold: 28040, silver: 56290 },
  { date: '31.03.2011', gold: 20775, silver: 56900 },
  { date: '31.03.2010', gold: 16320, silver: 27255 },
  { date: '31.03.2009', gold: 15105, silver: 22165 },
  { date: '31.03.2008', gold: 12125, silver: 23625 },
  { date: '31.03.2007', gold: 9395,  silver: 19520 },
  { date: '31.03.2006', gold: 8490,  silver: 17405 },
  { date: '31.03.2005', gold: 6180,  silver: 10675 },
  { date: '31.03.2004', gold: 6065,  silver: 11770 },
  { date: '31.03.2003', gold: 5310,  silver: 7695  },
  { date: '31.03.2002', gold: 5010,  silver: 7875  },
  { date: '31.03.2001', gold: 4190,  silver: 7215  },
  { date: '31.03.2000', gold: 4380,  silver: 7900  },
  { date: '31.03.1999', gold: 4235,  silver: 7615  },
  { date: '31.03.1998', gold: 4045,  silver: 8560  },
  { date: '31.03.1997', gold: 4725,  silver: 7345  },
  { date: '31.03.1996', gold: 5160,  silver: 7346  },
  { date: '31.03.1995', gold: 4680,  silver: 6335  },
  { date: '31.03.1994', gold: 4598,  silver: 7124  },
  { date: '31.03.1993', gold: 4140,  silver: 5489  },
  { date: '31.03.1992', gold: 4334,  silver: 8040  },
  { date: '31.03.1991', gold: 3466,  silver: 6646  },
  { date: '31.03.1990', gold: 3200,  silver: 6463  },
  { date: '31.03.1989', gold: 3140,  silver: 6755  },
  { date: '31.03.1988', gold: 3130,  silver: 6066  },
  { date: '31.03.1987', gold: 2570,  silver: 4794  },
  { date: '31.03.1986', gold: 2140,  silver: 4015  },
  { date: '31.03.1985', gold: 2130,  silver: 3955  },
  { date: '31.03.1984', gold: 1975,  silver: 3570  },
  { date: '31.03.1983', gold: 1800,  silver: 3105  },
  { date: '31.03.1982', gold: 1700,  silver: 2720  },
  { date: '31.03.1981', gold: 1670,  silver: 271   },
];

function fmt(n) {
  return n.toLocaleString('en-IN');
}

export default function GoldSilverRates() {
  const [search, setSearch] = useState('');
  const q = search.trim();
  const filtered = rates.filter(r => !q || r.date.includes(q));

  return (
    <>
      <Navbar />
      <div className="gs-page">
        <div className="gs-content">

          <h1 className="gs-page-title">Gold &amp; Silver Rates</h1>
          <p className="gs-subtitle">
            Historical rates as on 31st March each year &nbsp;|&nbsp;
            Gold: ₹ per 10 grams (Standard 24 carats) &nbsp;|&nbsp; Silver: ₹ per kg
          </p>

          {/* Search */}
          <div className="gs-search-bar">
            <input
              type="text"
              placeholder="Search by year (e.g. 2015)..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="gs-clear-btn" onClick={() => setSearch('')}>✕</button>
            )}
          </div>

          {/* Table */}
          <div className="gs-table-scroll">
            <table className="gs-table">
              <thead>
                <tr>
                  <th>Year (as on)</th>
                  <th>Gold Rate (₹ / 10 grams)<br /><span className="gs-th-sub">Standard 24 carats</span></th>
                  <th>Silver Rate (₹ / kg)</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr><td colSpan={3} className="gs-no-results">No matching records found.</td></tr>
                )}
                {filtered.map((row, i) => (
                  <tr key={row.date} className={i % 2 === 1 ? 'gs-row-alt' : ''}>
                    <td className="gs-date">{row.date}</td>
                    <td className="gs-gold">{fmt(row.gold)}</td>
                    <td className="gs-silver">{fmt(row.silver)}</td>
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
