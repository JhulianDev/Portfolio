import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import "./assets/css/Normalize.css"
import "./assets/fonts/Fonts.css"
import { LenguageProvider } from './context/LanguageContext.jsx'
import { RefProvider } from './context/RefContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LenguageProvider>
    <RefProvider>
      <RouterProvider router={Router} />
    </RefProvider>
  </LenguageProvider>
)
