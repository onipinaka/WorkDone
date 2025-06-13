import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './components/login/Login'
import ContactForm from './components/ContactUs/ContactForm'
import GetinTouch from './components/ContactUs/GetinTouch'
import ContactUs from './Pages/LandingPage/ContactUs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs/>
  </StrictMode>,
)
