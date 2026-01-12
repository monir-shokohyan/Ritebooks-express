import { Helmet } from 'react-helmet'

import { IMWidget } from '@widgets/features/Im'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.IM}</title>
        <meta
          name="description"
          content="Never run out of stock again. Ritebooks Express offers real-time stock tracking, reorder alerts, item management, stock inward/outward, and valuation reports — perfect for retail & small shops."
        />
        <meta
          name="keywords"
          content="inventory management software, stock control system, real-time inventory tracking, reorder level alerts, stock valuation, retail inventory Kenya, small shop stock software"
        />
      </Helmet>
      <Content title={Features.IM}>
        <IMWidget />
      </Content>
    </>
  )
}
