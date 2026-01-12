import { IconType } from 'react-icons'

import { Features } from '@shared/constants/featuresMap'

export type ProductsType =
  | 'welcome'
  | Features.SimplifiedAccounting
  | Features.InventoryManagement
  | Features.PointOfSale
  | Features.EssentialBusinessReporting

interface DeploymentOption {
  title: string
  description: string
}

interface IndustriesServed {
  title: string
  description: string
}

interface Product {
  name: string
  info: string
  image: string
  features: string[]
  deploymentOption: DeploymentOption
  industriesServed: IndustriesServed
  brochureLink?: string
}

export type ProductsCollectionType = {
  [key in ProductsType]: Product
}
export interface FeatureCardProps {
  Icon: IconType
  title: string
}
export interface AllowType {
  $disallowBorder: boolean
}
