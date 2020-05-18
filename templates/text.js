import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  headline: {
    textAlign: ({ centered }) => (centered ? 'center' : 'left'),
    color: ({ color }) => (color ? theme.palette[color].main : null),
    fontWeight: ({ bold }) => (bold ? 'bolder' : 400),
    fontSize: ({ size }) => (size === 'large' ? 56 : size === 'small' ? 40 : 48),
    [theme.breakpoints.down('sm')]: {
      fontSize: ({ size }) => (size === 'large' ? 40 : size === 'small' ? 32 : 36)
    }
  },
  subheadline: {
    textAlign: ({ centered }) => (centered ? 'center' : 'left'),
    color: ({ color }) => (color ? theme.palette[color].main : null),
    fontWeight: ({ bold, light }) => (bold ? 'bolder' : light ? 300 : 400),
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 26
    }
  },
  bodyText: {
    textAlign: ({ centered }) => (centered ? 'center' : 'left'),
    color: ({ color }) => (color ? theme.palette[color].main : null),
    fontWeight: ({ bold, bolder }) => (bold ? 'bolder' : bolder ? 400 : 300),
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  }
}))

// DESC:			flexible Headline component used for headings
// USAGE:			section headlings
export const Headline = ({
  variant: Component = 'h1',
  size = 'normal',
  bold,
  color,
  className,
  centered,
  children,
  ...rest
}) => {
  const classes = useStyles({ size, bold, color, centered })

  return (
    <Component className={clsx(className, classes.headline)} {...rest}>
      {children}
    </Component>
  )
}

export const Subheadline = ({
  bold,
  light,
  color,
  className,
  centered,
  children,
  ...rest
}) => {
  const classes = useStyles({ bold, light, color, centered })

  return (
    <p className={clsx(className, classes.subheadline)} {...rest}>
      {children}
    </p>
  )
}

export const BodyText = ({
  bold,
  bolder,
  color,
  className,
  centered,
  children,
  ...rest
}) => {
  const classes = useStyles({ bold, bolder, color, centered })

  return (
    <p className={clsx(className, classes.bodyText)} {...rest}>
      {children}
    </p>
  )
}
