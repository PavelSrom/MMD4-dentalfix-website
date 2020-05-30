import React from 'react'
import SectionWithImg from '../SectionWithImg'
import { Link } from '../../templates/button'
import { Subheadline, BodyText, Span } from '../../templates/text'
import screenshot from '../../assets/screenshot.png'

const BecomePatient = () => {
  const steps = [
    <BodyText>
      - Access the DentalFix App{' '}
      <Link to="https://dentalfix.herokuapp.com" target="_blank" component={Span} blue>
        here
      </Link>
    </BodyText>,
    <BodyText>- Create an account</BodyText>,
    <BodyText>- Login to the app</BodyText>,
    <BodyText>
      - Go to "Make appointment" page and choose the date, time and treatment that suits
      you the most
    </BodyText>,
    <BodyText>- Hit the "Make appointment" button</BodyText>
  ]

  return (
    <SectionWithImg imgSrc={screenshot} background="#fff" imgPosition="right">
      <Subheadline bold style={{ marginBottom: 32 }}>
        Becoming a patient on Dentalfix App
      </Subheadline>

      <BodyText>
        DentalFix Clinic has recently implemented an online booking system which gives you
        <Span blue> 24/7 accessibility</Span> and enhances the process of making an
        appointment in just <Span blue>2 minutes</Span>.
      </BodyText>
      <br />
      <BodyText bold>What you need to do?</BodyText>
      {steps.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
    </SectionWithImg>
  )
}

export default BecomePatient
