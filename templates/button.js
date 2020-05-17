import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    border: 'none',
    height: 40,
    width: 150,
    fontSize: 20
  }
}))

const Button = ({ children }) => {
  const classes = useStyles()

  return <button className={classes.button}> {children}</button>
}

// DESC:			custom component to navigate between pages
// USAGE:			whenever you wanna navigate between pages, and PROVIDE THE 'component' PROP !!!
export const Link = ({ component: Component, to, className, children, ...rest }) => (
  <NextLink href={to}>
    <a style={{ textDecoration: 'none', color: 'inherit' }}>
      <Component className={className} {...rest}>
        {children}
      </Component>
    </a>
  </NextLink>
)

export default Button
