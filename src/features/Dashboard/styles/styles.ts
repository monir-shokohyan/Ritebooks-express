import {
  TextAnimate,
  TextAnimateBaseProps,
} from '@gfazioli/mantine-text-animate'
import { Button, ButtonProps } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'
import { fadeIn } from '@shared/styles/animation'
import {
  StyledTextProps,
  TextStyles,
  TextWithFamily,
} from '@shared/ui/Typography'


const WelcomeText = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.8s both;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`
const AnimatedText = styled(TextAnimate)<
  TextAnimateBaseProps & StyledTextProps
>`
  ${TextStyles}
  animation: ${fadeIn} 1s ease-out 0.8s both;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`
const WelcomeTitle = styled(TextWithFamily)`
  animation: ${fadeIn} 1s ease-out 0.5s both;
  font-size: 3.2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`

const HoveredButtonWithoutBorder = styled(Button)<
  ButtonProps & { onClick: () => void }
>`
  animation: ${fadeIn} 1s ease-out 0.8s both;

  &:hover {
    color: ${SavedColors.Primaryblue};
    opacity: 50% !important;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const Container = styled.div`
  position: relative;
  width: min(90vw, 90vh, 520px);
  height: min(90vw, 90vh, 520px);
  max-width: 520px;
  max-height: 520px;
  aspect-ratio: 1 / 1;
  margin: 40px auto;

  @media (max-width: 480px) {
    margin: 20px auto;
  }
`

export {
  AnimatedText,
  Container,
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
}
