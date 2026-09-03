import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TvShowApp from './TvShowApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TvShowApp />
  </StrictMode>,
)
