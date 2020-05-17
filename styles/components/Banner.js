import { makeStyles } from '@material-ui/core'
import banner from '../../assets/bannerHome.jpg'

export default makeStyles(theme => ({
  banner: {
    minHeight: 500,
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    width: '100%',
    
  },
  heading: {
    width:'40%',
    paddingTop:'10%',
  },
 
}))