import { useEffect, useState } from "react";
import FoodAll from "../../components/FoodAll/FoodAll";



const Allfood = () => {
 

  return (
    <div>
      

      


      <div className="hero h-[400px] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co.com/bsRqJBn/all-food.jpg)'}}>
                <div className="hero-content text-center">
                      <div className="max-w-md">
                      <div className="breadcrumbs text-3xl font-extralight text-white">
                                  <ul>
                                        <li className="text-5xl"><a>Home</a></li> 
                                        <li><a>All FOOD</a></li> 
                                        
                                  </ul>
                            </div>
                      </div>
                </div>
          </div>
         <div>
         <div className="text-center mt-20 mb-20">
          <h3 className="text-3xl text-orange-700 font-bold">All Product SHOW</h3>
          <h2 className="text-5xl">List of favoured foods..</h2>
          </div>
         </div>
                   <FoodAll></FoodAll>
    </div>
  );
};

export default Allfood;