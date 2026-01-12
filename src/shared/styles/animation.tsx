import { keyframes } from 'styled-components'

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0.01;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
`

export const counterSpin = keyframes`
  from { transform: rotate(0deg) translateZ(0); }
  to   { transform: rotate(-360deg) translateZ(0); }
`
export const trailExpand = keyframes`
    0% {
      width: 0%;
      opacity: 0.01;
    }
    10% {
      opacity: 0.8;
    }
    50% {
      width: 100%;
      opacity: 0.8;
    }
    100% {
      width: 100%;
      opacity: 0.01;
    }
    `
