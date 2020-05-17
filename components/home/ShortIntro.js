import React from 'react'
import useStyles from '../../styles/components/ShortIntro.js'
import img from '../../assets/shortIntro.jpeg'
import { BodyText, Subheadline } from '../../templates/text'
import { Container } from '../../templates/layout'
import theme from '../../utils/theme'

const ShortIntro = () => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container>
          <div className={classes.sectionContainer}>
        <BodyText className={classes.one} >
          DentalFix’s mission statement is intended to make a positive difference in the
          lives of children, youth and adults by offering <span style={{ color: theme.palette.primary.main }}>the highest quality </span> dental care
          in a private friendly atmosphere. <br/><br/>
          By providing a team of professional, highly
          educated, honest and committed employees, DentalFix aims to <span style={{ color: theme.palette.primary.main }}>improve patient
          health, appearance, self-confidence and overall quality of life.</span>
        </BodyText>
        <div className={classes.two}>
        <img className={classes.img} src={img} alt="" />
        </div>
        </div>

      </Container>
      
    </div>
  )
}

export default ShortIntro
