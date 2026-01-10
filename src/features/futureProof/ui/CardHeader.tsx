import { ReactNode } from 'react'
import { Container } from '@mantine/core'

import { SavedColors } from '@shared/constants'

const CardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      aria-label="Settings"
      style={{
        boxShadow:
          '0 0.706592px 0.706592px -0.666667px #00000014,0 1.80656px 1.80656px -1.33333px #00000014,0 3.62176px 3.62176px -2px #00000012,0 6.8656px 6.8656px -2.66667px #00000012,0 13.6468px 13.6468px -3.33333px #0000000d,0 30px 30px -4px #00000005,inset 0 3px 1px #fff',
        height: '25%',
        width: '25%',
        minWidth: '45px',
        minHeight: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        background: SavedColors.SemiDarkWhite,
        position: 'absolute',
        top: '0px',
        left: '0px',
      }}
    >
      {children}
    </Container>
  )
}

export { CardHeader }
