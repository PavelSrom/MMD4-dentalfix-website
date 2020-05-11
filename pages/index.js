import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles' // always this import

const useStyles = makeStyles(theme => ({
  // just to test
  paragraph: {
    color: theme.palette.secondary.main
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      <p className={classes.paragraph}>Homepage</p>

      <Link href="/contact">
        <a>Go to contact page</a>
      </Link>
    </div>
  )
}

export default Home
