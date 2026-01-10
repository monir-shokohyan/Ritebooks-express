import { MdOutlineArrowOutward } from 'react-icons/md'
import { Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { DotSets } from '@shared/ui/DotSets'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

import { StyledButton } from '../styles'
import { CardFooterProps } from '../types'

const CardBottom = ({ id, isMobile, isButton }: CardFooterProps) => {
  const isTablet = useMediaQuery('(max-width: 1140px)')

  return (
    <Group
      justify="space-between"
      w="100%"
      p={10}
      style={{
        borderTop: '1px solid gray',
      }}
      align="center"
      pos="absolute"
      bottom="0px"
      left="0px"
    >
      {isButton ? (
        <StyledButton
          variant="transparent"
          fullWidth
          rightSection={<MdOutlineArrowOutward size={20} />}
          color="black"
        >
          <TextWithFamily
            $textalign="left"
            $font="DM Serif Text"
            fontSize={isTablet ? '12px' : '14px'}
            fontWeight="500"
          >
            Read more
          </TextWithFamily>
        </StyledButton>
      ) : (
        <>
          <TextResponsive
            $textalign="left"
            $font="DM Serif Text"
            fontSize={isMobile ? '16px' : '22px'}
            fontWeight="500"
            width="20px"
          >
            0{id}
          </TextResponsive>
          <DotSets
            activeDot={id}
            size={isMobile ? '6px' : '8px'}
          />
        </>
      )}
    </Group>
  )
}

export { CardBottom }
