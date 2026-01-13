import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactLenis from 'lenis/react'

import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider>
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.7,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            allowNestedScroll: true,
          }}
        >
          {children}
        </ReactLenis>
      </ThemeProvider>
    </BrowserRouter>
  )
}
