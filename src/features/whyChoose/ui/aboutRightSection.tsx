import { Flex, Image } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'

const AboutRightSection = ({ pageInfo }: { pageInfo?: TotalDataItem }) => {
  return (
    <Flex w="100%">
      <Image
        src={pageInfo?.imageUrl || '/aboutus.png'}
        alt="why us image"
        h={{ base: 380, sm: 380, md: 400, lg: 500 }}
        fit="contain"
        style={{ aspectRatio: '1/1' }}
      />
    </Flex>
  )
}

export { AboutRightSection }
