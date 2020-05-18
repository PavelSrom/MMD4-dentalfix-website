import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, LineLength } from '../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../templates/text'

const useStyles = makeStyles(theme => ({
  headline: {
    marginBottom: theme.spacing(2)
  },
  subheadline: {
    marginBottom: theme.spacing(4),
    width:'80%',
    margin: '0 auto'
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
    width: 192,
    height: 192,
    background: '#eee',
    margin: `0 auto ${theme.spacing(2)}px auto`
  }
}))

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
            <div className={classes.avatar} />
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
