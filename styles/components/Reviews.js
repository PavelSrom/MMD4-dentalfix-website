import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  subheadline: {
    marginBottom: theme.spacing(6)
  },
  reviewBox: {
    maxWidth: 320,
    margin: '0 auto',
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
    }
  },
  arrowBack: {
    position: 'absolute',
    left: theme.spacing(1)
  },
  arrowForward: {
    position: 'absolute',
    right: theme.spacing(1)
  }
}))
