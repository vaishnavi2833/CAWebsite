import React, { useState, useMemo } from 'react';
import Navbar from '../navbar/Navbar';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import './tdspage.css';

/* ─── DATA ─── */

const YEARS = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22', '2020-21', '2019-20'];

/* Each TDS row: { section, payment, threshold, rates } */
const tdsData = {
  '2025-26': [
    {
      section: '192',
      payment: 'Income from Salary – Super Senior Citizen (80 Years or more)',
      threshold: 'Old: Rs. 5,00,000 | New: Rs. 4,00,000',
      rates: 'Average rate of Tax + Health & Education Cess (Surcharge if Salary > 50 Lacs). TDS as per Tax Regime selected by employee. If not selected, TDS as per New Regime.',
    },
    {
      section: '192',
      payment: 'Income from Salary – Senior Citizen (60 Years or more)',
      threshold: 'Old: Rs. 3,00,000 | New: Rs. 4,00,000',
      rates: 'Average rate of Tax + Health & Education Cess',
    },
    {
      section: '192',
      payment: 'Income from Salary – Others',
      threshold: 'Old: Rs. 2,50,000 | New: Rs. 4,00,000',
      rates: 'Average rate of Tax + Health & Education Cess',
    },
    { section: '192A', payment: 'Premature Withdrawal from EPF', threshold: 'Rs. 50,000', rates: '10%' },
    { section: '193', payment: 'Interest on Securities (including Listed Debentures)', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194', payment: 'Dividend', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194A', payment: '*Interest (Other than on Securities) by a Banking Company / Post Office', threshold: 'Senior Citizen: Rs. 1,00,000 p.a. | Others: Rs. 50,000 p.a.', rates: '10%' },
    { section: '194A', payment: 'Interest (Other than on Securities) by others', threshold: 'Rs. 10,000 p.a.', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries, Cross Word Puzzles, Card games and other games (Other than online Games)', threshold: 'Rs. 10,000 p.a. per single transaction', rates: '30%' },
    { section: '194BA', payment: 'Winning From Online Games', threshold: 'No Limit', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 p.a. per single transaction', rates: '30%' },
    { section: '194C', payment: '*Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 Single Transaction (or) Rs. 1,00,000 Aggregate', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 20,000', rates: 'Domestic Company: 10% | Other than Company: 2%' },
    { section: '194DA', payment: 'Payment under life insurance policy (on income comprised in pay-out)', threshold: 'Rs. 1,00,000 p.a.', rates: '2%' },
    { section: '194EE', payment: 'Payment under National Savings Scheme', threshold: 'Rs. 2,500', rates: '10%' },
    { section: '194F', payment: 'Payment on account of repurchase of units by Mutual Fund or UTI', threshold: 'No Limit', rates: 'Nil' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 20,000', rates: '2%' },
    { section: '194H', payment: '*Commission/Brokerage', threshold: 'Rs. 20,000', rates: '2%' },
    { section: '194-I(a)', payment: '*Rent of Plant / Machinery', threshold: 'Rs. 50,000 pm', rates: '2%' },
    { section: '194-I(b)', payment: '*Rent of Land or building or furniture or fitting', threshold: 'Rs. 50,000 pm', rates: '10%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '1% (on higher of consideration or stamp duty value)' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: '2%' },
    { section: '194-IC', payment: 'Payment of monetary consideration under Joint Development Agreements to Resident individual/HUF', threshold: 'No Limit', rates: '10%' },
    { section: '194J', payment: '*Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 50,000 p.a. (Rs. 0 for Directors)', rates: '2% (Call Centre, Technical Services, Royalty for cinematograph films) | 10% (Professional Services, Director remuneration, other royalty)' },
    { section: '194K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 5,00,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to resident unit holders', threshold: 'No Limit', rates: '10%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB [other than exempt u/s 10(23FBB)]', threshold: 'No Limit', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: 'No Limit', rates: '10%' },
    { section: '194M', payment: 'Payment to resident contractors/professionals or commission/brokerage by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: '2%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal (persons who have not filed ITR for 3 previous years*)', threshold: 'Rs. 20 lakhs', rates: 'Rs. 20 lakhs to Rs. 1 crore: 2% | Above Rs. 1 crore: 5%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal from Bank, Post office etc. – others', threshold: 'Rs. 1 crore', rates: '2%' },
    { section: '194-O', payment: 'Payment by E-commerce operator to e-commerce participants', threshold: 'Individual/HUF: Rs. 5 Lakh | Others: No limit', rates: '0.10%' },
    { section: '194P', payment: 'TDS deduction by bank – specified Senior Citizen above 75 Years drawing pension (NOTE-1)', threshold: 'Rs. 3,00,000', rates: 'As per Rates in force' },
    { section: '194Q', payment: 'Payment for purchase of goods', threshold: 'Rs. 50 Lakhs', rates: '0.1% (on value above Rs. 50 lakhs)' },
    { section: '194R', payment: 'Benefits or perquisites arising from business or profession', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '194S', payment: 'Payment of Consideration for Transfer of Virtual Digital Assets / crypto currency', threshold: 'Specified Persons: Rs. 50,000 | Others: Rs. 10,000', rates: '1%' },
    { section: '194T', payment: 'TDS on payment of salary, remuneration, interest, bonus or commission by partnership firm to partners', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: Rates in force | 20%' },
  ],
  '2024-25': [
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years or more)', threshold: 'Old: Rs. 5,00,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess. TDS as per Tax Regime selected by employee.' },
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years or more)', threshold: 'Old: Rs. 3,00,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Old: Rs. 2,50,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF', threshold: 'Rs. 50,000', rates: 'PAN available: 10% | PAN Not available: 20%' },
    { section: '193', payment: 'Interest on Securities (including Listed Debentures)', threshold: 'Rs. 5,000 (Rs. 10,000 on 8% Savings Bonds, 2003)', rates: '10%' },
    { section: '194', payment: 'Dividend', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194A', payment: '*Interest (Other than on Securities) by a Banking Company / Post Office', threshold: 'Senior Citizen: Rs. 50,000 p.a. | Others: Rs. 40,000 p.a.', rates: '10%' },
    { section: '194A', payment: 'Interest (Other than on Securities) by others', threshold: 'Rs. 5,000 p.a.', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries, Cross Word Puzzles, Card games (Other than online Games)', threshold: 'Rs. 10,000 p.a.', rates: '30%' },
    { section: '194BA', payment: 'Winning From Online Games', threshold: 'No Limit', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 p.a.', rates: '30%' },
    { section: '194C', payment: '*Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 Single Transaction (or) Rs. 1,00,000 Aggregate', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Other than Company: 5% (2% wef 1.4.25 onwards) | Domestic Company: 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy (on income in pay-out)', threshold: 'Rs. 1,00,000 p.a.', rates: 'Upto 30.9.24: 5% | Wef 1.10.24: 2%' },
    { section: '194EE', payment: 'Payment under National Savings Scheme', threshold: 'Rs. 2,500', rates: '10%' },
    { section: '194F', payment: 'Payment on account of repurchase of units by Mutual Fund or UTI', threshold: 'No Limit', rates: 'Upto 30.9.24: 20% | Wef 1.10.24: NA' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: 'Upto 30.9.24: 5% | Wef 1.10.24: 2%' },
    { section: '194H', payment: '*Commission/Brokerage', threshold: 'Rs. 15,000 p.a.', rates: 'Upto 30.9.24: 5% | Wef 1.10.24: 2%' },
    { section: '194-I(a)', payment: '*Rent of Plant / Machinery', threshold: 'Rs. 2,40,000 p.a.', rates: '2%' },
    { section: '194-I(b)', payment: '*Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 p.a.', rates: '10%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '1% (on higher of consideration or stamp duty value)' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: 'Upto 30.9.24: 5% | Wef 1.10.24: 2%' },
    { section: '194-IC', payment: 'Payment under Joint Development Agreements to Resident individual/HUF', threshold: 'No Limit', rates: '10%' },
    { section: '194J', payment: '*Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 30,000 p.a. (Rs. 0 for Directors)', rates: '2% (Call Centre, Technical Services, Royalty for cinematograph films) | 10% (Professional Services, Director remuneration, other royalty)' },
    { section: '194K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to resident unit holders', threshold: 'No Limit', rates: '10%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB [other than exempt u/s 10(23FBB)]', threshold: 'No Limit', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: 'No Limit', rates: 'Individual or HUF: 25% | Other: 30%' },
    { section: '194M', payment: 'Payment to resident contractors/professionals or commission/brokerage by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: 'Upto 30.9.24: 5% | Wef 1.10.24: 2%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal (persons not filed ITR for 3 previous years*)', threshold: 'Rs. 20 lakhs', rates: 'Rs. 20 lakhs to Rs. 1 crore: 2% | Above Rs. 1 crore: 5%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal – others', threshold: 'Rs. 1 crore', rates: '2%' },
    { section: '194-O', payment: 'Payment by E-commerce operator to e-commerce participants', threshold: 'Individual/HUF: Rs. 5 Lakh | Others: No limit', rates: 'Upto 30.9.24: 1% | Wef 1.10.24: 0.10%' },
    { section: '194P', payment: 'TDS by bank – specified Senior Citizen above 75 Years drawing pension (NOTE-1)', threshold: 'Rs. 3,00,000', rates: 'As per Rates in force' },
    { section: '194Q', payment: 'Payment for purchase of goods', threshold: 'Rs. 50 Lakhs', rates: '0.1% (on value above Rs. 50 lakhs)' },
    { section: '194R', payment: 'Benefits or perquisites arising from business or profession', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '194S', payment: 'Payment for Transfer of Virtual Digital Assets / crypto currency', threshold: 'Specified Persons: Rs. 50,000 | Others: Rs. 10,000', rates: '1%' },
    { section: '194T', payment: 'TDS on payment by partnership firm to partners (salary, remuneration, interest, bonus, commission)', threshold: 'Rs. 20,000', rates: 'FY 24-25: Nil | FY 25-26 onwards: 10%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: Rates in force | 20%' },
    { section: '206AB', payment: 'TDS on non-filers of ITR at higher rates', threshold: '-', rates: 'Higher of: 5% | Twice the rate or rates in force' },
  ],
  '2023-24': [
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years or more)', threshold: 'Old: Rs. 5,00,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess. TDS as per Tax Regime selected by employee.' },
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years or more)', threshold: 'Old: Rs. 3,00,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Old: Rs. 2,50,000 | New: Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF', threshold: 'Rs. 50,000', rates: 'PAN available: 10% | PAN Not available: 20%' },
    { section: '193', payment: 'Interest on Securities (including Listed Debentures)', threshold: 'Rs. 5,000 (Rs. 10,000 on 8% Savings Bonds, 2003)', rates: '10%' },
    { section: '194', payment: 'Dividend', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194A', payment: '*Interest (Other than on Securities) by a Banking Company / Post Office', threshold: 'Senior Citizen: Rs. 50,000 p.a. | Others: Rs. 40,000 p.a.', rates: '10%' },
    { section: '194A', payment: 'Interest (Other than on Securities) by others', threshold: 'Rs. 5,000 p.a.', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries, Cross Word Puzzles, Card games (Other than online Games)', threshold: 'Rs. 10,000 p.a.', rates: '30%' },
    { section: '194BA', payment: 'Winning From Online Games', threshold: 'No Limit', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 p.a.', rates: '30%' },
    { section: '194C', payment: '*Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 Single Transaction (or) Rs. 1,00,000 Aggregate', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Other than Company: 5% | Domestic Company: 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy (on income in pay-out)', threshold: 'Rs. 1,00,000 p.a.', rates: '2%' },
    { section: '194EE', payment: 'Payment under National Savings Scheme', threshold: 'Rs. 2,500', rates: '10%' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: '2%' },
    { section: '194H', payment: '*Commission/Brokerage', threshold: 'Rs. 15,000 p.a.', rates: '2%' },
    { section: '194-I(a)', payment: '*Rent of Plant / Machinery', threshold: 'Rs. 2,40,000 p.a.', rates: '2%' },
    { section: '194-I(b)', payment: '*Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 p.a.', rates: '2%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '1% (on higher of consideration or stamp duty value)' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: '5%' },
    { section: '194-IC', payment: 'Payment under Joint Development Agreements to Resident individual/HUF', threshold: 'No Limit', rates: '10%' },
    { section: '194J', payment: '*Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 30,000 p.a. (Rs. 0 for Directors)', rates: '2% (Call Centre, Technical Services, Royalty for cinematograph films) | 10% (Professional Services, Director remuneration, other royalty)' },
    { section: '194K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to resident unit holders', threshold: 'No Limit', rates: '10%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB [other than exempt u/s 10(23FBB)]', threshold: 'No Limit', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: 'No Limit', rates: 'Individual or HUF: 25% | Other: 30%' },
    { section: '194M', payment: 'Payment to resident contractors/professionals or commission/brokerage by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: '2%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal (persons not filed ITR for 3 previous years*)', threshold: 'Rs. 20 lakhs', rates: 'Rs. 20 lakhs to Rs. 1 crore: 2% | Above Rs. 1 crore: 5%' },
    { section: '194N', payment: 'Aggregate Cash withdrawal – others', threshold: 'Rs. 1 crore', rates: '2%' },
    { section: '194-O', payment: 'Payment by E-commerce operator to e-commerce participants', threshold: 'Individual/HUF: Rs. 5 Lakh | Others: No limit', rates: '0.10%' },
    { section: '194P', payment: 'TDS by bank – specified Senior Citizen above 75 Years drawing pension (NOTE-1)', threshold: 'Rs. 3,00,000', rates: 'As per Rates in force' },
    { section: '194Q', payment: 'Payment for purchase of goods', threshold: 'Rs. 50 Lakhs', rates: '0.1% (on value above Rs. 50 lakhs)' },
    { section: '194R', payment: 'Benefits or perquisites arising from business or profession', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '194S', payment: 'Payment for Transfer of Virtual Digital Assets / crypto currency', threshold: 'Specified Persons: Rs. 50,000 | Others: Rs. 10,000', rates: '1%' },
    { section: '194T', payment: 'TDS on payment by partnership firm to partners', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: Rates in force | 20%' },
    { section: '206AB', payment: 'TDS on non-filers of ITR at higher rates', threshold: '-', rates: 'Higher of: 5% | Twice the rate or rates in force' },
  ],
  '2022-23': [
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years)', threshold: 'Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess (Surcharge if Salary > 50 Lacs). Option to choose between New and Old Tax Slab Regime.' },
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years)', threshold: 'Rs. 5,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Rs. 2,50,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF (wef 01.06.2015) (*If PAN not furnished: TDS at Max Marginal Rate of 30%)', threshold: 'Rs. 50,000', rates: '10%' },
    { section: '193', payment: '*Interest on Securities', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194', payment: 'Dividend', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194A', payment: 'Interest from a Banking Company / Post Office (Other than on Securities)', threshold: 'Rs. 40,000 p.a. for Others / Rs. 50,000 p.a. for Senior citizen', rates: '10%' },
    { section: '194A', payment: 'Interest other than from a Banking Company', threshold: 'Rs. 5,000 per annum', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries, Cross Word Puzzles, Card games and other games', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194C', payment: 'Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 Single Transaction (or) Rs. 1,00,000 Aggregate', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Individual: 5% | Domestic Company: 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy (on income in pay-out)', threshold: 'Rs. 1,00,000 per annum', rates: '5%' },
    { section: '194E', payment: 'Payment to non-resident sportsmen/sports association', threshold: 'Rs. 0', rates: '20% (increased by applicable surcharge and Health & Education cess)' },
    { section: '194EE', payment: 'Payment of NSS Deposit', threshold: 'Rs. 2,500', rates: '10%' },
    { section: '194F', payment: 'Payment on account of repurchase of units by Mutual Fund or UTI', threshold: '-', rates: '20%' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: '5%' },
    { section: '194H', payment: '**Commission/Brokerage', threshold: 'Rs. 15,000 per annum', rates: '2%' },
    { section: '194-I(a)', payment: '**Rent of Plant / Machinery', threshold: 'Rs. 2,40,000 per annum', rates: '2%' },
    { section: '194-I(b)', payment: '**Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 per annum', rates: '10%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '***1% (on consideration; note: stamp duty value also relevant for 43CA/50C)' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: '5%' },
    { section: '194-IC', payment: 'Payment of monetary consideration under Joint Development Agreements', threshold: '-', rates: '10%' },
    { section: '194J', payment: 'Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 30,000 per annum (Rs. 0 for Directors)', rates: '2% (Call Centre & Technical Services & Royalty) | 10% (Professional Services)' },
    { section: '194K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to unit holders', threshold: '-', rates: '10%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB [other than exempt u/s 10(23FBB)]', threshold: '-', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: '-', rates: 'Individual or HUF: 25% | Other: 30%' },
    { section: '194M', payment: 'TDS on payment to resident contractors/professionals or commission/brokerage by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: '5%' },
    { section: '194N', payment: 'TDS on cash withdrawal from Bank, Post office etc. (excess of Rs. 1 crore)', threshold: 'Rs. 1 crore', rates: '2%' },
    { section: '194N', payment: 'TDS on cash withdrawal – for persons who have not filed ITR for 3 previous years*', threshold: 'Rs. 20 lakhs', rates: '2% (Rs. 20 lakhs–Rs. 1 crore) | 5% (above Rs. 1 crore)' },
    { section: '194-O', payment: 'TDS on E-commerce participants', threshold: 'Rs. 5 Lakh', rates: '1%' },
    { section: '194P', payment: 'TDS on Senior Citizen above 75 Years (NOTE-1)', threshold: 'As per NOTE-1', rates: 'As per Rates in force' },
    { section: '194Q', payment: 'Purchase of goods (w.e.f 01.07.2021)', threshold: 'Rs. 50 Lakh', rates: '0.10%' },
    { section: '194R', payment: 'Benefits or perquisites arising from business or profession', threshold: 'Rs. 20,000', rates: '10%' },
    { section: '194S', payment: 'TDS on payment for virtual Digital Assets / crypto currency (w.e.f 01.07.2022)', threshold: '-', rates: '1%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: As per act twice the rate | 20%' },
    { section: '206AB', payment: 'TDS on non-filers of ITR at higher rates', threshold: '-', rates: 'Higher of: 5% | Twice the rate or rate in force' },
  ],
  '2021-22': [
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years)', threshold: 'Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess (Surcharge if Salary > 50 Lacs). Option to choose between New and Old Tax Slab Regime.' },
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years)', threshold: 'Rs. 5,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Rs. 2,50,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF (*If PAN not furnished: TDS at Max Marginal Rate of 34.608%)', threshold: 'Rs. 50,000', rates: '10%' },
    { section: '193', payment: '* Interest on Securities', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194', payment: 'Dividend', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194A', payment: 'Interest from a Banking Company', threshold: 'Rs. 40,000 p.a. for Others / Rs. 50,000 p.a. for Senior citizen', rates: '10%' },
    { section: '194A', payment: 'Interest other than from a Banking Company', threshold: 'Rs. 5,000 per annum', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries & Cross Word Puzzles', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194C', payment: 'Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 Per Contract (or) Rs. 1,00,000 p.a.', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Resident: 5% | Domestic Company: 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy', threshold: 'Rs. 1,00,000 per annum', rates: '5%' },
    { section: '194EE', payment: 'Out of deposit under NSS', threshold: 'Rs. 2,500', rates: '10%' },
    { section: '194F', payment: 'Payment on account of repurchase of units by Mutual Fund or UTI', threshold: '-', rates: '20%' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: '2%' },
    { section: '194H', payment: '**Commission/Brokerage', threshold: 'Rs. 15,000 per annum', rates: '2%' },
    { section: '194-I(a)', payment: '**Rent of Plant / Machinery', threshold: 'Rs. 2,40,000 per annum', rates: '2%' },
    { section: '194-I(b)', payment: '**Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 per annum', rates: '10%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '1%' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: '5%' },
    { section: '194-IC', payment: 'Payment of monetary consideration under Joint Development Agreements', threshold: '-', rates: '10%' },
    { section: '194J', payment: 'Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 30,000 per annum', rates: '2% (Call Centre & Technical Services & Royalty) | 10% (For Others)' },
    { section: '194K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 5,000', rates: '10%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to unit holders', threshold: '-', rates: '10%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB [other than exempt u/s 10(23FBB)]', threshold: '-', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: '-', rates: 'Individual or HUF: 25% | Other: 30%' },
    { section: '194M', payment: 'TDS on payment to resident contractors/professionals or commission/brokerage by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: '5%' },
    { section: '194N', payment: 'TDS on cash withdrawal from Bank, Post office etc. (excess of Rs. 1 crore)', threshold: 'Rs. 1 crore', rates: '2%' },
    { section: '194N', payment: 'TDS on cash withdrawal – for persons who have not filed ITR for 3 previous years*', threshold: 'Rs. 20 lakhs', rates: '2% (Rs. 20 lakhs–Rs. 1 crore) | 5% (above Rs. 1 crore)' },
    { section: '194-O', payment: 'TDS on E-commerce participants', threshold: 'Rs. 5 Lakh', rates: '1%' },
    { section: '194P', payment: 'TDS on Senior Citizen above 75 Years (NOTE-1)', threshold: 'As per NOTE-1', rates: 'As per Rates in force' },
    { section: '194Q', payment: 'Purchase of goods (w.e.f 01.07.2021)', threshold: 'Rs. 50 Lakh', rates: '0.10%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: Rates in force | 20%' },
    { section: '206AB', payment: 'TDS on non-filers of ITR at higher rates (applicable w.e.f 01.07.2021)', threshold: '-', rates: 'Higher of: 5% | Twice the rate or rates in force' },
  ],
  '2020-21': [
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years)', threshold: 'Rs. 3,00,000', rates: '01-04-2020 to 13-05-2020: Average rate | 14-05-2020 to 31-03-2021: Average rate + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years)', threshold: 'Rs. 5,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Rs. 2,50,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF (*If PAN not furnished: TDS at Max Marginal Rate of 34.608%)', threshold: 'Rs. 50,000', rates: '10% (both periods)' },
    { section: '193', payment: '* Interest on Securities', threshold: 'Rs. 10,000', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194', payment: 'Dividend', threshold: '-', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194A', payment: 'Interest from a Banking Company', threshold: 'Rs. 40,000 p.a. / Rs. 50,000 p.a. for Senior citizen', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194A', payment: 'Interest other than from a Banking Company', threshold: 'Rs. 5,000 per annum', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194B', payment: 'Winning from Lotteries & Cross Word Puzzles', threshold: 'Rs. 10,000 per annum', rates: '30% (both periods)' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 per annum', rates: '30% (both periods)' },
    { section: '194C', payment: 'Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 per contract (or) Rs. 1,00,000 p.a.', rates: 'Apr–May 2020: Ind/HUF 1%, Others 2% | From 14-05-2020: Ind/HUF 0.75%, Others 1.5%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Apr–May 2020: Resident 5%, Company 10% | From 14-05-2020: Resident 3.75%, Company 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy', threshold: 'Rs. 1,00,000 per annum', rates: 'Apr–May 2020: 5% | From 14-05-2020: 3.75%' },
    { section: '194EE', payment: 'Out of deposit under NSS', threshold: 'Rs. 2,500', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194F', payment: 'Payment on account of repurchase of units by Mutual Fund or UTI', threshold: '-', rates: 'Apr–May 2020: 20% | From 14-05-2020: 15%' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: 'Apr–May 2020: 5% | From 14-05-2020: 2%' },
    { section: '194H', payment: '**Commission/Brokerage', threshold: 'Rs. 15,000 per annum', rates: 'Apr–May 2020: 5% | From 14-05-2020: 2%' },
    { section: '194-I(a)', payment: '**Rent of Plant / Machinery', threshold: 'Rs. 2,40,000 per annum', rates: 'Apr–May 2020: 2% | From 14-05-2020: 1.5%' },
    { section: '194-I(b)', payment: '**Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 per annum', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: 'Apr–May 2020: 1% | From 14-05-2020: 0.75%' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: 'Apr–May 2020: 5% | From 14-05-2020: 3.75%' },
    { section: '194-IC', payment: 'Payment under Joint Development Agreements', threshold: '-', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194J', payment: 'Fees for Professional / Technical Services / Royalty / Remuneration to director', threshold: 'Rs. 30,000 per annum', rates: 'Apr–May 2020: 2%/10% | From 14-05-2020: 1.5%/7.5%' },
    { section: '194-K', payment: 'Income in respect of units of Mutual funds or specified company', threshold: 'Rs. 5,000', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194LA', payment: 'Compensation on acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate', threshold: '-', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194LBB', payment: 'Payment in respect of units of Investment funds u/s 115UB', threshold: '-', rates: 'Apr–May 2020: 10% | From 14-05-2020: 7.5%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: '-', rates: 'Apr–May 2020: Ind/HUF 25%, Other 30% | From 14-05-2020: Ind/HUF 18.75%, Other 22.5%' },
    { section: '194M', payment: 'TDS on payment to resident contractors/professionals by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: 'Apr–May 2020: 5% | From 14-05-2020: 3.75%' },
    { section: '194N', payment: 'TDS on cash withdrawal from Bank, Post office etc. (excess of Rs. 1 crore)', threshold: 'Rs. 1 crore', rates: '2% (both periods)' },
    { section: '194N', payment: 'TDS on cash withdrawal – for persons who have not filed ITR for 3 previous years* (from 01/07/2020)', threshold: 'Rs. 20 lakhs', rates: '2% (Rs. 20 lakhs–Rs. 1 crore) | 5% (above Rs. 1 crore)' },
    { section: '194-O', payment: 'TDS on E-commerce participants', threshold: '-', rates: 'Before 14-05-2020: NA | From 01.10.2020: 0.75%' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: Rates in force | 20%' },
  ],
  '2019-20': [
    { section: '192', payment: 'Income from Salary – Senior Citizen (60 Years)', threshold: 'Rs. 3,00,000', rates: 'Average rate of Tax + Health & Education Cess (Surcharge if Salary > 50 Lacs)' },
    { section: '192', payment: 'Income from Salary – Super Senior Citizen (80 Years)', threshold: 'Rs. 5,00,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192', payment: 'Income from Salary – Others', threshold: 'Rs. 2,50,000', rates: 'Average rate of Tax + Health & Education Cess' },
    { section: '192A', payment: 'Premature Withdrawal from EPF (wef 01.06.2015) (*If PAN not furnished: TDS at Max Marginal Rate of 34.608%)', threshold: 'Rs. 50,000', rates: '10%' },
    { section: '193', payment: '* Interest on Securities', threshold: 'Rs. 10,000', rates: '10%' },
    { section: '194', payment: 'Dividend other than the dividend as referred to in Section 115-O', threshold: '-', rates: '10%' },
    { section: '194A', payment: 'Interest from a Banking Company', threshold: 'Rs. 40,000 p.a. / Rs. 50,000 p.a. for Senior citizen', rates: '10%' },
    { section: '194A', payment: 'Interest other than from a Banking Company', threshold: 'Rs. 5,000 per annum', rates: '10%' },
    { section: '194B', payment: 'Winning from Lotteries & Cross Word Puzzles', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194BB', payment: 'Winnings from horse races', threshold: 'Rs. 10,000 per annum', rates: '30%' },
    { section: '194C', payment: 'Payment to contractor/sub-contractor', threshold: 'Rs. 30,000 per contract (or) Rs. 1,00,000 p.a.', rates: 'Individual/HUF: 1% | Others: 2%' },
    { section: '194D', payment: 'Insurance Commission', threshold: 'Rs. 15,000', rates: 'Resident: 5% | Domestic Company: 10%' },
    { section: '194DA', payment: 'Payment under life insurance policy', threshold: 'Rs. 1,00,000 per annum', rates: 'Upto 31-08-2019: 1% | w.e.f 01-09-2019: 5%' },
    { section: '194EE', payment: 'Out of deposit under NSS', threshold: 'Rs. 2,500', rates: 'Individual or HUF: 10% | Other: NA' },
    { section: '194F', payment: 'Payment on account of repurchase of unit by Mutual Fund or UTI', threshold: '-', rates: '20%' },
    { section: '194G', payment: 'Commission on Sale of Lottery Tickets', threshold: 'Rs. 15,000', rates: '2%' },
    { section: '194H', payment: '**Commission/Brokerage', threshold: 'Rs. 15,000 per annum', rates: '2%' },
    { section: '194-I(a)', payment: '**Rent on Plant / Machinery', threshold: 'Rs. 2,40,000 per annum', rates: '2%' },
    { section: '194-I(b)', payment: '**Rent of Land or building or furniture or fitting', threshold: 'Rs. 2,40,000 per annum', rates: '10%' },
    { section: '194-IA', payment: 'Payment or transfer of immovable property (other than rural agriculture land)', threshold: 'Rs. 50,00,000 & above', rates: '1%' },
    { section: '194-IB', payment: 'Rent payable by an individual or HUF not liable to tax audit', threshold: 'Rs. 50,000 per month', rates: '5%' },
    { section: '194-IC', payment: 'Payment of monetary consideration under Joint Development Agreements', threshold: '-', rates: '10%' },
    { section: '194J', payment: 'Fees for Professional / Technical Services', threshold: 'Rs. 30,000 per annum', rates: '2% (For Call Centre) | 10% (For Others)' },
    { section: '194LA', payment: 'Compulsory Acquisition of immovable Property', threshold: 'Rs. 2,50,000', rates: '10%' },
    { section: '194LBA(1)', payment: 'Business trust distributing interest from SPV or income from real estate to unit holders', threshold: '-', rates: '10%' },
    { section: '194LBB(i)', payment: 'Investment fund paying income to unit holder [other than exempt u/s 10(23FBB)]', threshold: '-', rates: '10%' },
    { section: '194LBC(1)', payment: 'Income in respect of investment made in a securitisation trust', threshold: '-', rates: 'Individual or HUF: 25% | Other: 30%' },
    { section: '194M', payment: 'TDS on payment to resident contractors/professionals (other than those covered u/s 194C or 194J) by individual/HUF not liable for tax audit', threshold: 'Rs. 50 lacs', rates: '5% (wef 01.09.2019)' },
    { section: '194N', payment: 'TDS on cash withdrawal from Bank, Post office etc.', threshold: 'Rs. 1 crore', rates: '2% (wef 01.09.2019)' },
    { section: '206AA', payment: 'TDS rate in case of Non-availability of PAN', threshold: '-', rates: 'Higher of: As per act twice the rate | 20%' },
  ],
};

/* TCS Data */
const tcsData = {
  '2025-26': [
    { section: '206C (1)', goods: 'Alcoholic Liquor for Human Consumption', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Indian made for foreign liquor', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Minerals, coal lignite, Iron ore by a trader', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1F)', goods: 'Motor vehicle & other notified high value items', nature: 'Sale', threshold: 'Rs. 10 Lakhs per transaction', rates: '1%' },
    { section: '206C (1C)', goods: 'Parking lot, toll plaza, mining & quarrying', nature: 'Lease or license', threshold: '-', rates: '2.00%' },
    { section: '206C (1)', goods: 'Scrap', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Tendu Leaves', nature: 'Sale', threshold: '-', rates: '5.00%' },
    { section: '206C (1)', goods: 'Timber or any other forest produce (not being tendu leaves) obtained under a forest lease', nature: 'Sale', threshold: '-', rates: '2.00%' },
    { section: '206C (1)', goods: 'Timber obtained by any mode other than under a forest lease', nature: 'Sale', threshold: '-', rates: '2.00%' },
    { section: '206 (1H)', goods: 'Goods other than those specified – in excess of Rs. 50 Lakh in a year by seller', nature: 'Sale', threshold: 'Turnover > Rs. 10 Crore', rates: 'Nil' },
    { section: '206 (1G)', goods: 'Overseas Tour Package', nature: 'Sale', threshold: 'No Limit', rates: 'Upto 10 Lacs: 5% | Above 10 Lacs: 20%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – loan for education obtained from financial institution u/s 80E', nature: 'Foreign Remittance', threshold: 'Rs. 10 lacs', rates: '0.00%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – education (other cases) or medical treatment', nature: 'Foreign Remittance', threshold: 'Rs. 10 lacs', rates: '5%' },
    { section: '206 (1G)', goods: 'Any other Remittance', nature: 'Foreign Remittance', threshold: 'Rs. 10 lacs', rates: '20%' },
    { section: '206CC', goods: 'TCS rate in case of Non-availability of PAN', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
  ],
  '2024-25': [
    { section: '206C (1)', goods: 'Alcoholic Liquor for Human Consumption', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Indian made for foreign liquor', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Minerals, coal lignite, Iron ore by a trader', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1F)', goods: 'Motor vehicle (sale value exceeding Rs. 10 Lakhs per transaction). Note: For notified items other than motor car, applicable wef 1.1.25.', nature: 'Sale', threshold: 'Rs. 10 Lakhs per transaction', rates: '1%' },
    { section: '206C (1C)', goods: 'Parking lot, toll plaza, mining & quarrying', nature: 'Lease or license', threshold: '-', rates: '2.00%' },
    { section: '206C (1)', goods: 'Scrap', nature: 'Sale', threshold: '-', rates: '1%' },
    { section: '206C (1)', goods: 'Tendu Leaves', nature: 'Sale', threshold: '-', rates: '5%' },
    { section: '206C (1)', goods: 'Timber obtained under a forest lease or other mode', nature: 'Sale', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Any other forest produce not being Timber or tendu leaves', nature: 'Sale', threshold: '-', rates: '2.50%' },
    { section: '206 (1H)', goods: 'Goods other than those specified – in excess of Rs. 50 Lakh in a year by seller', nature: 'Sale', threshold: 'Turnover > Rs. 10 Crore', rates: '0.10%' },
    { section: '206 (1G)', goods: 'Overseas Tour Package', nature: 'Sale', threshold: 'No Limit', rates: 'Upto 7 Lacs: 5% | Above 7 Lacs: 20%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – loan for education obtained from financial institution u/s 80E', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: '0.50%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – education (other cases) or medical treatment', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: '5%' },
    { section: '206 (1G)', goods: 'Any other Remittance', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: '20%' },
    { section: '206CC', goods: 'TCS rate in case of Non-availability of PAN', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
    { section: '206CCA', goods: 'TCS on non-filers of ITR at higher rates', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate or rates in force | 5%' },
  ],
  '2023-24': [
    { section: '206C (1)', goods: 'Alcoholic Liquor for Human Consumption', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Indian made for foreign liquor', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Minerals, coal lignite, Iron ore by a trader', nature: 'Sale', threshold: '-', rates: '1.00%' },
    { section: '206C (1F)', goods: 'Motor vehicle (sale value exceeding Rs. 10 Lakhs per transaction)', nature: 'Sale', threshold: 'Rs. 10 Lakhs per transaction', rates: '1.00%' },
    { section: '206C (1C)', goods: 'Parking lot, toll plaza, mining & quarrying', nature: 'Lease or license', threshold: '-', rates: '2.00%' },
    { section: '206C (1)', goods: 'Scrap', nature: 'Sale', threshold: '-', rates: '1%' },
    { section: '206C (1)', goods: 'Tendu Leaves', nature: 'Sale', threshold: '-', rates: '5%' },
    { section: '206C (1)', goods: 'Timber obtained under a forest lease or other mode', nature: 'Sale', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Any other forest produce not being Timber or tendu leaves', nature: 'Sale', threshold: '-', rates: '2.50%' },
    { section: '206 (1H)', goods: 'Goods other than those specified – in excess of Rs. 50 Lakh in a year by seller', nature: 'Sale', threshold: 'Turnover > Rs. 10 Crore', rates: '0.10%' },
    { section: '206 (1G)', goods: 'Overseas Tour Package', nature: 'Sale', threshold: 'No Limit', rates: 'Upto 30 Sep 2023: 5% | From 1 Oct 2023: Upto 7 Lacs: 5%, Above 7 Lacs: 20%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – loan for education obtained from financial institution u/s 80E', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: '0.50%' },
    { section: '206 (1G)', goods: 'Remittance under LRS of RBI – education (other cases) or medical treatment', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: '5%' },
    { section: '206 (1G)', goods: 'Any other Remittance', nature: 'Foreign Remittance', threshold: 'Rs. 7 lacs', rates: 'Upto 30 Sep 2023: 5% | From 1 Oct 2023: 20%' },
    { section: '206CC', goods: 'TCS rate in case of Non-availability of PAN', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
    { section: '206CCA', goods: 'TCS on non-filers of ITR at higher rates', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate or rates in force | 5%' },
  ],
  '2022-23': [
    { section: '206C (1)', goods: 'Sale of Scrap', nature: '-', threshold: '-', rates: '1%' },
    { section: '206C (1)', goods: 'Sale of Tendu Leaves', nature: '-', threshold: '-', rates: '5%' },
    { section: '206C (1)', goods: 'Sale of Timber obtained under a forest lease or other mode', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Sale of Any other forest produce not being Timber or tendu leaves', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Sale of Alcoholic Liquor for Human Consumption', nature: '-', threshold: '-', rates: '1%' },
    { section: '206C (1)', goods: 'Sale of Indian made for foreign liquor', nature: '-', threshold: '-', rates: '1%' },
    { section: '206C (1)', goods: 'Sale of Minerals, coal lignite, Iron ore by a trader', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C (1C)', goods: 'Lease or license of Parking lot, toll plaza, mining & quarrying', nature: '-', threshold: '-', rates: '2%' },
    { section: '206C (1F)', goods: 'Sale Value of Motor vehicle whether in cheque or in any other mode of receipt', nature: '-', threshold: 'Exceeding Rs. 10 Lakhs per transaction', rates: '1.00%' },
    { section: '206 (1G)', goods: 'Remittance under LRS – loan for education from financial institution u/s 80E (exceeding Rs. 7 Lakh)', nature: '-', threshold: 'Rs. 7 lacs', rates: '0.5% (from 01.10.2020)' },
    { section: '206 (1G)', goods: 'Remittance under LRS – other cases (exceeding Rs. 7 Lakh)', nature: '-', threshold: 'Rs. 7 lacs', rates: '5% (from 01.10.2020)' },
    { section: '206 (1G)', goods: 'Sale of Overseas Tour Package', nature: '-', threshold: '-', rates: '5% (from 01.10.2020)' },
    { section: '206 (1H)', goods: 'Sale of goods in excess of Rs. 50 Lakh in a year by seller', nature: '-', threshold: 'Turnover > Rs. 10 Crore', rates: '0.1%' },
    { section: '206C', goods: 'Foreign remittance through LRS exceeding Rs. 7 Lakh – loan for education u/s 80E', nature: '-', threshold: '-', rates: '0.5% (from 01.10.2020)' },
    { section: '206C', goods: 'Foreign remittance through LRS exceeding Rs. 7 Lakh – any other case', nature: '-', threshold: '-', rates: '5% (from 01.10.2020)' },
    { section: '206CC', goods: 'TCS rate in case of Non-availability of PAN', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
    { section: '206CCA', goods: 'TCS on non-filers of ITR at higher rates (applicable w.e.f 01.07.2021)', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
  ],
  '2021-22': [
    { section: '206C (1)', goods: 'Sale of Scrap', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C (1)', goods: 'Sale of Tendu Leaves', nature: '-', threshold: '-', rates: '5.00%' },
    { section: '206C (1)', goods: 'Sale of Timber obtained under a forest lease or other mode', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Sale of Any other forest produce not being Timber or tendu leaves', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C (1)', goods: 'Sale of Alcoholic Liquor for Human Consumption', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C', goods: 'Sale of Indian made for foreign liquor', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C (1C)', goods: 'Lease or license of Parking lot, toll plaza, mining & quarrying', nature: '-', threshold: '-', rates: '2.00%' },
    { section: '206C (1)', goods: 'Sale of Minerals, coal lignite, Iron ore by a trader', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C (1F)', goods: 'Sale Value of Motor vehicle whether in cheque or in any other mode of receipt', nature: '-', threshold: 'Exceeding Rs. 10 Lakhs per transaction', rates: '1.00%' },
    { section: '206C', goods: 'Foreign remittance through LRS exceeding Rs. 7 Lakh – loan for education u/s 80E', nature: '-', threshold: '-', rates: '0.5% (from 01.10.2020)' },
    { section: '206C', goods: 'Foreign remittance through LRS exceeding Rs. 7 Lakh – any other case', nature: '-', threshold: '-', rates: '5% (from 01.10.2020)' },
    { section: '206C', goods: 'Selling of overseas tour package', nature: '-', threshold: '-', rates: '5% (from 01.10.2020)' },
    { section: '206C', goods: 'Sale of goods (other than those being exported) exceeding Rs. 50 Lakh – turnover > Rs. 10 Crore', nature: '-', threshold: 'Rs. 50 Lakhs', rates: '0.1% (from 01.10.2020)' },
    { section: '206CC', goods: 'TCS rate in case of Non-availability of PAN', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
    { section: '206CCA', goods: 'TCS on non-filers of ITR at higher rates (applicable w.e.f 01.07.2021)', nature: '-', threshold: '-', rates: 'Higher of: Twice the rate | 5%' },
  ],
  '2020-21': [
    { section: '206C (1)', goods: 'Sale of Scrap', nature: '-', threshold: '-', rates: 'Apr–May 2020: 1.00% | From 14-05-2020: 0.75%' },
    { section: '206C (1)', goods: 'Sale of Tendu Leaves', nature: '-', threshold: '-', rates: 'Apr–May 2020: 5.00% | From 14-05-2020: 3.75%' },
    { section: '206C (1)', goods: 'Sale of Timber obtained under a forest lease or other mode', nature: '-', threshold: '-', rates: 'Apr–May 2020: 2.50% | From 14-05-2020: 1.875%' },
    { section: '206C (1)', goods: 'Sale of Any other forest produce not being Timber or tendu leaves', nature: '-', threshold: '-', rates: 'Apr–May 2020: 2.50% | From 14-05-2020: 1.875%' },
    { section: '206C (1)', goods: 'Sale of Alcoholic Liquor for Human Consumption', nature: '-', threshold: '-', rates: '1.00% (both periods)' },
    { section: '206C', goods: 'Sale of Indian made for foreign liquor', nature: '-', threshold: '-', rates: '1.00% (both periods)' },
    { section: '206C (1C)', goods: 'Lease or license of Parking lot, toll plaza, mining & quarrying', nature: '-', threshold: '-', rates: 'Apr–May 2020: 2.00% | From 14-05-2020: 1.5%' },
    { section: '206C (1)', goods: 'Sale of Minerals, coal lignite, Iron ore by a trader', nature: '-', threshold: '-', rates: 'Apr–May 2020: 1.00% | From 14-05-2020: 0.75%' },
    { section: '206C (1F)', goods: 'Sale Value of Motor vehicle whether in cheque or in any other mode of receipt', nature: '-', threshold: 'Exceeding Rs. 10 Lakhs per transaction', rates: 'Apr–May 2020: 1.00% | From 14-05-2020: 0.75%' },
  ],
  '2019-20': [
    { section: '206C', goods: 'Scrap', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C', goods: 'Tendu Leaves', nature: '-', threshold: '-', rates: '5.00%' },
    { section: '206C', goods: 'Timber obtained under a forest lease or other mode', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C', goods: 'Any other forest produce not being Timber or tendu leaves', nature: '-', threshold: '-', rates: '2.50%' },
    { section: '206C', goods: 'Alcoholic Liquor for Human Consumption', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C', goods: 'Indian made Foreign liquor', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C', goods: 'Parking lot, toll plaza, mining & quarrying', nature: '-', threshold: '-', rates: '2.00%' },
    { section: '206C', goods: 'Purchase of coal lignite, Iron ore by a trader', nature: '-', threshold: '-', rates: '1.00%' },
    { section: '206C', goods: 'Sale Value of Motor vehicle whether in cheque or in any other mode of receipt', nature: '-', threshold: 'Exceeding Rs. 10 Lakhs per transaction', rates: '1.00%' },
  ],
};

const NOTE1 = `No ITR filing by senior citizen if all the following conditions are satisfied:
1. The senior citizen is resident in India.
2. He is of the age of 75 years or more during the previous year.
3. He has only pension income and may also have interest income from the same bank (specified bank) in which he is receiving his pension income.
4. He has furnished a declaration in Form 12BBA to the specified bank.
5. Specified bank would be required to compute income after giving effect to deductions allowable under Chapter VI-A and rebate under section 87A and deduct Income Tax on the rates in force.
6. As per Notification no. S.O. 3595(E) dated 2nd Sep, 2021, specified banks means a banking company which is a scheduled bank and has been appointed as agents of RBI u/s 45 of the RBI act. Most of the major public sector banks, Private sector banks & foreign banks are covered.`;

const surchargeRows2526 = [
  ['Salary (Residents)', 'Upto 50 Lacs', 'Nil', 'Yes'],
  ['', '50 Lacs to 1 Crore', '10%', 'Yes'],
  ['', '> 1 Crore but upto 2 Crore', '15%', 'Yes'],
  ['', '> 2 crore but upto 5 crore', '25%', 'Yes'],
  ['', '> 5 crore', '37% (Old) / 25% (New)', 'Yes'],
  ['Other Payments to Residents', 'No', 'Nil', 'No'],
];

const surchargeRows2223 = [
  ['Salary (Residents)', 'Upto 50 Lacs', 'Nil', 'Yes'],
  ['', '50 Lacs to 1 Crore', '10%', 'Yes'],
  ['', '> 1 Crore but upto 2 Crore', '15%', 'Yes'],
  ['', '> 2 crore but upto 5 crore', '25%', 'Yes'],
  ['', '> 5 crore', '37%', 'Yes'],
  ['Other Payments to Residents', 'No', 'Nil', 'No'],
  ['Non Resident (other than company)', '> 50 crore but upto 1 crore', '10%', 'Yes'],
  ['', '> 1 crore', '15%', 'Yes'],
  ['Non Resident Company', 'Between 1 crore and 10 crore', '2%', 'Yes'],
  ['', '> 10 crore', '5%', 'Yes'],
  ['Non Resident (Co-operative society & Firms)', '> 1 crore', '12%', 'Yes'],
];

/* ─── COMPONENT ─── */

const TdsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2025-26');
  const [search, setSearch] = useState('');

  const filteredTds = useMemo(() => {
    const rows = tdsData[selectedYear] || [];
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(
      (r) =>
        r.section.toLowerCase().includes(q) ||
        r.payment.toLowerCase().includes(q)
    );
  }, [selectedYear, search]);

  const filteredTcs = useMemo(() => {
    const rows = tcsData[selectedYear] || [];
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(
      (r) =>
        r.section.toLowerCase().includes(q) ||
        r.goods.toLowerCase().includes(q)
    );
  }, [selectedYear, search]);

  const showNote1 = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22'].includes(selectedYear);
  const surchargeData = ['2022-23'].includes(selectedYear) ? surchargeRows2223 : surchargeRows2526;

  return (
    <div>
      <Navbar />

      <div className="tds-content">
        <h1 className="tds-main-title">TDS / TCS Rates Chart</h1>

        {/* Year Tabs */}
        <div className="year-tabs">
          {YEARS.map((yr) => (
            <button
              key={yr}
              className={`year-tab ${selectedYear === yr ? 'active' : ''}`}
              onClick={() => { setSelectedYear(yr); setSearch(''); }}
            >
              F.Y. {yr}
            </button>
          ))}
        </div>

        <h2 className="section-heading">TDS / TCS RATES FOR F.Y. {selectedYear}</h2>

        {/* Search */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Section / Nature of Payment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TDS Table */}
        <h3 className="sub-heading">TDS Rates</h3>
        <div className="table-wrapper">
          <table className="tds-table">
            <thead>
              <tr>
                <th className="col-section">Section</th>
                <th className="col-payment">Nature of Payment</th>
                <th className="col-threshold">Threshold Limit</th>
                <th className="col-rates">Rates</th>
              </tr>
            </thead>
            <tbody>
              {filteredTds.length > 0 ? (
                filteredTds.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                    <td className="col-section">{row.section}</td>
                    <td>{row.payment}</td>
                    <td>{row.threshold}</td>
                    <td>{row.rates}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="no-result">No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="footnote">* Other than Individual or HUF (except those covered u/s 44AB)</p>

        {/* NOTE-1 */}
        {showNote1 && (
          <div className="note-box">
            <h4>NOTE-1</h4>
            {NOTE1.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        {/* TCS Table */}
        <h3 className="sub-heading tcs-heading">TCS Rates</h3>
        <div className="table-wrapper">
          <table className="tds-table">
            <thead>
              <tr>
                <th className="col-section">Section</th>
                <th className="col-payment">Goods / Services</th>
                <th>Nature</th>
                <th className="col-threshold">Threshold Limit</th>
                <th className="col-rates">Rates</th>
              </tr>
            </thead>
            <tbody>
              {filteredTcs.length > 0 ? (
                filteredTcs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                    <td className="col-section">{row.section}</td>
                    <td>{row.goods}</td>
                    <td>{row.nature}</td>
                    <td>{row.threshold}</td>
                    <td>{row.rates}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="no-result">No matching records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Surcharges */}
        <h3 className="sub-heading">Surcharges &amp; Education Cess</h3>
        <div className="table-wrapper">
          <table className="tds-table surcharge-table">
            <thead>
              <tr>
                <th>Type of Payment</th>
                <th>Surcharge</th>
                <th>Rate</th>
                <th>Health &amp; Education Cess (4.00%)</th>
              </tr>
            </thead>
            <tbody>
              {surchargeData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Interest */}
        <h3 className="sub-heading">Interest for Failure to Deduct Tax at Source / Delay in Payment of TDS</h3>
        <div className="table-wrapper">
          <table className="tds-table interest-table">
            <thead>
              <tr>
                <th>Stage of Deduction</th>
                <th>Rate per month or part of the month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-even">
                <td>From date when deductible till actual deduction</td>
                <td>1.00%</td>
              </tr>
              <tr className="row-odd">
                <td>From date of deduction till payment</td>
                <td>1.50%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="last-updated">Note: Last updated on 03.10.2024</p>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default TdsPage;
