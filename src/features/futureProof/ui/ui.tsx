/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

import { StyledCard } from '../styles'
import { CardBottom } from './CardBottom'
import { CardHeader } from './CardHeader'

const Ui = memo(() => {
  const pageInfo = FindByName('futureProof')
  const isMobile = useMediaQuery('(max-width: 760px)')
  const isTablet = useMediaQuery('(max-width: 1140px)')

  return (
    <div id="dashboard-futureProof-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        activeHead={false}
        $paddingTop={isMobile ? '20px' : '80px'}
        doubleOption={false}
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
          <TextWithFamily
            $font="DM Sans"
            fontWeight="400"
            fontSize="18px"
            color={SavedColors.highlite}
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.dTitle}
          </TextWithFamily>
          <TextResponsive
            $font="DM Serif Text"
            fontWeight="500"
            fontSize="32px"
            color={SavedColors.TextColor}
            $textalign={isMobile ? 'left' : 'center'}
          >
            <CTC text="Ritebooks Express " />
            {pageInfo?.title}
          </TextResponsive>
          <Flex
            wrap="wrap"
            w="100%"
            justify="center"
            gap={10}
            py={50}
          >
            {pageInfo?.features?.map((feature) => {
              const Icon = feature.icon as IconType
              return (
                <StyledCard
                  key={feature.name}
                  bg={SavedColors.SemiDarkWhite}
                  p="md"
                >
                  <CardHeader>
                    <Icon
                      size={24}
                      color={SavedColors.highlite}
                    />
                  </CardHeader>
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
                      fontSize="22px"
                      fontWeight="500"
                    >
                      {feature.name}
                    </TextResponsive>
                  </Flex>
                  <CardBottom
                    id={feature.id}
                    isMobile={isMobile}
                  />
                  <Icon
                    size="60%"
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
                </StyledCard>
              )
            })}
          </Flex>
          <TextWithFamily
            $font="Inter"
            fontWeight="400"
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.description}
          </TextWithFamily>
          <TextWithFamily
            $font="Inter"
            fontWeight="400"
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.descriptionSecond}
          </TextWithFamily>
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
