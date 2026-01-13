import React from 'react'
import { IconType } from 'react-icons'
import {
  FaBell,
  FaBoxOpen,
  FaCalendarCheck,
  FaCashRegister,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaCreditCard,
  FaExchangeAlt,
  FaFileAlt,
  FaFileContract,
  FaFileInvoiceDollar,
  FaLaptop,
  FaListAlt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaPrint,
  FaReceipt,
  FaRocket,
  FaShoppingBasket,
  FaShoppingCart,
  FaStore,
  FaStoreAlt,
  FaSync,
  FaTags,
  FaTools,
  FaUnlock,
  FaUsers,
  FaUserShield,
  FaWarehouse,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoBarChart } from 'react-icons/io5'
import {
  LuBuilding2,
  LuGlobe,
  LuPackage,
  LuReceiptText,
  LuShoppingCart,
} from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
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
  style?: React.CSSProperties
  isLeft?: boolean
  number?: number
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
  number?: number
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
  },
  {
    name: 'whyUs',
    dTitle: '01 ------------- Why Ritebooks Express?',
    title: 'is built for businesses that want control — not confusion.',
    target: '/',
    sectionId: 'dashboard-whyUs-section',
    imageUrl: '/whyus.svg',
    description:
      'Unlike complex ERP systems or limited entry-level tools, Ritebooks Express gives you balanced functionality — powerful enough to run your business, simple enough to use daily.',
    features: [
      { name: 'Designed for real-world small businesses' },
      { name: 'Covers core operations without overload' },
      { name: 'Easy to learn, easy to use' },
      { name: 'Affordable pricing with a clear upgrade path' },
      { name: 'Backed by a trusted local software company' },
    ],
  },
  {
    name: 'whoIsFor',
    dTitle: '02 ------------- Who Is Ritebooks Express For?',
    title: 'is ideal for:',
    target: '/',
    sectionId: 'dashboard-whoIsFor-section',
    description:
      'If your business needs structure without complexity, this is the right starting point.',
    features: [
      {
        id: 1,
        name: 'Retail Stores',
        icon: FaStore,
        style: {
          position: 'absolute',
          top: '14%',
          right: '75%',
        },
        isLeft: false,
      },
      {
        id: 2,
        name: 'Small Shops',
        icon: FaStoreAlt,
        style: {
          position: 'absolute',
          top: '48%',
          right: '75%',
        },
        isLeft: false,
      },
      {
        id: 3,
        name: 'Service Providers',
        icon: FaTools,
        style: {
          position: 'absolute',
          top: '80%',
          right: '75%',
        },
        isLeft: false,
      },
      {
        id: 4,
        name: 'Startups',
        icon: FaRocket,
        style: {
          position: 'absolute',
          top: '14.5%',
          left: '75%',
        },
        isLeft: true,
      },
      {
        id: 5,
        name: 'Growing Businesses',
        icon: FaChartLine,
        style: {
          position: 'absolute',
          top: '48.5%',
          left: '75%',
        },
        isLeft: true,
      },
      {
        id: 6,
        name: 'First-time Software Users',
        icon: FaLaptop,
        style: {
          position: 'absolute',
          top: '81%',
          left: '75%',
        },
        isLeft: true,
      },
    ],
  },
  {
    name: 'whyChoose',
    dTitle:
      '03 ------------- Why Choose Ritebooks Express Over Other Software?',
    title: 'over other software.',
    target: '/',
    sectionId: 'dashboard-whyChoose-section',
    imageUrl: '/whyChoose.svg',
    features: [
      {
        id: 1,
        name: 'Built by Experts',
        description:
          'Developed by Lotus Soft Technologies Ltd., with over 25 years of experience in business software solutions.',
      },
      {
        id: 2,
        name: 'Budget-Friendly',
        description:
          'Pay only for what you need — no unnecessary modules, no hidden costs.',
      },
      {
        id: 3,
        name: 'User-Friendly',
        description: 'Clean interface that requires minimal training.',
      },
      {
        id: 4,
        name: 'Compliance Ready',
        description:
          'Designed keeping local tax and compliance needs in mind, including integration readiness for URA EFRIS.',
      },
      {
        id: 5,
        name: 'Seamless Upgrade Path',
        description:
          'Start with Ritebooks Express today and upgrade anytime to the full Ritebooks version as your business grows — without losing data or familiarity.',
      },
    ],
  },
  {
    name: 'futureProof',
    dTitle: '04 ------------- Future-Proof Your Business',
    title: 'grows with you. When you’re ready:',
    description:
      'Your business will not stay small forever — and your software shouldn’t hold you back.',

    descriptionSecond:
      'All within the Ritebooks ecosystem, built by the same trusted team',
    target: '/',
    sectionId: 'dashboard-futureProof-section',
    features: [
      {
        id: 1,
        name: 'Move to advanced accounting',
        ariaLabel: 'Move to advanced accounting feature',
        isActive: true,
        icon: LuReceiptText,
      },
      {
        id: 2,
        name: 'Enable more reporting',
        ariaLabel: 'Enable advanced reporting capabilities',
        isActive: true,
        icon: IoBarChart,
      },
      {
        id: 3,
        name: 'Add multi-branch capabilities',
        ariaLabel: 'Add support for multiple business branches',
        isActive: true,
        icon: LuBuilding2,
      },
      {
        id: 4,
        name: 'Unlock advanced business modules',
        ariaLabel: 'Unlock premium business modules as needed',
        isActive: true,
        icon: FaUnlock,
      },
    ],
  },
  {
    name: 'feature',
    dTitle: '05 ------------- What features does Ritebooks Express have?',
    title: 'Core Features (Detailed – Website Expansion)',
    target: '/',
    sectionId: 'dashboard-feature-section',
    features: [
      {
        id: 1,
        name: 'Simplified Accounting',
        ariaLabel: 'Simplified Accounting – Gain Control of Your Finances',
        description:
          'Ritebooks Express helps you track and manage your finances accurately without needing accounting expertise.',
        icon: LuReceiptText,
        target: Paths.SimplifiedAccounting,
      },
      {
        id: 2,
        name: 'Inventory Management',
        ariaLabel: 'Inventory Management – Stay Ahead of Stock',
        description:
          'Never lose track of your stock again with real-time inventory tracking designed for small businesses.',
        icon: LuPackage,
        target: Paths.InventoryManagement,
      },
      {
        id: 3,
        name: 'Point of Sale (POS)',
        ariaLabel: 'Point of Sale – Fast & Efficient Billing',
        description:
          'Speed up sales and improve customer experience with a clean, simple, and reliable POS system.',
        icon: LuShoppingCart,
        target: Paths.PointOfSale,
      },
      {
        id: 4,
        name: 'Essential Business Reporting',
        ariaLabel: 'Essential Business Reporting – Make Smarter Decisions',
        description:
          'Access clear, meaningful, and easy-to-understand reports to really understand your business performance.',
        icon: IoBarChart,
        target: Paths.EssentialBusinessReporting,
      },
    ],
  },
  {
    name: 'Contact Us',
    dTitle: '05 ------------- Get in Touch',
    title: 'We’re here to assist you — choose your preferred way to connect',
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
    id: Features.SA,
    number: 1,
    name: Features.SimplifiedAccounting,
    overview:
      'Ritebooks Express helps you track and manage your finances accurately without needing accounting expertise.',
    description:
      'Get a clear view of your income, expenses, and business performance anytime, anywhere.',
    imageUrl: '/features/SA.svg',
    features: [
      { id: 1, name: 'Chart of Accounts', icon: FaListAlt },
      { id: 2, name: 'Customer & Supplier Ledgers', icon: FaUsers },
      { id: 3, name: 'Cash & Bank Management', icon: FaMoneyBillWave },
      { id: 4, name: 'Sales & Purchase Invoicing', icon: FaFileInvoiceDollar },
      { id: 5, name: 'Payment Receipts & Vouchers', icon: FaReceipt },
      { id: 6, name: 'Expense Tracking', icon: FaChartPie },
      { id: 7, name: 'Day-end & Month-end Reports', icon: FaCalendarCheck },
    ],
    brochureLink: '/brochures/RitebooksExpress.pdf',
    target: Paths.SimplifiedAccounting,
  },
  {
    id: Features.IM,
    number: 2,
    name: Features.InventoryManagement,
    overview:
      'Never lose track of your stock again with powerful yet simple inventory tools.',
    description:
      'Perfect for retail stores, service businesses with stock, and small shops, keep your inventory accurate and under control.',
    imageUrl: '/features/IM.svg',
    features: [
      { id: 1, name: 'Item & Product Master', icon: FaBoxOpen },
      { id: 2, name: 'Stock Inward & Outward', icon: FaExchangeAlt },
      { id: 3, name: 'Real-time Stock Balances', icon: FaSync },
      { id: 4, name: 'Reorder Level Alerts', icon: FaBell },
      { id: 5, name: 'Basic Item Categorization', icon: FaTags },
      { id: 6, name: 'Stock Valuation Reports', icon: FaChartLine },
    ],
    brochureLink: '/brochures/RitebooksExpress.pdf',
    target: Paths.InventoryManagement,
  },
  {
    id: Features.POS,
    number: 3,
    name: Features.PointOfSale,
    overview:
      'Speed up sales and improve customer experience with a fast, simple, and reliable POS system.',
    description:
      'Designed specifically for counters where speed, simplicity, and billing accuracy matter most.',
    imageUrl: '/features/POS.svg',
    features: [
      { id: 1, name: 'Quick Billing Interface', icon: FaCashRegister },
      { id: 2, name: 'Cash & Multiple Payment Modes', icon: FaCreditCard },
      { id: 3, name: 'Invoice Printing', icon: FaPrint },
      { id: 4, name: 'Sales Summaries', icon: FaChartBar },
      { id: 5, name: 'Daily Cash Reports', icon: FaFileAlt },
      { id: 6, name: 'Simple User Controls', icon: FaUserShield },
    ],
    brochureLink: '/brochures/RitebooksExpress.pdf',
    target: Paths.PointOfSale,
  },
  {
    id: Features.EBR,
    number: 4,
    name: Features.EssentialBusinessReporting,
    overview:
      'Access clear, meaningful, and easy-to-understand reports to make smarter business decisions.',
    description:
      'All reports are designed to be actionable and readable, even if you’re not an accountant.',
    imageUrl: '/features/EBR.svg',
    features: [
      { id: 1, name: 'Sales Reports', icon: FaShoppingCart },
      { id: 2, name: 'Purchase Reports', icon: FaShoppingBasket },
      { id: 3, name: 'Stock Reports', icon: FaWarehouse },
      { id: 4, name: 'Customer & Supplier Statements', icon: FaFileContract },
      { id: 5, name: 'Basic Financial Summaries', icon: FaChartPie },
    ],
    brochureLink: '/brochures/RitebooksExpress.pdf',
    target: Paths.EssentialBusinessReporting,
  },
]
