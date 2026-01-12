import { Paths } from '@shared/api/paths'
import { Features } from '@shared/constants/featuresMap'

export const featuresLink = [
  { to: Paths.SimplifiedAccounting, label: Features.SimplifiedAccounting },
  {
    to: Paths.InventoryManagement,
    label: 'Attendance Biometric Integration',
  },
  {
    to: Paths.PointOfSale,
    label: ' Leave Management System',
  },
  { to: Paths.EssentialBusinessReporting, label: 'Loans Advances Management' },
]

export const NavigationLinks = [
  { to: '/', label: 'Home', scrollToSection: 'dashboard-welcome-section' },
  { to: '/', label: 'About Us', scrollToSection: 'dashboard-aboutUs-section' },
  { to: '/', label: 'Benefits', scrollToSection: 'dashboard-benefits-section' },
  {
    to: '/',
    label: 'industries',
    scrollToSection: 'dashboard-industries-section',
  },
  {
    to: '/',
    label: 'Contact Us',
    scrollToSection: 'dashboard-contact-section',
  },
  { to: '/', label: 'Features', scrollToSection: 'dashboard-features-section' },
]
