import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './depricationcompanies.css';

/* ─── Part C Data ────────────────────────────────────────────────────── */

const depreciationData = [
  { category: 'I. Buildings [NESD]', items: [
    { description: '(a) Buildings (other than factory buildings) RCC Frame Structure', life: '60 Years' },
    { description: '(b) Buildings (other than factory buildings) other than RCC Frame Structure', life: '30 Years' },
    { description: '(c) Factory buildings', life: '30 Years' },
    { description: '(d) Fences, wells, tube wells', life: '5 Years' },
    { description: '(e) Others (including temporary structure, etc.)', life: '3 Years' },
  ]},
  { category: 'II. Bridges, culverts, bunders, etc. [NESD]', items: [
    { description: 'Bridges, culverts, bunders, etc.', life: '30 Years' },
  ]},
  { category: 'III. Roads [NESD]', items: [
    { description: '(a)(i) Carpeted Roads – RCC', life: '10 Years' },
    { description: '(a)(ii) Carpeted Roads – other than RCC', life: '5 Years' },
    { description: '(b) Non-carpeted roads', life: '3 Years' },
  ]},
  { category: 'IV. Plant and Machinery – General Rate', items: [
    { description: '(a) Plant and Machinery other than continuous process plant not covered under specific industries', life: '15 Years' },
    { description: '(b) Continuous process plant for which no special rate has been prescribed [NESD]', life: '25 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Motion Picture Films', items: [
    { description: 'Cinematograph films machinery (recording/reproducing/editing/developing/printing/synchronizers/studio lights except bulbs)', life: '13 Years' },
    { description: 'Projecting equipment for exhibition of films', life: '13 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Glass Manufacturing', items: [
    { description: 'Recuperative and regenerative glass melting furnaces (except direct fire)', life: '13 Years' },
    { description: 'Moulds [NESD]', life: '8 Years' },
    { description: 'Float Glass Melting Furnaces [NESD]', life: '10 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Mines and Quarries', items: [
    { description: 'Portable underground machinery and earth moving machinery used in open cast mining [NESD]', life: '8 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Telecommunications [NESD]', items: [
    { description: 'Towers', life: '18 Years' },
    { description: 'Telecom transceivers, switching centres, transmission and other network equipment', life: '13 Years' },
    { description: 'Telecom ducts, cables and optical fibre', life: '18 Years' },
    { description: 'Satellites', life: '18 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Exploration, Production and Refining of Oil and Gas [NESD]', items: [
    { description: 'Refineries', life: '25 Years' },
    { description: 'Oil and gas assets (including wells), processing plant and facilities', life: '25 Years' },
    { description: 'Petrochemical Plant', life: '25 Years' },
    { description: 'Storage tanks and related equipment', life: '25 Years' },
    { description: 'Pipelines', life: '30 Years' },
    { description: 'Drilling Rig', life: '30 Years' },
    { description: 'Field operations (above ground) – Portable boilers, drilling tools, well-head tanks, etc.', life: '8 Years' },
    { description: 'Loggers', life: '8 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Generation, Transmission and Distribution of Power [NESD]', items: [
    { description: 'Thermal / Gas / Combined Cycle Power Generation Plant', life: '40 Years' },
    { description: 'Hydro Power Generation Plant', life: '40 Years' },
    { description: 'Nuclear Power Generation Plant', life: '40 Years' },
    { description: 'Transmission lines, cables and other network assets', life: '40 Years' },
    { description: 'Wind Power Generation Plant', life: '22 Years' },
    { description: 'Electric Distribution Plant', life: '35 Years' },
    { description: 'Gas Storage and Distribution Plant', life: '30 Years' },
    { description: 'Water Distribution Plant including pipelines', life: '30 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Manufacture of Steel', items: [
    { description: 'Sinter Plant', life: '20 Years' },
    { description: 'Blast Furnace', life: '20 Years' },
    { description: 'Coke ovens', life: '20 Years' },
    { description: 'Rolling mill in steel plant', life: '20 Years' },
    { description: 'Basic oxygen Furnace Converter', life: '25 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Manufacture of Non-Ferrous Metals', items: [
    { description: 'Metal pot line [NESD]', life: '40 Years' },
    { description: 'Bauxite crushing and grinding section [NESD]', life: '40 Years' },
    { description: 'Digester Section [NESD]', life: '40 Years' },
    { description: 'Turbine [NESD]', life: '40 Years' },
    { description: 'Equipments for Calcination [NESD]', life: '40 Years' },
    { description: 'Copper Smelter [NESD]', life: '40 Years' },
    { description: 'Roll Grinder', life: '40 Years' },
    { description: 'Soaking Pit', life: '30 Years' },
    { description: 'Annealing Furnace', life: '30 Years' },
    { description: 'Rolling Mills', life: '30 Years' },
    { description: 'Equipments for Scalping, Slitting, etc. [NESD]', life: '30 Years' },
    { description: 'Surface Miner, Ripper Dozer, etc., used in mines', life: '25 Years' },
    { description: 'Copper refining plant [NESD]', life: '25 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Medical and Surgical Operations [NESD]', items: [
    { description: 'Electrical Machinery, X-ray and electrotherapeutic apparatus and accessories; medical diagnostic equipment (Cat-scan, Ultrasound, ECG Monitors, etc.)', life: '13 Years' },
    { description: 'Other Equipments', life: '15 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Manufacture of Pharmaceuticals and Chemicals [NESD]', items: [
    { description: 'Reactors', life: '20 Years' },
    { description: 'Distillation Columns', life: '20 Years' },
    { description: 'Drying equipments / Centrifuges and Decanters', life: '20 Years' },
    { description: 'Vessel / storage tanks', life: '20 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Civil Construction', items: [
    { description: 'Concreting, Crushing, Piling Equipments and Road Making Equipments', life: '12 Years' },
    { description: 'Cranes with capacity of more than 100 tons', life: '20 Years' },
    { description: 'Cranes with capacity of less than 100 tons', life: '15 Years' },
    { description: 'Transmission line, Tunneling Equipments [NESD]', life: '10 Years' },
    { description: 'Earth-moving equipments', life: '9 Years' },
    { description: 'Others including Material Handling / Pipeline / Welding Equipments [NESD]', life: '12 Years' },
  ]},
  { category: 'IV. Plant and Machinery – Salt Works [NESD]', items: [
    { description: 'Plant and Machinery used in salt works', life: '15 Years' },
  ]},
  { category: 'V. Furniture and Fittings [NESD]', items: [
    { description: '(i) General furniture and fittings', life: '10 Years' },
    { description: '(ii) Furniture and fittings used in hotels, restaurants, boarding houses, schools, colleges, libraries, welfare centres, cinema houses, theatres, circuses; and furniture let out on hire for marriages and similar functions', life: '8 Years' },
  ]},
  { category: 'VI. Motor Vehicles [NESD]', items: [
    { description: 'Motor cycles, scooters and other mopeds', life: '10 Years' },
    { description: 'Motor buses, motor lorries, motor cars and motor taxies used in a business of running them on hire', life: '6 Years' },
    { description: 'Motor buses, motor lorries and motor cars other than those used in a business of running them on hire', life: '8 Years' },
    { description: 'Motor tractors, harvesting combines and heavy vehicles', life: '8 Years' },
    { description: 'Electrically operated vehicles including battery powered or fuel cell powered vehicles', life: '8 Years' },
  ]},
  { category: 'VII. Ships [NESD]', items: [
    { description: 'Ocean-going ships – Bulk Carriers and liner vessels', life: '25 Years' },
    { description: 'Ocean-going ships – Crude tankers, product carriers and easy chemical carriers (with or without conventional tank coatings)', life: '20 Years' },
    { description: 'Ocean-going ships – Chemicals and Acid Carriers with Stainless steel tanks', life: '25 Years' },
    { description: 'Ocean-going ships – Chemicals and Acid Carriers with other tanks', life: '20 Years' },
    { description: 'Ocean-going ships – Liquified gas carriers', life: '30 Years' },
    { description: 'Ocean-going ships – Conventional large passenger vessels used for cruise purpose also', life: '30 Years' },
    { description: 'Ocean-going ships – Coastal service ships of all categories', life: '30 Years' },
    { description: 'Ocean-going ships – Offshore supply and support vessels', life: '20 Years' },
    { description: 'Ocean-going ships – Catamarans and other high speed passenger ships or boats', life: '20 Years' },
    { description: 'Ocean-going ships – Drill ships', life: '25 Years' },
    { description: 'Ocean-going ships – Hovercrafts', life: '15 Years' },
    { description: 'Ocean-going ships – Fishing vessels with wooden hull', life: '10 Years' },
    { description: 'Ocean-going ships – Dredgers, tugs, barges, survey launches and other similar ships', life: '14 Years' },
    { description: 'Vessels ordinarily operating on inland waters – Speed boats', life: '13 Years' },
    { description: 'Vessels ordinarily operating on inland waters – Other vessels', life: '28 Years' },
  ]},
  { category: 'VIII. Aircrafts or Helicopters [NESD]', items: [
    { description: 'Aircrafts or Helicopters', life: '20 Years' },
  ]},
  { category: 'IX. Railways [NESD]', items: [
    { description: 'Railway sidings, locomotives, rolling stocks, tramways and railways used by concerns (excluding railway concerns)', life: '15 Years' },
  ]},
  { category: 'X. Ropeway Structures [NESD]', items: [
    { description: 'Ropeway structures', life: '15 Years' },
  ]},
  { category: 'XI. Office Equipment [NESD]', items: [
    { description: 'Office equipment', life: '5 Years' },
  ]},
  { category: 'XII. Computers and Data Processing Units [NESD]', items: [
    { description: '(i) Servers and networks', life: '6 Years' },
    { description: '(ii) End user devices, such as desktops, laptops, etc.', life: '3 Years' },
  ]},
  { category: 'XIII. Laboratory Equipment [NESD]', items: [
    { description: '(i) General laboratory equipment', life: '10 Years' },
    { description: '(ii) Laboratory equipments used in educational institutions', life: '5 Years' },
  ]},
  { category: 'XIV. Electrical Installations and Equipment [NESD]', items: [
    { description: 'Electrical Installations and Equipment', life: '10 Years' },
  ]},
  { category: 'XV. Hydraulic Works, Pipelines and Sluices [NESD]', items: [
    { description: 'Hydraulic works, pipelines and sluices', life: '15 Years' },
  ]},
];

const exampleRevenueRows = [
  { year: 'Year 1',  revenue: '5',     remark: 'Actual' },
  { year: 'Year 2',  revenue: '7.5',   remark: 'Estimate *' },
  { year: 'Year 3',  revenue: '10',    remark: 'Estimate *' },
  { year: 'Year 4',  revenue: '12.5',  remark: 'Estimate *' },
  { year: 'Year 5',  revenue: '17.5',  remark: 'Estimate *' },
  { year: 'Year 6',  revenue: '20',    remark: 'Estimate *' },
  { year: 'Year 7',  revenue: '23',    remark: 'Estimate *' },
  { year: 'Year 8',  revenue: '27',    remark: 'Estimate *' },
  { year: 'Year 9',  revenue: '31',    remark: 'Estimate *' },
  { year: 'Year 10', revenue: '34',    remark: 'Estimate *' },
  { year: 'Year 11', revenue: '38',    remark: 'Estimate *' },
  { year: 'Year 12', revenue: '41',    remark: 'Estimate *' },
  { year: 'Year 13', revenue: '46',    remark: 'Estimate *' },
  { year: 'Year 14', revenue: '50',    remark: 'Estimate *' },
  { year: 'Year 15', revenue: '53',    remark: 'Estimate *' },
  { year: 'Year 16', revenue: '57',    remark: 'Estimate *' },
  { year: 'Year 17', revenue: '60',    remark: 'Estimate *' },
  { year: 'Year 18', revenue: '67.5',  remark: 'Estimate *' },
  { year: 'Total',   revenue: '600',   remark: '' },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function DepricationCompanies() {
  const [search, setSearch] = useState('');
  const q = search.toLowerCase();

  const filteredData = depreciationData.map(group => ({
    ...group,
    items: group.items.filter(item =>
      !q || item.description.toLowerCase().includes(q) || group.category.toLowerCase().includes(q)
    ),
  })).filter(group => group.items.length > 0);

  return (
    <>
      <Navbar />
      <div className="dep-page">
        <div className="dep-content">

          <h1 className="dep-page-title">Depreciation Rates — Companies Act 2013</h1>
          <p className="dep-subtitle">
            Schedule II — Useful Lives to Compute Depreciation &nbsp;|&nbsp;
            <strong>Notified Date: 01/04/2014</strong>
          </p>

          {/* ── Part A ── */}
          <h2 className="dep-part-heading">PART 'A'</h2>

          <div className="dep-info-block">
            <p><strong>1.</strong> Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life. The depreciable amount of an asset is the cost of an asset or other amount substituted for cost, less its residual value. The useful life of an asset is the period over which an asset is expected to be available for use by an entity, or the number of production or similar units expected to be obtained from the asset by the entity.</p>
            <p><strong>2.</strong> For the purpose of this Schedule, the term depreciation includes amortisation.</p>
            <p><strong>3.</strong> Without prejudice to the foregoing provisions of paragraph 1 —</p>
            <p className="dep-indent"><strong>(i)</strong> The useful life of an asset shall not ordinarily be different from the useful life specified in Part C and the residual value of an asset shall not be more than five per cent. of the original cost of the asset:</p>
            <div className="dep-note-box">
              <strong>Proviso:</strong> Where a company adopts a useful life different from what is specified in Part C, or uses a residual value different from the limit specified above, the financial statements shall disclose such difference and provide justification duly supported by technical advice.
            </div>
            <p className="dep-indent"><strong>(ii)</strong> For intangible assets, the provisions of the accounting standards applicable for the time being in force shall apply, except in case of intangible assets (Toll Roads) created under 'Build, Operate and Transfer', 'Build, Own, Operate and Transfer' or any other form of public private partnership route in case of road projects.</p>
            <p className="dep-indent">Amortisation in such cases may be done as follows —</p>
          </div>

          {/* Amortisation formula */}
          <div className="dep-formula-box">
            <p className="dep-formula-label"><strong>(a) Mode of Amortisation</strong></p>
            <div className="dep-formula">
              <div className="dep-formula-row">
                <span className="dep-formula-term">Amortisation Rate</span>
                <span className="dep-formula-eq">=</span>
                <span className="dep-formula-frac">
                  <span className="dep-frac-num">Amortisation Amount</span>
                  <span className="dep-frac-line"></span>
                  <span className="dep-frac-den">Cost of Intangible Assets (A)</span>
                </span>
                <span className="dep-formula-eq">× 100</span>
              </div>
              <div className="dep-formula-row" style={{marginTop:'14px'}}>
                <span className="dep-formula-term">Amortisation Amount</span>
                <span className="dep-formula-eq">=</span>
                <span className="dep-formula-frac">
                  <span className="dep-frac-num">Cost of Intangible Assets (A) × Actual Revenue for the year (B)</span>
                  <span className="dep-frac-line"></span>
                  <span className="dep-frac-den">Projected Revenue from Intangible Asset till end of concession period (C)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Meaning table */}
          <div className="dep-info-block">
            <p><strong>(b) Meaning of particulars:</strong></p>
          </div>
          <div className="dep-table-scroll">
            <table className="dep-table meaning-table">
              <tbody>
                <tr>
                  <td><strong>Cost of Intangible Assets (A)</strong></td>
                  <td>Cost incurred by the company in accordance with the accounting standards.</td>
                </tr>
                <tr className="row-alt">
                  <td><strong>Actual Revenue for the year (B)</strong></td>
                  <td>Actual revenue (Toll Charges) received during the accounting year.</td>
                </tr>
                <tr>
                  <td><strong>Projected Revenue from Intangible Asset (C)</strong></td>
                  <td>Total projected revenue from the Intangible Assets as provided to the project lender at the time of financial closure / agreement.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dep-info-block">
            <p>The amortisation amount or rate should ensure that the whole of the cost of the intangible asset is amortised over the concession period.</p>
            <p>Revenue shall be reviewed at the end of each financial year and projected revenue shall be adjusted to reflect any changes in estimates that will lead to actual collection at the end of the concession period.</p>
          </div>

          {/* Example */}
          <div className="dep-note-box">
            <strong>(c) Example:</strong>
            <ul className="dep-example-list">
              <li>Cost of creation of Intangible Assets: <strong>Rs. 500 Crores</strong></li>
              <li>Total period of Agreement: <strong>20 Years</strong></li>
              <li>Time used for creation of Intangible Assets: <strong>2 Years</strong></li>
              <li>Intangible Assets to be amortised in: <strong>18 Years</strong></li>
              <li>Total revenue to be generated over the period: <strong>Rs. 600 Crores</strong></li>
            </ul>
          </div>

          <div className="dep-table-scroll">
            <table className="dep-table example-table">
              <thead>
                <tr>
                  <th>Year No.</th>
                  <th>Revenue (Rs. Crores)</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {exampleRevenueRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'row-alt'} style={r.year === 'Total' ? {fontWeight:'700', background:'#e8f0fb'} : {}}>
                    <td>{r.year}</td>
                    <td style={{textAlign:'right'}}>{r.revenue}</td>
                    <td>{r.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dep-note-box">
            Based on this, the charge for first year would be <strong>Rs. 4.16 Crore (approx.)</strong> (i.e. Rs. 5 / Rs. 600 × Rs. 500 Crores) which would be charged to profit and loss, and <strong>0.83%</strong> (i.e. Rs. 4.16 Crore / Rs. 500 Crore × 100) is the amortisation rate for the first year.
            <br /><br />
            Where a company arrives at the amortisation amount in respect of the said Intangible Assets in accordance with any method as per the applicable Accounting Standards, it shall disclose the same.
          </div>

          {/* ── Part B ── */}
          <h2 className="dep-part-heading">PART 'B'</h2>
          <div className="dep-info-block">
            <p><strong>4.</strong> The useful life or residual value of any specific asset, as notified for accounting purposes by a Regulatory Authority constituted under an Act of Parliament or by the Central Government shall be applied in calculating the depreciation to be provided for such asset irrespective of the requirements of this Schedule.</p>
          </div>

          {/* ── Part C / Rate Chart ── */}
          <h2 className="dep-part-heading">Depreciation Rate Chart</h2>
          <p className="dep-subtitle" style={{marginBottom:'16px'}}>As per Part "C" of Schedule II of The Companies Act 2013</p>

          {/* Search */}
          <div className="dep-search-bar">
            <input
              type="text"
              placeholder="Search by asset type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="dep-clear-btn" onClick={() => setSearch('')}>✕</button>}
          </div>

          <div className="dep-table-scroll">
            <table className="dep-table rate-table">
              <thead>
                <tr>
                  <th className="col-asset">Nature of Assets</th>
                  <th className="col-life">Useful Life</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 && (
                  <tr><td colSpan={2} className="no-results">No matching assets found.</td></tr>
                )}
                {filteredData.map((group, gi) => (
                  <React.Fragment key={gi}>
                    <tr className="category-row">
                      <td colSpan={2}><strong>{group.category}</strong></td>
                    </tr>
                    {group.items.map((item, ii) => (
                      <tr key={ii} className={ii % 2 === 0 ? '' : 'row-alt'}>
                        <td className="asset-desc">{item.description}</td>
                        <td className="life-cell">{item.life}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Notes ── */}
          <h2 className="dep-part-heading" style={{marginTop:'40px'}}>Notes</h2>
          <div className="dep-notes-block">
            <p><strong>1.</strong> "Factory buildings" does not include offices, godowns, staff quarters.</p>
            <p><strong>2.</strong> Where, during any financial year, any addition has been made to any asset, or where any asset has been sold, discarded, demolished or destroyed, the depreciation on such assets shall be calculated on a pro rata basis from the date of such addition or, as the case may be, up to the date on which such asset has been sold, discarded, demolished or destroyed.</p>
            <p><strong>3.</strong> The following information shall also be disclosed in the accounts: (i) depreciation methods used; and (ii) the useful lives of the assets for computing depreciation, if they are different from the life specified in the Schedule.</p>
            <p><strong>4(a)</strong> Useful life specified in Part C of the Schedule is for the whole of the asset. Where the cost of a part of the asset is significant to the total cost of the asset and the useful life of that part is different from the useful life of the remaining asset, useful life of that significant part shall be determined separately.</p>
            <p><strong>4(b)</strong> The requirement under sub-paragraph (a) shall be voluntary in respect of the financial year commencing on or after 1st April 2014 and mandatory for financial statements in respect of financial years commencing on or after 1st April 2015.</p>
            <p><strong>5.</strong> Depreciable amount is the cost of an asset, or other amount substituted for cost, less its residual value. Ordinarily, the residual value of an asset is often insignificant but it should generally be not more than 5% of the original cost of the asset.</p>
            <p><strong>6.</strong> The useful lives of assets working on shift basis have been specified in the Schedule based on their single shift working. Except for assets in respect of which no extra shift depreciation is permitted (indicated by NESD in Part C above), if an asset is used for any time during the year for double shift, the depreciation will increase by 50% for that period and in case of triple shift the depreciation shall be calculated on the basis of 100% for that period.</p>
            <p><strong>7.</strong> From the date this Schedule comes into effect, the carrying amount of the asset as on that date —
              <br />(a) shall be depreciated over the remaining useful life of the asset as per this Schedule;
              <br />(b) after retaining the residual value, may be recognised in the opening balance of retained earnings where the remaining useful life of an asset is nil.
            </p>
            <p><strong>8.</strong> "Continuous process plant" means a plant which is required and designed to operate for twenty-four hours a day.</p>
          </div>

          <p className="dep-last-updated">Last updated: 01.04.2014 (Notified Date)</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
