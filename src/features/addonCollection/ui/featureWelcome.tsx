import { FaCalendarAlt, FaDownload } from 'react-icons/fa'
import { Button, Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import { Container } from '@shared/ui/Container'
import { Ctc } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily, TitleWithFamily } from '@shared/ui/Typography'

import { WelcomeTitle } from '../styles/styles'
import { ProductsType } from '../types'

const FeatureWelcome = ({ page }: { page: ProductsType }) => {
  const { navigateAndScroll } = useNavigationScroll()
  const product = FindByName(page)

  return (
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
      $paddingTop="0px"
      isReverseWrap={true}
      bgWave={true}
    >
      <div style={{ paddingInline: '10px' }}>
        <TitleWithFamily
          $font="Roboto"
          fontWeight="500"
          fontSize="30px"
          $textalign="left"
        >
          <Ctc text=" RitePayroll " /> Feature
        </TitleWithFamily>
        <WelcomeTitle
          $font="Roboto"
          fontWeight="500"
        >
          {product?.id as string}
        </WelcomeTitle>
        <TextWithFamily
          $font="Roboto"
          fontWeight="400"
        >
          {product?.overview}
        </TextWithFamily>

        <Container
          gap={20}
          w="100%"
          wrap="wrap"
          justify="start"
          align="center"
          py={20}
        >
          <Button
            radius={10}
            leftSection={<FaCalendarAlt />}
            size="sm"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.DemWhite}
            onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
            bg={SavedColors.highlite}
          >
            Request a live demo
          </Button>

          <Button
            component="a"
            radius={10}
            size="sm"
            leftSection={<FaDownload />}
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            variant="outline"
            href="/brochures/RitePayroll.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: SavedColors.highlite,
              fontWeight: '600',
              fontSize: '14px',
              border: `1px solid ${SavedColors.highlite}`,
            }}
          >
            Download product brochure
          </Button>
        </Container>
      </div>
    </Wrapper>
  )
}

export { FeatureWelcome }
