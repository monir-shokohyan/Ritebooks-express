export interface HorWrapperType {
  rightSection?: React.ReactNode
  bgImage?: string
  isReverseWrap?: boolean
  children: React.ReactNode
  leftWidth?: string
  rightWidth?: string
  fullHeight?: boolean
  sectionTitle?: string
  title?: string
  RSJustify?: 'flex-start' | 'center' | 'flex-end'
  isBgColor?: boolean
  isSticky?: boolean
  desTitle?: string
  doubleOption?: boolean
  activeHead?: boolean
  $paddingTop?: string
  $flexGap?: number
  $deactiveLine?: boolean
  bgWave?: boolean
  activeSticker?: boolean
  $paddingLeftTop?: string
  $paddingRightTop?: string
  secondSticker?: boolean
  paddingBottom?: string
  paddingToTopLayer?: string
  headTextAlign?: 'left' | 'center' | 'right'
  flip?: boolean
}
