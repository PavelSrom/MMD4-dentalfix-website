import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: { main: '#52969F' },
    secondary: { main: '#E28079' },
    text: { primary: '#3c3c3c' }
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(', ')
  }
})
