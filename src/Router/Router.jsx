import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Navber from "../Pages/Shared/Navber/Navber";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: 'navber',
          element: <Navber></Navber>
        }
      ]
    },
  ]);

export default router;