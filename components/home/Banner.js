import React, { useState } from 'react'
import useStyles from '../../styles/components/Banner.js'
import { Typography } from '@material-ui/core'
import theme from '../../utils/theme'
import Button from '../../templates/button.js'

const Banner = () => {
  const classes = useStyles()

  return (
    <div className={classes.banner}>
      <Typography className={classes.heading}>
        Brighten any room with your{' '}
        <span style={{ color: theme.palette.primary.main }}>new smile</span>
      </Typography>
      <Button className={classes.cta}>Book an appointment</Button>
    </div>
  )
}

export default Banner
