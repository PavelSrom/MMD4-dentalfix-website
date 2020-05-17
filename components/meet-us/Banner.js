import React from 'react'
import { Container } from '../../templates/layout'
import { Headline, Subheadline } from '../../templates/text'
import { ButtonLink } from '../../templates/button'

const Banner = () => {
  return (
    <Container background="#fff">
      <Headline centered>Meet the DentalFix's team</Headline>
      <Subheadline centered style={{ margin: '16px 0 24px 0' }}>
        Happy to bring you the highest quality dental care.
        <br />
        Get to know us!
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
}

export default Banner
