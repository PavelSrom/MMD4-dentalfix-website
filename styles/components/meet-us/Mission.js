import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  theme => ({
    flex: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
      }
    },
    half: {
      width: '50%',
      [theme.breakpoints.down('md')]: {
        width: '100%'
      }
    },
    right: {
      paddingLeft: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        marginTop: theme.spacing(2)
      }
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    }
  }),
  { index: 1 }
)
