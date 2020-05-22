import React from 'react'
import useStyles from '../../styles/components/Banner.js'
import { Container } from '../../templates/layout'
import { Headline, Span } from '../../templates/text'
import { ButtonLink } from '../../templates/button'

const Banner = () => {
  const classes = useStyles()

  return (
    <div className={classes.banner}>
      {/* <div className={classes.overlay} /> */}
      <Container>
        <div className={classes.content} style={{ minHeight: 500 }}>
          <Headline className={classes.heading}>
            Brighten any room with your <Span blue>new smile</Span>
          </Headline>
          <ButtonLink
            to="https://dentalfix.herokuapp.com"
            target="_blank"
            background="secondary"
            size="large"
          >
            Book an appointment
          </ButtonLink>
        </div>
      </Container>
    </div>
  )
}

export default Banner
