import React from 'react'
import { Container } from '../templates/layout'
import { Subheadline, BodyText } from '../templates/text'
import { Link, LinkWrapper } from '../templates/button'
import { Schedule, Call, Mail, Room } from '../templates/icons'
import useStyles from '../styles/components/Footer'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer>
      <Container background="#f2f2f2" className={classes.footer}>
        <div className={classes.box}>
          <Subheadline className={classes.subheadline}>Opening hours</Subheadline>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Schedule className={classes.icon} />
            <BodyText>
              Monday - Friday
              <br />
              9:00am - 8:00pm
            </BodyText>
          </div>
        </div>
        <div className={classes.box}>
          <Subheadline className={classes.subheadline}>Contact information</Subheadline>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Call className={classes.icon} />
            <BodyText>+400 233 280 111</BodyText>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Mail className={classes.icon} />
            <LinkWrapper href="mailto:dentalfix@gmail.com">
              <BodyText>dentalfix@gmail.com</BodyText>
            </LinkWrapper>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Room className={classes.icon} />
            <BodyText>Street Bunis, nr. 4, Neamt County</BodyText>
          </div>
        </div>
        <div className={classes.box}>
          <Subheadline className={classes.subheadline}>Patient information</Subheadline>
          <Link to="/faq" component={BodyText}>
            FAQ
          </Link>
        </div>
      </Container>

      <div className={classes.copyright}>
        <BodyText centered>Copyright &copy;2020</BodyText>
      </div>
    </footer>
  )
}

export default Footer
