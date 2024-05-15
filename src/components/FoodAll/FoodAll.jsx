import { useEffect, useState } from "react";
import FoodCards from "../FoodCards/FoodCards";


const FoodAll = () => {

  const [allFood,setAllFood] =useState([]);
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/food')
    .then(res=>res.json())
    .then(data=>setAllFood(data));
  },[])

  console.log(allFood);

  return (
    <div>
       

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {
            allFood.map(food=>
            
                      <FoodCards
                        key={food._id}
                        foodCard={food}
                      
                      ></FoodCards>
                  )
          }
        </div>
    </div>
  );
};

export default FoodAll;