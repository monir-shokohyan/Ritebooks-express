import { Flex, FlexProps } from '@mantine/core'
import styled from 'styled-components'

import { fadeIn } from '@shared/styles/animation'

interface BgFlexProps extends FlexProps {
  bg?: string
  opacity?: number
  bgc?: string
  $isSticky?: boolean
  $flip?: boolean
}

export const BgFlex = styled(Flex)<BgFlexProps>`
  position: relative;
  animation: ${fadeIn} 1s ease-out 0.2s both;
  overflow: ${({ $isSticky }) => ($isSticky ? 'visible' : 'hidden')};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-image: ${({ bg }) => (bg ? `url(${bg})` : 'none')};
    background-size: cover;
    background-color: ${({ bgc }) => (bgc ? bgc : 'transparent')};
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${({ opacity = 0.5 }) => opacity};
    z-index: -1;
    transform: scaleX(${({ $flip }) => ($flip ? -1 : 1)});
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`
