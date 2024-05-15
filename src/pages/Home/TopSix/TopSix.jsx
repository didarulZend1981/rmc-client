import { useEffect, useState } from "react";
import TopCard from "./TopCard";


const TopSix = () => {
  const [topSix,setTopSix] =useState([]);
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/top-selling-food-items')
    .then(res=>res.json())
    .then(data=>setTopSix(data));
  },[])
  return (
    <div>
      <h2>didar</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
      
    </div>
  );
};

export default TopSix;