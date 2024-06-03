import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import "./tailwind/style.css"
import "./tailwind/map.css"
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./routers/Router"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Router/>
    <App />
   
    </BrowserRouter>
  </Provider>,
)


