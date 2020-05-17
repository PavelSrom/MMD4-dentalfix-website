import { makeStyles } from '@material-ui/core'


export default makeStyles(theme => ({
    section: {
        height:'auto',
        backgroundColor: '#f2f2f2',
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        width: '100%'
    },
    one: {
        width: '50%',
        marginRight: '5%'
    },
    two: {
        width: '50%'
    },
    img: {
        width:'100%',
        height:'100%'
    }
}))
