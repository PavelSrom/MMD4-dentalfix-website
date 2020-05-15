import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    border: 'none',
    height:40,
    width: 150, 
    fontSize: 20,
    
  }
}))

const Button = () => {
  const classes = useStyles()

  return <button className={classes.button}>Appointments</button>
}

export default Button