import React from 'react'
import { Container } from '../../templates/layout'
import { Subheadline, BodyText } from '../../templates/text'
import doctor from '../../assets/doctor.svg'
import useStyles from '../../styles/components/meet-us/Team'

const Team = () => {
  const classes = useStyles()

  const team = [
    {
      name: 'Dr. Popa Nicolae',
      area: 'General dentistry'
    },
    {
      name: 'Dr. Blaga Stela',
      area: 'General dentistry & implantology'
    },
    {
      name: 'Dr. Popa Emma',
      area: 'General dentistry'
    }
  ]

  return (
    <Container background="#fff">
      <Subheadline light centered className={classes.headline}>
        Meet our team
      </Subheadline>

      <div className={classes.list}>
        {team.map(({ name, area }) => (
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

export default Team
