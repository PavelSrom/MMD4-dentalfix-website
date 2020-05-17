import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Container } from '../../templates/layout'
import { ButtonLink } from '../../templates/button'
import { Headline, Subheadline } from '../../templates/text'
import img from '../../assets/new-patient__not-sure.jpg'

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
  },
  cta: {
    marginTop: theme.spacing(4)
  }
}))

const Documents = () => {
  const classes = useStyles()

  return (
    <Container background="#f2f2f2">
      <div className={classes.flex}>
        <div className={classes.half}>
          <img src={img} alt="" className={classes.img} />
        </div>
        <div className={clsx(classes.half, classes.right)}>
          <Headline size="small" style={{ marginBottom: 32 }}>
            Still not sure about it?
          </Headline>

          <Subheadline light>
            Don’t hesitate to contact us or check our Frequently asked question page where
            you can find more details and answers to your unclarities.
          </Subheadline>

          <ButtonLink to="/faq" background="primary" size="large" className={classes.cta}>
            Go to FAQ
          </ButtonLink>
        </div>
      </div>
    </Container>
  )
}

export default Documents
