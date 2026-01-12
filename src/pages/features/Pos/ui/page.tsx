import { Helmet } from 'react-helmet'

import { POSWidget } from '@widgets/features/Pos'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.POS}</title>
        <meta
          name="description"
          content="Fast, simple and reliable POS billing for your counter. Accept multiple payments, print invoices instantly, view daily sales & cash summaries — built for speed and accuracy."
        />
        <meta
          name="keywords"
          content="POS system Kenya, point of sale software, retail billing software, cash register system, fast billing POS, multiple payment POS, daily sales report POS"
        />
      </Helmet>
      <Content title={Features.POS}>
        <POSWidget />
      </Content>
    </>
  )
}
