import { Flex, Image } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'

const AboutRightSection = ({ pageInfo }: { pageInfo?: TotalDataItem }) => {
  return (
    <Flex
      w="100%"
      pt={30}
    >
      <Image
        src={pageInfo?.imageUrl || '/aboutus.png'}
        alt="why us image"
        h={{ base: 180, sm: 180, md: 400, lg: 500 }}
        fit="contain"
        style={{ aspectRatio: '1/1' }}
      />
    </Flex>
  )
}

export { AboutRightSection }
