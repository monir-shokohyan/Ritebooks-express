import { AddonCollection } from '@features/addonCollection'
import { Features } from '@shared/constants/featuresMap'

const Ui = () => {
  return <AddonCollection page={Features.InventoryManagement} />
}

export { Ui }
