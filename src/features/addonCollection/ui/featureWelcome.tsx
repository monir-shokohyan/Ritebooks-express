import { Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { ProductsType } from '../types'
import { FeatureRightSection } from './featureRightSection'

const FeatureWelcome = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <Flex
      h={isMobile ? '' : '100vh'}
      align="center"
      justify="center"
    >
      <Wrapper
        rightSection={
          <Image
            src={product?.imageUrl}
            alt={product!.id as string}
            h={{ base: 200, sm: 200, md: 400, lg: 500 }}
            fit="contain"
          />
        }
        activeHead={false}
        bgImage="transparent"
        leftWidth="45%"
        rightWidth="45%"
        isReverseWrap={true}
        bgWave={false}
        doubleOption
        bgFlexAlign="center"
      >
        <FeatureRightSection page={page} />
      </Wrapper>
    </Flex>
  )
}

export { FeatureWelcome }
