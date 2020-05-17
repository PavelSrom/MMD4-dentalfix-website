import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Container } from '../../templates/layout'
import { Subheadline } from '../../templates/text'
import img from '../../assets/meet-us__mission.jpg'

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

  return (
    <Container background="#f2f2f2">
      <div className={classes.flex}>
        <div className={classes.half}>
          <img src={img} alt="" className={classes.img} />
        </div>
        <div className={clsx(classes.half, classes.right)}>
          <Subheadline light>
            Our mission is to deliver the highest quality care, unprecedented comfort, and
            service.
          </Subheadline>
          <br />
          <Subheadline light>
            We're committed to delivering the very best results for you, whether it is
            creating the perfect smile, reconstructing your entire teeth or helping you
            achieve total wellness.
          </Subheadline>
        </div>
      </div>
    </Container>
  )
}

export default Documents