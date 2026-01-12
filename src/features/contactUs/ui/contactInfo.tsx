import React from 'react'
import { TbFileUnknown } from 'react-icons/tb'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { IconWithText } from '@shared/ui/IconWithText'
import { TextWithFamily } from '@shared/ui/Typography/Typography'

const ContactInfo: React.FC = () => {
  const pageInfo = FindByName('contact us')
  return (
    <Flex
      w="100%"
      wrap="wrap"
      justify="center"
      direction="column"
      px={20}
      gap={30}
    >
      <TextWithFamily
        $font="Roboto"
        fontWeight="500"
        fontSize="18px"
        color={SavedColors.highlite}
        $textalign="left"
      >
        {pageInfo?.dTitle}
      </TextWithFamily>
      <TextWithFamily
        $font="Roboto"
        fontWeight="500"
        fontSize="32px"
        color={SavedColors.TextColor}
        $textalign="left"
      >
        {pageInfo?.title}
      </TextWithFamily>
      <Flex
        direction="column"
        gap={5}
      >
        {pageInfo?.features?.map((feature) => {
          return (
            <IconWithText
              key={feature.name}
              icon={feature.icon ?? TbFileUnknown}
              text={feature.description}
              $hoveractive={
                feature.name.toLowerCase() === 'address' ? 'false' : 'true'
              }
              allowTextRes={false}
              fontSize="14px"
              textColor={SavedColors.TextColor}
              iconColor={SavedColors.highlite}
              $border={`1px solid ${SavedColors.highlite}`}
              $isActiveIconBg={false}
              $iconContainerSize="sm"
              iconSize={15}
              padding="8px"
              handleClick={() => {
                if (feature.name.toLowerCase() !== 'address') {
                  window.location.href = `${feature.target}`
                }
              }}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export { ContactInfo }
