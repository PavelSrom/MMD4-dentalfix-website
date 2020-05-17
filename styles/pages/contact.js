import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  headline: {
    marginBottom: theme.spacing(6)
  },
  subheadline: {
    marginBottom: theme.spacing(4)
  },
  flex: {
    height: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  info: {
    width: '55%',
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: theme.spacing(2)
    }
  },
  mapContainer: {
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  map: {
    width: '100%',
    height: '100%',
    minHeight: 480,
    border: 'none'
  },
  infoIcon: {
    fontSize: 64,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
      fontSize: 48
    },
    color: theme.palette.secondary.main // I thought it would look nice :D
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  }
}))
