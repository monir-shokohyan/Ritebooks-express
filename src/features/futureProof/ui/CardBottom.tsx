import { Group } from '@mantine/core'

import { DotSets } from '@shared/ui/DotSets'
import { TextResponsive } from '@shared/ui/Typography'

const CardBottom = ({ id, isMobile }: { id?: number; isMobile: boolean }) => {
  return (
    <Group
      justify="space-between"
      w="100%"
      p={10}
      style={{
        borderTop: '1px solid gray',
      }}
      align="center"
      pos="absolute"
      bottom="0px"
      left="0px"
    >
      <TextResponsive
        $textalign="left"
        $font="DM Serif Text"
        fontSize={isMobile ? '16px' : '22px'}
        fontWeight="500"
        width="20px"
      >
        0{id}
      </TextResponsive>
      <DotSets
        activeDot={id}
        size={isMobile ? '6px' : '8px'}
      />
    </Group>
  )
}

export { CardBottom }
