import React from 'react'
import { Page, Container } from '../templates/layout'
import { Headline, Subheadline, BodyText } from '../templates/text'
import { Call, Mail, Room, Schedule } from '../templates/icons'
import useStyles from '../styles/pages/contact'

const Contact = () => {
  const classes = useStyles()

  return (
    <Page>
      <Container>
        <Headline size="small" className={classes.headline}>Your smile starts here!</Headline>

        <div className={classes.flex}>
          <div className={classes.info}>
            <BodyText className={classes.bodyText}>
              You deserve the best quality dentistry from a friendly and well prepared
              team. Therefore, DentalFix is equipped to serve you with convenience and
              excellent treatment. We look forward to seeing you!
            </BodyText>

            {/* icons with information */}
            <div className={classes.row}>
              <Call className={classes.infoIcon} />
              <BodyText >+400 233 280 111</BodyText>
            </div>

            <div className={classes.row}>
              <Mail className={classes.infoIcon} />
              <BodyText >dentalfix@gmail.com</BodyText>
            </div>

            <div className={classes.row}>
              <Room className={classes.infoIcon} />
              <BodyText >Street Bunis, nr. 4, Neamt County</BodyText>
            </div>

            <div className={classes.row}>
              <Schedule className={classes.infoIcon} />
              <BodyText >
                Monday - Friday
                <br />
                9:00am - 8:00pm
              </BodyText>
            </div>
          </div>

          <div className={classes.mapContainer}>
            <iframe
              title="DentalFix map"
              className={classes.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.427716828076!2d26.469670915801686!3d46.85495464758926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b5559be8b7b3ad%3A0xac5b27ffeaa8f0e4!2sStrada%20General%20Buni%C8%99%2C%20S%C4%83vine%C8%99ti%20617410%2C%20Romania!5e0!3m2!1sen!2sdk!4v1589098717262!5m2!1sen!2sdk"
            />
          </div>
        </div>

      </Container>
    </Page>
  )
}

export default Contact
