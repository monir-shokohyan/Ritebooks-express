import { Image } from '@mantine/core'

const Logo = () => {
  return (
    <Image
      src="/RITEBOOKS EXPRESS.png"
      alt="RitePayroll logo"
      w={{ base: '150', lg: '200px' }}
      h={{ base: '60px', lg: 'auto' }}
      fit="contain"
      loading="lazy"
    />
  )
}

export { Logo }
