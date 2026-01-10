import { memo } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { AboutLeftSection } from './aboutLeftSection'
import { AboutRightSection } from './aboutRightSection'

const Ui = memo(() => {
  const pageInfo = FindByName('whyChoose')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-whyChoose-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={<AboutRightSection pageInfo={pageInfo} />}
        bgImage="/bgSepStraight.svg"
        leftWidth="40%"
        rightWidth="50%"
        $paddingLeftTop={isMobile ? '10px' : '0px'}
        $paddingRightTop={isMobile ? '20px' : '70px'}
        paddingBottom={isMobile ? '20px' : '90px'}
        doubleOption
      >
        <AboutLeftSection
          pageInfo={pageInfo}
          isMobile={isMobile}
        />
      </Wrapper>
    </div>
  )
})

export { Ui }
