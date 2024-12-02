import { useEffect, useState } from "react";
import CatCard from "./CatCard";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";


const Category = () => {
  const [category,setCategory] =useState([]);
  useEffect(()=>{
    fetch('https://restaurant-management-server-roan.vercel.app/category')
    .then(res=>res.json())
    .then(data=>setCategory(data));
  },[])

  return (
    <div>
     

      <div className="text-center mt-20 mb-20">
        <SectionTitle 
        mainHeader="Our Top Categroy"
        subHeader="Most people like our food very much. Our food is very healthy."
        classNameMainHeader="text-3xl uppercase text-orange-700 font-bold "
        classNameSubHeader="text-gray-600 font-bold  text-center text-sm py-3 px-6"
        />
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {
            category.map(cat=>
              
                 
                
                      <CatCard
                        key={cat._id}
                        catCard={cat}
                      
                      >


                      </CatCard>

                      
                  )
          }
        </div>
    </div>
  );
};

export default Category;