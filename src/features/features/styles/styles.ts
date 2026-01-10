import { Button, ButtonProps, Card, CardProps } from '@mantine/core'
import styled from 'styled-components'

export const StyledCard = styled(Card)<
  CardProps & { onClick?: () => void; isFixedHeight?: boolean }
>`
  position: relative;
  background: transparent;
  transition: all 0.3s ease;
  width: 20%;
  aspect-ratio: ${({ isFixedHeight = false }) =>
    isFixedHeight ? '1 / 1' : '3 / 4'};
  min-width: 205px;
  box-shadow:
    0 0.706592px 0.706592px -0.666667px #00000014,
    0 1.80656px 1.80656px -1.33333px #00000014,
    0 3.62176px 3.62176px -2px #00000012,
    0 6.8656px 6.8656px -2.66667px #00000012,
    0 13.6468px 13.6468px -3.33333px #0000000d,
    0 30px 30px -4px #00000005,
    inset 0 3px 1px #fff;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`
export const StyledButton = styled(Button)<ButtonProps>`
  box-shadow:
    0 0.706592px 0.706592px -0.666667px #00000014,
    0 1.80656px 1.80656px -1.33333px #00000014,
    0 3.62176px 3.62176px -2px #00000012,
    0 6.8656px 6.8656px -2.66667px #00000012,
    0 13.6468px 13.6468px -3.33333px #0000000d,
    0 30px 30px -4px #00000005,
    inset 0 3px 1px #fff;
  &:hover {
    box-shadow:
      0 0.706592px 0.706592px -0.666667px #12121213,
      0 1.80656px 1.80656px -1.33333px #00000014,
      0 3.62176px 3.62176px -2px #00000012,
      0 6.8656px 6.8656px -2.66667px #00000012,
      0 13.6468px 13.6468px -23.33333px #0000000d,
      0 30px 30px -4px #00000005,
      inset 0 3px 1px #fff;
  }
`
