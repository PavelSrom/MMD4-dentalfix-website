import React from 'react'
import useStyles from '../../styles/components/Reviews.js'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'

const Reviews = () => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container>
        <Subheadline light centered>What our patients say </Subheadline>
        <div className={classes.all}>
       
        <div className={classes.review2}>
          <BodyText centered>
            I am personally very happy with the services that I get here and I totally
            recommend the clinic. <br />
            <br />
            -Dragos Andrei
          </BodyText>
        </div>

        <div className={classes.review1}>
          <BodyText centered>
            I am extremely satisfied with the quality of the services that I can get at
            DentalFix. Thanks to them I became more confident and I’m smiling more! <br />
            <br />
            -Nicoleta Astancai
          </BodyText>
        </div>

        <div className={classes.review3}>
          <BodyText centered>
            Very well prepared dentists which managed to solve my dental problems in the
            most professional way. <br />
            <br />
            -Maria Blaga
          </BodyText>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Reviews
