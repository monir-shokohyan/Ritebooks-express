import { ActionIcon, Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { TotalDataItem } from '@shared/constants/allTexts'
import { Ctc } from '@shared/ui/CTC'
import { TextResponsive } from '@shared/ui/Typography'

const AboutLeftSection = ({
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
      pt={0}
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
        fontWeight="500"
        fontSize="32px"
        color={SavedColors.TextColor}
        $textalign="left"
      >
        Here are the key reasons businesses choose
        <Ctc text=" Ritebooks Express " />
        {pageInfo?.title}
      </TextResponsive>
      <Flex
        direction="column"
        align="flex-start"
        w="100%"
        gap={20}
      >
        {pageInfo?.features?.map((Mcard) => {
          return (
            <Flex
              key={Mcard.name}
              gap={10}
              align="flex-start"
            >
              <ActionIcon
                variant="filled"
                aria-label="Settings"
                radius="50%"
                color={SavedColors.highlite}
              >
                <TextResponsive
                  $font="DM Sans"
                  color={SavedColors.PrimaryWhite}
                  $textalign="center"
                >
                  0{Mcard.id}
                </TextResponsive>
              </ActionIcon>
              <Flex direction="column">
                <TextResponsive
                  $font="Inter"
                  fontWeight="400"
                  style={{ textWrap: 'nowrap' }}
                  fontSize="18px"
                >
                  {Mcard.name}
                </TextResponsive>
                <TextResponsive
                  $font="Inter"
                  fontWeight="400"
                  style={{ textWrap: 'nowrap' }}
                  fontSize="12px"
                >
                  {Mcard.description}
                </TextResponsive>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}

export { AboutLeftSection }
