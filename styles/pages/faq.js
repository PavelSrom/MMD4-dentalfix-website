import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  questionBox: {
    marginTop: theme.spacing(6)
  },
  border: {
    width: theme.spacing(16),
    height: theme.spacing(1),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  question: {
    marginBottom: theme.spacing(2)
  }
}))
