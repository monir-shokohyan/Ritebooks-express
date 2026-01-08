/* eslint-disable sonarjs/no-duplicate-string */
import { IconType } from 'react-icons'
import {
  FaBalanceScale,
  FaBriefcase,
  FaCalculator,
  FaCalendarAlt,
  FaChartLine,
  FaClock,
  FaCodeBranch,
  FaDollarSign,
  FaExchangeAlt,
  FaEye,
  FaFileAlt,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaFingerprint,
  FaGavel,
  FaHistory,
  FaLock,
  FaMoneyBillAlt,
  FaMoneyBillWave,
  FaPercent,
  FaPercentage,
  FaPhoneAlt,
  FaSyncAlt,
  FaTachometerAlt,
  FaUser,
  FaUserCheck,
  FaUserCog,
  FaUserLock,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { LuFileClock, LuFileText, LuGlobe } from 'react-icons/lu'
import { MdCalendarViewMonth, MdEmail } from 'react-icons/md'
import { MotionProps } from 'framer-motion'

import { Paths } from '@shared/api/paths'

import { SavedColors } from './contant'
import { Features } from './featuresMap'

export interface EditionType {
  name: string
  description: string
  icon?: IconType
  editions?: Pick<SectionType, 'name' | 'description' | 'icon'>[]
}
export interface SectionType {
  name: string
  description?: string
  description1?: string
  description2?: string
  description3?: string
  star?: number
  imageUrl?: string
  position?: string
  icon?: IconType
  ariaLabel?: string
  seo?: { title: string; description: string }
  features?: string[]
  editions?: EditionsType[]
  color?: string
  imgUrl?: string
  to?: string
  alt?: string
  isActive?: boolean
  target?: string
  distance?: number
  id?: number
}

interface Feature {
  name: string
  icon: IconType
}

interface EditionsType {
  name: string
  description: string
  bestFor: string
  imageSrc: string
  imageAlt: string
  infoSectionBg: SavedColors
  featureSectionBg: SavedColors
  features: Feature[]
}
interface BestForType {
  label: string
  icon: IconType
}
export interface BubbleContent {
  icon: IconType
  iconColor: string
  iconSize: string
  text: string
  textFontSize: string
}

export interface BubbleItem extends MotionProps {
  id: number
  top: string
  left: string
  size?: number
  rotate?: string

  animate: {
    y: number[]
    x?: number[]
    rotate?: number[]
    transition: {
      duration: number
      repeat: typeof Infinity
      delay?: number
    }
  }

  content: BubbleContent
}
export interface TotalDataItem {
  name: string
  title?: string
  imageUrl?: string
  description?: string
  dTitle?: string
  overview?: string
  descriptionSecond?: string
  target: string
  section?: SectionType[]
  sectionSecond?: SectionType[]
  sectionId?: string
  features?: SectionType[]
  industries?: string[]
  deployment?: string[]
  brochureLink?: string
  edition?: EditionType
  editions?: EditionsType[]
  bestFor?: BestForType[]
  id?: Feature | string
  bubbles?: BubbleItem[]
  imageUrlSet?: { id: number; url: string }[]
}

export const TotalData: TotalDataItem[] = [
  {
    name: 'Welcome',
    title:
      'Simple Accounting, Inventory & POS Software for SmallSpace Cowboys Businesses',
    description:
      'Ritebooks Express is a smart, affordable business management software designed for small and growing businesses that need essential Accounting, Inventory Management, and Point of Sale (POS) — without unnecessary complexity or high costs.',
    descriptionSecond:
      'Built bony.agencyy Lotus Soft Technologies Ltd., the creators of Ritebooks with over 25 years of software expertise, Ritebooks Express gives you exactly what you need to manage your business confidently from day one.',
    target: '/',
    sectionId: 'dashboard-welcome-section',
    bubbles: [
      {
        id: 1,
        top: '0%',
        left: '40%',
        rotate: '-10deg',
        size: 6,
        animate: {
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [-10, -5, -10],
          transition: {
            duration: 4,
            repeat: Infinity,
          },
        },
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1.6, ease: 'backOut' },
        whileHover: { scale: 1.1 },
        content: {
          icon: FaBriefcase,
          iconColor: SavedColors.red,
          iconSize: '24px',
          text: '25+ years of experience',
          textFontSize: '12px',
        },
      },
      {
        id: 2,
        top: '30%',
        left: '50%',
        size: 5,
        animate: {
          y: [0, -20, 0],
          x: [0, -8, 0],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          },
        },
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: 'backOut', delay: 0.2 },
        whileHover: { scale: 1.1 },
        content: {
          icon: FaUser,
          iconColor: SavedColors.violet,
          iconSize: '20px',
          text: '1,000+ customers',
          textFontSize: '11px',
        },
      },
    ],
  },
  {
    name: 'aboutUs',
    dTitle: 'Want to know more ?',
    title: 'Read about us',
    target: '/',
    sectionId: 'dashboard-aboutUs-section',
    imageUrl: '/aboutus.svg',
    description:
      'RitePayroll is a powerful, web-enabled payroll management software designed for small, medium, and large organizations operating across multiple branches and multiple currencies. Built to eliminate manual payroll errors and compliance risks, RitePayroll automates the entire payroll lifecycle — from attendance capture to payslip generation — with precision, security, and flexibility. Whether your organization processes daily wages or monthly salaries, manages complex allowances, statutory deductions, loans, and leave policies, or operates across locations and currencies, RitePayroll gives you total control — all from a single, centralized system.',
    features: [
      { name: 'Trusted by 1,000+' },
      { name: '25+ years of experience' },
    ],
  },
  {
    name: 'advantage',
    dTitle: 'Is Your Payroll Process Costing You More Than Money?',
    title:
      "Payroll errors don't just affect finances they impact trust, compliance, and productivity",
    target: '/',
    sectionId: 'dashboard-advantage-section',
    imageUrlSet: [
      { id: 1, url: '/advantage/advantage.svg' },
      { id: 2, url: '/advantage/calculation.svg' },
      { id: 3, url: '/advantage/instant.svg' },
      { id: 4, url: '/advantage/realTime.svg' },
      { id: 5, url: '/advantage/zeroError.svg' },
    ],
    description:
      'Our automated, end-to-end payroll solution ensures accuracy, compliance, and efficiency - giving you peace of mind and more time to focus on growing your business.',
    features: [
      {
        id: 1,
        name: 'Automated Calculations',
        description:
          'Say goodbye to time-consuming manual calculations and human errors in salaries, overtime, and allowances.',
      },
      {
        id: 2,
        name: 'Real-time Compliance',
        description:
          'RitePayroll automatically applies updated PAYE, NSSF, and tax rules, removing compliance risks and penalties.',
      },
      {
        id: 3,
        name: 'Instant Processing',
        description:
          'RitePayroll processes weekly or monthly payroll in minutes, ending delays and ensuring accurate, on-time payments.',
      },
      {
        id: 4,
        name: 'Zero Errors',
        description:
          'RitePayroll guarantees 100% accurate payslips and reports through full automation and built-in validation.',
      },
    ],
  },
  {
    name: 'action',
    dTitle: ' What RitePayroll Does ?',
    title:
      ' RitePayroll is a centralized payroll management software designed to automate weekly and monthly payroll processing.',
    target: '/',
    sectionId: 'dashboard-action-section',
    features: [
      {
        id: 1,
        name: 'Salary calculation based on attendance',
        ariaLabel: 'Salary calculation based on attendance',
        isActive: true,
        icon: LuFileClock,
      },
      {
        id: 2,
        name: 'Allowances, deductions, loans, and advances',
        ariaLabel: 'Allowances, deductions, loans, and advances',
        isActive: true,
        icon: FaDollarSign,
      },
      {
        id: 3,
        name: 'Leave management and encashments',
        ariaLabel: 'Leave management and encashments',
        isActive: true,
        icon: MdCalendarViewMonth,
      },
      {
        id: 4,
        name: 'PAYE, NSSF, and statutory deductions',
        ariaLabel: 'PAYE, NSSF, and statutory deductions',
        isActive: true,
        icon: FaPercent,
      },
      {
        id: 5,
        name: 'Payslips, payroll registers, and compliance reports',
        ariaLabel: 'Payslips, payroll registers, and compliance reports',
        isActive: true,
        icon: LuFileText,
      },
    ],
  },
  {
    name: 'growth',
    dTitle: 'Scalability & Growth',
    title: ' RitePayroll supports growing organizations with:',
    target: '/',
    sectionId: 'dashboard-growth-section',
    features: [
      {
        id: 1,
        name: ' Multi-branch payroll operations',
        ariaLabel: ' Multi-branch payroll operations',
        isActive: true,
        icon: FaCodeBranch,
      },
      {
        id: 2,
        name: 'Multi-currency salary processing',
        ariaLabel: 'Multi-currency salary processing',
        isActive: true,
        icon: FaExchangeAlt,
      },
      {
        id: 3,
        name: 'Centralized control with branch-level access',
        ariaLabel: 'Centralized control with branch-level access',
        isActive: true,
        icon: FaUserLock,
      },
    ],
  },
  {
    name: 'features',
    dTitle: 'What features does RitePayroll have?',
    title: 'Here, check out our features',
    target: '/',
    sectionId: 'dashboard-features-section',
    features: [
      {
        id: 1,
        name: 'Accurate Salary Processing',
        ariaLabel: 'Accurate Salary Processing',
        isActive: true,
        icon: FaClock,
        target: Paths.AccurateSalaryProcessing,
      },
      {
        id: 2,
        name: 'Weekly & Monthly Payroll Cycles',
        ariaLabel: 'Weekly & Monthly Payroll Cycles',
        isActive: true,
        icon: FaDollarSign,
        target: Paths.WeeklyMonthlyPayrollCycles,
      },
      {
        id: 3,
        name: 'Attendance & Biometric Integration',
        ariaLabel: 'Attendance & Biometric Integration',
        isActive: true,
        icon: FaFingerprint,
        target: Paths.AttendanceBiometricIntegration,
      },
      {
        id: 4,
        name: 'Leave Management System',
        ariaLabel: 'Leave Management System',
        isActive: true,
        icon: FaCalendarAlt,
        target: Paths.LeaveManagementSystem,
      },
      {
        id: 5,
        name: 'Statutory Compliance Automation',
        ariaLabel: 'Statutory Compliance Automation',
        isActive: true,
        icon: FaFileAlt,
        target: Paths.StatutoryComplianceAutomation,
      },
      {
        id: 6,
        name: 'Loans & Advances Management',
        ariaLabel: 'Loans & Advances Management',
        isActive: true,
        icon: FaMoneyBillAlt,
        target: Paths.LoansAdvancesManagement,
      },
      {
        id: 7,
        name: 'Payslips & Payroll Registers',
        ariaLabel: 'Payslips & Payroll Registers',
        isActive: true,
        icon: FaFileInvoiceDollar,
        target: Paths.PayslipsPayrollRegisters,
      },
    ],
  },
  {
    name: 'industries',
    dTitle: 'Serving Diverse Industries',
    title: "Here's a look at the industries we empower",
    target: '/',
    sectionId: 'dashboard-industries-section',
    features: [
      {
        id: 1,
        name: 'Corporate Organizations',
        ariaLabel: 'Corporate Organizations',
        isActive: true,
        icon: FaClock,
      },
      {
        id: 2,
        name: 'Manufacturing & Distribution Companies',
        ariaLabel: 'Manufacturing & Distribution Companies',
        isActive: true,
        icon: FaDollarSign,
      },
      {
        id: 3,
        name: 'Retail Chains',
        ariaLabel: 'Retail Chains',
        isActive: true,
        icon: FaFingerprint,
      },
      {
        id: 4,
        name: 'NGOs & Institutions',
        ariaLabel: 'NGOs & Institutions',
        isActive: true,
        icon: FaCalendarAlt,
      },
      {
        id: 5,
        name: 'Weekly Wage & Monthly Salary Businesses',
        ariaLabel: 'Weekly Wage & Monthly Salary Businesses',
        isActive: true,
        icon: FaFileAlt,
      },
    ],
  },
  {
    name: 'benefits',
    dTitle: 'Find out how RitePayroll can benefit your organization',
    title: 'Benefits of using RitePayroll software',
    target: '/',
    sectionId: 'dashboard-benefits-section',
    features: [
      {
        id: 1,
        name: 'Reduced payroll errors',
        icon: FaChartLine,
      },
      {
        id: 2,
        name: 'Faster processing cycles',
        icon: FaTachometerAlt,
      },
      {
        id: 3,
        name: 'Improved statutory compliance',
        icon: FaBalanceScale,
      },
      {
        id: 4,
        name: 'Better HR and finance visibility',
        icon: FaEye,
      },
      {
        id: 5,
        name: 'Secure and auditable payroll data',
        icon: FaLock,
      },
    ],
  },
  {
    name: 'contact us',
    dTitle: 'What features does RitePayroll have?',
    title: 'Here, check out our features',
    description:
      "We'd love to hear from you and start something special together. Call us with any questions.",
    target: '/',
    sectionId: 'dashboard-contact-section',
    features: [
      {
        name: 'Phone',
        description: '+256 755 818183',
        target: 'tel:+256755818183',
        icon: FaPhoneAlt,
        ariaLabel: 'Phone details',
        isActive: true,
      },
      {
        name: 'Email',
        description: 'sales@lotus.co.ug',
        target: 'mailto:sales@lotus.co.ug',
        icon: MdEmail,
        ariaLabel: 'email details',
        isActive: true,
      },
      {
        name: 'Website',
        description: 'www.lotus.co.ug',
        target: 'https://www.lotus.co.ug',
        icon: LuGlobe,
        ariaLabel: 'website details',
        isActive: true,
      },
      {
        name: 'Address',
        description: 'Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda',
        icon: FaLocationDot,
        ariaLabel: 'Address details',
        isActive: false,
      },
    ],
  },
  {
    id: Features.ASP,
    name: Features.AccurateSalaryProcessing,
    overview:
      'Ensure precise and error-free salary calculations with fully customizable salary structures, user-defined heads, and automated processing that adapts to your organization’s policies.',
    imageUrl: '/features/ASP.svg',
    features: [
      { name: 'User-Defined Salary Heads', icon: FaCalculator },
      { name: 'Custom Salary Structures', icon: FaUserCog },
      { name: 'Automated Payslip Generation', icon: FaFileInvoice },
      { name: 'Comprehensive Salary Registers', icon: FaFileAlt },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.AccurateSalaryProcessing,
  },
  {
    id: Features.ABI,
    name: Features.AttendanceBiometricIntegration,
    overview:
      'Accurately track employee attendance with seamless biometric device integration, shift management, and real-time monitoring of overtime, late arrivals, and early departures.',
    imageUrl: '/features/ABI.svg',
    features: [
      { name: 'Daily or Monthly Attendance Processing', icon: FaCalendarAlt },
      { name: 'Shift Management', icon: FaClock },
      { name: 'Overtime, Late Coming & Early Going Tracking', icon: FaHistory },
      { name: 'Manual Attendance with Approval Workflow', icon: FaUserCheck },
      { name: 'Biometric Device Integration', icon: FaSyncAlt },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.AttendanceBiometricIntegration,
  },
  {
    id: Features.LMS,
    name: Features.LeaveManagementSystem,
    overview:
      'Streamline leave requests, approvals, and tracking with customizable leave types, balance management, encashment options, and carry-forward rules.',
    imageUrl: '/features/LMS.svg',
    features: [
      { name: 'User-Defined Leave Types', icon: FaCalendarAlt },
      { name: 'Leave Balances & Real-Time Tracking', icon: FaHistory },
      { name: 'Online Leave Applications & Approvals', icon: FaFileAlt },
      { name: 'Leave Encashment Options', icon: FaMoneyBillWave },
      { name: 'Configurable Carry Forward Rules', icon: FaSyncAlt },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.LeaveManagementSystem,
  },
  {
    id: Features.LAM,
    name: Features.LoansAdvancesManagement,
    overview:
      'Efficiently manage employee loans and advances with automated EMI-based recovery, custom allowances, and deductions directly integrated into payroll.',
    imageUrl: '/features/LAM.svg',
    features: [
      { name: 'User-Defined Allowances & Deductions', icon: FaPercentage },
      { name: 'Employee Loans & Advances', icon: FaMoneyBillWave },
      { name: 'EMI-Based Automatic Recovery', icon: FaSyncAlt },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.LoansAdvancesManagement,
  },
  {
    id: Features.PPR,
    name: Features.PayslipsPayrollRegisters,
    overview:
      'Generate professional payslips and detailed payroll registers automatically, with secure employee self-service access to view and download payslips anytime.',
    imageUrl: '/features/PPR.svg',
    features: [
      { name: 'Automated Payslip Generation', icon: FaFileInvoice },
      { name: 'Detailed Salary Registers', icon: FaFileAlt },
      { name: 'Employee Self-Service Portal Access', icon: FaUserCheck },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.PayslipsPayrollRegisters,
  },
  {
    id: Features.SCA,
    name: Features.StatutoryComplianceAutomation,
    overview:
      'Stay fully compliant with automated handling of PAYE (Resident/Non-Resident), NSSF, statutory deductions, tax returns, and comprehensive audit trails.',
    imageUrl: '/features/SCA.svg',
    features: [
      { name: 'PAYE Calculation (Resident / Non-Resident)', icon: FaGavel },
      { name: 'NSSF & Statutory Deductions', icon: FaPercentage },
      { name: 'Automated Tax Returns & Reports', icon: FaFileAlt },
      { name: 'Complete Audit Trails', icon: FaHistory },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.StatutoryComplianceAutomation,
  },
  {
    id: Features.WMPC,
    name: Features.WeeklyMonthlyPayrollCycles,
    overview:
      'Run payroll on weekly or monthly cycles with full flexibility. Seamlessly integrate attendance data for accurate processing and timely salary disbursements.',
    imageUrl: '/features/WMPC.svg',
    features: [
      { name: 'Support for Weekly Payroll Cycles', icon: FaCalendarAlt },
      { name: 'Support for Monthly Payroll Cycles', icon: FaClock },
      { name: 'Automatic Integration with Attendance Data', icon: FaSyncAlt },
      { name: 'Flexible Processing Schedules', icon: FaMoneyBillWave },
    ],
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.WeeklyMonthlyPayrollCycles,
  },
]
