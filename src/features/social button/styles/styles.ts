import { motion } from 'framer-motion'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { MotionaType } from '../types'

export const Container = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 50;
  @media (max-width: 1024px) {
    bottom: 75px;
  }
`

export const BackgroundCircle = styled(motion.div)`
  position: absolute;
  right: -125px;
  bottom: -125px;
  width: 300px;
  height: 300px;
  background: ${SavedColors.primaryBlue};
  border-radius: 50%;
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.15),
    0px 4px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }
`

export const FabButton = styled.button`
  width: 50px;
  height: 50px;
  background: ${SavedColors.highlite};
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  position: relative;

  &:hover {
    background: ${SavedColors.highlite};
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`

export const MenuItem = styled(motion.a)<MotionaType>`
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  color: ${SavedColors.highlite};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.1),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.1),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`
