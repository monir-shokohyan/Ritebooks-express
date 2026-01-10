import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { TextResponsive } from '@shared/ui/Typography'

import { StyledCard } from '../styles'
import { CardProps } from '../types'
import { CardBottom } from './CardBottom'
import { CardHeader } from './CardHeader'

const Card = ({ text, id, headerIcon, footerIcon }: CardProps) => {
  const isTablet = useMediaQuery('(max-width: 1140px)')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <StyledCard
      key={text}
      bg={SavedColors.SemiDarkWhite}
      p="md"
    >
      <CardHeader>{headerIcon}</CardHeader>
      <Flex
        w="100%"
        justify="center"
        align="center"
      >
        <TextResponsive
          $textalign="center"
          style={{
            paddingInline: isTablet ? '0%' : '9%',
          }}
          $font="DM Serif Text"
          fontSize={isTablet ? '18px' : '22px'}
          fontWeight="500"
        >
          {text}
        </TextResponsive>
      </Flex>
      <CardBottom
        id={id}
        isMobile={isMobile}
      />
      {footerIcon}
    </StyledCard>
  )
}

export { Card }
