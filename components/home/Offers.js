import React from 'react'
import useStyles from '../../styles/components/Offers.js'
import flexible from '../../assets/flexible.png'
import price from '../../assets/price.png'
import qualified from '../../assets/qualified.png'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'

const Offers = () => {
  const classes = useStyles()

  const columns = [
    {
      headline: 'Flexible schedule',
      description: `24/7 availability to make appointments and choose the most suitable time for
			yourself.`,
      img: flexible
    },
    {
      headline: 'Qualified doctors',
      description: `Our team of highly experienced and qualified doctors will strive to offer
			you the best services.`,
      img: qualified
    },
    {
      headline: 'Best price guaranteed',
      description: `Our reasonable prices made thousands of people smile with a new, beautiful
			smile, as never before!`,
      img: price
    }
  ]

  return (
    <div className={classes.offers}>
      <Container>
        <Subheadline light centered>
          What makes us different?
        </Subheadline>
        <div className={classes.offersContainer}>
          {columns.map(({ headline, description, img }) => (
            <div key={headline} className={classes.item}>
              <img src={img} alt="" className={classes.icon} />
              <BodyText centered bold color="primary">
                {headline}
              </BodyText>
              <BodyText centered className={classes.text}>
                {description}
              </BodyText>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Offers
