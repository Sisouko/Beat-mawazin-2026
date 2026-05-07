import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FestivalProvider} from './context/FestivalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FestivalProvider>
      <App />
    </FestivalProvider>
  </StrictMode>,
)
