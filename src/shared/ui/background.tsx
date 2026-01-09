import { ReactNode } from 'react'
import { Card, Flex, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'

import { TextResponsive, TextWithFamily } from './Typography'

const Background = ({
  children,
  desTitle = '',
  title = '',
  activeHead = true,
  activeSticker = false,
  secondSticker = false,
  paddingToTopLayer = '0px',
  headTextAlign = 'center',
}: {
  children: ReactNode
  desTitle: string
  title: string
  activeHead: boolean
  activeSticker?: boolean
  secondSticker?: boolean
  paddingToTopLayer?: string
  headTextAlign?: 'left' | 'center' | 'right'
}) => {
  const isMobile = useMediaQuery('(max-width: 760px)')
  return (
    <div
      style={{
        // borderBottom: `1px solid lightgray`,
        position: 'relative',
        paddingInline: `${paddingToTopLayer}`,
      }}
    >
      <Flex
        direction="column"
        gap={40}
        style={{
          border: '1px solid lightgray',
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
        }}
      >
        {activeSticker && (
          <div
            style={{
              position: 'absolute',
              right: `${isMobile ? '0px' : '20px'}`,
              top: '0px',
            }}
          >
            <Card
              bg={SavedColors.highlite}
              radius={0}
              p={{ base: 10, sm: 10, md: 15, lg: 20 }}
              style={{
                position: 'relative',
                border: `2px solid ${SavedColors.highlite}`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'rotate(-1deg) translateY(-2px)'
                e.currentTarget.style.boxShadow =
                  '6px 6px 16px rgba(0, 0, 0, 0.2), -2px -2px 10px rgba(255, 255, 255, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-3deg)'
                e.currentTarget.style.boxShadow =
                  '4px 4px 12px rgba(0, 0, 0, 0.15), -2px -2px 8px rgba(255, 255, 255, 0.5)'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 20px 20px 0',
                  borderColor: `transparent ${SavedColors.highlite} transparent transparent`,
                  filter: 'brightness(0.85)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 20px 20px 0',
                  borderColor:
                    'transparent rgba(0, 0, 0, 0.1) transparent transparent',
                  transform: 'translateX(1px) translateY(1px)',
                }}
              />

              <TextWithFamily
                $font="Roboto"
                fontSize={isMobile ? '13px' : '24px'}
                fontWeight="600"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  zIndex: 2,
                }}
                color={SavedColors.DemWhite}
              >
                Developed by
              </TextWithFamily>
              <TextWithFamily
                $font="Roboto"
                fontSize={isMobile ? '9px' : '13px'}
                fontWeight="400"
                style={{
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  zIndex: 2,
                }}
                color={SavedColors.DemWhite}
              >
                Lotus Soft Technologies Ltd
              </TextWithFamily>
            </Card>
          </div>
        )}
        {secondSticker && (
          <div
            style={{
              position: 'absolute',
              right: `${isMobile ? '20px' : '100px'}`,
              top: `${isMobile ? '30px' : '50px'}`,
            }}
          >
            <Image
              src="/arrow.svg"
              h={isMobile ? 40 : 100}
            />
          </div>
        )}
        {activeHead && (
          <Flex
            direction="column"
            align="center"
            pt={isMobile ? '80px' : '120px'}
            gap={20}
            px={20}
          >
            <TextResponsive
              color={SavedColors.highlite}
              fontSize="30px"
              fontWeight="300"
              $font="Roboto"
              $textalign={headTextAlign}
            >
              {desTitle}
            </TextResponsive>
            <TextResponsive
              color={SavedColors.TextColor}
              fontSize="16px"
              fontWeight="400"
              $textalign={headTextAlign}
            >
              {title}
            </TextResponsive>
          </Flex>
        )}
        {children}
      </Flex>
    </div>
  )
}

export { Background }
