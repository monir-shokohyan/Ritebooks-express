import { Flex, FlexProps, Image, ImageProps } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

export const HoveredFeature = styled(Flex)<FlexProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid gray;
  border-radius: 30px;
  padding-inline: 20px;
  padding-block: 5px;
  background: ${SavedColors.PrimaryWhite};
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media (max-width: 1100px) {
    width: 100% !important;
  }
`
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  height: 1px;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const ResImage = styled(Image)<ImageProps>`
  width: 460px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1204px) {
    width: 450px;
  }

  @media (max-width: 1100px) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    width: 70%;
    margin: 0 auto;
  }
`
export const FeatureContainer = styled(Flex)<FlexProps>`
  padding-top: 100px;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 20px !important;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
  }
`
export const SideContainer = styled(Flex)<FlexProps>`
  width: 45%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`
