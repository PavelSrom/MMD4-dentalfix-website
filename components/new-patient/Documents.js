import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Container } from '../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__documents.jpg'

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  half: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  right: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      marginTop: theme.spacing(2)
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
}))

const Documents = () => {
  const classes = useStyles()

  const items = ['- Your ID', '- Dental X-ray', '- Previous relevant documents']

  return (
    <Container background="#f2f2f2">
      <div className={classes.flex}>
        <div className={classes.half}>
          <img src={img} alt="" className={classes.img} />
        </div>
        <div className={clsx(classes.half, classes.right)}>
          <Subheadline size="small" style={{ marginBottom: 32 }}>
            Important documents
          </Subheadline>

          <BodyText light>
            The important documents that you need to have on your first visit are:
          </BodyText>
          <br />
          {items.map(item => (
            <BodyText key={item} light>
              {item}
            </BodyText>
          ))}
          <br />
          <BodyText light>
            After you first visit at DentalFix Clinic, you can become a patient and
            register into our system by creating an account into our new application.
          </BodyText>
        </div>
      </div>
    </Container>
  )
}

export default Documents
