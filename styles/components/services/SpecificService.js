import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  sidebar: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  content: {
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  headline: {
    marginBottom: theme.spacing(4)
  },
  buttonLink: {
    marginTop: theme.spacing(4)
  }
}))
