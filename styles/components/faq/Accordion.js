import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  container: {
    
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflow: 'hidden'
  },
  panel: {
    padding: theme.spacing(2),
    cursor: 'pointer'
  },
  content: {
    padding: `0 ${theme.spacing(2)}px` // this padding makes it animate weird
  }
}))
