import { createBrowserRouter } from "react-router-dom"
import Header from "../components/general/header/Header"
import Error from "../components/pages/error/Error"
import App from "../components/App"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
])

export default Router