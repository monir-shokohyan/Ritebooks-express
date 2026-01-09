import { memo } from 'react'
import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { AboutRightSection } from './aboutRightSection'

const Ui = memo(() => {
  const pageInfo = FindByName('whyUs')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-whyUs-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={
          <AboutRightSection
            pageInfo={pageInfo}
            isMobile={isMobile}
          />
        }
        bgImage="/bgSep.svg"
        RSJustify="center"
        leftWidth="40%"
        rightWidth="50%"
        activeHead={false}
        $paddingLeftTop={isMobile ? '10px' : '80px'}
        $paddingRightTop={isMobile ? '20px' : '50px'}
        activeSticker={false}
      >
        <Flex
          w="100%"
          wrap="wrap"
          justify="center"
          direction="column"
          px={20}
          gap={20}
        >
          <Image
            src={pageInfo?.imageUrl || '/aboutus.png'}
            alt="why us image"
            h={{ base: 380, sm: 380, md: 400, lg: 500 }}
            fit="contain"
            style={{ aspectRatio: '1/1' }}
          />
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
