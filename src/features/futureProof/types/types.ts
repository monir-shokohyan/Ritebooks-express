import { ReactNode } from 'react'

export interface CardProps {
  text: string
  id?: number
  headerIcon: ReactNode
  footerIcon: ReactNode
}
