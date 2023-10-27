import { createBrowserRouter } from "react-router-dom"
import Error from "../components/pages/error/Error"
import App from "../components/App"
import Header from "../components/general/header/Header"

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