import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

import { StyledCard } from '../styles'
import { CardProps } from '../types'
import { CardBottom } from './CardBottom'
import { CardHeader } from './CardHeader'

const Card = ({
  text,
  id,
  headerIcon,
  footerIcon,
  textResponsive = true,
  description,
  isButton = false,
}: CardProps) => {
  const isTablet = useMediaQuery('(max-width: 1140px)')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <StyledCard
      key={text}
      bg={SavedColors.SemiDarkWhite}
      p="md"
      isFixedHeight={false}
    >
      <CardHeader>{headerIcon}</CardHeader>
      <Flex
        w="100%"
        justify="center"
        align="center"
        direction="column"
        gap={10}
      >
        {textResponsive ? (
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
        ) : (
          <TextWithFamily
            $textalign="left"
            $font="DM Serif Text"
            fontSize={isTablet ? '16px' : '18px'}
            fontWeight="500"
          >
            {text}
          </TextWithFamily>
        )}
        {description && description.length > 0 && (
          <TextWithFamily
            $font="Inter"
            fontWeight="400"
            fontSize="12px"
          >
            {description}
          </TextWithFamily>
        )}
      </Flex>

      <CardBottom
        id={id}
        isMobile={isMobile}
        isButton={isButton}
      />
      {footerIcon}
    </StyledCard>
  )
}

export { Card }
