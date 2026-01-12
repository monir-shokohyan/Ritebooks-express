import { memo } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import { horWrapper as Wrapper } from '@shared/ui/horWrapper'

import { ContactFormMain } from './contactForm'
import { ContactInfo } from './contactInfo'

const Ui = memo(() => {
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-contact-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={<ContactFormMain />}
        RSJustify="center"
        leftWidth="35%"
        rightWidth="60%"
        activeHead={false}
        paddingBottom={isMobile ? '40px' : '80px'}
      >
        <ContactInfo />
      </Wrapper>

      <div
        style={{
          position: 'relative',
          height: '50vh',
          overflow: 'scroll',
          maxWidth: '100%',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4581.645858084475!2d32.602924194979494!3d0.32116104070131996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbe6a834714b%3A0x802d34bb32ac2e3a!2sLotus%20Technologies%20Ltd!5e0!3m2!1sen!2sug!4v1761568202387!5m2!1sen!2sug"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
          title="Map showing location at coordinates 0°19'16.6'N 32°36'10.2'E in Uganda"
        />
      </div>
    </div>
  )
})

export { Ui }
