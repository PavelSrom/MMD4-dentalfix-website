import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Container } from '../../templates/layout'
import { Headline, Subheadline, BodyText } from '../../templates/text'
import img from '../../assets/new-patient__first-visit.jpg'
import SectionWithImg from '../SectionWithImg'

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  half: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  left: {
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      marginBottom: theme.spacing(2)
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
}))

const FirstVisit = () => {
  const classes = useStyles()

  return (
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
        You’ll love our friendly, relaxing environment, personable approach, and
        high-tech, minimally invasive techniques.
      </BodyText>
      <br />
      <BodyText light>
        Based on the health of your teeth, we’ll decide what type of dental treatment is
        right for you.
      </BodyText>
    </SectionWithImg>
  )
}

export default FirstVisit
