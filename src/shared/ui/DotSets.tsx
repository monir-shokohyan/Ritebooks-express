import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'

const DotSets = ({
  activeDot,
  size = '8px',
}: {
  activeDot?: number
  size: string
}) => {
  return (
    <Flex
      align="center"
      gap={5}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          style={{
            height: size,
            width: size,
            borderRadius: '50%',
            background:
              activeDot === index + 1 ? SavedColors.semiBlack : '#000',
          }}
        />
      ))}
    </Flex>
  )
}

export { DotSets }
