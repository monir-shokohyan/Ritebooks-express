import { memo } from 'react'
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlinePhone,
  HiOutlineShoppingBag,
} from 'react-icons/hi'
import { IoChevronDown, IoChevronUp, IoTrophyOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Burger, Container, Image, Menu, Popover, Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { SearchInput } from '@shared/ui/searchInput/searchInput'

import { featuresLink } from './constants'
import { useManageNavbar } from './modal/useManageNavbar'
import {
  CustomMenuItem,
  MenubarS,
  MenuItems,
  MenuListItem,
  NavbarS,
  ProductMenuListTrigger,
  ProductMenuTrigger,
  VerticalLine,
} from './styles'

const Navbar = memo(() => {
  const {
    navigateAndScroll,
    getSectionActive,
    desktopProductsOpen,
    setDesktopProductsOpen,
    mobileProductsOpen,
    setMobileProductsOpen,
    isProductsActive,
    toggle,
    close,
    opened,
    activeSection,
  } = useManageNavbar()
  const isTabletOrMobile = useMediaQuery('(max-width: 1024px)')
  return (
    <NavbarS $isOpen>
      <MenubarS>
        <Tooltip
          label="Home"
          position="left"
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
          position="left"
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
          position="left"
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
          position="left"
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
          position="left"
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
          position="left"
          withArrow
          shadow="md"
          transitionProps={{ transition: 'scale-y' }}
          opened={desktopProductsOpen}
          onChange={setDesktopProductsOpen}
        >
          <Menu.Target>
            <Tooltip
              label="Features"
              position="left"
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
                <MdOutlineKeyboardArrowLeft />
                <HiOutlineLightBulb
                  size={20}
                  strokeWidth={1.5}
                />
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

      {/* mobile code */}
      <Popover
        width={300}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={toggle}
      >
        <Popover.Target>
          <Burger
            lineSize={3}
            size="md"
            color={SavedColors.TextColor}
            opened={opened}
            onClick={toggle}
            aria-label={
              opened ? 'Close navigation menu' : 'Open navigation menu'
            }
            style={{ display: `${isTabletOrMobile ? 'block' : 'none'}` }}
          />
        </Popover.Target>
        <Popover.Dropdown id="mobile-menu">
          <SearchInput />

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-welcome-section')
            }}
            style={{ marginTop: '1px' }}
            className={
              activeSection === 'dashboard-welcome-section' ? 'active' : ''
            }
          >
            Home
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              navigateAndScroll('/', 'dashboard-aboutUs-section')
              toggle()
            }}
            className={
              activeSection === 'dashboard-aboutUs-section' ? 'active' : ''
            }
          >
            About Us
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-industries-section')
            }}
            className={
              activeSection === 'dashboard-industries-section' ? 'active' : ''
            }
          >
            Industries
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-benefits-section')
            }}
            className={
              activeSection === 'dashboard-benefits-section' ? 'active' : ''
            }
          >
            Benefits
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-contact-section')
            }}
            className={
              activeSection === 'dashboard-contact-section' ? 'active' : ''
            }
          >
            Contact Us
          </MenuListItem>

          <Menu
            width={250}
            position="bottom"
            withArrow
            shadow="md"
            transitionProps={{ transition: 'scale-y' }}
            withinPortal
            opened={mobileProductsOpen}
            onChange={setMobileProductsOpen}
          >
            <Menu.Target>
              <ProductMenuListTrigger
                as="button"
                className={isProductsActive ? 'active' : ''}
                aria-label="Toggle mobile products menu"
                aria-haspopup="menu"
                aria-expanded={mobileProductsOpen}
                aria-controls="mobile-products-menu"
              >
                Features
                {mobileProductsOpen ? (
                  <IoChevronUp style={{ marginLeft: '5px' }} />
                ) : (
                  <IoChevronDown style={{ marginLeft: '5px' }} />
                )}
              </ProductMenuListTrigger>
            </Menu.Target>
            <Menu.Dropdown id="mobile-products-menu">
              {featuresLink.map((link) => (
                <CustomMenuItem
                  key={link.to}
                  component={Link}
                  to={link.to}
                  onClick={() => {
                    setMobileProductsOpen(false)
                    close()
                  }}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </CustomMenuItem>
              ))}
            </Menu.Dropdown>
          </Menu>

          <VerticalLine style={{ marginBlock: '10px' }} />

          <Container
            p="10px"
            style={{ textAlign: 'center' }}
          >
            <Image
              src="/RITE PAYROLL.png"
              alt="RitePayroll logo"
              w={{ base: '120', lg: '150px' }}
              h={{ base: '60px', lg: '65px' }}
              fit="contain"
              loading="lazy"
            />
          </Container>
        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  )
})

export { Navbar }
