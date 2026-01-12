import { ContactUsSection } from '@features/contactUs'
import { FeatureSection } from '@features/features'
import { FutureProofSection } from '@features/futureProof'
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
      <FutureProofSection />
      <FeatureSection />
      <ContactUsSection />
    </>
  )
}

export { Ui }
