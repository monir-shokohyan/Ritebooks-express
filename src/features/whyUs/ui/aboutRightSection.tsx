import { FaRegCircleDot } from 'react-icons/fa6'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { Ctc } from '@shared/ui/CTC'
import { TextResponsive } from '@shared/ui/Typography'

const AboutRightSection = ({
  pageInfo,
  isMobile,
}: {
  pageInfo?: TotalDataItem
  isMobile: boolean
}) => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100%"
      pt={isMobile ? 0 : 150}
      direction="column"
      gap={isMobile ? 20 : 40}
      px={10}
      w="100%"
    >
      <TextResponsive
        $font="DM Sans"
        fontWeight="400"
        fontSize="18px"
        color={SavedColors.highlite}
        $textalign="left"
      >
        {pageInfo?.dTitle}
      </TextResponsive>
      <TextResponsive
        $font="DM Serif Text"
        fontWeight="400"
        fontSize="32px"
        color={SavedColors.TextColor}
        $textalign="left"
      >
        <Ctc text="Ritebooks Express " />
        {pageInfo?.title}
      </TextResponsive>
      <TextResponsive
        $font="Inter"
        fontWeight="400"
      >
        {pageInfo?.description}
      </TextResponsive>
      <Flex
        direction="column"
        align="flex-start"
        w="100%"
      >
        {pageInfo?.features?.map((Mcard) => {
          return (
            <Flex
              key={Mcard.name}
              gap={10}
              align="center"
            >
              <FaRegCircleDot color={SavedColors.highlite} />

              <TextResponsive
                $font="Inter"
                fontWeight="400"
                style={{ textWrap: 'nowrap' }}
                fontSize="15px"
              >
                {Mcard.name}
              </TextResponsive>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}

export { AboutRightSection }
