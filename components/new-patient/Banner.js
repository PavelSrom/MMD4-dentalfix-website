import React from 'react'
import { Container } from '../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../templates/text'
import { ButtonLink } from '../../templates/button'

const Banner = () => (
  <Container background="#fff">
    <Headline centered>New patient information</Headline>
    <Subheadline light centered style={{ margin: '16px 0 24px 0' }}>
      Ready to experience the benefits of our personalized & high-tech approach?
      <br />
      DentalFix clinic is accepting new patients.
      <br />
      We can't wait to meet you!
    </Subheadline>
    <ButtonLink
      to="https://dentalfix.herokuapp.com"
      target="_blank"
      background="secondary"
      size="large"
      style={{ display: 'block', margin: '0 auto' }}
    >
      Request an appointment
    </ButtonLink>
  </Container>
)

export default Banner
