import { FC } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Button } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

interface AnimatedButtonProps {
  onClick?: () => void
  size?: number
}

const ButtonWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: grid;
  place-content: center;
  transition: all 0.3s ease;
`

const IconContainer = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
`

const Icon = styled(MdOutlineArrowOutward)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
`

const OriginalIcon = styled(Icon)`
  ${ButtonWrapper}:hover & {
    transform: translate(100%, -100%);
  }
`

const DuplicateIcon = styled(Icon)`
  transform: translate(-200%, 200%);
  ${ButtonWrapper}:hover & {
    transition-delay: 0.08s;
    transform: translate(-50%, -50%);
  }
`

export const AnimatedButton: FC<AnimatedButtonProps> = ({
  onClick,
  size = 54,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="transparent"
      style={{ padding: 0, background: 'none' }}
    >
      <ButtonWrapper>
        <IconContainer>
          <OriginalIcon
            size={size}
            color={SavedColors.highlite}
          />
          <DuplicateIcon
            size={size}
            color={SavedColors.highlite}
          />
        </IconContainer>
      </ButtonWrapper>
    </Button>
  )
}
