/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import { IconType } from 'react-icons'
import { FaRegCircleDot } from 'react-icons/fa6'
import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { Ripple } from '@shared/ui/AnimatedBg'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { IconWithText } from '@shared/ui/IconWithText'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

const Ui = memo(() => {
  const pageInfo = FindByName('whoIsFor')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-whoIsFor-section">
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
          {isMobile && (
            <div style={{ position: 'relative' }}>
              <Image
                src="/whoIsForWL.svg"
                w="100%"
                h="100%"
                fit="contain"
              />
              <Ripple
                position="absolute"
                top="50%"
                left="50%"
                translate="-50%, -50%"
                zIndex={-1}
                size="23rem"
              />
            </div>
          )}
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

          {!isMobile && (
            <Flex
              h={{ base: 200, sm: 350, md: 500, lg: 500 }}
              w="100%"
              pos="relative"
            >
              <Image
                src="/whoIsForwithout.svg"
                w="100%"
                h="100%"
                fit="contain"
              />
              <Ripple
                position="absolute"
                top="50%"
                left="50%"
                translate="-50%, -50%"
                zIndex={-1}
                size="40rem"
              />
              {pageInfo?.features?.map((feature) => {
                const Icon = feature.icon as IconType
                return (
                  <IconWithText
                    key={feature.id}
                    icon={Icon}
                    text={feature.name}
                    textColor="#000000"
                    iconColor={SavedColors.PrimaryWhite}
                    Style={feature.style}
                    isLeft={feature.isLeft}
                    font="Inter"
                    align="flex-end"
                    fontSize="14px"
                    fontWeight="500"
                  />
                )
              })}
            </Flex>
          )}
          {isMobile && (
            <Flex
              direction="column"
              align="flex-start"
              w="100%"
            >
              {pageInfo?.features?.map((feature) => {
                return (
                  <Flex
                    key={feature.name}
                    gap={10}
                    align="center"
                  >
                    <FaRegCircleDot color={SavedColors.highlite} />

                    <TextWithFamily
                      $font="Inter"
                      fontWeight="400"
                      style={{ textWrap: 'nowrap' }}
                      fontSize="14px"
                    >
                      {feature.name}
                    </TextWithFamily>
                  </Flex>
                )
              })}
            </Flex>
          )}
          <TextWithFamily
            $font="Inter"
            fontWeight="400"
            $textalign={isMobile ? 'left' : 'center'}
          >
            {pageInfo?.description}
          </TextWithFamily>
        </Flex>
      </Wrapper>
    </div>
  )
})

export { Ui }
