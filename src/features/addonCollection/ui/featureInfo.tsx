import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Card } from '@features/futureProof/ui/Card'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextResponsive, TextWithFamily } from '@shared/ui/Typography'

import { ProductsType } from '../types'

const FeatureInfo = ({ page }: { page: ProductsType }) => {
  const pageInfo = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="feature-info-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        activeHead={false}
        paddingBottom={isMobile ? '20px' : '80px'}
        doubleOption={false}
        isBackground={true}
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
            What powerful benefits do this feature have ?
          </TextWithFamily>
          <TextResponsive
            $font="DM Serif Text"
            fontWeight="500"
            fontSize="32px"
            color={SavedColors.TextColor}
            $textalign={isMobile ? 'left' : 'center'}
          >
            Key benefits of this feature
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
                <Card
                  key={feature.id}
                  text={feature.name}
                  id={feature.id}
                  headerIcon={
                    <Icon
                      size={16}
                      color={SavedColors.black}
                    />
                  }
                  footerIcon={
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
                  }
                />
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
}

export { FeatureInfo }
