import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BodyText } from '../../templates/text'
import SectionWithImg from '../SectionWithImg'
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
    <SectionWithImg background="#f2f2f2" imgSrc={img} imgPosition="left">
      <BodyText>
        Our mission is to deliver the highest quality care, unprecedented comfort, and
        service.
      </BodyText>
      <br />
      <BodyText>
        We're committed to delivering the very best results for you, whether it is
        creating the perfect smile, reconstructing your entire teeth or helping you
        achieve total wellness.
      </BodyText>
      <br />
      <BodyText>
        At DentalFix, we grant the satisfying services with reliable and modern equipment.
        Our team is keen about using new, modern and adequate method, provided with high
        quality dentistry skills.
      </BodyText>
    </SectionWithImg>
  )
}

export default Documents
