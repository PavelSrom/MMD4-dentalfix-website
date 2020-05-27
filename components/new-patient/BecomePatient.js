import React from 'react'
import { makeStyles } from '@material-ui/core'
import img from '../../assets/new-patient__not-sure.jpg'
import SectionWithImg from '../SectionWithImg'

const useStyles = makeStyles(theme => ({
  test: {
    fontSize: 24
  }
}))

const BecomePatient = () => {
  const classes = useStyles()

  return (
    <SectionWithImg imgSrc={img} background="#fff" imgPosition="left">
      <p className={classes.test}>Lorem ipsum dolor sit amet, Pavelski</p>
      <p>Section with imageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
    </SectionWithImg>
  )
}

export default BecomePatient
