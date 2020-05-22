import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
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
  }
}))
