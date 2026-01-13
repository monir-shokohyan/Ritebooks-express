import React from 'react'
import { MdEmail, MdError, MdRefresh } from 'react-icons/md'
import {
  Button,
  ButtonProps,
  Group,
  Paper,
  PolymorphicComponentProps,
  Stack,
  StackProps,
  Text,
  ThemeIcon,
} from '@mantine/core'
import styled from 'styled-components'

const StyledPaper = styled(Paper)`
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(1, 41, 112, 0.1);

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem 1.5rem;
    max-width: calc(100% - 2rem);
  }

  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 1.5rem 1rem;
    max-width: calc(100% - 1rem);
  }
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`

const StyledThemeIcon = styled(ThemeIcon)`
  @media (max-width: 480px) {
    width: 60px !important;
    height: 60px !important;

    svg {
      width: 35px !important;
      height: 35px !important;
    }
  }
`

const Title = styled(Text)`
  font-family: 'Nunito', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #012970;
  text-align: center;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const Description = styled(Text)`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #012970;
  opacity: 0.7;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
`
interface ButtonType extends PolymorphicComponentProps<'button', ButtonProps> {
  leftIcon: React.ReactNode
}

const StyledButton = styled(Button)<ButtonType>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    height: auto;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const ResponsiveStack = styled(Stack)<StackProps>`
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`

const ResponsiveGroup = styled(Group)`
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`

const ErrorFallback = () => {
  const resetErrorBoundary = (): void => {
    window.location.reload()
  }

  const handleContactSupport = (): void => {
    window.location.href = 'https://wa.me/+256755818183'
  }

  return (
    <StyledPaper>
      <IconWrapper>
        <StyledThemeIcon
          size={80}
          radius="sm"
          variant="light"
        >
          <MdError
            size={45}
            color="#f4a100ff"
          />
        </StyledThemeIcon>
      </IconWrapper>

      <Title>Oops! Something went wrong</Title>

      <Description>
        We're sorry for the inconvenience. An unexpected error has occurred.
        Please try refreshing the page or contact support if the problem
        persists.
      </Description>

      <ResponsiveStack>
        <ResponsiveGroup grow>
          <StyledButton
            leftIcon={<MdRefresh size={18} />}
            onClick={resetErrorBoundary}
            style={{
              background: '#f4a100ff',
              color: '#ffffff',
            }}
          >
            Try Again
          </StyledButton>

          <StyledButton
            leftIcon={<MdEmail size={18} />}
            onClick={handleContactSupport}
            variant="light"
            style={{
              background: 'rgba(21, 179, 224, 0.1)',
              color: '#f4a100ff',
            }}
          >
            Contact Support
          </StyledButton>
        </ResponsiveGroup>
      </ResponsiveStack>
    </StyledPaper>
  )
}

export { ErrorFallback }
