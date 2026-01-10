import { ReactNode } from 'react'

export interface CardProps {
  text: string
  id?: number
  headerIcon: ReactNode
  footerIcon: ReactNode
  textResponsive?: boolean
  description?: string
  isButton?: boolean
}
export interface CardFooterProps {
  id?: number
  isMobile: boolean
  isButton: boolean
}
