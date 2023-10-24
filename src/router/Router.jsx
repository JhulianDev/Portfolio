import { createBrowserRouter } from "react-router-dom"
import Error from "../components/pages/error/Error"
import App from "../components/App"

const Router = createBrowserRouter([
  {
    path: "/",
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