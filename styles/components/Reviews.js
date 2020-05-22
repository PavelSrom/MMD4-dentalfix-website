import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  review: {
    borderRadius: 50,
    border: `3px solid ${theme.palette.primary.main}`,
    width: '30%',
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      width: '100%',
      maxWidth: 640,
      display: 'block',
      margin: '0 auto',
      marginTop: theme.spacing(4)
    }
  },
  all: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  }
}))
