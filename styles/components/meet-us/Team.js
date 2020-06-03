import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  theme => ({
    headline: {
      marginBottom: theme.spacing(4)
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }
    },
    box: {
      width: '33.3%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(6)
      }
    },
    avatar: {
      width: 176,
      height: 176,
      margin: `0 auto ${theme.spacing(2)}px auto`
    }
  }),
  { index: 1 }
)
