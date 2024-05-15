import { useEffect, useState } from "react";

import { Navigate, useLocation, useParams } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";
import Swal from "sweetalert2";
const EditFood = () => {
  const {id} = useParams();
  const [product,setProduct]=useState({});
  const {user} = useAuthHook() || {};
  const location = useLocation();
  // console.log(product);

 const {_id,Food_Name,Food_Image,Food_Category,quantity,price,Food_Origin,email,name,description} = product;

 const handleAddfood = (e) => {
  e.preventDefault();
  // console.log("didar");
  const Food_Name = e.target.Food_Name.value;
  const Food_Image = e.target.Food_Image.value;
  const Food_Category = e.target.Food_Category.value;
  const quantity = parseFloat(e.target.quantity.value);
  const price = parseFloat(e.target.price.value);
  const Food_Origin = e.target.Food_Origin.value;
  const description = e.target.description.value;
  const email = user.email;
  const name = user.displayName;

  
  const info = { Food_Name,Food_Image,Food_Category,quantity,price,Food_Origin,description,email,name};
  
    // console.log(info)
    fetch(`https://restaurant-management-server-roan.vercel.app/food/${_id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Food Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'thanks',
                  
              })
           
              navigate(location?.state?location.state:'/myAddedFooditem');

          }
      })


 }


  useEffect(()=>{
    fetch(`https://restaurant-management-server-roan.vercel.app/food/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      console.log(data);
    })
  },[id])
  const [category,setCategory] =useState([]);
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/category')
    .then(res=>res.json())
    .then(data=>setCategory(data));
  },[])
 
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Edit Item</h1>
                        <form onSubmit={handleAddfood}>
                        <label className="input input-bordered flex items-center gap-2 mb-4">
                        
         <input type="text" className="grow" placeholder="Food Name" defaultValue={Food_Name} name="Food_Name" />
         
         </label>
        
         <label className="input input-bordered flex items-center gap-2 mb-4">
         
         <input type="text" className="grow" placeholder="Food Image"  defaultValue={Food_Image} name="Food_Image" />
         </label>

         <label className="flex items-center gap-2 mb-4">
         
         
              

            <select  name="Food_Category" className="select select-bordered w-full max-w-xs" defaultValue={Food_Category}>
            
            {
            category.map(option=>(
            <option value={option.category_name}>{option.category_name}

            </option>))

            
            }


            
          </select>
         
         </label>
        <div className="flex justify-between">
        <label className="input input-bordered flex items-center gap-2 mb-4 w-2/5">
         
         <input type="text" className="grow w-full" placeholder="quantity"  name="quantity" defaultValue={quantity} />
         </label>
         <label className="input input-bordered flex items-center gap-2 mb-4 w-2/5">
         
         <input type="text" className="grow w-full" placeholder="price"   defaultValue={price} name="price" />
         </label>

        </div>
         

         <label className="input input-bordered flex items-center gap-2 mb-4">
         
         <input type="text" className="grow" placeholder="Food Origin"  name="Food_Origin" defaultValue={Food_Origin} />
         </label>

         <label className="flex items-center gap-2 mb-4 h-20">
         
         

         <textarea className="textarea textarea-accent w-full" placeholder="description" name="description" defaultValue={description}></textarea>
         </label>

         
          
         
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Edit Item" />
                            </div>
                        </form>
                       
                       </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EditFood;