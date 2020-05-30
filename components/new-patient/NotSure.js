import React from 'react'
import { makeStyles } from '@material-ui/core'
import { ButtonLink } from '../../templates/button'
import { Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__not-sure.jpg'
import SectionWithImg from '../SectionWithImg'

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
    <SectionWithImg background="#f2f2f2" imgSrc={img} imgPosition="left">
      <Subheadline bold style={{ marginBottom: 32 }}>
        Still not sure about it?
      </Subheadline>

      <BodyText>
        Don’t hesitate to contact us or check our Frequently asked question page where you
        can find more details and answers to your unclarities.
      </BodyText>

      <ButtonLink to="/faq" background="primary" size="large" className={classes.cta}>
        Go to FAQ
      </ButtonLink>
    </SectionWithImg>
  )
}

export default Documents
