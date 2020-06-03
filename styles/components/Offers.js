import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  theme => ({
    offers: {
      backgroundColor: 'white'
    },
    offersContainer: {
      display: 'flex',
      marginTop: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 0
      }
    },
    item: {
      width: '33.3%',
      padding: `0 ${theme.spacing(3)}px`,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: 480,
        padding: 0,
        marginTop: theme.spacing(6)
      }
    },
    icon: {
      width: 100,
      height: 100,
      display: 'block',
      margin: '0 auto',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2)
      }
    },
    text: {
      marginTop: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2)
      }
    }
  }),
  { index: 1 }
)
