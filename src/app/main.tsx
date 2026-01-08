import { StrictMode } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import { MantineProvider } from '@mantine/core'

import { Providers } from '@app/providers'
import { SavedColors } from '@shared/constants'

import { AppRouter } from './router'

import './main.css'
import '@mantine/core/styles.css'
import 'react-tooltip/dist/react-tooltip.css'
import '@gfazioli/mantine-marquee/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@gfazioli/mantine-text-animate/styles.css'

const container = document.querySelector('#root')

if (!container) {
  throw new Error('Container was not found')
}

ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS)

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

const isMobile = isTouchDevice()

createRoot(container).render(
  <StrictMode>
    <Providers>
      <MantineProvider>
        {!isMobile && (
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color={SavedColors.CursorHighlite}
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={2}
            trailingSpeed={8}
            showSystemCursor={true}
            outerStyle={{
              border: `2px solid rgba(${SavedColors.CursorHighlite}, 1)`,
              backgroundColor: 'transparent',
            }}
          />
        )}

        <AppRouter />
      </MantineProvider>
    </Providers>
  </StrictMode>,
)
