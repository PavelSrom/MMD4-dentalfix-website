import React from 'react'
import { Container } from '../../templates/layout'
import { ButtonLink } from '../../templates/button'
import { Headline } from '../../templates/text'
import chair from '../../assets/chair-2.jpg'

const CTA = () => (
  <div
    style={{
      // backgroundImage: `url(${chair})`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      position: 'relative',
      backgroundColor: '#E0E0E0'
    }}
  >
    <Container>
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
        Request an appointment
      </ButtonLink>
    </Container>
  </div>
)

export default CTA
