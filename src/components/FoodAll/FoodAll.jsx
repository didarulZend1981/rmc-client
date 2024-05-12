import { useEffect, useState } from "react";
import FoodCards from "../FoodCards/FoodCards";


const FoodAll = () => {

  const [allFood,setAllFood] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/food')
    .then(res=>res.json())
    .then(data=>setAllFood(data));
  },[])


  return (
    <div>
       

        <div className="text-center mt-20 mb-20">
          <h3 className="text-3xl text-orange-700 font-bold">Ouer Service</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>the majority hava suffered alteration in some form, by injected humour ,or randomised <br/>works which don't look even slightly beliveable</p>
        </div>
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