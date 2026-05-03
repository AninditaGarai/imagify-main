

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppConstextProvider from './context/AppContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppConstextProvider>
    <App />
    </AppConstextProvider>
    </BrowserRouter>
 
)
