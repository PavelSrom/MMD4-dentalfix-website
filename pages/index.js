import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles' // always this import
import Navigation from '../components/Header.js'



// const useStyles = makeStyles(theme => ({
//   // just to test
//   paragraph: {
//     color: theme.palette.secondary.main
//   }
// }))

const Home = () => {
//   const classes = useStyles()

  return (
    <div>

      {/* <p className={classes.paragraph}>Homepage</p> */}
      <Navigation></Navigation>
    </div>
  )
}

export default Home
