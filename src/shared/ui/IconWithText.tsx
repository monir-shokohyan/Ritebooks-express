import React from 'react'
import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { Container as ContainerS } from './Container'
import { TextResponsive } from './Typography/Typography'

interface IconWithTextProps {
  icon: IconType
  text?: string
  textRes?: string
  iconColor?: string
  textColor?: string
  font?:
    | 'Roboto'
    | 'Nunito'
    | 'Tangerine'
    | 'Great Vibes'
    | 'Saira Stencil One'
    | 'DM Serif Text'
    | 'Inter'
    | 'DM Sans'
  handleClick?: () => void
  allowText?: boolean
  allowTextRes?: boolean
  iconSize?: number
  padding?: string
  $hoveractive?: 'false' | 'true'
  $border?: string
  fontSize?: string
  $isActiveIconBg?: boolean
  $iconContainerSize?: 'sm' | 'md' | 'lg'
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  Style?: React.CSSProperties
  isLeft?: boolean
  align?: 'center' | 'flex-start' | 'flex-end'
}

const Container = styled.div<{ $hoveractive?: 'false' | 'true' }>`
  transition: transform 0.3s ease-in;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    cursor: ${({ $hoveractive }) =>
      $hoveractive === 'true' ? 'pointer' : 'default'};
    transform: ${({ $hoveractive }) =>
      $hoveractive === 'true' ? 'scale(105%)' : 'scale(100%)'};
  }
`

const IconWithText = ({
  icon: Icon,
  text,
  textRes,
  iconColor = SavedColors.TextColor,
  textColor = SavedColors.DarkWhite,
  font = 'Roboto',
  handleClick = () => {},
  allowText = true,
  allowTextRes = false,
  iconSize = 20,
  $hoveractive = 'true',
  fontSize = '16px',
  fontWeight = '300',
  $isActiveIconBg = true,
  $border,
  Style,
  isLeft = true,
}: IconWithTextProps) => {
  return (
    <Container
      $hoveractive={$hoveractive}
      style={Style}
    >
      <Flex
        gap={5}
        align="center"
        justify="center"
        onClick={handleClick}
      >
        {isLeft && (
          <ContainerS
            p="10px"
            $borderRadius="50%"
            background={$isActiveIconBg ? SavedColors.highlite : 'none'}
            border={$border}
          >
            <Icon
              color={iconColor}
              size={iconSize}
              style={{ transition: 'all 0.3s ease-in-out' }}
            />
          </ContainerS>
        )}

        {allowText && (
          <TextResponsive
            $font={font}
            color={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            style={{ textWrap: 'nowrap' }}
          >
            {text}
          </TextResponsive>
        )}
        {allowTextRes && (
          <TextResponsive
            $font={font}
            color={textColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {textRes}
          </TextResponsive>
        )}
        {!isLeft && (
          <ContainerS
            p="10px"
            justify="center"
            align="center"
            $borderRadius="50%"
            background={$isActiveIconBg ? SavedColors.highlite : 'none'}
            border={$border}
          >
            <Icon
              color={iconColor}
              size={iconSize}
              style={{ transition: 'all 0.3s ease-in-out' }}
            />
          </ContainerS>
        )}
      </Flex>
    </Container>
  )
}

export { IconWithText }
