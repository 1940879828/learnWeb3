import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "./App";
import Home from "./pages/Home.tsx";
import Swr from "./pages/testSwr/index.tsx"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to={'/home'}/>,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "swr",
          element: <Swr />,
        }
      ]
    },
    { path: "*", element: <div>Not Found</div> },
  ],
  { basename: "/" }
)
