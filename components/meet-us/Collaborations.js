import React from 'react'
import { Container, LineLength } from '../../templates/layout'
import { Subheadline, BodyText } from '../../templates/text'
import doctor from '../../assets/doctor.svg'
import useStyles from '../../styles/components/meet-us/Collaborations'

const Collaborations = () => {
  const classes = useStyles()

  const collaborators = [
    {
      name: 'Dr. Olteanu Daniel',
      area: 'Orthodontology'
    },
    {
      name: 'Dr. Toma Sergiu',
      area: 'Buco Maxilo Facial Surgeon'
    },
    {
      name: 'Dr. Muzica Eugen',
      area: 'Dental technician'
    }
  ]

  return (
    <Container background="#fff">
      <Subheadline light centered className={classes.headline}>
        Collaborations
      </Subheadline>
      <LineLength>
        <BodyText centered className={classes.subheadline}>
          Being in strong collaboration with skilled doctors in different areas of
          expertise, DentalFix is prepared to offer you the best and appropriate treatment
          that you need.
        </BodyText>
      </LineLength>

      <div className={classes.list}>
        {collaborators.map(({ name, area }) => (
          <div key={name} className={classes.box}>
            <div className={classes.avatar}>
              <img src={doctor} className={classes.avatar} />
            </div>
            <Subheadline light centered>
              {name}
            </Subheadline>
            <BodyText color="primary" centered>
              {area}
            </BodyText>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Collaborations
