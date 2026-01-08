import { Flex } from '@mantine/core'

import { WelcomeLeftSection } from './welcomeLeftSection'

const WelcomeFeature = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justify="center"
      align="center"
      pos="absolute"
      style={{ zIndex: -1, opacity: 0.25 }}
    >
      <WelcomeLeftSection />
    </Flex>
  )
}

export { WelcomeFeature }
