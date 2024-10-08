import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Allfood from "../pages/Allfood/Allfood";
import Gallery from "../pages/Gallery/Gallery";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddFoodItem from "../pages/AddFoodItem/AddFoodItem";
import MyAddedFoodItem from "../pages/MyAddedFoodItem/MyAddedFoodItem";
import EditFood from "../pages/EditFood/EditFood";
import SinglePage from "../pages/SinglePage/SinglePage";
import SaleOrder from "../pages/SaleOrder/SaleOrder";
import Purchase from "../pages/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute";
import AddImage from "../pages/Gallery/AddImage";


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
        element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Register></Register>
      },
      {
        path:'/addFoodItem',
        element:<AddFoodItem></AddFoodItem>
      },
      {
        path:'/myAddedFooditem',
        element:<MyAddedFoodItem></MyAddedFoodItem>
      },

      {
        path: '/editfood/:id',
        element:<EditFood></EditFood>,
        
      },
      {
        path: '/single/:id',
        element:<SinglePage></SinglePage>,
        
      },

      {
        path: '/order/:id',
        element:<PrivateRoute><SaleOrder></SaleOrder></PrivateRoute>
        ,
        loader: ({params}) => fetch(`https://restaurant-management-server-roan.vercel.app/foodOrder/${params.id}`)
      },

      {
        path:'/purchase',
        element:<PrivateRoute>
              <Purchase></Purchase>
        </PrivateRoute>
        
      },
      

     


    ]
    
  },
]);

export default router;