import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './depricationit.css';

/* ─── Data ───────────────────────────────────────────────────────────── */

const depData = [
  {
    part: 'PART A – TANGIBLE ASSETS',
    category: 'I. BUILDING',
    items: [
      { desc: '(1) Buildings used mainly for residential purposes (except hotels and boarding houses)', rate: '5%' },
      { desc: '(2) Buildings other than those used mainly for residential purposes and not covered by sub-items (1) and (3)', rate: '10%' },
      { desc: '(3) Buildings acquired on or after 1st September 2002 for installing machinery/plant forming part of water supply project or water treatment system for infrastructure facilities u/s 80-IA(4)(i)', rate: '40%' },
      { desc: '(4) Purely temporary erections such as wooden structures', rate: '40%' },
    ],
  },
  {
    category: 'II. FURNITURE AND FITTINGS',
    items: [
      { desc: 'Furniture and fittings including electrical fittings', rate: '10%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – General',
    items: [
      { desc: '(1) Machinery and plant other than those covered by sub-items (2), (3) and (8)', rate: '15%' },
      { desc: '(2) Motor cars (other than those used in a business of running them on hire) acquired or put to use on or after 1st April 1990', rate: '15%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3): Special Rates',
    items: [
      { desc: '(i) Aeroplanes – Aeroengines', rate: '40%' },
      { desc: '(ii) Motor buses, motor lorries and motor taxis used in a business of running them on hire', rate: '30%' },
      { desc: '(iii) Commercial vehicle acquired on or after 1st October 1998 but before 1st April 1999 and put to use before 1st April 1999 [third proviso to s.32(1)(ii)]', rate: '40%' },
      { desc: '(iv) New commercial vehicle acquired on or after 1st October 1998 but before 1st April 1999 in replacement of condemned vehicle of over 15 years of age and put to use before 1st April 1999', rate: '40%' },
      { desc: '(v) New commercial vehicle acquired on or after 1st April 1999 but before 1st April 2000 in replacement of condemned vehicle of over 15 years of age and put to use before 1st April 2000', rate: '40%' },
      { desc: '(vi) New commercial vehicle acquired on or after 1st April 2001 but before 1st April 2002 and put to use before 1st April 2002', rate: '40%' },
      { desc: '(via) New commercial vehicle acquired on or after 1st January 2009 but before 1st October 2009 and put to use before 1st October 2009', rate: '40%' },
      { desc: '(vii) Moulds used in rubber and plastic goods factories', rate: '30%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3)(viii): Air Pollution Control Equipment',
    items: [
      { desc: 'Electrostatic precipitation systems', rate: '40%' },
      { desc: 'Felt-filter systems', rate: '40%' },
      { desc: 'Dust collector systems', rate: '40%' },
      { desc: 'Scrubber — counter current / venturi / packed bed / cyclonic scrubbers', rate: '40%' },
      { desc: 'Ash handling system and evacuation system', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3)(ix): Water Pollution Control Equipment',
    items: [
      { desc: '(a) Mechanical screen systems', rate: '40%' },
      { desc: '(b) Aerated detritus chambers (including air compressor)', rate: '40%' },
      { desc: '(c) Mechanically skimmed oil and grease removal systems', rate: '40%' },
      { desc: '(d) Chemical feed systems and flash mixing equipment', rate: '40%' },
      { desc: '(e) Mechanical flocculators and mechanical reactors', rate: '40%' },
      { desc: '(f) Diffused air / mechanically aerated activated sludge systems', rate: '40%' },
      { desc: '(g) Aerated lagoon systems', rate: '40%' },
      { desc: '(h) Biofilters', rate: '40%' },
      { desc: '(i) Methane-recovery anaerobic digester systems', rate: '40%' },
      { desc: '(j) Air floatation systems', rate: '40%' },
      { desc: '(k) Air/steam stripping systems', rate: '40%' },
      { desc: '(l) Urea Hydrolysis systems', rate: '40%' },
      { desc: '(m) Marine outfall systems', rate: '40%' },
      { desc: '(n) Centrifuge for dewatering sludge', rate: '40%' },
      { desc: '(o) Rotating biological contractor or bio-disc', rate: '40%' },
      { desc: '(p) Ion exchange resin column', rate: '40%' },
      { desc: '(q) Activated carbon column', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3)(x): Solid Waste Control Equipment',
    items: [
      { desc: '(a) Caustic / lime / chrome / mineral / cryolite recovery system', rate: '40%' },
      { desc: '(b) Solid waste recycling and resource recovery systems', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3)(xi): Semi-Conductor Industry',
    items: [
      { desc: 'Machinery and plant used in semi-conductor industry covering all ICs (excluding hybrid ICs) from SSI to LSI/VLSI as also discrete semi-conductor devices (diodes, transistors, thyristors, triacs, etc.), other than those covered by entries (viii), (ix) and (x)', rate: '30%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (3)(xia): Life Saving Medical Equipment',
    items: [
      { desc: '(a) D.C. Defibrillators for internal use and pace makers', rate: '40%' },
      { desc: '(b) Haemodialysors', rate: '40%' },
      { desc: '(c) Heart lung machine', rate: '40%' },
      { desc: '(d) Cobalt therapy unit', rate: '40%' },
      { desc: '(e) Colour Doppler', rate: '40%' },
      { desc: '(f) Spect Gamma Camera', rate: '40%' },
      { desc: '(g) Vascular Angiography System including Digital Subtraction Angiography', rate: '40%' },
      { desc: '(h) Ventilator used with anaesthesia apparatus', rate: '40%' },
      { desc: '(i) Magnetic Resonance Imaging System', rate: '40%' },
      { desc: '(j) Surgical Laser', rate: '40%' },
      { desc: '(k) Ventilator other than those used with anaesthesia', rate: '40%' },
      { desc: '(l) Gamma knife', rate: '40%' },
      { desc: '(m) Bone Marrow Transplant Equipment including silastic long standing intravenous catheters for chemotherapy', rate: '40%' },
      { desc: '(n) Fibreoptic endoscopes (including Paediatric resectoscope, Peritoneoscopes, Arthoscope, Microaryngoscope, Video Laryngo Bronchoscope, Fibreoptic Flexible Nasal Pharyngo, Video Oescophago Gastroscope, Stroboscope, etc.)', rate: '40%' },
      { desc: '(o) Laparoscope (single incision)', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-items (4) to (7)',
    items: [
      { desc: '(4) Containers made of glass or plastic used as re-fills', rate: '40%' },
      { desc: '(5) Computers including computer software', rate: '40%' },
      { desc: '(6) Machinery and plant used in weaving, processing and garment sector of textile industry purchased under TUFS on or after 1st April 2001 but before 1st April 2004 and put to use before 1st April 2004', rate: '40%' },
      { desc: '(7) Machinery and plant acquired and installed on or after 1st September 2002 in a water supply project or water treatment system for infrastructure facility u/s 80-IA(4)(i)', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (8): Special Items',
    items: [
      { desc: '(i) Wooden parts used in artificial silk manufacturing machinery', rate: '40%' },
      { desc: '(ii) Cinematograph films – Bulbs of studio lights', rate: '40%' },
      { desc: '(iii) Match factories – Wooden match frames', rate: '40%' },
      { desc: '(iv)(a) Mines and quarries – Tubs, winding ropes, haulage ropes and sand stowing pipes', rate: '40%' },
      { desc: '(iv)(b) Mines and quarries – Safety lamps', rate: '40%' },
      { desc: '(v) Salt works – Salt pans, reservoirs and condensers made of earthy, sandy, clayey or similar material', rate: '40%' },
      { desc: '(vi) Flour mills – Rollers', rate: '40%' },
      { desc: '(vii) Iron and steel industry – Rolling mill rolls', rate: '40%' },
      { desc: '(viii) Sugar works – Rollers', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (8)(ix): Energy Saving Devices',
    items: [
      { desc: 'A(a) Ignifluid / fluidized bed boilers', rate: '40%' },
      { desc: 'A(b) Flameless furnaces and continuous pusher type furnaces', rate: '40%' },
      { desc: 'A(c) Fluidized bed type heat treatment furnaces', rate: '40%' },
      { desc: 'A(d) High efficiency boilers (thermal efficiency > 75% for coal-fired; > 80% for oil/gas fired)', rate: '40%' },
      { desc: 'B(a) Automatic electrical load monitoring systems', rate: '40%' },
      { desc: 'B(b) Digital heat loss meters', rate: '40%' },
      { desc: 'B(c) Micro-processor based control systems', rate: '40%' },
      { desc: 'B(d) Infra-red thermography', rate: '40%' },
      { desc: 'B(e) Meters for measuring heat losses, furnace oil flow, steam flow, electric energy and power factor meters', rate: '40%' },
      { desc: 'B(f) Maximum demand indicator and clamp on power meters', rate: '40%' },
      { desc: 'B(g) Exhaust gases analyser', rate: '40%' },
      { desc: 'B(h) Fuel oil pump test bench', rate: '40%' },
      { desc: 'C(a) Economisers and feed water heaters', rate: '40%' },
      { desc: 'C(b) Recuperators and air pre-heaters', rate: '40%' },
      { desc: 'C(c) Heat pumps', rate: '40%' },
      { desc: 'C(d) Thermal energy wheel for high and low temperature waste heat recovery', rate: '40%' },
      { desc: 'D(a) Back pressure pass out, controlled extraction, extraction-cum-condensing turbines for co-generation along with pressure boilers', rate: '40%' },
      { desc: 'D(b) Vapour absorption refrigeration systems', rate: '40%' },
      { desc: 'D(c) Organic rankine cycle power systems', rate: '40%' },
      { desc: 'D(d) Low inlet pressure small steam turbines', rate: '40%' },
      { desc: 'E(a) Shunt capacitors and synchronous condenser systems', rate: '40%' },
      { desc: 'E(b) Automatic power cut off devices (relays) mounted on individual motors', rate: '40%' },
      { desc: 'E(c) Automatic voltage controller', rate: '40%' },
      { desc: 'E(d) Power factor controller for AC motors', rate: '40%' },
      { desc: 'E(e) Solid state devices for controlling motor speeds', rate: '40%' },
      { desc: 'E(f) Thermally energy-efficient stenters (800 or less kilocalories of heat to evaporate 1 kg of water)', rate: '40%' },
      { desc: 'E(g) Series compensation equipment', rate: '40%' },
      { desc: 'E(h) Flexible AC Transmission (FACT) devices – Thyristor controlled series compensation equipment', rate: '40%' },
      { desc: 'E(i) Time of Day (TOD) energy meters', rate: '40%' },
      { desc: 'E(j) Equipment to establish transmission highways for National Power Grid to facilitate transfer of surplus power', rate: '40%' },
      { desc: 'E(k) Remote terminal units / IEDs, computer hardware/software, router/bridges and associated communication systems for SCADA/EMS/DMS for power transmission', rate: '40%' },
      { desc: 'E(l) Special energy meters for Availability Based Tariff (ABT)', rate: '40%' },
      { desc: 'F(a) 0 to 10% excess air burners', rate: '40%' },
      { desc: 'F(b) Emulsion burners', rate: '40%' },
      { desc: 'F(c) Burners using air with high pre-heat temperature (above 300°C)', rate: '40%' },
      { desc: 'G(a) Wet air oxidation equipment for recovery of chemicals and heat', rate: '40%' },
      { desc: 'G(b) Mechanical vapour recompressors', rate: '40%' },
      { desc: 'G(c) Thin film evaporators', rate: '40%' },
      { desc: 'G(d) Automatic micro-processor based load demand controllers', rate: '40%' },
      { desc: 'G(e) Coal based producer gas plants', rate: '40%' },
      { desc: 'G(f) Fluid drives and fluid couplings', rate: '40%' },
      { desc: 'G(g) Turbo chargers / super-chargers', rate: '40%' },
      { desc: 'G(h) Sealed radiation sources for radiation processing plants', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (8)(x)–(xii): Miscellaneous',
    items: [
      { desc: '(x) Gas cylinders including valves and regulators', rate: '40%' },
      { desc: '(xi) Glass manufacturing concerns – Direct fire glass melting furnaces', rate: '40%' },
      { desc: '(xii)(a) Mineral oil concerns – Plant used in field operations (above ground) distribution – Returnable packages', rate: '40%' },
      { desc: '(xii)(b) Mineral oil concerns – Plant used in field operations (below ground), not including kerbside pumps; including underground tanks and fittings used in field operations by mineral oil concerns', rate: '40%' },
      { desc: '(xii)(c) Oil wells not covered in (a) and (b) [w.e.f. AY 2016-17]', rate: '15%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (8)(xiii): Renewable Energy Devices',
    items: [
      { desc: '(a) Flat plate solar collectors', rate: '40%' },
      { desc: '(b) Concentrating and pipe type solar collectors', rate: '40%' },
      { desc: '(c) Solar cookers', rate: '40%' },
      { desc: '(d) Solar water heaters and systems', rate: '40%' },
      { desc: '(e) Air / gas / fluid heating systems', rate: '40%' },
      { desc: '(f) Solar crop driers and systems', rate: '40%' },
      { desc: '(g) Solar refrigeration, cold storages and air conditioning systems', rate: '40%' },
      { desc: '(h) Solar stills and desalination systems', rate: '40%' },
      { desc: '(i) Solar power generating systems', rate: '40%' },
      { desc: '(j) Solar pumps based on solar-thermal and solar-photovoltaic conversion', rate: '40%' },
      { desc: '(k) Solar-photovoltaic modules and panels for water pumping and other applications', rate: '40%' },
      { desc: '(l) Wind mills and specially designed devices running on wind mills installed on or before 31 March 2012 or on or after 1 April 2014', rate: '40%' },
      { desc: '(m) Special devices including electric generators and pumps running on wind energy installed on or before 31 March 2012 or on or after 1 April 2014', rate: '40%' },
      { desc: '(n) Biogas-plant and biogas-engines', rate: '40%' },
      { desc: '(o) Electrically operated vehicles including battery powered or fuel-cell powered vehicles', rate: '40%' },
      { desc: '(p) Agricultural and municipal waste conversion devices producing energy', rate: '40%' },
      { desc: '(q) Equipment for utilising ocean waste and thermal energy', rate: '40%' },
      { desc: '(r) Machinery and plant used in the manufacture of any of the above sub-items', rate: '40%' },
    ],
  },
  {
    category: 'III. MACHINERY AND PLANT – Sub-item (9): Books',
    items: [
      { desc: '(i)(a) Books owned by assessees carrying on a profession – Annual publications', rate: '40%' },
      { desc: '(i)(b) Books owned by assessees carrying on a profession – Books other than annual publications', rate: '40%' },
      { desc: '(ii) Books owned by assessees carrying on business in running lending libraries', rate: '40%' },
    ],
  },
  {
    category: 'IV. SHIPS',
    items: [
      { desc: '(1) Ocean-going ships including dredgers, tugs, barges, survey launches and other similar ships used mainly for dredging purposes and fishing vessels with wooden hull', rate: '20%' },
      { desc: '(2) Vessels ordinarily operating on inland waters, not covered by sub-item (3)', rate: '20%' },
      { desc: '(3) Vessels ordinarily operating on inland waters being speed boats', rate: '20%' },
    ],
  },
  {
    part: 'PART B – INTANGIBLE ASSETS',
    category: 'Intangible Assets',
    items: [
      { desc: 'Know-how, patents, copyrights, trademarks, licences, franchises or any other business or commercial rights of similar nature', rate: '25%' },
    ],
  },
];

const notes = [
  '"Buildings" include roads, bridges, culverts, wells and tubewells.',
  'A building shall be deemed to be a building used mainly for residential purposes if the built-up floor area thereof used for residential purposes is not less than sixty-six and two-third per cent of its total built up floor area and shall include any such building in the factory premises.',
  'In respect of any structure or work by way of renovation or improvement in or in relation to a building referred to in Explanation 1 of clause (ii) of sub-section (1) of section 32, the percentage to be applied will be the percentage specified against sub-item (1) or (2) of item I as may be appropriate. Where the structure is constructed or the work is done by way of extension of any such building, the percentage to be applied would be such percentage as would be appropriate, as if the structure or work constituted a separate building.',
  'Water treatment system includes system for desalinisation, demineralisation and purification of water.',
  '"Electrical fittings" include electrical wiring, switches, sockets, other fittings and fans, etc.',
  '"Commercial vehicle" means "heavy goods vehicle", "heavy passenger motor vehicle", "light motor vehicle", "medium goods vehicle" and "medium passenger motor vehicle" but does not include "maxi-cab", "motor-cab", "tractor" and "road-roller". These expressions shall have the meanings assigned to them in section 2 of the Motor Vehicles Act, 1988.',
  '"Computer software" means any computer programme recorded on any disc, tape, perforated media or other information storage device.',
  '"TUFS" means Technology Upgradation Fund Scheme announced by the Government of India in the form of a Resolution of the Ministry of Textiles vide No.28/1/99-CTI of 31.3.1999.',
  'Machinery and plant includes pipes needed for delivery from the source of supply of raw water to the plant and from the plant to the storage facility.',
  '"Speed boat" means a motor boat driven by a high speed internal combustion engine capable of propelling the boat at a speed exceeding 24 kilometres per hour in still water and so designed that when running at a speed, it will plane, i.e., its bow will rise from the water.',
];

/* ─── Component ──────────────────────────────────────────────────────── */

export default function DepricationIT() {
  const [search, setSearch] = useState('');
  const q = search.toLowerCase();

  const filtered = depData.map(group => ({
    ...group,
    items: group.items.filter(item =>
      !q || item.desc.toLowerCase().includes(q) || group.category.toLowerCase().includes(q)
    ),
  })).filter(g => g.items.length > 0);

  return (
    <>
      <Navbar />
      <div className="dit-page">
        <div className="dit-content">
          <h1 className="dit-page-title">Depreciation Rates — Income Tax Act</h1>
          <p className="dit-subtitle">
            Table of Rates at which Depreciation is Admissible &nbsp;[See Rule 5] &nbsp;Appendix I &nbsp;|&nbsp;
            Written Down Value Method
          </p>

          {/* Search */}
          <div className="dit-search-bar">
            <input
              type="text"
              placeholder="Search by asset type or category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="dit-clear-btn" onClick={() => setSearch('')}>✕</button>}
          </div>

          {/* Rate Table */}
          <div className="dit-table-scroll">
            <table className="dit-table">
              <thead>
                <tr>
                  <th className="col-block">Block of Assets</th>
                  <th className="col-rate">Depreciation Allowance<br />(% of WDV)</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 && (
                  <tr><td colSpan={2} className="no-results">No matching assets found.</td></tr>
                )}
                {filtered.map((group, gi) => (
                  <React.Fragment key={gi}>
                    {group.part && (
                      <tr className="part-row">
                        <td colSpan={2}>{group.part}</td>
                      </tr>
                    )}
                    <tr className="category-row">
                      <td colSpan={2}>{group.category}</td>
                    </tr>
                    {group.items.map((item, ii) => (
                      <tr key={ii} className={ii % 2 === 0 ? '' : 'row-alt'}>
                        <td className="asset-desc">{item.desc}</td>
                        <td className="rate-cell">{item.rate}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <h2 className="dit-section-heading">Notes</h2>
          <div className="dit-notes-block">
            {notes.map((note, i) => (
              <p key={i}><strong>{i + 1}.</strong> {note}</p>
            ))}
          </div>

          <p className="dit-last-updated">Rates as per Appendix I to Income Tax Rules, 1962 [Rule 5]</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
