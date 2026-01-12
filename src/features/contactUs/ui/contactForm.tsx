import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import { IoMdCheckmark } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Flex, Loader, Notification, VisuallyHidden } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { RadialHoverEffect } from '@shared/ui/ripple'
import { TextResponsive } from '@shared/ui/Typography'

import { contactFormSchema } from '../schema/schema'
import { HoveredButton, SimpleInput, SimpleTextArea } from '../styles'
import { ContactFormData } from '../types'

const ContactFormMain = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const pageInfo = FindByName('contact us')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const sendEmail = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        subject: 'Form Message',
        reply_to: data.email,
      }

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      return result
    } catch (error) {
      console.error('Email sending failed:', error)
      throw new Error('Failed to send email. Please try again later.')
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendEmail(data)

      setShowSuccess(true)
      setShowError(false)
      reset()

      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message',
      )
      setShowError(true)
      setShowSuccess(false)

      setTimeout(() => {
        setShowError(false)
        setErrorMessage('')
      }, 5000)
    }
  }

  const onInvalid = () => {
    console.log('Form has validation errors')
  }

  return (
    <Flex
      w={{ base: '100%', lg: '100%' }}
      style={{ borderRadius: '5px' }}
      px={10}
      py={10}
    >
      <Box
        component="form"
        w="100%"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
      >
        <VisuallyHidden>
          <label htmlFor="name">Your Name</label>
          <label htmlFor="email">Your Email</label>
          <label htmlFor="phone">Your Phone</label>
          <label htmlFor="message">Your Message</label>
        </VisuallyHidden>

        {showSuccess && (
          <Notification
            icon={<IoMdCheckmark size="1.1rem" />}
            color="teal"
            title="Success!"
            onClose={() => setShowSuccess(false)}
            mb="md"
          >
            Your message has been sent successfully! We'll get back to you soon.
          </Notification>
        )}

        {showError && (
          <Notification
            icon={<IoCloseSharp size="1.1rem" />}
            color="red"
            title="Error!"
            onClose={() => setShowError(false)}
            mb="md"
          >
            {errorMessage}
          </Notification>
        )}
        <TextResponsive
          $font="Roboto"
          fontSize="16px"
          fontWeight="300"
          style={{ marginBottom: '10px', width: '50%' }}
        >
          {pageInfo?.description}
        </TextResponsive>

        <SimpleInput
          placeholder="Enter your full name"
          style={{ border: '0' }}
          {...register('name')}
          error={errors.name?.message}
          required
          mb="lg"
          size="sm"
          id="name"
        />

        <SimpleInput
          placeholder="Enter your email address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          required
          mb="lg"
          size="sm"
          id="email"
        />

        <SimpleTextArea
          placeholder="Please describe your inquiry in detail..."
          rows={5}
          {...register('message')}
          error={errors.message?.message}
          required
          mb="xl"
          size="sm"
          id="message"
        />

        <HoveredButton
          type="submit"
          disabled={isSubmitting}
          variant="outline"
        >
          <RadialHoverEffect color={SavedColors.highlite}>
            <Flex
              justify="center"
              align="center"
              gap={20}
              pos="absolute"
              top="50%"
              left="50%"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              {!isSubmitting ? (
                <>
                  <TextResponsive
                    fontWeight="300"
                    width="50px"
                  >
                    Submit Request
                  </TextResponsive>
                  <FaArrowRight color="black" />
                </>
              ) : (
                <Loader
                  size="sm"
                  color="gray"
                />
              )}
            </Flex>
          </RadialHoverEffect>
        </HoveredButton>
      </Box>
    </Flex>
  )
}

export { ContactFormMain }
