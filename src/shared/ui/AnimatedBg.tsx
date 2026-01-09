import { Box, type BoxProps } from '@mantine/core'
import { styled } from 'styled-components'

import { SavedColors } from '@shared/constants'

interface StyleProps {
  $size?: string | number
  $position?: React.CSSProperties['position']
  $top?: React.CSSProperties['top']
  $left?: React.CSSProperties['left']
  $transform?: React.CSSProperties['transform']
  $translate?: string
  $zIndex?: React.CSSProperties['zIndex']
}

const LoaderContainer = styled(Box)<
  StyleProps & BoxProps & { children?: React.ReactNode }
>`
  --size: ${({ $size = '250px' }) => $size};
  --duration: 16s;
  --background: linear-gradient(
    0deg,
    ${SavedColors.highliteOpacityExtreme} 0%,
    ${SavedColors.highliteOpacityExtreme} 100%
  );

  width: var(--size);
  height: var(--size);
  aspect-ratio: 1;

  position: ${({ $position = 'relative' }) => $position};
  top: ${({ $top }) => $top ?? 'auto'};
  left: ${({ $left }) => $left ?? 'auto'};
  transform: ${({ $transform, $translate }) =>
    $translate ? `translate(${$translate})` : $transform || 'none'};
  z-index: ${({ $zIndex }) => $zIndex ?? 'auto'};

  .box {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: var(--background);
    backdrop-filter: blur(5px);
    animation: ripple 2s infinite ease-in-out;
  }

  .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }
  .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    animation-delay: 0.2s;
  }
  .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    animation-delay: 0.4s;
  }

  .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`

interface RippleLoaderProps extends Omit<BoxProps, 'size'> {
  size?: string | number
  position?: React.CSSProperties['position']
  top?: React.CSSProperties['top']
  left?: React.CSSProperties['left']
  transform?: React.CSSProperties['transform']
  translate?: string
  zIndex?: React.CSSProperties['zIndex']
  logoColor?: string
  duration?: string
}

export function Ripple({
  size = '250px',
  position,
  top,
  left,
  transform,
  translate,
  zIndex,
  logoColor = 'grey',
  duration = '2s',
  ...mantineBoxProps
}: RippleLoaderProps) {
  return (
    <LoaderContainer
      $size={size}
      $position={position}
      $top={top}
      $left={left}
      $transform={transform}
      $translate={translate}
      $zIndex={zIndex}
      style={
        {
          '--logo-color': logoColor,
          '--duration': duration,
        } as React.CSSProperties
      }
      {...mantineBoxProps}
    >
      <div className="box" />
      <div className="box" />
      <div className="box" />

      <div className="logo">
        <svg viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      </div>
    </LoaderContainer>
  )
}
