import React from 'react'
import { ButtonLink } from '../../templates/button'
import { Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__not-sure.jpg'
import SectionWithImg from '../SectionWithImg'
import useStyles from '../../styles/components/new-patient/NotSure'

const Documents = () => {
  const classes = useStyles()

  return (
    <SectionWithImg background="#f2f2f2" imgSrc={img} imgPosition="left">
      <Subheadline bold style={{ marginBottom: 32 }}>
        Still not sure about it?
      </Subheadline>

      <BodyText>
        Don’t hesitate to contact us or check our Frequently asked question page where you
        can find more details and answers to your unclarities.
      </BodyText>

      <ButtonLink to="/faq" background="primary" size="large" className={classes.cta}>
        Go to FAQ
      </ButtonLink>
    </SectionWithImg>
  )
}

export default Documents
