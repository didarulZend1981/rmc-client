import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuthHook from "../../../providers/useAuthHook";
import toast from "react-hot-toast";






const Login = () => {
    const {signIn,setLoading} = useAuthHook();

    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
    // console.log(email,password);
    signIn(email, password)
    .then(result => {
        console.log("login tyme",result.user.displayName);
        setLoading(false);
        navigate(location?.state?location.state:'/');
        
        toast.success("Signin Successful")
    })
    .catch(error => {
        toast.error('your email and password should match with the registered email and password If it doesnt match')
            
    })






  }
  return (
    <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                        
         <label className="input input-bordered flex items-center gap-2 mb-4">
         <MdMarkEmailUnread />
         <input type="text" className="grow" placeholder="Email" name="email"/>
         
         </label>
        

         <label className="input input-bordered flex items-center gap-2 mb-4">
         <RiLockPasswordFill />
         <input type="password" className="grow" name="password"
         placeholder="password"
         
         />
          
         </label>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='my-4 text-center'>New  Account? <Link className='text-orange-600 font-bold' to="/registration">Registration</Link> </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;