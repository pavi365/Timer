import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StopwatchProvider } from './components/stopwatch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StopwatchProvider>
      <App />
    </StopwatchProvider>
  </React.StrictMode>,
)