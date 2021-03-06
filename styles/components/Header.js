import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(
  theme => ({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 90,
      height: 70,
      background: '#f2f2f2',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 ${theme.spacing(8)}px`,
      boxShadow: '0 6px 6px rgba(0,0,0,.2)',
      [theme.breakpoints.down('sm')]: {
        padding: `0 ${theme.spacing(2)}px`
      }
    },
    logo: {
      maxWidth: 64,
      maxHeight: 64,
      alignSelf: 'center',
      margin: 0,
      cursor: 'pointer'
    },
    logoImg: {
      maxWidth: '100%',
      height: 'auto'
    },
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    navItemWrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    navItemLink: {
      marginLeft: theme.spacing(3),
      margin: 'auto 0',
      transition: 'color 350ms ease-in-out',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    navItemDropdown: {
      marginLeft: theme.spacing(3),
      cursor: 'pointer',
      position: 'relative',
      transition: 'color 350ms ease-in-out',
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    dropdownDesktop: {
      position: 'absolute',
      top: 70, // header is 70px
      zIndex: 1,
      background: '#f2f2f2',
      width: theme.spacing(22),
      marginLeft: theme.spacing(3)
    },
    dropdownLinkWrapper: {
      padding: theme.spacing(1),
      cursor: 'pointer',
      transition: 'background-color color 350ms ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
      }
    },
    mobileNav: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
    menuIcon: {
      fontSize: theme.spacing(4)
    }
  }),
  { index: 1 }
)
