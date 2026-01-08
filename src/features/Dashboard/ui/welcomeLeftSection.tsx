import { Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { AnimatedChartComponent } from '@shared/ui/AnimatedWelcome'

import { Container } from '../styles'

const WelcomeLeftSection = () => {
  const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Container style={Style}>
      <Image
        src="/dashboard1.svg"
        alt="Welcome"
        c={SavedColors.highlite}
        style={{ zIndex: 12 }}
      />
      <AnimatedChartComponent />
    </Container>
  )
}
export { WelcomeLeftSection }
