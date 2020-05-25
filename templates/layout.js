import { makeStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: 'calc(100vh - 70px)',
    marginTop: 70, // because of the fixed header
    background: '#fff'
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
    },
    
  },
  lineLength: {
    maxWidth: ({ narrow }) => (narrow ? 768 : 960),
    margin: '0 auto'
  }
}))

export const Page = ({ children }) => {
  const classes = useStyles()

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.page}
    >
      {children}
    </motion.main>
  )
}

export const Container = ({ children, background, className, ...rest }) => {
  const classes = useStyles()

  return (
    <section style={{ background }}>
      <div className={clsx(className, classes.container)} {...rest}>
        {children}
      </div>
    </section>
  )
}

// DESC:			simple <div> that restricts line length on large devices
// USAGE:			whenever you need to ensure ~70 characters line length
export const LineLength = ({ narrow, className, children, ...rest }) => {
  const classes = useStyles({ narrow })

  return (
    <div className={clsx(className, classes.lineLength)} {...rest}>
      {children}
    </div>
  )
}
