import { useEffect, useState } from "react";
import FoodAll from "../../components/FoodAll/FoodAll";



const Allfood = () => {
 

  return (
    <div>
      

      


          <div className="hero h-[400px] bg-base-200">
                <div className="hero-content text-center">
                      <div className="max-w-md">
                            <div className="text-sm breadcrumbs">
                                  <ul>
                                        <li><a>Home</a></li> 
                                        <li><a>All FOOD</a></li> 

                                  </ul>
                            </div>
                      </div>
                </div>
          </div>
         
          <FoodAll></FoodAll>
    </div>
  );
};

export default Allfood;