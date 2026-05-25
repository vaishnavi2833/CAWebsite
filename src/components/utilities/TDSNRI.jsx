import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import Contact from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import './tdsnri.css';

/* ─── Data ──────────────────────────────────────────────────────────── */

// Row shape: { section, payment, nonResident, foreignCo }
// For Section 195 sub-items: { section:'195-sub', label, nonResident, foreignCo }

const data2526 = [
  { section:'192',      payment:'Payment of Salary', nonResident:'Normal Slab Rate (Non-Resident other than company)', foreignCo:'NA' },
  { section:'192A',     payment:'Payment of accumulated balance of provident fund which is taxable in the hands of an employee.', nonResident:'10%', foreignCo:'NA' },
  { section:'194B',     payment:'Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort (Above Rs. 10,000/- in respect of a single transaction)', nonResident:'30%', foreignCo:'30%' },
  { section:'194BA',    payment:'Winning from Online Games', nonResident:'30%', foreignCo:'30%' },
  { section:'194BB',    payment:'Winnings from horse races (Above Rs. 10,000/- in respect of a single transaction)', nonResident:'30%', foreignCo:'30%' },
  { section:'194E',     payment:'Payment to non-resident sportsmen/sports association', nonResident:'20%', foreignCo:'20%' },
  { section:'194EE',    payment:'Payment in respect of deposits under National Savings Scheme', nonResident:'10%', foreignCo:'NA' },
  { section:'194F',     payment:'Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India', nonResident:'20%', foreignCo:'NA' },
  { section:'194G',     payment:'Commission on sale of lottery tickets', nonResident:'2%', foreignCo:'2%' },
  { section:'194LB',    payment:'Payment of interest on infrastructure debt fund', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(a) – Interest income of a business trust from SPV, distributed to unit holders', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(b) – Dividend income of a business trust from SPV (entire share capital held by it except Govt.) distributed to unit holders', nonResident:'10%', foreignCo:'10%' },
  { section:'194LBA(3)','payment':'Payment of the nature referred to in section 10(23FCA) by business trust to unit holders (Rental/Leasing income on assets owned by the business trust)', nonResident:'30%', foreignCo:'35%' },
  { section:'194LBB',   payment:'Investment fund paying an income to a unit holder [other than income exempt under Section 10(23FBB)]', nonResident:'30%', foreignCo:'35%' },
  { section:'194LBC',   payment:'Income in respect of investment made in a securitisation trust (specified in Explanation of section 115TCA)', nonResident:'30%', foreignCo:'35%' },
  { section:'194LC',    payment:'Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds (including long-term infrastructure bond)*', nonResident:'5% / 4%*', foreignCo:'5% or 4%*' },
  { section:'194LC',    payment:'Long Term Bond / Rupee Denominated Bonds issued on or after 01 July 2023 listed on SE located in IFSC  (* In case where interest is payable in respect of Long-term Bond or Rupee Denominated Bond listed on recognised stock exchange located in IFSC)', nonResident:'9%', foreignCo:'9%' },
  { section:'194LD',    payment:'Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor', nonResident:'5%', foreignCo:'5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal from Bank / Co-operative bank / Post office etc. (* by persons who have not filed ITR for 3 previous years immediately preceding the previous year and due date has expired): Cash withdrawal between Rs. 20 lakhs to Rs. 1 crore — 2%; Cash withdrawal above Rs. 1 crore — 5%', nonResident:'2% / 5%', foreignCo:'2% / 5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal from Bank, Post office etc. in case of others.', nonResident:'2%', foreignCo:'2%' },
  { section:'194T',     payment:'Payment of Remuneration / interest by firm to its partners', nonResident:'10%', foreignCo:'—' },
  { section:'195',      isSec195:true, payment:'Payment of any other sum to a Non-resident', subs:[
    { label:'(a) Income of foreign exchange assets payable to a Non-resident Indian Citizen', nonResident:'20%', foreignCo:'NA' },
    { label:'(b) Income by way of long-term capital gains referred to in Section 115E', nonResident:'12.5%', foreignCo:'—' },
    { label:'(c) Income by way of long-term capital gains referred to in section 112(1)(c)(iii)', nonResident:'12.5%', foreignCo:'12.5%' },
    { label:'(d) Income by way of long-term capital gains referred to in Section 112A exceeding Rs. 1 Lakh', nonResident:'12.5%', foreignCo:'12.5%' },
    { label:'(e) Income by way of short-term capital gains referred to in Section 111A', nonResident:'20%', foreignCo:'20%' },
    { label:'(f) Any other long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]', nonResident:'12.5%', foreignCo:'12.5%' },
    { label:'(g) Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred in foreign currency (not being interest referred to in Sec. 194LB or 194LC)', nonResident:'20%', foreignCo:'20%' },
    { label:'(g)(i) Income by way of dividend from a unit in IFSC', nonResident:'10%', foreignCo:'10%' },
    { label:'(g)(ii) Income by way of dividend other than above', nonResident:'20%', foreignCo:'20%' },
    { label:'(h) Income by way of royalty — in consideration for transfer of copyright in book (1st proviso to Sec.115A(1A)) or computer software (2nd proviso to Sec.115A(1A))', nonResident:'20%', foreignCo:'20%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)] — If Agreement made after 31 March 1961 but before 1 April 1976', nonResident:'20%', foreignCo:'50%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)] — If Agreement made after 1 April 1976', nonResident:'20%', foreignCo:'20%' },
    { label:'(j) Income by way of fees for technical services — If Agreement made after 29 Feb 1964 but before 1 April 1976', nonResident:'20%', foreignCo:'50%' },
    { label:'(j) Income by way of fees for technical services — If Agreement made after 1 April 1976', nonResident:'20%', foreignCo:'20%' },
    { label:'(k) Any other income', nonResident:'30%', foreignCo:'35%' },
  ]},
  { section:'196A',     payment:'Income in respect of units of non-resident / Foreign company', nonResident:'20%', foreignCo:'20%' },
  { section:'196B',     payment:'Income from units (including long-term capital gain on transfer of such units) to an offshore fund', nonResident:'12.5%', foreignCo:'12.5%' },
  { section:'196C',     payment:'Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer of such bonds or GDR)', nonResident:'12.5%', foreignCo:'12.5%' },
  { section:'196D(1)',  payment:'Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities)', nonResident:'20%', foreignCo:'20%' },
  { section:'196D(1A)', payment:'Interest income from securities of specified funds', nonResident:'10%', foreignCo:'10%' },
];

const data2425 = [
  { section:'192',      payment:'Payment of Salary', nonResident:'Normal Slab Rate (Non-Resident other than company)', foreignCo:'NA' },
  { section:'192A',     payment:'Payment of accumulated balance of provident fund which is taxable in the hands of an employee.', nonResident:'10%', foreignCo:'NA' },
  { section:'194B',     payment:'Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort', nonResident:'30%', foreignCo:'30%' },
  { section:'194BA',    payment:'Winning from Online Games', nonResident:'30%', foreignCo:'30%' },
  { section:'194BB',    payment:'Winnings from horse races', nonResident:'30%', foreignCo:'30%' },
  { section:'194E',     payment:'Payment to non-resident sportsmen/sports association', nonResident:'20%', foreignCo:'20%' },
  { section:'194EE',    payment:'Payment in respect of deposits under National Savings Scheme', nonResident:'10%', foreignCo:'NA' },
  { section:'194F',     payment:'Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India', nonResident:'20%', foreignCo:'NA' },
  { section:'194G',     payment:'Commission on sale of lottery tickets', nonResident:'Upto 30 Sep 2024: 5%\nWef 1 Oct 2024: 2%', foreignCo:'Upto 30 Sep 2024: 5%\nWef 1 Oct 2024: 2%' },
  { section:'194LB',    payment:'Payment of interest on infrastructure debt fund', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(a) – Interest income of a business trust from SPV', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(b) – Dividend income of a business trust from SPV', nonResident:'10%', foreignCo:'10%' },
  { section:'194LBA(3)','payment':'Payment of the nature referred to in section 10(23FCA) by business trust to unit holders (Rental/Leasing income)', nonResident:'30%', foreignCo:'35%' },
  { section:'194LBB',   payment:'Investment fund paying an income to a unit holder [other than income exempt under Section 10(23FBB)]', nonResident:'30%', foreignCo:'35%' },
  { section:'194LBC',   payment:'Income in respect of investment made in a securitisation trust (specified in Explanation of section 115TCA)', nonResident:'30%', foreignCo:'35%' },
  { section:'194LC',    payment:'Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds*', nonResident:'5% / 4%*', foreignCo:'5% or 4%*' },
  { section:'194LC',    payment:'Long Term Bond / Rupee Denominated Bonds issued on or after 01 July 2023 listed on SE located in IFSC', nonResident:'9%', foreignCo:'9%' },
  { section:'194LD',    payment:'Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor', nonResident:'5%', foreignCo:'5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal (* by persons who have not filed ITR for 3 previous years): Cash withdrawal between Rs. 20 lakhs to Rs. 1 crore — 2%; Cash withdrawal above Rs. 1 crore — 5%', nonResident:'2% / 5%', foreignCo:'2% / 5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal from Bank, Post office etc. in case of others.', nonResident:'2%', foreignCo:'2%' },
  { section:'194T',     payment:'Payment of Remuneration / interest by firm to its partners', nonResident:'FY 24-25: Nil\nFY 25-26 onwards: 10%', foreignCo:'—' },
  { section:'195',      isSec195:true, payment:'Payment of any other sum to a Non-resident', subs:[
    { label:'(a) Income of foreign exchange assets payable to a Non-resident Indian Citizen', nonResident:'20%', foreignCo:'NA' },
    { label:'(b) Income by way of long-term capital gains referred to in Section 115E', nonResident:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%', foreignCo:'—' },
    { label:'(c) Income by way of long-term capital gains referred to in section 112(1)(c)(iii)', nonResident:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%', foreignCo:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%' },
    { label:'(d) Income by way of long-term capital gains referred to in Section 112A exceeding Rs. 1 Lakh', nonResident:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%', foreignCo:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%' },
    { label:'(e) Income by way of short-term capital gains referred to in Section 111A', nonResident:'Upto 22 Jul 2024: 15%\nWef 23 Jul 2024: 20%', foreignCo:'Upto 22 Jul 2024: 15%\nWef 23 Jul 2024: 20%' },
    { label:'(f) Any other long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]', nonResident:'Upto 22 Jul 2024: 20%\nWef 23 Jul 2024: 12.5%', foreignCo:'Upto 22 Jul 2024: 20%\nWef 23 Jul 2024: 12.5%' },
    { label:'(g) Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred in foreign currency (not being interest referred to in Sec. 194LB or 194LC)', nonResident:'20%', foreignCo:'20%' },
    { label:'(g)(i) Income by way of dividend from a unit in IFSC', nonResident:'10%', foreignCo:'10%' },
    { label:'(g)(ii) Income by way of dividend other than above', nonResident:'20%', foreignCo:'20%' },
    { label:'(h) Income by way of royalty — in consideration for transfer of copyright/computer software (Sec.115A(1A))', nonResident:'20%', foreignCo:'20%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)] — If Agreement made after 31 March 1961 but before 1 April 1976', nonResident:'20%', foreignCo:'50%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)] — If Agreement made after 1 April 1976', nonResident:'20%', foreignCo:'20%' },
    { label:'(j) Income by way of fees for technical services — If Agreement made after 29 Feb 1964 but before 1 April 1976', nonResident:'20%', foreignCo:'50%' },
    { label:'(j) Income by way of fees for technical services — If Agreement made after 1 April 1976', nonResident:'20%', foreignCo:'20%' },
    { label:'(k) Any other income', nonResident:'30%', foreignCo:'35%' },
  ]},
  { section:'196A',     payment:'Income in respect of units of non-resident / Foreign company', nonResident:'20%', foreignCo:'20%' },
  { section:'196B',     payment:'Income from units (including long-term capital gain on transfer) to an offshore fund', nonResident:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%', foreignCo:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%' },
  { section:'196C',     payment:'Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer)', nonResident:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%', foreignCo:'Upto 22 Jul 2024: 10%\nWef 23 Jul 2024: 12.5%' },
  { section:'196D(1)',  payment:'Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities)', nonResident:'20%', foreignCo:'20%' },
  { section:'196D(1A)', payment:'Interest income from securities of specified funds', nonResident:'10%', foreignCo:'10%' },
];

const data2324 = [
  { section:'192',      payment:'Payment of Salary', nonResident:'Normal Slab Rate (Non-Resident other than company)', foreignCo:'NA' },
  { section:'192A',     payment:'Payment of accumulated balance of provident fund which is taxable in the hands of an employee.', nonResident:'10%', foreignCo:'NA' },
  { section:'194B',     payment:'Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort', nonResident:'30%', foreignCo:'30%' },
  { section:'194BA',    payment:'Winning from Online Games', nonResident:'30%', foreignCo:'30%' },
  { section:'194BB',    payment:'Winnings from horse races', nonResident:'30%', foreignCo:'30%' },
  { section:'194E',     payment:'Payment to non-resident sportsmen/sports association', nonResident:'20%', foreignCo:'20%' },
  { section:'194EE',    payment:'Payment in respect of deposits under National Savings Scheme', nonResident:'10%', foreignCo:'NA' },
  { section:'194F',     payment:'Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India', nonResident:'20%', foreignCo:'NA' },
  { section:'194G',     payment:'Commission on sale of lottery tickets', nonResident:'5%', foreignCo:'5%' },
  { section:'194LB',    payment:'Payment of interest on infrastructure debt fund', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(a) – Interest income of a business trust from SPV', nonResident:'5%', foreignCo:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(b) – Dividend income of a business trust from SPV', nonResident:'10%', foreignCo:'10%' },
  { section:'194LBA(3)','payment':'Payment of the nature referred to in section 10(23FCA) by business trust to unit holders (Rental/Leasing income)', nonResident:'30%', foreignCo:'40%' },
  { section:'194LBB',   payment:'Investment fund paying an income to a unit holder [other than income exempt under Section 10(23FBB)]', nonResident:'30%', foreignCo:'40%' },
  { section:'194LBC',   payment:'Income in respect of investment made in a securitisation trust (specified in Explanation of section 115TCA)', nonResident:'30%', foreignCo:'40%' },
  { section:'194LC',    payment:'Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds*', nonResident:'5% / 4%*', foreignCo:'5% or 4%*' },
  { section:'194LC',    payment:'Long Term Bond / Rupee Denominated Bonds issued on or after 01 July 2023 listed on SE located in IFSC', nonResident:'9%', foreignCo:'9%' },
  { section:'194LD',    payment:'Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor', nonResident:'5%', foreignCo:'5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal (* by persons who have not filed ITR for 3 previous years): Cash withdrawal between Rs. 20 lakhs to Rs. 1 crore — 2%; Cash withdrawal above Rs. 1 crore — 5%', nonResident:'2% / 5%', foreignCo:'2% / 5%' },
  { section:'194N',     payment:'Aggregate Cash withdrawal from Bank, Post office etc. in case of others.', nonResident:'2%', foreignCo:'2%' },
  { section:'195',      isSec195:true, payment:'Payment of any other sum to a Non-resident', subs:[
    { label:'(a) Income of foreign exchange assets payable to a Non-resident Indian Citizen', nonResident:'20%', foreignCo:'NA' },
    { label:'(b) Income by way of long-term capital gains referred to in Section 115E', nonResident:'10%', foreignCo:'10%' },
    { label:'(c) Income by way of long-term capital gains referred to in section 112(1)(c)(iii)', nonResident:'10%', foreignCo:'10%' },
    { label:'(d) Income by way of long-term capital gains referred to in Section 112A exceeding Rs. 1 Lakh', nonResident:'10%', foreignCo:'10%' },
    { label:'(e) Income by way of short-term capital gains referred to in Section 111A', nonResident:'15%', foreignCo:'15%' },
    { label:'(f) Any other long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]', nonResident:'20%', foreignCo:'20%' },
    { label:'(g) Income by way of interest payable by Government or an Indian concern on moneys borrowed in foreign currency (not being interest referred to in Sec. 194LB or 194LC)', nonResident:'20%', foreignCo:'20%' },
    { label:'(g)(i) Income by way of dividend from a unit in IFSC', nonResident:'10%', foreignCo:'10%' },
    { label:'(g)(ii) Income by way of dividend other than above', nonResident:'20%', foreignCo:'20%' },
    { label:'(h) Income by way of royalty — in consideration for transfer of copyright/computer software (Sec.115A(1A))', nonResident:'20%', foreignCo:'20%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)] / fees for technical services — Agreement after 29 Feb 1964 but before 1 Apr 1974', nonResident:'20%', foreignCo:'50%' },
    { label:'(j) Income by way of fees for technical services — Agreement after 29 Feb 1964 but before 1 Apr 1974', nonResident:'20%', foreignCo:'50%' },
    { label:'(k) Any other income', nonResident:'30%', foreignCo:'40%' },
  ]},
  { section:'196A',     payment:'Income in respect of units of non-resident / Foreign company', nonResident:'20%', foreignCo:'20%' },
  { section:'196B',     payment:'Income from units (including long-term capital gain on transfer) to an offshore fund', nonResident:'10%', foreignCo:'10%' },
  { section:'196C',     payment:'Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer)', nonResident:'10%', foreignCo:'10%' },
  { section:'196D(1)',  payment:'Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities)', nonResident:'20%', foreignCo:'20%' },
  { section:'196D(1A)', payment:'Interest income from securities of specified funds (Surcharge / Health edu. cess is Nil)', nonResident:'10%', foreignCo:'10%' },
];

// FY 2022-23: two separate tables (non-resident & foreign company)
const data2223_nr = [
  { section:'192',      payment:'Payment of Salary', rate:'Normal Slab Rate' },
  { section:'192A',     payment:'Payment of accumulated balance of provident fund which is taxable in the hands of an employee.', rate:'10%' },
  { section:'194B',     payment:'Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort', rate:'30%' },
  { section:'194BB',    payment:'Income by way of winnings from horse races', rate:'30%' },
  { section:'194E',     payment:'Payment to non-resident sportsmen/sports association', rate:'20%' },
  { section:'194EE',    payment:'Payment in respect of deposits under National Savings Scheme', rate:'10%' },
  { section:'194F',     payment:'Payment on account of repurchase of unit by Mutual Fund or Unit Trust of India', rate:'20%' },
  { section:'194G',     payment:'Commission, etc., on sale of lottery tickets', rate:'5%' },
  { section:'194LB',    payment:'Payment of interest on infrastructure debt fund', rate:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(a)', rate:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(b)', rate:'10%' },
  { section:'194LBA(3)','payment':'Payment of the nature referred to in section 10(23FCA) by business trust to unit holders', rate:'30%' },
  { section:'194LBB',   payment:'Investment fund paying an income to a unit holder [other than income exempt under Section 10(23FBB)]', rate:'30%' },
  { section:'194LBC',   payment:'Income in respect of investment made in a securitisation trust (specified in Explanation of section 115TCA)', rate:'30%' },
  { section:'194LC',    payment:'Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds (including long-term infrastructure bond). * In case where interest is payable in respect of Long-term Bond or Rupee Denominated Bond listed on recognised stock exchange located in IFSC', rate:'5% or 4%*' },
  { section:'194LD',    payment:'Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor', rate:'5%' },
  { section:'195',      isSec195_simple:true, payment:'Payment of any other sum to a Non-resident', subs:[
    { label:'(a) Income in respect of investment made by a Non-resident Indian Citizen', rate:'20%' },
    { label:'(b) Income by way of long-term capital gains referred to in Section 115E in case of a Non-resident Indian Citizen', rate:'10%' },
    { label:'(c) Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-Section (1) of Section 112', rate:'10%' },
    { label:'(d) Income by way of long-term capital gains referred to in Section 112A', rate:'10%' },
    { label:'(e) Income by way of short-term capital gains referred to in Section 111A', rate:'15%' },
    { label:'(f) Any other income by way of long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]', rate:'20%' },
    { label:'(g) Income by way of interest payable by Government or an Indian concern on moneys borrowed or debt incurred in foreign currency (not being interest referred to in Sec. 194LB or 194LC)', rate:'20%' },
    { label:'(h) Income by way of royalty — in consideration for transfer of copyright/computer software (Sec.115A(1A))', rate:'10%' },
    { label:'(i) Income by way of royalty [not being royalty in (h)]', rate:'10%' },
    { label:'(j) Income by way of fees for technical services', rate:'10%' },
    { label:'(k) Any other income', rate:'30%' },
  ]},
  { section:'196B',     payment:'Income from units (including long-term capital gain on transfer) to an offshore fund', rate:'10%' },
  { section:'196C',     payment:'Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer)', rate:'10%' },
  { section:'196D',     payment:'Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities) — Note: Tax shall be deducted at the rate provided under DTAA if same is lower than the existing TDS rate of 20%.', rate:'20%' },
];

const data2223_fc = [
  { section:'194B',     payment:'Income by way of winnings from lotteries, crossword puzzles, card games and other games of any sort', rate:'30%' },
  { section:'194BB',    payment:'Income by way of winnings from horse races', rate:'30%' },
  { section:'194E',     payment:'Payment to non-resident sports association', rate:'20%' },
  { section:'194G',     payment:'Commission, etc., on sale of lottery tickets', rate:'5%' },
  { section:'194LB',    payment:'Payment of interest on infrastructure debt fund', rate:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(a)', rate:'5%' },
  { section:'194LBA(2)','payment':'Payment of the nature referred to in Section 10(23FC)(b)', rate:'10%' },
  { section:'194LBA(3)','payment':'Business trust distributing income from renting or leasing real estate asset to unit holders', rate:'40%' },
  { section:'194LBB',   payment:'Investment fund paying an income to a unit holder [other than income exempt under Section 10(23FBB)]', rate:'40%' },
  { section:'194LBC',   payment:'Income in respect of investment made in a securitisation trust (specified in Explanation of section 115TCA)', rate:'40%' },
  { section:'194LC',    payment:'Payment of interest by an Indian Company or a business trust in respect of money borrowed in foreign currency under a loan agreement or by way of issue of long-term bonds. * In case where interest is payable in respect of Long-term Bond or Rupee Denominated Bond listed on recognised stock exchange located in IFSC', rate:'5% or 4%*' },
  { section:'194LD',    payment:'Payment of interest on rupee denominated bond of an Indian Company or Government securities to a Foreign Institutional Investor or a Qualified Foreign Investor', rate:'5%' },
  { section:'195',      isSec195_simple:true, payment:'Payment of any other sum', subs:[
    { label:'(a) Income by way of long-term capital gains referred to in sub-clause (iii) of clause (c) of sub-section (1) of Section 112', rate:'10%' },
    { label:'(b) Income by way of long-term capital gains referred to in Section 112A', rate:'10%' },
    { label:'(c) Income by way of short-term capital gains referred to in Section 111A', rate:'15%' },
    { label:'(d) Any other income by way of long-term capital gains [not being long-term capital gains referred to in clauses 10(33), 10(36) and 112A]', rate:'20%' },
    { label:'(e) Income by way of interest payable by Government or an Indian concern on moneys borrowed in foreign currency (not being interest referred to in Sec. 194LB or 194LC)', rate:'20%' },
    { label:'(f) Income by way of royalty — after 31 March 1976 — copyright/computer software (Sec.115A(1A))', rate:'10%' },
    { label:'(g) Income by way of royalty [not being royalty in (f)] — Agreement made after 31 March 1961 but before 1 April 1976', rate:'50%' },
    { label:'(g) Income by way of royalty [not being royalty in (f)] — Agreement made after 31 March 1976', rate:'10%' },
    { label:'(h) Income by way of fees for technical services — Agreement made after 29 Feb 1964 but before 1 April 1976', rate:'50%' },
    { label:'(h) Income by way of fees for technical services — Agreement made after 31 March 1976', rate:'10%' },
    { label:'(i) Any other income', rate:'40%' },
  ]},
  { section:'196B',     payment:'Income from units (including long-term capital gain on transfer) to an offshore fund', rate:'10%' },
  { section:'196C',     payment:'Income from foreign currency bonds or GDR of an Indian company (including long-term capital gain on transfer)', rate:'10%' },
  { section:'196D',     payment:'Income of foreign Institutional Investors from securities (not being dividend or capital gain arising from such securities) — Note: Tax shall be deducted at the rate provided under DTAA if same is lower than the existing TDS rate of 20%.', rate:'20%' },
];

const surchargeRows_2526_2425 = [
  { payee:'Non Resident (other than company)', bracket:'> 50 Lakhs but upto 1 Crore', rate:'10%', cess:'Yes' },
  { payee:'',                                  bracket:'> 1 Crore but upto 2 Crore',  rate:'15%', cess:'Yes' },
  { payee:'',                                  bracket:'> 2 Crore but upto 5 Crore',  rate:'25%', cess:'Yes' },
  { payee:'',                                  bracket:'> 5 Crore',                   rate:'37% (Old Regime) / 25% (New Regime)', cess:'Yes' },
  { payee:'Non Resident Company',              bracket:'Between 1 Crore and 10 Crore',rate:'2%',  cess:'Yes' },
  { payee:'',                                  bracket:'> 10 Crore',                  rate:'5%',  cess:'Yes' },
];

const surchargeRows_2324 = [
  { payee:'Non Resident (other than company)', bracket:'> 50 Lakhs but upto 1 Crore', rate:'10%', cess:'Yes' },
  { payee:'',                                  bracket:'> 1 Crore but upto 2 Crore',  rate:'15%', cess:'Yes' },
  { payee:'',                                  bracket:'> 2 Crore but upto 5 Crore',  rate:'25%', cess:'Yes' },
  { payee:'',                                  bracket:'> 5 Crore',                   rate:'37% (Old Regime) / 25% (New Regime)', cess:'Yes' },
  { payee:'Non Resident Company',              bracket:'Between 1 Crore and 10 Crore',rate:'2%',  cess:'Yes' },
  { payee:'',                                  bracket:'> 10 Crore',                  rate:'5%',  cess:'Yes' },
  { payee:'Non Resident (Co-operative society & Firms)', bracket:'> 1 Crore',         rate:'12%', cess:'Yes' },
];

/* ─── Table renderers ────────────────────────────────────────────────── */

function renderRate(val) {
  return val.split('\n').map((line, i) => (
    <span key={i} className="nri-rate-line">{line}</span>
  ));
}

function SplitTable({ rows, searchQ }) {
  const q = searchQ.toLowerCase();
  const filtered = rows.filter(r => {
    if (!q) return true;
    return r.section.toLowerCase().includes(q) || r.payment.toLowerCase().includes(q);
  });

  return (
    <div className="nri-table-scroll">
      <table className="nri-table">
        <thead>
          <tr>
            <th className="col-section">Section</th>
            <th className="col-payment">Nature of Payment</th>
            <th className="col-rate">Non-Resident</th>
            <th className="col-rate">Foreign Company</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr><td colSpan={4} className="no-results">No matching entries found.</td></tr>
          )}
          {filtered.map((r, i) => {
            if (r.isSec195) {
              return (
                <React.Fragment key={i}>
                  <tr className="sec195-header-row">
                    <td className="col-section" rowSpan={r.subs.length + 1}><strong>{r.section}</strong></td>
                    <td colSpan={3} className="sec195-title">{r.payment}</td>
                  </tr>
                  {r.subs.map((sub, j) => (
                    <tr key={j} className={j % 2 === 0 ? 'row-even' : 'row-odd'}>
                      <td className="sub-label">{sub.label}</td>
                      <td className="col-rate">{renderRate(sub.nonResident)}</td>
                      <td className="col-rate">{renderRate(sub.foreignCo)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            }
            return (
              <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="col-section"><strong>{r.section}</strong></td>
                <td className="col-payment">{r.payment}</td>
                <td className="col-rate">{renderRate(r.nonResident)}</td>
                <td className="col-rate">{renderRate(r.foreignCo)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function SimpleTable({ rows, title, searchQ }) {
  const q = searchQ.toLowerCase();
  const filtered = rows.filter(r => {
    if (!q) return true;
    return r.section.toLowerCase().includes(q) || r.payment.toLowerCase().includes(q);
  });

  return (
    <div className="nri-table-scroll">
      {title && <h3 className="nri-sub-heading">{title}</h3>}
      <table className="nri-table">
        <thead>
          <tr>
            <th className="col-section">Section</th>
            <th className="col-payment">Nature of Payment</th>
            <th className="col-rate">TDS Rate</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 && (
            <tr><td colSpan={3} className="no-results">No matching entries found.</td></tr>
          )}
          {filtered.map((r, i) => {
            if (r.isSec195_simple) {
              return (
                <React.Fragment key={i}>
                  <tr className="sec195-header-row">
                    <td className="col-section" rowSpan={r.subs.length + 1}><strong>{r.section}</strong></td>
                    <td colSpan={2} className="sec195-title">{r.payment}</td>
                  </tr>
                  {r.subs.map((sub, j) => (
                    <tr key={j} className={j % 2 === 0 ? 'row-even' : 'row-odd'}>
                      <td className="sub-label">{sub.label}</td>
                      <td className="col-rate">{renderRate(sub.rate)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            }
            return (
              <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="col-section"><strong>{r.section}</strong></td>
                <td className="col-payment">{r.payment}</td>
                <td className="col-rate">{renderRate(r.rate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function SurchargeTable({ rows }) {
  let prevPayee = '';
  return (
    <div className="nri-table-scroll">
      <h3 className="nri-sub-heading">Surcharge &amp; Health and Education Cess</h3>
      <table className="nri-table surcharge-table">
        <thead>
          <tr>
            <th>Payment Made To</th>
            <th>Income Bracket</th>
            <th>Surcharge Rate</th>
            <th>Health &amp; Education Cess (4%)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const showPayee = r.payee !== '';
            if (r.payee !== '') prevPayee = r.payee;
            return (
              <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td>{showPayee ? <strong>{r.payee}</strong> : ''}</td>
                <td>{r.bracket}</td>
                <td className="col-rate">{r.rate}</td>
                <td className="col-rate">{r.cess}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */

const YEARS = ['2025-26', '2024-25', '2023-24', '2022-23'];

export default function TDSNRI() {
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState('2025-26');
  const [search, setSearch] = useState('');

  const noteText = 'Note: Tax shall be deducted at the rate provided under DTAA if the same is lower than the existing TDS rate.';

  function renderYear() {
    if (activeYear === '2025-26') return (
      <>
        <SplitTable rows={data2526} searchQ={search} />
        <p className="nri-note">{noteText}</p>
        <SurchargeTable rows={surchargeRows_2526_2425} />
      </>
    );
    if (activeYear === '2024-25') return (
      <>
        <SplitTable rows={data2425} searchQ={search} />
        <p className="nri-note">{noteText}</p>
        <SurchargeTable rows={surchargeRows_2526_2425} />
      </>
    );
    if (activeYear === '2023-24') return (
      <>
        <SplitTable rows={data2324} searchQ={search} />
        <p className="nri-note">{noteText}</p>
        <SurchargeTable rows={surchargeRows_2324} />
      </>
    );
    if (activeYear === '2022-23') return (
      <>
        <p className="nri-section-note">As amended by Finance Act, 2022</p>
        <SimpleTable rows={data2223_nr} searchQ={search} title="1. Where the person is not resident in India" />
        <p className="nri-note">{noteText}</p>
        <SimpleTable rows={data2223_fc} searchQ={search} title="2. In the case of a company, where the company is not a domestic company" />
        <p className="nri-note">{noteText}</p>
        <p className="nri-note">The rate of TDS shall be increased by applicable surcharge and Health &amp; Education Cess.</p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="nri-page">
      <div className="nri-content">
        <h1 className="nri-page-title">TDS Rates for Non-Residents &amp; Foreign Companies</h1>

        {/* Year Tabs */}
        <div className="nri-year-tabs">
          {YEARS.map(y => (
            <button
              key={y}
              className={`nri-year-tab${activeYear === y ? ' active' : ''}`}
              onClick={() => { setActiveYear(y); setSearch(''); }}
            >
              FY {y}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="nri-search-bar">
          <input
            type="text"
            placeholder="Search by Section / Nature of Payment..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && <button className="nri-clear-btn" onClick={() => setSearch('')}>✕</button>}
        </div>

        {/* Table Content */}
        <div className="nri-year-content">
          {renderYear()}
        </div>

        <p className="nri-last-updated">Last updated: 05.04.2023</p>
      </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
