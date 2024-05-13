import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import HomeLayout from "./pages/HomeLayout"
import Hotels from "./pages/Hotels"
import Restaruants from "./pages/Restaruants"
import Parks from "./pages/Attractions"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

export default function App() {
  const {userData} = useSelector((store) => store)
  console.log(userData)
  const routest = createBrowserRouter([
    {
      path: "/",
      element: userData ? <HomeLayout /> : <Navigate to="/signup" />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/hotels",
          element: <Hotels />,
        },
        {
          path: "/restaruants",
          element: <Restaruants />,
        },
        {
          path: "/attractions",
          element: <Parks />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ])
  return <RouterProvider router={routest} />
}
