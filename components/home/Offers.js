import React from 'react'
import useStyles from '../../styles/components/Offers.js'
import icon from '../../assets/ui.png'
import flexible from '../../assets/flexible.png'
import price from '../../assets/price.png'
import qualified from '../../assets/qualified.png'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'

const Offers = () => {
  const classes = useStyles()

  return (
    <div className={classes.offers}>
     <Container>
      <Subheadline light centered>What makes us different?</Subheadline>
      <div className={classes.offersContainer}>
        <div className={classes.container}>
          <img className={classes.icon} src={flexible} alt="" />
          <BodyText centered bold className={classes.subtitle}>Flexible schedule</BodyText>
          <BodyText centered className={classes.text}>
            24/7 availability to make appointments and choose the most suitable time for
            yourself.
          </BodyText>
        </div>
        <div className={classes.container}>
          <img className={classes.icon} src={qualified} alt="" />
          <BodyText centered bold className={classes.subtitle}>Qualified doctors</BodyText>
          <BodyText centered className={classes.text}>
            Our team of highly experienced and qualified doctors will strive to offer you
            the best services.
          </BodyText>
        </div>
        <div className={classes.container}>
          <img className={classes.icon} src={price} alt="" />
          <BodyText centered bold className={classes.subtitle}>Best price guaranteed</BodyText>
          <BodyText centered className={classes.text}>
            Our reasonable prices made thousands of people smile with a new, beautiful
            smile, as never before!
          </BodyText>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Offers
