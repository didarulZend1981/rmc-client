import { useEffect, useState } from "react";
import TopCard from "./TopCard";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";

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
          
          <SectionTitle 
        mainHeader="Top Selling Food"
        classNameMainHeader="text-3xl uppercase text-red-900 font-bold "
         />
          
          
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

        <div className="text-center mt-20 mb-20">
          <h3 className="text-3xl text-red-900 font-bold uppercase"><Link to="/allfood">MORE DETAILS PAGE CLIK HERE</Link></h3>
          
          
        </div>
      
    </div>
  );
};

export default TopSix;