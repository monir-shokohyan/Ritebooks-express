/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flex, FlexProps, Menu, UnstyledButton } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

const NavbarS = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  display: flex;
  top: 50%;
  right: ${(props) => (props.$isOpen ? '5px' : '-250px')};
  width: ${(props) => (props.$isOpen ? '60px' : '0px')};
  align-items: center;
  justify-content: space-between;
  z-index: 4;
  background-color: ${SavedColors.PrimaryWhite};
  transform: translateY(-50%);
  border-radius: 3px 0 0 3px;

  transition:
    right 0.3s ease-in-out,
    width 0.3s ease-in-out;
  overflow: hidden;
  box-shadow:
    rgba(0, 0, 0, 0.2) 2px 2px 8px,
    rgba(255, 255, 255, 0.2) -2px -2px 8px,
    rgba(255, 255, 255, 0.3) 2px 2px 4px inset,
    rgba(0, 0, 0, 0.3) -2px -2px 4px inset;
  @media (max-width: 1024px) {
    bottom: 0%;
    right: 0%;
    top: auto;
    width: 100%;
    transform: translateY(0%);
    flex-direction: row;
  }
`

const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  right: ${(props) => (props.$isOpen ? '250px' : '0px')};
  transform: translateY(-50%);
  width: 40px;
  height: 80px;
  background-color: ${SavedColors.highlite};
  border: none;
  border-radius: 3px 0 0 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: right 0.3s ease-in-out;
  color: ${SavedColors.DemWhite};
  font-size: 20px;

  &:hover {
    background-color: ${SavedColors.TextColor};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

const MenubarS = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px 0;
  @media (max-width: 1024px) {
    flex-direction: row;
    padding: 10px 0;
  }
`

const MenuItems = styled(Link)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 15px 20px;
  align-items: center;
  text-decoration: none;
  color: ${SavedColors.TextColor};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  transition: all 0.3s ease;
  flex-grow: 1;

  &:hover,
  &.active {
    color: ${SavedColors.highlite};
    background-color: ${SavedColors.highliteOpacityExtreme};
  }
  @media (max-width: 1024px) {
    justify-content: center;
    padding: 15px 15px;
  }
`

const MenuListItem = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-left: 20px;
  text-decoration: none;
  color: ${SavedColors.TextColor};
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;

  &:hover {
    background: ${SavedColors.highlite};
    color: ${SavedColors.PrimaryWhite};
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 500;
  }
`

const MenuButton = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${SavedColors.TextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const MenuButtonContainer = styled(UnstyledButton)`
  border-radius: 5px;
  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`

const ProductMenuTrigger = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 14px 15px 14px 2px;
  gap: 0px;
  align-items: center;
  text-decoration: none;
  color: ${SavedColors.TextColor};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  transition: all 0.3s ease-in;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  &:hover,
  &.active {
    color: ${SavedColors.highlite};
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 1024px) {
    padding: 14px 15px;
    gap: 10px;
  }
`

const ProductMenuListTrigger = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  width: 100%;
  padding-left: 20px;
  text-decoration: none;
  color: ${SavedColors.TextColor};
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;
  border: 0px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: ${SavedColors.highlite};
    color: ${SavedColors.PrimaryWhite};
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 600;
  }
`

const CustomMenuItem = styled(Menu.Item)<any>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: ${SavedColors.TextColor} !important;

  &:hover {
    background-color: ${SavedColors.highlite} !important;
    color: white !important;
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 600;
  }
`

const VerticalLine = styled.div`
  width: 154px;
  height: 4px;
  border-radius: 2px;
  background: ${SavedColors.highlite};
`

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  background-color: ${SavedColors.FooterBgColor};
  position: relative;
  overflow: hidden;
  padding-block: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.25;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 3;
  }
`

const FooterFirstContainer = styled(Flex)<FlexProps>`
  padding: 10px;
  width: 55%;
  @media (max-width: 710px) {
    width: 100%;
  }
`
const FooterSecondContainer = styled(Flex)<FlexProps>`
  padding: 10px;
  width: 40%;
  @media (max-width: 710px) {
    width: 100%;
  }
`

// Example usage component
export const CollapsibleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ToggleButton
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '→' : '←'}
      </ToggleButton>
      <NavbarS $isOpen={isOpen}>
        <MenubarS>
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About</MenuItems>
          <MenuItems to="/services">Services</MenuItems>
          <MenuItems to="/contact">Contact</MenuItems>
        </MenubarS>
      </NavbarS>
    </>
  )
}

export {
  CustomMenuItem,
  FooterContainer,
  FooterFirstContainer,
  FooterSecondContainer,
  MenubarS,
  MenuButton,
  MenuButtonContainer,
  MenuItems,
  MenuListItem,
  NavbarS,
  ProductMenuListTrigger,
  ProductMenuTrigger,
  ToggleButton,
  VerticalLine,
}
