import { FaCalendarAlt, FaDownload } from 'react-icons/fa'
import { Button, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { useNavigationScroll } from '@shared/hooks'
import { Container } from '@shared/ui/Container'
import { Ctc } from '@shared/ui/CTC'
import { Logo } from '@shared/ui/Logo'
import { SearchInput } from '@shared/ui/searchInput/searchInput'
import { TextWithFamily, TitleWithFamily } from '@shared/ui/Typography'

import { WelcomeTitle } from '../styles'
import { ProductsType } from '../types'

const FeatureRightSection = ({ page }: { page: ProductsType }) => {
  const { navigateAndScroll } = useNavigationScroll()
  const product = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <Flex
      px={10}
      direction="column"
      gap={20}
      pt={isMobile ? '2rem' : '5rem'}
      pb="5rem"
    >
      <Logo />
      <TitleWithFamily
        $font="DM Sans"
        fontWeight="500"
        fontSize="30px"
        $textalign="left"
      >
        <Ctc text=" Ritebooks Express " /> Feature
      </TitleWithFamily>
      <WelcomeTitle
        $font="DM Sans"
        fontWeight="500"
        $textalign="left"
      >
        {product?.id as string}
      </WelcomeTitle>
      <SearchInput />
      <TextWithFamily
        $font="Inter"
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
    </Flex>
  )
}

export { FeatureRightSection }
