import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { SavedColors } from '@shared/constants'

interface CTCProps {
  text: string
  as?: 'span' | 'a'
  to?: string
  onClick?: () => void
}

const LinkStyle = styled(Link)`
  color: ${SavedColors.highlite};
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.5;
  }
`
export interface StyledTextProps {
  $font?:
    | 'Roboto'
    | 'Nunito'
    | 'Tangerine'
    | 'Great Vibes'
    | 'Saira Stencil One'
    | 'DM Serif Text'
    | 'Inter'
    | 'DM Sans'
}
const textStyles = css<StyledTextProps>`
  font-family: ${({ $font }) => $font || 'Dm Serif Text'}, sans-serif;
`

const SimpleColorText = styled.span<StyledTextProps>`
  ${textStyles}
  color: ${SavedColors.highlite};
`

const CTC = ({ text, as = 'span', to }: CTCProps) => {
  if (as === 'a' && to) {
    return <LinkStyle to={to}>{text}</LinkStyle>
  }

  return <SimpleColorText>{text}</SimpleColorText>
}

export { CTC }
