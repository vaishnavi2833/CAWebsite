import Home from './components/home/Home.jsx'
import Services from './components/services/Services.jsx'
import AboutPage from './components/aboutpage/AboutPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GstRegistration from './components/servicepages/GstRegistration.jsx'
import MsmeRegistrationServices from './components/servicepages/MsmeRegistrationServices.jsx';
import PFRegistration from './components/servicepages/PFRegistration.jsx';
import ESIRegistration from './components/servicepages/ESIRegistration.jsx';
import { PANRegistration } from './components/servicepages/PANRegistration.jsx';
import TANRegistration from './components/servicepages/TANRegistration.jsx';
import GumastaRegistration from './components/servicepages/GumastaRegistration.jsx';
import TrademarkRegistration from './components/servicepages/TrademarkRegistration.jsx';
import ImportExportRegistration from './components/servicepages/ImportExportRegistration.jsx';
import DSCRegistration from './components/servicepages/DSCRegistration.jsx';
import ProprietorshipRegistration from './components/servicepages/ProprietorshipRegistration.jsx';
import PartnershipRegistration from './components/servicepages/PartnershipRegistration.jsx';
import OPCRegistration from './components/servicepages/OPCRegistration.jsx';
import LLPRegistration from './components/servicepages/LLPRegistration.jsx';
import PrivateCompanyRegistration from './components/servicepages/PrivateCompanyRegistration.jsx';
import PublicCompanyRegistration from './components/servicepages/PublicCompanyRegistration.jsx';
import IncomeTaxFiling from './components/servicepages/IncomeTaxFiling.jsx';
import GSTFiling from './components/servicepages/GSTFiling.jsx';
import TDSReturn  from './components/servicepages/TDSReturn.jsx';
import ESIReturn from './components/servicepages/ESIReturn.jsx';
import PFReturn from './components/servicepages/PFReturn.jsx';
import PTaxReturn from './components/servicepages/PTaxReturn.jsx';
import AnnualFiling from './components/servicepages/AnnualFiling.jsx';
import RegisteredOfficeChange from './components/servicepages/RegisteredOfficeChange.jsx';
import AppOfDirectors from './components/servicepages/AppOfDirectors.jsx';
import ResOfDirectors from './components/servicepages/ResOfDirectors.jsx';
import IncAuthCapital from './components/servicepages/IncAuthCapital.jsx';
import ShareTransfer from './components/servicepages/ShareTransfer.jsx';
import DINApp from './components/servicepages/DINApp.jsx';
import MOAAmendment from './components/servicepages/MOAAmendment.jsx';
import AppOfPartners from './components/servicepages/AppOfPartners.jsx';
import ResOfPartners from './components/servicepages/ResOfPartners.jsx';
import WindLLP from './components/servicepages/WindLLP.jsx';
import WindCompany from './components/servicepages/WindCompany.jsx';
import CompanyNameChange from './components/servicepages/CompanyNameChange.jsx';
import ShiftOffice from './components/servicepages/ShiftOffice.jsx';
import ScrollToTop from './components/ScrollToTop.js';
import IncomeTaxPdf from './components/knowledgebank/IncomeTaxPdf.jsx';
import WealthTaxPdf from './components/knowledgebank/WealthTaxPdf.jsx';
import IncomeDeclarationScheme from './components/knowledgebank/IncomeDeclarationScheme.jsx';
import DirectTaxPdf from './components/knowledgebank/DirectTaxPdf.jsx';
import ServiceTax from './components/knowledgebank/ServiceTax.jsx';
import CentralSalesTaxPdf from './components/knowledgebank/CentralSalesTaxPdf.jsx';
import CentralExciseAct from './components/knowledgebank/CentralExciseAct.jsx';
import CustomsAct from './components/knowledgebank/CustomsAct.jsx';
import EntryTaxAct from './components/knowledgebank/EntryTaxAct.jsx';
import CompaniesAct2013 from './components/knowledgebank/CompaniesAct2013.jsx';
import CompaniesAct1956 from './components/knowledgebank/CompaniesAct1956.jsx';
import LLPAct from './components/knowledgebank/LLPAct.jsx';
import SEBIActPdf from './components/knowledgebank/SEBIActPdf.jsx';
import SecretariesAct from './components/knowledgebank/SecretariesAct.jsx';
import DelhiVAT from './components/knowledgebank/DelhiVAT.jsx';
import GujaratVAT from './components/knowledgebank/GujaratVAT.jsx';
import MVAT from './components/knowledgebank/MVAT.jsx';
import PunjabVAT from './components/knowledgebank/PunjabVAT.jsx';
import RajasthanVAT from './components/knowledgebank/RajasthanVAT.jsx';
import TamilNaduVAT from './components/knowledgebank/TamilNaduVAT.jsx';
import UPVAT from './components/knowledgebank/UPVAT.jsx';
import WBVAT from './components/knowledgebank/WBVAT.jsx';
import KarnatakaVAT from './components/knowledgebank/KarnatakaVAT.jsx';
import HaryanaVAT from './components/knowledgebank/HaryanaVAT.jsx';
import TelanganaVAT from './components/knowledgebank/TelanganaVAT.jsx';
import APVAT from './components/knowledgebank/APVAT.jsx';
import BiharVAT from './components/knowledgebank/BiharVAT.jsx';
import ESIAct from './components/knowledgebank/ESIAct.jsx';
import PFAct from './components/knowledgebank/PFAct.jsx';
import ProfessionTaxAct from './components/knowledgebank/ProfessionTaxAct.jsx';
import IndianPartnershipAct from './components/knowledgebank/IndianPartnershipAct.jsx';
import SocietyRegistrationAct from './components/knowledgebank/SocietyRegistrationAct.jsx';
import CompetetionAct from './components/knowledgebank/CompetetionAct.jsx';
import RBIAct from './components/knowledgebank/RBIAct.jsx';
import MRTP from './components/knowledgebank/MRTP.jsx';
import Equalisation from './components/knowledgebank/Equalisation.jsx';
import RTI from './components/knowledgebank/RTI.jsx';
import FEMA from './components/knowledgebank/FEMA.jsx';
import RERA from './components/knowledgebank/RERA.jsx';
import Bankruptcy from './components/knowledgebank/Bankruptcy.jsx';
import BenamiProperty from './components/knowledgebank/BenamiProperty.jsx';
import IGST from './components/knowledgebank/IGST.jsx';
import CGST from './components/knowledgebank/CGST.jsx';
import UTGST from './components/knowledgebank/UTGST.jsx';
import GSTAct from './components/knowledgebank/GSTAct.jsx';
import IncomeTaxRules from './components/knowledgebank/IncomeTaxRules.jsx';
import WealthTaxRules from './components/knowledgebank/WealthTaxRules.jsx';
import IncomeTaxDeclarationRules from './components/knowledgebank/IncomeTaxDeclarationRules.jsx';
import GSTValuationRules from './components/knowledgebank/GSTValuationRules.jsx';
import ServiceTaxRules from './components/knowledgebank/ServiceTaxRules.jsx';
import CSTDelhiRules from './components/knowledgebank/CSTDelhiRules.jsx';
import CSTMRules from './components/knowledgebank/CSTMRules.jsx';
import CustomsValuationRules from './components/knowledgebank/CustomsValuationRules.jsx';
import CanvatCreditRules from './components/knowledgebank/CanvatCreditRules.jsx';
import EntryTaxRules from './components/knowledgebank/EntryTaxRules.jsx';
import CompaniesRule from './components/knowledgebank/CompaniesRule.jsx';
import LLPRules from './components/knowledgebank/LLPRules.jsx';
import LLPWindingUpRules from './components/knowledgebank/LLPWindingUpRules.jsx';
import CosUnpaidDividendRules from './components/knowledgebank/CosUnpaidDividendRules.jsx';
import DelhiVatRules from './components/knowledgebank/DelhiVatRules.jsx';
import GujratVATRules from './components/knowledgebank/GujratVATRules.jsx';
import MVatRules from './components/knowledgebank/MVatRules.jsx';
import PunjabVatRules from './components/knowledgebank/PunjabVatRules.jsx';
import RajasthanVatRules from './components/knowledgebank/RajasthanVatRules.jsx';
import TamilNaduVatRules from './components/knowledgebank/TamilNaduVatRules.jsx';
import UPVatRules from './components/knowledgebank/UPVatRules.jsx';
import WBVatRules from './components/knowledgebank/WBVatRules.jsx';
import KarnatakaVatRules from './components/knowledgebank/KarnatakaVatRules.jsx';
import HaryanaVatRules from './components/knowledgebank/HaryanaVatRules.jsx';
import TelanganaVatRules from './components/knowledgebank/TelanganaVatRules.jsx';
import APVatRules from './components/knowledgebank/APVatRules.jsx';
import BiharVatRules from './components/knowledgebank/BiharVatRules.jsx';
import ProfessionTaxRules from './components/knowledgebank/ProfessionTaxRules.jsx';
import NFBC from './components/knowledgebank/NFBC.jsx';
import NBFC from './components/knowledgebank/NBFC.jsx';
import DelhiLabour from './components/knowledgebank/DelhiLabour.jsx';
import CostRecords from './components/knowledgebank/CostRecords.jsx';
import BaggageRules from './components/knowledgebank/BaggageRules.jsx';
import EqualisationLevy from './components/knowledgebank/EqualisationLevy.jsx';
import NCLT from './components/knowledgebank/NCLT.jsx';
import Insolvency from './components/knowledgebank/Insolvency.jsx';
import BenamiPropertyRules from './components/knowledgebank/BenamiPropertyRules.jsx';
import IGSTRules from './components/knowledgebank/IGSTRules.jsx';
import CGSTRules from './components/knowledgebank/CGSTRules.jsx';
import ITBill2025 from './components/knowledgebank/ITBill2025.jsx';
import FAQITBill from './components/knowledgebank/FAQITBill.jsx';
import FAQITBillGeneral from './components/knowledgebank/FAQITBillGeneral.jsx';
import Blog from './components/blog/Blog.jsx';
import ContactPage from './components/contactpage/ContactPage.jsx';

const App = () => {
  return (
    <Router> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/services" element={<Services />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gst-registration-services" element={<GstRegistration/>}/>
        <Route path="/msme-registration-services" element={<MsmeRegistrationServices/>}/>
        <Route path="/pf-registration-services" element={<PFRegistration/>}/>
        <Route path="/esi-registration-services" element={<ESIRegistration/>}/>
        <Route path="/pan-registration-services" element={<PANRegistration/>}/>
        <Route path="/tan-registration-services" element={<TANRegistration/>}/>
        <Route path="/gumasta-registration-services" element={<GumastaRegistration/>}/>
        <Route path="/trademark-registration-services" element={<TrademarkRegistration/>}/>
        <Route path="/import-export-code-registration-services" element={<ImportExportRegistration/>}/>
        <Route path="/class-iii-dgft-dsc-registration-services" element={<DSCRegistration/>}/>
        <Route path="/proprietorship-registration-services" element={<ProprietorshipRegistration/>}/>
        <Route path="/partnership-registration-services" element={<PartnershipRegistration/>}/>
        <Route path="/one-person-company-registration-services" element={<OPCRegistration/>}/>
        <Route path="/limited-liability-partnership-registration-services" element={<LLPRegistration/>}/>
        <Route path="/private-limited-company-registration-services" element={<PrivateCompanyRegistration/>}/>
        <Route path="/public-limited-company-registration-services" element={<PublicCompanyRegistration/>}/>
        <Route path="/income-tax-filing-services" element={<IncomeTaxFiling/>}/>
        <Route path='/gst-return-filing-services' element={<GSTFiling/>}/>
        <Route path='/tds-return-services' element={<TDSReturn/>}/>
        <Route path='/esi-return-filing-services' element={<ESIReturn/>}/>
        <Route path='/pf-return-services' element={<PFReturn/>}/>
        <Route path='/professional-tax-return-services' element={<PTaxReturn/>}/>
        <Route path='/annual-filing-services' element={<AnnualFiling/>}/>
        <Route path='/registered-office-change-services' element={<RegisteredOfficeChange/>}/>
        <Route path='/appointment-of-directors-services' element={<AppOfDirectors/>}/>
        <Route path='/resignation-of-directors-services' element={<ResOfDirectors/>}/>
        <Route path="/increase-in-authorized-capital-services" element={<IncAuthCapital />} />
        <Route path="/share-transfer-services" element={<ShareTransfer />} />
        <Route path="/application-for-din-services" element={<DINApp />} />
        <Route path='/moa-amendment-services' element={<MOAAmendment/>}/>
        <Route path='/appointment-of-partners-services' element={<AppOfPartners/>}/>
        <Route path='/resignation-of-partners-services' element={<ResOfPartners/>}/>
        <Route path='/winding-up-of-company-services' element={<WindCompany/>}/>
        <Route path='/winding-up-of-llp-services' element={<WindLLP/>}/>
        <Route path='/company-name-change-services' element={<CompanyNameChange/>}/>
        <Route path='/shifting-of-registered-office-services' element={<ShiftOffice/>}/>
        <Route path="/kb/acts/income-tax-act" element={<IncomeTaxPdf />} />
        <Route path="/kb/acts/wealth-tax-act" element={<WealthTaxPdf />} />
        <Route path="/kb/acts/income-declaration-scheme-2016" element={<IncomeDeclarationScheme />} />
        <Route path="/kb/acts/direct-tax-vivad-se-vishwas-scheme" element={<DirectTaxPdf />} />
        <Route path="/kb/acts/service-tax-finance-act-1994" element={<ServiceTax />} />
        <Route path="/kb/acts/central-sales-tax-act-1956" element={<CentralSalesTaxPdf />} />
        <Route path="/kb/acts/central-excise-act-1944" element={<CentralExciseAct />} />
        <Route path="/kb/acts/customs-act-1962" element={<CustomsAct />} />
        <Route path="/kb/acts/entry-tax-act" element={<EntryTaxAct />} />
        <Route path="/kb/acts/companies-act-2013" element={<CompaniesAct2013 />} />
        <Route path="/kb/acts/companies-act-1956" element={<CompaniesAct1956 />} />
        <Route path="/kb/acts/llp-act" element={<LLPAct />} />
        <Route path="/kb/acts/sebi-act-1992" element={<SEBIActPdf />} />
        <Route path="/kb/acts/company-secretaries-act-1980" element={<SecretariesAct />} />
        <Route path="/kb/acts/delhi-value-added-tax-act-2004" element={<DelhiVAT />} />
        <Route path="/kb/acts/mvat-act-2002" element={<MVAT />} />
        <Route path="/kb/acts/west-bengal-vat-act-2003" element={<WBVAT />} />
        <Route path="/kb/acts/tamilnadu-vat-act-2006" element={<TamilNaduVAT />} />
        <Route path="/kb/acts/gujarat-value-added-tax-act-2003" element={<GujaratVAT />} />
        <Route path="/kb/acts/up-vat-act-2008" element={<UPVAT />} />
        <Route path="/kb/acts/rajasthan-value-added-tax-act-2003" element={<RajasthanVAT />} />
        <Route path="/kb/acts/punjab-value-added-tax-act" element={<PunjabVAT />} />
        <Route path="/kb/acts/karnataka-value-added-tax-act-2003" element={<KarnatakaVAT />} />
        <Route path="/kb/acts/haryana-value-added-tax-act" element={<HaryanaVAT />} />
        <Route path="/kb/acts/telangana-vat-act-2005" element={<TelanganaVAT />} />
        <Route path="/kb/acts/andhra-pradesh-vat-act-2005" element={<APVAT />} />
        <Route path="/kb/acts/bihar-value-added-tax-act-2005" element={<BiharVAT />} />
        <Route path="/kb/acts/esi-act-1948" element={<ESIAct />} />
        <Route path="/kb/acts/pf-act-1952" element={<PFAct />} />
        <Route path="/kb/acts/professional-tax-act" element={<ProfessionTaxAct />} />
        <Route path="/kb/acts/indian-partnership-act-1932" element={<IndianPartnershipAct />} />
        <Route path="/kb/acts/societies-registration-act-1860" element={<SocietyRegistrationAct />} />
        <Route path="/kb/acts/competition-act-2002" element={<CompetetionAct />} />
        <Route path="/kb/acts/reserve-bank-of-india-act-1934" element={<RBIAct />} />
        <Route path="/kb/acts/mrtp-act-1969" element={<MRTP />} />
        <Route path="/kb/acts/equalisation-levy-act-2016" element={<Equalisation />} />
        <Route path="/kb/acts/right-to-information-act-2005" element={<RTI />} />
        <Route path="/kb/acts/fema-1999" element={<FEMA />} />
        <Route path="/kb/acts/rera-2016" element={<RERA />} />
        <Route path="/kb/acts/insolvency-bankruptcy-code-2016" element={<Bankruptcy />} />
        <Route path="/kb/acts/benami-property-act-1988" element={<BenamiProperty />} />
        <Route path="/kb/acts/igst-act-2017" element={<IGST />} />
        <Route path="/kb/acts/cgst-act-2017" element={<CGST />} />
        <Route path="/kb/acts/utgst-act-2017" element={<UTGST />} />
        <Route path="/kb/acts/gst-compensation-act-2017" element={<GSTAct />} />
        <Route path="/kb/rules/income-tax-act-rules" element={<IncomeTaxRules />} />
        <Route path="/kb/rules/wealth-tax-rules" element={<WealthTaxRules />} />
        <Route path="/kb/rules/income-declaration-scheme-rules" element={<IncomeTaxDeclarationRules />} />
        <Route path="/kb/rules/gst-valuation-rules" element={<GSTValuationRules />} />
        <Route path="/kb/rules/service-tax-rules" element={<ServiceTaxRules />} />
        <Route path="/kb/rules/cst-delhi-rules" element={<CSTDelhiRules />} />
        <Route path="/kb/rules/cst-maharashtra-rules" element={<CSTMRules />} />
        <Route path="/kb/rules/customs-valuation-rules" element={<CustomsValuationRules />} />
        <Route path="/kb/rules/cenvat-credit-rules" element={<CanvatCreditRules />} />
        <Route path="/kb/rules/entry-tax-rules" element={<EntryTaxRules />} />
        <Route path="/kb/rules/companies-rules-2014" element={<CompaniesRule />} />
        <Route path="/kb/rules/llp-rules-2009" element={<LLPRules />} />
        <Route path="/kb/rules/llp-winding-up-rules-2012" element={<LLPWindingUpRules />} />
        <Route path="/kb/rules/cos-unpaid-dividend-rules-1978" element={<CosUnpaidDividendRules />} />
        <Route path="/kb/rules/delhi-vat-rules-2005" element={<DelhiVatRules />} />
        <Route path="/kb/rules/gujarat-vat-rules-2006" element={<GujratVATRules />} />
        <Route path="/kb/rules/maharashtra-vat-rules-2005" element={<MVatRules />} />
        <Route path="/kb/rules/punjab-vat-rules-2005" element={<PunjabVatRules />} />
        <Route path="/kb/rules/rajasthan-vat-rules-2006" element={<RajasthanVatRules />} />
        <Route path="/kb/rules/tamilnadu-vat-rules-2007" element={<TamilNaduVatRules />} />
        <Route path="/kb/rules/up-vat-rules-2008" element={<UPVatRules />} />
        <Route path="/kb/rules/west-bengal-vat-rules-2005" element={<WBVatRules />} />
        <Route path="/kb/rules/karnataka-vat-rules-2005" element={<KarnatakaVatRules />} />
        <Route path="/kb/rules/haryana-vat-rules-2003" element={<HaryanaVatRules />} />
        <Route path="/kb/rules/telangana-vat-rules-2005" element={<TelanganaVatRules />} />
        <Route path="/kb/rules/andhra-pradesh-vat-rules-2005" element={<APVatRules />} />
        <Route path="/kb/rules/bihar-vat-rules-2005" element={<BiharVatRules />} />
        <Route path="/kb/rules/profession-tax-rules" element={<ProfessionTaxRules />} />
        <Route path='/kb/rules/nbfc-deposits-directions-1978' element={<NFBC />} />
        <Route path='/kb/rules/nfbc-misc-nbc-advt-rules-1977' element={<NBFC />} />
        <Route path='/kb/rules/delhi-labour-welfare-fund-rules-1997' element={<DelhiLabour />} />
        <Route path='/kb/rules/cost-records-and-audit-rules-2014' element={<CostRecords />} />
        <Route path='/kb/rules/baggage-rules-2016' element={<BaggageRules />} />
        <Route path='/kb/rules/equalisation-levy-rules-2016' element={<EqualisationLevy />} />
        <Route path='/kb/rules/nclt-and-nclat-rules' element={<NCLT />} />
        <Route path='/kb/rules/insolvency-and-bankruptcy-rules' element={<Insolvency />} />
        <Route path='/kb/rules/benami-property-rules-2016' element={<BenamiPropertyRules />} />
        <Route path='/kb/rules/igst-rules-2017' element={<IGSTRules />} />
        <Route path='/kb/rules/cgst-rules-2017' element={<CGSTRules />} />
        <Route path='/kb/utilities/income-tax-bill-2025' element={<ITBill2025 />} />
        <Route path='/kb/utilities/faqs-income-tax-bill' element={<FAQITBill />} />
        <Route path='/kb/utilities/faqs-income-tax-bill-general' element={<FAQITBillGeneral />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
