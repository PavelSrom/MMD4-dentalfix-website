import React from 'react'
import useStyles from '../../styles/components/Banner.js'
import theme from '../../utils/theme'
import { Container } from '../../templates/layout'
import { Headline} from '../../templates/text'
import { ButtonLink } from '../../templates/button'

const Banner = () => {
  const classes = useStyles()

  return (
    <div className={classes.banner}>
      <Container>
      <Headline className={classes.heading}>
        Brighten any room with your{' '}
        <span style={{ color: theme.palette.primary.main }}>new smile</span>
      </Headline>
      <ButtonLink
      to="https://dentalfix.herokuapp.com"
      target="_blank"
      background="secondary"
      size="large"
      style={{ display: 'block', margin: '0 auto' }}
    >
      Book an appointment
    </ButtonLink>
      </Container>
    </div>
  )
}

export default Banner
