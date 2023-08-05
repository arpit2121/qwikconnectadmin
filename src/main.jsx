import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import store from './store.js'
// import { ThemeProvider } from '@mui/material'
import { darkspacetheme } from './theme/theme.js'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    {/* <GoogleOAuthProvider clientId='802265504166-7q42g3j4pvcs7gsmmr1u70de4n7m79il.apps.googleusercontent.com'> */}
    {/* <ThemeProvider theme={darkspacetheme}> */}
    <ThemeProvider theme={darkspacetheme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    {/* </ThemeProvider> */}
    {/* </GoogleOAuthProvider>  */}
    </Provider>
    
)
