import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  subheadline: {
    marginBottom: theme.spacing(6)
  },
  reviewBox: {
    maxWidth: 320,
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 256 // otherwise the arrows don't show on small screens
    }
  },
  review: {
    position: 'relative',
    maxWidth: 320,
    margin: '0 auto',
    borderRadius: 50,
    border: `3px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      maxWidth: 640,
      display: 'block',
      margin: '0 auto',
      marginTop: theme.spacing(4)
    },
    height: 330
  },
  arrowBack: {
    position: 'absolute',
    left: theme.spacing(1),
    fontSize: 100
  },
  arrowForward: {
    position: 'absolute',
    right: theme.spacing(1)
  },
  quote1: {
    width: 20,
    height: 20
  },
  quote2: {
    width: 20,
    height: 20,
    float: 'right'
  }
}))
