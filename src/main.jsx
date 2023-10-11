import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import "./assets/css/Normalize.css"
import "./assets/fonts/Fonts.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
