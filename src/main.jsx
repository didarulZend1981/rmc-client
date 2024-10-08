import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProviders from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
      <React.StrictMode>
          <AuthProviders>
          <RouterProvider router={router} />
          <Toaster />
          </AuthProviders>
          
         
      
        
      </React.StrictMode>
  </div>
  
)