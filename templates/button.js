import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    border: 'none',
    height: 40,
    width: 150,
    fontSize: 20
  },
  roundedButton: {
    borderRadius: 50,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: ({ background }) =>
      background ? theme.palette[background].main : null,
    color: ({ color }) => (color ? color : '#fff'),
    padding: ({ size }) => {
      if (size === 'normal') return '8px 12px 8px 12px'
      if (size === 'large') return '12px 20px 12px 20px'
    },
    fontSize: ({ size }) => {
      if (size === 'normal') return 20
      if (size === 'large') return 24
    }, // the below stuff is hover transitions and box shadows
    boxShadow: ({ size }) => {
      if (size === 'normal') return '0 2px 4px rgba(0,0,0,.4)'
      if (size === 'large') return '0 4px 8px rgba(0,0,0,.4)'
    },
    transition: 'background-color 350ms ease-in-out',
    '&:hover': {
      backgroundColor: '#F58E86'
    }
  }
}))

const Button = ({ children }) => {
  const classes = useStyles()

  return <button className={classes.button}>{children}</button>
}

export const LinkWrapper = ({ children, style, ...rest }) => (
  <a style={{ ...style, textDecoration: 'none', color: 'inherit' }} {...rest}>
    {children}
  </a>
)

// DESC:			custom component to navigate between pages
// USAGE:			whenever you wanna navigate between pages, and PROVIDE THE 'component' PROP !!!
export const Link = ({
  component: Component,
  to,
  className,
  children,
  target,
  ...rest
}) => (
  <NextLink href={to}>
    <a style={{ textDecoration: 'none', color: 'inherit' }} target={target}>
      <Component className={className} {...rest}>
        {children}
      </Component>
    </a>
  </NextLink>
)

export const RoundedButton = ({
  background,
  color,
  size = 'normal',
  className,
  children,
  ...rest
}) => {
  const classes = useStyles({ background, color, size })

  return (
    <button className={clsx(className, classes.roundedButton)} {...rest}>
      {children}
    </button>
  )
}

export const ButtonLink = ({ to, className, children, target, ...rest }) => {
  const classes = useStyles()

  return (
    <NextLink href={to}>
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        target={target ? target : null}
      >
        <RoundedButton className={clsx(className, classes.roundedButton)} {...rest}>
          {children}
        </RoundedButton>
      </a>
    </NextLink>
  )
}

export default Button
