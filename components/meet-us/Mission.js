import React from 'react'
import { BodyText, Subheadline } from '../../templates/text'
import SectionWithImg from '../SectionWithImg'
import img from '../../assets/meet-us__mission.jpg'
import useStyles from '../../styles/components/meet-us/Mission'

const Documents = () => {
  const classes = useStyles()

  return (
    <SectionWithImg background="#f2f2f2" imgSrc={img} imgPosition="left">
      <Subheadline bold style={{ marginBottom: 32 }}>
        About us
      </Subheadline>
      <BodyText>
        Our mission is to deliver the highest quality care, unprecedented comfort, and
        service.
      </BodyText>
      <br />
      <BodyText>
        We're committed to delivering the very best results for you, whether it is
        creating the perfect smile, reconstructing your entire teeth or helping you
        achieve total wellness.
      </BodyText>
      <br />
      <BodyText>
        At DentalFix, we grant the satisfying services with reliable and modern equipment.
        Our team is keen about using new, modern and adequate method, provided with high
        quality dentistry skills.
      </BodyText>
    </SectionWithImg>
  )
}

export default Documents
