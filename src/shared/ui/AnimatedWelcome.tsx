import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { SavedColors } from '@shared/constants'

interface DataPoint {
  value: number
  label: string
}

interface AnimatedChartProps {
  data?: DataPoint[]
  animationDuration?: number
  loopDelay?: number
}

interface BarProps {
  height: number
  animate: boolean
  delay: number
}

const growBar = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 0.5;
  }
`

const ChartWrapper = styled.div`
  border-radius: 16px;
  position: absolute;
  width: 65%;
  height: 40%;
  top: 50%;
  left: 9.5%;
  transform: translateY(-77%);
  z-index: 1;
`

const BarsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3.3%;
  height: 100%;
  width: 100%;
`

const Bar = styled.div<BarProps>`
  flex: 1;
  max-width: 80px;
  height: ${(props) => props.height}%;
  border-radius: 2px 2px 0px 0px;
  background: ${SavedColors.highlite};
  transform-origin: bottom;
  transform: scaleY(0);
  opacity: 0;
  position: relative;

  ${(props) =>
    props.animate &&
    css`
      animation: ${growBar} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      animation-delay: ${props.delay}s;
    `}
`
const data = [
  { id: 1, value: 45 },
  { id: 2, value: 68 },
  { id: 3, value: 52 },
  { id: 4, value: 78 },
  { id: 5, value: 88 },
  { id: 6, value: 45 },
  { id: 7, value: 68 },
  { id: 8, value: 92 },
  { id: 9, value: 28 },
  { id: 10, value: 68 },
  { id: 11, value: 10 },
  { id: 12, value: 68 },
  { id: 13, value: 59 },
  { id: 14, value: 28 },
  { id: 15, value: 18 },
]
const AnimatedChartComponent: React.FC<AnimatedChartProps> = ({
  animationDuration = 3000,
  loopDelay = 2000,
}) => {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const totalAnimationTime = animationDuration + loopDelay

    const interval = setInterval(() => {
      setAnimate(false)

      setTimeout(() => {
        setAnimate(true)
      }, 100)
    }, totalAnimationTime)

    return () => clearInterval(interval)
  }, [animationDuration, loopDelay])

  return (
    <ChartWrapper>
      <BarsContainer>
        {data.map((item, index) => (
          <Bar
            key={`${item.id}-${animate}`}
            height={item.value}
            animate={animate}
            delay={index * 0.15}
          />
        ))}
      </BarsContainer>
    </ChartWrapper>
  )
}

export { AnimatedChartComponent }
