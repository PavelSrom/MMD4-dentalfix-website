import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  section: {
    background: '#fff',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  imgBox: {
    width: '40%',
    order: ({ imgPosition }) => (imgPosition === 'left' ? 1 : 2),
    [theme.breakpoints.down('md')]: {
      width: '50%' // optional
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  content: {
    width: '60%',
    padding: theme.spacing(8),
    paddingLeft: ({ imgPosition }) => (imgPosition === 'left' ? theme.spacing(8) : '10%'),
    paddingRight: ({ imgPosition }) =>
      imgPosition === 'left' ? '10%' : theme.spacing(8),
    order: ({ imgPosition }) => (imgPosition === 'left' ? 2 : 1),
    [theme.breakpoints.down('md')]: {
      width: '50%', // optional
      padding: theme.spacing(6),
      paddingLeft: ({ imgPosition }) =>
        imgPosition === 'left' ? theme.spacing(2) : '6%',
      paddingRight: ({ imgPosition }) =>
        imgPosition === 'left' ? '6%' : theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px !important`
    }
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
  }
}))
