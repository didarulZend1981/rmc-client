import { Link } from "react-router-dom";
import useAuthHook from "../../../providers/useAuthHook";


const Navbar = () => {
  const { user, logOut } = useAuthHook();
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
}
  const navItems =<>
        <li className="uppercase"><Link to="/">Home</Link></li>
        <li className="uppercase"><Link to="/allfood">allfood</Link></li>
        <li className="uppercase"><Link to="/gallery">gallery</Link></li>
       

        {user?.email ? <>

            

            
            <li><button onClick={handleLogOut}>Log out</button></li>
        </>
            : <> 
               <li className="uppercase"><Link to="/login">login</Link></li>
              <li className="uppercase"><Link to="/registration">registration</Link></li> 
              </>
        }
        

       
  </> 
  
 
 
 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img alt="RMC" src="https://i.ibb.co/M27BnxJ/log.png" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
        {user?.email ? 
          <>
          <div tabIndex={0} role="button" className="btn ">
        <div className="w-50 justify-between">
        <a className="flex w-50 gap-4">
            <span className="w-40">My Profile - {user?.displayName}</span>
            <img alt={user?.displayName} src={user?.photoURL} className="w-6 rounded-lg" />
          </a>
         
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] uppercase text-[12px] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li className="uppercase"><a><Link to="/myAddedFooditem">My added food items</Link></a></li>
        <li className="uppercase"><a><Link to="/addFoodItem">Add a food item</Link></a></li>
        <li className="uppercase"><a><Link to="/purchase">My ordered food items</Link></a></li>
        <li className="uppercase"><button onClick={handleLogOut}>Log out</button></li>
      </ul>
          </>
        :
      
        <div className="w-50 justify-between">
       <div className="navbar-end">
    <a className="btn"><Link to="/login">login</Link></a>
  </div>
  </div>
        
        }
        
    </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;