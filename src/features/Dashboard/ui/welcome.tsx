/* eslint-disable react/jsx-pascal-case */
import { memo } from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
} from 'react-icons/fa'
import { Carousel } from '@mantine/carousel'
import { Button, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import { Container } from '@shared/ui/Container'
import { CTC } from '@shared/ui/CTC'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { Logo } from '@shared/ui/Logo'
import { SearchInput } from '@shared/ui/searchInput/searchInput'
import { TextWithFamily, TitleWithFamily } from '@shared/ui/Typography'

import { WelcomeTitle } from '../styles/styles'
import { WelcomeFeature } from './welcomeFeature'

const Welcome = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()
  const pageInfo = FindByName('Welcome')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <section id="dashboard-welcome-section">
      <Wrapper
        doubleOption={false}
        activeHead={false}
        $paddingTop="0px"
        isReverseWrap={true}
        bgWave={false}
      >
        <Flex
          px={10}
          direction="column"
          gap={20}
          align="center"
          w={isMobile ? '100%' : '60%'}
          pt={isMobile ? '2rem' : '5rem'}
          pb="5rem"
        >
          <Logo />
          <TitleWithFamily
            $font="DM Sans"
            fontWeight="500"
            fontSize="30px"
            $textalign="center"
          >
            Welcome to the
            <CTC text=" RiteBooks Express " />
          </TitleWithFamily>
          <WelcomeTitle
            $font="DM Sans"
            fontWeight="500"
            $textalign="center"
          >
            Simple Accounting, Inventory & POS Software for SmallSpace Cowboys
            Businesses
          </WelcomeTitle>
          <SearchInput />

          <Carousel
            emblaOptions={{ loop: true, align: 'start' }}
            style={{ paddingInline: '2rem' }}
            nextControlIcon={<FaArrowRight color={SavedColors.highlite} />}
            previousControlIcon={<FaArrowLeft color={SavedColors.highlite} />}
          >
            <Carousel.Slide>
              <TextWithFamily
                $font="Inter"
                $textalign="center"
              >
                {pageInfo?.description}
              </TextWithFamily>
            </Carousel.Slide>
            <Carousel.Slide>
              <TextWithFamily
                $font="Inter"
                $textalign="center"
              >
                {pageInfo?.descriptionSecond}
              </TextWithFamily>
            </Carousel.Slide>
          </Carousel>

          <Container
            gap={20}
            w="100%"
            wrap="wrap"
            justify="center"
            align="center"
            py={20}
          >
            <Button
              radius={10}
              leftSection={<FaCalendarAlt />}
              size="sm"
              w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
              color={SavedColors.DemWhite}
              onClick={() =>
                navigateAndScroll('/', 'dashboard-contact-section')
              }
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
        <WelcomeFeature />
      </Wrapper>
    </section>
  )
})

export { Welcome }
