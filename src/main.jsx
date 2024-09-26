import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
// import 'aos/dist/aos.css'; /
import App from './App.jsx'
import './index.css'
AOS.init();



createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StrictMode>
)
