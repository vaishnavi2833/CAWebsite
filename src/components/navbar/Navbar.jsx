import React, { useState } from 'react';
import './Navbar.css';
import CA_logo from '../../assets/CA_logo.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={CA_logo} alt="CA Logo" className="logo-image" />
        <div className="logo-text">
          <h1 className="logo-title">RONAK DHOOT & ASSOCIATES</h1>
          <p className="logo-subtitle">CHARTERED ACCOUNTANTS</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li className="navbar-link" onClick={handleHomeClick}>Home</li>
          <li className="navbar-link" onClick={handleAboutClick}>About Us</li>

          {/* Registrations Dropdown */}
          <li className="navbar-link">
            <div
              className={`dropdown-toggle ${openDropdown === 'registrations' ? 'active' : ''}`}
              onClick={() => toggleDropdown('registrations')}
            >
              Registrations
            </div>
            <ul className={`dropdown ${openDropdown === 'registrations' ? 'active' : ''}`}>
              <li className="dropdown-item" onClick={() => navigate('/gst-registration-services')}>GST Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/msme-registration-services')}>MSME / Udyam Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/pf-registration-services')}>PF Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/esi-registration-services')}>ESI Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/pan-registration-services')}>PAN Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/tan-registration-services')}>TAN Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/gumasta-registration-services')}>Gumasta Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/trademark-registration-services')}>Trademark Registration</li>
              <li className="dropdown-item" onClick={() => navigate('/import-export-code-registration-services')}>Import Export Code</li>
              <li className="dropdown-item" onClick={() => navigate('/class-iii-dgft-dsc-registration-services')}>Class III / DGFT DSC Registration</li>
            </ul>
          </li>

          {/* Business Setup Dropdown */}
          <li className="navbar-link">
            <div
              className={`dropdown-toggle ${openDropdown === 'business' ? 'active' : ''}`}
              onClick={() => toggleDropdown('business')}
            >
              Business Setup
            </div>
            <ul className={`dropdown ${openDropdown === 'business' ? 'active' : ''}`}>
              <li className="dropdown-item" onClick={() => navigate('/proprietorship-registration-services')}>Proprietorship</li>
              <li className="dropdown-item" onClick={() => navigate('/partnership-registration-services')}>Partnership</li>
              <li className="dropdown-item" onClick={() => navigate('/one-person-company-registration-services')}>One Person Company</li>
              <li className="dropdown-item" onClick={() => navigate('/limited-liability-partnership-registration-services')}>Limited Liability Partnership</li>
              <li className="dropdown-item" onClick={() => navigate('/private-limited-company-registration-services')}>Private Limited Company</li>
              <li className="dropdown-item" onClick={() => navigate('/public-limited-company-registration-services')}>Public Limited Company</li>
            </ul>
          </li>

          {/* Other Services Dropdown */}
          <li className="navbar-link">
            <div
              className={`dropdown-toggle ${openDropdown === 'other' ? 'active' : ''}`}
              onClick={() => toggleDropdown('other')}
            >
              Other Services
            </div>
            <ul className={`dropdown ${openDropdown === 'other' ? 'active' : ''}`}>
              <li className="dropdown-item" onClick={() => navigate('/income-tax-filing-services')}>Income Tax Filing</li>
              <li className="dropdown-item" onClick={() => navigate('/gst-return-filing-services')}>GST Filing</li>
              <li className="dropdown-item" onClick={() => navigate('/tds-return-services')}>TDS Return</li>
              <li className="dropdown-item" onClick={() => navigate('/esi-return-filing-services')}>ESI Return</li>
              <li className="dropdown-item" onClick={() => navigate('/pf-return-services')}>PF Return</li>
              <li className="dropdown-item" onClick={() => navigate('/professional-tax-return-services')}>Professional Tax Return</li>
              <li className="dropdown-item" onClick={() => navigate('/annual-filing-services')}>Annual Filing</li>
              <li className="dropdown-item" onClick={() => navigate('/registered-office-change-services')}>Registered Office Change</li>
              <li className="dropdown-item" onClick={() => navigate('/appointment-of-directors-services')}>Appointment of Directors</li>
              <li className="dropdown-item" onClick={() => navigate('/resignation-of-directors-services')}>Resignation of Directors</li>
              <li className="dropdown-item" onClick={() => navigate('/increase-in-authorized-capital-services')}>Increase Authorized Capital</li>
              <li className="dropdown-item" onClick={() => navigate('/share-transfer-services')}>Share Transfer</li>
              <li className="dropdown-item" onClick={() => navigate('/application-for-din-services')}>Application for DIN</li>
              <li className="dropdown-item" onClick={() => navigate('/moa-amendment-services')}>MOA Amendment</li>
              <li className="dropdown-item" onClick={() => navigate('/appointment-of-partners-services')}>Appointment of Partners</li>
              <li className="dropdown-item" onClick={() => navigate('/resignation-of-partners-services')}>Resignation of Partners</li>
              <li className="dropdown-item" onClick={() => navigate('/winding-up-of-company-services')}>Winding Up of Company</li>
              <li className="dropdown-item" onClick={() => navigate('/winding-up-of-llp-services')}>Winding Up of LLP</li>
              <li className="dropdown-item" onClick={() => navigate('/company-name-change-services')}>Company Name Change</li>
              <li className="dropdown-item" onClick={() => navigate('/shifting-of-registered-office-services')}>Shifting of Registered Office</li>
            </ul>
          </li>

          <li className="navbar-link">
            <div
              className={`dropdown-toggle ${openDropdown === 'knowledge' ? 'active' : ''}`}
              onClick={() => toggleDropdown('knowledge')}
            >
              Knowledge Bank
            </div>
            <ul className={`dropdown ${openDropdown === 'knowledge' ? 'active' : ''}`}>
              <li className='dropdown-item submenu'>Acts
                <ul className="submenu-list">
                  <li className="submenu-item has-submenu">Direct Tax
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/income-tax-act')}>Income Tax Act</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/wealth-tax-act')}>Wealth Tax Act</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/income-declaration-scheme-2016')}>Income Declaration Scheme 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/direct-tax-vivad-se-vishwas-scheme')}>Direct Tax Vivad se Vishwas Scheme</li>
                    </ul>
                  </li>
                    
                  <li className="submenu-item has-submenu">Indirect Tax
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/service-tax-finance-act-1994')}>Service Tax (Finance Act, 1994)</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/central-sales-tax-act-1956')}>Central Sales Tax Act, 1956</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/central-excise-act-1944')}>The Central Excise Act, 1944</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/customs-act-1962')}>Customs Act, 1962</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/entry-tax-act')}>Entry Tax Act</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">Corporate Laws
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/companies-act-2013')}>Companies Act, 2013</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/companies-act-1956')}>Companies Act, 1956</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/llp-act')}>LLP Act</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/sebi-act-1992')}>SEBI Act, 1992</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/company-secretaries-act-1980')}>Company Secretaries Act, 1980</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">VAT Laws
                    <ul className='sub-submenu-list'>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/delhi-value-added-tax-act-2004')}>Delhi Value Added Tax Act, 2004</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/mvat-act-2002')}>MVAT Act, 2002</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/west-bengal-vat-act-2003')}>West Bengal VAT Act, 2003</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/tamilnadu-vat-act-2006')}>Tamilnadu VAT Act, 2006</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/karnataka-value-added-tax-act-2003')}>Karnataka Value Added Tax Act, 2003</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/gujarat-value-added-tax-act-2003')}>Gujarat Value Added Tax Act, 2003</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/up-vat-act-2008')}>UP VAT Act, 2008</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/rajasthan-value-added-tax-act-2003')}>Rajasthan Value Added Tax Act, 2003</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/punjab-value-added-tax-act')}>Punjab Value Added Tax Act</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/haryana-value-added-tax-act')}>Haryana Value Added Tax Act</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/telangana-vat-act-2005')}>Telangana VAT Act, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/andhra-pradesh-vat-act-2005')}>Andhra Pradesh VAT Act, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/acts/bihar-value-added-tax-act-2005')}>Bihar Value Added Tax Act, 2005</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">Other Statues
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/esi-act-1948')}>ESI Act, 1948</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/pf-act-1952')}>PF Act, 1952</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/professional-tax-act')}>Professional Tax Act</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/indian-partnership-act-1932')}>The Indian Partnership Act, 1932</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/societies-registration-act-1860')}>Societies Registration Act, 1860</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/competition-act-2002')}>Competetion Act, 2002</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/reserve-bank-of-india-act-1934')}>Reserve Bank of India Act, 1934</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/mrtp-act-1969')}>MRTP Act, 1969</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/equalisation-levy-act-2016')}>Equalisation Levy Act, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/right-to-information-act-2005')}>Right to Information Act, 2005</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/fema-1999')}>FEMA, 1999</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/rera-2016')}>RERA, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/insolvency-bankruptcy-code-2016')}>Insolvency & Bankruptcy Code, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/benami-property-act-1988')}>Benami Property Act, 1988</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">GST Laws
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/igst-act-2017')}>IGST Act, 2017</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/cgst-act-2017')}>CGST Tax Act, 2017</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/utgst-act-2017')}>UTGST Act, 2017</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/acts/gst-compensation-act-2017')}>GST (Compensation to States) Act, 2017</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='dropdown-item submenu'>Rules
                <ul className="submenu-list">
                  <li className="submenu-item has-submenu">Direct Tax
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/income-tax-act-rules')}>Income Tax Act Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/wealth-tax-rules')}>Wealth Tax Rules 1957</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/income-declaration-scheme-rules')}>Income Declaration Scheme Rules 2016</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">Indirect Tax
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/gst-valuation-rules')}>GST Valuation Rules, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/service-tax-rules')}>Service Tax Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cst-delhi-rules')}>CST (Delhi) Rules, 2005</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cst-maharashtra-rules')}>CST (Maharashtra) Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/customs-valuation-rules')}>Customs Valuation Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cenvat-credit-rules')}>Cenvat Credit Rules, 2017</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/entry-tax-rules')}>Entry Tax Rules</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">Corporate Laws
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/companies-rules-2014')}>Companies Rules, 2014</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/llp-rules-2009')}>LLP Rules, 2009</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/llp-winding-up-rules-2012')}>LLP Winding Up Rules, 2012</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cos-unpaid-dividend-rules-1978')}>Cos Unpaid Dividend Rules, 1978</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">VAT Laws
                    <ul className='sub-submenu-list'>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/delhi-vat-rules-2005')}>Delhi VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/maharashtra-vat-rules-2005')}>Maharashtra VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/west-bengal-vat-rules-2005')}>West Bengal VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/tamilnadu-vat-rules-2007')}>Tamilnadu VAT Rules, 2006</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/karnataka-vat-rules-2005')}>Karnataka VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/gujarat-vat-rules-2006')}>Gujarat VAT Rules, 200</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/up-vat-rules-2008')}>UP VAT Rules, 2008</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/rajasthan-vat-rules-2006')}>Rajasthan VAT Rules, 2006</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/punjab-vat-rules-2005')}>Punjab VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/haryana-vat-rules-2003')}>Haryana VAT Rules, 2003</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/telangana-vat-rules-2005')}>Telangana VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/andhra-pradesh-vat-rules-2005')}>Andhra Pradesh VAT Rules, 2005</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/rules/bihar-vat-rules-2005')}>Bihar VAT Rules, 2005</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">Other Statutes
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/profession-tax-rules')}>Profession Tax Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/nbfc-deposits-directions-1978')}>NBFC Deposits Directions, 1978</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/nfbc-misc-nbc-advt-rules-1977')}>NBFC & Misc NBC (Advt) Rules, 1977</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/delhi-labour-welfare-fund-rules-1997')}>Delhi Labour Welfare Fund Rules, 1997</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cost-records-and-audit-rules-2014')}>Cost records and audit Rules, 2014</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/baggage-rules-2016')}>Baggage Rules, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/equalisation-levy-rules-2016')}>Equalisation Levy Rules, 2016</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/nclt-and-nclat-rules')}>NCLT and NCLAT Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/insolvency-and-bankruptcy-rules')}>Insolvency and Bankruptcy Rules</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/benami-property-rules-2016')}>Benami Property Rules, 2016</li>
                    </ul>
                  </li>
                  <li className="submenu-item has-submenu">GST Laws
                    <ul className='sub-submenu-list'>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/cgst-rules-2017')}>CGST Rules, 2017</li>
                      <li className="submenu-item" onClick={() => navigate('/kb/rules/igst-rules-2017')}>IGST Rules, 2017</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='dropdown-item submenu'>Bulletins
                <ul className="submenu-list">
                  <li className="submenu-item">Circulars / Notifications</li>
                </ul>
              </li>
              <li className='dropdown-item submenu'>Utilities
                <ul className="submenu-list">
                  <li className='submenu-item has-submenu'>Income Tax Bill 2025
                    <ul className='sub-submenu-list'>
                      <li className='submenu-item'>IT Act vs IT Bill, 2025 </li>
                      <li className='submenu-item' onClick={() => navigate('/kb/utilities/income-tax-bill-2025')}>IT Bill 2025</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/utilities/faqs-income-tax-bill')}>FAQs Income Tax Bill</li>
                      <li className='submenu-item' onClick={() => navigate('/kb/utilities/faqs-income-tax-bill-general')}>FAQs Income Tax Bill General</li>
                    </ul>
                  </li>
                  <li className='submenu-item'>Rates of TDS</li>
                  <li className='submenu-item'>TDS Rates for N.R.I. us 195</li>
                  <li className='submenu-item'>Rates of Income Tax</li>
                  <li className='submenu-item'>Depreciation Rates Companies Act</li>
                  <li className='submenu-item'>Depreciation Rates Income Tax Act</li>
                  <li className='submenu-item'>ROC Filing Fees (Cos Act, 2013)</li>
                  <li className='submenu-item'>ROC Fee Structure (Cos Act, 2013)</li>
                  <li className='submenu-item'>Cost Inflation Index</li>
                  <li className='submenu-item'>IFSC Codes</li>
                  <li className='submenu-item'>MICR Codes</li>
                  <li className='submenu-item'>Rates of NSC Interest</li>
                  <li className='submenu-item'>Gold and Silver Rates</li>
                  <li className='submenu-item'>Rates of Stamp Duty</li>
                  <li className='submenu-item'>LLP Fees</li>
                  <li className='submenu-item'>Deduction u/s 80TTA Vs 80TTB</li>
                </ul>
              </li>
              <li className='dropdown-item submenu'>Links
                <ul className="submenu-list">
                  <li className='submenu-item'>PAN</li>
                  <li className='submenu-item'>TAN</li>
                  <li className='submenu-item'>E-payment Online</li>
                  <li className='submenu-item'>Income Tax</li>
                  <li className='submenu-item'>CBIC</li>
                  <li className='submenu-item'>PF & ESI</li>
                  <li className='submenu-item'>Excise & Service Tax</li>
                  <li className='submenu-item'>MCA</li>
                  <li className='submenu-item'>CA / CS</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="navbar-link" onClick={() => navigate("/blogs")}>Blogs</li>
          <li className="navbar-link" onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
