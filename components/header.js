import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../assets/logo_64x64.png'
import Button from '../templates/button.js'

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: '#F2F2F2'
  },
  navLinks: {
    float: 'right',
    fontSize: 20
  }
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.nav}>
      <img src={logo} alt="" className={classes.logo} />
      <div className={classes.navLinks}>
        <Link href="/meetUs">
          <a>Meet us</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/newPatient">
          <a>New patient</a>
        </Link>
        <Button></Button>
      </div>
      
    </div>
  )
}

export default Navigation
