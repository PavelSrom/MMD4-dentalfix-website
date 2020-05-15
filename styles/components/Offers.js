import { makeStyles } from '@material-ui/core'
import theme from '../../utils/theme'

export default makeStyles(theme => ({
  offers: {
    // minHeight: 500,
    backgroundColor: 'white',
    width: '100%',
    padding: '5%',
  },
  title: {
    textAlign: 'center',
    fontSize: 25
  },
  offersContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop:'5%'
  },
  container: {
    width:'30%',
  },
  icon: {
    width: 100,
    height: 100,
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontSize:20,
    fontWeight: 'bolder',
    marginTop:'5%'
  },
  text: {
    marginTop:'10%'
  }
 
}))
