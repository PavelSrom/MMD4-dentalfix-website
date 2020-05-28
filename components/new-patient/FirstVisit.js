import React from 'react'
import { Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__first-visit.jpg'
import SectionWithImg from '../SectionWithImg'

const FirstVisit = () => (
  <SectionWithImg background="#fff" imgSrc={img} imgPosition="right">
    <Subheadline bold style={{ marginBottom: 32 }}>
      Your first visit: what to expect
    </Subheadline>

    <BodyText light color="primary">
      When you step into our office, our compassionate and friendly team will make you
      feel like home.
    </BodyText>
    <br />
    <BodyText light>
      During your visit, we’ll listen to your health concerns and goals, answer any
      questions, and explain all your options.
    </BodyText>
    <br />
    <BodyText light>
      You’ll love our friendly, relaxing environment, personable approach, and high-tech,
      minimally invasive techniques.
    </BodyText>
    <br />
  </SectionWithImg>
)

export default FirstVisit
