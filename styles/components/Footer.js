import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  theme => ({
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        paddingBottom: 0
      }
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: 320,
        margin: '0 auto',
        paddingRight: 0,
        marginBottom: theme.spacing(4)
      }
    },
    subheadline: {
      marginBottom: theme.spacing(1),
      fontWeight: 'bolder'
    },
    icon: {
      fontSize: theme.spacing(6),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    copyright: {
      background: '#333',
      color: '#fff',
      padding: theme.spacing(2)
    }
  }),
  { index: 1 }
)
