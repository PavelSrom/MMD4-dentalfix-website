import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#333',
    zIndex: 65
  },
  burgerMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 256,
    height: '100vh',
    background: '#fff',
    zIndex: 70,
    transition: 'transform 350ms ease-in-out',
    padding: theme.spacing(2)
  },
  header: {
    minHeight: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    top: -16
  },
  mobileIcon: {
    fontSize: theme.spacing(4)
  },
  mainLink: {
    fontSize: 20,
    marginTop: theme.spacing(1)
  },
  subLink: {
    marginLeft: theme.spacing(2)
  },
  languages: {
    marginTop: theme.spacing(6)
  }
}))
