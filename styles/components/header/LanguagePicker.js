import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  icon: {
    fontSize: theme.spacing(4),
    marginLeft: theme.spacing(3),
    cursor: 'pointer'
  },
  navItemWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dropdownDesktop: {
    position: 'absolute',
    top: 70, // header is 70px
    zIndex: 1,
    background: '#f2f2f2',
    marginLeft: theme.spacing(3)
  },
  itemWrapper: {
    padding: theme.spacing(1),
    cursor: 'pointer',
    transition: 'background-color color 350ms ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff'
    }
  }
}))
