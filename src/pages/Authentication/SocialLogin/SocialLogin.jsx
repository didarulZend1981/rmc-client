import { useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../../providers/useAuthHook";
import toast from "react-hot-toast";



const SocialLogin = () => {


  const {googleLogin,FacebookLogin,setLoading} =useAuthHook();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  // const from = location.state?.from?.pathname || "/";
 
  const handleSocialLogin = socialProvider =>{

    socialProvider().then(result=>{
        if(result.user){
          setLoading(false);
          // toast.success('successfully login')
          navigate(from);
          toast.success('successfully login')
         
        }
    })
}


  return (
    <div className="grid grid-cols-2 divide-3 gap-5 mt-5">
     

       <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-primary"> Google</button>


           
     <button onClick={()=>handleSocialLogin(FacebookLogin)} className="btn btn-outline btn-primary"> Facebook</button>
    </div>
  );
};

export default SocialLogin;