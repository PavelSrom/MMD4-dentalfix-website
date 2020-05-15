import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({}))

export const Typography = ({ variant: Component, children, ...rest }) => {
  return <Component>{children}</Component>
}
