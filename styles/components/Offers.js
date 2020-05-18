import { makeStyles } from '@material-ui/core'


export default makeStyles(theme => ({
  offers: {
    backgroundColor: 'white',
  },
  offersContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop:'10%'
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
