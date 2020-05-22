import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  sectionContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: 768,
      margin: '0 auto'
    }
  },
  one: {
    width: '50%',
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
      width: '100%',
      marginBottom: theme.spacing(4)
    }
  },
  two: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      margin: '0 auto'
    }
  }
}))
