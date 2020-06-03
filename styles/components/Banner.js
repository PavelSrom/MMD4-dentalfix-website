import { makeStyles } from '@material-ui/core/styles'
import banner from '../../assets/bannerHome.jpg'

export default makeStyles(
  theme => ({
    banner: {
      minHeight: 450,
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundPosition: '70% 50%',
      position: 'relative'
    },
    // overlay: {
    //   position: 'absolute',
    //   top: 0,
    //   right: 0,
    //   bottom: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   background: '#333',
    //   opacity: 0.2
    // },
    content: {
      width: '40%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '60%'
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        alignItems: 'center'
      }
    },
    heading: {
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    }
  }),
  { index: 1 }
)
