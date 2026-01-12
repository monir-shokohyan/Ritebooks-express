import { FaHome } from 'react-icons/fa'
import { Anchor, Breadcrumbs, Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import { ProductsType } from '../types'
import { FeatureRightSection } from './featureRightSection'

const FeatureWelcome = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')
  const items = [
    <Anchor
      key={1}
      href="/"
      c={SavedColors.highlite}
    >
      <FaHome />
    </Anchor>,

    <TextWithFamily
      key={2}
      fontSize="12px"
      $font="Inter"
      width="60%"
    >
      {product!.id as string}
    </TextWithFamily>,
  ]

  return (
    <Flex
      h={isMobile ? '' : '100vh'}
      align="flex-start"
      justify="center"
      direction="column"
    >
      <Breadcrumbs
        p={20}
        w="90%"
      >
        {items}
      </Breadcrumbs>

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
