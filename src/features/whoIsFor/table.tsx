import { Table } from '@mantine/core'

import { TotalDataItem } from '@shared/constants/allTexts'
import { TextResponsive } from '@shared/ui/Typography'

import { AnimatedButton } from './ui/dynamicButton'

const TableComponent = ({
  tableContent,
  isMobile,
  changeImage,
}: {
  tableContent: TotalDataItem['features']
  isMobile: boolean
  changeImage: (id: number) => void
}) => {
  const rows = tableContent?.map((item) => (
    <Table.Tr
      key={item.id}
      onMouseLeave={() => changeImage(0)}
    >
      <Table.Td>
        <TextResponsive fontSize="3rem">0{item.id}</TextResponsive>
      </Table.Td>
      <Table.Td>
        <TextResponsive fontSize="1.3rem">{item.name}</TextResponsive>
      </Table.Td>
      <Table.Td>
        <TextResponsive
          fontSize="1rem"
          fontWeight="300"
        >
          {item.description}
        </TextResponsive>
      </Table.Td>
      {!isMobile && (
        <Table.Td
          onMouseEnter={() => changeImage(item.id || 0)}
          style={{ cursor: 'pointer' }}
        >
          <AnimatedButton onClick={() => console.log('Clicked!')} />
        </Table.Td>
      )}
    </Table.Tr>
  ))

  return (
    <Table tabularNums>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}

export { TableComponent }
