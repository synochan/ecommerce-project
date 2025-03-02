import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import   './app/index.css'
import App from './app/App'
import {BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
