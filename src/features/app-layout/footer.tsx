import { memo } from 'react'
import { FaGithub, FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { ImportantInfo } from '@shared/constants/companyInfo'
import { IconWithText } from '@shared/ui/IconWithText'
import { Logo } from '@shared/ui/Logo'
import { TextWithFamily } from '@shared/ui/Typography'

import { FooterContainer } from './styles'

const Footer = memo(() => {
  return (
    <FooterContainer>
      <Flex
        align="center"
        justify="center"
        style={{ width: '300px' }}
      >
        <Logo />
      </Flex>
      <Flex
        align="center"
        justify="center"
        miw={300}
      >
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={FaGithub}
          iconSize={20}
          $isActiveIconBg={false}
          iconColor={SavedColors.DarkWhite}
          handleClick={() => window.open(ImportantInfo.githubUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={FaPhoneAlt}
          iconSize={20}
          iconColor={SavedColors.DarkWhite}
          handleClick={() => (window.location.href = 'tel:+256755818183')}
          $isActiveIconBg={false}
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={MdEmail}
          iconSize={20}
          iconColor={SavedColors.DarkWhite}
          handleClick={() =>
            (window.location.href = `mailto:${ImportantInfo.emailAddress}`)
          }
          $isActiveIconBg={false}
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={FaGlobe}
          iconSize={20}
          iconColor={SavedColors.DarkWhite}
          handleClick={() => window.open(ImportantInfo.website, '_blank')}
          $isActiveIconBg={false}
        />
      </Flex>
      <TextWithFamily
        $textalign="center"
        color={SavedColors.DarkWhite}
        fontSize="1rem"
        $font="Roboto"
        width="300px"
      >
        © Copyright RitePayroll. All right reserved.
      </TextWithFamily>
    </FooterContainer>
  )
})

export { Footer }
