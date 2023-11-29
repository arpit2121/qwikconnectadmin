import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider as ReduxProvider } from "react-redux";
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
    </StrictMode>
);