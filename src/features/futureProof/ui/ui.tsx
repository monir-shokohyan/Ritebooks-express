import { memo } from 'react'
import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { Ctc } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive } from '@shared/ui/Typography'

import { Card } from './Card'

const Ui = memo(() => {
  const pageInfo = FindByName('futureProof')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-futureProof-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        activeHead={false}
        paddingBottom={isMobile ? '40px' : '80px'}
        doubleOption={false}
        isBackground={true}
      >
        <Flex
          w="100%"
          wrap="wrap"
          justify="center"
          direction="column"
          align="center"
          px={10}
          gap={20}
        >
          <TextResponsive
            $font="DM Sans"
            fontWeight="400"
            fontSize="18px"
            color={SavedColors.highlite}
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.dTitle}
          </TextResponsive>
          <TextResponsive
            $font="DM Serif Text"
            fontWeight="500"
            fontSize="32px"
            color={SavedColors.TextColor}
            $textalign={isMobile ? 'left' : 'center'}
          >
            <Ctc text="Ritebooks Express " />
            {pageInfo?.title}
          </TextResponsive>
          <Flex
            wrap="wrap"
            w="100%"
            justify="center"
            gap={10}
            py={isMobile ? 10 : 50}
          >
            {pageInfo?.features?.map((feature) => {
              const Icon = feature.icon as IconType
              return (
                <Card
                  key={feature.id}
                  text={feature.name}
                  id={feature.id}
                  headerIcon={
                    <Icon
                      size={16}
                      color={SavedColors.black}
                    />
                  }
                  footerIcon={
                    <Icon
                      size="30%"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        zIndex: -1,
                        opacity: 0.07,
                      }}
                      color={SavedColors.highlite}
                    />
                  }
                />
              )
            })}
          </Flex>
          <TextResponsive
            $font="Inter"
            fontWeight="400"
            fontSize="15px"
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.description}
          </TextResponsive>
          <TextResponsive
            $font="Inter"
            fontSize="15px"
            fontWeight="400"
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.descriptionSecond}
          </TextResponsive>
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
