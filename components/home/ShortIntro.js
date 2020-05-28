import React from 'react'
import useStyles from '../../styles/components/ShortIntro.js'
import img from '../../assets/shortIntro.jpeg'
import { BodyText, Span, Subheadline } from '../../templates/text'
import SectionWithImg from '../SectionWithImg'

const ShortIntro = () => {
  const classes = useStyles()

  return (
    <SectionWithImg imgSrc={img} imgPosition="right" background="#f2f2f2">
       <Subheadline bold style={{ marginBottom: 32 }}>
      Our mission
    </Subheadline>
      <BodyText className={classes.one}>
        DentalFix’s mission statement is intended to make a positive difference in the
        lives of children, youth and adults by offering{' '}
        <Span blue>the highest quality </Span> dental care in a private friendly
        atmosphere. <br />
        <br />
        By providing a team of professional, highly educated, honest and committed
        employees, DentalFix aims to{' '}
        <Span blue>
          improve patient health, appearance, self-confidence and overall quality of life.
        </Span>
      </BodyText>
    </SectionWithImg>
  )
}

export default ShortIntro
