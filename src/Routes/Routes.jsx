import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Allfood from "../pages/Allfood/Allfood";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allfood',
        element:<Allfood></Allfood>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Register></Register>
      },



    ]
    
  },
]);

export default router;