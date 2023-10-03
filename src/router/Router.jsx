import { createBrowserRouter } from "react-router-dom"
import Header from "../components/general/header/Header"
import Error from "../components/pages/error/Error"
import Home from "../components/pages/home/Home"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default Router