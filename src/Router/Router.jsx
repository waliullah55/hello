import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from './../Pages/Home/Home/Home';
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Chefs from "../Pages/Home/Chefs/Chefs";
import ViewDetails from "../Pages/Shared/ViewDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      },
      {
        path: '/chefs',
        element: <Chefs></Chefs>,
      },
      {
        path: 'viewDetails/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  },
]);

export default router;