import { makeStyles } from '@material-ui/core'
import banner from '../../assets/bannerHome.jpg'

export default makeStyles(theme => ({
  banner: {
    minHeight: 500,
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    width: '100%',
    opacity: 0.5
  },
  heading: {
    fontSize: 40,
    width:'40%',
    paddingLeft:'5%',
    paddingTop:'10%',
  },
  cta: {
    paddingLeft: '5%'
  }
}))