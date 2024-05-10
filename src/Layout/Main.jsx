import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navber/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
  return (
    <div>
      <div className="h-20 shadow-lg bottom-3">
      <Navbar></Navbar>
      </div>
      
      <div className='min-h-[calc(100vh-160px)]'>
        <Outlet />
      </div>
      <div className="h-20 shadow-lg border-orange-400">
          <Footer></Footer>
      </div>
     
    </div>
  );
};

export default Main;