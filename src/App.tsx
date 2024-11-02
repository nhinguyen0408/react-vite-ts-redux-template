import { Fragment } from 'react/jsx-runtime'
import './App.css'
import AppDefaultLayout from './layouts/AppDefault.layout'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './../theme-mui.config.ts'

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppDefaultLayout />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
