import { useEffect, useState } from "react";
import TopCard from "./TopCard";
import { Link } from "react-router-dom";


const TopSix = () => {
  const [topSix,setTopSix] =useState([]);
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/top-selling-food-items')
    .then(res=>res.json())
    .then(data=>setTopSix(data));
  },[])
  return (
    <div>
      <div className="text-center mt-10 mb-10">
          <h3 className="text-3xl text-orange-700 font-bold">Top Selling Food</h3>
          
          
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">

        {   topSix?.length>0 &&
            topSix.map(topCa=>
              
                
                
                      <TopCard
                        key={topCa._id}
                        catCard={topCa}
                      
                      >


                      </TopCard>

                      
                  )
          }

           
          
        </div>

        <div className="text-center mt-10 mb-10">
          <h3 className="text-3xl text-sky-800 font-bold uppercase"><Link to="/allfood">MORE DETAILS PAGE CLIK HERE</Link></h3>
          
          
        </div>
      
    </div>
  );
};

export default TopSix;