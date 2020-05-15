import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: 'calc(100vh - 70px)'
  },
  container: {
    width: '80%',
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0`,
    [theme.breakpoints.down('md')]: {
      width: '88%',
      padding: `${theme.spacing(6)}px 0`
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`
    }
  }
}))

export const Page = ({ children }) => {
  const classes = useStyles()

  return <main className={classes.page}>{children}</main>
}

export const Container = ({ children, background }) => {
  const classes = useStyles()

  return (
    <section style={{ background }}>
      <div className={classes.container}>{children}</div>
    </section>
  )
}
