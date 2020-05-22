import { makeStyles } from '@material-ui/core/styles'

// template for the 3 subpages of 'services':
// /services/cosmetic
// /services/general
// /services/surgical
export default makeStyles(theme => ({
  headline: {
    marginBottom: theme.spacing(1)
  },
  divider: {
    width: '50%',
    minWidth: 288,
    margin: `${theme.spacing(6)}px auto 0 auto`,
    border: '1px solid #f2f2f2'
  },
  serviceBox: {
    display: 'flex',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: theme.spacing(4)
    }
  },
  imgBox: {
    minWidth: 192,
    minHeight: 192,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 100,
    height: 100
  },
  descriptionBox: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  },
  learnMore: {
    marginTop: theme.spacing(2)
  }
}))
