import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '../../templates/layout'
import { Subheadline, BodyText } from '../../templates/text'
import doctor from '../../assets/doctor.svg'

const useStyles = makeStyles(theme => ({
  headline: {
    marginBottom: theme.spacing(4)
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  },
  box: {
    width: '33.3%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: theme.spacing(6)
    }
  },
  avatar: {
    width: 176,
    height: 176,
    margin: `0 auto ${theme.spacing(2)}px auto`
  }
}))

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
