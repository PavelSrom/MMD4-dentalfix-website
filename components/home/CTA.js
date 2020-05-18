import React from 'react'
import { Container } from '../../templates/layout'
import { ButtonLink } from '../../templates/button'
import { Headline } from '../../templates/text'

const CTA = () => (
  <Container background="#fff">
    <Headline centered style={{ marginBottom: 32 }}>
      Let's get started!
    </Headline>
    <ButtonLink
      to="https://dentalfix.herokuapp.com"
      target="_blank"
      background="secondary"
      size="large"
      style={{ display: 'block', margin: '0 auto' }}
    >
      Make an appointment
    </ButtonLink>
  </Container>
)

export default CTA
