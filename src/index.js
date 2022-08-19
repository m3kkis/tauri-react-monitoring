import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
)
