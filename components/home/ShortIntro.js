import React from 'react'
import useStyles from '../../styles/components/ShortIntro.js'
import img from '../../assets/shortIntro.jpeg'
import { BodyText, Span } from '../../templates/text'
import { Container } from '../../templates/layout'

const ShortIntro = () => {
  const classes = useStyles()

  return (
    <Container background="#f2f2f2">
      <div className={classes.sectionContainer}>
        <BodyText className={classes.one}>
          DentalFix’s mission statement is intended to make a positive difference in the
          lives of children, youth and adults by offering{' '}
          <Span blue>the highest quality </Span> dental care in a private friendly
          atmosphere. <br />
          <br />
          By providing a team of professional, highly educated, honest and committed
          employees, DentalFix aims to{' '}
          <Span blue>
            improve patient health, appearance, self-confidence and overall quality of
            life.
          </Span>
        </BodyText>
        <div className={classes.two}>
          <img className={classes.img} src={img} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default ShortIntro
