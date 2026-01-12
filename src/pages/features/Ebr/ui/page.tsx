import { Helmet } from 'react-helmet'

import { EBRWidget } from '@widgets/features/Ebr'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.EBR}</title>
        <meta
          name="description"
          content="Make smarter decisions with clear, easy-to-read reports. Get sales, purchase, stock, customer/supplier statements and basic financial summaries in just a few clicks."
        />
        <meta
          name="keywords"
          content="business reports software, sales and purchase reports, stock reports, customer supplier statements, financial summary reports, small business reporting Kenya"
        />
      </Helmet>
      <Content title={Features.EBR}>
        <EBRWidget />
      </Content>
    </>
  )
}
