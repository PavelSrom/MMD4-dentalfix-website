import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: { main: '#52969f' },
    secondary: { main: '#f77e7f' },
    text: {
      primary: '#3c3c3c'
    }
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(', ')
  }
})
