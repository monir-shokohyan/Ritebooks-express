/* eslint-disable unicorn/no-nested-ternary */
import { Flex } from '@mantine/core'

import { HorWrapperType } from '@shared/types/horWrapper'
import { BgFlex } from '@shared/ui/BgFlex'

import { Background } from './background'
import { HeroWaves } from './heroWaves'

const horWrapper = ({
  isBgColor = false,
  RSJustify = 'flex-start',
  children,
  rightSection,
  bgImage,
  isReverseWrap = false,
  leftWidth = '55%',
  rightWidth = '45%',
  fullHeight = true,
  isSticky = false,
  desTitle = '',
  title = '',
  doubleOption = true,
  activeHead = true,
  $flexGap = 20,
  $paddingTop = '0px',
  bgWave = false,
  activeSticker = false,
  $paddingLeftTop = '0px',
  $paddingRightTop = '0px',
  secondSticker = false,
  paddingBottom = '20px',
  paddingToTopLayer = '0px',
  headTextAlign = 'center',
}: HorWrapperType) => {
  return (
    <Background
      title={title}
      desTitle={desTitle}
      activeHead={activeHead}
      activeSticker={activeSticker}
      secondSticker={secondSticker}
      paddingToTopLayer={paddingToTopLayer}
      headTextAlign={headTextAlign}
    >
      {bgWave && (
        <HeroWaves
          blur={20}
          amplitude={120}
          speed="fast"
          waveOpacity={0.5}
          waveWidth={90}
          colors={['#c084fc', '#a78bfa', '#818cf8', '#60a5fa', '#93c5fd']}
        />
      )}
      <BgFlex
        wrap={isReverseWrap ? 'wrap-reverse' : 'wrap'}
        bg={isBgColor ? `${bgImage}` : `'${bgImage}'`}
        w="100%"
        $isSticky={isSticky}
        opacity={0.25}
        py={paddingBottom}
        gap="5%"
        justify="center"
        align="flex-start"
      >
        {doubleOption ? (
          <>
            <Flex
              direction="column"
              w={{ base: '100%', lg: leftWidth }}
              h={{ base: 'auto', lg: '100%' }}
              gap={20}
              justify="center"
              align="start"
              p={{ base: '0px', lg: '0' }}
              pt={$paddingLeftTop}
            >
              {children}
            </Flex>
            <BgFlex
              w={{ base: '100%', lg: rightWidth }}
              h="100%"
              justify={RSJustify}
              align="center"
              p={{ base: '0px', lg: '0' }}
              pt={$paddingRightTop}
            >
              {rightSection}
            </BgFlex>
          </>
        ) : (
          <Flex
            direction="column"
            w={{ base: '100%' }}
            h={{ base: 'auto', lg: '100%' }}
            gap={$flexGap}
            justify="center"
            align="center"
            pt={$paddingTop}
            pos="relative"
          >
            {children}
          </Flex>
        )}
      </BgFlex>
    </Background>
  )
}

export { horWrapper }
