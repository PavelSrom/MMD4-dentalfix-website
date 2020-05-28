import React from 'react'
import { makeStyles } from '@material-ui/core'
import SectionWithImg from '../SectionWithImg'
import screenshot from '../../assets/screenshot.png'

const useStyles = makeStyles(theme => ({
  test: {
    fontSize: 24
  }
}))

const BecomePatient = () => {
  const classes = useStyles()

  return (
    <SectionWithImg imgSrc={screenshot} background="#fff" imgPosition="right">
      <p className={classes.test}>Lorem ipsum dolor sit amet, Pavelski</p>
      <p>Section with imageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
    </SectionWithImg>
  )
}

export default BecomePatient
