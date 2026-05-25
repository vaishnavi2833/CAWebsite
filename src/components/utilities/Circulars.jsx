import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './circulars.css';

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function monthAgoStr() {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  return d.toISOString().split('T')[0];
}

export default function Circulars() {
  const [fromDate,   setFromDate]   = useState(monthAgoStr());
  const [toDate,     setToDate]     = useState(todayStr());
  const [filterType, setFilterType] = useState('All');
  const [rowsHtml,   setRowsHtml]   = useState(
    '<tr><td colspan="3" class="circ-empty">No Records Found!</td></tr>'
  );
  const [pages,      setPages]      = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading,    setLoading]    = useState(false);
  const initialised = useRef(false);

  const fetchCirculars = (page = 1) => {
    setLoading(true);
    const body = new URLSearchParams();
    body.append('from_date',   fromDate);
    body.append('to_date',     toDate);
    body.append('filter_type', filterType);
    body.append('page',        page);

    fetch('/fetch_circulars.php', { method: 'POST', body, credentials: 'omit' })
      .then(r => r.json())
      .then(data => {
        setRowsHtml(data.data || '<tr><td colspan="3" class="circ-empty">No Records Found!</td></tr>');
        setActivePage(page);
        const total = parseInt(data.totalPages, 10) || 0;
        setPages(Array.from({ length: total }, (_, i) => i + 1));
      })
      .catch(() => {
        setRowsHtml('<tr><td colspan="3" class="circ-empty">Error loading data!</td></tr>');
      })
      .finally(() => setLoading(false));
  };

  // Run once on mount
  useEffect(() => {
    if (!initialised.current) {
      initialised.current = true;
      fetchCirculars(1);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = () => fetchCirculars(1);

  return (
    <>
      <Navbar />
      <div className="circ-page">
        <div className="circ-content">

          <h1 className="circ-page-title">Circulars / Notifications</h1>

          {/* Filter bar */}
          <div className="circ-filter-bar">
            <div className="circ-filter-group">
              <label htmlFor="circ-from">From Date</label>
              <input
                id="circ-from"
                type="date"
                value={fromDate}
                onChange={e => setFromDate(e.target.value)}
                className="circ-input"
              />
            </div>

            <div className="circ-filter-group">
              <label htmlFor="circ-to">To Date</label>
              <input
                id="circ-to"
                type="date"
                value={toDate}
                onChange={e => setToDate(e.target.value)}
                className="circ-input"
              />
            </div>

            <div className="circ-filter-group">
              <label htmlFor="circ-type">Select</label>
              <select
                id="circ-type"
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                className="circ-input"
              >
                <option value="All">All</option>
                <option value="Circular">Circular</option>
                <option value="Notification">Notification</option>
              </select>
            </div>

            <button className="circ-search-btn" onClick={handleSearch} disabled={loading}>
              {loading ? 'Loading…' : 'Search'}
            </button>
          </div>

          {/* Table */}
          <div className="circ-table-scroll">
            <table className="circ-table">
              <thead>
                <tr>
                  <th>Page Name</th>
                  <th>Circular / Notification Number</th>
                  <th>Circular / Notification Date</th>
                </tr>
              </thead>
              <tbody dangerouslySetInnerHTML={{ __html: rowsHtml }} />
            </table>
          </div>

          {/* Pagination */}
          {pages.length > 1 && (
            <div className="circ-pagination">
              {pages.map(p => (
                <button
                  key={p}
                  className={`circ-page-btn${p === activePage ? ' active' : ''}`}
                  onClick={() => fetchCirculars(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
