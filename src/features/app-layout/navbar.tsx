import { memo } from 'react'
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlinePhone,
  HiOutlineShoppingBag,
} from 'react-icons/hi'
import { IoTrophyOutline } from 'react-icons/io5'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Menu, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { featuresLink } from './constants'
import { useManageNavbar } from './modal/useManageNavbar'
import {
  CustomMenuItem,
  MenubarS,
  MenuItems,
  NavbarS,
  ProductMenuTrigger,
} from './styles'

const Navbar = memo(() => {
  const {
    navigateAndScroll,
    getSectionActive,
    desktopProductsOpen,
    setDesktopProductsOpen,
    isProductsActive,
  } = useManageNavbar()
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <NavbarS $isOpen>
      <MenubarS>
        <Tooltip
          label="Home"
          position={isMobile ? 'top' : 'left'}
          withArrow
          transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
          <MenuItems
            to="/"
            onClick={() => navigateAndScroll('/', 'dashboard-welcome-section')}
            className={getSectionActive('dashboard-welcome-section')}
          >
            <HiOutlineHome
              size={18}
              strokeWidth={1.5}
              id="my-tooltip"
            />
          </MenuItems>
        </Tooltip>

        <Tooltip
          label="About Us"
          position={isMobile ? 'top' : 'left'}
          withArrow
          transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
          <MenuItems
            to="/"
            onClick={() => navigateAndScroll('/', 'dashboard-aboutUs-section')}
            className={getSectionActive('dashboard-aboutUs-section')}
          >
            <HiOutlineInformationCircle
              size={18}
              strokeWidth={1.5}
            />
          </MenuItems>
        </Tooltip>

        <Tooltip
          label="Industries"
          position={isMobile ? 'top' : 'left'}
          withArrow
          transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
          <MenuItems
            to="/"
            onClick={() =>
              navigateAndScroll('/', 'dashboard-industries-section')
            }
            className={getSectionActive('dashboard-industries-section')}
          >
            <HiOutlineShoppingBag
              size={18}
              strokeWidth={1.5}
            />
          </MenuItems>
        </Tooltip>
        <Tooltip
          label="Benefits"
          position={isMobile ? 'top' : 'left'}
          withArrow
          transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
          <MenuItems
            to="/"
            onClick={() => navigateAndScroll('/', 'dashboard-benefits-section')}
            className={getSectionActive('dashboard-benefits-section')}
          >
            <IoTrophyOutline
              size={18}
              strokeWidth={1.5}
            />
          </MenuItems>
        </Tooltip>
        <Tooltip
          label="Contact Us"
          position={isMobile ? 'top' : 'left'}
          withArrow
          transitionProps={{ transition: 'fade-left', duration: 300 }}
        >
          <MenuItems
            to="/"
            onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
            className={getSectionActive('dashboard-contact-section')}
          >
            <HiOutlinePhone
              size={18}
              strokeWidth={1.5}
            />
          </MenuItems>
        </Tooltip>
        <Menu
          position={isMobile ? 'top' : 'left'}
          withArrow
          shadow="md"
          transitionProps={{ transition: 'scale-y' }}
          opened={desktopProductsOpen}
          onChange={setDesktopProductsOpen}
        >
          <Menu.Target>
            <Tooltip
              label="Features"
              position={isMobile ? 'top' : 'left'}
              withArrow
              transitionProps={{ transition: 'fade-left', duration: 300 }}
            >
              <ProductMenuTrigger
                as="button"
                role="button"
                className={isProductsActive ? 'active' : ''}
                aria-label="Toggle feature menu"
                aria-haspopup="menu"
                aria-expanded={desktopProductsOpen}
                aria-controls="feature-menu"
              >
                {!isMobile && <MdOutlineKeyboardArrowLeft />}
                <HiOutlineLightBulb
                  size={20}
                  strokeWidth={1.5}
                />
                {isMobile && <MdOutlineKeyboardArrowRight />}
              </ProductMenuTrigger>
            </Tooltip>
          </Menu.Target>
          <Menu.Dropdown>
            {featuresLink.map((link) => (
              <CustomMenuItem
                key={link.to}
                component={Link}
                to={link.to}
                onClick={() => setDesktopProductsOpen(false)}
                className={location.pathname === link.to ? 'active' : ''}
                role="menuitem"
              >
                {link.label}
              </CustomMenuItem>
            ))}
          </Menu.Dropdown>
        </Menu>
      </MenubarS>
    </NavbarS>
  )
})

export { Navbar }
