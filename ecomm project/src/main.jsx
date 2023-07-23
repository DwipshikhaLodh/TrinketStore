import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConProvider } from './context/productContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConProvider>
      <App />
    </ConProvider>
  </React.StrictMode>,
)
