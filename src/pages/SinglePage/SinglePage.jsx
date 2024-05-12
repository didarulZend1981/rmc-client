import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";


const SinglePage = () => {

  const {id} = useParams();
  const [product,setProduct]=useState({});
  const {user} = useAuthHook() || {};
  const {_id,Food_Name,Food_Image,Food_Category,quantity,price,Food_Origin,email,name,description} = product;
  useEffect(()=>{
          fetch(`http://localhost:5000/food/${id}`)
          .then(res=>res.json())
          .then(data=>{
            setProduct(data)
            console.log(data);
          })
  },[id])



  return (
    <div>
     

<div className="card lg:card-side bg-base-100 shadow-xl mt-10 mb-10 border border-indigo-[white]">
   <img src={Food_Image} className="w-[300px] h-[300px] p-5 mt-6 ml-6 rounded"/>
  <div className="card-body">
    <h2 className="card-title">Food Name:{Food_Name}</h2>
    <p>Food Category:{Food_Category}</p>
    <p>Price:{price}</p>
    <p>Made By:{name}</p>
                               

                                 {user?.email ? <>{user.email}</>: <>{email} </>}
                                <p></p>
                                <p>Food Origin:{Food_Origin}</p>
                               
                                <p>description:{description}</p>
                                
                        
    <div className="card-actions justify-end">
                             

                              {user?.email ? <>

            

            
{email===user.email ? (
  <button className="btn btn-outline btn-success" disabled>Purchase</button>
  ) 
: (
    <button className="btn btn-outline btn-success">Purchase</button>
  )

} 
</>




: <> 
      <button className="btn btn-outline btn-success">Purchase</button>
  </>
}
                              
          


            
                              
      
   
     
    </div>
  </div>
</div>
    </div>
  );
};

export default SinglePage;