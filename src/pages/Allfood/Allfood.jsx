import { useEffect, useState } from "react";
import FoodAll from "../../components/FoodAll/FoodAll";



const Allfood = () => {
 

  return (
    <div>
      

      


      <div className="hero h-[400px] bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/VqF7VHj/Untitled-design-4.png)'}}>
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
         
          <FoodAll></FoodAll>
    </div>
  );
};

export default Allfood;