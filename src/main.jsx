import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Components/Cookie.jsx'
import Login from './Components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Login />
  </StrictMode>,
)
