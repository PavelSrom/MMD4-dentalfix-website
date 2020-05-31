import React from 'react'
import { Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__documents.jpg'
import SectionWithImg from '../SectionWithImg'

const Documents = () => {
  const items = ['- Your ID', '- Dental X-ray', '- Previous relevant documents']

  return (
    <SectionWithImg background="#f2f2f2" imgSrc={img} imgPosition="left">
      <Subheadline bold style={{ marginBottom: 32 }}>
        Important documents
      </Subheadline>

      <BodyText>
        The important documents that you need to have on your first visit are:
      </BodyText>
      <br />
      {items.map(item => (
        <BodyText key={item}>{item}</BodyText>
      ))}
      <br />
      <BodyText>
        After you first visit at DentalFix Clinic, you can become a patient and register
        into our system by creating an account into our new application.
      </BodyText>
    </SectionWithImg>
  )
}

export default Documents
