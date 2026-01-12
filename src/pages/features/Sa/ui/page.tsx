import { Helmet } from 'react-helmet'

import { SAWidget } from '@widgets/features/Sa'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.SA}</title>
        <meta
          name="description"
          content="Simplify your business finances with Ritebooks Express. Track income, expenses, invoicing, payments, and generate clear day-end/month-end reports — no accounting expertise needed."
        />
        <meta
          name="keywords"
          content="simplified accounting software, small business accounting, invoicing and payments, expense tracking, financial reports, cash book management, easy accounting Kenya"
        />
      </Helmet>
      <Content title={Features.SA}>
        <SAWidget />
      </Content>
    </>
  )
}
