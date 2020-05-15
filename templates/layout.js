import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: 'calc(100vh - 70px)'
  }
}))

export const Page = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.page}>{children}</main>
}
