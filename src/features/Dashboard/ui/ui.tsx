import { ActionSection } from '@features/actionSection'
import { BenefitsSection } from '@features/benefits'
import { ContactUsSection } from '@features/contactUs'
import { FeaturesSection } from '@features/featureSection'
import { GrowthSection } from '@features/growth'
import { IndustriesSection } from '@features/industriesSection'
import { WhoIsForSection } from '@features/whoIsFor'
import { WhyChooseSection } from '@features/whyChoose'
import { WhyUsSection } from '@features/whyUs'

import { Welcome } from './welcome'

function Ui() {
  return (
    <>
      <Welcome />
      <WhyUsSection />
      <WhoIsForSection />
      <WhyChooseSection />
      <ActionSection />
      <FeaturesSection />
      <GrowthSection />
      <IndustriesSection />
      <BenefitsSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
