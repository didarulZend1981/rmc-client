import { useEffect, useState } from "react";
import useAuthHook from "../../../providers/useAuthHook";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";

const TopCard = ({catCard}) => {
  const {_id,sellingCount}=catCard;
 
  const [product,setProduct]=useState({});
  const {user} = useAuthHook() || {};
  const {Food_Name,Food_Image,Food_Category,quantity,price,Food_Origin,email,name,description} = product;

  useEffect(()=>{
    fetch(`https://restaurant-management-server-roan.vercel.app/food/${_id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      console.log(data);
    })
},[_id])


  return (
    <div>


 <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative  hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
  <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 ">
    <img
      src={Food_Image}
      alt={Food_Name}
      className="h-full w-full object-contain"
    />
  </div>

  <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
    <div className="text-center">
      <h3 className="text-base font-bold text-gray-800">{Food_Name}</h3>
      <h4 className="text-lg text-blue-600 font-bold mt-2">{price}</h4>
    </div>
    <div className="text-center">
      <h3 className="text-base font-bold text-gray-800">{Food_Category}</h3>
      <h4 className="text-lg text-blue-600 font-bold mt-2">{sellingCount}</h4>
    </div>

    <div className="flex justify-center">
         <Link to={`../single/${_id}`}>
                <button type="button" className="btn  
                bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full rounded-b-lg flex items-center justify-center gap-2

                "> <GrView className="text-base" /> Details</button>
          </Link>
    </div>

  </div>
</div>







       
      
    </div>
  );
};

export default TopCard;