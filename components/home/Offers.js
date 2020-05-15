import React, { useState } from 'react'
import useStyles from '../../styles/components/Offers.js'
import { Typography, Container } from '@material-ui/core'
import icon from '../../assets/ui.png'

const Offers = () => {
  const classes = useStyles()

  return (
    <div className={classes.offers}>
      <Typography className={classes.title}>What makes us different?</Typography>
      <Container className={classes.offersContainer}>
        <Container className={classes.container}>
          <img className={classes.icon} src={icon} alt="" />
          <Typography className={classes.subtitle}>Flexible schedule</Typography>
          <Typography className={classes.text}>
            24/7 availability to make appointments and choose the most suitable time for
            yourself.
          </Typography>
        </Container>
        <Container className={classes.container}>
          <img className={classes.icon} src={icon} alt="" />
          <Typography className={classes.subtitle}>Qualified doctors</Typography>
          <Typography className={classes.text}>
            Our team of highly experienced and qualified doctors will strive to offer you
            the best services.
          </Typography>
        </Container>
        <Container className={classes.container}>
          <img className={classes.icon} src={icon} alt="" />
          <Typography className={classes.subtitle}>Best price guaranteed</Typography>
          <Typography className={classes.text}>
            Our reasonable prices made thousands of people smile with a new, beautiful
            smile, as never before!
          </Typography>
        </Container>
      </Container>
    </div>
  )
}

export default Offers
