import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  header: {
    background: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(1)}px ${theme.spacing(8)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    }
  },
  logo: {
    maxWidth: 64,
    maxHeight: 64,
    margin: 0,
    cursor: 'pointer'
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  navItemLink: {
    marginLeft: theme.spacing(3)
  },
  navItemDropdown: {
    marginLeft: theme.spacing(3),
    cursor: 'pointer',
    position: 'relative'
  },
  dropdownDesktop: {
    position: 'absolute',
    top: 55,
    zIndex: 1,
    background: '#f2f2f2',
    width: theme.spacing(28),
    marginLeft: theme.spacing(3),
    padding: theme.spacing(1)
  }
}))
