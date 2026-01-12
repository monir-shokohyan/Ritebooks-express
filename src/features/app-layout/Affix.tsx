import { FaArrowUp } from 'react-icons/fa'
import { ActionIcon, Affix, Transition } from '@mantine/core'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'

const AffixComponent = () => {
  const [scroll, scrollTo] = useWindowScroll()
  const isMobile = useMediaQuery('(max-width: 760px)')
  const bottomPosition = isMobile ? 95 : 30
  return (
    <Affix position={{ bottom: bottomPosition, left: 30 }}>
      <Transition
        transition="slide-up"
        mounted={scroll.y > 0}
      >
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            size="xl"
            color={SavedColors.highlite}
          >
            <FaArrowUp size={16} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}

export { AffixComponent }
